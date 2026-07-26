import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { programmes } from '../data/programmes'

function ProgrammesIndex() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Matchday programmes — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">Matchday programmes</p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">Every home programme, in one place</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            Digital programmes from every home game, past and future. Looking for full-season fixtures,
            results, the table or the squad instead?{' '}
            <Link to="/archive" className="underline hover:text-white">
              Visit the season archive &rarr;
            </Link>
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <h3 className="text-lg font-bold text-[#0b2d52]">2025/26 home fixtures</h3>
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
                  <span className="flex items-center gap-2">
                    {p.extras.pdfUrl && (
                      <span className="rounded bg-[#0b2d52] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                        PDF
                      </span>
                    )}
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
      </main>

      <SiteFooter />
    </div>
  )
}

export default ProgrammesIndex
