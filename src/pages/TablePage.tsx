import { useEffect } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import TableSection from '../components/sections/TableSection'

function TablePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <TableSection headingLevel="h1" />
      <SiteFooter />
    </div>
  )
}

export default TablePage
