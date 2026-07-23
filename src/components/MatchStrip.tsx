import { Link } from 'react-router-dom'
import {
  nextFirstTeamFixture,
  lastFirstTeamResult,
  programmeForFixture,
  fixtureLongDate,
  competitionName,
} from '../data/programmes'
import { groundInfo, type Fixture } from '../data/club'

function venueLabel(v: Fixture['venue']) {
  return v === 'H' ? 'Home' : v === 'A' ? 'Away' : 'Neutral'
}

function resultTone(result: string) {
  if (result.startsWith('W')) return 'bg-emerald-100 text-emerald-800'
  if (result.startsWith('L')) return 'bg-red-100 text-red-800'
  return 'bg-amber-100 text-amber-800'
}

function MatchStrip() {
  const next = nextFirstTeamFixture
  const last = lastFirstTeamResult
  if (!next && !last) return null

  const nextProgramme = next ? programmeForFixture(next) : undefined

  return (
    <section aria-label="Latest match information" className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6">
        {next && (
          <div className="flex flex-col rounded-xl border border-[#0b2d52] bg-[#0b2d52] p-5 text-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-[#a9e0b8]">
                Next match
              </span>
              <span className="rounded bg-white/15 px-2 py-0.5 text-xs font-semibold">
                {venueLabel(next.venue)}
              </span>
            </div>
            <h3 className="mt-2 text-lg font-bold sm:text-xl">
              Filton Athletic <span className="text-slate-300">vs</span> {next.opponent}
            </h3>
            <p className="mt-1 text-sm text-slate-200">
              {fixtureLongDate(next.date)} &middot; Kick-off {next.time}
            </p>
            <p className="text-sm text-slate-300">
              {competitionName(next.competition)}
              {next.venue === 'H' ? ` · ${groundInfo.name}` : ''}
            </p>
            {nextProgramme && (
              <Link
                to={`/programme/${nextProgramme.slug}`}
                className="mt-4 inline-block text-sm font-semibold text-[#a9e0b8] hover:text-white"
              >
                View matchday programme &rarr;
              </Link>
            )}
          </div>
        )}

        {last && (
          <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5">
            <span className="text-xs font-semibold uppercase tracking-wide text-[#3f8a5b]">
              Last result
            </span>
            <h3 className="mt-2 text-lg font-bold text-[#0b2d52] sm:text-xl">
              Filton Athletic <span className="text-slate-400">vs</span> {last.opponent}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {fixtureLongDate(last.date)} &middot; {venueLabel(last.venue)}
            </p>
            <div className="mt-3 flex items-center gap-2">
              <span className={`rounded px-2 py-0.5 text-sm font-bold ${resultTone(last.result!)}`}>
                {last.result}
              </span>
              {last.scorers && <span className="text-sm text-slate-600">{last.scorers}</span>}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default MatchStrip
