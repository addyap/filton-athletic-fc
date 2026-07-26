import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import crestTrimmed from '../assets/img/filton-athletic-crest-trimmed.webp'
import {
  nextFirstTeamFixture,
  lastFirstTeamResult,
  programmeForFixture,
  fixtureLongDate,
  competitionName,
} from '../data/programmes'
import { groundInfo, type Fixture } from '../data/club'

function venueLabel(v: Fixture['venue']) {
  return v === 'H' ? 'Home' : v === 'A' ? 'Away' : 'Neutral'
}

function resultTone(result: string) {
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  return 'bg-amber-100 text-amber-800'
}

/** Parse the fixture's 'DD/MM/YY' date without relying on Date.now(). */
function daysUntil(date: string): number | null {
  const [dd, mm, yy] = date.split('/').map(Number)
  const target = new Date(2000 + yy, mm - 1, dd)
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const diff = Math.round((target.getTime() - today.getTime()) / 86_400_000)
  return diff >= 0 ? diff : null
}

function countdownLabel(days: number) {
  if (days === 0) return "It's today!"
  if (days === 1) return 'Tomorrow'
  return `In ${days} days`
}

/** `sidebar` renders alongside the Next Match card — e.g. the X timeline — at the same visual level. */
function MatchStrip({ sidebar }: { sidebar?: ReactNode }) {
  const next = nextFirstTeamFixture
  const last = lastFirstTeamResult

  // Computed client-side only, after mount: the page is prerendered to static
  // HTML, so "today" at build time would otherwise get baked in and go stale.
  const [days, setDays] = useState<number | null>(null)
  useEffect(() => {
    if (next) setDays(daysUntil(next.date))
  }, [next])

  if (!next && !last) {
    return (
      <section aria-label="Season status" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#0b2d52]">
            Matchday <span className="text-slate-400">&middot; #FATS #UTF</span>
          </h2>
        </div>
        <div className={`mx-auto max-w-6xl gap-6 px-4 pb-8 pt-4 sm:px-6 ${sidebar ? 'grid sm:grid-cols-5 sm:items-start' : ''}`}>
          <div className={`rounded-xl border border-[#0b2d52] bg-[#0b2d52] p-5 text-center text-white sm:p-6 ${sidebar ? 'sm:col-span-3' : ''}`}>
            <span className="text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">
              2026/27 season
            </span>
            <h3 className="mt-2 text-lg font-bold sm:text-xl">Fixtures announced soon</h3>
            <p className="mx-auto mt-1 max-w-xl text-sm text-slate-200">
              We&rsquo;re putting the new season&rsquo;s schedule together &mdash; check back shortly for
              the first fixture, or{' '}
              <a href="#join" className="font-semibold text-[#a9e0b8] underline hover:text-white">
                get in touch if you want to play
              </a>
              .
            </p>
          </div>
          {sidebar && <div className="sm:col-span-2">{sidebar}</div>}
        </div>
      </section>
    )
  }

  const nextProgramme = next ? programmeForFixture(next) : undefined
  const hasSecondColumn = Boolean(last || sidebar)

  return (
    <section aria-label="Latest match information" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#0b2d52]">
          Matchday <span className="text-slate-400">&middot; #FATS #UTF</span>
        </h2>
      </div>
      <div className={`mx-auto max-w-6xl gap-6 px-4 pb-10 pt-4 sm:px-6 ${hasSecondColumn ? 'grid sm:grid-cols-5 sm:items-start' : ''}`}>
        {next && (
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1c3f6e] via-[#0f2c52] to-[#0a2340] text-white shadow-lg ${hasSecondColumn ? 'sm:col-span-3' : ''}`}
          >
            <img
              src={crestTrimmed}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 object-contain opacity-10 sm:h-80 sm:w-80"
            />
            <div className="relative flex flex-col p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#a9e0b8] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#0b2d52]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#0b2d52] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#0b2d52]" />
                  </span>
                  Next match
                </span>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                  {venueLabel(next.venue)}
                </span>
                {days != null && (
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                    {countdownLabel(days)}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                Filton Athletic <span className="text-[#a9e0b8]">vs</span> {next.opponent}
              </h3>
              <p className="mt-3 text-base text-slate-100 sm:text-lg">
                {fixtureLongDate(next.date)} &middot; Kick-off {next.time}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {competitionName(next.competition)}
                {next.venue === 'H' ? ` · ${groundInfo.name}` : ''}
              </p>
              {nextProgramme && (
                <Link
                  to={`/programme/${nextProgramme.slug}`}
                  className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b2d52] transition hover:bg-[#a9e0b8]"
                >
                  View matchday programme
                  <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              )}
            </div>
          </div>
        )}

        {hasSecondColumn && (
          <div className={`flex flex-col gap-6 ${next ? 'sm:col-span-2' : ''}`}>
            {last && (
              <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <span className="w-fit rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
                  Last result
                </span>
                <h3 className="mt-4 text-xl font-bold text-[#0b2d52] sm:text-2xl">
                  Filton Athletic <span className="text-slate-400">vs</span> {last.opponent}
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  {fixtureLongDate(last.date)} &middot; {venueLabel(last.venue)}
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-base font-bold ${resultTone(last.result!)}`}>
                    {last.result}
                  </span>
                </div>
                {last.scorers && <p className="mt-2 text-sm text-slate-600">{last.scorers}</p>}
              </div>
            )}
            {sidebar}
          </div>
        )}
      </div>
    </section>
  )
}

export default MatchStrip
