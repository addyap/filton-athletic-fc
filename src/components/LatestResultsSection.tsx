import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { leagueResults2026_27, type LeagueMatch } from '../data/leagueResults'

const FILTON = 'Filton Athletic'

function ResultCard({ match }: { match: LeagueMatch }) {
  const involvesFilton = match.home === FILTON || match.away === FILTON

  return (
    <article
      className={`rounded-xl border p-4 shadow-sm ${
        involvesFilton ? 'border-[#2f6b45]/40 bg-[#e7f0e9]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <span className={`text-right text-sm font-semibold ${match.home === FILTON ? 'text-[#0b2d52]' : 'text-slate-700'}`}>
          {match.home}
        </span>
        <span className="rounded bg-[#0b2d52] px-2 py-1 text-sm font-bold tabular-nums text-white">
          {match.homeScore}&ndash;{match.awayScore}
        </span>
        <span className={`text-left text-sm font-semibold ${match.away === FILTON ? 'text-[#0b2d52]' : 'text-slate-700'}`}>
          {match.away}
        </span>
      </div>
      {(match.homeScorers || match.awayScorers) && (
        <div className="mt-2 grid grid-cols-[1fr_auto_1fr] gap-2 text-[11px] leading-snug text-slate-500">
          <span className="text-right">{match.homeScorers}</span>
          <span aria-hidden="true" className="text-slate-300">&middot;</span>
          <span className="text-left">{match.awayScorers}</span>
        </div>
      )}
    </article>
  )
}

function LatestResultsSection() {
  const latestRound = leagueResults2026_27[0]
  if (!latestRound) return null

  const filtonMatch = latestRound.matches.find((match) => match.home === FILTON || match.away === FILTON)
  const otherMatches = latestRound.matches.filter((match) => match !== filtonMatch).slice(0, 3)
  const matches = filtonMatch ? [filtonMatch, ...otherMatches] : latestRound.matches.slice(0, 4)

  return (
    <section id="league-results" className="border-t border-slate-200 bg-slate-50">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading icon="calendar" title="Latest results" as="h2" />
            <p className="mt-2 text-sm text-slate-500">
              {latestRound.label} &mdash; Filton&rsquo;s result is highlighted, alongside selected scores from the division.
            </p>
          </div>
          <span className="w-fit rounded-full bg-[#0b2d52] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            2026/27 season
          </span>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {matches.map((match) => (
            <ResultCard key={`${match.home}-${match.away}`} match={match} />
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          Looking for every score, scorer and the current table?{' '}
          <Link to="/first-team#league-results" className="font-semibold text-[#0b2d52] underline">
            View the complete First Team results &amp; table &rarr;
          </Link>
        </p>
      </Reveal>
    </section>
  )
}

export default LatestResultsSection
