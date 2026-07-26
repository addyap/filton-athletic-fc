import { useEffect, useState } from 'react'
import clockImg from '../assets/img/filton-athletic-clock.jpg'
import { firstTeamFixtures, groundInfo, type Fixture } from '../data/club'
import { fixtureLongDate } from '../data/programmes'

/** Kick-off as a Date, combining the DD/MM/YY date and HH:MM time (local time). */
function kickoffDate(f: Fixture): Date {
  const [dd, mm, yy] = f.date.split('/').map(Number)
  const [hh, min] = f.time.split(':').map(Number)
  return new Date(2000 + yy, mm - 1, dd, hh, min, 0)
}

const pad = (n: number) => String(n).padStart(2, '0')
const DAY_MS = 24 * 60 * 60 * 1000

/**
 * A live countdown to the season opener, featuring the club's hand-painted
 * clock. Ticks each second on the client; the prerendered HTML shows a stable
 * placeholder until hydration so there is no mismatch. Disappears once the
 * opener is more than a day behind us and the season is under way.
 */
function SeasonCountdown() {
  const opener = firstTeamFixtures[0]
  const [now, setNow] = useState(() => Date.now())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  if (!opener) return null

  const target = kickoffDate(opener)
  const remaining = target.getTime() - now

  // Once the opener is well behind us, the season is running — hand back to the
  // regular "next match" strip. (Only after mount, so prerender still shows it.)
  if (mounted && remaining < -DAY_MS) return null

  const started = mounted && remaining <= 0
  const total = Math.max(0, remaining)
  const tiles = [
    { value: Math.floor(total / DAY_MS), label: Math.floor(total / DAY_MS) === 1 ? 'Day' : 'Days', pad: false },
    { value: Math.floor(total / (60 * 60 * 1000)) % 24, label: 'Hrs', pad: true },
    { value: Math.floor(total / (60 * 1000)) % 60, label: 'Min', pad: true },
    { value: Math.floor(total / 1000) % 60, label: 'Sec', pad: true },
  ]

  const venue = opener.venue === 'H' ? ` · ${groundInfo.name}` : ''
  const fixtureLine = `Filton Athletic vs ${opener.opponent} · ${fixtureLongDate(opener.date)} · kick-off ${opener.time}${venue}`

  return (
    <section aria-label="Countdown to the new season" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="overflow-hidden rounded-2xl bg-[#0b2d52] text-white shadow-sm">
          <div className="grid items-center gap-6 p-6 sm:p-8 lg:grid-cols-[200px_1fr] lg:gap-10">
            <img
              src={clockImg}
              alt="Hand-painted Filton Athletic FC wall clock — the club crest with Concorde over Filton, and “UTF”."
              className="mx-auto w-36 rounded-full shadow-lg sm:w-48 lg:w-full"
            />
            <div className="text-center lg:text-left">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">2026/27 season</span>
              {started ? (
                <>
                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">The new season is here — up the Filton!</h2>
                  <p className="mt-2 text-sm text-slate-200 sm:text-base">{fixtureLine}</p>
                </>
              ) : (
                <>
                  <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Countdown to the new season</h2>
                  <div className="mt-5 flex justify-center gap-3 sm:gap-4 lg:justify-start">
                    {tiles.map((t) => (
                      <div
                        key={t.label}
                        className="min-w-[62px] rounded-xl bg-white/10 px-3 py-3 sm:min-w-[78px] sm:px-4"
                      >
                        <div className="text-3xl font-bold tabular-nums sm:text-4xl">
                          {mounted ? (t.pad ? pad(t.value) : t.value) : '--'}
                        </div>
                        <div className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-300">
                          {t.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-slate-200">First up: {fixtureLine}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SeasonCountdown
