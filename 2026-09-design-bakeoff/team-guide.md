# Design Hackathon: Team Guide

**The challenge:** Redesign the Cville AI Explorers website from scratch. Start only from `site-content.md`. Keep the content, and reinvent everything else: layout, type, color, imagery and motion.

**The real goal:** Learn how AI design tools work in practice. A good-looking site is nice, but a clear story about what the tool did well and badly is worth just as much.

**Scope: local only.** Build and run your design on your own laptop (or inside your tool's preview). The goal is a working site with a cohesive look and feel across every section. Don't spend time on deploying, hosting, custom domains or Git. Deploying will happen separately, later, once we've picked the designs we like best. If your tool can publish, you're welcome to use that for a quick preview, but it isn't part of the challenge.

**Your tool:** your team lead chooses the lane and tool and sets it up before the meetup (see `team-lead-guide.md`). This guide is for team members.

---

## 1. Before the meetup: build a lookbook

**Required for Lane D, optional for other lanes.** Your team lead will tell you which lane your team is in. A lookbook is the starting point for Lane D. Other teams can bring one too if they have time; it's a good way to give the tool a stronger point of view.

Each team member brings **2–3 examples** of design they like: screenshots of sites, posters, apps or photos. They don't need to be meetup sites or even websites.

- **Add a one-line note to each** saying *what specifically* you like: "the huge serif headline," "the way the date is the hero," "only two colors." A screenshot with no note tells the tool very little.
- **Aim for variety across the team,** such as one example for type, one for color and one for layout. Copying a single site gives you a clone.
- **Put them in one shared place** (a folder or a shared doc) so they're ready to upload on the day.

Good places to look: **Godly** and **Awwwards** (striking, experimental), **Land-book**, **Lapa Ninja** and **One Page Love** (landing pages, closest to ours), **Mobbin** (real apps and sites), **SiteInspire** and **Minimal Gallery** (calm, typography-led), **Typewolf** and **Fonts In Use** (font pairings), and other community and meetup sites (how they handle "next event" and "join us").

---

## 2. Suggested workflow (60 minutes)

1. **Brief (5 min).** Agree on who the site is for and how it should *feel*. Pick 3 adjectives, such as "curious, hands-on, local," not "modern and clean." If you have a lookbook, pool it and pick the 3–5 examples that best fit those adjectives. Giving the tool every example tends to average them into mush.
2. **Diverge (15 min).** Get **at least 3 clearly different concepts** before committing to one. The first generation is almost always the most generic. Save screenshots of every concept as you go. If you have a lookbook, give the tool your chosen examples along with their notes.
3. **Converge (5 min).** Pick one, or combine the best parts of two. Write down *why*. Getting a second opinion on the plan before you build can save time later (see section 3).
4. **Build (25 min).** Make every piece of content from `site-content.md` work, including the "TBA" meetup state and the sponsor details.
5. **Critique and polish (10 min).** Screenshot it, ask the AI to critique it harshly, fix the top 3 issues, and check it at phone width. Common problems to look for:
   - The generic "AI SaaS" look: purple/blue gradients, glassy cards, everything-centered hero.
   - Concepts that are really one layout in different colors.
   - Code that is hard to edit after export.

**Let the agent see its own work.** The Claude desktop app (Browser pane, Cmd/Ctrl+Shift+B) and the Codex app both have a built-in browser. Ask the agent to open your page, view it at phone and desktop widths, and fix what looks wrong, instead of relying on you to describe it. On a CLI-only setup, a Playwright tool or skill does the same job.

---

## 3. Prompting ideas

These are ideas that have worked for other people, not steps to follow. Use whatever suits your tool and your team and skip the rest. Finding out what works is part of the experiment.

- **Give it a real brief.** "Make it look modern" gets you the average of the internet. Tell the tool who the site is for (local developers, tinkerers, curious newcomers), give it your 3 adjectives, name the most important thing on the page (the next meetup and how to join), and say what you *don't* want, such as purple gradients, glassy cards or the default Inter font.
- **Use your lookbook,** if you have one. Ask for directions that each lean on a *different* example, so the concepts actually differ. Ask it to capture the feel of an example without copying it.
- **Ask for options before code.** Several clearly different directions, each with a name, a palette, a font pairing and one signature detail, make the generic one easier to spot. Asking for variety in tone, density or era helps them actually differ.
- **Compare cheaply.** Rough mockups of just the hero and one section are often enough to choose between directions.
- **Have it plan first.** Some tools do better when they describe the idea before building it: the mood in one sentence, the order of sections, and a couple of interaction ideas. OpenAI's frontend guidance calls these a visual thesis, a content plan and an interaction thesis.
- **Let it question you.** "Ask me 3 questions that would most change this design" or "What's the weakest part of this plan?" can surface decisions you haven't made yet.
- **Get a second opinion.** Give a fresh session or a different tool only the content and the plan, and ask it to review them as a skeptical designer. It will often catch generic choices, weak hierarchy or problems on a phone. Claude reviewing a Codex plan, or the other way around, is an interesting pairing. A few minutes here costs less than finding the same problems after you've built the site.
- **Push past the first answer.** First results tend to be safe. Lines like "That's too safe, make it twice as bold," "What would a great editorial designer change?" or "Give me 3 alternatives just for the hero" can shake things loose.
- **Keep a design record.** It can help to have the AI write its decisions (colors, fonts, spacing, tone) into a short `DESIGN.md` and give that file back to it, so later changes stay consistent. Impeccable's `PRODUCT.md` and Stitch's `DESIGN.md` work the same way.

---

## 4. Showcase (5 min per team)

1. **Show it.** Demo the site running locally (or in your tool's preview), including a narrow phone-width view.
2. **The journey.** Show a concept you rejected and why, or a lookbook example and what it turned into.
3. **Tool verdict.** Where did the tool save you time, where did it fight you, and would you use it again?

Possible awards: **Most striking** · **Best experience on a phone** · **Best use of the tool** · **Best story of what went wrong**

---

## 5. Stretch goals (if you finish early)

- **Past Meetups section.** Add a "Past Meetups" section, portfolio or timeline built from `past-meetups.md`. It has 17 meetups with dates, speakers and short summaries, and it tests how your tool handles a larger set of repeating content.
- **The road not taken.** Put together a short slideshow or portfolio page of your discarded concepts and iterations: what each one was, and why you dropped it or changed it. This is where the screenshots from the Diverge step pay off. It can also be your "journey" segment at the showcase.
