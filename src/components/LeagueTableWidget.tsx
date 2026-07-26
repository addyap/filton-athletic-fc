import type { TableRow } from '../data/club'

const leagueColumns: { key: keyof TableRow; label: string; cls?: string }[] = [
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

function LeagueTableWidget({
  rows,
  highlight,
  accent = 'green',
}: {
  rows: TableRow[]
  highlight: string
  /** Colour of the highlighted (own team) row — 'sky' ties into the crest's sky-blue background. */
  accent?: 'green' | 'sky'
}) {
  const highlightCls = accent === 'sky' ? 'bg-[#e3ebf8] text-[#1c3f6e]' : 'bg-[#e7f0e9] text-[#0b2d52]'
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
              className={`border-t border-slate-200 ${r.team === highlight ? `${highlightCls} font-semibold` : 'odd:bg-white even:bg-slate-50'}`}
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

export default LeagueTableWidget
