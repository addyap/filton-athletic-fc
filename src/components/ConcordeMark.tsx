/**
 * Abstract, symbolic line-art silhouette of Concorde — not a photo
 * reproduction, just a simplified geometric nod to Filton's aviation
 * history (the same detail that appears on the club crest).
 */
function ConcordeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Fuselage: tapered nose to blunt tail */}
      <path d="M4 42c28-4 60-6 92-6s96 4 100 8c-4 4-64 8-100 8s-64-2-92-6z" />
      {/* Droop nose tip */}
      <path d="M4 42 L28 36" />
      {/* Delta wing */}
      <path d="M78 46 L118 76 L150 76 L108 46z" />
      {/* Tail fin */}
      <path d="M168 36 L196 18 L188 40z" />
      {/* Engine pods under the wing */}
      <path d="M100 50 L112 66 M118 50 L128 64" />
      {/* Cockpit line */}
      <path d="M30 38 L46 34" />
    </svg>
  )
}

export default ConcordeMark
