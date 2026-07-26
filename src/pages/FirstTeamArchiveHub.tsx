import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import { seasons } from '../data/seasons'

/** First team archive hub — links off to each archived season's first-team page. */
function FirstTeamArchiveHub() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'First team archive — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">
            <Link to="/archive" className="hover:text-white hover:underline">
              Season archive
            </Link>
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">First team archive</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            Full fixtures, results, final tables and squads from every archived first-team season.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <SectionHeading icon="standings" title="Choose a season" className="justify-center" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {seasons.map((s) => (
            <Link
              key={s.slug}
              to={`/archive/first-team/${s.slug}`}
              className="block rounded-lg border border-slate-200 p-6 transition hover:border-[#0b2d52] hover:shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#0b2d52]">{s.label}</h3>
              <p className="mt-2 text-sm text-slate-600">{s.standing}</p>
              <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">View season &rarr;</span>
            </Link>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

export default FirstTeamArchiveHub
