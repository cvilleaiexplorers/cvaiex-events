# Showcase: team handoffs

What each team handed in after the bake-off: a deployable copy of every design it presented, plus the agent-written notes on how it was made. [`handoff-request.md`](handoff-request.md) records what we asked for and the prompts teams were given.

These folders feed a portfolio viewer and a later remix stage, so every team follows the same layout.

## The viewer

[`index.html`](index.html) is the showcase itself: every design with its cover, a link to the running site, a short account of how the team got there, and the feedback form. Each design has its own page (`<slug>.html`), and designs with working files have a journey page (`<slug>-journey.html`) that walks through them with screenshots.

All of it is generated. Don't edit the HTML by hand; edit the sources and rebuild:

- **[`viewer/copy.yaml`](viewer/copy.yaml):** the viewer's own words: summaries, steps, palettes, elements to look at, and the journey sections.
- **Team cards:** titles, leads, live URLs and source repos come from the front matter below.
- **[`viewer/captures/`](viewer/captures/):** screenshots we took of pages that had none, such as Ridgeline's earlier rounds.
- **[`assets/`](assets/):** the stylesheet and the feedback QR code. `assets/img/` is build output.

```
uv run viewer/build.py
```

The viewer is plain static files with relative paths, served by GitHub Pages from the repo, so the `site/` builds open at their own subpaths beside it.

## Layout

```
teams/<team-slug>/
  README.md                  team card (metadata + short intro)
  designs/<design-slug>/
    site/                    the deployable build: index.html at the top
    process-narrative.md     how this design was made
    design-brief.md          what was built (optional)
    cover.png                screenshot for the viewer
    journey/                 the team's working files (optional)
```

- **`site/`** holds the contents of the team's `build/` folder. It must work when served from any subpath, so asset paths are relative. Loading free Google Fonts is fine; otherwise the build makes no requests to other domains.
- **`journey/`** holds working files the team handed in alongside the design, such as agent briefs, decision records, a design-system doc and screenshots. It has its own `README.md` listing them.
- **Externally hosted designs** stay where their authors deployed them. They have a `url:` in the team card and no `site/` folder.
- **Organizer additions** to a team's narrative or brief go below a horizontal rule, under a dated heading, so the team's own words stay separate.
- **Team card:** the `README.md` opens with YAML front matter. The viewer reads this, and nothing else repeats it:

  ```yaml
  ---
  team: Team name
  lead: First L.
  lane: C
  tool: Claude Code + frontend-design
  designs:
    - slug: design-slug
      title: Design title
      url: https://…        # only for externally hosted designs
      tool: …               # optional: when this design's tool differs from the team's
      source: https://…     # optional: the team's source repo, pinned to a commit
  ---
  ```

## Conventions

- **People:** list only team leads, as first name and last initial. Team-written narratives are edited to match.
- **Headings:** each design file starts with `# Process narrative: <Design title>` or `# Design brief: <Design title>`. The title matches the one on the team card.
- **Names:** lowercase, hyphenated slugs. A design's slug comes from its title (`blue-ridge-at-dusk`). No folder or file name starts with `_`, because GitHub Pages' Jekyll build skips those.
- **Size:** no single file over about 25 MB, and no video in the repo. Link to large media instead.
- **Not committed:** raw zips, agent transcripts, source projects and participants' contact details stay with the organizers. The sponsor's published tour contacts, which come from `site-content.md`, can appear in a team's `site/`.

## Teams

| Team | Lead | Lane | Tool |
|---|---|---|---|
| [Codex native](teams/lane-b-codex-native/) | Sifan Y. | B | Codex (ChatGPT desktop app) |
| [Claude Code + Impeccable](teams/lane-c-claude-impeccable/) | Mike P. | C | Claude Code (Opus 5.5) + Impeccable |
| [Claude Code + OpenCode native](teams/lane-c-claude-opencode-native/) | Eugene G. and Travis E. | C | Claude Code (Opus 5.5) and OpenCode, no design skill |
| [ChatGPT Images + Claude Code](teams/lane-d-chatgpt-claude/) | Jill H. and Nish T. | D | ChatGPT (image generation), then Claude Code (Opus 5.5) |
| [Claude Code + Mobbin](teams/lane-d-claude-mobbin/) | John A. | D | Claude Code with the Mobbin MCP server, no design skill |
