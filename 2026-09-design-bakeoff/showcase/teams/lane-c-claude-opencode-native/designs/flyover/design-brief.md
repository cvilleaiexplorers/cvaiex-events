# Design brief: Flyover

*The team didn't submit a design brief. Everything below was compiled by the organizers from the repo at commit [`e83d1dd`](https://github.com/ignisspindler/cvaie-site/tree/e83d1dd) and from the deployed site at [cvaie-site.vercel.app](https://cvaie-site.vercel.app), as both stood on 2026-10-10. The repo has no license file, so this describes the code rather than reproducing it.*

---

## Observed on the deployed site and in the repo, 2026-10-10 (organizers' notes)

**Concept.** The logo isn't a picture on the page. It's the ground you fly over.
- **The tiles:** `CVAIE.svg` is sampled onto a grid and rebuilt as about 193,000 small square tiles, each carrying the artwork's color at that spot. About 48,000 coarser navy tiles continue the land past the logo's edge.
- **Where it sits:** the artwork is pinned to a real ten-mile square of Albemarle County. The tiles rise and fall with USGS elevation, stretched 2.5 times vertically so the ridge is visible.
- **The flight:** you start looking straight down at the whole logo, dive, level out about 130 m above the ground, and climb the Carter Mountain ridge. You then drop toward Charlottesville, whose 10,360 real buildings and streets stand on the same terrain. The Blue Ridge and the Shenandoah sit on the horizon.

**Sequence.**
- **Hero, over the top-down logo:** "Cville AI Explorers", the tagline, a "Next Meetup" line, "Monthly at Studio IX" with the address, and a gently bobbing "scroll" cue.
- **The flight:** about seven and a half screen-heights of scrolling, with nothing else on screen.
- **The content deck:** once the ridge is behind you, four cards fly in from above and around the edges and settle in a row by the time you're over downtown:
  - **Our Mission:** "Build, share, learn", with the About Us list
  - **What We Do:** "Activities and directions", with a link to all 18 past meetups
  - **Join Us:** "There's a place for you", with "Join on Meetup"
  - **Get Involved:** "Five ways in", with "Our sponsor & partners"
  
  Under 900 px wide the deck becomes two columns.
- **Overlays:**
  - **Past meetups:** the full archive, newest first, generated at build time from `past-meetups.md`. It says plainly that there are no recordings rather than implying video exists.
  - **Sponsor and partners:** Studio IX with its logo, the UVA School of Data Science, Charlottesville Technologists, and the S&P Global anniversary pizza.
  
  Both are native `<dialog>` elements.
- **Footer:** the sponsor, Charlottesville Technologists, GitHub, the Slack channel, the Code of Conduct, and the data credits for USGS and the City of Charlottesville.

**Visual system.** The palette is the logo's own navy and orange:

| Role | Hex |
|---|---|
| Page ground | `#061426` |
| Primary text | `#f2f6fb` |
| Secondary text | `#9fb4cc` |
| The one orange: links, eyebrows, card borders, buildings, lit ridgelines | `#FA6107` |
| Card fill | `rgba(5, 19, 36, 0.9)` with a background blur |
| Land beyond the logo | `#123f6b` |
| Streets | `#2f7fcc` |
| Floating motes (with the orange) | `#66A7E8` |

The horizon is colored by elevation. The valley floor is navy `#15385e`, and higher ground rises through `#1d548c`, `#5a9fe0` and near-white `#e4edf7` to orange `#FA6107` on the highest ridges. The orange wasn't chosen: it was measured, as the value 90% of the logo's orange pixels fall in.

Type uses the system UI sans stack, with no web fonts:
- **Hero heading:** weight 650, tight letter-spacing (−0.03em)
- **Card titles:** weight 620
- **Eyebrows:** small orange capitals, widely tracked (CSS uppercase, 0.28em)

**Borders are a visible choice.** A small "border" control under the deck cycles six card-edge treatments: neon, brackets, scanline, circuit, pulse and plate. The browser remembers the choice. The notes explain why: "pretending one option won seemed worse than showing the choice," for a site that came out of a bake-off.

**Motion and behavior.**
- **Scroll is the only state.** The whole camera path is a pure function of scroll position, so apart from the pointer effect below and a sub-pixel drift of the motes, nothing animates on its own. Text is ordinary HTML laid over the 3D canvas, so it can be selected. Moving the pointer raises a soft bump in the tiles under it, which settles once the pointer stops.
- **Next meetup is fixed.** It's a date written in the code, `2026-07-28`, mirroring the official site's data at the time. Because that date has passed, the site always shows "TBA: Check Meetup Page," linked to the Meetup group. This was deliberate, since TBA was the real site's state.
- **Reduced motion:** the cards fade in without the fly-in, and the pulse border and the scroll cue stop. The camera flight itself is unchanged, because it moves only when you scroll.

**For a remix.**
- **Static, with no server.** The build needs no environment variables and makes no requests to other domains. It's a plain Vite build.
  - **Subpath hosting:** paths are root-absolute (`/CVAIE.svg`, `/data/…`, `/studio-ix.jpg`), so serving it from a subpath means setting Vite's `base` and updating those URLs in the code.
  - **Weight:** a first visit transferred about 340 KB of JavaScript and about 6 MB of terrain, city and road data. Only the files Vite builds have content hashes in their names, so the team's `vercel.json` adds a cache rule for `/data/`.
- **Needs WebGL to show the content.** The deck cards are revealed by the 3D frame loop, so without WebGL only the hero and footer would appear. We read this from the code; we didn't test it. The team's own notes list "graceful degradation" as a gap. We couldn't check the phone layout in our browser, so it's unverified. The code does pull the opening shot back on narrow screens so the logo fits.
- **The data carries obligations.** The Charlottesville buildings and streets are CC BY 4.0, and the attribution has to stay visible. USGS elevation and Census TIGER roads are public domain but credited. Scripts in the repo rebuild every dataset from its source.
- **A live next meetup would need adding.** Focus (Lane B) shows one way to do it.
- **Content coverage:**
  - **Covered:** nearly all of `site-content.md`, namely About Us, Mission, Activities, Join Us, Get Involved, Contact, Sponsors, Code of Conduct and Footer, plus the full past-meetup archive.
  - **Stale note:** the repo's `CLAUDE.md` still says mission, activities and join are missing, but the deck now has all three.
- **The tuning surface.** `src/config.js` holds almost every visual decision as a number or color: tile density, vertical exaggeration, flight altitude and timing, the horizon ramp and the building color. That makes variations cheap.
- **Ideas worth carrying over:**
  - the brand mark as the landscape
  - real local data, sourced and credited
  - colors measured from the logo, not picked
  - a design variation the visitor can see and switch
  - a TBA state built as a first-class state
