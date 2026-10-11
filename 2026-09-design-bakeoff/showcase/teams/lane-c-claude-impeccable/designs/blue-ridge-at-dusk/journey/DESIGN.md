---
name: Cville AI Explorers
description: Building with AI in Charlottesville, Virginia. Blue Ridge at dusk.
colors:
  void: "#070a12"
  mist: "#e4eaf6"
  soft: "#b8c3d8"
  haze: "#8ea7d6"
  haze-deep: "#3b5588"
  ember: "#ff6a3d"
  ember-hot: "#ff8a63"
  rule: "rgba(142, 167, 214, 0.22)"
  rule-strong: "rgba(142, 167, 214, 0.42)"
  white: "#fff"
typography:
  display:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, min(11.2vw, 20vh), 13rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  display-date:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 8.4vw, 8.75rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.005em"
  display-join:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 11vw, 11rem)"
    fontWeight: 400
    lineHeight: 0.8
  display-footer:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.5rem, 12.6vw, 14rem)"
    fontWeight: 400
    lineHeight: 0.8
  display-mobile:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(4.5rem, 24vw, 10rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.01em"
  display-tba:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(6rem, 13vw, 13rem)"
    fontWeight: 500
    lineHeight: 0.78
    letterSpacing: "-0.005em"
  display-date-mobile:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3.75rem, 17vw, 7rem)"
    fontWeight: 500
    lineHeight: 0.82
    letterSpacing: "-0.005em"
  display-tba-mobile:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(5.5rem, 30vw, 10rem)"
    fontWeight: 500
    lineHeight: 0.78
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 6.4vw, 6rem)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "-0.005em"
  headline-small:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(2.25rem, 3.4vw, 3rem)"
    fontWeight: 400
    lineHeight: 0.86
  title:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "clamp(1.9rem, 2.7vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1
  title-sponsor:
    fontFamily: "Sofia Sans Extra Condensed, Arial Narrow, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 500
    lineHeight: 1
  lead:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2vw, 1.8rem)"
    fontWeight: 400
    lineHeight: 1.4
  lead-hero:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "clamp(1.15rem, 1.5vw, 1.4rem)"
    fontWeight: 400
    lineHeight: 1.4
  statement:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "clamp(1.4rem, 2.3vw, 2.1rem)"
    fontWeight: 400
    lineHeight: 1.3
  body:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  body-compact:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  body-small:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.18em"
  label-tagline:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)"
    fontWeight: 600
    lineHeight: 1.7
    letterSpacing: "0.18em"
  label-small:
    fontFamily: "Sofia Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  sm: "2px"
  scrollbar: "10px"
spacing:
  gutter: "clamp(1.25rem, 4vw, 4rem)"
  section: "clamp(5.5rem, 12vw, 10.5rem)"
  column-gap: "1.5rem"
  row-gap: "2.5rem"
  container: "1480px"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.void}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "0.95rem 1.35rem 0.95rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.ember-hot}"
    textColor: "{colors.void}"
  link-secondary:
    textColor: "{colors.mist}"
  nav-link:
    textColor: "{colors.soft}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.mist}"
  next-date:
    textColor: "{colors.ember}"
    typography: "{typography.display-date}"
  next-date-hover:
    textColor: "{colors.ember-hot}"
  hairline-row:
    textColor: "{colors.soft}"
    padding: "0.5rem 0"
---

# Design System: Cville AI Explorers

## Overview

**Creative North Star: "Blue Ridge at dusk"**

A blue-black void with a living particle field of haze-blue ridgelines, the mountains west of Charlottesville, that sits fixed behind the whole page. Everything typographic floats directly on that sky: no panels, no cards, no glass. The spectacle is local and quiet; the one warm thing in the world is ember, which belongs to the dusk sun resting on the far ridge and to the few things a visitor must act on.

Hierarchy comes from scale contrast, not from containers. Extra-condensed caps set very large carry names and section headings; small, widely tracked caps labels name things; hairline rules in translucent haze divide lists into rows. The field is the only depth. It pans west along the ridges as the page scrolls, parts under a cursor or finger, and thins behind hero text rather than shrinking out of the way.

The world explicitly refuses the AI-community default of a purple neural glow, a centered headline and icon cards.

**Key Characteristics:**
- Void ground (#070a12) under a fixed full-viewport WebGL ridge field.
- One warm accent, ember, reserved at rest for the next-meetup value, Join actions and the sun.
- Extra-condensed uppercase display at poster scale against small tracked labels.
- Hairline rules instead of boxes; 2px corners at most.
- Motion is slow and physical: an expo-out ease, a scroll pan, a pointer parting; all of it stops under reduced motion.

## Colors

A night palette of cool blue-grays on near-black, with a single ember accent that shares the sun's hue.

### Primary
- **Dusk Ember** (ember): the next-meetup date or TBA, the primary hero button fill ("Join us on Meetup", or "Check Meetup Page" while TBA), the skip link, text selection, the focus ring, and the sun particles in the field. It is also the hover color for secondary links, the footer links and the disclosure summary.
- **Hot Ember** (ember-hot): hover state of ember fills and of the ember date only. Never a resting color.

### Secondary
- **Ridge Haze** (haze): the far-ridge particle tone, the sponsor mark's frame and "STUDIO" strokes, and the small caps term labels in the sponsor contact list.
- **Deep Haze** (haze-deep): the near-ridge tone family and the scrollbar thumb.

### Neutral
- **Void** (void): the page and document ground, `theme-color`, and text on ember fills.
- **Mist** (mist): primary text, all display type, list items in Join, the sponsor "IX" strokes.
- **Soft** (soft): secondary text: labels, tagline, nav links at rest, the About hairline rows, sponsor and fine-print paragraphs.
- **Hairline** (rule): the default 1px divider between list rows.
- **Strong Hairline** (rule-strong): the heavier divider above Activities items and the Contact / Code of Conduct blocks, and the resting underline color of secondary links.
- **White** (white): one hover state only, the sponsor mark's "IX" brightening from mist. Never used at rest.

### Named Rules
**The One Ember Rule.** At rest, ember appears only on the next-meetup value, the primary Join action and the dusk sun. Anywhere else it is state feedback (hover, focus, selection) and must disappear when the pointer leaves.

**The Borrowed Light Rule.** Every blue in the UI is sampled from the ridge field (haze, haze-deep and their translucent hairlines). Don't introduce a blue, purple or teal that the field doesn't already contain.

## Typography

**Display Font:** Sofia Sans Extra Condensed (with Arial Narrow, sans-serif), self-hosted, weights 300-600
**Body Font:** Sofia Sans (with system-ui, sans-serif), self-hosted, weights 400-600

**Character:** A tall, narrow poster face for names and headings, always uppercase, paired with the same family's regular width for reading and for the tracked labels. One superfamily keeps the contrast in scale and width, not in style.

### Hierarchy
- **Display** (400, clamp(4.5rem, min(11.2vw, 20vh), 13rem), 0.8): the site name in the hero, stacked one line per word; at 860px and below it becomes display-mobile (clamp(4.5rem, 24vw, 10rem)). The Join heading (display-join, clamp(4.5rem, 11vw, 11rem)) and the footer name (display-footer, clamp(3.5rem, 12.6vw, 14rem), nowrap) are siblings of the same role.
- **Display Date** (500, clamp(4rem, 8.4vw, 8.75rem), 0.82): the next-meetup date in ember (month and day, always one line: the month abbreviates, e.g. "Oct 27", only where the full name would wrap), with the weekday beneath at 0.34em and 0.06em tracking; the year joins it only when the meetup is not in the current year. TBA runs larger (display-tba, clamp(6rem, 13vw, 13rem), 0.78). At 860px and below they become display-date-mobile (clamp(3.75rem, 17vw, 7rem)) and display-tba-mobile (clamp(5.5rem, 30vw, 10rem)).
- **Headline** (400, clamp(3rem, 6.4vw, 6rem), 0.86): section headings, uppercase, balanced. Fine-print headings step down to headline-small (clamp(2.25rem, 3.4vw, 3rem)).
- **Title** (400, clamp(1.9rem, 2.7vw, 2.75rem), 1): short uppercase phrases read across a row (Activities), and the sponsor name as title-sponsor (2.25rem / 500).
- **Lead** (400, clamp(1.35rem, 2vw, 1.8rem), 1.4, max 34-40ch): the opening statement of a section. The Mission paragraph is a larger sibling, statement (clamp(1.4rem, 2.3vw, 2.1rem), 1.3, 36ch); the hero About lead a smaller one, lead-hero (clamp(1.15rem, 1.5vw, 1.4rem)).
- **Body** (400, 1.125rem, 1.6, max 46-60ch): paragraphs. Buttons, secondary links and hero About rows use body-small (1rem); Get Involved rows use body-compact (1.0625rem).
- **Label** (600, 0.8125rem, 0.16-0.18em tracking, uppercase): names of things (Next Meetup, About Us, Get Involved), nav links, the disclosure summary, footer links. The hero tagline is a fluid sibling, label-tagline (clamp(0.8125rem, 1vw, 0.9375rem), 1.7). Contact terms step down to label-small (0.75rem) in haze.

### Named Rules
**The Caps-Only Display Rule.** The extra-condensed face is set uppercase only, at 0.78-0.86 leading; the tight leading is safe because caps have no descenders. Never set it in sentence case or as running text.

**The Label Names, Never Decorates Rule.** A tracked label only names the content directly below it with words the content already uses. It never introduces a section with invented copy.

## Layout

A 12-column grid (1.5rem column gap) inside a centered container (max 1480px) with a fluid side gutter of clamp(1.25rem, 4vw, 4rem). Sections are separated by a large fluid block of clamp(5.5rem, 12vw, 10.5rem) and have no background change between them; the field is continuous.

Sections split heading and body: heading in columns 1-5, body in 6-12, with a 2.5rem row gap. The hero is asymmetric: name and About block span columns 1-8, the next-meetup block right-aligned in 9-12 and top-aligned so the date or TBA caps line up with the top of the site name (its label rides just above). The hero fills the small viewport height and tucks under the top bar so the name sits against open sky. Lists that run across (Activities) use equal columns: 4 at desktop, 2 below 1080px, 1 below 640px. Two-column hairline lists (About, Get Involved) collapse to one below 640px.

Breakpoints: 1080px (headings go full width above bodies), 860px (hero stacks: name, date, actions, then About; everything left-aligns), 760px (the top bar hides; it carries only section anchors), 640px (single columns, full-width Join button on the Join section).

The footer fills the viewport and ends the page at the ridge: the name at full width, a tagline and links row, then the legal line.

## Elevation & Depth

No shadows anywhere. The system is flat type on a void; the only depth is the WebGL particle field behind the page (fixed, full viewport, pointer-events none, z-index 0, content at z-index 1). The field layers six ridges from pale far haze to saturated near haze, a sun of ember particles resting on the far ridge, and a sparse layer of first stars. Crests are brightest and each ridge thins into haze below its crest. A static canvas render replaces animation when reduced motion is requested or WebGL is unavailable.

### Named Rules
**The Sky Is the Only Surface Rule.** Content never sits on a panel, card, blur or shadow. If text needs separation from the field, the field thins behind it; the text does not get a box.

## Shapes

Square by default. Radius appears only as a 2px softening on the primary button, the focus ring and the sponsor mark link, plus the browser scrollbar thumb (10px, a themed browser surface, not a component). Division is done with 1px horizontal hairlines (rule or rule-strong), never with enclosing borders. Icons are inline SVG strokes at 1.6 on a 20px grid with square caps: a north-east arrow for outbound links and a plus that collapses to a minus for the disclosure.

## Components

### Buttons
Flat, warm and decisive; there is one filled button style and it always means "join".
- **Shape:** nearly square (2px radius).
- **Primary:** ember fill, void text, Sofia Sans 600 at 1rem with 0.02em tracking, padding 0.95rem 1.35rem 0.95rem 1.5rem, trailing north-east arrow.
- **Hover / Focus:** fill shifts to ember-hot over 0.2s; the arrow nudges 2px up-right on the expo-out ease; press moves the button down 1px. Focus is a 2px ember outline offset 4px.
- **Secondary (link):** mist text at 500 weight with a 1px underline in strong hairline, offset 0.22em; on hover the underline turns ember. Always paired beside or under the primary button.

### Navigation
- **Style:** a transparent top bar, labels in soft (0.8125rem, 600, 0.16em tracking, uppercase). Section anchors only, left-aligned. Outbound links (Meetup, GitHub) live in the hero, the Join section and the footer, never in the bar.
- **States:** hover lifts soft to mist; focus uses the ember ring.
- **Mobile:** below 760px the bar is hidden entirely and the name sits at the top of the page.

### Next Meetup (signature)
The page's one ember headline: a tracked "Next Meetup" label, then the date as a single link in ember display type (month and day, the weekday smaller beneath with an arrow; the year only if it isn't this year). When the date has passed, the slot shows "TBA" at larger scale as plain text, and the primary button beneath relabels to "Check Meetup Page" (group page), so the hero never offers two links to the same place. On hover the date warms to ember-hot and an underline fades in. Driven by one data value.

### Hairline Lists
Rows separated by 1px hairlines, text in soft (About) or mist (Get Involved), 0.5-0.85rem vertical padding, two columns collapsing to one on phones. Activities is the display variant: title-size uppercase phrases under a strong hairline with 1.25rem top padding.

### Disclosure
A native details/summary between a top and bottom hairline. The summary is a mist label with a plus icon at the far right; hovering turns it ember, opening collapses the plus's vertical stroke. The body fades and drops in 6px over 0.5s, soft text at max 60ch. Contact terms inside use a 6rem haze label column.

### Ridge Field (signature)
The fixed WebGL canvas described under Elevation. It pans west in proportion to scroll, the sun sinks slightly as the page ends (and further in the TBA state), particles part around the pointer or a touch, and the haze thins behind hero text. The sun is placed at the clear point on the far ridge nearest the open sky between the About block and the date. Where no ridge point clears the hero text (short, wide screens with a long date), the sun has set and only its afterglow tints the crest. The sun never sits behind text.

## Do's and Don'ts

### Do:
- **Do** keep ember off everything at rest except the next-meetup value, the primary Join button and the sun.
- **Do** set every heading in Sofia Sans Extra Condensed uppercase at 0.78-0.86 leading and let scale carry hierarchy.
- **Do** name content with tracked labels (0.8125rem, 600, 0.16-0.18em, uppercase, soft).
- **Do** divide lists with 1px hairlines in rule (rgba(142, 167, 214, 0.22)) or rule-strong.
- **Do** mark every outbound link with the inline north-east arrow that nudges 2px on hover.
- **Do** let the field thin behind text rather than shrinking or boxing the mountains.
- **Do** stop the pan, parting and intro under prefers-reduced-motion and fall back to a still render.

### Don't:
- **Don't** use cards, glass, blurred panels, glow borders or drop shadows.
- **Don't** add a purple or neon gradient, or any hue the ridge field doesn't contain.
- **Don't** use a glowing outlined button or a second filled button color.
- **Don't** round corners beyond 2px.
- **Don't** set the condensed display face in sentence case or as body copy.
- **Don't** add a label that introduces a section with invented copy; labels name what is already there.
