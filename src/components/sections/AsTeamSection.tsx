import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'
import LeagueTableWidget from '../LeagueTableWidget'
import { asTeamTable } from '../../data/club'

function AsTeamSection({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <section id="as-team" className="border-t border-slate-200 bg-emerald-50/60">
      <div className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="shirt" title="A's" className="justify-center" as={headingLevel} />
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Division Three 2026-27</p>

      <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center">
        <p className="font-semibold text-[#0b2d52]">Fixtures and squad coming soon</p>
        <p className="mt-1 text-sm text-slate-500">
          Filton Athletic&rsquo;s third adult team compete in the Bristol &amp; Suburban Division Three.
          We&rsquo;re waiting on the confirmed league schedule for 2026/27 &mdash; the division line-up below
          is set, check back shortly for fixtures, or get in touch if you&rsquo;d like to play.
        </p>
      </div>

      <div className="mt-8">
        <LeagueTableWidget rows={asTeamTable} highlight="Filton Athletic A" />
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
      </div>
    </section>
  )
}

export default AsTeamSection
