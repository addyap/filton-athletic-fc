/**
 * Abstract, symbolic dart silhouette evoking Concorde (needle nose,
 * swept delta wings, blunt tail) — an original simplified shape, not
 * a traced reproduction. A nod to Filton's aviation history, echoing
 * the aircraft on the club crest.
 */
function ConcordeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 100"
      fill="currentColor"
      stroke="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M196,50 L120,42 L35,12 L85,54 L15,48 L15,58 L85,64 L35,90 L120,60 Z"
      />
    </svg>
  )
}

export default ConcordeMark
