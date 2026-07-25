import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import { leagueTable } from '../../data/club'

function TableSection() {
  return (
    <section id="table" className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="standings" title="League table" className="justify-center" />
      <p className="mt-1 text-center text-sm text-slate-500">Marcliff Gloucestershire County Football League 2026-27</p>
      {leagueTable.length === 0 ? (
        <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="font-semibold text-[#0b2d52]">Table will appear once the 2026/27 season is under way</p>
          <p className="mt-1 text-sm text-slate-500">No matches played yet &mdash; check back after the first round of fixtures.</p>
        </div>
      ) : (
        <div className="mt-6">
          <LeagueTableWidget rows={leagueTable} highlight="Filton Athletic" />
        </div>
      )}
      <p className="mt-4 text-center text-sm text-slate-500">
        <Link to="/reserves" className="font-medium text-[#0b2d52] underline">
          Reserves table &amp; fixtures &rarr;
        </Link>
        {' · '}
        <Link to="/archive" className="font-medium text-[#0b2d52] underline">
          2025/26 archive &rarr;
        </Link>
      </p>
    </section>
  )
}

export default TableSection
