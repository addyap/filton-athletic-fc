import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
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
      <SiteFooter />
    </div>
  )
}

export default ReservesPage
