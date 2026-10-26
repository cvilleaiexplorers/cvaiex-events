# Process narrative: Cosmic City

---

## Organizers' notes, 2026-10-10

**Tool.** Travis used OpenCode, an open-source coding agent, with no design skill. The result is a static Astro 7 + TypeScript site that draws its 3D scenes with plain three.js. It comes with Node scripts that import the public data, and with tests.

**When it was built.** Travis started it at the bake-off and finished most of it the next day, Sep 30. It runs to 76 files and about 10,800 lines.

**Feedback rounds.** The README ends at "Feedback checkpoint 4," with four questions for reviewers about movement, the Mall, the guided tour and what to add next. `PLAN.md` says "each stage ends in a preview and feedback round." It records decisions from earlier rounds, such as:
- the green palette "remains approved for now; palette decisions await the group"
- the star sky is to stay "a subtle background Easter egg," with no labels or controls
- Studio IX is pronounced "Studio icks," while other spellings typed or spoken still work

**Sources and verification.** Much of the work went into getting facts right and saying where they came from:
- **Events:** each one is marked with the date it was checked against its public Meetup or UVA page.
- **Venues:** each pin records whether its position is approximate or taken from OpenStreetMap.
- **Missing heights:** about 75 buildings had no usable height, so they use a fallback that's marked as estimated.
- **The Mall:** a public walking-tour video was used as a spatial reference. Frames were extracted to a private folder and aren't published.
- **Photos and stars:** the Mall photos are licensed Wikimedia Commons images, downloaded by a script that checks each license first. The star catalog is pinned to a specific revision.
- **Coverage:** the site says where it's incomplete. The archive is "pending source material," and "no complete historical coverage is claimed."

**Deployment.** `DEVOPS.md` records a real debugging session. Cloudflare's new beta CLI generated a server configuration that this static site couldn't use. The fix was a small build step that writes a validated assets-only bundle, and the result was deployed to a Cloudflare Workers URL. The custom domain was never switched over.

**What came next.** Eugene's Flyover later imported this project's Charlottesville building data. Its notes plan to merge the two experiences into one site.
