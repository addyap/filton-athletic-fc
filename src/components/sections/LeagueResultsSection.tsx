import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { leagueResults2026_27, type LeagueMatch } from '../../data/leagueResults'

const FILTON = 'Filton Athletic'

function MatchRow({ m }: { m: LeagueMatch }) {
  const isFilton = m.home === FILTON || m.away === FILTON
  const hasScorers = Boolean(m.homeScorers || m.awayScorers)

  return (
    <div
      className={`rounded-lg border p-3 sm:p-4 ${
        isFilton ? 'border-[#2f6b45]/40 bg-[#e7f0e9]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3">
        <span className={`text-right text-sm font-semibold sm:text-base ${m.home === FILTON ? 'text-[#0b2d52]' : 'text-slate-700'}`}>
          {m.home}
        </span>
        <span className="rounded bg-[#0b2d52] px-2.5 py-1 text-sm font-bold tabular-nums text-white sm:text-base">
          {m.homeScore}&ndash;{m.awayScore}
        </span>
        <span className={`text-left text-sm font-semibold sm:text-base ${m.away === FILTON ? 'text-[#0b2d52]' : 'text-slate-700'}`}>
          {m.away}
        </span>
      </div>
      {hasScorers && (
        <div className="mt-2 grid grid-cols-[1fr_auto_1fr] gap-2 text-xs text-slate-500 sm:gap-3">
          <span className="text-right">{m.homeScorers}</span>
          <span aria-hidden="true" className="text-slate-300">&middot;</span>
          <span className="text-left">{m.awayScorers}</span>
        </div>
      )}
    </div>
  )
}

function LeagueResultsSection({ headingLevel }: { headingLevel?: 'h1' | 'h2' | 'h3' } = {}) {
  if (leagueResults2026_27.length === 0) return null

  return (
    <section id="league-results" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
      <Reveal className="relative mx-auto max-w-4xl px-6 py-14">
        <SectionHeading icon="calendar" title="Around the league" className="justify-center" as={headingLevel} />
        <p className="mt-1 text-center text-sm text-slate-500">
          Every result in the division, with goalscorers &mdash; our game highlighted.
        </p>

        <div className="mt-6 space-y-8">
          {leagueResults2026_27.map((round) => (
            <div key={round.iso}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#0b2d52]">{round.label}</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {round.matches.map((m) => (
                  <MatchRow key={`${m.home}-${m.away}`} m={m} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          Updated from{' '}
          <a
            href="https://fulltime.thefa.com/index.html?league=5545575"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#0b2d52] underline"
          >
            FA Full-Time
          </a>
          .
        </p>
      </Reveal>
    </section>
  )
}

export default LeagueResultsSection
