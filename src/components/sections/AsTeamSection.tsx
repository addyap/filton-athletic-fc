import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import Reveal from '../Reveal'
import { asTeamTable } from '../../data/club'
import { aTeamPreSeason2026 } from '../../data/preseason'

function AsTeamSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <section id="as-team" className="border-t border-slate-200 bg-[#e3ebf8]/60">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="shirt" title="A's" tone="sky" className="justify-center" as={headingLevel} />
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Division Three 2026-27</p>

      <p className="mt-8 text-center text-lg font-semibold text-[#0b2d52]">Pre-season fixtures</p>
      <p className="mt-1 text-center text-sm text-slate-500">
        All kick off 2pm at Patchway High &mdash; league fixtures and squad still to be confirmed.
      </p>
      <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table className="min-w-full text-sm">
          <thead className="bg-[#0b2d52] text-white">
            <tr>
              <th className="px-3 py-2 text-left font-semibold">Date</th>
              <th className="px-3 py-2 text-left font-semibold">Opponent</th>
              <th className="px-3 py-2 text-left font-semibold">Venue</th>
            </tr>
          </thead>
          <tbody>
            {aTeamPreSeason2026.map((f) => (
              <tr key={f.iso} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                <td className="whitespace-nowrap px-3 py-1.5">{f.label}</td>
                <td className="px-3 py-1.5">{f.opponent}</td>
                <td className="whitespace-nowrap px-3 py-1.5">
                  {f.venue}
                  {f.venueNote && <span className="text-slate-500"> &middot; {f.venueNote}</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8">
        <LeagueTableWidget rows={asTeamTable} highlight="Filton Athletic A" accent="sky" />
      </div>

      <p className="mt-6 text-center text-sm text-slate-500">
        Interested in playing? Contact{' '}
        <a className="font-medium text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
          filtonathleticfc@outlook.com
        </a>
      </p>
      <p className="mt-4 text-center text-sm text-slate-500">
        <Link to="/#join" className="font-medium text-[#0b2d52] underline">
          See all ways to join the club &rarr;
        </Link>
      </p>
      </Reveal>
    </section>
  )
}

export default AsTeamSection
