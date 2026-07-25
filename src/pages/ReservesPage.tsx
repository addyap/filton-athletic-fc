import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import NewsFeed from '../components/NewsFeed'
import ReservesSection from '../components/sections/ReservesSection'

function ReservesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Reserves — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <ReservesSection />
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <SectionHeading icon="chat" title="Latest news" className="justify-center" />
        <NewsFeed team="reserves" emptyMessage="No Reserves news yet — check back soon." />
      </section>
      <SiteFooter />
    </div>
  )
}

export default ReservesPage
