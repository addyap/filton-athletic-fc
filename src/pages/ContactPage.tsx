import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact & ground — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <SiteFooter headingLevel="h1" />
    </div>
  )
}

export default ContactPage
