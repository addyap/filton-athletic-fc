import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import NewsFeed from '../components/NewsFeed'
import AsTeamSection from '../components/sections/AsTeamSection'

function AsTeamPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "A's team — Filton Athletic FC"
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <AsTeamSection headingLevel="h1" />
      <section className="mx-auto max-w-6xl px-6 pb-14">
        <SectionHeading icon="chat" title="Latest news" className="justify-center" />
        <NewsFeed team="as" emptyMessage="No A's news yet — check back soon." />
      </section>
      <SiteFooter />
    </div>
  )
}

export default AsTeamPage
