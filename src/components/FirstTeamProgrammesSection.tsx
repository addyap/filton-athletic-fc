import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import { firstTeamFixtures } from '../data/club'
import { fixtureLongDate, programmes2026_27 } from '../data/programmes'

type ProgrammeCard = {
  key: string
  kind: 'Home programme' | 'Away programme'
  title: string
  detail: string
  href: string
  external?: boolean
}

function FirstTeamProgrammesSection() {
  const homeProgrammes: ProgrammeCard[] = programmes2026_27
    .filter((programme) => programme.extras.pdfUrl)
    .map((programme) => ({
      key: programme.slug,
      kind: 'Home programme',
      title: `Filton Athletic vs ${programme.fixture.opponent}`,
      detail: programme.longDate,
      href: `/programme/${programme.slug}`,
    }))

  const awayProgrammes: ProgrammeCard[] = firstTeamFixtures
    .filter((fixture) => fixture.awayProgrammeUrl)
    .map((fixture) => ({
      key: `${fixture.date}-${fixture.opponent}`,
      kind: 'Away programme',
      title: `Away at ${fixture.opponent}`,
      detail: fixtureLongDate(fixture.date),
      href: fixture.awayProgrammeUrl!,
      external: true,
    }))

  const programmes = [...homeProgrammes, ...awayProgrammes]

  return (
    <section id="programmes" className="border-t border-slate-200 bg-[#e7f0e9]/45">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading icon="clipboard" title="Matchday programmes" as="h2" />
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              Read our published home programmes and the host-club programmes shared from away fixtures.
            </p>
          </div>
          <Link
            to="/programmes"
            className="inline-flex w-fit items-center rounded-full bg-[#0b2d52] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#16416e]"
          >
            All programmes &rarr;
          </Link>
        </div>

        {programmes.length > 0 ? (
          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {programmes.map((programme) => {
              const content = (
                <>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded px-2 py-1 text-xs font-bold uppercase tracking-wide ${
                        programme.kind === 'Home programme'
                          ? 'bg-[#0b2d52] text-white'
                          : 'bg-white text-[#2f6b45] ring-1 ring-[#2f6b45]/25'
                      }`}
                    >
                      {programme.kind}
                    </span>
                    <span aria-hidden="true" className="text-[#0b2d52]">&rarr;</span>
                  </div>
                  <p className="mt-4 font-bold text-[#0b2d52]">{programme.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{programme.detail}</p>
                  <p className="mt-5 text-sm font-semibold text-[#0b2d52]">Read programme &rarr;</p>
                </>
              )

              return programme.external ? (
                <a
                  key={programme.key}
                  href={programme.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#2f6b45] hover:shadow-md"
                >
                  {content}
                </a>
              ) : (
                <Link
                  key={programme.key}
                  to={programme.href}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#0b2d52] hover:shadow-md"
                >
                  {content}
                </Link>
              )
            })}
          </div>
        ) : (
          <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
            Matchday programmes will appear here as they are published. The full programme archive remains available at any time.
          </div>
        )}
      </Reveal>
    </section>
  )
}

export default FirstTeamProgrammesSection
