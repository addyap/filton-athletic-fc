import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import FixturesSection from '../components/sections/FixturesSection'

function FixturesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Fixtures & results — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <FixturesSection headingLevel="h1" />
      <SiteFooter />
    </div>
  )
}

export default FixturesPage
