import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

/**
 * 404 page. The route metadata marks it noindex (see headForPath), and the
 * prerenderer writes it to dist/404.html so Vercel serves it — with a real
 * 404 status — for any unmatched URL.
 */
function NotFoundPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/fixtures', label: 'Fixtures & results' },
    { to: '/table', label: 'League table' },
    { to: '/youth', label: 'Youth' },
    { to: '/contact', label: 'Contact & ground' },
  ]

  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-[#3f8a5b]">Error 404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[#0b2d52] sm:text-5xl">Page not found</h1>
        <p className="mt-4 max-w-xl text-base text-slate-600 sm:text-lg">
          Sorry, we couldn&rsquo;t find that page &mdash; it may have moved or never existed. Try one of these
          instead:
        </p>
        <nav className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Helpful links">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#0b2d52] shadow-sm transition hover:-translate-y-0.5 hover:border-[#0b2d52] hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </main>
      <SiteFooter />
    </div>
  )
}

export default NotFoundPage
