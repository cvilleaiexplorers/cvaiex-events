# Redesign Hackathon: Team Guide

**The challenge:** Redesign the Cville AI Explorers website from scratch. Start only from `site-content.md`. Keep the content, and reinvent everything else: layout, type, color, imagery and motion.

**The real goal:** Learn how AI design tools work in practice. A good-looking site is nice, but a clear story about what the tool did well and badly is worth just as much.

---

## 1. Pick a lane

Each team picks one lane and one main tool, so that at the showcase we're comparing *approaches*, not just results. Tool features and free tiers change quickly, so check access before the event.

### Lane A: AI design canvas (design first, code second)
You describe the site, get visual mockups on a canvas, refine them by pointing and prompting, then export.

| Tool | Notes |
|---|---|
| **Claude Design** (claude.ai/design) | Anthropic's prompt-to-prototype canvas. You can refine by chatting or by editing directly on the canvas. Exports standalone HTML and can hand off to Claude Code. Needs a paid Claude plan. |
| **Google Stitch** (stitch.withgoogle.com) | Google Labs. Free with a Google account, with daily credits. Accepts text, sketches or screenshots, generates several screens on an infinite canvas, and exports HTML/Tailwind or React. |
| **Figma Make** | Prompt-to-prototype inside Figma. A good fit if someone on the team already knows Figma. |
| **Framer AI** | Generates a site you can publish right away, with strong motion and animation. Has a free tier. |

**Good for:** people who think visually and want to see several options quickly.
**Watch for:** layouts that look alike from one generation to the next, and exports that are hard to edit.

### Lane B: Prompt-to-app builders (chat your way to a live site)
You chat, and the tool writes and hosts the code.

| Tool | Notes |
|---|---|
| **v0** (Vercel) | React + Tailwind + shadcn. For reference, the current site was built with v0. |
| **Lovable** | Full app builder with a visual editor. |
| **Bolt.new** | Similar idea to Lovable, running in the browser. |

**Good for:** getting a working, shareable URL fast.
**Watch for:** the default "AI SaaS landing page" look (purple gradients, glassy cards, centered hero). You'll have to push hard to get away from it.

### Lane C: Coding agent + a design skill (code first, taste added)
Use a general coding agent in a local folder, and give it a *design skill*: a set of written instructions and opinions that make its designs less generic.

| Agent | Design skill to add |
|---|---|
| Claude Code, Codex CLI, Cursor, Gemini CLI, Copilot, etc. | **Impeccable** (impeccable.style, `github.com/pbakaus/impeccable`). A design vocabulary for agents, installed with `npx impeccable install`. Useful commands: `/impeccable init` (records audience, purpose and voice), `/impeccable shape` (plans the UX before any code), `/impeccable critique`, `/impeccable typeset`, `/impeccable colorize`, `/impeccable animate`, `/impeccable polish`. `/impeccable live` lets you try variants of an element in the browser. |
| Claude Code (CLI or desktop app) | The **`/design`** skill (research preview, August 2026). It brings Claude Design's artboard workflow into Claude Code: run `/design a few options for the Cville AI Explorers homepage` and it publishes a canvas of editable mockups. Pick one, tweak it, then tell Claude to build it. Needs Claude Code v2.1.233+ signed in with a Pro, Max, Team or Enterprise plan. The easiest way to get the "3+ concepts" step in Lane C. |
| Claude Code | Anthropic's **frontend-design** plugin: `/plugin install frontend-design@claude-plugins-official`. Pushes the agent toward bold, specific type, color and motion choices. |
| OpenAI Codex (CLI, IDE extension, or the Codex app) | OpenAI's **frontend-skill**: `npx skills add https://github.com/openai/skills --skill frontend-skill`. It favors full-bleed heroes, few cards, at most two typefaces and one accent color, and has Codex write a "visual thesis" before it builds. Use the **Codex app's built-in browser** so Codex can open your local page, click through it, take screenshots and fix what it sees. You can also comment directly on the rendered page. |
| OpenAI Codex | The **Product Design** plugin (one of OpenAI's June 2026 role plugins). Made for exploring product directions, prototyping from a live URL and turning static screenshots into interactive prototypes. Good for the "try several concepts" step. |
| Any agent | **Taste Skill** (tasteskill.dev). Another "anti-slop" skill with opinions on type scale, spacing and density. |

**Good for:** teams who want full control and code they can actually read.
**Interesting experiments:**
- Give two teams the same agent, one with a design skill and one without, and compare.
- Pit **Claude Code + frontend-design** against **Codex + frontend-skill**: same content, same time, different vendor.

### Lane D: Reference-driven (image to code)
Start from pictures instead of words. Build a mood board of 3–5 sites, posters or photos you love, then give the screenshots to any tool that accepts images (Claude, Stitch, v0, Lovable, a coding agent). Ask it to capture the *feel* of the references without copying any of them.

**Good for:** teams who have a look in mind but can't put it into words.
**OpenAI option:** use **ChatGPT Images 2.0** (`gpt-image-2`, available on every ChatGPT plan and inside Codex) to generate full-page mockups as images. It handles text and UI layouts far better than earlier image models. Pick the best mockup, then give it to Codex or any other agent: "Build this as a responsive site using the attached content."

**Variation:** use an image model to create original hero art or textures first (a Blue Ridge ridgeline, a Charlottesville map, abstract "exploration" art), then design the site around that art.

### Lane E: Wildcard constraints
Pick any tool, but add a constraint that forces a real point of view:
- **One HTML file, no frameworks, no build step.**
- **A named style:** Swiss/International, brutalist, editorial magazine, retro terminal, 1970s national-park poster, Y2K, risograph zine.
- **Local roots:** base the look on Charlottesville, such as the Blue Ridge, the Downtown Mall's brick, or UVA's architecture.
- **Tool relay:** ideate in one tool, mock up in a second, build in a third, and report what got lost at each hand-off.

---

## 2. A workflow that works in any lane (60 minutes)

1. **Brief (5 min).** Agree on who the site is for and how it should *feel*. Pick 3 adjectives, such as "curious, hands-on, local," not "modern and clean."
2. **Diverge (15 min).** Get **at least 3 clearly different concepts** before committing to one. The first generation is almost always the most generic. Save screenshots of every concept as you go.
3. **Converge (5 min).** Pick one, or combine the best parts of two. Write down *why*.
4. **Build (25 min).** Make every piece of content from `site-content.md` work, including the "TBA" meetup state and the sponsor details.
5. **Critique and polish (10 min).** Screenshot it, ask the AI to critique it harshly, fix the top 3 issues, and check it at phone width.

**Let the agent see its own work.** The Claude desktop app (Browser pane, Cmd/Ctrl+Shift+B) and the Codex app both have a built-in browser. Ask the agent to open your page, view it at phone and desktop widths, and fix what looks wrong, instead of relying on you to describe it. On a CLI-only setup, a Playwright tool or skill does the same job.

---

## 3. Finding examples and references

| Source | Best for |
|---|---|
| **Godly** (godly.website) | Striking, motion-heavy sites |
| **Awwwards** (awwwards.com) | Award-winning, experimental work |
| **Land-book**, **Lapa Ninja**, **One Page Love** | Landing pages and one-page sites (closest to ours) |
| **SiteInspire**, **Minimal Gallery** | Calmer, typography-led design |
| **Typewolf**, **Fonts In Use** | Font pairings seen in real use |
| **Coolors**, **Realtime Colors** | Building and previewing a palette |
| Other community and meetup sites | How other groups handle "next event" and "join us" |

**How to use references well:**
- Collect 3–5 references and say *what specifically* you like in each: "the huge serif headline," "the way the date is the hero," "only two colors."
- Mix references from different places, such as one site for type, one poster for color, one app for layout. Copying a single site gives you a clone.
- Give the screenshots to your tool together with your notes.

---

## 4. Prompting your AI for concepts and mockups

**Start with a brief, not "make it look modern."** For example:

> I'm redesigning the website for Cville AI Explorers, a hands-on AI builders' meetup in Charlottesville, Virginia. The full content is attached; keep all of it. The audience is local developers, tinkerers and curious newcomers. It should feel **[3 adjectives]**. The most important thing on the page is the next meetup date and how to join. Avoid generic AI-startup looks: no purple/blue gradients, no glassy cards, no default Inter font, no everything-centered hero.

**Ask for divergent concepts before any code:**

> Propose 4 clearly different design directions. For each, give it a name, a one-line concept, a color palette (hex values), a font pairing, a layout idea for the hero, and one signature detail that makes it memorable. Make them genuinely different from each other: vary tone, density and era.

**Turn concepts into quick mockups you can compare:**

> Build the hero and one content section for each of the 4 directions as separate static HTML pages (or one page with tabs) so we can compare them side by side.

**Plan before building.** This comes from OpenAI's frontend guidance and works with any tool:

> Before writing code, give me: (1) a **visual thesis**: the mood, materials and energy in one sentence; (2) a **content plan**: the order of hero, supporting sections, details and call to action; (3) an **interaction thesis**: 2–3 motion or interaction ideas.

**Push past the first answer:**
- "That's too safe. Make direction 2 twice as bold."
- "What would a great editorial designer change here?"
- "Give me 3 alternatives just for the hero."
- "Critique this screenshot as a harsh design reviewer. List the 5 biggest problems, ranked."

**Keep a design record.** Once you've chosen a direction, have the AI write down its decisions (colors, fonts, spacing scale, tone) in a short `DESIGN.md` or similar file. Then give it that file every time so later changes stay consistent. Impeccable's `PRODUCT.md` and Stitch's `DESIGN.md` work the same way.

---

## 5. Showcase (5 min per team)

1. **Show it.** Demo the live site, on a phone too if possible.
2. **The journey.** Show one screenshot of a concept you rejected and explain why.
3. **Tool verdict.** Where did the tool save you time, where did it fight you, and would you use it again?

Possible awards: **Most striking** · **Best experience on a phone** · **Best use of the tool** · **Best story of what went wrong**

---

## 6. Stretch goals (if you finish early)

- **Past Meetups section.** Add a "Past Meetups" section, portfolio or timeline built from `past-meetups.md`. It has 17 meetups with dates, speakers and short summaries, and it tests how your tool handles a larger set of repeating content.
- **The road not taken.** Put together a short slideshow or portfolio page of your discarded concepts and iterations: what each one was, and why you dropped it or changed it. This is where the screenshots from the Diverge step pay off. It can also be your "journey" segment at the showcase.
