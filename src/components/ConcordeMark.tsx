/**
 * Abstract, symbolic top-down silhouette evoking Concorde's planform
 * (needle nose/tail, swept delta wing) — an original simplified
 * shape, not a traced reproduction. A nod to Filton's aviation
 * history, echoing the aircraft on the club crest.
 */
function ConcordeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 200"
      fill="currentColor"
      stroke="none"
      className={className}
      aria-hidden="true"
    >
      {/* thin fuselage, nose to tail */}
      <polygon points="280,100 150,94 0,100 150,106" />
      {/* swept delta wing pair, overlapping the fuselage */}
      <polygon points="190,92 65,12 118,100 65,188 190,108" />
    </svg>
  )
}

export default ConcordeMark
