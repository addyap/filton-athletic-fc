import SectionHeading from '../SectionHeading'
import { firstTeamFixtures } from '../../data/club'

function resultBadge(result?: string) {
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function FixturesSection() {
  return (
    <section id="fixtures" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="calendar" title="Fixtures & results" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">
          First team &mdash; Marcliff Gloucestershire County Football League 2025-26
        </p>
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
      </div>
    </section>
  )
}

export default FixturesSection
