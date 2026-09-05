import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import Reveal from '../Reveal'
import MatchGallery from '../MatchGallery'
import { reserveTable, reserveFixtures, matchGalleryItems, officials } from '../../data/club'
import { reserveTeamPreSeason2026 } from '../../data/preseason'

function resultBadge(result?: string, cancelled?: boolean) {
  if (cancelled) return 'bg-slate-100 text-slate-400'
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function ReservesSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  const gallery = matchGalleryItems(reserveFixtures)
  const matchday = reserveFixtures.find((f) => f.matchdayImage && !f.result)
  return (
    <>
    <section id="reserves" className="border-t border-slate-200 bg-emerald-50/60">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="shirt" title="Reserves" className="justify-center" as={headingLevel} />
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Premier Division 2026-27</p>
      <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">Manager</p>
          <p className="mt-1 font-bold text-[#0b2d52]">{officials.reserveTeamManager}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">Coaches</p>
          <p className="mt-1 font-bold text-[#0b2d52]">{officials.reserveTeamCoaches.join(', ')}</p>
        </div>
      </div>

      {matchday && (
        <div className="mx-auto mt-8 max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <img
            src={matchday.matchdayImage}
            alt={`Matchday graphic — Filton Athletic Reserves vs ${matchday.opponent}`}
            className="w-full object-contain"
          />
          <div className="p-5 text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
              Next match
            </span>
            <p className="mt-3 text-lg font-bold text-[#0b2d52]">
              {matchday.venue === 'A' ? (
                <>{matchday.opponent} vs Filton Athletic Reserves</>
              ) : (
                <>Filton Athletic Reserves vs {matchday.opponent}</>
              )}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {matchday.date} &middot; Kick-off {matchday.time} &middot; {matchday.ground}
            </p>
          </div>
        </div>
      )}

      {reserveTeamPreSeason2026.length > 0 && (
        <>
          <p className="mt-8 text-center text-lg font-semibold text-[#0b2d52]">Pre-season fixtures</p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0b2d52] text-white">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Date</th>
                  <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                  <th className="px-3 py-2 text-left font-semibold">Venue</th>
                  <th className="px-3 py-2 text-left font-semibold">Result</th>
                </tr>
              </thead>
              <tbody>
                {reserveTeamPreSeason2026.map((f) => (
                  <tr key={f.iso} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="whitespace-nowrap px-3 py-1.5">{f.label}</td>
                    <td className="px-3 py-1.5">{f.opponent}</td>
                    <td className="whitespace-nowrap px-3 py-1.5">
                      {f.venue}
                      {f.venueNote && <span className="text-slate-500"> &middot; {f.venueNote}</span>}
                    </td>
                    <td className="px-3 py-1.5">
                      <span className={`rounded px-2 py-0.5 text-xs font-semibold ${resultBadge(f.result, f.cancelled)}`}>
                        {f.cancelled ? 'Cancelled' : (f.result ?? 'Upcoming')}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}

      {reserveTable.length === 0 && reserveFixtures.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="font-semibold text-[#0b2d52]">2026/27 reserves fixtures coming soon</p>
          <p className="mt-1 text-sm text-slate-500">
            We&rsquo;re waiting on the confirmed league schedule &mdash; check back shortly before the season kicks off.
          </p>
        </div>
      ) : (
        <>
          {reserveTable.length > 0 && (
            <div className="mt-6">
              <LeagueTableWidget rows={reserveTable} highlight="Filton Athletic Reserves" />
            </div>
          )}

          {reserveFixtures.length > 0 && (
            <div className="mt-12 overflow-x-auto rounded-lg border border-slate-200">
              <table className="min-w-full text-sm">
                <thead className="bg-[#0b2d52] text-white">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Date</th>
                    <th className="hidden px-3 py-2 text-left font-semibold sm:table-cell">Comp</th>
                    <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                    <th className="px-3 py-2 text-left font-semibold">Venue</th>
                    <th className="px-3 py-2 text-left font-semibold">Result</th>
                    <th className="hidden px-3 py-2 text-left font-semibold md:table-cell">Scorers</th>
                    <th className="hidden px-3 py-2 text-left font-semibold md:table-cell">Ground</th>
                  </tr>
                </thead>
                <tbody>
                  {reserveFixtures.map((f) => (
                    <tr key={`${f.date}-${f.opponent}`} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                      <td className="whitespace-nowrap px-3 py-1.5">
                        {f.date} <span className="text-slate-500">{f.time}</span>
                      </td>
                      <td className="hidden px-3 py-1.5 sm:table-cell">{f.competition}</td>
                      <td className="px-3 py-1.5">{f.opponent}</td>
                      <td className="px-3 py-1.5">{f.venue}</td>
                      <td className="px-3 py-1.5">
                        <span className={`rounded px-2 py-0.5 text-xs font-semibold ${resultBadge(f.result)}`}>
                          {f.result ?? 'Upcoming'}
                        </span>
                      </td>
                      <td className="hidden px-3 py-1.5 text-slate-600 md:table-cell">{f.scorers ?? '-'}</td>
                      <td className="hidden px-3 py-1.5 text-slate-600 md:table-cell">{f.ground}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}

      <p className="mt-6 text-center text-sm text-slate-500">
        Looking for last season?{' '}
        <Link to="/archive/reserves" className="font-medium text-[#0b2d52] underline">
          View the Reserves archive &rarr;
        </Link>
      </p>
      </Reveal>
    </section>
    <MatchGallery matches={gallery} headingLevel={headingLevel} />
    </>
  )
}

export default ReservesSection
