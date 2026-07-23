import { groundInfo } from '../data/club'
import BackToTop from './BackToTop'
import SectionHeading from './SectionHeading'

const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${groundInfo.name}, ${groundInfo.address}`,
)}`

const shopUrl = 'https://www.boca-uk.com/webshop/club-shops/filton-athletic-fc/'
const xUrl = 'https://x.com/FiltonAthletic'

function SiteFooter() {
  return (
    <>
      <footer id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="pin" title="Contact & ground" />
          <div className="mt-6">
            <p className="font-semibold">Home of the first team, reserves and youth</p>
            <p className="text-slate-700">{groundInfo.name}</p>
            <p className="text-slate-700">{groundInfo.address}</p>
            <a
              className="mt-2 inline-block text-sm font-semibold text-[#0b2d52] underline"
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions &rarr;
            </a>
          </div>
          <div className="mt-8 text-sm text-slate-600">
            <p>
              Email:{' '}
              <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
                filtonathleticfc@outlook.com
              </a>
            </p>
            <p className="mt-1">
              Twitter/X:{' '}
              <a className="text-[#0b2d52] underline" href={xUrl} target="_blank" rel="noreferrer">
                @FiltonAthletic
              </a>
            </p>
            <p className="mt-1">
              Club shop:{' '}
              <a className="text-[#0b2d52] underline" href={shopUrl} target="_blank" rel="noreferrer">
                Buy official kit &amp; merchandise
              </a>
            </p>
          </div>
          <p className="mt-10 text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Filton Athletic FC. #FATS #UTF
          </p>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}

export default SiteFooter
