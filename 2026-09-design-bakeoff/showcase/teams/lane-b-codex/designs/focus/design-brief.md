# Design brief: Focus

I designed the page for someone curious about AI who might attend a local meetup. It moves from a striking opening to the next event and RSVP, then to three past-event cards.

The woven image references the Ix neighborhood’s textile history. A dark background and bright lime accents frame large Space Grotesk headings, with DM Sans for body text. Blue and pink distinguish the past-event cards.

Details expand on demand, and the cards scroll sideways on phones. Gentle motion adds interest without interrupting reading. Registration stays on Meetup, with a short reassurance beside the button that newcomers are welcome.

---

## Observed on the deployed site, 2026-10-10 (organizers' notes)

*Everything above the line is Sifan's. The notes below come from the organizers, who read the live site at [cville-ai-focus.sifanye-ghost.chatgpt.site](https://cville-ai-focus.sifanye-ghost.chatgpt.site) and its CSS and JavaScript, and from the [design notes](https://cville-ai-woven.sifanye-ghost.chatgpt.site/design-notes.html) Sifan published with an earlier version. The site is live, so the meetup content will have changed since then.*

**Concept.** The hero art (`filament-knot.webp`) is an AI-generated abstraction of luminous strands knotted into a single form. According to Sifan's design notes, it refers to the Ix site's textile mill (1928–1999), now a neighborhood of art, work and community, which suggested "individual strands woven into a shared form." The notes also say the image is original, not a photo of the venue or an existing local artwork. The copy around it is spare: a short headline, "Stay curious. Build together.", with "together." in lime.

**Visual system.** The palette:

| Role | Color | Hex |
|---|---|---|
| Ground (theme color) | near-black olive | `#121510` |
| Primary text | warm off-white | `#f3f4eb` |
| Secondary text | muted sage | `#b6bdaa` |
| Hairline rules | dark olive | `#343a2c` |
| Single accent | lime | `#d2f75a` |
| Keyboard focus ring | sky blue | `#8dbbff` |

The lime marks the headline word, the primary buttons and the full-bleed next-meetup band, where the text flips to the ground color.

The three past-meetup cards each get their own accent: blue `#a5c8ff` on `#19242c`, lime on `#252d18`, and pink `#e7b7ca` on `#2b2027`. Each card has a border in a deeper shade of its color, which brightens to the accent on hover. Sifan's brief mentions only blue and pink, but the middle card is lime.

Type is in two families:
- **Space Grotesk 500** for every heading, in sentence case with tight negative letter-spacing, and at poster scale in the hero.
- **DM Sans** for body text (400) and buttons (600).

Small labels ("NEXT MEETUP", "PREVIOUSLY, TOGETHER", card topics) are written in capitals in the content itself, not via CSS, in DM Sans 500 with wide letter-spacing. Any geometric grotesk with some character, paired with a plain geometric sans for text, would substitute.

**Layout.**
- **Header:** an asterisk mark (✳) beside a two-line wordmark, plus two nav links. "Next meetup" is an outlined button.
- **Hero:** a thin eyebrow row reads "Charlottesville, Virginia" on the left and "A local AI community" on the right. The headline, two lines of subcopy and a "Join the next meetup ↘" button sit on the left. The art bleeds off the right edge and fades out at its sides.
- **Next-meetup band:** a lime band divided into three columns:
  - a large date block: month, a huge day number, then weekday and year
  - the event: meeting number, short title, a two-sentence summary, when and where, and a "What to expect" disclosure with the full description
  - actions: a dark "RSVP on Meetup ↗" button, the newcomer reassurance, and "Add to calendar +"
- **Past meetups:** a heading with a "Three recent meetups ↘" hint, then three equal cards. Each card shows date, meeting number, topic, a two-line title and a one-line summary, with an "Inside this meetup +" disclosure for speakers, venue and the Meetup link.
- **Footer:** links to Slack, the Code of Conduct and "Share this site". Share opens a dialog with a QR code and a copy-link button. The footer also labels the page an independent design concept and links to the official site.
- **Phones:** the art drops below the headline, the meetup columns stack, and the cards become a sideways-scrolling deck.

**Motion and behavior.**
- **Motion:** the knot slowly floats and tilts on a 12-second loop. Buttons and cards lift slightly on hover, and opened details fade up into place. All of it switches off when the visitor has reduced motion turned on.
- **Live meetup data:** the next meetup isn't written into the page. The browser fetches it from the site's own `/api/events` endpoint, which syncs from Meetup. It refreshes every five minutes and whenever the tab regains focus, and an "Updated 11:04 PM EDT · Meetup" line shows how fresh it is.
- **States:** the band is designed for four:
  - **fresh:** the full event and "RSVP on Meetup"
  - **stale:** the last synced details, a warning, "Check on Meetup" and a retry button
  - **failed:** "Find the next meetup." and a link to the group
  - **nothing scheduled:** "The next date is on its way."
- **Derived text:** the band's title is the part of the Meetup topic before the colon, and the summary is its first two sentences.
- **Calendar:** "Add to calendar" downloads an `.ics` file from `/api/calendar`.

**For a remix.**
- **Live Meetup sync, a defining feature of this version.** The next-meetup band updates itself when a new meetup is posted, with nobody editing the site. On 2026-10-10 it showed Meeting #18 (Oct 28), which hadn't been announced when the site was built. The event IDs the endpoint returns look like `event_316885023@meetup.com`, the format Meetup uses in its public calendar (iCal) feed. That suggests the server reads the group's calendar feed rather than Meetup's API, though we can't see the server code to confirm it.
- **Not a static site.** The Meetup sync, the freshness states and the calendar file all depend on server endpoints provided by ChatGPT Sites. A browser usually can't read Meetup's feed directly from another site, so a static rebuild needs another route:
  - a scheduled job, such as a GitHub Action that writes an `events.json` into the deployed site
  - a small proxy, such as a Cloudflare Worker
  - a hand-edited fallback
- **External fonts.** Fonts load from Google Fonts.
- **Content coverage.** Focus is deliberately narrow. Compared with `site-content.md`, it keeps the hero, Slack and the Code of Conduct, and adds the live next meetup and three past meetups. It drops About Us, Mission, Activities, Join Us, Sponsors and the Studio IX details, so a remix would need to add them back.
- **Ideas worth carrying over:**
  - a single accent with a clear job
  - an event band that names its own data freshness
  - designed states for stale, failed and empty data
  - disclosure for detail instead of more copy
