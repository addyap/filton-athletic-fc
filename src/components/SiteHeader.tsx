import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import crest from '../assets/img/filton-athletic-crest-transparent.webp'

type NavLink = { href: string; label: string; external?: boolean; groupEnd?: boolean }

const countyLeagueUrl = 'https://countyleague.co.uk/'
const fullTimeUrl = 'https://fulltime.thefa.com/index.html?league=5545575'

// groupEnd marks the last link in a logical cluster — a divider is rendered after it.
const navLinks: NavLink[] = [
  { href: '/#join', label: 'Join Us', groupEnd: true },
  { href: '/#squad', label: 'First Team' },
  { href: '/reserves', label: 'Reserves' },
  { href: '/as-team', label: "A's" },
  { href: '/#youth', label: 'Youth', groupEnd: true },
  { href: '/#fixtures', label: 'Fixtures' },
  { href: '/#table', label: 'Table', groupEnd: true },
  { href: '/#news', label: 'News' },
  { href: '/#history', label: 'History', groupEnd: true },
  { href: '/#sponsors', label: 'Sponsors', groupEnd: true },
  { href: '/archive', label: 'Archive', groupEnd: true },
  { href: 'https://www.boca-uk.com/webshop/club-shops/filton-athletic-fc/', label: 'Shop', external: true, groupEnd: true },
  { href: '/#contact', label: 'Contact' },
]

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Lock body scroll while the mobile menu overlay is open.
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      {/* Masthead — scrolls away on scroll; only the nav below stays pinned.
          Rendered as a sibling of the nav (not a wrapper) so the sticky nav's
          containing block is the tall page, letting it pin across the whole page. */}
      <header className="border-b border-white/10 bg-[#0b2d52] text-white print:hidden">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="flex items-center gap-3 sm:gap-5">
            <img
              src={crest}
              alt="Filton Athletic FC crest"
              className="h-16 w-16 object-contain sm:h-24 sm:w-24"
            />
            <div>
              <h1 className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">Filton Athletic FC</h1>
              <p className="text-xs text-slate-300 sm:text-base lg:text-lg">
                Est. Filton, Bristol &middot; #FATS #UTF
              </p>
            </div>
          </Link>

          <div className="ml-auto hidden flex-col items-end gap-2 whitespace-nowrap text-lg text-slate-300 lg:flex lg:text-xl">
            <span className="text-base font-semibold uppercase tracking-wide text-slate-400 lg:text-lg">Affiliated links</span>
            <a href={countyLeagueUrl} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">
              Marcliff Gloucestershire County Football League
            </a>
            <a href={fullTimeUrl} target="_blank" rel="noreferrer" className="hover:text-white hover:underline">
              FA Full-Time &mdash; league tables &amp; results
            </a>
          </div>
        </div>
      </header>

      {/* Sticky nav bar — the only pinned element. Stays slim on every breakpoint. */}
      <nav
        id="primary-navigation"
        className="sticky top-0 z-50 border-b border-white/10 bg-[#0a2745]/95 text-white backdrop-blur supports-[backdrop-filter]:bg-[#0a2745]/80 print:hidden"
      >
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6">
          {/* Compact brand — keeps the crest visible once the masthead scrolls off. */}
          <Link to="/" onClick={closeMenu} className="flex shrink-0 items-center gap-2">
            <img src={crest} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
            <span className="text-sm font-semibold sm:text-base lg:hidden">Filton Athletic FC</span>
          </Link>

          {/* Desktop links — inline row, right-aligned. groupEnd renders a divider
              after a cluster (mirrors the mobile menu's grouping). */}
          <div className="ml-auto hidden items-center gap-3 lg:flex xl:gap-4">
            {navLinks.map((l) => (
              <div key={l.href} className="flex items-center gap-3 xl:gap-4">
                {l.external ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="whitespace-nowrap text-[15px] text-slate-200 hover:text-white"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.href}
                    className="whitespace-nowrap text-[15px] text-slate-200 hover:text-white"
                  >
                    {l.label}
                  </Link>
                )}
                {l.groupEnd && <span aria-hidden="true" className="h-4 w-px bg-white/20" />}
              </div>
            ))}
          </div>

          {/* Mobile menu toggle. */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="ml-auto inline-flex items-center justify-center rounded p-2 text-slate-200 hover:bg-white/10 hover:text-white lg:hidden"
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

        {/* Mobile menu — overlay dropdown that scrolls itself instead of pushing the page. */}
        {menuOpen && (
          <>
            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMenu}
              className="fixed inset-0 top-[var(--nav-h,3.25rem)] z-40 bg-black/40 lg:hidden"
            />
            <div
              id="mobile-navigation"
              className="absolute inset-x-0 top-full z-50 max-h-[70vh] overflow-y-auto border-t border-white/10 bg-[#0a2745] shadow-xl lg:hidden"
            >
              <div className="flex flex-col px-4 py-1 sm:px-6">
                {navLinks.map((l) =>
                  l.external ? (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                      className="border-b border-white/5 py-3 text-base text-slate-200 hover:text-white"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={closeMenu}
                      className="border-b border-white/5 py-3 text-base text-slate-200 hover:text-white"
                    >
                      {l.label}
                    </Link>
                  ),
                )}
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  )
}

export default SiteHeader
