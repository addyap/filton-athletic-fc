import { Link } from 'react-router-dom'
import SectionHeading from '../SectionHeading'

function AsTeamSection() {
  return (
    <section id="as-team" className="mx-auto max-w-6xl px-6 py-14">
      <SectionHeading icon="shirt" title="A's" className="justify-center" />
      <p className="mt-1 text-center text-sm text-slate-500">Bristol &amp; Suburban Division 4 2026-27</p>

      <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
        <p className="font-semibold text-[#0b2d52]">Fixtures, table and squad coming soon</p>
        <p className="mt-1 text-sm text-slate-500">
          Filton Athletic&rsquo;s third adult team compete in the Bristol &amp; Suburban Division 4. We&rsquo;re
          waiting on the confirmed league schedule for 2026/27 &mdash; check back shortly, or get in touch if
          you&rsquo;d like to play.
        </p>
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
    </section>
  )
}

export default AsTeamSection
