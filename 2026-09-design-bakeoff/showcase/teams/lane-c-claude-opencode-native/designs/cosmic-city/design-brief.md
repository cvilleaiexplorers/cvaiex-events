# Design brief: Cosmic City

---

## Organizers' notes, 2026-10-10

**Concept.** "A little city. A big universe." Charlottesville's real buildings float in a dark sky full of stars.
- **The city:** 10,360 building footprints and the street centerlines, drawn as translucent green blocks. The ground is flat; real terrain was planned for later.
- **The sky:** a real star catalog of 5,044 stars and the 88 constellation outlines, turned to match the actual sky over Charlottesville at the moment you visit. It's deliberately unlabeled, an Easter egg.

The site is a map you travel through, not a page you read. You pick a gathering place, fly there, and step inside.

**The explorer (home page).**
- **Header:** a lime ✳ beside a "cville**ai** / EXPLORERS" wordmark, with Explore, Meetups and Our community links. A "Join the explorers" button goes to Meetup.
- **Intro, at left:** an eyebrow reading "LOCAL ROOTS. LIMITLESS POSSIBILITIES.", the headline with "big universe." in lime, "Let's explore", and "Take the tour".
- **The 3D city, filling the screen:** it slowly orbits, with floating labels on each destination. A coordinate readout sits at the top, and a "Building the city · 22%" status shows while the data loads.
- **Tool rail:** city overview, first-person flight, reduce animation, and a "flight manual" listing the controls.
- **Discovery dock:** a search box ("Find a place, a meetup, a spark of inspiration…", with a `/` shortcut and optional voice input). Below it are three destination cards, each with a small illustration drawn in CSS.

**Destinations.** There are five, each with its own accent color:
- Studio IX: lime `#b6f36a`
- UVA School of Data Science: violet `#b9a0ff`
- Downtown Mall: cyan `#75d9ef`
- Kardinal Hall: apricot `#f4bd7d`
- Ting Pavilion: pale sage `#d4e1b8`

Choosing one flies the camera there and opens a panel with a description, the address, "Enter the community room", and a link to the place's details and sources.

**Inside.** Each venue opens a full-screen dialog over its own 3D scene.
- **Indoor rooms:** Studio IX, UVA Data Science and Kardinal Hall. Each is a stylized room you can walk around: WASD moves, the arrow keys look around, you can't walk through walls or furniture, and touch screens get on-screen pads.
- **Exhibits:** each room has one event card:
  - Meeting #17, the Design Bake-Off itself, at Studio IX
  - beCamp 2026 at UVA
  - October's First Wednesdays at Kardinal Hall
- **The Downtown Mall:** an outdoor walk on brick paving, past central trees and seven real local businesses, to a tensile-canopy pavilion and an original chalk wall. Storefront signs open discovery cards with dated, licensed photos and short performer histories.
- **Guided tour:** "Take the tour" flies a five-stop circuit, Studio IX → Downtown Mall → Ting Pavilion → Kardinal Hall → UVA Data Science. It pauses at each stop with the option to go inside, and has previous, next, pause and end controls. Its state is in the URL, so a stop can be linked directly.

**The pages behind it.** Every piece of content also exists as an ordinary static page:
- `/about/`: all of `site-content.md`
- `/events/`, `/places/` and `/mall/`: one page per event, place and business
- `/data/`: sources, licenses, coverage limits and the visualization choices

There are also machine-readable versions (`/content.md`, `/data/content.json`, `llms.txt`), a sitemap and structured data for search engines. Without JavaScript the home page offers links to those pages instead.

**Visual system.**

| Role | Hex |
|---|---|
| Ground (theme color) | `#0c131b` |
| Primary text | `#eef2ed` |
| Secondary text | `#9ba8aa` |
| Accent, buttons, focus ring | lime `#b6f36a` |
| Hairlines | `rgba(194, 214, 211, 0.13)` |
| Dialog panels | `#142126` |

Type is in three families, all from Google Fonts or the system:
- **Space Grotesk 500** for headings, tightly tracked (−0.045em)
- **DM Sans** for body text
- **The system monospace** for the small, widely tracked capital labels: eyebrows, the coordinate readout, card categories and the footer line

The ✳ mark, the Space Grotesk + DM Sans pairing and the lime-on-dark accent are close to Focus (Lane B).

**Motion and behavior.**
- **Self-running motion:** the city orbits on its own, and travel between destinations is an animated flight.
- **Reduced motion:** honored from the system setting and also from a toolbar toggle. The orbit stops, travel becomes instant, and CSS animation is switched off.
- **Voice:** the microphone button uses the browser's speech recognition, which may send audio to the browser's provider. Typing always works too.
- **Next meetup:** there's no next-meetup display. "Find our next meetup" links to the Meetup group. The three event exhibits are written by hand, each with the date it was checked. All three had already happened by 2026-10-10.

**For a remix.**
- **Static, with no server.** It's a plain Astro static build that needs no API key or backend, deployed as an assets-only Cloudflare Worker.
  - **Weight:** the explorer's first load transferred about 170 KB of JavaScript, 10 KB of CSS, 1.1 MB of city data and 82 KB of star data. That's much lighter than Flyover.
  - **Links and URLs:** internal links are root-absolute, so serving it from a subpath means setting Astro's `base`.
  - **Canonical address:** `site` is set to `https://www.cvaiex.org`, so canonical links, the sitemap and `llms.txt` point at that address. A copy deployed anywhere else should change it.
  - **External fonts:** fonts load from Google Fonts.
- **Its data has a contract.** `STOREFRONTS.md` defines how to update the Mall's businesses in JSON:
  - each physical storefront slot keeps a stable ID
  - the businesses in those slots can be swapped independently
  - every image carries its own attribution
  - every edit increments a revision number
  
  A validated replace command writes the file under a lock, so a bot can update businesses safely. `PLAN.md` proposes a similar JSON shape for importing the full meetup archive.
- **Attribution travels with it:**
  - City of Charlottesville buildings and streets: CC BY 4.0
  - the UVA pin: OpenStreetMap (ODbL)
  - the star catalog: BSD-3-Clause, with its license file shipped
  - the four Mall photos: CC BY 3.0, CC BY-SA 4.0 or CC0
  
  The `/data/` and `/mall/` pages carry the credits.
- **Tests.** There are five Node test files with no browser needed, for the astronomy, navigation, tour state, storefront catalog and Cloudflare output. There are also three Playwright browser specs.
- **Content coverage.** `/about/` covers all of `site-content.md`, while the explorer itself shows little of it. The past-meetup archive isn't included and is labeled as pending.
- **Ideas worth carrying over:**
  - real places as the navigation
  - an explorer backed by plain pages that work without JavaScript
  - a source and a checked date on every record
  - honest coverage notes
  - a data contract that a bot can safely update
  - a guided tour that pauses and lets you step in
