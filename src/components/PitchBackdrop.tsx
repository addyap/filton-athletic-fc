/**
 * Abstract pitch markings used as a faint backdrop in the hero.
 * Drawn stroke-only so it reads as an indentation in the gradient
 * rather than a graphic sitting on top of it.
 */
function PitchBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18]"
      viewBox="0 0 1200 400"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      {/* Touchlines */}
      <rect x="40" y="30" width="1120" height="340" />
      {/* Halfway line and centre circle */}
      <line x1="600" y1="30" x2="600" y2="370" />
      <circle cx="600" cy="200" r="70" />
      <circle cx="600" cy="200" r="4" fill="currentColor" stroke="none" />
      {/* Left penalty area */}
      <rect x="40" y="90" width="150" height="220" />
      <rect x="40" y="150" width="60" height="100" />
      <path d="M190 155 A 70 70 0 0 1 190 245" />
      {/* Right penalty area */}
      <rect x="1010" y="90" width="150" height="220" />
      <rect x="1100" y="150" width="60" height="100" />
      <path d="M1010 155 A 70 70 0 0 0 1010 245" />
      {/* Corner arcs */}
      <path d="M40 48 A 18 18 0 0 0 58 30" />
      <path d="M1142 30 A 18 18 0 0 0 1160 48" />
      <path d="M40 352 A 18 18 0 0 1 58 370" />
      <path d="M1142 370 A 18 18 0 0 1 1160 352" />
    </svg>
  )
}

export default PitchBackdrop
