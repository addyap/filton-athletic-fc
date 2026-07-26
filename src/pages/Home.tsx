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
import MatchStrip from '../components/MatchStrip'
import SeasonCountdown from '../components/SeasonCountdown'
import NewsFeed from '../components/NewsFeed'
import SectionHeading from '../components/SectionHeading'
import { BootMark, NewspaperMark, TrophyMark, JerseyMark, RosetteMark } from '../components/SectionArt'
import FixturesSection from '../components/sections/FixturesSection'
import TableSection from '../components/sections/TableSection'
import YouthSection from '../components/sections/YouthSection'
import ReservesSection from '../components/sections/ReservesSection'
import AsTeamSection from '../components/sections/AsTeamSection'
import { posts, formatPostDate } from '../data/posts'
import { playerPhotos2025_26 as playerPhotos } from '../data/playerPhotos'
import {
  officials,
  squad,
  sponsors,
  groundInfo,
} from '../data/club'

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
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-[#7f9ad6] via-[#1c3f6e] to-[#0a2340] text-white">
        <PitchBackdrop />
        <img
          src={crestTrimmed}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 h-full w-auto -translate-x-1/2 object-contain opacity-25"
        />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-[40px] text-center sm:px-6 sm:py-[68px] lg:py-[84px]">
          <p className="text-sm uppercase tracking-wide text-white sm:text-base lg:text-lg">Marcliff Gloucestershire County Football League</p>
          <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-6">
            <ConcordeMark className="invisible hidden h-8 w-auto shrink-0 sm:block sm:h-10 lg:h-12" />
            <h1 className="text-3xl font-bold sm:text-5xl lg:text-6xl">Home of Filton Athletic FC</h1>
            <ConcordeMark className="h-8 w-auto shrink-0 text-white sm:h-10 lg:h-12" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-100 sm:text-lg lg:text-xl">
            First team, reserves and youth football in the north of Bristol since the 1960s.
            <br />
            Come down to BBS Park North and back the lads.
          </p>
        </div>
      </section>

      <SeasonCountdown />

      <MatchStrip
        sidebar={
          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <span className="w-fit rounded-full bg-[#e7f0e9] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2f6b45]">
              Live match updates
            </span>
            <p className="mt-3 text-sm text-slate-600">
              Follow along during the match &mdash; goals, cards and full-time scores posted live from the
              touchline.
            </p>
            <a
              href="https://x.com/FiltonAthletic"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-[#0b2d52] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#123a68]"
            >
              Follow @FiltonAthletic on X &rarr;
            </a>
            <a
              href="https://www.facebook.com/FiltonAthleticFC"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block w-fit text-sm font-medium text-[#0b2d52] underline"
            >
              Or follow us on Facebook &rarr;
            </a>
          </div>
        }
      />

      {/* Join Us */}
      <section id="join" className="relative overflow-hidden border-b border-slate-200 bg-white">
        <BootMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
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
                alt="Players wanted — join Filton Athletic FC. First team competing in the County League, Reserves in the Suburban Premier, A's in Suburban Division Three. Training Tuesday and Thursday, 6:15pm at Elm Park. All positions considered, all abilities welcome."
                className="w-full rounded"
              />
            </div>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to={`/join/${p.slug}`}
                className="block rounded-lg border border-slate-200 p-5 transition hover:border-[#0b2d52] hover:shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="rounded bg-[#e7f0e9] px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-[#2f6b45]">
                    {p.category}
                  </span>
                  <span className="text-xs text-slate-500">{formatPostDate(p.date)}</span>
                </div>
                <h4 className="mt-3 font-semibold text-[#0b2d52]">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <span className="mt-3 inline-block text-sm font-medium text-[#0b2d52]">Read more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section id="news" className="relative overflow-hidden">
        <NewspaperMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Club news" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">The latest from across the club and every team.</p>
        <NewsFeed limit={4} />
        </div>
      </section>

      {/* History */}
      <section id="history" className="relative overflow-hidden border-t border-slate-200 bg-slate-50">
        <TrophyMark className="pointer-events-none absolute -right-4 -top-6 h-52 w-44 text-[#0b2d52]/[0.06] sm:h-72 sm:w-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="clock" title="Our history" className="justify-center" />
          <p className="mt-4 max-w-3xl text-slate-700">
            Filton Athletic FC are a long-standing amateur football club based in the north of Bristol. We
            started out as St. Andrews Meth back in the 1960s, then changed to Filton Athletic FC in 1986.
          </p>
          <p className="mt-3 max-w-3xl text-slate-700">
            We are currently made up of two adult football teams who both play regularly on a Saturday
            afternoon. Our first team compete in the Marcliff Gloucestershire County Football League,
            having been promoted as Champions from the Bristol &amp; Suburban Premier Division in 2023-24.
            Our Reserve team compete in the Bristol &amp; Suburban Premier Division. {groundInfo.note}
          </p>
          <p className="mt-3 max-w-3xl text-slate-700">
            In 2023 we established the Filton Athletic FC Youth Team, consisting of U7, U8, U9, U10, U11,
            U12 and YDS age groups. The club is run by an enthusiastic and committed committee, and is
            fortunate to be supported by some of the best fans in the world &mdash; the self-proclaimed
            Filton Ultras!
          </p>

          <h4 className="mt-10 text-lg font-semibold text-[#0b2d52]">Club officials</h4>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold">Chairman</p>
              <p className="text-slate-700">{officials.chairman}</p>
            </div>
            <div>
              <p className="font-semibold">Vice-Chairman</p>
              <p className="text-slate-700">{officials.viceChairman}</p>
            </div>
            <div>
              <p className="font-semibold">Club Secretary</p>
              <p className="text-slate-700">{officials.secretary}</p>
            </div>
            <div>
              <p className="font-semibold">First Team Manager</p>
              <p className="text-slate-700">{officials.firstTeamManager}</p>
            </div>
            <div>
              <p className="font-semibold">First Team Coaches</p>
              <p className="text-slate-700">{officials.firstTeamCoaches.join(', ')}</p>
            </div>
            <div>
              <p className="font-semibold">Reserve Team Manager</p>
              <p className="text-slate-700">{officials.reserveTeamManager}</p>
            </div>
            <div>
              <p className="font-semibold">Reserve Team Coaches</p>
              <p className="text-slate-700">{officials.reserveTeamCoaches.join(', ')}</p>
            </div>
            <div className="sm:col-span-2 lg:col-span-3">
              <p className="font-semibold">General Committee</p>
              <p className="text-slate-700">{officials.committee.join(', ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Squad */}
      <section id="squad" className="relative overflow-hidden">
        <JerseyMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
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
              <div key={p.name} className="overflow-hidden rounded-lg border border-slate-200">
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
        </div>
      </section>

      <FixturesSection />
      <TableSection />
      <ReservesSection />
      <AsTeamSection />
      <YouthSection />

      {/* Sponsors */}
      <section id="sponsors" className="relative overflow-hidden">
        <RosetteMark className="pointer-events-none absolute -right-4 -top-6 h-52 w-44 text-[#0b2d52]/[0.06] sm:h-72 sm:w-60" />
        <div className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="heart" title="Club sponsors" className="justify-center" />
        <p className="mt-1 text-center text-sm text-slate-500">Thank you to our sponsors&hellip;</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors.map((s) => (
            <div key={s.name} className="rounded-lg border border-slate-200 p-4">
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
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}

export default Home
