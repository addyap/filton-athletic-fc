import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const PAGE_URL = 'https://www.facebook.com/FiltonAthleticFC'

/**
 * The club's Facebook page feed as its own tidy, centred section — Facebook's
 * official page plugin (a plain iframe: no SDK, app ID, API key or cost). Shows
 * recent posts to logged-out visitors and updates automatically as the club
 * posts, so it doubles as live matchday updates. Facebook's iframe sets its own
 * cookies; this is noted in the privacy policy.
 */
function FacebookSection() {
  const src =
    `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(PAGE_URL)}` +
    '&tabs=timeline&width=500&height=680&small_header=false' +
    '&adapt_container_width=true&hide_cover=false&show_facepile=true'

  return (
    <section id="facebook" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
      <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Live on Facebook" className="justify-center" />
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-slate-500">
          Matchday updates and everything from around the club &mdash; posted live to our Facebook page and
          shown here as it happens.
        </p>

        <div className="mx-auto mt-6 w-full max-w-[500px]">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <iframe
              title="Filton Athletic FC on Facebook"
              src={src}
              className="block h-[680px] w-full"
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>

          <div className="mt-5 text-center">
            <a
              href={PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-[#0b2d52] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#123a68]"
            >
              Follow Filton Athletic on Facebook
              <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <p className="mt-3 text-sm text-slate-500">
              Also on{' '}
              <a href="https://x.com/FiltonAthletic" target="_blank" rel="noreferrer" className="font-medium text-[#0b2d52] underline">
                X / Twitter
              </a>
              .
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default FacebookSection
