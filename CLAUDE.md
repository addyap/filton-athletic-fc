# Filton Athletic FC — site notes for Claude

## Match data lives in `src/data/`
- `club.ts` — fixtures and league tables for every team (`firstTeamFixtures`,
  `reserveFixtures`, `aTeamFixtures`, youth fixtures; `leagueTable`,
  `reserveTable`, `asTeamTable`). Results, scorers, attendance and officials are
  fields on each fixture. Scorer names use initial + surname, e.g. `M Hoare`.
  Walkovers are recorded as `W (walkover)` / `L (walkover)`.
- `news.ts` — club/team news. The newest item at the top of the `news` array
  feeds the hero's moving "Latest" banner (`LatestNewsBanner`) and the news feed.

## Convention: a matchday round-up headline for every match/weekend
Whenever results are updated, also add a "Saturday round-up" (or appropriate day)
news item at the top of `news.ts`, tagged with the teams that played. Its `title`
is what scrolls in the hero banner, so make it a short, punchy headline leading on
the standout result. Summarise each team's result (with scorers) in the `excerpt`,
sign off `#FATS #UTF`, and link to the relevant section. Do this every match.

## Validate before pushing
`npm run lint` and `npm run build` (the build runs tsc, the SSR build and the
prerender — 68 routes). Push results straight to `main`; Vercel deploys from it.
