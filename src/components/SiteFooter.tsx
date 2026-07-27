import { Link } from 'react-router-dom'
import { groundInfo } from '../data/club'
import BackToTop from './BackToTop'
import SectionHeading from './SectionHeading'

const mapsQuery = encodeURIComponent(`${groundInfo.name}, ${groundInfo.address}`)
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`
const mapsEmbedUrl = `https://www.google.com/maps?q=${mapsQuery}&output=embed`

const shopUrl = 'https://www.boca-uk.com/webshop/club-shops/filton-athletic-fc/'
const xUrl = 'https://x.com/FiltonAthletic'
const facebookUrl = 'https://www.facebook.com/FiltonAthleticFC'

function SiteFooter({ headingLevel }: { headingLevel?: 'h1' | 'h3' } = {}) {
  return (
    <>
      <footer id="contact" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="pin" title="Contact & ground" className="justify-center" as={headingLevel} />
          <div className="mt-6 grid gap-8 lg:grid-cols-5 lg:items-start">
            <div className="lg:col-span-2">
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

              <div className="mt-8 text-sm text-slate-600">
                <p>
                  Email:{' '}
                  <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
                    filtonathleticfc@outlook.com
                  </a>
                </p>
                <p className="mt-1">
                  Facebook:{' '}
                  <a className="text-[#0b2d52] underline" href={facebookUrl} target="_blank" rel="noreferrer">
                    Filton Athletic FC
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
                {' · '}
                <Link to="/privacy-policy" className="underline">
                  Privacy policy
                </Link>
                {' · '}
                <Link to="/safeguarding" className="underline">
                  Safeguarding
                </Link>
              </p>
            </div>
            <iframe
              title={`Map of ${groundInfo.name}`}
              src={mapsEmbedUrl}
              className="h-80 w-full rounded-lg border border-slate-200 lg:col-span-3 lg:h-full lg:min-h-[320px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}

export default SiteFooter
