import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import { reserveTable, reserveFixtures } from '../../data/club'

function ReservesSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <section id="reserves" className="border-t border-slate-200 bg-emerald-50/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="shirt" title="Reserves" className="justify-center" as={headingLevel} />
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Premier Division 2026-27</p>

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
      </div>
    </section>
  )
}

export default ReservesSection
