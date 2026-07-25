import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import NewsFeed from '../components/NewsFeed'
import YouthSection from '../components/sections/YouthSection'

function YouthPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Filton Athletic Youth FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <YouthSection />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Latest news" className="justify-center" />
        <NewsFeed team="youth" emptyMessage="No Youth news yet — check back soon." />
      </section>
      <SiteFooter />
    </div>
  )
}

export default YouthPage
