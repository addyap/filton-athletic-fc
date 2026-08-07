import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import crestTrimmed from '../assets/img/filton-athletic-crest-trimmed.webp'
import elmParkPitch from '../assets/img/elm-park-pitch.jpg'
import {
  nextFirstTeamFixture,
  lastFirstTeamResult,
  programmeForFixture,
  fixtureLongDate,
  competitionName,
} from '../data/programmes'
import { previewForOpponent } from '../data/opponents'
import { groundInfo, type Fixture } from '../data/club'

const DAY_MS = 24 * 60 * 60 * 1000
const pad = (n: number) => String(n).padStart(2, '0')

function venueLabel(v: Fixture['venue']) {
  return v === 'H' ? 'Home' : v === 'A' ? 'Away' : 'Neutral'
}

function resultTone(result: string) {
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  return 'bg-amber-100 text-amber-800'
}

/** Kick-off as a Date, combining the DD/MM/YY date and HH:MM time (local). */
function kickoffDate(f: Fixture): Date {
  const [dd, mm, yy] = f.date.split('/').map(Number)
  const [hh, min] = f.time.split(':').map(Number)
  return new Date(2000 + yy, mm - 1, dd, hh, min, 0)
}

/**
 * Matchday — the next fixture and a live countdown to kick-off, in one section.
 * (Merges the old season-countdown and match strip.) The countdown ticks on the
 * client; the prerendered HTML shows a stable placeholder until hydration.
 */
function MatchdaySection() {
  const next = nextFirstTeamFixture
  const last = lastFirstTeamResult

  const [now, setNow] = useState(() => Date.now())
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  if (!next && !last) {
    return (
      <section id="matchday" aria-label="Matchday" className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <div className="rounded-2xl border border-[#0b2d52] bg-[#0b2d52] p-6 text-center text-white sm:p-8">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">2026/27 season</span>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">Fixtures announced soon</h2>
            <p className="mx-auto mt-1 max-w-xl text-sm text-slate-200">
              We&rsquo;re putting the new season&rsquo;s schedule together &mdash; check back shortly, or{' '}
              <a href="#join" className="font-semibold text-[#a9e0b8] underline hover:text-white">
                get in touch if you want to play
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    )
  }

  const nextProgramme = next ? programmeForFixture(next) : undefined
  const nextPreview = next ? previewForOpponent(next.opponent) : undefined

  const remaining = next ? kickoffDate(next).getTime() - now : 0
  const showCountdown = Boolean(next) && (!mounted || remaining > 0)
  const total = Math.max(0, remaining)
  const tiles = [
    { value: Math.floor(total / DAY_MS), label: Math.floor(total / DAY_MS) === 1 ? 'Day' : 'Days', pad: false },
    { value: Math.floor(total / (60 * 60 * 1000)) % 24, label: 'Hrs', pad: true },
    { value: Math.floor(total / (60 * 1000)) % 60, label: 'Min', pad: true },
    { value: Math.floor(total / 1000) % 60, label: 'Sec', pad: true },
  ]

  return (
    <section id="matchday" aria-label="Matchday" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 pt-8 sm:px-6">
        <h2 className="text-xs font-bold uppercase tracking-widest text-[#0b2d52]">
          Matchday <span className="text-slate-400">&middot; #FATS #UTF</span>
        </h2>
      </div>

      <div className={`mx-auto grid max-w-6xl gap-6 px-4 pb-10 pt-4 sm:px-6 ${last ? 'lg:grid-cols-3 lg:items-start' : ''}`}>
        {next && (
          <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1c3f6e] via-[#0f2c52] to-[#0a2340] text-white shadow-lg ${last ? 'lg:col-span-2' : ''}`}>
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
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">
                  2026/27 season
                </span>
              </div>

              {/* Home team first: when Filton are away, the opponent leads and
                  Filton sit on the right. */}
              <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                {next.venue === 'A' ? (
                  <>
                    {next.opponent} <span className="text-[#a9e0b8]">vs</span> Filton Athletic
                  </>
                ) : (
                  <>
                    Filton Athletic <span className="text-[#a9e0b8]">vs</span> {next.opponent}
                  </>
                )}
              </h3>
              <p className="mt-3 text-base text-slate-100 sm:text-lg">
                {fixtureLongDate(next.date)} &middot; Kick-off {next.time}
              </p>
              <p className="mt-1 text-sm text-slate-300">
                {competitionName(next.competition)}
                {next.venue === 'H' ? ` · ${groundInfo.name}` : next.ground ? ` · ${next.ground}` : ''}
              </p>

              {(next.gates || next.admission || next.matchdayNotes) && (
                <div className="mt-3 flex flex-wrap gap-2 text-xs font-medium text-slate-100">
                  {next.gates && (
                    <span className="rounded-full bg-white/10 px-3 py-1">Gates {next.gates}</span>
                  )}
                  {next.admission && (
                    <span className="rounded-full bg-white/10 px-3 py-1">{next.admission}</span>
                  )}
                  {next.matchdayNotes && (
                    <span className="rounded-full bg-white/10 px-3 py-1">{next.matchdayNotes}</span>
                  )}
                </div>
              )}

              {next.matchdayImage ? (
                <img
                  src={next.matchdayImage}
                  alt={`Matchday graphic — ${next.opponent} vs Filton Athletic`}
                  className="mt-4 h-32 w-32 rounded-lg object-cover ring-1 ring-white/20 sm:h-36 sm:w-36"
                />
              ) : (
                next.venue === 'H' && (
                  <img
                    src={elmParkPitch}
                    alt={`The pitch at ${groundInfo.name}`}
                    className="mt-4 h-24 w-40 rounded-lg object-cover ring-1 ring-white/20 sm:h-28 sm:w-48"
                  />
                )
              )}

              {showCountdown && (
                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">Countdown to kick-off</p>
                  <div className="mt-2 flex gap-3 sm:gap-4">
                    {tiles.map((t) => (
                      <div key={t.label} className="min-w-[58px] rounded-xl bg-white/10 px-3 py-2.5 text-center sm:min-w-[72px]">
                        <div className="text-2xl font-bold tabular-nums sm:text-3xl">
                          {mounted ? (t.pad ? pad(t.value) : t.value) : '--'}
                        </div>
                        <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wide text-slate-300">
                          {t.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {nextProgramme ? (
                <Link
                  to={`/programme/${nextProgramme.slug}`}
                  className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b2d52] transition hover:bg-[#a9e0b8]"
                >
                  View matchday programme
                  <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              ) : (
                nextPreview && (
                  <Link
                    to={`/preview/${nextPreview.slug}`}
                    className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0b2d52] transition hover:bg-[#a9e0b8]"
                  >
                    Meet the visitors
                    <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                  </Link>
                )
              )}
            </div>
          </div>
        )}

        {last && (
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <span className="w-fit rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
              Last result
            </span>
            <h3 className="mt-4 text-xl font-bold text-[#0b2d52] sm:text-2xl">
              {last.venue === 'A' ? (
                <>
                  {last.opponent} <span className="text-slate-400">vs</span> Filton Athletic
                </>
              ) : (
                <>
                  Filton Athletic <span className="text-slate-400">vs</span> {last.opponent}
                </>
              )}
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
      </div>
    </section>
  )
}

export default MatchdaySection
