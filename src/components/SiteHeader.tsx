import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import crest from '../assets/img/filton-athletic-crest-transparent.webp'
import { sponsors } from '../data/club'

type NavLink = { href: string; label: string; external?: boolean }

const countyLeagueUrl = 'https://countyleague.co.uk/'
const fullTimeUrl = 'https://fulltime.thefa.com/index.html?league=5545575'

const teamLinks: NavLink[] = [
  { href: '/first-team', label: 'First Team' },
  { href: '/reserves', label: 'Reserves' },
  { href: '/as-team', label: "A's" },
  { href: '/youth', label: 'Youth' },
]

const matchdayLinks: NavLink[] = [
  { href: '/#club-calendar', label: 'Calendar' },
  { href: '/#league-results', label: 'Results' },
]

const actionLinks: NavLink[] = [
  { href: '/#join', label: 'Join Us' },
  { href: 'https://www.boca-uk.com/webshop/club-shops/filton-athletic-fc/', label: 'Shop', external: true },
  { href: '/#sponsors', label: 'Sponsors' },
]

const clubLinks: NavLink[] = [
  { href: '/programmes', label: 'Matchday Programmes' },
  { href: '/#news', label: 'News' },
  { href: '/#history', label: 'History' },
  { href: '/archive', label: 'Archive' },
  { href: '/#contact', label: 'Contact & ground' },
]

const sectionIds = [...teamLinks, ...matchdayLinks, ...actionLinks, ...clubLinks]
  .filter((link) => link.href.startsWith('/#'))
  .map((link) => link.href.slice(2))

function NavigationLink({
  link,
  active,
  className,
  onClick,
}: {
  link: NavLink
  active: boolean
  className: string
  onClick?: () => void
}) {
  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
        {link.label}
      </a>
    )
  }

  return (
    <Link to={link.href} onClick={onClick} aria-current={active ? 'page' : undefined} className={className}>
      {link.label}
    </Link>
  )
}

function SiteHeader() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [activeId, setActiveId] = useState('')
  const lastY = useRef(0)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)
    if (sections.length === 0) {
      setActiveId('')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length === 0) return
        const top = visible.reduce((first, second) =>
          first.boundingClientRect.top < second.boundingClientRect.top ? first : second,
        )
        setActiveId(top.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [location.pathname])

  function isActive(link: NavLink): boolean {
    if (link.external) return false
    if (link.href.startsWith('/#')) return activeId === link.href.slice(2)
    return location.pathname === link.href
  }

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

  useEffect(() => {
    if (!menuOpen) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const transformClasses = menuOpen
    ? ''
    : `transition-transform duration-300 will-change-transform ${hidden ? '-translate-y-full' : 'translate-y-0'}`
  const desktopClass = (active: boolean) =>
    `whitespace-nowrap text-sm transition ${active ? 'font-bold text-white' : 'text-slate-200 hover:text-white'}`
  const mobileClass = (active: boolean) =>
    `block rounded-lg px-3 py-2.5 text-base transition ${active ? 'bg-white/10 font-semibold text-white' : 'text-slate-200 hover:bg-white/10 hover:text-white'}`
  const clubActive = clubLinks.some(isActive)

  return (
    <header className={`sticky top-0 z-50 text-white print:hidden ${transformClasses}`}>
      {/* Sponsor ticker */}
      <div className="hidden border-b border-white/[0.06] bg-[#071e38] lg:flex lg:items-center" aria-hidden="true">
        <style>{`
          @keyframes sponsor-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
          .sponsor-ticker { animation: sponsor-scroll 35s linear infinite; }
          .sponsor-ticker:hover { animation-play-state: paused; }
        `}</style>
        <span className="shrink-0 border-r border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-400">
          Sponsors
        </span>
        <div className="flex min-w-0 flex-1 overflow-hidden">
          {(() => {
            const main = ['BBS Plumbing & Heating Supplies', 'First Auto Care Techs']
            const ordered = [
              ...sponsors.filter(s => main.includes(s.name)),
              ...sponsors.filter(s => !main.includes(s.name)),
            ]
            const items = [...ordered, ...ordered]
            return (
              <div className="sponsor-ticker flex shrink-0 items-center whitespace-nowrap py-2">
                {items.map((s, i) => (
                  <span key={i} className="flex items-center">
                    <span className="mx-5 text-xs text-[#c9a84c]" aria-hidden="true">◆</span>
                    {s.website ? (
                      <a
                        href={s.website}
                        target="_blank"
                        rel="noreferrer"
                        className={`text-sm tracking-wide transition hover:underline ${
                          main.includes(s.name) ? 'font-semibold text-[#e8c76a]' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {s.name}
                      </a>
                    ) : (
                      <a
                        href="/#sponsors"
                        className="text-sm tracking-wide text-slate-400 transition hover:text-white hover:underline"
                      >
                        {s.name}
                      </a>
                    )}
                  </span>
                ))}
              </div>
            )
          })()}
        </div>
      </div>
      <div className="border-b border-white/10 bg-[#0b2d52]">
        <div className="flex items-center justify-between gap-4 py-2 pl-0 pr-2 sm:pr-3">
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 sm:gap-5">
            <img src={crest} alt="Filton Athletic FC crest" className="h-16 w-16 object-contain sm:h-24 sm:w-24" />
            <div>
              <p className="text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">Filton Athletic FC</p>
              <p className="text-xs text-slate-300 sm:text-base lg:text-lg">Est. Filton, Bristol &middot; #FATS #UTF</p>
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

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label="Toggle navigation menu"
            className="inline-flex items-center justify-center rounded p-2 text-slate-200 hover:bg-white/10 hover:text-white lg:hidden"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <nav aria-label="Primary" className="hidden border-b border-white/10 bg-[#0a2745] lg:block">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-4 px-4 py-2 sm:px-6 xl:gap-5">
          {teamLinks.map((link) => (
            <NavigationLink key={link.href} link={link} active={isActive(link)} className={desktopClass(isActive(link))} />
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-white/20" />
          {matchdayLinks.map((link) => (
            <NavigationLink key={link.href} link={link} active={isActive(link)} className={desktopClass(isActive(link))} />
          ))}
          <span aria-hidden="true" className="h-4 w-px bg-white/20" />
          {actionLinks.map((link) => (
            <NavigationLink key={link.href} link={link} active={isActive(link)} className={desktopClass(isActive(link))} />
          ))}
          <details className="group relative">
            <summary
              className={`flex cursor-pointer list-none items-center gap-1 whitespace-nowrap text-sm transition ${
                clubActive ? 'font-bold text-white' : 'text-slate-200 hover:text-white'
              }`}
            >
              Club
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className="h-4 w-4 transition group-open:rotate-180">
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </summary>
            <div className="absolute right-0 top-[calc(100%+0.7rem)] w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
              {clubLinks.map((link) => (
                <NavigationLink
                  key={link.href}
                  link={link}
                  active={isActive(link)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    isActive(link) ? 'bg-slate-100 font-bold text-[#0b2d52]' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                />
              ))}
            </div>
          </details>
        </div>
      </nav>

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
            <div className="space-y-5 px-4 py-4 sm:px-6">
              {[
                { title: 'Teams', links: teamLinks },
                { title: 'Matchday', links: matchdayLinks },
                { title: 'Get involved', links: actionLinks },
                { title: 'Club', links: clubLinks },
              ].map((group) => (
                <div key={group.title}>
                  <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">{group.title}</p>
                  <div className="grid gap-1">
                    {group.links.map((link) => (
                      <NavigationLink
                        key={link.href}
                        link={link}
                        active={isActive(link)}
                        onClick={closeMenu}
                        className={mobileClass(isActive(link))}
                      />
                    ))}
                  </div>
                </div>
              ))}

              <div className="border-t border-white/15 pt-4">
                <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wide text-slate-400">Affiliated links</p>
                <a href={countyLeagueUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className={mobileClass(false)}>
                  Marcliff Gloucestershire County Football League
                </a>
                <a href={fullTimeUrl} target="_blank" rel="noreferrer" onClick={closeMenu} className={mobileClass(false)}>
                  FA Full-Time &mdash; league tables &amp; results
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  )
}

export default SiteHeader
