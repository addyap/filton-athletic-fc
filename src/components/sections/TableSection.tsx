import SectionHeading from '../SectionHeading'
import { leagueTable, reserveTable, reserveFixtures } from '../../data/club'

const leagueColumns: { key: keyof (typeof leagueTable)[number]; label: string; cls?: string }[] = [
  { key: 'pos', label: 'Pos' },
  { key: 'team', label: 'Team' },
  { key: 'p', label: 'P' },
  { key: 'w', label: 'W', cls: 'hidden sm:table-cell' },
  { key: 'd', label: 'D', cls: 'hidden sm:table-cell' },
  { key: 'l', label: 'L', cls: 'hidden sm:table-cell' },
  { key: 'f', label: 'F', cls: 'hidden md:table-cell' },
  { key: 'a', label: 'A', cls: 'hidden md:table-cell' },
  { key: 'gd', label: 'GD' },
  { key: 'pts', label: 'Pts' },
]

function LeagueTable({ rows, highlight }: { rows: typeof leagueTable; highlight: string }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-slate-200">
      <table className="min-w-full text-sm">
        <thead className="bg-[#0b2d52] text-white">
          <tr>
            {leagueColumns.map((c) => (
              <th key={c.key} className={`px-3 py-2 text-left font-semibold ${c.cls ?? ''}`}>
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr
              key={r.team}
              className={`border-t border-slate-200 ${r.team === highlight ? 'bg-[#e7f0e9] font-semibold text-[#0b2d52]' : 'odd:bg-white even:bg-slate-50'}`}
            >
              {leagueColumns.map((c) => (
                <td key={c.key} className={`px-3 py-1.5 ${c.cls ?? ''}`}>
                  {r[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TableSection() {
  if (leagueTable.length === 0 && reserveTable.length === 0) {
    return (
      <section id="table" className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="standings" title="League table" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">Marcliff Gloucestershire County Football League 2026-27</p>
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="font-semibold text-[#0b2d52]">Table will appear once the 2026/27 season is under way</p>
          <p className="mt-1 text-sm text-slate-500">No matches played yet &mdash; check back after the first round of fixtures.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="table" className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="standings" title="League table" className="justify-center" />
      <p className="mt-1 text-center text-sm text-slate-500">Marcliff Gloucestershire County Football League 2026-27</p>
      <div className="mt-6">
        <LeagueTable rows={leagueTable} highlight="Filton Athletic" />
      </div>

      <h4 className="mt-12 text-center text-xl font-bold text-[#0b2d52]">Filton Reserves</h4>
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Senior League 2026-27</p>
      <div className="mt-6">
        <LeagueTable rows={reserveTable} highlight="Filton Athletic Reserves" />
      </div>

      <h4 className="mt-12 text-center text-xl font-bold text-[#0b2d52]">Reserves fixtures</h4>
      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
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
    </section>
  )
}

export default TableSection
