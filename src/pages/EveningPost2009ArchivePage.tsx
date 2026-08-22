import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SiteFooter from '../components/SiteFooter'
import SiteHeader from '../components/SiteHeader'
import SectionHeading from '../components/SectionHeading'

const newspaperScanUrl = '/archive/photographs/evening-post-2009.jpg'

function EveningPost2009ArchivePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a9e0b8]">Club press archive · 20 October 2009</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Filton Athletic&rsquo;s route back to success
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-100 sm:text-lg">
            A preserved Evening Post feature captures a pivotal moment in the club&rsquo;s story &mdash; and the people
            working to move Filton Athletic forward.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(280px,0.72fr)] lg:items-start">
          <article className="order-2 lg:order-1">
            <SectionHeading icon="clock" title="A club on the way up" />
            <div className="mt-5 space-y-5 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
              <p>
                In autumn 2009, the Evening Post looked back at a Filton Athletic side emerging from a difficult spell
                with renewed momentum. The report described a first team finding its feet in Division I, supported by a
                settled group of players, an active committee and a revived reserves side.
              </p>
              <p>
                The feature traces the club&rsquo;s path from its St Andrews Meth. roots in the 1960s through its 1986
                renaming as Filton Athletic, successive promotions and the return of a reserves team. It also records the
                ambition around the first team at the time, led by manager Darren Jones, and the energy around the club.
              </p>
              <p>
                More than a results report, the article is a snapshot of the volunteer effort behind the badge: players
                staying together, managers building competitive sides and club figures working to put difficult seasons
                behind them. Those themes remain recognisable in Filton Athletic today.
              </p>
            </div>

            <section className="mt-9 rounded-2xl border border-slate-200 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f6b45]">Who&rsquo;s in the photograph</p>
              <p className="mt-2 text-sm text-slate-500">As named in the Evening Post caption, 20 October 2009.</p>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">Back row &middot; left to right</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">
                    Darren Jones (manager), Martyn Sims, Kenny Wynne, Mike Humby, Gary Keary, Luke Walker,
                    Matty Price, Rob Cotter, Mark Loftus, Simon Bryan
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">Front row &middot; left to right</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">
                    Peter Jefferey, Matthew Shipsey, Craig Lanfear, Chris Misir, Paul Woodrow, Dean Lewis
                  </dd>
                </div>
              </dl>
            </section>

            <section className="mt-9 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2f6b45]">At a glance</p>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">1960s</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">The article recalls the club&rsquo;s launch as St Andrews Meth.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">1986</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">The club name changed to Filton Athletic FC.</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-[#0b2d52]">2009</dt>
                  <dd className="mt-1 text-sm leading-6 text-slate-600">A report of recovery, continuity and renewed ambition.</dd>
                </div>
              </dl>
            </section>

            <aside className="mt-8 border-l-4 border-[#2f6b45] bg-[#e7f0e9] px-5 py-4 text-sm leading-6 text-[#173f2d]">
              <p className="font-semibold">Archive note</p>
              <p className="mt-1">
                This is an original historical summary prepared for the club archive. The supplied scan preserves the
                original Evening Post page, credited to David Hughes and dated 20 October 2009.
              </p>
            </aside>

            <p className="mt-8 text-sm text-slate-600">
              <Link to="/archive" className="font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]">
                Back to the season archive &rarr;
              </Link>
            </p>
          </article>

          <aside className="order-1 lg:order-2 lg:sticky lg:top-6">
            <figure className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <a href={newspaperScanUrl} target="_blank" rel="noreferrer" className="block bg-slate-100">
                <img
                  src={newspaperScanUrl}
                  alt="Scanned Evening Post page from 20 October 2009 featuring a Filton Athletic team photograph and historical report."
                  className="h-auto w-full"
                />
              </a>
              <figcaption className="p-4">
                <p className="text-sm font-semibold text-[#0b2d52]">Original newspaper scan</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Evening Post, 20 October 2009. Scan supplied from the club archive.
                </p>
                <a
                  href={newspaperScanUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block text-sm font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]"
                >
                  Open the full scan &rarr;
                </a>
              </figcaption>
            </figure>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

export default EveningPost2009ArchivePage
