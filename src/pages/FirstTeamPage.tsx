import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import NewsFeed from '../components/NewsFeed'
import { JerseyMark } from '../components/SectionArt'
import PreSeasonSection from '../components/sections/PreSeasonSection'
import FixturesSection from '../components/sections/FixturesSection'
import TableSection from '../components/sections/TableSection'
import LeagueResultsSection from '../components/sections/LeagueResultsSection'
import { officials, squad } from '../data/club'
import { playerPhotos2025_26 as playerPhotos } from '../data/playerPhotos'

function FirstTeamPage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0)
      return
    }
    document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
  }, [location.hash, location.key])

  useEffect(() => {
    document.title = 'First Team — Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        <JerseyMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="shirt" title="First Team" as="h1" className="justify-center" />
          <p className="mt-2 text-center text-slate-600">
            Marcliff Gloucestershire County Football League &mdash; 2026/27 season.
          </p>
          <div className="mx-auto mt-7 grid max-w-2xl gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">Manager</p>
              <p className="mt-1 text-lg font-bold text-[#0b2d52]">{officials.firstTeamManager}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-[#2f6b45]">Coaches</p>
              <p className="mt-1 text-lg font-bold text-[#0b2d52]">{officials.firstTeamCoaches.join(', ')}</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="squad" className="relative overflow-hidden">
        <JerseyMark className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 text-[#0b2d52]/[0.06] sm:h-64 sm:w-64" />
        <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
          <SectionHeading icon="shirt" title="First Team squad" className="justify-center" as="h2" />
          {squad.length === 0 ? (
            <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <p className="font-semibold text-[#0b2d52]">2026/27 squad announcement coming soon</p>
              <p className="mt-1 text-sm text-slate-500">
                We&rsquo;re confirming registrations for the new season &mdash; the squad list will be updated here shortly.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {squad.map((player) => (
                <article key={player.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
                  {playerPhotos[player.name] && (
                    <img
                      src={playerPhotos[player.name]}
                      alt={`${player.name} — Filton Athletic FC`}
                      className="aspect-square w-full object-cover object-top"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="font-semibold text-[#0b2d52]">{player.name}</h3>
                    <p className="text-xs font-medium uppercase tracking-wide text-[#3f8a5b]">{player.position}</p>
                    <p className="mt-2 text-sm text-slate-600">{player.blurb}</p>
                  </div>
                </article>
              ))}
            </div>
          )}
          <p className="mt-4 text-center text-sm text-slate-500">
            Looking for last season&rsquo;s squad?{' '}
            <Link to="/archive/first-team" className="font-medium text-[#0b2d52] underline">
              View the First Team archive &rarr;
            </Link>
          </p>
        </Reveal>
      </section>

      <PreSeasonSection headingLevel="h2" />
      <FixturesSection headingLevel="h2" />
      <TableSection headingLevel="h2" />
      <LeagueResultsSection headingLevel="h2" />

      <section className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="chat" title="Latest First Team news" className="justify-center" as="h2" />
        <NewsFeed team="first-team" emptyMessage="No First Team news yet — check back soon." />
      </section>

      <SiteFooter />
    </div>
  )
}

export default FirstTeamPage
