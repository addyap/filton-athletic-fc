import { useMemo, useState } from 'react'
import { aTeamFixtures, firstTeamFixtures, reserveFixtures } from '../data/club'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

type CalendarTeam = 'first-team' | 'reserves' | 'as'
type TeamFilter = 'all' | CalendarTeam

type CalendarFixture = {
  date: string
  time: string
  competition: string
  opponent: string
  venue: 'H' | 'A' | 'N'
  ground?: string
  result?: string
  team: CalendarTeam
  startsAt: Date
}

type CalendarMonth = {
  key: string
  date: Date
}

const teamDetails: Record<CalendarTeam, { label: string; shortLabel: string; chipClass: string; blockClass: string }> = {
  'first-team': {
    label: 'First Team',
    shortLabel: '1ST',
    chipClass: 'bg-[#0b2d52] text-white',
    blockClass: 'border-l-[#0b2d52] bg-blue-50 text-[#0b2d52]',
  },
  reserves: {
    label: 'Reserves',
    shortLabel: 'RES',
    chipClass: 'bg-emerald-700 text-white',
    blockClass: 'border-l-emerald-600 bg-emerald-50 text-emerald-950',
  },
  as: {
    label: "A's",
    shortLabel: "A'S",
    chipClass: 'bg-amber-500 text-slate-950',
    blockClass: 'border-l-amber-500 bg-amber-50 text-amber-950',
  },
}

const filters: { id: TeamFilter; label: string }[] = [
  { id: 'all', label: 'All teams' },
  { id: 'first-team', label: 'First Team' },
  { id: 'reserves', label: 'Reserves' },
  { id: 'as', label: "A's" },
]

const weekdayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function dateFromFixture(date: string): Date {
  const [day, month, shortYear] = date.split('/').map(Number)
  return new Date(2000 + shortYear, month - 1, day)
}

function dateKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}

function monthKey(date: Date): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`
}

function toCalendarFixture(
  fixture: Omit<CalendarFixture, 'team' | 'startsAt'>,
  team: CalendarTeam,
): CalendarFixture {
  return { ...fixture, team, startsAt: dateFromFixture(fixture.date) }
}

const allFixtures: CalendarFixture[] = [
  ...firstTeamFixtures.map((fixture) => toCalendarFixture(fixture, 'first-team')),
  ...reserveFixtures.map((fixture) => toCalendarFixture(fixture, 'reserves')),
  ...aTeamFixtures.map((fixture) => toCalendarFixture(fixture, 'as')),
].sort((a, b) => a.startsAt.getTime() - b.startsAt.getTime())

const calendarMonths: CalendarMonth[] = Array.from(
  new Map(
    allFixtures.map((fixture) => {
      const date = new Date(fixture.startsAt.getFullYear(), fixture.startsAt.getMonth(), 1)
      return [monthKey(date), { key: monthKey(date), date }]
    }),
  ).values(),
)

function ClubFixturesCalendar() {
  const [selectedMonthKey, setSelectedMonthKey] = useState(calendarMonths[0]?.key ?? '')
  const [teamFilter, setTeamFilter] = useState<TeamFilter>('all')

  const selectedMonthIndex = calendarMonths.findIndex((month) => month.key === selectedMonthKey)
  const selectedMonth = calendarMonths[selectedMonthIndex] ?? calendarMonths[0]

  const fixturesForMonth = useMemo(
    () => allFixtures.filter((fixture) => monthKey(fixture.startsAt) === selectedMonth?.key),
    [selectedMonth],
  )

  const filteredFixtures = useMemo(
    () => fixturesForMonth.filter((fixture) => teamFilter === 'all' || fixture.team === teamFilter),
    [fixturesForMonth, teamFilter],
  )

  const fixturesByDate = useMemo(() => {
    return filteredFixtures.reduce<Record<string, CalendarFixture[]>>((groups, fixture) => {
      const key = dateKey(fixture.startsAt)
      groups[key] = [...(groups[key] ?? []), fixture]
      return groups
    }, {})
  }, [filteredFixtures])

  if (!selectedMonth) return null

  const firstWeekday = (selectedMonth.date.getDay() + 6) % 7
  const daysInMonth = new Date(selectedMonth.date.getFullYear(), selectedMonth.date.getMonth() + 1, 0).getDate()
  const calendarCellCount = Math.ceil((firstWeekday + daysInMonth) / 7) * 7
  const monthLabel = new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(selectedMonth.date)

  function changeMonth(direction: -1 | 1) {
    const nextIndex = selectedMonthIndex + direction
    if (nextIndex >= 0 && nextIndex < calendarMonths.length) {
      setSelectedMonthKey(calendarMonths[nextIndex].key)
    }
  }

  return (
    <section id="club-calendar" className="relative overflow-hidden border-t border-slate-200 bg-[#edf4f5]" aria-labelledby="club-calendar-heading">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_12%_-20%,rgba(63,138,91,0.24),transparent_40%),radial-gradient(circle_at_88%_0%,rgba(11,45,82,0.18),transparent_36%)]" />
      <Reveal className="relative mx-auto max-w-6xl px-6 py-14">
        <SectionHeading icon="calendar" title="Club fixtures calendar" className="justify-center" as="h2" />
        <p id="club-calendar-heading" className="mt-1 text-center text-sm text-slate-600">
          One view of every First Team, Reserves and A&rsquo;s fixture. Your usual team lists remain available below.
        </p>

        <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_18px_45px_-32px_rgba(11,45,82,0.55)] sm:p-5">
          <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3f8a5b]">2026/27 season</p>
              <div className="mt-1 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => changeMonth(-1)}
                  disabled={selectedMonthIndex <= 0}
                  aria-label="Show previous fixture month"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-[#0b2d52] transition hover:border-[#0b2d52] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  &larr;
                </button>
                <h3 className="min-w-44 text-center text-xl font-bold text-[#0b2d52] sm:text-2xl">{monthLabel}</h3>
                <button
                  type="button"
                  onClick={() => changeMonth(1)}
                  disabled={selectedMonthIndex >= calendarMonths.length - 1}
                  aria-label="Show next fixture month"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-lg text-[#0b2d52] transition hover:border-[#0b2d52] hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  &rarr;
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Filter fixtures by team">
              {filters.map((filter) => {
                const isActive = teamFilter === filter.id
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setTeamFilter(filter.id)}
                    aria-pressed={isActive}
                    className={`rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-[#0b2d52] text-white shadow-sm'
                        : 'border border-slate-200 bg-white text-slate-600 hover:border-[#0b2d52] hover:text-[#0b2d52]'
                    }`}
                  >
                    {filter.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <p aria-live="polite">
              <span className="font-semibold text-[#0b2d52]">{filteredFixtures.length}</span>{' '}
              {filteredFixtures.length === 1 ? 'fixture' : 'fixtures'} shown for {monthLabel}.
            </p>
            <div className="flex flex-wrap gap-x-3 gap-y-1" aria-label="Team colours">
              {(Object.keys(teamDetails) as CalendarTeam[]).map((team) => (
                <span key={team} className="inline-flex items-center gap-1.5">
                  <span aria-hidden="true" className={`h-2.5 w-2.5 rounded-full ${teamDetails[team].chipClass.split(' ')[0]}`} />
                  {teamDetails[team].label}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-100/70">
            <div className="min-w-[760px]">
              <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
                {weekdayLabels.map((weekday) => (
                  <div key={weekday} className="px-2 py-2 text-center text-xs font-bold uppercase tracking-wide text-slate-500">
                    {weekday}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {Array.from({ length: calendarCellCount }, (_, index) => {
                  const dayNumber = index - firstWeekday + 1
                  const isCurrentMonthDay = dayNumber >= 1 && dayNumber <= daysInMonth
                  const date = isCurrentMonthDay
                    ? new Date(selectedMonth.date.getFullYear(), selectedMonth.date.getMonth(), dayNumber)
                    : null
                  const dayFixtures = date ? fixturesByDate[dateKey(date)] ?? [] : []

                  return (
                    <div
                      key={date ? dateKey(date) : `empty-${index}`}
                      className={`min-h-35 border-b border-r border-slate-200 p-1.5 ${
                        isCurrentMonthDay ? 'bg-white' : 'bg-slate-50/70'
                      }`}
                    >
                      {date && (
                        <>
                          <time dateTime={dateKey(date)} className="inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-xs font-bold text-slate-600">
                            {dayNumber}
                          </time>
                          {dayFixtures.map((fixture) => {
                            const team = teamDetails[fixture.team]
                            const venueLabel = fixture.venue === 'H' ? 'Home' : fixture.venue === 'A' ? 'Away' : 'Neutral'
                            return (
                              <article
                                key={`${fixture.team}-${fixture.date}-${fixture.opponent}`}
                                title={`${team.label}: ${venueLabel} v ${fixture.opponent}, ${fixture.time}, ${fixture.competition}${fixture.result ? ` — ${fixture.result}` : ''}`}
                                className={`mt-1 rounded border border-slate-200 border-l-4 px-1.5 py-1 text-[10px] leading-tight shadow-sm ${team.blockClass}`}
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="font-extrabold tracking-wide">{team.shortLabel}</span>
                                  <span className="font-semibold">{fixture.time}</span>
                                </div>
                                <p className="mt-0.5 truncate font-semibold">
                                  {fixture.venue === 'H' ? 'vs' : '@'} {fixture.opponent}
                                </p>
                                {fixture.result && <p className="mt-0.5 font-bold opacity-75">{fixture.result}</p>}
                              </article>
                            )
                          })}
                        </>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3" aria-label={`${monthLabel} fixture details`}>
            {filteredFixtures.map((fixture) => {
              const team = teamDetails[fixture.team]
              const venueLabel = fixture.venue === 'H' ? 'Home' : fixture.venue === 'A' ? 'Away' : 'Neutral'
              return (
                <article key={`${fixture.team}-${fixture.date}-${fixture.opponent}`} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3">
                  <time dateTime={dateKey(fixture.startsAt)} className="flex w-12 shrink-0 flex-col items-center rounded-lg bg-white py-1 text-center shadow-sm ring-1 ring-slate-200">
                    <span className="text-[10px] font-bold uppercase tracking-wide text-slate-500">
                      {new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(fixture.startsAt)}
                    </span>
                    <span className="text-xl font-bold leading-tight text-[#0b2d52]">{fixture.startsAt.getDate()}</span>
                  </time>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold tracking-wide ${team.chipClass}`}>{team.label}</span>
                      <span className="text-xs font-medium text-slate-500">{fixture.time} &middot; {fixture.competition}</span>
                    </div>
                    <p className="mt-1 font-bold text-[#0b2d52]">{venueLabel} v {fixture.opponent}</p>
                    <p className="mt-0.5 text-xs text-slate-500">{fixture.ground ?? (fixture.venue === 'H' ? 'Home fixture' : 'Venue to be confirmed')}</p>
                    {fixture.result && <p className="mt-1 text-xs font-bold text-slate-700">Result: {fixture.result}</p>}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default ClubFixturesCalendar
