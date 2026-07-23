import { useState } from 'react'
import { Link } from 'react-router-dom'
import crest from '../assets/img/filton-athletic-crest-transparent.png'

const navLinks = [
  { href: '/#join', label: 'Join Us' },
  { href: '/#news', label: 'News' },
  { href: '/#history', label: 'History' },
  { href: '/#squad', label: 'Squad' },
  { href: '/#fixtures', label: 'Fixtures' },
  { href: '/#table', label: 'Table' },
  { href: '/#youth', label: 'Youth' },
  { href: '/#sponsors', label: 'Sponsors' },
  { href: '/#contact', label: 'Contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#0b2d52] text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="flex items-center gap-3 sm:gap-4">
          <img
            src={crest}
            alt="Filton Athletic FC crest"
            className="h-11 w-11 object-contain sm:h-14 sm:w-14"
          />
          <div>
            <h1 className="text-lg font-bold leading-tight sm:text-xl">Filton Athletic FC</h1>
            <p className="text-[11px] text-slate-300 sm:text-xs">
              Est. Filton, Bristol &middot; #FATS #UTF
            </p>
          </div>
        </Link>

        {/* Mobile menu toggle — hidden on desktop where the full nav is always shown */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label="Toggle navigation menu"
          className="inline-flex items-center justify-center rounded p-2 text-slate-200 hover:bg-white/10 hover:text-white lg:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <nav id="primary-navigation" className="border-t border-white/10 bg-[#0a2745]">
        {/* Desktop: centred inline row. Mobile: collapsible stacked list. */}
        <div
          className={`mx-auto max-w-6xl px-4 sm:px-6 lg:flex lg:justify-center lg:gap-5 lg:py-2 ${
            menuOpen ? 'flex flex-col py-2' : 'hidden lg:flex'
          }`}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="whitespace-nowrap py-2 text-sm text-slate-200 hover:text-white lg:py-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
