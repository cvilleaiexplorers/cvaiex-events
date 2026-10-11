---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

# Homepage

**Scope:** single-page homepage, `index.html`, as static HTML/CSS/JS with WebGL, running locally. Past Meetups waits for v2. The About Us content lives in the hero; there is no separate About section.
**Mode:** Persuade. Visitors are local builders and curious newcomers in equal measure, usually on a phone. Job: learn the next date (or that it's TBA), decide the group is for them, and reach Meetup or Slack.
**Content:** `site-content.md` verbatim. The next-meetup date is one data value, and the TBA state is the live state as of 2026-09-29.
**Anti-goals:** AI-startup gloss, AI-slop copy, a corporate look, insider signals, a soft generic look. Also none of: loader %, "Enter Portal", decorative numbered nav, glowing outlined buttons, meaningless captions.

## Direction contract

THESIS: Shader Portal grounded as "Blue Ridge at dusk". A living particle field shows the ridgelines west of Charlottesville, so the spectacle is local. It refuses the AI-community default of a purple neural glow with a centered headline and icon cards.

OWN-WORLD: A blue-black void. A haze-blue particle field in ridge ribbons that thin into haze below each crest. Ember is used only for the next-meetup date, Join actions and the dusk sun behind the far ridge. Headings are extra-condensed caps at huge scale; labels are small and tracked; rules are hairlines. No cards, glass or glow borders.

STORY: This is a real group in this valley. The next meetup is (or will be) posted here. Builders and learners both belong. Go to Meetup or Slack.

FIRST VIEWPORT: "CVILLE AI / EXPLORERS" stacks in extra-condensed caps upper-left, with the tagline beneath. Beneath that is the About Us block: a small label, the lead sentence and its five points as two columns of hairline rows. This was added at the Bake-Off room's request (2026-09-29) so visitors learn what the group is without scrolling. On the right, the Next Meetup date or TBA is set in ember display type at hero scale, with the Meetup and Slack actions under it. The ember sun rests on the far ridge in the open sky beside the date. Where no ridge point clears the hero text, the sun has set and only its afterglow tints the crest. The far-ridge horizon is measured to sit just below the About block. Where the ridges still meet hero text, as on short laptops or phones, the haze thins behind the text rather than the mountains shrinking. On a phone the order is name, date, actions, then About.

FORM: webgl-shader-portal, a dealt challenger adopted by the user, which overrides assigned grounded candidate #3. Seed dee3a674. Signature interaction: the field persists behind the whole page and pans west along the ridges on scroll, with particles parting under the cursor or a finger.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
