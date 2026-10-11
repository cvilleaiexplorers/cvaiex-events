// Blue Ridge at dusk: a particle field of the ridgelines west of Charlottesville.
// Stylized from the look of the real skyline, not surveyed terrain.
// Coordinates are in viewport-height units: x runs 0..aspect, y runs 0 (bottom)..1 (top).

(() => {
  const canvas = document.getElementById("field");
  if (!canvas) return;

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const small = () => innerWidth < 760;

  const LAYERS = 6;
  const SUN = LAYERS;       // layer index for the dusk sun
  const STARS = LAYERS + 1; // layer index for the first stars

  // Shared terrain, mirrored in GLSL below.
  const ridgeJS = (x, d, o, pan) => {
    const w = x * (2.4 - d * 1.1) + pan * (0.12 + d * 0.88) + o;
    const n = 0.55 * Math.sin(w) + 0.25 * Math.sin(w * 2.3 + o * 1.7) +
              0.12 * Math.sin(w * 5.1 + o * 0.6) + 0.08 * Math.sin(w * 9.7 + o * 2.3);
    const s = Math.min(1.1, Math.max(0.6, state.top / 0.45));
    return (state.top - d * state.top * 0.58) + (0.055 + d * 0.1) * s * n;
  };
  const layerOffset = (l) => l * 1.913 + 0.7;

  const state = {
    time: 0, pan: 0, panTarget: 0,
    intensity: 0, intensityTarget: 1,
    sunX: 1.2, sunSink: 0, sunSinkTarget: 0,
    mouse: [-10, -10], mouseTarget: [-10, -10], mouseStrength: 0, mouseStrengthTarget: 0,
    intro: 0,
    top: 0.5,
    sunExtra: 0,
  };

  function tbaSink() {
    const box = document.getElementById("next-meetup");
    // resting on the ridge for a posted date; half-set while the date is TBA
    return box && box.dataset.state === "tba" ? 0.004 : -0.022;
  }

  // On wide screens the far crest settles just below the About block, so text never sits in the ridges.
  // Stacked phones keep a higher horizon and let the date ride over it.
  function measureHorizon() {
    const about = document.querySelector(".hero__about");
    if (innerWidth <= 860 || !about) { state.top = 0.5; return; }
    const h = canvas.clientHeight || innerHeight;
    const bottom = about.getBoundingClientRect().bottom + scrollY + 32;
    state.top = Math.min(0.42, Math.max(0.27, 1 - bottom / h - 0.055));
  }

  function measureSun() {
    measureHorizon();
    const box = document.getElementById("next-meetup");
    const h = canvas.clientHeight || innerHeight;
    if (!box) { state.sunX = (innerWidth / h) * 0.75; return; }
    const r = box.getBoundingClientRect();
    if (innerWidth <= 860) {
      // stacked: right of the date or TBA text, never over it
      const val = box.querySelector(box.dataset.state === "tba" ? ".next__tba" : ".next__date");
      const textRight = val ? val.getBoundingClientRect().right : 0;
      const rad = 0.065 * h;
      state.sunX = Math.min(innerWidth - rad * 0.4, Math.max(innerWidth * 0.7, textRight + rad + 10)) / h;
      state.sunExtra = 0;
      return;
    }
    // Walk the far ridge and set the sun down at the clear spot nearest the preferred one:
    // the open sky between the About block and the date, else beneath the date.
    const about = document.querySelector(".hero__about");
    const docRect = (el) => { const b = el.getBoundingClientRect(); return { l: b.left - 16, r: b.right + 16, t: b.top + scrollY - 16, b: b.bottom + scrollY + 16 }; };
    const blocks = [docRect(box)].concat(about ? [docRect(about)] : []);
    const aboutRight = about ? about.getBoundingClientRect().right : 0;
    const gap = r.left - aboutRight;
    const preferred = gap >= 180 ? aboutRight + gap * 0.5 : r.left + r.width * 0.5;
    const radius = 0.065 * h;
    const overlap = (x, sink) => {
      const cy = ridgeJS(x / h, 0, 0.7, 0) - sink;
      const top = h * (1 - cy) - radius * 0.8, bottom = h * (1 - cy);
      let hit = 0;
      for (const k of blocks) {
        const w = Math.min(x + radius, k.r) - Math.max(x - radius, k.l);
        const v = Math.min(bottom, k.b) - Math.max(top, k.t);
        if (w > 0 && v > 0) hit += w * v;
      }
      return hit;
    };
    // When no spot on the ridge is clear (short, wide screens), let the sun set a little lower until one is.
    state.sunExtra = 0;
    for (const extra of [0, 0.015, 0.03, 0.045, 0.06, 0.08]) {
      let best = null, bestDist = Infinity;
      for (let x = innerWidth * 0.3; x <= innerWidth - radius - 24; x += 8) {
        if (overlap(x, tbaSink() + extra) === 0 && Math.abs(x - preferred) < bestDist) { bestDist = Math.abs(x - preferred); best = x; }
      }
      if (best !== null) { state.sunX = best / h; state.sunExtra = extra; return; }
    }
    state.sunX = preferred / h;
    state.sunExtra = 0.08;
  }

  // Hero text blocks the field thins behind, in field units (x0, y0, x1, y1), y up.
  const clearTargets = () => [document.querySelector(".hero__about"), document.getElementById("next-meetup")];
  const clears = new Float32Array(8);
  function measureClears() {
    const h = canvas.clientHeight || innerHeight;
    const pad = 14;
    clearTargets().forEach((el, i) => {
      if (!el) { clears.set([-9, -9, -9, -9], i * 4); return; }
      const r = el.getBoundingClientRect();
      clears.set([(r.left < 120 ? -1 : r.left - pad) / h, (h - r.bottom - pad) / h, (r.right + pad) / h, (h - r.top + pad) / h], i * 4);
    });
  }

  function readScroll() {
    const vh = innerHeight;
    const y = scrollY;
    const max = Math.max(1, document.documentElement.scrollHeight - vh);
    const toBottom = document.documentElement.scrollHeight - (y + vh);
    const leaving = Math.min(1, y / (vh * 0.8));
    const arriving = Math.max(0, Math.min(1, 1 - toBottom / vh));
    state.intensityTarget = 1 - 0.6 * leaving + 0.6 * arriving;
    state.panTarget = reduceMotion.matches ? 0 : (y / vh) * 0.55;
    state.sunSinkTarget = tbaSink() + state.sunExtra + (y / max) * 0.11;
  }

  // ---------- WebGL ----------
  const gl = canvas.getContext("webgl", { alpha: true, antialias: false, premultipliedAlpha: true, powerPreference: "low-power" });

  const VERT = `
    attribute vec4 a_seed;
    attribute float a_layer;
    uniform float u_feather, u_top, u_aspect, u_time, u_pan, u_intensity, u_dpr, u_size, u_sunX, u_sunSink, u_mouseStrength, u_layers, u_intro;
    uniform vec2 u_mouse;
    uniform vec4 u_clear[2];
    varying vec3 v_color;
    varying float v_alpha;

    float ridge(float x, float d, float o) {
      float w = x * (2.4 - d * 1.1) + u_pan * (0.12 + d * 0.88) + o;
      float n = 0.55 * sin(w) + 0.25 * sin(w * 2.3 + o * 1.7) + 0.12 * sin(w * 5.1 + o * 0.6) + 0.08 * sin(w * 9.7 + o * 2.3);
      float s = clamp(u_top / 0.45, 0.6, 1.1);
      return (u_top - d * u_top * 0.58) + (0.055 + d * 0.1) * s * n;
    }

    void main() {
      vec3 hazeFar = vec3(0.66, 0.75, 0.93);
      vec3 hazeNear = vec3(0.29, 0.42, 0.80);
      vec3 ember = vec3(1.0, 0.42, 0.22);
      float sunY = ridge(u_sunX, 0.0, 0.7) - u_sunSink;
      vec2 p;
      vec3 col;
      float alpha;
      float size;

      if (a_layer > u_layers + 0.5) {
        // first stars
        p = vec2(a_seed.x * u_aspect, 0.64 + a_seed.y * 0.36);
        float tw = 0.5 + 0.5 * sin(u_time * (0.5 + a_seed.z) + a_seed.w * 6.2832);
        col = vec3(0.86, 0.9, 1.0);
        alpha = (0.05 + 0.2 * tw) * a_seed.z * u_intro;
        size = 1.3;
      } else if (a_layer > u_layers - 0.5) {
        // the sun, resting on the far ridge
        float ang = a_seed.x * 6.2832;
        float core = step(a_seed.z, 0.5);
        float rad = mix(0.04 + pow(a_seed.y, 1.4) * 0.4, sqrt(a_seed.y) * 0.062, core);
        p = vec2(u_sunX, sunY) + vec2(cos(ang), sin(ang) * 0.75) * rad;
        p.y += 0.002 * sin(u_time * 0.7 + a_seed.w * 6.2832);
        float hidden = step(p.y, ridge(p.x, 0.0, 0.7));
        col = mix(ember, vec3(1.0, 0.62, 0.42), core * (1.0 - a_seed.y));
        alpha = mix(0.16 * (1.0 - rad / 0.45), 0.85 * (1.0 - 0.55 * a_seed.y), core) * (1.0 - hidden) * u_intro;
        size = mix(1.5, 2.0, core);
      } else {
        // ridgelines, far (d = 0) to near (d = 1); haze thins below each crest
        float d = a_layer / (u_layers - 1.0);
        float o = a_layer * 1.913 + 0.7;
        float x0 = fract(a_seed.x - u_time * 0.0035 * (0.4 + d));
        p.x = x0 * (u_aspect + 0.3) - 0.15;
        float depth = pow(a_seed.y, 3.2);
        float spread = 0.03 + d * 0.22;
        float settle = (1.0 - u_intro) * (0.18 + 0.25 * a_seed.w) * (1.0 - 0.5 * d);
        p.y = ridge(p.x, d, o) - depth * spread - settle;
        p.y += 0.003 * sin(u_time * 0.5 + a_seed.w * 6.2832 + p.x * 6.0);
        float crest = 1.0 - smoothstep(0.0, 0.25, depth);
        col = mix(hazeFar, hazeNear, d);
        col = mix(col, vec3(0.88, 0.92, 1.0), crest * 0.5 * (1.0 - d * 0.4));
        float dx = p.x - u_sunX;
        float dy = p.y - sunY;
        float sunI = exp(-(dx * dx * 7.0 + dy * dy * 18.0)) * pow(1.0 - d, 1.2);
        col = mix(col, ember, clamp(sunI * 1.3, 0.0, 0.85));
        alpha = mix(0.42, 0.8, d) * (0.3 + 0.7 * crest) * (1.0 - 0.55 * depth) * (0.35 + 0.65 * u_intro);
        size = mix(0.9, 1.9, d) * (0.7 + a_seed.z * 0.9);
      }

      // the haze thins behind hero text
      for (int i = 0; i < 2; i++) {
        vec4 r = u_clear[i];
        // wide, soft sides so the thinning reads as haze, not a cut-out
        float inside = smoothstep(-u_feather, 0.04, p.x - r.x) * smoothstep(-u_feather, 0.04, r.z - p.x)
                     * smoothstep(-0.07, 0.02, p.y - r.y) * smoothstep(-0.07, 0.02, r.w - p.y);
        alpha *= 1.0 - 0.8 * inside;
      }

      // particles part around the pointer
      vec2 v = p - u_mouse;
      float f = u_mouseStrength * exp(-dot(v, v) / 0.01);
      p += normalize(v + vec2(1e-5)) * f * 0.05;

      v_color = col;
      v_alpha = alpha * u_intensity;
      gl_Position = vec4(p.x / u_aspect * 2.0 - 1.0, p.y * 2.0 - 1.0, 0.0, 1.0);
      gl_PointSize = size * u_dpr * u_size;
    }
  `;

  const FRAG = `
    precision mediump float;
    varying vec3 v_color;
    varying float v_alpha;
    void main() {
      float r = length(gl_PointCoord - 0.5);
      float a = (1.0 - smoothstep(0.08, 0.5, r)) * v_alpha;
      gl_FragColor = vec4(v_color * a, a);
    }
  `;

  function compile(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
    return s;
  }

  function buildParticles() {
    const perLayer = small() ? 3400 : 9500;
    const counts = [];
    for (let l = 0; l < LAYERS; l++) counts.push(Math.round(perLayer * (0.6 + 0.8 * (l / (LAYERS - 1)))));
    counts.push(small() ? 2600 : 5200); // sun
    counts.push(small() ? 110 : 240);   // stars
    const total = counts.reduce((a, b) => a + b, 0);
    const data = new Float32Array(total * 5);
    let i = 0;
    counts.forEach((n, layer) => {
      for (let k = 0; k < n; k++) {
        data[i++] = Math.random();
        data[i++] = Math.random();
        data[i++] = Math.random();
        data[i++] = Math.random();
        data[i++] = layer;
      }
    });
    return { data, total };
  }

  function startGL() {
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    gl.useProgram(prog);

    const u = {};
    ["u_feather", "u_top", "u_aspect", "u_time", "u_pan", "u_intensity", "u_dpr", "u_size", "u_sunX", "u_sunSink",
     "u_mouseStrength", "u_layers", "u_intro", "u_mouse", "u_clear"].forEach((n) => (u[n] = gl.getUniformLocation(prog, n)));

    const buf = gl.createBuffer();
    let count = 0;
    let builtSmall = null;
    function upload() {
      const { data, total } = buildParticles();
      gl.bindBuffer(gl.ARRAY_BUFFER, buf);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const aSeed = gl.getAttribLocation(prog, "a_seed");
      const aLayer = gl.getAttribLocation(prog, "a_layer");
      gl.enableVertexAttribArray(aSeed);
      gl.vertexAttribPointer(aSeed, 4, gl.FLOAT, false, 20, 0);
      gl.enableVertexAttribArray(aLayer);
      gl.vertexAttribPointer(aLayer, 1, gl.FLOAT, false, 20, 16);
      count = total;
      builtSmall = small();
    }
    upload();

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE);
    gl.clearColor(0, 0, 0, 0);

    let dpr = 1;
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, small() ? 1.75 : 2);
      const w = canvas.clientWidth, h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (builtSmall !== small()) upload();
      measureSun();
    }

    function draw() {
      const h = canvas.clientHeight;
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(u.u_top, state.top);
      gl.uniform1f(u.u_feather, innerWidth < 640 ? 50 / h : 0.22);
      gl.uniform1f(u.u_aspect, canvas.clientWidth / h);
      gl.uniform1f(u.u_time, state.time);
      gl.uniform1f(u.u_pan, state.pan);
      gl.uniform1f(u.u_intensity, state.intensity);
      gl.uniform1f(u.u_dpr, dpr);
      gl.uniform1f(u.u_size, small() ? 1.15 : 1);
      gl.uniform1f(u.u_sunX, state.sunX);
      gl.uniform1f(u.u_sunSink, state.sunSink);
      gl.uniform1f(u.u_mouseStrength, state.mouseStrength);
      gl.uniform1f(u.u_layers, LAYERS);
      gl.uniform1f(u.u_intro, state.intro);
      gl.uniform2f(u.u_mouse, state.mouse[0], state.mouse[1]);
      measureClears();
      gl.uniform4fv(u.u_clear, clears);
      gl.drawArrays(gl.POINTS, 0, count);
    }

    return { resize, draw };
  }

  // ---------- 2D fallback: one still frame ----------
  function startStill() {
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    let dpr = 1;
    function resize() {
      dpr = Math.min(devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      measureSun();
    }
    function draw() {
      const W = canvas.width, H = canvas.height, aspect = W / H;
      ctx.clearRect(0, 0, W, H);
      ctx.globalCompositeOperation = "lighter";
      const px = (x, y) => [(x / aspect) * W, (1 - y) * H];
      const sunY = ridgeJS(state.sunX, 0, 0.7, 0) - state.sunSink;
      for (let l = 0; l < LAYERS; l++) {
        const d = l / (LAYERS - 1), o = layerOffset(l);
        const n = small() ? 2200 : 6000;
        for (let k = 0; k < n; k++) {
          const x = Math.random() * (aspect + 0.3) - 0.15;
          const depth = Math.pow(Math.random(), 3.2);
          const y = ridgeJS(x, d, o, 0) - depth * (0.03 + d * 0.22);
          const crest = 1 - Math.min(1, depth / 0.25);
          const dx = x - state.sunX, dy = y - sunY;
          const sunI = Math.exp(-(dx * dx * 7 + dy * dy * 18)) * Math.pow(1 - d, 1.2);
          const a = (0.42 + 0.38 * d) * (0.3 + 0.7 * crest) * (1 - 0.55 * depth) * state.intensity;
          const r = Math.round(sunI > 0.3 ? 255 : 170 - 95 * d), g = Math.round(sunI > 0.3 ? 110 : 190 - 83 * d), b = Math.round(sunI > 0.3 ? 60 : 238 - 34 * d);
          const [X, Y] = px(x, y);
          ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
          const s = (0.9 + d) * dpr;
          ctx.fillRect(X, Y, s, s);
        }
      }
      for (let k = 0; k < 900; k++) {
        const ang = Math.random() * Math.PI * 2, rad = Math.sqrt(Math.random()) * 0.062;
        const x = state.sunX + Math.cos(ang) * rad, y = sunY + Math.sin(ang) * rad * 0.75;
        if (y < ridgeJS(x, 0, 0.7, 0)) continue;
        const [X, Y] = px(x, y);
        ctx.fillStyle = `rgba(255,108,56,${(0.5 * state.intensity).toFixed(3)})`;
        ctx.fillRect(X, Y, 1.6 * dpr, 1.6 * dpr);
      }
    }
    return { resize, draw };
  }

  let renderer = null;
  let animated = false;
  if (gl) {
    try { renderer = startGL(); animated = true; } catch (e) { console.warn("Field: WebGL failed, drawing a still frame.", e); }
  }
  if (!renderer) renderer = startStill();
  if (!renderer) return;

  // ---------- Loop ----------
  const still = () => reduceMotion.matches || !animated;
  let last = performance.now();
  let raf = 0;
  let stillQueued = false;

  function settleForStill() {
    state.time = 40;
    state.intro = 1;
    state.pan = state.panTarget;
    state.intensity = state.intensityTarget;
    state.sunSink = state.sunSinkTarget;
    state.mouseStrength = 0;
  }

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    state.time += dt;
    state.intro = Math.min(1, state.intro + dt / 2.6);
    const k = 1 - Math.pow(0.001, dt); // frame-rate independent easing
    state.pan += (state.panTarget - state.pan) * k * 0.9;
    state.intensity += (state.intensityTarget - state.intensity) * k * 0.7;
    state.sunSink += (state.sunSinkTarget - state.sunSink) * k * 0.6;
    state.mouse[0] += (state.mouseTarget[0] - state.mouse[0]) * k;
    state.mouse[1] += (state.mouseTarget[1] - state.mouse[1]) * k;
    state.mouseStrength += (state.mouseStrengthTarget - state.mouseStrength) * k * 0.5;
    renderer.draw();
    raf = requestAnimationFrame(frame);
  }

  function drawStill() {
    if (stillQueued) return;
    stillQueued = true;
    requestAnimationFrame(() => { stillQueued = false; settleForStill(); renderer.draw(); });
  }

  function start() {
    cancelAnimationFrame(raf);
    if (still()) { drawStill(); return; }
    last = performance.now();
    raf = requestAnimationFrame(frame);
  }

  renderer.resize();
  readScroll();
  if (still()) state.intensity = state.intensityTarget;
  start();

  addEventListener("resize", () => { renderer.resize(); readScroll(); if (still()) drawStill(); });
  addEventListener("scroll", () => { readScroll(); if (still()) drawStill(); }, { passive: true });
  reduceMotion.addEventListener("change", start);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(raf); else start();
  });
  if (document.fonts) document.fonts.ready.then(() => { measureSun(); readScroll(); if (still()) drawStill(); });

  const toField = (e) => {
    const h = canvas.clientHeight;
    state.mouseTarget = [e.clientX / h, (h - e.clientY) / h];
  };
  addEventListener("pointermove", (e) => {
    if (still()) return;
    toField(e);
    if (e.pointerType === "mouse" || e.buttons) state.mouseStrengthTarget = 1;
  }, { passive: true });
  addEventListener("pointerdown", (e) => { if (!still()) { toField(e); state.mouse = [...state.mouseTarget]; state.mouseStrengthTarget = 1; } }, { passive: true });
  addEventListener("pointerup", (e) => { if (e.pointerType !== "mouse") state.mouseStrengthTarget = 0; }, { passive: true });
  document.addEventListener("mouseout", (e) => { if (!e.relatedTarget) state.mouseStrengthTarget = 0; });
})();
