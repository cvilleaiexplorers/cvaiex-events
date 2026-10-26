---
team: Claude Code + OpenCode native
lead: Eugene G. and Travis E.
lane: C
tool: Claude Code and OpenCode, no design skill
designs:
  - slug: cosmic-city
    title: Cosmic City
    tool: OpenCode, no design skill
    url: https://cvaiex.bfrtrcvxfg.workers.dev
    source: https://github.com/traviseden/cvaiex/tree/4c16400
  - slug: flyover
    title: Flyover
    tool: Claude Code (Opus 5.5), no design skill
    url: https://cvaie-site.vercel.app
    source: https://github.com/ignisspindler/cvaie-site/tree/e83d1dd
---

# Claude Code + OpenCode native

Lane C: coding agent, but without the design skill the lane normally adds. Eugene and Travis each built their own 3D experiment by prompting a coding agent directly:
- **Cosmic City** is Travis's earlier, standalone version. He built it in OpenCode, an open-source coding agent.
- **Flyover** is Eugene's, built in Claude Code with Opus 5.5. It later borrowed Cosmic City's Charlottesville building data.

Flyover is the unplanned half of a Lane C comparison the team-lead guide suggests, the same agent with and without a skill, against [Claude Code + Impeccable](../lane-c-claude-impeccable/).

## Designs

- **[Cosmic City](designs/cosmic-city/)** ([live site](https://cvaiex.bfrtrcvxfg.workers.dev), [source](https://github.com/traviseden/cvaiex)): Charlottesville's real buildings float under a live star field. You pick a venue, fly there, and walk inside a stylized community room or along the Downtown Mall. Behind the 3D scene there's a full set of ordinary, crawlable pages. See its [process narrative](designs/cosmic-city/process-narrative.md) and [design brief](designs/cosmic-city/design-brief.md).
- **[Flyover](designs/flyover/)** ([live site](https://cvaie-site.vercel.app), [source](https://github.com/ignisspindler/cvaie-site)): the CvAIE logo becomes the ground. It's rebuilt from tiles laid over real elevation for a ten-mile square of Albemarle County, and scrolling flies you down onto it, across a ridge and over Charlottesville's actual buildings. The content arrives as four cards at the end. See its [process narrative](designs/flyover/process-narrative.md) and [design brief](designs/flyover/design-brief.md).

Both designs are hosted by their authors, so neither has a `site/` folder. The team didn't send narratives or briefs, so we wrote all four from their repos and sites.
