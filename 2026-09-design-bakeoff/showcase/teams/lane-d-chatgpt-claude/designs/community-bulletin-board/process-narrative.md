# Process narrative: Community Bulletin Board

We worked in ChatGPT, using the image-generation tool to turn the discussion into visual mood boards. No separate design plugin, coding agent, or implementation stack was introduced during this session, so the work stayed at the design-direction stage rather than moving into a coded site.

We began with the existing AI Explorers site, two reference sites we disliked, and a clear set of desired qualities: curious, learning-oriented, open, empowering, organic, member-driven, people-centered, and connected to Charlottesville. From those inputs, the initial design direction framed the site as a warm local learning community rather than a polished technology conference. The first spec translated that into choices about people-first imagery, editorial typography, natural colors, community photography, and a restrained local visual language.

We then generated a first mood board to make those ideas tangible. It emphasized people learning together, brick and natural textures, warm neutrals, handwritten annotations, and a Charlottesville sense of place. The tool was useful for quickly combining many abstract brand attributes into one visual artifact that we could react to instead of debating them only in words.

The most important change came from human feedback. We felt the first board leaned too far toward tourism and local atmosphere, while underplaying the energy of a group exploring cutting-edge technology. We kept the people-with-laptops imagery that worked, but pushed the next version toward more contrast, stronger typography, brighter accents, visible AI and coding cues, hands-on experimentation, and a more energetic composition. That feedback materially changed the balance from “Charlottesville community” toward “Charlottesville community exploring advanced technology.”

The session produced a detailed design spec and two mood-board directions, with the second much closer to the intended character. The tools helped most by externalizing an emerging visual language quickly and making critique easier. They fell short when the first generation over-indexed on place and warmth at the expense of technical boldness, showing that the human review was essential for calibrating the identity.

---

## Filed 2026-10-26 (organizers' notes)

- **Building the site.** From the mood boards and spec, the team built the site in Claude Code with Opus 5.5. It's filed as `site/`, and its [design brief](design-brief.md) describes it.
- **From boards to build.** The build trades the boards' Lora and Inter for Barlow Condensed, Fraunces, Barlow and Caveat. It also drops the photos of people in favor of hand-drawn marks. The boards are in [`journey/`](journey/).
