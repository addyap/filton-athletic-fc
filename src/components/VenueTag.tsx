/**
 * A compact H / A / N pill marking a fixture as Home, Away or Neutral.
 *
 * Scorelines across the site read home-team-first, so this letter is what tells
 * you which side Filton were — it appears next to results and in fixture
 * tables. Use `onDark` on dark surfaces (e.g. the "Next match" card) so the
 * pill keeps its contrast.
 */
function VenueTag({ venue, onDark = false }: { venue: 'H' | 'A' | 'N'; onDark?: boolean }) {
  const label = venue === 'H' ? 'Home' : venue === 'A' ? 'Away' : 'Neutral'

  const tone = onDark
    ? venue === 'H'
      ? 'bg-white text-[#0b2d52]'
      : 'bg-white/20 text-white ring-1 ring-white/30'
    : venue === 'H'
      ? 'bg-[#0b2d52] text-white'
      : 'bg-slate-200 text-[#0b2d52] ring-1 ring-slate-300'

  return (
    <span
      title={`${label} game`}
      aria-label={`${label} game`}
      className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${tone}`}
    >
      {venue}
    </span>
  )
}

export default VenueTag
