import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import crest from '../assets/img/filton-athletic-crest-transparent.png'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { programmes, nextProgramme } from '../data/programmes'

function ProgrammesIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Matchday programmes — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  const next = nextProgramme()

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">
            2025/26 season
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">Matchday programmes</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            A digital programme for every home game at BBS Park North. Tap any fixture to read the
            welcome, team news, squads and league standings — updated right up to kick-off.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        {next && (
          <Link
            to={`/programme/${next.slug}`}
            className="mb-8 block overflow-hidden rounded-xl border border-[#0b2d52] bg-[#0b2d52] text-white transition hover:shadow-lg"
          >
            <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <span className="rounded bg-[#a9e0b8] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#0b2d52]">
                  Next home game
                </span>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Filton Athletic <span className="text-slate-300">vs</span> {next.fixture.opponent}
                </h3>
                <p className="mt-1 text-sm text-slate-200">
                  {next.longDate} &middot; Kick-off {next.fixture.time} &middot; {next.competitionName}
                </p>
              </div>
              <img src={crest} alt="" aria-hidden="true" className="h-20 w-20 shrink-0 object-contain sm:h-24 sm:w-24" />
            </div>
            <p className="border-t border-white/15 px-6 py-3 text-sm font-semibold sm:px-8">
              Read the programme &rarr;
            </p>
          </Link>
        )}

        <h3 className="text-lg font-bold text-[#0b2d52]">All home fixtures</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {programmes.map((p) => {
            const played = Boolean(p.fixture.result)
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
                  {p.extras.number != null && (
                    <span className="text-xs font-semibold text-slate-400">No. {p.extras.number}</span>
                  )}
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
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProgrammesIndex
