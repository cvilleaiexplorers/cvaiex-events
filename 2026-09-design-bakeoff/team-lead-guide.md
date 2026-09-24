# Design Hackathon: Team Lead Guide

This guide is for team leads. Before the meetup, you choose your team's lane and tool and get it set up. Your team members follow `team-guide.md`.

1. **Choose a lane and tool** from the lanes below. Each team picks one lane and one main tool, so that at the showcase we're comparing *approaches*, not just results. Tell the organizers which one you picked so that teams don't all choose the same tool.
2. **Set it up** using the [setup checklist](#setup-checklist). Every minute spent signing up or installing on the day comes out of your 60 minutes.
3. **Brief your team.** Share `team-guide.md`, and tell them whether they need to bring a lookbook (required for Lane D, optional otherwise).

---

## Choosing a lane

### Lane A: AI design canvas (design first, code second)
You describe the site, get visual mockups on a canvas, refine them by pointing and prompting, then export the code to run locally.

| Tool | Notes |
|---|---|
| **Claude Design** (claude.ai/design) | Anthropic's prompt-to-prototype canvas. You can refine by chatting or by editing directly on the canvas. Exports standalone HTML and can hand off to Claude Code. Needs a paid Claude plan. |
| **Google Stitch** (stitch.withgoogle.com) | Google Labs. Free with a Google account, with daily credits. Accepts text, sketches or screenshots, generates several screens on an infinite canvas, and exports HTML/Tailwind or React. |
| **Figma Make** | Prompt-to-prototype inside Figma. A good fit if someone on the team already knows Figma. |
| **Framer AI** | Generates a complete site with strong motion and animation, previewed in the editor. Has a free tier. |

**Good for:** people who think visually and want to see several options quickly.
**Watch for:** layouts that look alike from one generation to the next, and exports that are hard to edit.

### Lane B: Prompt-to-app builders (chat your way to a working site)
You chat, and the tool writes the code and shows it in a live preview. Download or export the code if you want a local copy.

| Tool | Notes |
|---|---|
| **v0** (Vercel) | React + Tailwind + shadcn. For reference, the current site was built with v0. |
| **Lovable** | Full app builder with a visual editor. |
| **Bolt.new** | Similar idea to Lovable, running in the browser. |

**Good for:** getting a working, clickable site fast.
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
**Interesting experiments** (these need two teams to agree before the event):
- Give two teams the same agent, one with a design skill and one without, and compare.
- Pit **Claude Code + frontend-design** against **Codex + frontend-skill**: same content, same time, different vendor.

### Lane D: Reference-driven (image to code)
Start from pictures instead of words. Each team member collects a lookbook of examples before the meetup (required for this lane; see "Before the meetup" in `team-guide.md`). On the day, give the chosen screenshots and notes to any tool that accepts images (Claude, Stitch, v0, Lovable, a coding agent) and ask it to capture the *feel* of the examples without copying any of them. Other lanes can bring a lookbook too, but for them it's optional.

**Good for:** teams who have a look in mind but can't put it into words.

**Agent-sourced references:** instead of collecting screenshots yourself, connect your agent to the **Mobbin MCP server** (mobbin.com/mcp) and have it find real-world examples, e.g. "Find examples of event-announcement heroes and community sign-up sections and summarize the patterns." Needs a paid Mobbin plan.
**OpenAI option:** use **ChatGPT Images 2.0** (`gpt-image-2`, available on every ChatGPT plan and inside Codex) to generate full-page mockups as images. It handles text and UI layouts far better than earlier image models. Pick the best mockup, then give it to Codex or any other agent: "Build this as a responsive site using the attached content."

**Variation:** use an image model to create original hero art or textures first (a Blue Ridge ridgeline, a Charlottesville map, abstract "exploration" art), then design the site around that art.

### Lane E: Wildcard constraints
Pick any tool, but add a constraint that forces a real point of view:
- **One HTML file, no frameworks, no build step.**
- **A named style:** Swiss/International, brutalist, editorial magazine, retro terminal, 1970s national-park poster, Y2K, risograph zine.
- **Local roots:** base the look on Charlottesville, such as the Blue Ridge, the Downtown Mall's brick, or UVA's architecture.
- **Tool relay:** ideate in one tool, mock up in a second, build in a third, and report what got lost at each hand-off.

---

## Setup checklist

Do this before the meetup, on the laptop that will run the tool on the day. Tool features and free tiers change quickly, so don't leave it to the last minute.

- [ ] Make sure you (or a teammate) have an account with enough access: a paid plan where the tool needs one, or free credits left for the day.
- [ ] Try the tool once with a small throwaway prompt, so you know where the chat, preview and export controls are.
- [ ] If your team is bringing a lookbook, check that the tool accepts images and how you add them (upload, paste, or files in the project folder for a coding agent).
- [ ] Find out how to export the code and run it locally, whether that's opening an HTML file or starting a dev server.
- [ ] Download `site-content.md`, `past-meetups.md` and `STUDIO_IX_Logo_White.jpg` from this folder.
- [ ] Know how your agent can see the page it builds: the Claude desktop app's Browser pane (Cmd/Ctrl+Shift+B), the Codex app's built-in browser, or a Playwright tool or skill on a CLI-only setup.

**Lane C (coding agent + design skill)**
- [ ] Install and sign in to your agent, and update it to the latest version.
- [ ] Install Node.js if you're using a skill that installs with `npx` (Impeccable, OpenAI's frontend-skill).
- [ ] Install your design skill in a fresh project folder and confirm its commands show up:
  - Impeccable: `npx impeccable install`
  - frontend-design: `/plugin install frontend-design@claude-plugins-official`
  - frontend-skill: `npx skills add https://github.com/openai/skills --skill frontend-skill`
- [ ] For `/design`: check that Claude Code is v2.1.233 or later and signed in with a Pro, Max, Team or Enterprise plan.
- [ ] If you're running a head-to-head experiment, agree on it with the other team.

**Lane D (reference-driven)**
- [ ] For the Mobbin MCP server: sign in to a paid Mobbin plan and connect the server to your agent.
- [ ] For ChatGPT Images 2.0: confirm you can generate an image in ChatGPT or Codex.
