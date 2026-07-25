export const officials = {
  chairman: 'Oliver Keeble',
  viceChairman: 'Paul Woodrow',
  secretary: 'Matt Shipsey',
  committee: [
    'Gary Keary',
    'Jenna Shipsey',
    'Luke Selman',
    'Mark Alexander',
    'Mike Slade',
    'Neil Thomas',
    'Chris Singh',
    'Ryan Nixon',
    'Jim Phillipps',
    'Kyle Thomas',
  ],
  firstTeamManager: 'Kyle Thomas',
  firstTeamCoaches: ['Josh Phillipps', 'Mike Slade'],
  reserveTeamManager: 'Jim Phillipps',
  reserveTeamCoaches: ['Todd Brunt', 'Tony Perry'],
}

export type Squaddie = { name: string; position: string; blurb: string }

/**
 * 2026/27 squad — cleared pending confirmation from the club for the new
 * season. Populate this once player registrations are finalised.
 */
export const squad: Squaddie[] = []

/** Archived 2025/26 squad, kept for that season's matchday programmes. */
export const squad2025_26: Squaddie[] = [
  { name: 'Tom Bradley', position: 'GK', blurb: 'Joined us last season after two extremely successful seasons with Avonmouth, bringing experience at both Gloucester County League and Weston League levels. A huge presence on and off the pitch.' },
  { name: 'Chris Hillyer', position: 'Defender', blurb: 'The modern day centre half. Great on the ball, quick, strong, technically brilliant and a free kick specialist.' },
  { name: 'Jack Cole', position: 'Defender (Captain)', blurb: 'Rolls Royce. Quick, aggressive, physical, fit, long range passing and a leader. Transitioned from midfield last season and has been a revelation.' },
  { name: 'Jack Willmor', position: 'Def/Mid (Vice-Captain)', blurb: 'Cafu of the County league. Outstanding defending 1 on 1 — hard to remember any winger going past him. Loves an overlap.' },
  { name: 'Tom Fry', position: 'Defender', blurb: 'Should be playing two leagues higher. Played for Mangotsfield with the gaffer many years ago. Outstanding attitude, can do pretty much anything on the football pitch.' },
  { name: 'Joe Mitchell', position: 'Def/Mid', blurb: 'Mr consistent. Technically gifted with both feet. Can defend and attack. Brilliant attitude.' },
  { name: 'Kieran Daniels', position: 'Def/Mid', blurb: 'Football IQ outstanding, can play LB, CB, CM or LW. Strong, quick and outstanding delivery out wide.' },
  { name: 'Dan Matthews', position: 'Def/Mid', blurb: "Every opponent's nightmare. Will not stop running — tough, strong, technically excellent. Can play all positions and loves a 50/50." },
  { name: 'Callum Mitchell', position: 'Midfielder', blurb: 'Dynamic midfield presence. Ball winner, loves a tackle and never backs down when it gets tough. Loves popping up with important goals.' },
  { name: 'Liam Dorman', position: 'Midfielder', blurb: 'Will not let opponents breathe. Committed, explosive and thrives in a 50/50. Technically very good and an important leader on and off the pitch.' },
  { name: 'Charlie Peacock', position: 'Midfielder', blurb: 'Coming up from the reserves last year, Char has been a breath of fresh air. Seriously talented midfielder who can play anywhere.' },
  { name: 'Matt Tovey', position: 'Midfielder', blurb: 'New summer signing recovering from a long knee injury. When fit, a serious player in this league. Both footed and amazing in the air.' },
  { name: 'Dylan Quick', position: 'Midfielder', blurb: 'New signing from our friends at DRG. Fits perfectly into the way we want to play this season: aggressive, quick, technically gifted, box to box.' },
  { name: 'Fraser Venables', position: 'Midfielder', blurb: 'Left foot wand and his right foot is just as good. Creativity, vision and awareness off the charts. Can play in the 10 or either wing.' },
  { name: 'Yusuf Abdulrahman', position: 'Midfielder', blurb: "Box to box midfielder. Doesn't stop running from minute one. Has all the attributes to be a top player." },
  { name: 'Kyle Thomas', position: 'Mid/Fwd (Player Manager)', blurb: 'Established attacking midfielder with bundles of ability. Strong on the ball and in the air and a deft touch at set pieces.' },
  { name: 'Fabien Pereira', position: 'Forward', blurb: 'Skilful attacking player, clinical when given the opportunity.' },
  { name: 'Dan Payne', position: 'Forward', blurb: 'Another summer signing and another left footed wizard. Has played leagues above in the past. Now fit and ready to go.' },
  { name: 'Trey Merrett', position: 'Forward', blurb: 'Goals, goals, goals. Direct, blistering pace and can shoot off his left and right. Can play down either wing or as a striker and will score.' },
  { name: 'Said Hassan', position: 'Forward', blurb: 'Quick, skilful, agile and loves taking on defenders. Can play down both wings and as an attacking full back.' },
  { name: 'Kieran Cooper', position: 'Forward', blurb: 'Big number 9. Aerial presence, back to goal, work rate, loves pinning defenders. Great character to have in any team.' },
]

export type Fixture = {
  date: string
  time: string
  competition: string
  opponent: string
  venue: 'H' | 'A' | 'N'
  result?: string
  scorers?: string
}

/**
 * 2026/27 first-team fixture list — cleared pending the new league
 * schedule. Populate once fixtures are confirmed.
 */
export const firstTeamFixtures: Fixture[] = [
  { date: '01/08/26', time: '15:00', competition: 'GCL', opponent: 'University of Bristol', venue: 'H' },
  { date: '08/08/26', time: '15:00', competition: 'GCL', opponent: 'AFC Mangotsfield Rocks', venue: 'A' },
  { date: '15/08/26', time: '15:00', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'A' },
  { date: '22/08/26', time: '15:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'H' },
  { date: '29/08/26', time: '15:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'H' },
  { date: '12/09/26', time: '15:00', competition: 'GCL', opponent: 'Longlevens Reserves', venue: 'A' },
  { date: '26/09/26', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'H' },
  { date: '03/10/26', time: '15:00', competition: 'GCL', opponent: 'Wick', venue: 'A' },
  { date: '10/10/26', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'H' },
  { date: '31/10/26', time: '15:00', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'H' },
  { date: '07/11/26', time: '14:00', competition: 'GCL', opponent: 'Frampton United', venue: 'H' },
  { date: '21/11/26', time: '14:00', competition: 'GCL', opponent: 'Chalford', venue: 'A' },
  { date: '28/11/26', time: '14:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'H' },
  { date: '05/12/26', time: '14:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'A' },
  { date: '12/12/26', time: '14:00', competition: 'GCL', opponent: 'University of Bristol', venue: 'A' },
  { date: '19/12/26', time: '14:00', competition: 'GCL', opponent: 'AFC Mangotsfield Rocks', venue: 'H' },
  { date: '26/12/26', time: '14:00', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'H' },
  { date: '02/01/27', time: '14:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'A' },
  { date: '09/01/27', time: '14:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'A' },
  { date: '16/01/27', time: '14:00', competition: 'GCL', opponent: 'Longlevens Reserves', venue: 'H' },
  { date: '23/01/27', time: '14:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'A' },
  { date: '30/01/27', time: '14:00', competition: 'GCL', opponent: 'Wick', venue: 'H' },
  { date: '06/02/27', time: '14:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'A' },
  { date: '27/02/27', time: '14:00', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'A' },
  { date: '06/03/27', time: '15:00', competition: 'GCL', opponent: 'Frampton United', venue: 'A' },
  { date: '20/03/27', time: '15:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'A' },
  { date: '27/03/27', time: '14:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'H' },
  { date: '03/04/27', time: '15:00', competition: 'GCL', opponent: 'Chalford', venue: 'H' },
]

/** Archived 2025/26 first-team fixtures & results. */
export const firstTeamFixtures2025_26: Fixture[] = [
  { date: '09/08/25', time: '15:00', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'H', result: 'D 0-0' },
  { date: '16/08/25', time: '15:00', competition: 'GCL', opponent: 'Chalford', venue: 'H', result: 'W 4-0', scorers: 'D Quick 3, T Merrett' },
  { date: '23/08/25', time: '15:00', competition: 'GCL', opponent: 'Wick', venue: 'A', result: 'W 4-1', scorers: 'D Quick, K Cooper, T Merrett 2' },
  { date: '06/09/25', time: '15:00', competition: 'LJC', opponent: 'Tewkesbury Town', venue: 'A', result: 'W 4-1', scorers: 'Y Abdulrahman, D Payne, T Merrett 2' },
  { date: '13/09/25', time: '15:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'A', result: 'D 0-0' },
  { date: '20/09/25', time: '15:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'A', result: 'D 1-1', scorers: 'K Thomas' },
  { date: '27/09/25', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'H', result: 'W 2-0' },
  { date: '04/10/25', time: '15:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'A', result: 'L 1-3' },
  { date: '11/10/25', time: '15:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'H', result: 'W 3-1' },
  { date: '18/10/25', time: '15:00', competition: 'GFA', opponent: 'Saints Old Boys', venue: 'A' },
  { date: '25/10/25', time: '15:00', competition: 'GCL', opponent: 'Cribbs A', venue: 'A', result: 'D 1-1' },
  { date: '01/11/25', time: '14:00', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'H', result: 'W 4-1' },
  { date: '08/11/25', time: '14:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'H', result: 'W 7-0' },
  { date: '22/11/25', time: '14:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'A', result: 'W 2-1' },
  { date: '29/11/25', time: '14:00', competition: 'LJC', opponent: 'Tytherington Rocks', venue: 'A', result: 'L 0-1' },
  { date: '20/12/25', time: '14:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'H', result: 'W 2-1' },
  { date: '31/01/26', time: '14:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'H', result: 'W 5-0' },
  { date: '14/02/26', time: '14:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'H', result: 'W 2-1' },
  { date: '21/02/26', time: '14:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'A', result: 'W 3-2' },
  { date: '28/02/26', time: '14:00', competition: 'GCL', opponent: 'Cribbs A', venue: 'H', result: 'W 4-0' },
  { date: '03/03/26', time: '19:45', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'A', result: 'W 4-2' },
  { date: '07/03/26', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'A', result: 'W 2-1' },
  { date: '18/03/26', time: '19:45', competition: 'GCL', opponent: 'Tytherington Rocks', venue: 'A', result: 'W 1-0' },
  { date: '21/03/26', time: '15:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'H', result: 'W 2-1' },
  { date: '28/03/26', time: '15:00', competition: 'GCL', opponent: 'Frampton United', venue: 'A', result: 'D 0-0' },
  { date: '04/04/26', time: '15:00', competition: 'GCL', opponent: 'Sharpness', venue: 'H', result: 'L 1-2' },
  { date: '06/04/26', time: '15:00', competition: 'GCL', opponent: 'Tytherington Rocks', venue: 'H', result: 'L 1-2' },
  { date: '18/04/26', time: '15:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'A', result: 'W 3-1' },
  { date: '21/04/26', time: '18:30', competition: 'GCL', opponent: 'Sharpness', venue: 'A', result: 'W 3-2' },
  { date: '28/04/26', time: '18:30', competition: 'GCL', opponent: 'Chalford', venue: 'A', result: 'D 1-1' },
  { date: '02/05/26', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'A', result: 'W 2-1' },
  { date: '04/05/26', time: '15:00', competition: 'GCL', opponent: 'Frampton United', venue: 'H', result: 'L 1-4' },
  { date: '06/05/26', time: '18:30', competition: 'GCL', opponent: 'Wick', venue: 'H', result: 'D 1-1' },
  { date: '09/05/26', time: '15:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'H', result: 'L 0-2' },
  { date: '12/05/26', time: '18:30', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'A', result: 'D 2-2' },
]

export type ReserveFixture = { date: string; time: string; competition: string; opponent: string; venue: 'H' | 'A'; ground: string }

/** 2026/27 reserve fixtures — cleared pending the new league schedule. */
export const reserveFixtures: ReserveFixture[] = []

/** Archived 2025/26 reserve fixtures. */
export const reserveFixtures2025_26: ReserveFixture[] = [
  { date: '27/09/25', time: '14:00', competition: 'SEN', opponent: 'Brislington 2nd', venue: 'A', ground: 'Ironmould Lane' },
  { date: '04/10/25', time: '14:00', competition: 'ABC', opponent: 'Almondsbury Reserves', venue: 'A', ground: 'The Field' },
  { date: '11/10/25', time: '14:00', competition: 'SEN', opponent: 'Hartcliffe FC First', venue: 'A', ground: 'Creswicke Road' },
  { date: '18/10/25', time: '14:00', competition: 'GFA', opponent: 'Stoke Gifford SGS United First', venue: 'A', ground: 'Stoke Gifford United' },
  { date: '25/10/25', time: '14:00', competition: 'SEN', opponent: 'Mendip Broadwalk Res', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '08/11/25', time: '14:00', competition: 'SEN', opponent: 'Fishponds Old Boys 1st', venue: 'A', ground: 'King George V Playing Field (Downend)' },
  { date: '15/11/25', time: '14:00', competition: 'SEN', opponent: 'Wessex Wanderers Reserves', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '22/11/25', time: '14:00', competition: 'SEN', opponent: 'Cosmos UK Saturday First', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '29/11/25', time: '14:00', competition: 'SEN', opponent: 'Broad Plain House Reserves', venue: 'A', ground: 'Filwood Park Playing Fields' },
  { date: '13/12/25', time: '14:00', competition: 'SEN', opponent: 'AFC Bohemia First', venue: 'A', ground: 'BAWA Healthcare & Leisure' },
  { date: '20/12/25', time: '14:00', competition: 'SEN', opponent: 'Lawrence Weston Athletic Saturday First', venue: 'A', ground: 'Kings Weston Sports Club' },
  { date: '10/01/26', time: '14:00', competition: 'SEN', opponent: 'Brislington 2nd', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '24/01/26', time: '14:00', competition: 'SEN', opponent: 'Mendip Broadwalk Res', venue: 'A', ground: 'Filwood Park Playing Fields' },
  { date: '31/01/26', time: '14:00', competition: 'SEN', opponent: 'Bromley Heath United Reserves', venue: 'A', ground: 'Pomphrey Hill' },
  { date: '07/02/26', time: '14:00', competition: 'SEN', opponent: 'Fishponds Old Boys 1st', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '14/02/26', time: '14:00', competition: 'SEN', opponent: 'Wessex Wanderers Reserves', venue: 'A', ground: 'Lockleaze Sports Club' },
  { date: '21/02/26', time: '14:00', competition: 'SEN', opponent: 'Broad Plain House Reserves', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '07/03/26', time: '14:00', competition: 'SEN', opponent: 'AFC Bohemia First', venue: 'H', ground: 'BBS Park North @ Elm Park' },
  { date: '04/04/26', time: '13:00', competition: 'SEN', opponent: 'Cosmos UK Saturday First', venue: 'A', ground: "Oakland's Park" },
]

export type TableRow = { pos: number; team: string; p: number; w: number; d: number; l: number; f: number; a: number; gd: number; pts: number }

/** 2026/27 league table — cleared pending the season starting. */
export const leagueTable: TableRow[] = []

/** Archived final 2025/26 league table. */
export const leagueTable2025_26: TableRow[] = [
  { pos: 1, team: 'Sharpness', p: 32, w: 25, d: 3, l: 4, f: 92, a: 37, gd: 55, pts: 78 },
  { pos: 2, team: 'Filton Athletic', p: 32, w: 19, d: 8, l: 5, f: 69, a: 35, gd: 34, pts: 65 },
  { pos: 3, team: 'Tewkesbury Town', p: 32, w: 20, d: 4, l: 8, f: 82, a: 37, gd: 45, pts: 61 },
  { pos: 4, team: 'Frampton United', p: 32, w: 17, d: 6, l: 9, f: 53, a: 36, gd: 17, pts: 57 },
  { pos: 5, team: 'Bishops Cleeve Development', p: 32, w: 17, d: 5, l: 10, f: 80, a: 55, gd: 25, pts: 56 },
  { pos: 6, team: 'Quedgeley Wanderers', p: 32, w: 15, d: 6, l: 11, f: 62, a: 44, gd: 18, pts: 51 },
  { pos: 7, team: 'Wick', p: 32, w: 15, d: 5, l: 12, f: 53, a: 49, gd: 4, pts: 50 },
  { pos: 8, team: 'Chalford', p: 32, w: 15, d: 5, l: 12, f: 50, a: 54, gd: -4, pts: 50 },
  { pos: 9, team: 'Broadwell Amateurs', p: 32, w: 13, d: 6, l: 13, f: 46, a: 46, gd: 0, pts: 45 },
  { pos: 10, team: 'Tytherington Rocks', p: 32, w: 12, d: 4, l: 16, f: 40, a: 50, gd: -10, pts: 40 },
  { pos: 11, team: 'Bromley Heath United', p: 32, w: 10, d: 7, l: 15, f: 41, a: 63, gd: -22, pts: 37 },
  { pos: 12, team: 'Henbury & Rockleaze', p: 32, w: 9, d: 8, l: 15, f: 41, a: 46, gd: -5, pts: 35 },
  { pos: 13, team: 'Stoke Gifford SGS United', p: 32, w: 10, d: 4, l: 18, f: 52, a: 81, gd: -29, pts: 34 },
  { pos: 14, team: 'Ruardean Hill Rangers', p: 32, w: 9, d: 4, l: 19, f: 47, a: 68, gd: -21, pts: 31 },
  { pos: 15, team: 'Totterdown United', p: 32, w: 7, d: 7, l: 18, f: 39, a: 62, gd: -23, pts: 28 },
  { pos: 16, team: 'Cribbs A', p: 32, w: 7, d: 7, l: 18, f: 30, a: 83, gd: -53, pts: 28 },
  { pos: 17, team: 'Hanham Athletic', p: 32, w: 5, d: 5, l: 22, f: 43, a: 74, gd: -31, pts: 20 },
]

/** 2026/27 reserve league table — cleared pending the season starting. */
export const reserveTable: TableRow[] = []

/** Archived final 2025/26 reserve league table. */
export const reserveTable2025_26: TableRow[] = [
  { pos: 1, team: 'AFC Bohemia First', p: 2, w: 2, d: 0, l: 0, f: 16, a: 6, gd: 10, pts: 6 },
  { pos: 2, team: 'Cosmos UK Saturday First', p: 2, w: 2, d: 0, l: 0, f: 4, a: 0, gd: 4, pts: 6 },
  { pos: 3, team: 'Wessex Wanderers Reserves', p: 2, w: 1, d: 1, l: 0, f: 6, a: 3, gd: 3, pts: 4 },
  { pos: 4, team: 'Hartcliffe FC First', p: 2, w: 1, d: 1, l: 0, f: 4, a: 3, gd: 1, pts: 4 },
  { pos: 5, team: 'Filton Athletic Reserves', p: 1, w: 1, d: 0, l: 0, f: 6, a: 0, gd: 6, pts: 3 },
  { pos: 6, team: 'Mendip Broadwalk Res', p: 1, w: 1, d: 0, l: 0, f: 6, a: 2, gd: 4, pts: 3 },
  { pos: 7, team: 'Fishponds Old Boys 1st', p: 2, w: 1, d: 0, l: 1, f: 11, a: 10, gd: 1, pts: 3 },
  { pos: 8, team: 'Brislington 2nd', p: 2, w: 0, d: 0, l: 2, f: 3, a: 8, gd: -5, pts: 0 },
  { pos: 9, team: 'Bromley Heath United Reserves', p: 2, w: 0, d: 0, l: 2, f: 2, a: 7, gd: -5, pts: 0 },
  { pos: 10, team: 'Broad Plain House Reserves', p: 2, w: 0, d: 0, l: 2, f: 1, a: 8, gd: -7, pts: 0 },
  { pos: 11, team: 'Lawrence Weston Athletic Saturday First', p: 2, w: 0, d: 0, l: 2, f: 2, a: 14, gd: -12, pts: 0 },
]

export const sponsors = [
  { name: 'BBS Plumbing & Heating Supplies', blurb: 'Est. 1933 — ground naming partner, BBS Park North', website: 'https://www.bbsplumb.co.uk/' },
  { name: 'The Filton Feast', blurb: 'Café & coffee shop, 156 Station Rd, Bristol, BS34 7JL — 0117 969 0216', website: 'https://x.com/thefiltonfeast' },
  { name: 'First Auto Care Techs', blurb: 'Vehicle repairs & servicing at Elberton Garage — 01454 414 670', website: 'https://fact.repair/' },
  { name: 'DM Flooring', blurb: 'Kit sponsor — 07557 442 701' },
  { name: 'BS3 Roofing', blurb: 'The complete roofing company — 07922 804 129', website: 'https://bs3roofing.co.uk/' },
  { name: 'GP Rowe Decorating Services', blurb: 'Painting, decorating and wall papering — 07977 910941', website: 'https://www.facebook.com/garfysv8s/' },
  { name: 'The Kitchen Den Design Studio', blurb: 'Kitchen design studio', website: 'https://www.thekitchenden.co.uk/' },
  { name: 'Clarius', blurb: 'Change delivery & IT recruitment specialists — 0117 214 1263', website: 'https://clarius.io/' },
  { name: 'New Happy Palace', blurb: 'Chinese takeaway, 553 Filton Avenue, BS7 0QH — 0117 969 3739', website: 'https://www.newhappypalace.com/' },
]

export const groundInfo = {
  name: 'BBS Park North',
  address: 'Filton Leisure Centre, Elm Park, Filton, Bristol, BS34 7PS',
  note: 'Following upgrades in summer 2025, the first team, reserves and youth all play at BBS Park North.',
}
