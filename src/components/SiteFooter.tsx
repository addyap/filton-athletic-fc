import { groundInfo } from '../data/club'

function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h3 className="text-2xl font-bold text-[#0b2d52]">Contact &amp; ground</h3>
        <div className="mt-6">
          <p className="font-semibold">Home of the first team, reserves and youth</p>
          <p className="text-slate-700">{groundInfo.name}</p>
          <p className="text-slate-700">{groundInfo.address}</p>
        </div>
        <div className="mt-8 text-sm text-slate-600">
          <p>
            Email:{' '}
            <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
              filtonathleticfc@outlook.com
            </a>
          </p>
          <p className="mt-1">Twitter/X: @FiltonAthletic</p>
        </div>
        <p className="mt-10 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Filton Athletic FC. #FATS #UTF
        </p>
      </div>
    </footer>
  )
}

export default SiteFooter
