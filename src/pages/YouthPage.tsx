import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import NewsFeed from '../components/NewsFeed'
import YouthSection from '../components/sections/YouthSection'

function YouthPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1))
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [location.hash])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <YouthSection headingLevel="h1" />
      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Latest news" className="justify-center" />
        <NewsFeed team="youth" emptyMessage="No Youth news yet — check back soon." />
      </section>
      <SiteFooter />
    </div>
  )
}

export default YouthPage
