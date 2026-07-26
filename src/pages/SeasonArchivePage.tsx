import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SectionHeading from '../components/SectionHeading'
import LeagueTableWidget from '../components/LeagueTableWidget'
import { findSeason } from '../data/seasons'

function resultBadge(result?: string) {
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-500'
}

function SeasonArchivePage() {
  const { season } = useParams()
  const data = findSeason(season)

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = data ? `${data.label} season archive — Filton Athletic FC` : 'Filton Athletic FC'
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [data])

  if (!data) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-6 py-14 text-center">
          <p className="font-semibold text-[#0b2d52]">Season not found</p>
          <p className="mt-2 text-sm text-slate-500">
            <Link to="/archive" className="underline">
              Back to the season archive &rarr;
            </Link>
          </p>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <section className="border-b border-slate-200 bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] text-white">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">
            <Link to="/archive" className="hover:text-white hover:underline">
              Season archive
            </Link>
          </p>
          <h2 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">{data.label} season</h2>
          <p className="mt-3 max-w-2xl text-sm text-slate-100 sm:text-base">
            {data.standing} Full fixtures, results and final table below
            {data.squad ? ' — plus the squad.' : '.'}
            {data.slug === '2025-26' && (
              <>
                {' '}
                Or{' '}
                <Link to="/programmes" className="underline hover:text-white">
                  read the matchday programmes &rarr;
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <SectionHeading icon="standings" title="Final league table" className="justify-center" />
        <div className="mt-6">
          <LeagueTableWidget rows={data.table} highlight="Filton Athletic" />
        </div>

        <div className="mt-14">
          <SectionHeading icon="calendar" title="Fixtures & results" className="justify-center" />
          <p className="mt-1 text-center text-sm text-slate-500">First team &mdash; {data.label} season</p>
          <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0b2d52] text-white">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold">Date</th>
                  <th className="hidden px-3 py-2 text-left font-semibold sm:table-cell">Comp</th>
                  <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                  <th className="px-3 py-2 text-left font-semibold">Venue</th>
                  <th className="px-3 py-2 text-left font-semibold">Result</th>
                  <th className="hidden px-3 py-2 text-left font-semibold md:table-cell">Scorers</th>
                  <th className="hidden px-3 py-2 text-left font-semibold lg:table-cell">Cards</th>
                </tr>
              </thead>
              <tbody>
                {data.fixtures.map((f) => (
                  <tr key={`${f.date}-${f.opponent}`} className="border-t border-slate-200 odd:bg-white even:bg-slate-50">
                    <td className="whitespace-nowrap px-3 py-1.5">
                      {f.date} <span className="text-slate-500">{f.time}</span>
                    </td>
                    <td className="hidden px-3 py-1.5 sm:table-cell">{f.competition}</td>
                    <td className="px-3 py-1.5">{f.opponent}</td>
                    <td className="px-3 py-1.5">{f.venue}</td>
                    <td className="px-3 py-1.5">
                      <span className={`rounded px-2 py-0.5 text-xs font-semibold ${resultBadge(f.result)}`}>
                        {f.result ?? 'Upcoming'}
                      </span>
                    </td>
                    <td className="hidden px-3 py-1.5 text-slate-600 md:table-cell">{f.scorers ?? '-'}</td>
                    <td className="hidden px-3 py-1.5 text-slate-600 lg:table-cell">{f.cards ?? '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {data.squad && data.squad.length > 0 && (
          <div className="mt-14">
            <SectionHeading icon="shirt" title={`${data.label} squad`} className="justify-center" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {data.squad.map((p) => (
                <div key={p.name} className="overflow-hidden rounded-lg border border-slate-200">
                  {data.playerPhotos?.[p.name] && (
                    <img
                      src={data.playerPhotos[p.name]}
                      alt={`${p.name} — Filton Athletic FC, ${data.label} season`}
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
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  )
}

export default SeasonArchivePage
