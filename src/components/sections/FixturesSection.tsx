import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'
import { CalendarMark } from '../SectionArt'
import { firstTeamFixtures } from '../../data/club'

function resultBadge(result?: string) {
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function FixturesSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <section id="fixtures" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
      <CalendarMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="calendar" title="Fixtures & results" className="justify-center" as={headingLevel} />
        <p className="mt-1 text-center text-sm text-slate-500">
          First team &mdash; Marcliff Gloucestershire County Football League 2026-27
        </p>
        {firstTeamFixtures.length === 0 ? (
          <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
            <p className="font-semibold text-[#0b2d52]">2026/27 fixture list coming soon</p>
            <p className="mt-1 text-sm text-slate-500">
              We&rsquo;re waiting on the confirmed league schedule &mdash; check back shortly before the season kicks off.
            </p>
          </div>
        ) : (
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0b2d52] text-white">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Date</th>
                  <th className="hidden px-3 py-2 text-left font-semibold sm:table-cell">Comp</th>
                  <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                  <th className="px-3 py-2 text-left font-semibold">Venue</th>
                  <th className="px-3 py-2 text-left font-semibold">Result</th>
                  <th className="hidden px-3 py-2 text-left font-semibold md:table-cell">Scorers</th>
                </tr>
              </thead>
              <tbody>
                {firstTeamFixtures.map((f) => (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="mt-4 text-center text-sm text-slate-500">
          Looking for last season?{' '}
          <Link to="/archive/first-team" className="font-medium text-[#0b2d52] underline">
            View the first team archive &rarr;
          </Link>
        </p>
      </Reveal>
    </section>
  )
}

export default FixturesSection
