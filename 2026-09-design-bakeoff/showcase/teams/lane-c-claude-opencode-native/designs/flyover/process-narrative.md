# Process narrative: Flyover

*The team didn't submit a process narrative. Everything below was compiled by the organizers on 2026-10-10 from three sources: the team's public repo at commit [`e83d1dd`](https://github.com/ignisspindler/cvaie-site/tree/e83d1dd) (its `README.md`, its `CLAUDE.md` agent notes and its commit history), the agent guidance Eugene used in the event's shared folder, and the deployed site.*

---

## Compiled from the team's repo and notes, 2026-10-10 (organizers' notes)

**Tool.** Eugene prompted Claude Code directly, with no design skill. The model was probably Opus 5.5, which we haven't confirmed. Claude Code wrote a Vite 8 + React 19 site that draws its 3D scene with React Three Fiber (three.js). It also wrote Node scripts that pull the public map data.

**On the day.** Eugene's agent worked under the event's shared-folder rules. Each member had their own concept and lookbook folders, edited copies of shared files rather than the originals, and merged only when the team agreed. The same guidance set the design brief:
- produce three genuinely different concepts before committing
- run a harsh critique pass, then a phone-width check
- avoid the generic "AI SaaS" look
- build the "TBA" state, which is the state the real site was actually in

No concept screenshots reached the shared folder, so the rejected concepts and the critique step aren't on record.

**Two experiments.** According to the repo's notes, the day produced two separate 3D experiments:
- **Eugene's:** "the logo *is* the water; you dive and fly along it." This one became Flyover.
- **Travis's:** a "cosmic city" built from real Charlottesville geometry that you fly through and walk inside. It's filed as its own design, [Cosmic City](../cosmic-city/).

**After the event.** The published version isn't the bake-off snapshot. The README says it was "built for the CvAIE design bake-off … then carried further," and the repo's three commits are dated Oct 6. The notes describe the polish phase as preparation for handing off to the organizers. They also record how the design changed during that phase:
- **The surface became land.** The logo began as rippling water. The waves were switched off because they "read as a jiggle in the background rather than as water," and the tiles were laid over real USGS elevation instead.
- **Panels moved into a deck.** Panels used to rise out of the water or descend from the sky along the flight. They "competed with the deck that lands at the end," so their content moved to the hero, the four-card deck and the footer.
- **A floating logo badge was retired** once the logo had become the ground.
- **The city was imported.** Charlottesville's buildings and streets came over from Travis's project, and regional roads and a horizon out to the Shenandoah were added.
- **Every motion became scroll-driven.** All self-running motion was removed, so a still scroll position is a still frame.

**How the agent worked.** The repo's `CLAUDE.md` is long and specific. It records why each decision was made and lists the traps that would catch the next person to change the code. Some values in it are measured rather than chosen:
- The orange was taken from the logo, where 90% of the orange pixels fall in one value.
- The camera's clearance over downtown's tallest roofs was calculated. That calculation is what moved the end of the flight earlier.
- The agent checked its changes by capturing frames in a browser.

**Unfinished.** The notes list a roadmap that was never started: blend this flight with Travis's walkable city, then "decide the merge base and converge the two experiences into one handoff site."
