import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
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
      <AsTeamSection />
      <SiteFooter />
    </div>
  )
}

export default AsTeamPage
