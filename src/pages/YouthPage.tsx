import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
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
      <SiteFooter />
    </div>
  )
}

export default YouthPage
