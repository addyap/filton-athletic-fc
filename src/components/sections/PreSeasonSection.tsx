import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { CalendarMark } from '../SectionArt'
import { preSeason2026, preSeasonRecord } from '../../data/preseason'

function resultBadge(result?: string, cancelled?: boolean) {
  if (cancelled) return 'bg-slate-100 text-slate-400'
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function PreSeasonSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  const record = preSeasonRecord(preSeason2026)

  return (
    <section id="pre-season" className="relative overflow-hidden border-t border-slate-200">
      <CalendarMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="calendar" title="Pre-season" className="justify-center" as={headingLevel} />
        <p className="mt-1 text-center text-sm text-slate-500">
          First team &mdash; building up to the 2026/27 season opener
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="rounded-full bg-[#0b2d52] px-3 py-1 font-semibold text-white">
            Played {record.played}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 font-semibold text-emerald-800">
            Won {record.won}
          </span>
          <span className="rounded-full bg-red-100 px-3 py-1 font-semibold text-red-800">
            Lost {record.lost}
          </span>
          {record.cancelled > 0 && (
            <span className="rounded-full bg-slate-100 px-3 py-1 font-semibold text-slate-500">
              {record.cancelled} cancelled
            </span>
          )}
        </div>

        <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-[#0b2d52] text-white">
              <tr>
                <th className="px-3 py-2 text-left font-semibold">Date</th>
                <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                <th className="px-3 py-2 text-left font-semibold">Venue</th>
                <th className="px-3 py-2 text-left font-semibold">Result</th>
                <th className="hidden px-3 py-2 text-left font-semibold md:table-cell">Scorers</th>
              </tr>
            </thead>
            <tbody>
              {preSeason2026.map((f) => (
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
                  <td className="hidden px-3 py-1.5 text-slate-600 md:table-cell">{f.scorers ?? '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-center text-sm text-slate-500">
          Friendly fixtures &mdash; results don&rsquo;t count towards the league. The competitive season starts
          Saturday 1 August against University of Bristol.
        </p>
      </Reveal>
    </section>
  )
}

export default PreSeasonSection
