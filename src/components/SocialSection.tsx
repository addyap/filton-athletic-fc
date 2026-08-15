import { Link } from 'react-router-dom'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const facebookUrl = 'https://www.facebook.com/FiltonAthleticFC'
const xUrl = 'https://x.com/FiltonAthletic'
const facebookFeedUrl =
  `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(facebookUrl)}` +
  '&tabs=timeline&width=500&height=520&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true'

function SocialSection() {
  return (
    <section id="social" className="border-b border-slate-200 bg-slate-50">
      <Reveal className="mx-auto max-w-6xl px-6 py-12">
        <SectionHeading icon="chat" title="Stay connected" className="justify-center" as="h2" />
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-500">
          See the latest posts from Filton Athletic, then follow the club for matchday updates, team news and more.
        </p>

        <div className="mt-7 grid gap-6 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:items-center">
          <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="mb-3 flex items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877f2] text-base font-bold text-white">f</span>
                <div>
                  <p className="text-sm font-bold text-[#0b2d52]">Latest from Facebook</p>
                  <p className="text-xs text-slate-500">Filton Athletic FC</p>
                </div>
              </div>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-[#0b2d52] underline"
              >
                Open Facebook
              </a>
            </div>
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
              <iframe
                title="Filton Athletic FC Facebook posts"
                src={facebookFeedUrl}
                className="block h-[520px] w-full"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                loading="lazy"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <p className="px-1 pt-3 text-xs text-slate-500">
              Can&rsquo;t see the feed?{' '}
              <a href={facebookUrl} target="_blank" rel="noreferrer" className="font-semibold text-[#0b2d52] underline">
                View the latest posts on Facebook &rarr;
              </a>
            </p>
          </article>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <a
              href={xUrl}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl bg-[#0b2d52] p-6 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-10 w-10">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div>
                  <p className="font-bold">X / Twitter</p>
                  <p className="text-sm text-white/65">Live scores and line-ups</p>
                </div>
              </div>
              <span className="mt-5 inline-block text-sm font-semibold text-white group-hover:underline">Follow @FiltonAthletic &rarr;</span>
            </a>

            <Link
              to="/#news"
              className="group rounded-2xl border border-[#2f6b45]/30 bg-[#e7f0e9] p-6 transition hover:-translate-y-1 hover:border-[#2f6b45] hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#2f6b45] shadow-sm">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-6 w-6">
                    <path d="M4 6.5h16v11H4zM7.5 10h9M7.5 14h6" strokeLinecap="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-bold text-[#0b2d52]">Club news</p>
                  <p className="text-sm text-slate-600">Stories from every team</p>
                </div>
              </div>
              <span className="mt-5 inline-block text-sm font-semibold text-[#0b2d52] group-hover:underline">Read the latest news &rarr;</span>
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default SocialSection
