import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const FB_PAGE = 'https://www.facebook.com/FiltonAthleticFC'
const X_URL = 'https://x.com/FiltonAthletic'

/**
 * "Follow the club" — the live Facebook feed alongside a matching X panel.
 *
 * Facebook's official page plugin (a plain iframe) shows recent posts live to
 * logged-out visitors and updates as the club posts. X can't be embedded live
 * (its timeline embed returns nothing when logged out, and x.com refuses to be
 * framed), so the X side is a branded panel that opens the club's X page.
 */
function SocialSection() {
  const fbSrc =
    `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_PAGE)}` +
    '&tabs=timeline&width=500&height=680&small_header=false' +
    '&adapt_container_width=true&hide_cover=false&show_facepile=true'

  return (
    <section id="social" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
      <Reveal className="relative mx-auto max-w-5xl px-6 py-14">
        <SectionHeading icon="chat" title="Follow the club" className="justify-center" />
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-slate-500">
          Matchday updates and everything from around the club &mdash; live on our Facebook page, with more
          on X.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          {/* Facebook — live feed */}
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2f6b45] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2f6b45]" />
                </span>
                Live on Facebook
              </span>
            </div>
            <div className="mt-4 overflow-hidden rounded-lg bg-slate-50">
              <iframe
                title="Filton Athletic FC on Facebook"
                src={fbSrc}
                className="block h-[680px] w-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <a
              href={FB_PAGE}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0b2d52] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#123a68]"
            >
              Follow on Facebook
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>

          {/* X — branded window that opens the page */}
          <div className="flex h-full flex-col rounded-2xl bg-black p-6 text-white shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-8 w-8">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <div>
                <p className="text-lg font-bold leading-tight">Filton Athletic on X</p>
                <p className="text-sm text-white/60">@FiltonAthletic</p>
              </div>
            </div>

            <p className="mt-5 text-sm text-white/80">
              Another way to keep up with the club &mdash; match-day updates, team news and a bit of banter.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 text-white/40">&#9679;</span> Live scores and full-time results
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 text-white/40">&#9679;</span> Team news and line-ups
              </li>
              <li className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-1 text-white/40">&#9679;</span> Behind the scenes from around the club
              </li>
            </ul>

            <a
              href={X_URL}
              target="_blank"
              rel="noreferrer"
              className="group mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-white/85"
            >
              Open @FiltonAthletic on X
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default SocialSection
