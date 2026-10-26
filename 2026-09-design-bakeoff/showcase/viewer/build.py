# /// script
# requires-python = ">=3.11"
# dependencies = ["pyyaml", "markdown", "pillow"]
# ///
"""Build the showcase viewer: index.html, one page per design, and a journey
page for each design with working files.

Reads the team cards' front matter (teams/*/README.md) and viewer/copy.yaml,
writes static HTML into the showcase folder and web-sized images into
assets/img/. Run from anywhere:  uv run viewer/build.py
"""
import html
import json
import re
from pathlib import Path

import markdown
import yaml
from PIL import Image

VIEWER = Path(__file__).resolve().parent
SHOWCASE = VIEWER.parent
IMG_OUT = SHOWCASE / "assets" / "img"
FONTS = "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400;500;600&display=swap"

COPY = yaml.safe_load((VIEWER / "copy.yaml").read_text(encoding="utf-8"))
SITE = COPY["site"]
esc = html.escape


# ---------- data ----------

def front_matter(path):
    text = path.read_text(encoding="utf-8")
    _, fm, _ = text.split("---\n", 2)
    return yaml.safe_load(fm)


def load_designs():
    designs = []
    for card in sorted(SHOWCASE.glob("teams/*/README.md")):
        team = front_matter(card)
        for d in team["designs"]:
            slug = d["slug"]
            folder = card.parent / "designs" / slug
            extra = COPY["designs"][slug]
            designs.append({
                **extra,
                "slug": slug,
                "title": d["title"],
                "lead": team["lead"],
                "url": d.get("url"),
                "source": d.get("source"),
                "folder": folder,
                "rel": folder.relative_to(SHOWCASE).as_posix(),
                "has_journey": "journey" in extra and (folder / "journey").is_dir(),
            })
    return sorted(designs, key=lambda d: d["title"])


def site_href(d):
    return d["url"] or resolve("site/", d)


def resolve(link, d):
    """Map a link written relative to a design's folder to one that works from the showcase root."""
    if re.match(r"[a-z]+:", link) or link.startswith("#"):
        return link
    if link.endswith(".md"):
        return f'{SITE["repo"]}{d["rel"]}/{link}'
    if link == "site/":
        link += d.get("site_query", "")
    return f'{d["rel"]}/{link}'


VIEWER_PAGE = re.compile(r"[a-z0-9-]+\.html")


def ext_attrs(href):
    """Anything that leaves the viewer opens in a new tab, so the viewer stays open."""
    if VIEWER_PAGE.fullmatch(href) or href.startswith("#"):
        return ""
    return ' target="_blank" rel="noopener"'


# ---------- text ----------

def md(text, d=None):
    out = markdown.markdown(text.strip())
    if d is not None:
        out = re.sub(r'href="([^"]+)"', lambda m: f'href="{esc(resolve(m[1], d))}"{ext_attrs(resolve(m[1], d))}', out)
    return out


def md_inline(text, d=None):
    return re.sub(r"^<p>(.*)</p>$", r"\1", md(text, d), flags=re.S)


def tools_html(tools):
    links = COPY["tool_links"]
    return ", ".join(
        f'<a href="{links[t]}" target="_blank" rel="noopener">{esc(t)}</a>' if t in links else esc(t)
        for t in tools
    )


# ---------- images ----------

WRITTEN = set()  # images this run uses; anything else in IMG_OUT is stale

def web_image(src, out_rel, max_w=1600):
    """Write a web-sized WebP copy of src; return (url, width, height)."""
    out = IMG_OUT / out_rel
    WRITTEN.add(out)
    if not out.exists() or out.stat().st_mtime < src.stat().st_mtime:
        out.parent.mkdir(parents=True, exist_ok=True)
        im = Image.open(src).convert("RGB")
        if im.width > max_w:
            im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)
        im.save(out, "WEBP", quality=80, method=6)
    with Image.open(out) as im:
        w, h = im.size
    return f"assets/img/{out_rel}", w, h


def cover(d):
    return web_image(d["folder"] / "cover.png", f'{d["slug"]}/cover.webp', 1440)


# ---------- page parts ----------

def page(title, description, body):
    return f"""<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{esc(title)}</title>
<meta name="description" content="{esc(description)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="{FONTS}" rel="stylesheet">
<link href="assets/viewer.css" rel="stylesheet">
</head>
<body>
<div class="layout">
  <main>
{body}
  </main>
{rail()}
</div>
<div class="mbar"><span>Tell us what to keep from each design</span><a class="btn" href="{SITE["feedback_url"]}" target="_blank" rel="noopener">Feedback</a></div>
</body>
</html>
"""


def rail():
    url = SITE["feedback_url"]
    return f"""  <aside class="rail" id="feedback">
    <div class="panel">
      <h2>{esc(SITE["feedback_title"])}</h2>
      <p>{md_inline(SITE["feedback_text"])}</p>
      <div class="qr"><img src="assets/feedback-qr.svg" alt="QR code for the feedback form" width="29" height="29"></div>
      <a class="btn" href="{url}" target="_blank" rel="noopener">Give feedback</a>
      <p class="url">{esc(url.removeprefix("https://"))}</p>
    </div>
  </aside>"""


def top(back=None):
    meta = f'<span><b>Cville AI Explorers</b></span><span>AI Design Bake-Off</span><span>{esc(SITE["event"])}</span>'
    if back:
        label, href = back
        return f'    <nav class="top"><a class="back" href="{href}">← {esc(label)}</a>{meta}</nav>'
    return f'    <div class="top">{meta}</div>'


def open_btn(d):
    href = site_href(d)
    return f'<a class="btn" href="{esc(href)}"{ext_attrs(href)}>Open the site ↗</a>'


def label(d, source=False):
    rows = [("Led by", esc(d["lead"])), ("Made with", tools_html(d["tools"]))]
    if source and d["source"]:
        repo = "/".join(d["source"].split("/")[3:5])
        rows.append(("Source", f'<a href="{esc(d["source"])}" target="_blank" rel="noopener">{esc(repo)}</a>'))
    return '<dl class="label">' + "".join(f"<dt>{k}</dt><dd>{v}</dd>" for k, v in rows) + "</dl>"


# ---------- pages ----------

def index_page(designs):
    entries = []
    for d in designs:
        src, w, h = cover(d)
        href = site_href(d)
        steps = "".join(f'<li>{md_inline(s["label"])}</li>' for s in d["steps"])
        strip = journey_strip(d) if d["has_journey"] else ""
        entries.append(f"""    <article class="entry">
      <h2><a href="{d["slug"]}.html">{esc(d["title"])}</a></h2>
      <div class="row">
        <a class="shot" href="{esc(href)}"{ext_attrs(href)} aria-label="Open {esc(d["title"])}"><img src="{src}" alt="" width="{w}" height="{h}" loading="lazy"></a>
        <div>
          {label(d)}
          <div class="path">
            <h3>How they got there</h3>
            <ol class="steps">{steps}</ol>
          </div>
          <div class="actions">
            {open_btn(d)}
            <a class="txt" href="{d["slug"]}.html">The full story</a>
          </div>
        </div>
      </div>
      {strip}
    </article>""")
    body = f"""{top()}
    <header class="masthead">
      <h1>{esc(SITE["title"])}</h1>
      <p class="lede">{md_inline(SITE["lede"])}</p>
    </header>
{chr(10).join(entries)}"""
    return page(f'{SITE["title"]} · Cville AI Explorers', "The six designs from the Cville AI Explorers AI Design Bake-Off, and how each team made them.", body)


def prev_next(designs, i, suffix=""):
    p, n = designs[i - 1], designs[(i + 1) % len(designs)]
    return f"""    <nav class="pn">
      <a href="{p["slug"]}.html"><small>← Previous</small><b>{esc(p["title"])}</b></a>
      <a class="next" href="{n["slug"]}.html"><small>Next →</small><b>{esc(n["title"])}</b></a>
    </nav>"""


def design_page(designs, i):
    d = designs[i]
    src, w, h = cover(d)
    href = site_href(d)
    steps = "".join(f'<li><b>{md_inline(s["label"])}</b><span>{md_inline(s["text"], d)}</span></li>' for s in d["steps"])
    swatches = "".join(f'<li><i style="background:{hx}"></i><b>{esc(name)}</b><small>{hx}</small></li>' for name, hx in d["palette"])
    elements = "".join(f'<dt>{esc(e["name"])}</dt><dd>{md_inline(e["text"], d)}</dd>' for e in d["elements"])
    notes = [
        f'<a class="txt" href="{SITE["repo"]}{d["rel"]}/process-narrative.md" target="_blank" rel="noopener">Process narrative ↗</a>',
        f'<a class="txt" href="{SITE["repo"]}{d["rel"]}/design-brief.md" target="_blank" rel="noopener">Design brief ↗</a>',
    ]
    if d["source"]:
        notes.append(f'<a class="txt" href="{esc(d["source"])}" target="_blank" rel="noopener">Source code ↗</a>')
    journey = f'<a class="btn alt" href="{d["slug"]}-journey.html">See the journey →</a>' if d["has_journey"] else ""
    strip = journey_strip(d) if d["has_journey"] else ""
    body = f"""{top(("All six designs", "index.html"))}
    <header class="dhead">
      <h1>{esc(d["title"])}</h1>
      <p class="idea">{md_inline(d["idea"], d)}</p>
    </header>
    <div class="hero">
      <a class="shot" href="{esc(href)}"{ext_attrs(href)} aria-label="Open {esc(d["title"])}"><img src="{src}" alt="The first screen of {esc(d["title"])}" width="{w}" height="{h}"></a>
      <div>
        {label(d, source=True)}
        <div class="actions">
          {open_btn(d)}
          {journey}
        </div>
      </div>
    </div>
    <section class="part">
      <h2>How they got there</h2>
      <ol class="steps long">{steps}</ol>
      {strip}
    </section>
    <section class="part">
      <h2>Elements to look at</h2>
      <ul class="swatches" aria-label="Palette">{swatches}</ul>
      <dl class="elements">{elements}</dl>
    </section>
    <section class="part">
      <h2>The full notes</h2>
      <div class="notes">{"".join(notes)}</div>
    </section>
{prev_next(designs, i)}"""
    return page(f'{d["title"]} · Design Bake-Off', f'{d["title"]}: how it was made, and what to look at.', body)


def figure_src(f, d):
    return VIEWER / "captures" / f["capture"] if "capture" in f else d["folder"] / f["src"]


def journey_strip(d):
    """A row of the journey's own pictures that leads to the journey page."""
    figs = [f for s in d["journey"]["sections"] for f in s.get("figures", [])]
    thumbs = []
    for name in d["journey"]["teaser"]:
        f = next(f for f in figs if f.get("src", f.get("capture", "")).endswith(name))
        src = figure_src(f, d)
        url, w, h = web_image(src, f'{d["slug"]}/teaser-{src.stem}.webp', 640)
        thumbs.append(f'<img src="{url}" alt="" width="{w}" height="{h}" loading="lazy">')
    return f"""<a class="jstrip" href="{d["slug"]}-journey.html">
          <span class="jthumbs">{"".join(thumbs)}</span>
          <span class="jlabel"><b>See the journey →</b><small>{md_inline(d["journey"]["teaser_line"])}</small></span>
        </a>"""


def figure(f, d, n):
    src = figure_src(f, d)
    url, w, h = web_image(src, f'{d["slug"]}/journey-{n:02d}-{src.stem}.webp', 780 if f.get("phone") else 1600)
    link = resolve(f["link"], d) if "link" in f else (f'{d["rel"]}/{f["src"]}' if "src" in f else url)
    cls = ' class="phone"' if f.get("phone") else ""
    return (f'<figure{cls}><a href="{esc(link)}"{ext_attrs(link)}><img src="{url}" alt="{esc(f["caption"])}" '
            f'width="{w}" height="{h}" loading="lazy"></a><figcaption>{md_inline(f["caption"], d)}</figcaption></figure>')


def direction_cards(d):
    """Impeccable's direction round, from the options file it wrote."""
    opts = json.loads((d["folder"] / "journey" / "direction-round-options.json").read_text(encoding="utf-8"))["options"]
    tags = {"assigned": "The roll", "model-pick": "Impeccable's pick", "challenger-shader": "Challenger · adopted"}
    cards = []
    for o in opts:
        chips = "".join(f'<i style="background:{c}"></i>' for c in o["palette"])
        chosen = " chosen" if o["id"] == "challenger-shader" else ""
        cards.append(f'<div class="card{chosen}"><span class="tag">{tags.get(o["id"], "Challenger")}</span>'
                     f'<h3>{esc(o["label"])}</h3><p>{esc(o["thesis"])}</p><div class="chips">{chips}</div></div>')
    return f'<div class="cards">{"".join(cards)}</div>'


def journey_page(designs, i):
    d = designs[i]
    j = d["journey"]
    parts, n = [], 0
    for s in j["sections"]:
        figs = ""
        if s.get("figures"):
            items = []
            for f in s["figures"]:
                n += 1
                items.append(figure(f, d, n))
            figs = f'<div class="figs {s.get("layout", "")}">{"".join(items)}</div>'
        cards = direction_cards(d) if s.get("cards") == "direction-round" else ""
        parts.append(f"""    <section class="part">
      <h2>{md_inline(s["title"])}</h2>
      <div class="note">{md(s["text"], d)}</div>
      {figs}{cards}
    </section>""")
    folder = f'{SITE["repo"].replace("/blob/", "/tree/")}{d["rel"]}/journey'
    body = f"""{top((d["title"], f'{d["slug"]}.html'))}
    <header class="dhead">
      <p class="eyebrow">The journey</p>
      <h1>How {esc(d["title"])} took shape</h1>
      <p class="idea">{md_inline(j["intro"], d)}</p>
    </header>
    <div class="actions" style="padding-bottom:48px">
      {open_btn(d)}
      <a class="txt" href="{folder}" target="_blank" rel="noopener">All the files ↗</a>
    </div>
{chr(10).join(parts)}
{prev_next(designs, i)}"""
    return page(f'How {d["title"]} took shape · Design Bake-Off', f'The working files behind {d["title"]}, in order.', body)


def write(name, text):
    (SHOWCASE / name).write_text(text, encoding="utf-8", newline="\n")
    print("wrote", name)


def main():
    designs = load_designs()
    write("index.html", index_page(designs))
    for i, d in enumerate(designs):
        write(f'{d["slug"]}.html', design_page(designs, i))
        if d["has_journey"]:
            write(f'{d["slug"]}-journey.html', journey_page(designs, i))
    for stale in set(IMG_OUT.rglob("*.webp")) - WRITTEN:
        stale.unlink()
        print("removed", stale.relative_to(SHOWCASE).as_posix())


if __name__ == "__main__":
    main()
