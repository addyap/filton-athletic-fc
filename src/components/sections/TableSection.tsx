import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import Reveal from '../Reveal'
import { PodiumMark } from '../SectionArt'
import { leagueTable } from '../../data/club'

function TableSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <section id="table" className="relative overflow-hidden">
      <PodiumMark className="pointer-events-none absolute -right-6 -top-2 h-40 w-48 text-[#0b2d52]/[0.06] sm:h-52 sm:w-64" />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="standings" title="League table" className="justify-center" as={headingLevel} />
      <p className="mt-1 text-center text-sm text-slate-500">Marcliff Gloucestershire County Football League, Division 1 &mdash; 2026-27</p>
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
      {leagueTable.length > 0 && (
        <p className="mt-3 text-center text-xs text-slate-400">
          Updated from FA Full-Time. For the live table plus every result and goalscorer, see the{' '}
          <a
            href="https://fulltime.thefa.com/index.html?league=5545575"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-[#0b2d52] underline"
          >
            official league page on FA Full-Time
          </a>
          .
        </p>
      )}
      <p className="mt-4 text-center text-sm text-slate-500">
        <Link to="/reserves" className="font-medium text-[#0b2d52] underline">
          Reserves table &amp; fixtures &rarr;
        </Link>
        {' · '}
        <Link to="/archive/first-team" className="font-medium text-[#0b2d52] underline">
          First team archive &rarr;
        </Link>
      </p>
      </Reveal>
    </section>
  )
}

export default TableSection
