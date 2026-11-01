import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import FixturesSection from '../components/sections/FixturesSection'

function FixturesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main id="main" tabIndex={-1}>
      <FixturesSection headingLevel="h1" />
      </main>

      <SiteFooter />
    </div>
  )
}

export default FixturesPage
