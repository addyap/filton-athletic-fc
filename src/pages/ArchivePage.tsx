import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'

/** Top-level archive directory — links off to the First team and Reserves archive hubs. */
function ArchivePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Season archive — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">Season archive</p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">Past seasons</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            Full fixtures, results, final tables and squads from previous seasons &mdash; or{' '}
            <Link to="/programmes" className="underline hover:text-white">
              read the matchday programmes &rarr;
            </Link>
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <SectionHeading icon="standings" title="Choose a team" className="justify-center" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Link
            to="/archive/first-team"
            className="block rounded-lg border border-slate-200 p-6 transition hover:border-[#0b2d52] hover:shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#0b2d52]">First team archive</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fixtures, results, final tables and squads from every archived first-team season.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">View archive &rarr;</span>
          </Link>
          <Link
            to="/archive/reserves"
            className="block rounded-lg border border-slate-200 p-6 transition hover:border-[#0b2d52] hover:shadow-sm"
          >
            <h3 className="text-lg font-bold text-[#0b2d52]">Reserves archive</h3>
            <p className="mt-2 text-sm text-slate-600">
              Fixtures, results and final tables from every archived Reserves season.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">View archive &rarr;</span>
          </Link>
          <Link
            to="/archive/filton-athletic-evening-post-2009"
            className="block rounded-lg border border-[#b9d6c0] bg-[#edf6ef] p-6 transition hover:border-[#2f6b45] hover:shadow-sm sm:col-span-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f6b45]">Club press archive · 2009</p>
            <h3 className="mt-2 text-lg font-bold text-[#0b2d52]">Filton Athletic&rsquo;s route back to success</h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Explore a preserved Evening Post feature and an original club-archive summary of a pivotal chapter in
              Filton Athletic&rsquo;s story.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">Read the archive feature &rarr;</span>
          </Link>
          <Link
            to="/archive/team-photographs"
            className="block rounded-lg border border-[#b9d6c0] bg-[#f4f8f4] p-6 transition hover:border-[#2f6b45] hover:shadow-sm sm:col-span-2"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f6b45]">Club photograph archive</p>
            <h3 className="mt-2 text-lg font-bold text-[#0b2d52]">Historic team photographs</h3>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Browse individually preserved First Team and Reserves photographs from the clubhouse archive, retaining their
              original frames, display context and printed captions.
            </p>
            <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">Browse the photograph archive &rarr;</span>
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

export default ArchivePage
