import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { fetchLiveMatches, hasLiveActivity, type LiveMatch, type LiveMatchStatus } from '../data/liveMatches'
import { teamName } from '../data/teams'

/** How often the page re-checks for score updates while something is live. */
const POLL_MS = 20_000

const statusMeta: Record<LiveMatchStatus, { label: string; tone: string }> = {
  scheduled: { label: 'Kick-off', tone: 'bg-slate-100 text-slate-600' },
  live: { label: 'Live', tone: 'bg-[#e2f2e6] text-[#1d6038]' },
  ht: { label: 'Half-time', tone: 'bg-amber-100 text-amber-800' },
  ft: { label: 'Full-time', tone: 'bg-slate-800 text-white' },
  postponed: { label: 'Postponed', tone: 'bg-red-100 text-red-800' },
}

function LiveDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d6038] opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1d6038]" />
    </span>
  )
}

function MatchCard({ match }: { match: LiveMatch }) {
  const meta = statusMeta[match.status]
  const scoreKnown = match.homeScore != null && match.awayScore != null
  const [homeTeam, awayTeam] =
    match.venue === 'H' ? [teamName(match.team), match.opponent] : [match.opponent, teamName(match.team)]
  const [homeScore, awayScore] = match.venue === 'H' ? [match.homeScore, match.awayScore] : [match.awayScore, match.homeScore]

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-[#0b2d52]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0b2d52]">
          {teamName(match.team)}
        </span>
        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${meta.tone}`}>
          {match.status === 'live' && <LiveDot />}
          {meta.label}
        </span>
        <span className="text-xs font-medium uppercase tracking-wide text-slate-400">{match.competition}</span>
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 sm:gap-8">
        <p className="flex-1 text-right text-lg font-bold text-[#0b2d52] sm:text-xl">{homeTeam}</p>
        <p className="text-3xl font-extrabold tabular-nums text-[#0b2d52] sm:text-4xl">
          {scoreKnown ? `${homeScore} – ${awayScore}` : match.kickOff}
        </p>
        <p className="flex-1 text-left text-lg font-bold text-[#0b2d52] sm:text-xl">{awayTeam}</p>
      </div>

      {match.note && <p className="mt-4 text-center text-sm text-slate-600">{match.note}</p>}

      <p className="mt-5 text-center text-xs text-slate-400">
        {match.ground && <>{match.ground} &middot; </>}
        Updated {match.lastUpdated}
      </p>
    </div>
  )
}

function MatchCentrePage() {
  const [matches, setMatches] = useState<LiveMatch[] | null>(null)
  const live = matches ? hasLiveActivity(matches) : false

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Match Centre — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  useEffect(() => {
    let cancelled = false
    const load = async () => {
      const data = await fetchLiveMatches()
      if (!cancelled) setMatches(data)
    }
    load()
    const id = window.setInterval(load, POLL_MS)
    return () => {
      cancelled = true
      window.clearInterval(id)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="flex items-center gap-2 text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">
            {live && <LiveDot />}
            Filton Athletic FC
          </p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">Match Centre</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            Live scores from across the club as they happen.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {matches === null ? (
          <p className="text-center text-sm text-slate-400">Loading&hellip;</p>
        ) : matches.length === 0 ? (
          <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
            <h2 className="text-xl font-bold text-[#0b2d52] sm:text-2xl">No live match right now</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Nothing is being followed live at the moment. Scores appear here as soon as a match kicks off —
              check back on matchday, or see what&rsquo;s coming up on the fixtures page.
            </p>
            <Link
              to="/fixtures"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#0b2d52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123a68]"
            >
              See upcoming fixtures
              <span aria-hidden>&rarr;</span>
            </Link>
          </section>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {matches.map((match) => (
              <MatchCard key={`${match.team}-${match.opponent}`} match={match} />
            ))}
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}

export default MatchCentrePage
