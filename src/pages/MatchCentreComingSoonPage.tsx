import { useEffect } from 'react'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'

function MatchCentreComingSoonPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Match Centre — Coming soon | Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">Filton Athletic FC</p>
          <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">Match Centre</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            Coming soon: live scores, key match events and supporter updates from across the club.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <section className="mx-auto max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center sm:p-8">
          <span className="inline-flex rounded-full bg-[#e2f2e6] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1d6038]">
            Coming soon
          </span>
          <h2 className="mt-4 text-xl font-bold text-[#0b2d52] sm:text-2xl">Every key moment, in one place.</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
            The Match Centre will make it easier to follow First Team, Reserves, A&apos;s and Youth fixtures as they happen.
            Check back soon for live scorelines, match timelines and full-time summaries.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

export default MatchCentreComingSoonPage
