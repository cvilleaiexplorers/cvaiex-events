# Handoff request

After the bake-off, the organizers asked each team for the following, sent by email or Slack. The sample prompts appear exactly as sent; the messages around them are lightly edited. This lets you see what each team's agent was told when it produced the files in [`teams/`](teams/).

## 1. A deployable folder for each deliverable design

> Could you get me a deployable folder for each one of the "deliverable" designs your team presented? A sample prompt is below; you can probably just copy this into the end of the same agent session that created the design/site. My goal is to deploy these somewhere for review/comment by the broader group.

```
Package our finished site as a deployable static folder named build/ in the project root.

- Include only what the live site needs: index.html plus its CSS, JS, images and fonts. No notes, screenshots, working/design files, source maps or node_modules.
- Make it self-contained: relative asset paths only (assets/x.css, not /assets/x.css or ../), so it works at a domain root or a subpath like a GitHub Pages project site. No dev server or build step needed to serve it.
- No runtime CDN dependencies: download fonts and libraries into build/ and include their license files.
- If the project uses a framework (Next, Vite, Astro…), run its static production export and put the output in build/ (e.g. Next `output: 'export'`, Vite `base: './'`).
- Add a favicon, title/description and og:title/og:description if missing, plus an empty .nojekyll file.
- Verify before you finish: serve build/ with a plain static server (e.g. `python -m http.server`) at the root and under a subpath, check desktop and phone widths, and confirm no console errors, no 404s and no requests to other domains. Fix anything that fails.
- Report the file list and total size, how to preview it locally, and anything the deploy still needs from us.
```

## 2. Send it in

> Then zip the folder and email it to me or send it here via Slack.

## 3. A process narrative

> Please also generate a narrative describing your team's process or major steps. Again you can just extract this from your agent session; sample prompt follows. Also attached as an example the output from my own team's session.

```
Write a short process narrative of this design session and save it as process-narrative.md (next to our demo files). It's a retrospective for the showcase, not a guide.

- At most 5 short paragraphs, around 300 words. Major steps and high points only; skip minor fixes and trivia.
- A structure that tends to work, adapted to what actually happened: tools and setup (agent, design skill or plugin and how it was installed, stack) → how the direction was chosen (which ideas came from the tool and which from us) → build and how the agent checked its own work → the most important changes from human feedback → what we produced, plus where the tools helped and where they fell short.
- Use only facts from this session. Don't invent metrics or quotes.
- Plain, direct prose, first person plural ("we"). Minimal jargon, with commands or file names in backticks only when they help.
```

## 4. A design brief (lower priority)

> If you can get your agent to emit a design brief, which is a text description of what it actually put together, that would also be nice. We'll use that in the remix stage, once we get feedback from the human reviewers. Here is a sample prompt, and my resulting output also attached.

```
Write a short design brief of the site we built and save it as design-brief.md (next to our demo files). It's supporting documentation for another agent making a similar site: it should explain the design so they can adapt it, not give step-by-step instructions to reproduce ours.

- At most 6 short paragraphs, about three-quarters of a page. Describe what was actually built, not what was planned.
- A structure that tends to work, adapted to our site: the core concept and what it deliberately avoids → audience, and what the first screen has to answer → visual system → layout → motion and behavior → a few principles worth carrying over.
- In the visual system, be specific about palette and type: name each color's role with its hex value, and name the fonts (or font styles) with their weights, casing and roughly how they're used. Add a line on what could substitute for them.
- Skip exact spacing, pixel values and component specs. Those belong in DESIGN.md, if we have one.
- Use only facts from the shipped code. Plain, direct prose.
```
