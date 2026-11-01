import {
  aTeamFixtures,
  asTeamTable,
  firstTeamFixtures,
  leagueTable,
  reserveFixtures,
  reserveTable,
  tablesUpdatedAfter,
  type Fixture,
  type TableRow,
} from './data/club'
import { leagueResults2026_27 } from './data/leagueResults'
import { news } from './data/news'
import type { TeamId } from './data/teams'

type TeamData = {
  label: string
  team: TeamId
  /** Competition code of this team's league games. */
  league: string
  fixtures: Fixture[]
  table: TableRow[]
  tableName: string
}

const currentTeams: TeamData[] = [
  { label: 'First Team', team: 'first-team', league: 'GCL', fixtures: firstTeamFixtures, table: leagueTable, tableName: 'Filton Athletic' },
  { label: 'Reserves', team: 'reserves', league: 'PREM', fixtures: reserveFixtures, table: reserveTable, tableName: 'Filton Athletic Reserves' },
  { label: "A's", team: 'as', league: 'BSD4', fixtures: aTeamFixtures, table: asTeamTable, tableName: 'Filton Athletic A' },
]

/** A played game's outcome, including walkovers but not postponements (P-P). */
const PLAYED = /^[WDL] /
const SCORE = /^([WDL]) (\d+)-(\d+)$/

/** DD/MM/YY to YYYY-MM-DD, which compares correctly as a string. */
function isoDate(date: string): string {
  const [dd, mm, yy] = date.split('/')
  return `20${yy}-${mm}-${dd}`
}

function newestDate(fixtures: Fixture[]): string | undefined {
  return fixtures.map((f) => isoDate(f.date)).sort().pop()
}

/** Scores are written home team first, so W/L has to agree with the venue. */
function scoreProblem(f: Fixture): boolean {
  const match = f.result?.match(SCORE)
  if (!match || f.venue === 'N') return false
  const [, outcome, first, second] = match
  const ours = Number(f.venue === 'H' ? first : second)
  const theirs = Number(f.venue === 'H' ? second : first)
  const actual = ours > theirs ? 'W' : ours < theirs ? 'L' : 'D'
  return outcome !== actual
}

/**
 * Current-season mistakes that are easy to make when entering results. The
 * prerender fails the build if this finds any, so they can't reach the live site.
 */
export function findDataProblems(): string[] {
  const problems: string[] = []

  for (const { label, team, league, fixtures, table, tableName } of currentTeams) {
    const played = fixtures.filter((f) => f.result && PLAYED.test(f.result))
    const leagueGames = played.filter((f) => f.competition === league)

    for (const f of played.filter(scoreProblem)) {
      problems.push(`${label}: "${f.result}" (${f.venue}) v ${f.opponent} on ${f.date} doesn't fit a home-team-first score.`)
    }

    const row = table.find((r) => r.team === tableName)
    if (!row) {
      problems.push(`${label}: no "${tableName}" row in the league table.`)
    } else if (row.p !== leagueGames.length) {
      problems.push(`${label}: the table says ${row.p} league games played, but the fixtures have ${leagueGames.length} results.`)
    }

    const newestLeague = newestDate(leagueGames)
    if (newestLeague && tablesUpdatedAfter < newestLeague) {
      problems.push(`${label}: tablesUpdatedAfter (${tablesUpdatedAfter}) is older than the ${newestLeague} league result.`)
    }

    const newest = newestDate(played)
    if (newest && !news.some((item) => item.teams.includes(team) && item.date >= newest)) {
      problems.push(`${label}: no news round-up tagged "${team}" for the ${newest} result.`)
    }
  }

  const newestFirstTeamLeague = newestDate(
    firstTeamFixtures.filter((f) => f.competition === 'GCL' && f.result && PLAYED.test(f.result)),
  )
  const latestRound = leagueResults2026_27[0]?.iso
  if (newestFirstTeamLeague && (!latestRound || latestRound < newestFirstTeamLeague)) {
    problems.push(`Latest results: the newest round in leagueResults.ts is ${latestRound}, but the First Team played on ${newestFirstTeamLeague}.`)
  }

  return problems
}
