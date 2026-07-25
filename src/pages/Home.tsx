import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import crestTrimmed from '../assets/img/filton-athletic-crest-trimmed.webp'
import playersWantedPoster from '../assets/img/players-wanted.jpg'
import councilMeetingPhoto from '../assets/img/council-meeting-ground-improvements.jpg'
import macmillanGolfPhoto from '../assets/img/macmillan-golf-challenge.jpg'
import chrisHillyerPhoto from '../assets/img/players/chris-hillyer.webp'
import jackColePhoto from '../assets/img/players/jack-cole.webp'
import jackWillmorPhoto from '../assets/img/players/jack-willmor.webp'
import tomFryPhoto from '../assets/img/players/tom-fry.webp'
import joeMitchellPhoto from '../assets/img/players/joe-mitchell.webp'
import kieranDanielsPhoto from '../assets/img/players/kieran-daniels.webp'
import danMatthewsPhoto from '../assets/img/players/dan-matthews.webp'
import callumMitchellPhoto from '../assets/img/players/callum-mitchell.webp'
import liamDormanPhoto from '../assets/img/players/liam-dorman.webp'
import charliePeacockPhoto from '../assets/img/players/charlie-peacock.webp'
import dylanQuickPhoto from '../assets/img/players/dylan-quick.webp'
import fraserVenablesPhoto from '../assets/img/players/fraser-venables.webp'
import yusufAbdulrahmanPhoto from '../assets/img/players/yusuf-abdulrahman.webp'
import kyleThomasPhoto from '../assets/img/players/kyle-thomas.webp'
import danPaynePhoto from '../assets/img/players/dan-payne.webp'
import treyMerrettPhoto from '../assets/img/players/trey-merrett.webp'
import saidHassanPhoto from '../assets/img/players/said-hassan.webp'
import kieranCooperPhoto from '../assets/img/players/kieran-cooper.webp'
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
import SectionHeading from '../components/SectionHeading'
import FixturesSection from '../components/sections/FixturesSection'
import TableSection from '../components/sections/TableSection'
import YouthSection from '../components/sections/YouthSection'
import { posts, formatPostDate } from '../data/posts'
import {
  officials,
  squad,
  sponsors,
  groundInfo,
} from '../data/club'


const playerPhotos: Record<string, string> = {
  'Chris Hillyer': chrisHillyerPhoto,
  'Jack Cole': jackColePhoto,
  'Jack Willmor': jackWillmorPhoto,
  'Tom Fry': tomFryPhoto,
  'Joe Mitchell': joeMitchellPhoto,
  'Kieran Daniels': kieranDanielsPhoto,
  'Dan Matthews': danMatthewsPhoto,
  'Callum Mitchell': callumMitchellPhoto,
  'Liam Dorman': liamDormanPhoto,
  'Charlie Peacock': charliePeacockPhoto,
  'Dylan Quick': dylanQuickPhoto,
  'Fraser Venables': fraserVenablesPhoto,
  'Yusuf Abdulrahman': yusufAbdulrahmanPhoto,
  'Kyle Thomas': kyleThomasPhoto,
  'Dan Payne': danPaynePhoto,
  'Trey Merrett': treyMerrettPhoto,
  'Said Hassan': saidHassanPhoto,
  'Kieran Cooper': kieranCooperPhoto,
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
            <h2 className="text-3xl font-bold sm:text-5xl lg:text-6xl">Home of Filton Athletic FC</h2>
            <ConcordeMark className="h-8 w-auto shrink-0 text-white sm:h-10 lg:h-12" />
          </div>
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-100 sm:text-lg lg:text-xl">
            First team, reserves and youth football in the north of Bristol since the 1960s.
            <br />
            Come down to BBS Park North and back the lads.
          </p>
        </div>
      </section>

      <MatchStrip />

      {/* Join Us */}
      <section id="join" className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
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
                alt="Players wanted — join Filton Athletic FC. First team competing in the County League, Reserves in the Suburban Premier, A's in Suburban Division 4. Training Tuesday and Thursday, 6:15pm at Elm Park. All positions considered, all abilities welcome."
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

      <YouthSection />

      {/* News */}
      <section id="news" className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Club news" className="justify-center" />
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <img
              src={councilMeetingPhoto}
              alt="Filton Athletic FC and Filton Town Council — thank you to local residents for coming along to the meeting about ground improvements."
              className="w-full object-cover"
            />
            <div className="p-5">
              <p className="font-semibold text-[#0b2d52]">Thank you to local residents — ground improvements meeting</p>
              <p className="mt-2 text-sm text-slate-600">
                Thank you to everyone who came along to this week&rsquo;s meeting with Filton Town Council
                about improving our ground. Your feedback and ideas were greatly appreciated, and we&rsquo;re
                proud to be working in partnership with the Council to support our club, our ground and our
                community.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-slate-200">
            <img
              src={macmillanGolfPhoto}
              alt="Filton's Finest completed the Macmillan Longest Day Golf Challenge on 3rd June 2026, raising £1,750 so far for Macmillan Cancer Support."
              className="w-full object-cover"
            />
            <div className="p-5">
              <p className="font-semibold text-[#0b2d52]">Macmillan Longest Day Golf Challenge — £1,750 raised</p>
              <p className="mt-2 text-sm text-slate-600">
                Congratulations to Oliver Keeble, Mark Woodrow and Matthew Price for completing the Macmillan
                Longest Day Golf Challenge, raising an amazing &pound;1,750 so far for Macmillan Cancer
                Support.
              </p>
              <a
                className="mt-3 inline-block text-sm font-semibold text-[#0b2d52] underline"
                href="https://longestdaygolf.macmillan.org.uk/Team/filtonsfinest"
                target="_blank"
                rel="noreferrer"
              >
                Donate to Filton&rsquo;s Finest &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section id="history" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="clock" title="Our history" className="justify-center" />
          <p className="mt-4 max-w-3xl text-slate-700">
            Filton Athletic FC are a long-standing amateur football club based in the north of Bristol. We
            started out as St. Andrews Meth back in the 1960s, then changed to Filton Athletic FC in 1986.
          </p>
          <p className="mt-3 max-w-3xl text-slate-700">
            We are currently made up of two adult football teams who both play regularly on a Saturday
            afternoon. Our first team compete in the Marcliff Gloucestershire County Football League,
            having been promoted as Champions from the Bristol &amp; Suburban Premier Division in 2023-24.
            Our Reserve team compete in the Bristol &amp; Suburban Senior Division. {groundInfo.note}
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
      <section id="squad" className="mx-auto max-w-6xl px-6 py-14">
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
      </section>

      <FixturesSection />
      <TableSection />

      {/* Sponsors */}
      <section id="sponsors" className="mx-auto max-w-6xl px-6 py-14">
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
      </section>

      <SiteFooter />
    </div>
  )
}

export default Home
