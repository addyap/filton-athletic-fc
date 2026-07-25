/**
 * Subtle line-drawing watermarks for individual page sections, matching the
 * schematic/stroke-only style of PitchBackdrop and ConcordeMark — abstract,
 * not literal illustrations. Each is themed to its section's subject and
 * meant to be dropped in large, cropped, and near-transparent in a corner.
 */
type MarkProps = { className?: string }

/** Join Us — a boot in profile, laces and studs. */
export function BootMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M22 150 L22 118 Q22 98 46 92 L148 66 Q176 59 182 82 Q186 100 166 110 L42 150 Z" strokeLinejoin="round" />
      <path d="M46 92 L46 60 M70 86 L60 56 M94 80 L88 52" strokeLinecap="round" />
      <circle cx="52" cy="132" r="5" fill="currentColor" stroke="none" />
      <circle cx="86" cy="140" r="5" fill="currentColor" stroke="none" />
      <circle cx="120" cy="144" r="5" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** Club news — a folded newspaper with a photo block and text rules. */
export function NewspaperMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M30 30 H150 V158 Q150 172 136 172 H44 Q30 172 30 158 Z" strokeLinejoin="round" />
      <path d="M150 30 L170 46 V158 Q170 172 156 172 Q150 172 150 158" strokeLinejoin="round" />
      <rect x="46" y="48" width="46" height="40" />
      <line x1="106" y1="52" x2="134" y2="52" strokeLinecap="round" />
      <line x1="106" y1="64" x2="134" y2="64" strokeLinecap="round" />
      <line x1="106" y1="76" x2="134" y2="76" strokeLinecap="round" />
      <line x1="46" y1="104" x2="134" y2="104" strokeLinecap="round" />
      <line x1="46" y1="120" x2="134" y2="120" strokeLinecap="round" />
      <line x1="46" y1="136" x2="110" y2="136" strokeLinecap="round" />
    </svg>
  )
}

/** History — a trophy with handles, stem and base. */
export function TrophyMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 160 200" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M50 30 H110 V70 Q110 108 80 108 Q50 108 50 70 Z" strokeLinejoin="round" />
      <path d="M50 40 Q22 40 22 62 Q22 84 50 84" />
      <path d="M110 40 Q138 40 138 62 Q138 84 110 84" />
      <line x1="80" y1="108" x2="80" y2="140" />
      <path d="M56 168 Q56 148 80 140 Q104 148 104 168 Z" strokeLinejoin="round" />
      <line x1="44" y1="168" x2="116" y2="168" strokeLinecap="round" />
    </svg>
  )
}

/** First team squad — a shirt with a V-neck collar and sleeves. */
export function JerseyMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path
        d="M78 24 L100 44 L122 24 L166 44 L152 82 L134 72 L134 172 Q134 180 126 180 L74 180 Q66 180 66 172 L66 72 L48 82 L34 44 Z"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path d="M84 26 Q100 48 116 26" />
    </svg>
  )
}

/** Youth — a rising sequence of stars, small to large. */
export function RisingStarsMark({ className }: MarkProps) {
  const star = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 5 }, (_, i) => {
      const outer = -Math.PI / 2 + (i * 2 * Math.PI) / 5
      const inner = outer + Math.PI / 5
      return [
        [cx + r * Math.cos(outer), cy + r * Math.sin(outer)],
        [cx + r * 0.45 * Math.cos(inner), cy + r * 0.45 * Math.sin(inner)],
      ]
    })
      .flat()
      .map((p) => p.join(','))
      .join(' ')
    return pts
  }
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <polygon points={star(40, 150, 16)} strokeLinejoin="round" />
      <polygon points={star(96, 108, 24)} strokeLinejoin="round" />
      <polygon points={star(160, 56, 34)} strokeLinejoin="round" />
    </svg>
  )
}

/** Fixtures — a calendar with binder rings and a marked match day. */
export function CalendarMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="26" y="40" width="148" height="132" rx="10" />
      <line x1="26" y1="76" x2="174" y2="76" />
      <line x1="60" y1="26" x2="60" y2="54" strokeLinecap="round" />
      <line x1="140" y1="26" x2="140" y2="54" strokeLinecap="round" />
      <circle cx="60" cy="104" r="6" />
      <circle cx="100" cy="104" r="6" />
      <circle cx="140" cy="104" r="6" fill="currentColor" stroke="none" />
      <circle cx="60" cy="138" r="6" />
      <circle cx="100" cy="138" r="6" />
    </svg>
  )
}

/** League table — an ascending podium/bar chart. */
export function PodiumMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 200 160" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="24" y="88" width="44" height="60" strokeLinejoin="round" />
      <rect x="78" y="52" width="44" height="96" strokeLinejoin="round" />
      <rect x="132" y="104" width="44" height="44" strokeLinejoin="round" />
      <line x1="16" y1="148" x2="184" y2="148" strokeLinecap="round" />
      <circle cx="100" cy="30" r="10" />
    </svg>
  )
}

/** Sponsors — an award rosette. */
export function RosetteMark({ className }: MarkProps) {
  return (
    <svg viewBox="0 0 160 200" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <circle cx="80" cy="66" r="40" />
      <circle cx="80" cy="66" r="24" />
      <path d="M56 100 L40 168 L80 148 L120 168 L104 100" strokeLinejoin="round" />
    </svg>
  )
}
