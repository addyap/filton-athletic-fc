/**
 * The club's teams. This is the single source of truth for team identity used to
 * tag news/info so it can be surfaced on the front page (all teams) and filtered
 * onto each team's own page.
 *
 * 'club' is a scope for club-wide items (not a team with its own page): anything
 * tagged 'club' shows on the front page and on every team page.
 */
export type TeamId = 'first-team' | 'reserves' | 'as' | 'youth' | 'club'

export type Team = {
  id: TeamId
  /** Short label shown on news badges and headings. */
  name: string
  /** The team's own page/section. 'club' has no dedicated page, so no href. */
  href?: string
}

/** Teams with their own pages, in display order. */
export const teams: Team[] = [
  { id: 'first-team', name: 'First Team', href: '/first-team' },
  { id: 'reserves', name: 'Reserves', href: '/reserves' },
  { id: 'as', name: "A's", href: '/as-team' },
  { id: 'youth', name: 'Youth', href: '/youth' },
]

const clubScope: Team = { id: 'club', name: 'Club' }

const byId: Record<TeamId, Team> = {
  club: clubScope,
  'first-team': teams[0],
  reserves: teams[1],
  as: teams[2],
  youth: teams[3],
}

export function teamName(id: TeamId): string {
  return byId[id]?.name ?? id
}

export function teamHref(id: TeamId): string | undefined {
  return byId[id]?.href
}
