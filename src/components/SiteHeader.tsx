import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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

// In-page section ids to scroll-spy, derived from the hash links.
const sectionIds = navLinks.filter((l) => l.href.startsWith('/#')).map((l) => l.href.slice(2))

function SiteHeader() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeId, setActiveId] = useState('')
  const lastY = useRef(0)

  // Scroll-spy: highlight the nav link for the section currently in view. Only the
  // single-page view has these sections; on other routes no id matches and the
  // active state falls back to pathname matching below.
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) {
      setActiveId('')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return
        // The intersecting section nearest the top of the viewport wins.
        const top = visible.reduce((a, b) =>
          a.boundingClientRect.top < b.boundingClientRect.top ? a : b,
        )
        setActiveId(top.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [location.pathname])

  function isActive(l: NavLink): boolean {
    if (l.external) return false
    if (l.href.startsWith('/#')) return activeId === l.href.slice(2)
    return location.pathname === l.href
  }

  // Hide the header when scrolling down, reveal it when scrolling up (and always
  // near the top). One combined header — no duplicated brand, and it reclaims the
  // full screen while reading.
  useEffect(() => {
    lastY.current = window.scrollY
    let ticking = false
    const update = () => {
      const y = window.scrollY
      if (menuOpen || y < 96) {
        setHidden(false)
      } else if (y > lastY.current + 6) {
        setHidden(true)
      } else if (y < lastY.current - 6) {
        setHidden(false)
      }
      lastY.current = y
      ticking = false
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  // While the mobile menu overlay is open: lock body scroll and close on Escape.
  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  // While the menu is open the header must not carry a transform — a transformed
  // ancestor would re-anchor the fixed backdrop to the header instead of the viewport.
  const transformClasses = menuOpen
    ? ''
    : `transition-transform duration-300 will-change-transform ${hidden ? '-translate-y-full' : 'translate-y-0'}`

  return (
    <header className={`sticky top-0 z-50 text-white print:hidden ${transformClasses}`}>
      {/* Masthead */}
      <div className="border-b border-white/10 bg-[#0b2d52]">
        <div className="flex items-center justify-between gap-4 py-2 pl-0 pr-2 sm:pr-3">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 sm:gap-5">
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

          {/* Mobile menu toggle. */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded p-2 text-slate-200 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <svg
              className="h-7 w-7"
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
      </div>

      {/* Desktop nav row — centred inline links with group dividers. */}
      <nav aria-label="Primary" className="hidden border-b border-white/10 bg-[#0a2745] lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2 sm:px-6 xl:gap-4">
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
                  aria-current={isActive(l) ? 'page' : undefined}
                  className={`whitespace-nowrap text-[15px] ${
                    isActive(l) ? 'font-semibold text-white' : 'text-slate-200 hover:text-white'
                  }`}
                >
                  {l.label}
                </Link>
              )}
              {l.groupEnd && <span aria-hidden="true" className="h-4 w-px bg-white/20" />}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile menu — overlay dropdown that scrolls itself instead of pushing the page. */}
      {menuOpen && (
        <>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="fixed inset-x-0 bottom-0 top-full z-40 bg-black/40 lg:hidden"
          />
          <nav
            id="mobile-navigation"
            aria-label="Primary"
            className="absolute inset-x-0 top-full z-50 max-h-[70vh] overflow-y-auto border-t border-white/10 bg-[#0a2745] shadow-xl lg:hidden"
          >
            <div className="flex flex-col px-4 py-2 sm:px-6">
              {navLinks.map((l) => (
                <div key={l.href}>
                  {l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      onClick={closeMenu}
                      className="block py-3 text-base text-slate-200 hover:text-white"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      to={l.href}
                      onClick={closeMenu}
                      aria-current={isActive(l) ? 'page' : undefined}
                      className={`block py-3 text-base ${
                        isActive(l) ? 'font-semibold text-white' : 'text-slate-200 hover:text-white'
                      }`}
                    >
                      {l.label}
                    </Link>
                  )}
                  {/* Divider after a logical cluster — mirrors the desktop nav's group separators. */}
                  {l.groupEnd && <span aria-hidden="true" className="my-1.5 block h-px bg-white/15" />}
                </div>
              ))}

              {/* Affiliated links — carried over from the desktop masthead so they're
                  reachable on mobile too. */}
              <span aria-hidden="true" className="my-1.5 block h-px bg-white/15" />
              <p className="pb-1 pt-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                Affiliated links
              </p>
              <a
                href={countyLeagueUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="block py-2 text-base text-slate-200 hover:text-white"
              >
                Marcliff Gloucestershire County Football League
              </a>
              <a
                href={fullTimeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="block py-2 text-base text-slate-200 hover:text-white"
              >
                FA Full-Time &mdash; league tables &amp; results
              </a>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

export default SiteHeader
