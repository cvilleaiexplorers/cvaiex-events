# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Delegated: static HTML, CSS and vanilla JS, with no build step. The hackathon scope is local-only, so a page that opens straight from disk or a trivial local server is the fastest to iterate on and the easiest for teammates to read. The only dynamic behavior, the next-meetup date and its TBA fallback, is a few lines of JS. The production site in the parent repo is a Next 14 + Tailwind + shadcn static export (`output: 'export'`, `.nojekyll`, likely GitHub Pages at cvaiex.org). A chosen design ports into it later, and that port is out of scope here.

## Users

Two audiences carry equal weight, and the site must serve both without making either feel like the secondary one:

- **Active local builders.** Developers and tinkerers in the Charlottesville area who already build with AI. They want peers, technical demos and a place to present their own projects.
- **Curious newcomers.** Local people interested in AI who haven't built much yet. They need to see that they're welcome and that showing up is easy.

Both groups arrive with the same first job: find out when the next meetup is and how to get there, then decide whether this group is for them.

## Product Purpose

The website of Cville AI Explorers (CvAIEx), a monthly in-person AI meetup in Charlottesville, Virginia. It explains who the group is and what happens at meetups, points people to the next event, and routes them to the channels where the community actually lives: Meetup, Cville Slack and GitHub. It also credits the group's sponsor.

Success means a visitor leaves knowing the next date, or knowing where to check for it, and knows how to join.

## Positioning

The group is hands-on and local. It centers building and implementing over talking about AI, while explicitly welcoming people who are still learning. It is a practitioner community run by volunteers and hosted at a real downtown coworking space. It is not a company, course or vendor. Its track record is concrete: 17 meetups since March 2025 with named local speakers, demo days, panels, a book club, lunch-and-learns and joint events with Charlottesville Data Science.

## Operating Context

- Operates under the **Charlottesville Technologists** Meetup group (meetup.com/cville-tech). RSVPs and event pages live there, not on this site.
- Organizers are reached in the **#cvilleaiexplorers** channel on **Cville Slack**.
- Meetups usually take place at **Studio IX**, 969 2nd St SE, Charlottesville. Some events happen elsewhere or online, such as UVA School of Data Science or a virtual lunch-and-learn.
- Code of Conduct: follows the Cville Slack Code of Conduct (github.com/cville/conduct).
- This folder is the kit for the **AI Design Bake-Off** (Meeting #17, 2026-09-29). Teams redesign the site from `site-content.md` only, locally, in about 60 minutes, and demo at phone width.

## Capabilities and Constraints

- **Content is fixed.** `site-content.md` is the only content source for the core site. Keep its text and reinvent everything else. Don't add copy, claims or sections beyond it, except the optional stretch goals below.
- **Next-meetup behavior is required.** The hero date links to that meetup's event page. After the date passes, show "TBA: Check Meetup Page" linking to the group page instead. The listed date, July 28, 2026, has already passed as of 2026-09-29, so **the TBA state is the live state right now** and must look intentional, not like an error. Drive the date from a single data value.
- **Sponsor details expand.** The Studio IX block has a "Learn More" disclosure containing the space description, amenities and tour contacts (email, phone, website).
- Every section in `site-content.md` must render: Hero, About Us, Our Mission, Activities and Directions, Join Us / Get Involved, Contact, Our Sponsors, Code of Conduct and Footer.
- Must work at phone width. It's judged there at the showcase.
- **Optional stretch goals:** a Past Meetups section built from `past-meetups.md`, and a "road not taken" page of discarded concepts.
- **Undecided:** CvAIEx has no logo or wordmark of its own. None exists in the repo, and none should be implied to be official.

## Brand Commitments

- Name: **Cville AI Explorers**. Short form **CvAIEx**. Tagline: "Building with AI in Charlottesville, Virginia."
- Voice from the existing copy: plain, practical and inclusive. It uses first person plural ("we") and says "builders, learners, and enthusiasts". It avoids hype.
- **Studio IX logo** (`STUDIO_IX_Logo_White.jpg`): the sponsor's mark. Note that `site-content.md` calls it "white logo on a dark background", but the file is actually mid-gray "STUDIO" and near-black "IX" in an open frame on a **white** background. The owner approved vectorizing and recoloring it (2026-09-29). Keep its geometry, meaning the open frame whose right edge becomes the "I" of "IX", and keep the two-tone split between "STUDIO" and "IX". Colors may follow the page.

## Evidence on Hand

- `site-content.md`: all core site copy and links.
- `past-meetups.md`: 17 meetups from 2025-03-12 to 2026-09-29, with dates, speakers and affiliations, titles, summaries and Meetup event links.
- `STUDIO_IX_Logo_White.jpg`: the sponsor logo, 7600×3200.
- **Absent, so don't fabricate:** event photos, member or attendance counts, testimonials or quotes, speaker headshots, a CvAIEx logo, and any sponsor claims beyond `site-content.md`.

## Product Principles

1. **The next meetup is the product.** When and where to show up outranks everything else, and the TBA state gets the same care as a confirmed date.
2. **Welcome both doors.** Every section should read as useful to someone who already builds and inviting to someone who wants to learn. Never gatekeep, and never water down.
3. **Show building, not buzz.** The group's credibility comes from hands-on work and real local people. Prefer the concrete over AI-hype language or imagery.
4. **Point outward.** The community lives on Meetup, Slack and GitHub. The site sends people there quickly and doesn't try to replace them.
5. **Local, not generic.** This is a Charlottesville group that meets in a real room. That specificity is what a generic AI-community template can't copy.

## Accessibility & Inclusion

The audience explicitly includes beginners and people with no coding or design background. Target WCAG 2.2 AA. Links and the sponsor disclosure must be keyboard-operable, and the date and TBA states must be readable as text, not conveyed by color alone.
