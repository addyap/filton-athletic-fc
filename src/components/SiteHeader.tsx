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
  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#0b2d52] text-white">
      <div className="flex items-center gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-4">
          <img src={crest} alt="Filton Athletic FC crest" className="h-14 w-14 object-contain" />
          <div>
            <h1 className="text-xl font-bold leading-tight">Filton Athletic FC</h1>
            <p className="text-xs text-slate-300">Est. Filton, Bristol &middot; #FATS #UTF</p>
          </div>
        </Link>
      </div>
      <nav className="border-t border-white/10 bg-[#0a2745]">
        <div className="mx-auto flex max-w-6xl justify-center gap-5 overflow-x-auto px-6 py-2 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="whitespace-nowrap text-slate-200 hover:text-white">
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default SiteHeader
