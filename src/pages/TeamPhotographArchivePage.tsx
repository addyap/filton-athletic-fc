import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import { historicTeamPhotos } from '../data/historicTeamPhotos'

function TeamPhotographArchivePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Historic team photographs — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9e0b8]">Club photograph archive</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Team photographs, preserved</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg">
            A growing visual record of Filton Athletic teams, drawn directly from the club&rsquo;s framed and displayed archive.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionHeading icon="camera" title="Browse the collection" />
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Each supplied photograph has its own archive record. Seasons and team names are recorded only where they are visible
              on the original display.
            </p>
          </div>
          <p className="text-sm font-semibold text-[#2f6b45]">{historicTeamPhotos.length} archive records</p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {historicTeamPhotos.map((photo) => (
            <Link
              key={photo.slug}
              to={`/archive/team-photographs/${photo.slug}`}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6b45] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#2f6b45] focus:ring-offset-2"
            >
              <div className="aspect-[16/10] bg-slate-100 p-2">
                <img src={photo.imageUrl} alt="" className="h-full w-full rounded-xl object-contain" loading="lazy" />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#2f6b45]">{photo.team}</p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-[#0b2d52] group-hover:text-[#2f6b45]">{photo.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{photo.collectionLabel}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[#0b2d52] underline group-hover:text-[#2f6b45]">
                  Open archive record &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-sm text-slate-600">
          <Link to="/archive" className="font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]">
            Back to the season archive &rarr;
          </Link>
        </p>
      </main>

      <SiteFooter />
    </div>
  )
}

export default TeamPhotographArchivePage
