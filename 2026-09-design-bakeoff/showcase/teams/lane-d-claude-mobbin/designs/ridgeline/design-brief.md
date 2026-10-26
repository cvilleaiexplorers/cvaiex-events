# Design brief: Ridgeline

---

## Organizers' notes, 2026-10-26

**Concept.** The page is one journey, in the code's own words: "It starts on the Blue Ridge crest at dusk (Humpback Rocks, 3,080 ft), descends through the night to the town lights of Charlottesville (594 ft), then steps inside: white walls, warm wood and concrete, where the meetup actually happens."
- **The stage:** a fixed scene sits behind everything, with layered ridges, a setting sun, haze in the hollows, then stars, the town's lights and fireflies. A faint survey grid with longitude labels lies over it for the whole page.
- **The altimeter:** a track in the right margin carries a small chip that counts down from 3,080 ft. It lands at 594 ft and bows out as you go indoors.
- **Indoors:** a white wall rises over the night for the content, and the sponsor section is a warm oak room.

**Sequence.**
- **Hero, on the crest:** the coordinates 38.0293° N, 78.4767° W, the headline "Cville AI Explorers" in staggered wide capitals, "Building with AI in Charlottesville, Virginia," and a next-meetup chip pinned to the ridge like a map marker.
- **On the way down, at night:**
  - **Next Meetup:** the date or "TBA," a "Check Meetup Page" link, and "We meet monthly, usually at Studio IX."
  - **Recent Meetups:** the last three meetups as video cards marked "Recording coming soon," each with its speakers and event page.
  - **About Us, Our Mission, Activities and Directions,** with Studio IX marked among the town lights.
- **Indoors, on the white wall:** Join Us and Get Involved, then Contact, with links to Charlottesville Technologists on Meetup and #cvilleaiexplorers on Slack.
- **The oak room:** Our Sponsors, with the Studio IX logo set so it reads as printed on the wall, its description and tour contacts.
- **Code of Conduct,** then a footer that signs off with "38.0293° N, 78.4767° W, elevation 594 ft."

**Visual system.**

| Role | Hex |
|---|---|
| Night ground | `#131936` |
| Warm text on the night | `#FFF6E8` |
| The one accent: links, focus rings, altimeter, Studio IX pin | `#F2A93B` (marigold) |
| Ink on the wall | `#232A4D` |
| Secondary ink | `#4A5178` |
| White wall | `#F5F5F1` |
| Concrete | `#DAD8D2` |
| Oak | `#D4954E` |

Type is one variable family, Archivo. The headlines use its widest setting (width 125, weight 850, uppercase, tight leading), and the body text uses the normal width. Section headings split into words that slide in from both sides and settle as they reach the upper half of the view.

**Motion and behavior.**
- **Scroll drives the scene.** Scroll position sets the time of day, the sunset, the ridges darkening and rising as you descend, the haze and the wall coming up. The scene trails the scroll slightly, "like a camera on a slow dolly." The stars and lights are scattered from a fixed seed, so they land in the same place on every visit.
- **Photos as atmosphere:** the photos have no frames. Soft radial edges melt them into the scene, each drifts at its own pace, and they fade up as they arrive.
- **Next meetup:** a date in the code, `2026-07-28`, shows as a dated link until the day passes and then as TBA, linked to the Meetup group. Adding `?date=YYYY-MM-DD` to the address previews the dated state.
- **Reduced motion:** nothing moves. The sky still turns from dusk to night as you scroll, but the sun, ridges, fireflies, headings and photos stay in place, and smooth scrolling is off.
- **Narrow screens:** under 860 px the background photos become a soft band in the flow, and the altimeter becomes a small pill in the bottom corner.

**For a remix.**
- **One file.** The whole site is `index.html` with inline CSS and JavaScript, nine photos and the sponsor logo. There's no build step.
- **Web fonts:** Archivo loads from Google Fonts, the only request to another domain. Bundling it would make the page fully self-contained.
- **Placeholder photos:** the photos are CC0 stock, credited in `img/CREDITS.md`, which says to "swap for real meetup photos when available."
- **Content coverage:** all of `site-content.md` is here. The past meetups are limited to the three most recent, and there's no full archive.
- **Ideas worth carrying over:**
  - the scroll as a journey with a real start and end point, measured in feet
  - an altimeter as the progress indicator
  - moving from outdoors to indoors to frame the venue and sponsor
  - photos used as soft atmosphere rather than framed cards
