/**
 * "From the archive" — scanned press cuttings and historical features about the
 * club, each presented as the original scan alongside a clean transcription.
 *
 * To add a cutting: drop the scan into `public/archive/`, add an object below,
 * and it gets its own page at `/history/<slug>` (wired into routing, <head>
 * metadata and the prerenderer automatically). Newest first.
 */
export type ArchiveFeature = {
  slug: string
  /** The original headline, as printed. */
  headline: string
  publication: string
  /** Edition line, as printed (e.g. "Tuesday 20 October 2009"). */
  edition: string
  /** ISO date of the edition (YYYY-MM-DD), for machine-readable markup. */
  isoDate: string
  byline?: string
  /** Bold opening paragraph. */
  standfirst: string
  /** Remaining article paragraphs, in reading order. */
  body: string[]
  /** The team photo caption, naming the players left to right. */
  photoCaption?: string
  /** Scanned clipping, served from /public. */
  scan: { src: string; alt: string }
  /** One-line summary for the page <meta> description and share cards. */
  summary: string
}

export const archiveFeatures: ArchiveFeature[] = [
  {
    slug: 'bouncing-back-2009',
    headline: 'Filton Athletic are bouncing back to success once again',
    publication: 'Bristol Evening Post',
    edition: 'Tuesday 20 October 2009',
    isoDate: '2009-10-20',
    byline: 'David Hughes, Bristol Evening Post',
    standfirst:
      "Filton Athletic have experienced a fair share of ups and downs following their launch in 1980, having twice come close to folding since the turn of the century, but the future now looks much brighter for the club's two sides.",
    body: [
      "The club joined the Bristol & Suburban League as St Andrew's Methodist Youth Club, and the first competitive game ended in a resounding 21-2 victory against Fishponds OB Reserves, with Timmy Hammond scoring 11 goals in the rout.",
      "He is still involved with the club as chairman of the management committee, which includes first-team regular Simon Bryan (treasurer) and reserve captain Matt Gould.",
      "The club's name was changed to Filton Athletic in 1986, while remaining based at Elm Park, which has been the home ground since the early days in the lower divisions.",
      "After lifting the Division III crown, Filton completed a notable double in 1982, winning both the Division II title and the Alfred Bosley Cup at the end of a season to remember.",
      "The team quickly achieved Premier Division I status, having been champions of Division I then runners-up in Premier Division II, in the top sphere of the league until 2002, when the reserves were disbanded to prevent the club from folding.",
      "Filton kept one side, starting in Division IV again, and another successful spell eventually meant promotion back to Premier Division II in 2006, when the reserves were again axed to save the club.",
      "An influx of new players has since enabled Filton to enter another reserve side, now in Division IV, while the first team enjoyed a period of consolidation in Division I, after finishing in mid-table last season.",
      "First-team manager Darren Jones said: “Filton as a club are now in the best shape they have been for a long time, with both sides doing well.",
      "“A lot of hard work has gone on behind the scenes to put the club in a stable condition, and I have a good mix of experience and youth to choose from.”",
      "The majority of the first team have played together for around six seasons, with newcomers like Luke Walker, Mattie Price, Chris Misir and Rob Cotter giving added depth to the squad. Goalkeeper Gary Keary, defender Matt Shipsey and midfielder Mike Humby were all regulars for the reserves last season but are now making their mark at the higher level.",
      "The reserves have been resurgent under the guidance of Jim Phillips and Mattie Budd, boasting an unbeaten record after five games in the race for the Division IV title.",
      "Filton Athletic can look forward to celebrating the 30th anniversary of the club's formation next year, and promotion for both sides would set the corks popping to erase the memory of recent lean times.",
    ],
    photoCaption:
      'Back row: Darren Jones (manager), Martyn Sims, Kenny Wynne, Mike Humby, Gary Keary, Luke Walker, Matty Price, Rob Cotter, Mark Loftus, Simon Bryan. Front row: Peter Jefferey, Matthew Shipsey, Craig Lanfear, Chris Misir, Paul Woodrow, Dean Lewis.',
    scan: {
      src: '/archive/evening-post-2009-bouncing-back.jpg',
      alt: "Bristol Evening Post, 20 October 2009 — 'Filton Athletic are bouncing back to success once again', with a squad photo of the 2009 team.",
    },
    summary:
      "From the archive: the Bristol Evening Post's October 2009 feature on Filton Athletic — the club's history from its 1980 launch, twice coming close to folding, and bouncing back with both sides on the up.",
  },
]

export function getArchiveFeature(slug: string | undefined): ArchiveFeature | undefined {
  return archiveFeatures.find((f) => f.slug === slug)
}
