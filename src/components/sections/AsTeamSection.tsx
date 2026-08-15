import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import Reveal from '../Reveal'
import MatchGallery from '../MatchGallery'
import { asTeamTable, aTeamFixtures, matchGalleryItems, officials } from '../../data/club'
import { aTeamPreSeason2026 } from '../../data/preseason'

function resultBadge(result?: string) {
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function AsTeamSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  const gallery = matchGalleryItems(aTeamFixtures)
  return (
    <>
    <section id="as-team" className="border-t border-slate-200 bg-[#e3ebf8]/60">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="shirt" title="A's" tone="sky" className="justify-center" as={headingLevel} />
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Division Four 2026-27</p>
      <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">Manager</p>
          <p className="mt-1 font-bold text-[#0b2d52]">{officials.aTeamManager}</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">Coaches</p>
          <p className="mt-1 font-bold text-[#0b2d52]">{officials.aTeamCoaches.join(', ')}</p>
        </div>
      </div>

      <p className="mt-8 text-center text-lg font-semibold text-[#0b2d52]">Pre-season fixtures</p>
      <p className="mt-1 text-center text-sm text-slate-500">
        All kick off 2pm at Patchway High School, BS32 4AJ.
      </p>
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
            {aTeamPreSeason2026.map((f) => (
              <tr key={f.iso} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                <td className="whitespace-nowrap px-3 py-1.5">{f.label}</td>
                <td className="px-3 py-1.5">{f.opponent}</td>
                <td className="whitespace-nowrap px-3 py-1.5">
                  {f.venue}
                  {f.venueNote && <span className="text-slate-500"> &middot; {f.venueNote}</span>}
                </td>
                <td className="px-3 py-1.5">
                  <span className={`rounded px-2 py-0.5 text-xs font-semibold ${resultBadge(f.result)}`}>
                    {f.result ?? 'Upcoming'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {aTeamFixtures.length > 0 && (
        <>
          <p className="mt-12 text-center text-lg font-semibold text-[#0b2d52]">League fixtures</p>
          <div className="mt-4 overflow-x-auto rounded-lg border border-slate-200">
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
                {aTeamFixtures.map((f) => (
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
        </>
      )}

      {asTeamTable.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
          <p className="font-semibold text-[#0b2d52]">Table will appear once the 2026/27 season is under way</p>
          <p className="mt-1 text-sm text-slate-500">No matches played yet &mdash; check back after the first round of fixtures.</p>
        </div>
      ) : (
        <div className="mt-8">
          <LeagueTableWidget rows={asTeamTable} highlight="Filton Athletic A" accent="sky" />
        </div>
      )}

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
    <MatchGallery matches={gallery} headingLevel={headingLevel} />
    </>
  )
}

export default AsTeamSection
