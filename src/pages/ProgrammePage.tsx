import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import crest from '../assets/img/filton-athletic-crest-transparent.webp'
import elmParkPitch from '../assets/img/elm-park-pitch.jpg'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { SectionIcon } from '../components/SectionHeading'
import {
  getProgramme,
  findTableRow,
  formBefore,
  reverseFixtureFor,
  type Programme,
  type TeamSheet,
} from '../data/programmes'
import {
  squad as squadCurrent,
  squad2025_26,
  sponsors,
  groundInfo,
  leagueTable as leagueTableCurrent,
  leagueTable2025_26,
  firstTeamFixtures,
  firstTeamFixtures2025_26,
} from '../data/club'

function FormGuide({ form }: { form: Array<'W' | 'D' | 'L'> }) {
  if (form.length === 0) return <span className="text-sm text-slate-500">No games played yet</span>
  const colour = { W: 'bg-emerald-600', D: 'bg-amber-500', L: 'bg-red-600' }
  return (
    <span className="inline-flex gap-1">
      {form.map((r, i) => (
        <span
          key={i}
          className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white ${colour[r]}`}
        >
          {r}
        </span>
      ))}
    </span>
  )
}

function StandingCard({
  label,
  team,
  pos,
  played,
  pts,
  form,
}: {
  label: string
  team: string
  pos?: number
  played?: number
  pts?: number
  form?: Array<'W' | 'D' | 'L'>
}) {
  return (
    <div className="rounded-lg border border-slate-200 p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#3f8a5b]">{label}</p>
      <p className="mt-1 text-lg font-bold text-[#0b2d52]">{team}</p>
      {pos != null ? (
        <dl className="mt-3 grid grid-cols-3 gap-2 text-center">
          <div>
            <dt className="text-xs text-slate-500">Position</dt>
            <dd className="text-xl font-bold text-[#0b2d52]">{pos}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Played</dt>
            <dd className="text-xl font-bold text-[#0b2d52]">{played}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Points</dt>
            <dd className="text-xl font-bold text-[#0b2d52]">{pts}</dd>
          </div>
        </dl>
      ) : (
        <p className="mt-3 text-sm text-slate-500">Not in this division's table.</p>
      )}
      {form && (
        <div className="mt-3">
          <p className="text-xs text-slate-500">Recent form</p>
          <div className="mt-1">
            <FormGuide form={form} />
          </div>
        </div>
      )}
    </div>
  )
}

function TeamSheetCard({ sheet }: { sheet: TeamSheet }) {
  return (
    <div className="rounded-lg border border-slate-200 p-5">
      <h4 className="font-bold text-[#0b2d52]">{sheet.team}</h4>
      {sheet.kit && <p className="mt-1 text-xs uppercase tracking-wide text-slate-500">{sheet.kit}</p>}
      {sheet.staff && sheet.staff.length > 0 && (
        <p className="mt-3 text-sm text-slate-600">
          <span className="font-semibold text-[#0b2d52]">Staff: </span>
          {sheet.staff.join(', ')}
        </p>
      )}
      <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-slate-700">
        {sheet.players.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  )
}

function Section({
  id,
  title,
  icon,
  quote,
  children,
}: {
  id: string
  title: string
  icon?: string
  quote?: boolean
  children: React.ReactNode
}) {
  return (
    <section id={id} className="relative overflow-hidden border-t border-slate-200 py-8">
      {quote && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-2 top-6 font-serif text-8xl leading-none text-slate-100"
        >
          &rdquo;
        </span>
      )}
      <div className="flex items-center gap-3">
        {icon && (
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#e7f0e9] text-[#2f6b45]">
            <SectionIcon name={icon} className="h-5 w-5" />
          </span>
        )}
        <h3 className="relative text-xl font-bold text-[#0b2d52]">{title}</h3>
      </div>
      <div className="relative mt-4">{children}</div>
    </section>
  )
}

function ShareBar({ programme }: { programme: Programme }) {
  const [copied, setCopied] = useState(false)
  const url = typeof window === 'undefined' ? '' : window.location.href
  const title = `Filton Athletic vs ${programme.fixture.opponent} — matchday programme`
  const shareText = encodeURIComponent(title)
  const shareUrl = encodeURIComponent(url)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3 print:hidden">
      {programme.extras.pdfUrl && (
        <a
          className="rounded bg-[#0b2d52] px-3 py-1.5 text-sm font-semibold text-white hover:bg-[#0a2745]"
          href={programme.extras.pdfUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download full programme (PDF)
        </a>
      )}
      <button
        type="button"
        onClick={() => window.print()}
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
      >
        Print this page
      </button>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp
      </a>
      <a
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <button
        type="button"
        onClick={copyLink}
        className="rounded border border-slate-300 px-3 py-1.5 text-sm text-[#0b2d52] hover:bg-slate-50"
      >
        {copied ? 'Link copied' : 'Copy link'}
      </button>
    </div>
  )
}

function ProgrammePage() {
  const { slug } = useParams()
  const programme = getProgramme(slug)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (programme) {
      document.title = `Filton Athletic vs ${programme.fixture.opponent}, ${programme.longDate} — Matchday programme`
    }
    return () => {
      document.title = 'Filton Athletic FC'
    }
  }, [programme])

  if (!programme) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <main className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h1 className="text-2xl font-bold text-[#0b2d52]">Programme not found</h1>
          <p className="mt-3 text-slate-600">That match may not have a programme yet.</p>
          <Link to="/programmes" className="mt-6 inline-block text-[#0b2d52] underline">
            Back to all programmes
          </Link>
        </main>
        <SiteFooter />
      </div>
    )
  }

  const { fixture, extras } = programme
  const isCurrentSeason = programme.season === '2026/27'
  const squad = isCurrentSeason ? squadCurrent : squad2025_26
  const leagueTable = isCurrentSeason ? leagueTableCurrent : leagueTable2025_26
  const seasonFixtures = isCurrentSeason ? firstTeamFixtures : firstTeamFixtures2025_26
  const seasonLabel = isCurrentSeason ? '2026-27' : '2025-26'
  const filtonTableRow = findTableRow('Filton Athletic', leagueTable)
  const oppRow = findTableRow(fixture.opponent, leagueTable)
  const form = formBefore(programme.isoDate, 5, seasonFixtures)
  const reverse = reverseFixtureFor(fixture.opponent, seasonFixtures)

  return (
    <div className="programme-print min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link to="/programmes" className="text-sm text-[#0b2d52] underline print:hidden">
          &larr; All programmes
        </Link>

        {/* Cover */}
        <header className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-b from-[#1c3f6e] to-[#0a2340] px-6 py-10 text-center text-white sm:py-14">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">
            <span>Official matchday programme</span>
            {extras.number != null && <span>No. {extras.number}</span>}
          </div>
          <img src={crest} alt="Filton Athletic FC crest" className="mx-auto mt-6 h-24 w-24 object-contain sm:h-28 sm:w-28" />
          <h1 className="mt-6 text-2xl font-bold sm:text-4xl">
            Filton Athletic <span className="block text-base font-normal text-slate-300 sm:inline sm:text-2xl">vs</span>{' '}
            {fixture.opponent}
          </h1>
          <p className="mt-4 text-sm text-slate-100 sm:text-base">{programme.longDate}</p>
          <p className="text-sm text-slate-100 sm:text-base">Kick-off {fixture.time} &middot; {groundInfo.name}</p>
          <p className="mt-2 text-xs uppercase tracking-wide text-[#a9e0b8] sm:text-sm">{programme.competitionName}</p>
          {fixture.result && (
            <p className="mt-4 inline-block rounded-full bg-white/15 px-4 py-1 text-lg font-bold">
              Final: {fixture.result}
            </p>
          )}
          {extras.pdfUrl && (
            <div className="mt-6 print:hidden">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-[#a9e0b8] px-5 py-2.5 text-sm font-bold text-[#0b2d52] hover:bg-white"
                href={extras.pdfUrl}
                target="_blank"
                rel="noreferrer"
              >
                &#8681; Download full programme (PDF)
              </a>
            </div>
          )}
        </header>

        <div className="mt-6">
          <ShareBar programme={programme} />
        </div>

        {/* Chairman's welcome */}
        {extras.welcome && (
          <Section id="welcome" title="Welcome to BBS Park North" icon="chat" quote>
            <div className="space-y-4 text-slate-700">
              {extras.welcome.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <p className="mt-4 font-semibold text-[#0b2d52]">
              {extras.welcome.author} &mdash; {extras.welcome.role}
            </p>
          </Section>
        )}

        {/* From the dugout */}
        {extras.dugout && (
          <Section id="dugout" title="From the dugout" icon="chat" quote>
            {extras.dugout.matchTitle && (
              <p className="mb-3 text-sm font-medium text-slate-500">{extras.dugout.matchTitle}</p>
            )}
            <div className="space-y-4 text-slate-700">
              {extras.dugout.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
            <p className="mt-4 font-semibold text-[#0b2d52]">
              {extras.dugout.author} &mdash; {extras.dugout.role}
            </p>
          </Section>
        )}

        {/* How they stand */}
        <Section id="standings" title="How they stand" icon="standings">
          <div className="grid gap-4 sm:grid-cols-2">
            <StandingCard
              label="The hosts"
              team="Filton Athletic"
              pos={filtonTableRow?.pos}
              played={filtonTableRow?.p}
              pts={filtonTableRow?.pts}
              form={form}
            />
            <StandingCard
              label="Today's visitors"
              team={fixture.opponent}
              pos={oppRow?.pos}
              played={oppRow?.p}
              pts={oppRow?.pts}
            />
          </div>
          {reverse && (
            <p className="mt-4 text-sm text-slate-600">
              Reverse fixture: {fixture.opponent} vs Filton Athletic on{' '}
              {reverse.date}
              {reverse.result ? ` — ${reverse.result}` : ' (to be played)'}.
            </p>
          )}
        </Section>

        {/* Visitors profile */}
        {extras.visitors && (
          <Section id="visitors" title={`Today's visitors — ${extras.visitors.name}`} icon="shield">
            <div className="space-y-4 text-slate-700">
              {extras.visitors.paragraphs.map((p) => (
                <p key={p.slice(0, 32)}>{p}</p>
              ))}
            </div>
          </Section>
        )}

        {/* Team sheets */}
        {extras.teamSheets && (
          <Section id="teamsheets" title="Matchday squads" icon="clipboard">
            <div className="grid gap-4 sm:grid-cols-2">
              <TeamSheetCard sheet={extras.teamSheets.home} />
              <TeamSheetCard sheet={extras.teamSheets.away} />
            </div>
            {extras.matchOfficial && (
              <p className="mt-4 text-sm text-slate-600">
                <span className="font-semibold text-[#0b2d52]">Match official: </span>
                {extras.matchOfficial}
              </p>
            )}
          </Section>
        )}

        {/* Meet the squad */}
        <Section id="squad" title="Meet the Filton squad" icon="shirt">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {squad.map((p) => (
              <div key={p.name} className="rounded-lg border border-slate-200 p-4">
                <p className="font-semibold text-[#0b2d52]">{p.name}</p>
                <p className="text-xs font-medium uppercase tracking-wide text-[#3f8a5b]">{p.position}</p>
                <p className="mt-2 text-sm text-slate-600">{p.blurb}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* League table */}
        <Section id="table" title="League table" icon="standings">
          <p className="mb-3 text-sm text-slate-500">{programme.competitionName} {seasonLabel}</p>
          {leagueTable.length === 0 ? (
            <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
              <p className="font-semibold text-[#0b2d52]">Table will appear once the season is under way</p>
              <p className="mt-1 text-sm text-slate-500">No matches played yet.</p>
            </div>
          ) : (
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="min-w-full text-sm">
              <thead className="bg-[#0b2d52] text-white">
                <tr>
                  {(
                    [
                      { label: 'Pos' },
                      { label: 'Team' },
                      { label: 'P' },
                      { label: 'W', cls: 'hidden sm:table-cell' },
                      { label: 'D', cls: 'hidden sm:table-cell' },
                      { label: 'L', cls: 'hidden sm:table-cell' },
                      { label: 'GD' },
                      { label: 'Pts' },
                    ] as const
                  ).map((h) => (
                    <th key={h.label} className={`px-3 py-2 text-left font-semibold ${'cls' in h ? h.cls : ''}`}>
                      {h.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leagueTable.map((r) => {
                  const isFilton = r.team === 'Filton Athletic'
                  const isOpp = oppRow?.team === r.team
                  return (
                    <tr
                      key={r.team}
                      className={`border-t border-slate-200 ${
                        isFilton
                          ? 'bg-[#e7f0e9] font-semibold text-[#0b2d52]'
                          : isOpp
                            ? 'bg-amber-50 font-semibold'
                            : 'odd:bg-white even:bg-slate-50'
                      }`}
                    >
                      <td className="px-3 py-1.5">{r.pos}</td>
                      <td className="px-3 py-1.5">{r.team}</td>
                      <td className="px-3 py-1.5">{r.p}</td>
                      <td className="hidden px-3 py-1.5 sm:table-cell">{r.w}</td>
                      <td className="hidden px-3 py-1.5 sm:table-cell">{r.d}</td>
                      <td className="hidden px-3 py-1.5 sm:table-cell">{r.l}</td>
                      <td className="px-3 py-1.5">{r.gd}</td>
                      <td className="px-3 py-1.5">{r.pts}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          )}
        </Section>

        {/* Charity */}
        {extras.charity && (
          <Section id="charity" title={`Supporting ${extras.charity.name}`} icon="heart">
            <div className="rounded-lg border border-slate-200 bg-[#f7faf8] p-6">
              <div className="space-y-4 text-slate-700">
                {extras.charity.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
              {extras.charity.url && (
                <a
                  className="mt-4 inline-block font-semibold text-[#0b2d52] underline"
                  href={extras.charity.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {extras.charity.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                </a>
              )}
            </div>
          </Section>
        )}

        {/* Sponsors */}
        <Section id="sponsors" title="Our sponsors" icon="star">
          <p className="mb-4 text-sm text-slate-500">Thank you to everyone who backs the club.</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sponsors.map((s) => (
              <div key={s.name} className="rounded-lg border border-slate-200 p-4">
                <p className="font-semibold text-[#0b2d52]">{s.name}</p>
                <p className="mt-1 text-sm text-slate-600">{s.blurb}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Ground */}
        <Section id="ground" title="Matchday & ground" icon="pin">
          <img
            src={elmParkPitch}
            alt="The pitch at BBS Park North, Elm Park, Filton"
            className="mb-4 aspect-video w-full rounded-lg object-cover"
          />
          <p className="font-semibold text-[#0b2d52]">{groundInfo.name}</p>
          <p className="text-slate-700">{groundInfo.address}</p>
          <a
            className="mt-2 inline-block text-sm font-semibold text-[#0b2d52] underline"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${groundInfo.name}, ${groundInfo.address}`)}`}
            target="_blank"
            rel="noreferrer"
          >
            Get directions &rarr;
          </a>
          <p className="mt-3 text-sm text-slate-600">
            Stay for the feast after the game — food, a drink and a bit of a disco. #FATS #UTF
          </p>
        </Section>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <ShareBar programme={programme} />
        </div>
      </article>

      <div className="print:hidden">
        <SiteFooter />
      </div>
    </div>
  )
}

export default ProgrammePage
