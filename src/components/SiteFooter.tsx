import { Link } from 'react-router-dom'
import { groundInfo } from '../data/club'
import elmParkPitch from '../assets/img/elm-park-pitch.jpg'
import BackToTop from './BackToTop'
import SectionHeading from './SectionHeading'

const mapsQuery = encodeURIComponent(`${groundInfo.name}, ${groundInfo.address}`)
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`

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
              <img
                src={elmParkPitch}
                alt="The pitch at BBS Park North, Elm Park, Filton"
                className="mb-4 aspect-video w-full rounded-lg object-cover"
                loading="lazy"
              />
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
                <p className="mt-1 flex flex-wrap items-center gap-1.5">
                  <span>Match Centre:</span>
                  <Link to="/match-centre" className="font-semibold text-[#0b2d52] underline">
                    Live match updates
                  </Link>
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
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative flex min-h-80 overflow-hidden rounded-2xl bg-[#0b2d52] p-7 text-white shadow-sm lg:col-span-3 lg:min-h-[320px]"
            >
              <span aria-hidden="true" className="absolute -right-16 -top-12 h-72 w-72 rounded-full border-[28px] border-white/5" />
              <span aria-hidden="true" className="absolute -bottom-24 left-12 h-64 w-64 rounded-full border-[22px] border-[#a9e0b8]/10" />
              <div className="relative flex max-w-sm flex-col justify-between">
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#a9e0b8]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-7 w-7">
                      <path d="M12 21s6.5-5.3 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.7 12 21 12 21z" />
                      <circle cx="12" cy="10.5" r="2.3" />
                    </svg>
                  </span>
                  <p className="mt-5 text-sm font-bold uppercase tracking-[0.18em] text-[#a9e0b8]">Find the ground</p>
                  <p className="mt-2 text-3xl font-bold leading-tight">{groundInfo.name}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{groundInfo.address}</p>
                </div>
                <span className="mt-8 inline-flex w-fit items-center rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0b2d52] transition group-hover:bg-[#a9e0b8]">
                  Open directions &rarr;
                </span>
              </div>
            </a>
          </div>
        </div>
      </footer>
      <BackToTop />
    </>
  )
}

export default SiteFooter
