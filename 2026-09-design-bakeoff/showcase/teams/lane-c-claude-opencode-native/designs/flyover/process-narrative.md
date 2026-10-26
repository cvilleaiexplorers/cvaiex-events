# Process narrative: Flyover

---

## Organizers' notes, 2026-10-10

**Tool.** Eugene prompted Claude Code (Opus 5.5) directly, with no design skill. Claude Code wrote a Vite 8 + React 19 site that draws its 3D scene with React Three Fiber (three.js). It also wrote Node scripts that pull the public map data.

**On the day.** Eugene's agent worked under the event's shared-folder rules. Each member had their own concept and lookbook folders, edited copies of shared files rather than the originals, and merged only when the team agreed. The same guidance set the design brief:
- produce three genuinely different concepts before committing
- run a harsh critique pass, then a phone-width check
- avoid the generic "AI SaaS" look
- build the "TBA" state, which is the state the real site was actually in

**Two experiments.** The day produced two separate 3D experiments:
- **Eugene's:** "the logo *is* the water; you dive and fly along it." This one became Flyover.
- **Travis's:** a "cosmic city" built from real Charlottesville geometry that you fly through and walk inside. It's filed as its own design, [Cosmic City](../cosmic-city/).

**After the event.** The published version isn't the bake-off snapshot. Eugene carried it further in early October, polishing it for the handoff, and the design changed along the way:
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
