import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import TableSection from '../components/sections/TableSection'

function TablePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'League table — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <TableSection />
      <SiteFooter />
    </div>
  )
}

export default TablePage
