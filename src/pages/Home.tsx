import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import playersWantedPoster from '../assets/img/players-wanted.jpg'
import bbsPlumbingLogo from '../assets/img/sponsors/bbs-plumbing.webp'
import filtonFeastLogo from '../assets/img/sponsors/filton-feast.webp'
import firstAutoCareTechsLogo from '../assets/img/sponsors/first-auto-care-techs.webp'
import dmFlooringLogo from '../assets/img/sponsors/dm-flooring.webp'
import bs3RoofingLogo from '../assets/img/sponsors/bs3-roofing.webp'
import gpRoweLogo from '../assets/img/sponsors/gp-rowe.webp'
import kitchenDenLogo from '../assets/img/sponsors/kitchen-den.webp'
import clariusLogo from '../assets/img/sponsors/clarius.webp'
import newHappyPalaceLogo from '../assets/img/sponsors/new-happy-palace.webp'
import optimumFlooringLogo from '../assets/img/sponsors/optimum-flooring.webp'
import bsfProgrammePage from '../assets/img/bsf-programme-page.webp'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import Hero from '../components/Hero'
import MatchdaySection from '../components/MatchdaySection'
import SocialSection from '../components/SocialSection'
import NewsFeed from '../components/NewsFeed'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { BootMark, NewspaperMark, TrophyMark, RosetteMark } from '../components/SectionArt'
import LatestResultsSection from '../components/LatestResultsSection'
import ClubFixturesCalendar from '../components/ClubFixturesCalendar'
import { posts, formatPostDate } from '../data/posts'
import { officials, sponsors } from '../data/club'

const historyTimeline = [
  { year: '1960s', text: 'Founded as St. Andrews Meth.' },
  { year: '1986', text: 'Renamed Filton Athletic FC.' },
  { year: '2023', text: 'Filton Athletic FC Youth Team established (U7–U12, YDS).' },
  {
    year: '2023/24',
    text: 'Champions of the Bristol & Suburban Premier Division — promoted to the Marcliff Gloucestershire County Football League.',
  },
  {
    year: '2025',
    text: 'Ground upgrades completed — first team, reserves and youth all now play at BBS Park North.',
  },
  {
    year: 'Filton Ultras',
    text: 'Our supporters group, the Filton Ultras, are behind the team at every game, home and away — bringing the noise and passion that make matchdays at Filton special.',
  },
]

const legacyTeamAnchors: Record<string, string> = {
  '#squad': '/first-team',
  '#pre-season': '/first-team#pre-season',
  '#fixtures': '/first-team#fixtures',
  '#table': '/first-team#table',
  '#youth': '/youth',
}

const sponsorLogos: Record<string, string> = {
  'BBS Plumbing & Heating Supplies': bbsPlumbingLogo,
  'The Filton Feast': filtonFeastLogo,
  'First Auto Care Techs': firstAutoCareTechsLogo,
  'DM Flooring': dmFlooringLogo,
  'BS3 Roofing': bs3RoofingLogo,
  'GP Rowe Decorating Services': gpRoweLogo,
  'The Kitchen Den Design Studio': kitchenDenLogo,
  Clarius: clariusLogo,
  'New Happy Palace': newHappyPalaceLogo,
  'Optimum Flooring': optimumFlooringLogo,
}

function Home() {
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll to a named home-page section (e.g. /#club-calendar), including when
  // arriving from another page via the nav.
  useEffect(() => {
    const legacyPath = legacyTeamAnchors[location.hash]
    if (legacyPath) {
      navigate(legacyPath, { replace: true })
      return
    }
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(location.hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash, location.key, navigate])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      {/* Hero */}
      <Hero />

      <MatchdaySection />
      <ClubFixturesCalendar />
      <LatestResultsSection />

      {/* Sponsors */}
      <section id="sponsors" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
        <RosetteMark className="pointer-events-none absolute -right-4 -top-6 h-52 w-44 text-[#0b2d52]/[0.06] sm:h-72 sm:w-60" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="heart" title="Club sponsors" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">Thank you to our sponsors&hellip;</p>

        {(() => {
          const principal = sponsors.filter(s => s.name === 'BBS Plumbing & Heating Supplies' || s.name === 'First Auto Care Techs')
          const supporting = sponsors.filter(s => s.name !== 'BBS Plumbing & Heating Supplies' && s.name !== 'First Auto Care Techs')
          return (
            <>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {principal.map((s) => (
                  <div key={s.name} className="flex flex-col items-center rounded-2xl border-2 border-[#0b2d52]/20 bg-white px-8 py-8 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                    {sponsorLogos[s.name] && (
                      <img src={sponsorLogos[s.name]} alt={`${s.name} logo`} className="mb-4 h-20 w-full object-contain" />
                    )}
                    <p className="text-base font-bold text-[#0b2d52]">
                      {s.website ? <a href={s.website} target="_blank" rel="noreferrer" className="hover:underline">{s.name} &rarr;</a> : s.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {supporting.map((s) => (
                  <div key={s.name} className="rounded-xl border border-slate-200 bg-white p-3 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                    {sponsorLogos[s.name] && (
                      <img src={sponsorLogos[s.name]} alt={`${s.name} logo`} className="mb-2 h-12 w-full object-contain object-left" />
                    )}
                    <p className="text-sm font-semibold text-[#0b2d52]">
                      {s.website ? <a href={s.website} target="_blank" rel="noreferrer" className="hover:underline">{s.name} &rarr;</a> : s.name}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">{s.blurb}</p>
                  </div>
                ))}
              </div>
            </>
          )
        })()}

        <div className="mt-10 border-t border-slate-200 pt-10">
          <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Club Charity</p>
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-start">
            <a href="https://www.bensaundersfoundation.org/" target="_blank" rel="noreferrer" className="shrink-0">
              <img
                src={bsfProgrammePage}
                alt="Ben Saunders Foundation — raising funds to support children and young adults with cancer in the UK"
                className="w-40 rounded-lg shadow-md transition hover:opacity-90 sm:w-48"
              />
            </a>
            <div>
              <p className="text-base font-bold text-[#0b2d52]">
                <a href="https://www.bensaundersfoundation.org/" target="_blank" rel="noreferrer" className="hover:underline">
                  Ben Saunders Foundation &rarr;
                </a>
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Founded by Ben Saunders, who has been fighting a rare heart sarcoma since 2019, the BSF raises funds to support children and young adults with cancer across the UK — offering help with whatever they need through the very difficult times they face.
              </p>
              <a
                href="https://www.bensaundersfoundation.org/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-block text-xs font-semibold text-[#0b2d52] underline hover:text-[#2f6b45]"
              >
                bensaundersfoundation.org
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Interested in advertising with the club? Contact{' '}
          <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
            filtonathleticfc@outlook.com
          </a>
        </p>
        </Reveal>
      </section>

      {/* Join Us */}
      <section id="join" className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <BootMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="text-center lg:flex-1 lg:text-left">
              <SectionHeading icon="join" title="Join us" className="justify-center lg:justify-start" />
              <p className="mx-auto mt-2 max-w-3xl text-slate-600 lg:mx-0">
                Players, coaches and volunteers &mdash; there is a place for everyone at Filton Athletic.
                Have a look at what we are currently looking for.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[300px] rounded-lg border border-slate-200 bg-white p-3 shadow-sm lg:order-first lg:mx-0">
              <img
                src={playersWantedPoster}
                alt="Players wanted — join Filton Athletic FC. First team competing in the County League, Reserves in the Suburban Premier, A's in Suburban Division Four. Training Tuesday and Thursday, 6:15pm at Elm Park. All positions considered, all abilities welcome."
                className="w-full rounded"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/join/${p.slug}`}
                className="group block rounded-lg border border-slate-200 p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#0b2d52] hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-[#e7f0e9] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">
                    {p.category}
                  </span>
                  <span className="text-xs text-slate-500">{formatPostDate(p.date)}</span>
                </div>
                <h4 className="mt-3 font-semibold text-[#0b2d52]">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">
                  Read more{' '}
                  <span className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* News */}
      <section id="news" className="relative overflow-hidden">
        <NewspaperMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Club news" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">The latest from across the club and every team.</p>
        <NewsFeed limit={3} />
        </Reveal>
      </section>

      {/* Club at a glance */}
      <section id="history" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
        <TrophyMark className="pointer-events-none absolute -right-4 -top-6 h-52 w-44 text-[#0b2d52]/[0.06] sm:h-72 sm:w-60" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-12">
          <SectionHeading icon="clock" title="Club at a glance" className="justify-center" as="h2" />
          <p className="mx-auto mt-2 max-w-3xl text-center text-slate-600">
            From our roots in the 1960s to three adult teams and a growing youth section today, Filton Athletic is built by its players, volunteers and supporters.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {historyTimeline.slice(-3).map((item) => (
              <article key={item.year} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#2f6b45]">{item.year}</p>
                <p className="mt-2 font-semibold leading-relaxed text-[#0b2d52]">{item.text}</p>
              </article>
            ))}
          </div>

          <details className="mx-auto mt-6 max-w-4xl rounded-xl border border-slate-200 bg-white p-5">
            <summary className="cursor-pointer font-bold text-[#0b2d52]">Club leadership and committee</summary>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { role: 'Chairman', name: officials.chairman },
                { role: 'Vice-Chairman', name: officials.viceChairman },
                { role: 'Club Secretary', name: officials.secretary },
              ].map((officer) => (
                <div key={officer.role} className="rounded-lg bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">{officer.role}</p>
                  <p className="mt-1 font-semibold text-[#0b2d52]">{officer.name}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-lg bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">General Committee</p>
              <p className="mt-1 text-sm font-semibold text-[#0b2d52]">{officials.committee.join(', ')}</p>
            </div>
          </details>

          <p className="mt-6 text-center text-sm text-slate-600">
            <Link to="/archive" className="font-semibold text-[#0b2d52] underline">
              Explore the season archive &rarr;
            </Link>
            <span className="mx-2 text-slate-300" aria-hidden="true">|</span>
            <Link to="/archive/filton-athletic-evening-post-2009" className="font-semibold text-[#0b2d52] underline">
              Read the 2009 press archive &rarr;
            </Link>
            <span className="mx-2 text-slate-300" aria-hidden="true">|</span>
            <Link to="/archive/team-photographs" className="font-semibold text-[#0b2d52] underline">
              Browse historic team photographs &rarr;
            </Link>
          </p>
        </Reveal>
      </section>

      <SocialSection />

      <SiteFooter />
    </div>
  )
}

export default Home
