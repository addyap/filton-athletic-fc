import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { programmes2026_27, programmes2025_26, type Programme } from '../data/programmes'
import { firstTeamFixtures } from '../data/club'

/** Away games where the host club published their own programme. */
const awayProgrammes = firstTeamFixtures.filter((f) => f.awayProgrammeUrl)

/** 'DD/MM/YY' -> 'Saturday 8 August 2026', to match the home programme cards. */
function fixtureLongDate(date: string): string {
  const [dd, mm, yy] = date.split('/').map(Number)
  return new Date(2000 + yy, mm - 1, dd).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function ProgrammeGrid({ items }: { items: Programme[] }) {
  return (
    <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p) => {
        const played = Boolean(p.fixture.result)
        const hasProgramme = Boolean(p.extras.pdfUrl)

        // No programme was produced for this fixture — show a clear, muted,
        // non-clickable card rather than linking to an empty page.
        if (!hasProgramme) {
          return (
            <div
              key={p.slug}
              className="flex flex-col rounded-lg border border-dashed border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded bg-slate-200 px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {p.fixture.competition}
                </span>
              </div>
              <h4 className="mt-3 font-semibold text-slate-500">vs {p.fixture.opponent}</h4>
              <p className="mt-1 text-sm text-slate-400">{p.longDate}</p>
              <div className="mt-3 flex items-center justify-between text-sm">
                {played && <span className="font-semibold text-slate-500">{p.fixture.result}</span>}
                <span className="ml-auto text-slate-400">No programme produced</span>
              </div>
            </div>
          )
        }

        return (
          <Link
            key={p.slug}
            to={`/programme/${p.slug}`}
            className="flex flex-col rounded-lg border border-slate-200 p-5 transition hover:border-[#0b2d52] hover:shadow-sm"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="rounded bg-[#e7f0e9] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">
                {p.fixture.competition}
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded bg-[#0b2d52] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  PDF
                </span>
                {p.extras.number != null && (
                  <span className="text-xs font-semibold text-slate-500">No. {p.extras.number}</span>
                )}
              </span>
            </div>
            <h4 className="mt-3 font-semibold text-[#0b2d52]">vs {p.fixture.opponent}</h4>
            <p className="mt-1 text-sm text-slate-500">{p.longDate}</p>
            <div className="mt-3 flex items-center justify-between text-sm">
              {played ? (
                <span className="font-semibold text-[#0b2d52]">{p.fixture.result}</span>
              ) : (
                <span className="text-slate-500">Kick-off {p.fixture.time}</span>
              )}
              <span className="font-medium text-[#0b2d52]">Read &rarr;</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

function ProgrammesIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">Matchday programmes</p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">Every programme, in one place</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            Digital programmes from every home game, past and future, plus the programmes our hosts
            produce on the road. Looking for full-season fixtures, results, the table or the squad instead?{' '}
            <Link to="/first-team" className="underline hover:text-white">
              Visit the First Team page &rarr;
            </Link>
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h3 className="text-lg font-bold text-[#0b2d52]">2026/27 home fixtures</h3>
        <ProgrammeGrid items={programmes2026_27} />

        {awayProgrammes.length > 0 && (
          <>
            <h3 className="mt-14 text-lg font-bold text-[#0b2d52]">On the road &mdash; host club programmes</h3>
            <p className="mt-1 text-sm text-slate-500">
              Programmes produced by the clubs hosting us, shared here with thanks.
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {awayProgrammes.map((f) => (
                <a
                  key={`${f.date}-${f.opponent}`}
                  href={f.awayProgrammeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col rounded-lg border border-slate-200 p-5 transition hover:border-[#0b2d52] hover:shadow-sm"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded bg-[#e7f0e9] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">
                      {f.competition}
                    </span>
                    <span className="rounded bg-[#0b2d52] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                      PDF
                    </span>
                  </div>
                  <h4 className="mt-3 font-semibold text-[#0b2d52]">Away at {f.opponent}</h4>
                  <p className="mt-1 text-sm text-slate-500">{fixtureLongDate(f.date)}</p>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    {f.result ? (
                      <span className="font-semibold text-[#0b2d52]">{f.result}</span>
                    ) : (
                      <span className="text-slate-500">Kick-off {f.time}</span>
                    )}
                    <span className="font-medium text-[#0b2d52]">Read &rarr;</span>
                  </div>
                </a>
              ))}
            </div>
          </>
        )}

        <h3 className="mt-14 text-lg font-bold text-[#0b2d52]">2025/26 archive</h3>
        <ProgrammeGrid items={programmes2025_26} />

        <p className="mt-6 text-sm text-slate-500">
          Programmes weren&rsquo;t produced for every home game &mdash; those fixtures are shown above,
          greyed out. Every programme that was made is here in full.
        </p>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProgrammesIndex
