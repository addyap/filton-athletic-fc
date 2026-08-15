import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import crestTrimmed from '../assets/img/filton-athletic-crest-trimmed.webp'
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
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import PitchBackdrop from '../components/PitchBackdrop'
import ConcordeMark from '../components/ConcordeMark'
import MatchdaySection from '../components/MatchdaySection'
import SocialSection from '../components/SocialSection'
import NewsFeed from '../components/NewsFeed'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { BootMark, NewspaperMark, TrophyMark, JerseyMark, RosetteMark } from '../components/SectionArt'
import LatestNewsBanner from '../components/LatestNewsBanner'
import PreSeasonSection from '../components/sections/PreSeasonSection'
import FixturesSection from '../components/sections/FixturesSection'
import TableSection from '../components/sections/TableSection'
import LeagueResultsSection from '../components/sections/LeagueResultsSection'
import YouthSection from '../components/sections/YouthSection'
import ReservesSection from '../components/sections/ReservesSection'
import AsTeamSection from '../components/sections/AsTeamSection'
import ClubFixturesCalendar from '../components/ClubFixturesCalendar'
import { posts, formatPostDate } from '../data/posts'
import { playerPhotos2025_26 as playerPhotos } from '../data/playerPhotos'
import {
  officials,
  squad,
  sponsors,
} from '../data/club'

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
]

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
}

function Home() {
  const location = useLocation()

  // Scroll to the section named in the URL hash (e.g. /#squad), including when
  // arriving from another page via the nav.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    const el = document.getElementById(location.hash.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash, location.key])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#7f9ad6] via-[#1c3f6e] to-[#0a2340] text-white">
        <PitchBackdrop />
        <img
          src={crestTrimmed}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain opacity-25"
        />
        <LatestNewsBanner />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-[40px] text-center sm:px-6 sm:py-[68px] lg:py-[84px]">
          <p className="text-sm uppercase tracking-wide text-white sm:text-base lg:text-lg">Marcliff Gloucestershire County Football League</p>
          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <ConcordeMark className="invisible hidden h-8 w-auto shrink-0 sm:block sm:h-10 lg:h-12" />
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl">Home of Filton Athletic FC</h1>
            <ConcordeMark className="h-8 w-auto shrink-0 text-white sm:h-10 lg:h-12" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-100 sm:text-lg lg:text-xl">
            First team, reserves, A&rsquo;s and youth football in the north of Bristol since the 1960s.
            <br />
            Come down to BBS Park North and back the lads.
          </p>
        </div>
        <svg
          className="pointer-events-none absolute -bottom-px left-0 w-full text-slate-50"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path fill="currentColor" d="M0,32 C240,64 480,0 720,16 C960,32 1200,64 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </section>

      <MatchdaySection />

      <SocialSection />

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
        <NewsFeed limit={4} />
        </Reveal>
      </section>

      {/* History */}
      <section id="history" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
        <TrophyMark className="pointer-events-none absolute -right-4 -top-6 h-52 w-44 text-[#0b2d52]/[0.06] sm:h-72 sm:w-60" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="clock" title="Our history" className="justify-center" />
          <p className="mt-4 max-w-3xl text-slate-700">
            Filton Athletic FC are a long-standing amateur football club based in the north of Bristol.
          </p>

          <div className="relative mt-8 max-w-2xl">
            <div className="absolute bottom-1 left-[7px] top-1 w-0.5 bg-slate-200" aria-hidden="true" />
            <div className="space-y-7">
              {historyTimeline.map((item) => (
                <div key={item.year} className="relative flex gap-4 pl-7">
                  <span className="absolute left-0 top-1.5 h-3.5 w-3.5 shrink-0 rounded-full border-2 border-slate-50 bg-[#0b2d52] ring-2 ring-[#0b2d52]/20" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">{item.year}</p>
                    <p className="mt-0.5 text-slate-700">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-3xl text-slate-700">
            Today we&rsquo;re made up of three adult teams playing every Saturday &mdash; the first team in the
            Marcliff Gloucestershire County Football League, the Reserves in the Bristol &amp; Suburban
            Premier Division, and the A&rsquo;s in Division Four &mdash; run by an enthusiastic and committed
            committee, and fortunate to be supported by some of the best fans in the world: the self-proclaimed
            Filton Ultras!
          </p>

          <h4 className="mt-10 text-lg font-semibold text-[#0b2d52]">Club officials</h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { role: 'Chairman', name: officials.chairman },
              { role: 'Vice-Chairman', name: officials.viceChairman },
              { role: 'Club Secretary', name: officials.secretary },
              { role: 'First Team Manager', name: officials.firstTeamManager },
              { role: 'First Team Coaches', name: officials.firstTeamCoaches.join(', ') },
              { role: 'Reserve Team Manager', name: officials.reserveTeamManager },
              { role: 'Reserve Team Coaches', name: officials.reserveTeamCoaches.join(', ') },
              { role: "A's Team Manager", name: officials.aTeamManager },
              { role: "A's Team Coaches", name: officials.aTeamCoaches.join(', ') },
            ].map((o) => (
              <div
                key={o.role}
                className="rounded-lg border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">{o.role}</p>
                <p className="mt-1 font-semibold text-[#0b2d52]">{o.name}</p>
              </div>
            ))}
            <div className="rounded-lg border border-slate-200 bg-white p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">General Committee</p>
              <p className="mt-1 font-semibold text-[#0b2d52]">{officials.committee.join(', ')}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Squad */}
      <section id="squad" className="relative overflow-hidden">
        <JerseyMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="shirt" title="First team squad" className="justify-center" />
        {squad.length === 0 ? (
          <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
            <p className="font-semibold text-[#0b2d52]">2026/27 squad announcement coming soon</p>
            <p className="mt-1 text-sm text-slate-500">
              We&rsquo;re confirming registrations for the new season &mdash; the squad list will be
              updated here shortly.
            </p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {squad.map((p) => (
              <div key={p.name} className="overflow-hidden rounded-lg border border-slate-200 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                {playerPhotos[p.name] && (
                  <img
                    src={playerPhotos[p.name]}
                    alt={`${p.name} — Filton Athletic FC`}
                    className="aspect-square w-full object-cover object-top"
                  />
                )}
                <div className="p-4">
                  <p className="font-semibold text-[#0b2d52]">{p.name}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#3f8a5b]">{p.position}</p>
                  <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        <p className="mt-4 text-center text-sm text-slate-500">
          Looking for last season&rsquo;s squad?{' '}
          <Link to="/archive/first-team" className="font-medium text-[#0b2d52] underline">
            View the first team archive &rarr;
          </Link>
        </p>
        </Reveal>
      </section>

      <PreSeasonSection />
      <ClubFixturesCalendar />
      <FixturesSection />
      <TableSection />
      <LeagueResultsSection />
      <ReservesSection />
      <AsTeamSection />
      <YouthSection />

      {/* Sponsors */}
      <section id="sponsors" className="relative overflow-hidden">
        <RosetteMark className="pointer-events-none absolute -right-4 -top-6 h-52 w-44 text-[#0b2d52]/[0.06] sm:h-72 sm:w-60" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="heart" title="Club sponsors" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">Thank you to our sponsors&hellip;</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <div key={s.name} className="rounded-lg border border-slate-200 p-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
              {sponsorLogos[s.name] && (
                <img
                  src={sponsorLogos[s.name]}
                  alt={`${s.name} logo`}
                  className="mb-3 h-16 w-full object-contain object-left"
                />
              )}
              <p className="font-semibold text-[#0b2d52]">
                {s.website ? (
                  <a href={s.website} target="_blank" rel="noreferrer" className="hover:underline">
                    {s.name} &rarr;
                  </a>
                ) : (
                  s.name
                )}
              </p>
              <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          Interested in advertising with the club? Contact{' '}
          <a className="text-[#0b2d52] underline" href="mailto:filtonathleticfc@outlook.com">
            filtonathleticfc@outlook.com
          </a>
        </p>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  )
}

export default Home
