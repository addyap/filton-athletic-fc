import {
  youthU9Fixtures,
  youthU10Fixtures,
  youthU11Fixtures,
  youthU12Fixtures,
  youthU13Fixtures,
  youthFixtureId,
  type YouthFixture,
} from '../data/club'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

function resultBadge(result?: string) {
  if (!result) return 'bg-slate-100 text-slate-500'
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  if (result.startsWith('D')) return 'bg-amber-100 text-amber-800'
  return 'bg-slate-100 text-slate-600'
}

function compLabel(c: YouthFixture['competition']) {
  if (c === 'L') return 'League'
  if (c === 'Cup') return 'Cup'
  return c
}

type FixtureTable = {
  key: string
  team: string
  league: string
  badgeClass: string
  fixtures: YouthFixture[]
}

const fixtureTables: FixtureTable[] = [
  { key: 'u9', team: 'U9s', league: 'Hanham Minor League — Group 7', badgeClass: 'bg-sky-600 text-white', fixtures: youthU9Fixtures },
  { key: 'u10', team: 'U10s', league: 'Hanham Minor League — Group 3', badgeClass: 'bg-violet-600 text-white', fixtures: youthU10Fixtures },
  { key: 'u11', team: 'U11s', league: 'Hanham Minor League — Group 4', badgeClass: 'bg-[#0b2d52] text-white', fixtures: youthU11Fixtures },
  { key: 'u12', team: 'U12s', league: 'Avon Youth League — Division 7', badgeClass: 'bg-emerald-700 text-white', fixtures: youthU12Fixtures },
  { key: 'u13', team: 'U13s', league: 'Avon Youth League — Division 6', badgeClass: 'bg-amber-500 text-slate-950', fixtures: youthU13Fixtures },
]

function YouthFixtureTables() {
  return (
    <section id="youth-fixture-lists" className="border-t border-slate-200 bg-slate-50">
      <Reveal className="mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="calendar" title="Full fixture lists" className="justify-center" as="h2" />
        <p className="mt-1 text-center text-sm text-slate-500">
          The complete 2026/27 season for every youth team &mdash; home games at Elm Park, BS34 7PS.
        </p>

        <div className="mt-8 space-y-10">
          {fixtureTables.map((table) => (
            <div key={table.team}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className={`rounded-full px-3 py-1 text-sm font-extrabold tracking-wide ${table.badgeClass}`}>
                  {table.team}
                </span>
                <span className="text-sm font-semibold text-slate-600">{table.league}</span>
              </div>
              <div className="mt-3 overflow-x-auto rounded-lg border border-slate-200 bg-white">
                <table className="min-w-full text-sm">
                  <thead className="bg-[#0b2d52] text-white">
                    <tr>
                      <th className="px-3 py-2 text-left font-semibold">Date</th>
                      <th className="hidden px-3 py-2 text-left font-semibold sm:table-cell">Comp</th>
                      <th className="px-3 py-2 text-left font-semibold">Opponent</th>
                      <th className="px-3 py-2 text-left font-semibold">H/A</th>
                      <th className="hidden px-3 py-2 text-left font-semibold md:table-cell">Ground</th>
                      <th className="px-3 py-2 text-left font-semibold">Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.fixtures.map((f) => (
                      <tr key={`${f.date}-${f.time}-${f.opponent}`} id={youthFixtureId(table.key, f)} className="scroll-mt-28 border-t border-slate-200 odd:bg-white even:bg-slate-50 target:bg-amber-100 target:[animation:fixture-flash_1.6s_ease-out]">
                        <td className="whitespace-nowrap px-3 py-1.5">
                          {f.date} <span className="text-slate-500">{f.time}</span>
                        </td>
                        <td className="hidden px-3 py-1.5 sm:table-cell">{compLabel(f.competition)}</td>
                        <td className="px-3 py-1.5">{f.opponent}</td>
                        <td className="px-3 py-1.5">{f.venue}</td>
                        <td className="hidden px-3 py-1.5 text-slate-600 md:table-cell">
                          {f.venue === 'H' ? 'Elm Park, BS34 7PS' : (f.ground ?? '—')}
                        </td>
                        <td className="px-3 py-1.5">
                          <span className={`rounded px-2 py-0.5 text-xs font-semibold ${resultBadge(f.result)}`}>
                            {f.result ?? 'Upcoming'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Fixtures sourced from{' '}
          <a
            href="https://fulltime.thefa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[#0b2d52] underline"
          >
            FA Full-Time
          </a>
        </p>
      </Reveal>
    </section>
  )
}

export default YouthFixtureTables
