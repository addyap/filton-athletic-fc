import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { aTeamFixtures, firstTeamFixtures, reserveFixtures, type Fixture } from '../data/club'

type TeamResults = {
  label: string
  /** How the team appears in a scoreline. */
  name: string
  href: string
  fixtures: Fixture[]
}

const teams: TeamResults[] = [
  { label: 'First Team', name: 'Filton Athletic', href: '/first-team#fixtures', fixtures: firstTeamFixtures },
  { label: 'Reserves', name: 'Filton Reserves', href: '/reserves', fixtures: reserveFixtures },
  { label: "A's", name: 'Filton A', href: '/as-team', fixtures: aTeamFixtures },
]

const competitionLabels: Record<string, string> = {
  GCL: 'League',
  PREM: 'League',
  BSD4: 'League',
  CC: 'County Cup',
  FR: 'Friendly',
  LBC: 'Len Bartlett Cup',
  LJC: 'Les James Cup',
  GFA: 'GFA Senior Cup',
  ABC: 'Alf Bosley Cup',
  BSPC: 'League Cup',
}

/** A played result, home team first: "W 1-5", "L 0-2", or a walkover. */
const PLAYED = /^[WDL] /
const SCORE = /^[WDL] (\d+)-(\d+)$/

function toDate(date: string): Date {
  const [dd, mm, yy] = date.split('/').map(Number)
  return new Date(Date.UTC(2000 + yy, mm - 1, dd, 12))
}

function formatDate(date: string): string {
  return toDate(date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', timeZone: 'UTC' })
}

function latestResult(fixtures: Fixture[]): Fixture | undefined {
  return fixtures
    .filter((f) => f.result && PLAYED.test(f.result))
    .sort((a, b) => toDate(b.date).getTime() - toDate(a.date).getTime())[0]
}

function ResultCard({ team, fixture }: { team: TeamResults; fixture: Fixture }) {
  const filtonHome = fixture.venue !== 'A'
  const home = filtonHome ? team.name : fixture.opponent
  const away = filtonHome ? fixture.opponent : team.name
  const score = fixture.result?.match(SCORE)
  const outcome = fixture.result?.[0]
  const outcomeLabel = outcome === 'W' ? 'Win' : outcome === 'L' ? 'Defeat' : 'Draw'
  const outcomeClass =
    outcome === 'W' ? 'bg-[#2f6b45] text-white' : outcome === 'L' ? 'bg-red-600 text-white' : 'bg-slate-500 text-white'

  return (
    <article className="flex flex-col rounded-xl border border-[#2f6b45]/40 bg-[#e7f0e9] p-4 shadow-sm">
      <div className="flex items-center justify-between gap-2">
        <Link to={team.href} className="text-sm font-extrabold uppercase tracking-wide text-[#0b2d52] hover:underline">
          {team.label}
        </Link>
        <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide ${outcomeClass}`}>
          {outcomeLabel}
        </span>
      </div>
      <p className="mt-0.5 text-xs text-slate-500">
        {formatDate(fixture.date)} &middot; {competitionLabels[fixture.competition] ?? fixture.competition}
      </p>

      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <span className={`text-right text-sm font-semibold ${filtonHome ? 'text-[#0b2d52]' : 'text-slate-700'}`}>{home}</span>
        <span className="rounded bg-[#0b2d52] px-2 py-1 text-sm font-bold tabular-nums text-white">
          {score ? (
            <>
              {score[1]}&ndash;{score[2]}
            </>
          ) : (
            'W/O'
          )}
        </span>
        <span className={`text-left text-sm font-semibold ${filtonHome ? 'text-slate-700' : 'text-[#0b2d52]'}`}>{away}</span>
      </div>
      {fixture.scorers && (
        <div className="mt-2 grid grid-cols-[1fr_auto_1fr] gap-2 text-[11px] leading-snug text-slate-500">
          <span className="text-right">{filtonHome ? fixture.scorers : ''}</span>
          <span aria-hidden="true" className="invisible rounded px-2 text-sm font-bold tabular-nums">
            0&ndash;0
          </span>
          <span className="text-left">{filtonHome ? '' : fixture.scorers}</span>
        </div>
      )}
    </article>
  )
}

function LatestResultsSection() {
  const results = teams
    .map((team) => ({ team, fixture: latestResult(team.fixtures) }))
    .filter((r): r is { team: TeamResults; fixture: Fixture } => Boolean(r.fixture))
  if (results.length === 0) return null

  return (
    <section id="league-results" className="border-t border-slate-200 bg-slate-50">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading icon="calendar" title="Latest results" as="h2" />
            <p className="mt-2 text-sm text-slate-500">The most recent result for each of our adult sides.</p>
          </div>
          <span className="w-fit rounded-full bg-[#0b2d52] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            2026/27 season
          </span>
        </div>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {results.map(({ team, fixture }) => (
            <ResultCard key={team.label} team={team} fixture={fixture} />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Full results, scorers and tables:{' '}
          {teams.map((team, i) => (
            <span key={team.label}>
              {i > 0 && ' · '}
              <Link to={team.href} className="font-semibold text-[#0b2d52] underline">
                {team.label}
              </Link>
            </span>
          ))}
        </p>
      </Reveal>
    </section>
  )
}

export default LatestResultsSection
