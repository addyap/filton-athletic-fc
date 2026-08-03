export const officials = {
  chairman: 'Oliver Keeble',
  viceChairman: 'Paul Woodrow',
  secretary: 'Matt Shipsey',
  committee: [
    'Luke Selman',
    'Mark Alexander',
    'Mike Slade',
    'Neil Thomas',
    'Chris Singh',
    'Josh Phillipps',
    'Jim Phillipps',
    'Kyle Thomas',
    'Simon Fry',
    "Kevin O'Donnell",
    'Tommy Johnston',
    'Todd Brunt',
    'Tyler Skuse',
    'Jenna Shipsey',
    'Chris Hillyer',
  ],
  firstTeamManager: 'Kyle Thomas',
  firstTeamCoaches: ['Josh Phillipps', 'Mike Slade'],
  reserveTeamManager: 'Jim Phillipps',
  reserveTeamCoaches: ['Todd Brunt', 'Luke Selman', 'Liam Dart'],
  aTeamManager: 'Tommy Johnston',
  aTeamCoaches: ['Ryan Jones'],
}

export type Squaddie = { name: string; position: string; blurb: string }

/** 2026/27 first team squad. */
export const squad: Squaddie[] = [
  { name: 'Ashley Eyles', position: 'GK', blurb: 'Rejoins the club after a few years away. An experienced keeper who is vocal, commands his box and an excellent shot stopper.' },
  { name: 'Kieran Daniels', position: 'Def/Mid', blurb: 'Football IQ outstanding, can play LB, CB, CM or LW. Strong, quick and outstanding delivery out wide.' },
  { name: 'Dan Matthews', position: 'Def/Mid', blurb: "Every opponent's nightmare. Will not stop running — tough, strong, technically excellent. Can play all positions and loves a 50/50." },
  { name: 'Joe Mitchell', position: 'Def/Mid', blurb: 'Mr consistent. Technically gifted with both feet. Can defend and attack. Brilliant attitude.' },
  { name: 'Callum Mitchell', position: 'Midfielder', blurb: 'Dynamic midfield presence. Ball winner, loves a tackle and never backs down when it gets tough. Loves popping up with important goals.' },
  { name: 'Liam Dorman', position: 'Midfielder', blurb: 'Will not let opponents breathe. Committed, explosive and thrives in a 50/50. Technically very good and an important leader on and off the pitch.' },
  { name: 'Charlie Peacock', position: 'Midfielder', blurb: 'Came up from the reserves and has been a breath of fresh air. Seriously talented midfielder who can play anywhere.' },
  { name: 'Matt Tovey', position: 'Midfielder', blurb: 'Summer signing recovering from a long knee injury. When fit, a serious player in this league. Both footed and amazing in the air.' },
  { name: 'Dylan Quick', position: 'Midfielder', blurb: 'Signing from our friends at DRG. Fits perfectly into the way we want to play this season: aggressive, quick, technically gifted, box to box.' },
  { name: 'Fraser Venables', position: 'Midfielder', blurb: 'Left foot wand and his right foot is just as good. Creativity, vision and awareness off the charts. Can play in the 10 or either wing, and loves an assist as much as a goal.' },
  { name: 'Yusuf Abdulrahman', position: 'Midfielder', blurb: "Box to box midfielder. Doesn't stop running from minute one. Has all the attributes to be a top player." },
  { name: 'Freddie Frazer', position: 'Midfielder', blurb: 'Joined last season from Brislington. Bags of ability and can do anything in midfield — the Kaká of the County League.' },
  { name: 'Kyle Thomas', position: 'Mid/Fwd (Player Manager)', blurb: 'Established attacking midfielder with bundles of ability. Strong on the ball and in the air and a deft touch at set pieces.' },
  { name: 'Taylor Anderson', position: 'Mid/Fwd', blurb: 'Back scoring goals after a few seasons out with a bad knee injury. First touch is as good as it gets — comfortable in tight areas with back to goal or the ball at his feet. A complete footballer.' },
  { name: 'Trey Merrett', position: 'Forward', blurb: 'Goals, goals, goals. Direct, blistering pace and can shoot off his left and right. Can play down either wing or as a striker and will score.' },
  { name: 'Said Hassan', position: 'Forward', blurb: 'Quick, skilful, agile and loves taking on defenders. Can play down both wings and as an attacking full back.' },
  { name: 'Kieran Cooper', position: 'Forward', blurb: 'Big number 9. Aerial presence, back to goal, work rate, loves pinning defenders. Great character to have in any team.' },
  { name: 'Dan Payne', position: 'Forward', blurb: 'Another left footed wizard who has played leagues above in the past. Now fit and ready to go.' },
  { name: 'Matthew Hoare', position: 'Forward', blurb: "Joined us last year but the season was hit and miss after a bad injury. A defender's worst nightmare — can go both sides, lightning-quick feet and scores plenty of goals." },
  { name: 'Raphael Waugh', position: 'Forward', blurb: 'Summer signing. Direct, quick and strong — going to be a handful for any defence this season. Look out for the backflips after each goal.' },
]

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
  /** Bookings, formatted e.g. "Y Abdulrahman (Y), D Matthews (R)". */
  cards?: string
}

/**
 * 2026/27 first-team fixture list — cleared pending the new league
 * schedule. Populate once fixtures are confirmed.
 */
export const firstTeamFixtures: Fixture[] = [
  { date: '01/08/26', time: '15:00', competition: 'GCL', opponent: 'University of Bristol', venue: 'H', result: 'L 1-2', scorers: 'C Hillyer' },
  { date: '08/08/26', time: '15:00', competition: 'GCL', opponent: 'AFC Mangotsfield Rocks', venue: 'A' },
  { date: '12/08/26', time: '18:30', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'H' },
  { date: '15/08/26', time: '15:00', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'A' },
  { date: '22/08/26', time: '15:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'H' },
  { date: '05/09/26', time: '15:00', competition: 'Cup', opponent: 'University of Bristol', venue: 'A' },
  { date: '15/09/26', time: '19:45', competition: 'GCL', opponent: 'Longlevens Reserves', venue: 'A' },
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

/**
 * Archived 2023/24 first-team fixtures & results — Bristol & Suburban Premier
 * Division, finished 1st as Champions (P22 W18 D3 L1, 72-18, 57pts),
 * promoted to the Marcliff Gloucestershire County League for 2024/25. This
 * league's fixture pages don't record goal scorers or cards, so only
 * results are available for this season.
 */
export const firstTeamFixtures2023_24: Fixture[] = [
  { date: '02/09/23', time: '14:00', competition: 'BSP', opponent: 'Rockleaze Rangers Res', venue: 'H', result: 'W 3-2' },
  { date: '09/09/23', time: '14:00', competition: 'BSP', opponent: 'Southmead CS Athletic', venue: 'A', result: 'W 4-1' },
  { date: '16/09/23', time: '14:00', competition: 'BSP', opponent: 'Stoke Gifford United Res', venue: 'H', result: 'W 4-1' },
  { date: '30/09/23', time: '14:00', competition: 'BSP', opponent: 'Bristol Spartak', venue: 'A', result: 'W 1-0' },
  { date: '28/10/23', time: '14:00', competition: 'BSP', opponent: 'Wessex Wanderers', venue: 'H', result: 'D 1-1' },
  { date: '11/11/23', time: '14:00', competition: 'BSP', opponent: 'Broad Plain House', venue: 'H', result: 'W 2-0' },
  { date: '18/11/23', time: '14:00', competition: 'BSP', opponent: 'Old Cothamians', venue: 'H', result: 'W 4-2' },
  { date: '25/11/23', time: '14:00', competition: 'BSP', opponent: 'St Aldhelms', venue: 'H', result: 'W 12-0' },
  { date: '16/12/23', time: '14:00', competition: 'BSP', opponent: 'Southmead CS Athletic', venue: 'H', result: 'W 4-0' },
  { date: '06/01/24', time: '14:00', competition: 'BSP', opponent: 'Rockleaze Rangers Res', venue: 'A', result: 'D 1-1' },
  { date: '13/01/24', time: '14:00', competition: 'BSP', opponent: 'Stoke Gifford United Res', venue: 'A', result: 'W 6-1' },
  { date: '20/01/24', time: '14:00', competition: 'BSP', opponent: 'Easton Cowboys', venue: 'H', result: 'W 1-0' },
  { date: '27/01/24', time: '14:00', competition: 'BSPC', opponent: 'Bristol Spartak', venue: 'H', result: 'D 2-2' },
  { date: '02/03/24', time: '14:00', competition: 'BSPC', opponent: 'Stockwood Wanderers Res', venue: 'H', result: 'W (walkover)' },
  { date: '09/03/24', time: '14:00', competition: 'BSP', opponent: 'Redbridge', venue: 'H', result: 'W 6-0' },
  { date: '16/03/24', time: '14:00', competition: 'BSPC', opponent: 'Old Cothamians', venue: 'H', result: 'W 3-1' },
  { date: '23/03/24', time: '14:00', competition: 'BSP', opponent: 'Old Cothamians', venue: 'A', result: 'W 3-0' },
  { date: '30/03/24', time: '11:00', competition: 'BSP', opponent: 'Redbridge', venue: 'A', result: 'W 5-2' },
  { date: '03/04/24', time: '19:30', competition: 'BSPC', opponent: 'Broad Plain House', venue: 'H', result: 'W 6-1' },
  { date: '06/04/24', time: '14:00', competition: 'BSP', opponent: 'Lawrence Weston Athletic Saturday', venue: 'H', result: 'W (walkover)' },
  { date: '09/04/24', time: '18:15', competition: 'BSP', opponent: 'St Aldhelms', venue: 'A', result: 'W 4-1' },
  { date: '13/04/24', time: '14:00', competition: 'BSP', opponent: 'Bristol Spartak', venue: 'H', result: 'D 1-1' },
  { date: '20/04/24', time: '13:00', competition: 'BSP', opponent: 'Broad Plain House', venue: 'A', result: 'L 0-4' },
  { date: '23/04/24', time: '18:30', competition: 'BSP', opponent: 'Easton Cowboys', venue: 'A', result: 'W 7-1' },
  { date: '01/05/24', time: '19:30', competition: 'BSPC', opponent: 'Easton Cowboys', venue: 'A', result: 'L 1-2' },
  { date: '04/05/24', time: '14:00', competition: 'BSP', opponent: 'Lawrence Weston Athletic Saturday', venue: 'A', result: 'W (walkover)' },
  { date: '11/05/24', time: '13:00', competition: 'BSP', opponent: 'Wessex Wanderers', venue: 'A', result: 'W 3-0' },
]

/**
 * Archived 2024/25 first-team fixtures & results — Division 1, finished 6th
 * (P30 W16 D11 L3, 62-35, 59pts). Scorers and cards sourced from FA
 * Full-Time's per-match lineup detail.
 */
export const firstTeamFixtures2024_25: Fixture[] = [
  { date: '10/08/24', time: '15:00', competition: 'GCL', opponent: 'Wick', venue: 'A', result: 'D 1-1', scorers: 'F Venables', cards: 'L Dorman (Y), C Hillyer (Y)' },
  { date: '17/08/24', time: '15:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'H', result: 'W 2-0', scorers: 'T Merrett, S Hassan', cards: 'K Cooper (Y), K Thomas (Y), J Wilmor (Y), Y Abdulrahman (Y), C Mitchell (Y)' },
  { date: '24/08/24', time: '15:00', competition: 'GCL', opponent: 'Gala Wilton', venue: 'H', result: 'W 4-0', scorers: 'T Merrett 2, K Thomas, F Venables', cards: 'K Cooper (Y), T Fry (Y), D Matthews (Y), T Merrett (Y), F Venables (Y), Y Abdulrahman (Y)' },
  { date: '07/09/24', time: '15:00', competition: 'LJC', opponent: 'Gala Wilton', venue: 'A', result: 'L 1-2', scorers: 'F Venables' },
  { date: '14/09/24', time: '15:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'A', result: 'L 2-4', scorers: 'K Cooper, T Merrett' },
  { date: '28/09/24', time: '15:00', competition: 'GCL', opponent: 'Cheltenham Civil Service', venue: 'H', result: 'W 4-0', scorers: 'K Cooper 2, T Fry, K Thomas', cards: 'J Cutler (Y), D Matthews (Y)' },
  { date: '05/10/24', time: '15:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'H', result: 'D 2-2', scorers: 'C Hillyer, T Merrett', cards: 'J Cole (Y), L Dorman (Y)' },
  { date: '12/10/24', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'A', result: 'W 3-1', scorers: 'T Merrett, K Thomas, Y Abdulrahman', cards: 'T Merrett (Y)' },
  { date: '26/10/24', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'H', result: 'L 1-4', scorers: 'J Cole', cards: 'Y Abdulrahman (Y), J Cutler (Y), F Venables (Y), D Matthews (R)' },
  { date: '09/11/24', time: '14:00', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'H', result: 'D 1-1', scorers: 'T Merrett' },
  { date: '30/11/24', time: '14:00', competition: 'GCL', opponent: 'Almondsbury', venue: 'H', result: 'D 2-2', scorers: 'C Mitchell, F Venables', cards: 'J Cutler (Y), C Hillyer (Y), K Thomas (Y), F Venables (Y), S Hassan (Y)' },
  { date: '21/12/24', time: '14:00', competition: 'GCL', opponent: 'Sharpness', venue: 'H', result: 'W 2-1', scorers: 'F Venables 2', cards: 'Y Abdulrahman (Y)' },
  { date: '28/12/24', time: '14:00', competition: 'GCL', opponent: 'Wick', venue: 'H', result: 'W 5-3', scorers: 'L Dorman, T Fry 2, T Merrett, K Thomas' },
  { date: '08/01/25', time: '19:30', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'A', result: 'D 1-1', scorers: 'T Merrett', cards: 'Y Abdulrahman (Y), L Dorman (Y), T Merrett (Y), C Mitchell (Y), D Matthews (Y)' },
  { date: '18/01/25', time: '14:00', competition: 'GCL', opponent: 'Gala Wilton', venue: 'A', result: 'W 2-0', scorers: 'F Venables 2' },
  { date: '25/01/25', time: '14:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'A', result: 'W 6-1', scorers: 'Y Abdulrahman, K Cooper 2, T Fry, T Merrett 2', cards: 'Y Abdulrahman (Y), T Merrett (Y), D Matthews (Y), C Peacock (Y)' },
  { date: '01/02/25', time: '14:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'H', result: 'D 2-2', scorers: 'Y Abdulrahman, T Merrett', cards: 'Y Abdulrahman (Y)' },
  { date: '22/02/25', time: '14:00', competition: 'GCL', opponent: 'Frampton United', venue: 'H', result: 'W 1-0', scorers: 'J Wilmor', cards: 'K Thomas (Y)' },
  { date: '01/03/25', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'A', result: 'W 3-1', scorers: 'K Cooper 2, K Thomas', cards: 'L Dorman (Y), D Matthews (Y), J Wilmor (Y), S Hassan (Y)' },
  { date: '08/03/25', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'H', result: 'W 2-1', scorers: 'T Merrett, F Venables', cards: 'Y Abdulrahman (Y), T Merrett (Y), D Quick (Y)' },
  { date: '15/03/25', time: '15:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'A', result: 'W 2-0', scorers: 'K Cooper, T Fry', cards: 'J Cole (Y), L Dorman (Y), T Fry (Y), K Thomas (Y)' },
  { date: '22/03/25', time: '15:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'H', result: 'D 2-2', scorers: 'T Fry, F Pereira', cards: 'K Cooper (Y), C Hillyer (Y), K Thomas (Y), K Daniels (Y)' },
  { date: '29/03/25', time: '15:00', competition: 'GCL', opponent: 'Almondsbury', venue: 'A', result: 'D 0-0', cards: 'Y Abdulrahman (Y)' },
  { date: '05/04/25', time: '15:00', competition: 'GCL', opponent: 'Chalford', venue: 'H', result: 'W 2-1', scorers: 'Y Abdulrahman, K Cooper' },
  { date: '08/04/25', time: '19:30', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'A', result: 'W 3-0', scorers: 'T Merrett 2, S Hassan', cards: 'K Cooper (Y)' },
  { date: '12/04/25', time: '15:00', competition: 'GCL', opponent: 'Sharpness', venue: 'A', result: 'D 0-0', cards: 'C Hillyer (R)' },
  { date: '16/04/25', time: '18:30', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'A', result: 'D 1-1', scorers: 'S Hassan' },
  { date: '19/04/25', time: '15:00', competition: 'GCL', opponent: 'Cheltenham Civil Service', venue: 'A', result: 'D 3-3', scorers: 'T Fry, K Thomas, F Venables', cards: 'K Cooper (Y), D Matthews (Y), T Merrett (R)' },
  { date: '26/04/25', time: '15:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'H', result: 'W 2-1', scorers: 'L Dorman, F Venables', cards: 'Y Abdulrahman (Y), K Cooper (Y)' },
  { date: '30/04/25', time: '18:30', competition: 'GCL', opponent: 'Chalford', venue: 'A', result: 'W 1-0', scorers: 'T Fry' },
  { date: '05/05/25', time: '15:00', competition: 'GCL', opponent: 'Frampton United', venue: 'A', result: 'L 0-2' },
]

/**
 * Archived 2025/26 first-team fixtures & results. Scorers and cards
 * sourced from FA Full-Time's per-match lineup detail.
 */
export const firstTeamFixtures2025_26: Fixture[] = [
  { date: '09/08/25', time: '15:00', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'H', result: 'D 0-0', cards: 'K Cooper (Y), J Wilmor (Y), Y Abdulrahman (Y)' },
  { date: '16/08/25', time: '15:00', competition: 'GCL', opponent: 'Chalford', venue: 'H', result: 'W 4-0', scorers: 'D Quick 3, T Merrett', cards: 'L Dorman (Y)' },
  { date: '23/08/25', time: '15:00', competition: 'GCL', opponent: 'Wick', venue: 'A', result: 'W 4-1', scorers: 'K Cooper, T Merrett 2, D Quick' },
  { date: '06/09/25', time: '15:00', competition: 'LJC', opponent: 'Tewkesbury Town', venue: 'A', result: 'W 4-1', scorers: 'Y Abdulrahman, T Merrett 2, D Payne', cards: 'L Dorman (Y)' },
  { date: '13/09/25', time: '15:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'A', result: 'D 0-0', cards: 'K Cooper (Y), L Dorman (Y), J Wilmor (Y)' },
  { date: '20/09/25', time: '15:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'A', result: 'D 1-1', scorers: 'K Thomas', cards: 'Y Abdulrahman (Y)' },
  { date: '27/09/25', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'H', result: 'W 2-0', scorers: 'K Cooper' },
  { date: '04/10/25', time: '15:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'A', result: 'L 1-3', scorers: 'D Quick', cards: 'Y Abdulrahman (Y), L Dorman (Y), T Merrett (Y)' },
  { date: '11/10/25', time: '15:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'H', result: 'W 3-1', scorers: 'K Cooper, T Merrett 2', cards: 'Y Abdulrahman (Y)' },
  { date: '18/10/25', time: '15:00', competition: 'GFA', opponent: 'Saints Old Boys', venue: 'A' },
  { date: '25/10/25', time: '15:00', competition: 'GCL', opponent: 'Cribbs A', venue: 'A', result: 'D 1-1', scorers: 'K Cooper' },
  { date: '01/11/25', time: '14:00', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'H', result: 'W 4-1', scorers: 'K Cooper, T Merrett 2, T Anderson', cards: 'T Merrett (Y)' },
  { date: '08/11/25', time: '14:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'H', result: 'W 7-0', scorers: 'K Cooper 3, T Merrett, K Simpson, J Wilmor', cards: 'R Nixon (Y)' },
  { date: '22/11/25', time: '14:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'A', result: 'W 2-1', scorers: 'T Fry, D Quick', cards: 'T Fry (Y), E Wilson (Y)' },
  { date: '29/11/25', time: '14:00', competition: 'LJC', opponent: 'Tytherington Rocks', venue: 'A', result: 'L 0-1' },
  { date: '20/12/25', time: '14:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'H', result: 'W 2-1', scorers: 'J Cole, T Merrett', cards: 'T Fry (Y)' },
  { date: '31/01/26', time: '14:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'H', result: 'W 5-0', scorers: 'F Joe Frazer, T Merrett 2, K Thomas, T Anderson', cards: 'K Cooper (Y), F Joe Frazer (Y), T Fry (Y), M Tovey (Y)' },
  { date: '14/02/26', time: '14:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'H', result: 'W 2-1', scorers: 'T Merrett', cards: 'K Thomas (Y), J Wilmor (Y), D Quick (Y)' },
  { date: '21/02/26', time: '14:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'A', result: 'W 3-2', scorers: 'T Merrett, D Quick, D Payne', cards: 'F Joe Frazer (Y)' },
  { date: '28/02/26', time: '14:00', competition: 'GCL', opponent: 'Cribbs A', venue: 'H', result: 'W 4-0', scorers: 'K Cooper, T Merrett 3' },
  { date: '03/03/26', time: '19:45', competition: 'GCL', opponent: 'Bishops Cleeve Development', venue: 'A', result: 'W 4-2', scorers: 'K Cooper, L Dorman, T Merrett, D Payne', cards: 'T Merrett (Y), J Mitchell (Y)' },
  { date: '07/03/26', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'A', result: 'W 2-1', scorers: 'F Joe Frazer, T Merrett', cards: 'T Bradley (Y), T Merrett (Y), K Thomas (Y)' },
  { date: '18/03/26', time: '19:45', competition: 'GCL', opponent: 'Tytherington Rocks', venue: 'A', result: 'W 1-0', scorers: 'K Cooper', cards: 'K Cooper (R)' },
  { date: '21/03/26', time: '15:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'H', result: 'W 2-1', scorers: 'K Cooper, F Venables' },
  { date: '28/03/26', time: '15:00', competition: 'GCL', opponent: 'Frampton United', venue: 'A', result: 'D 0-0', cards: 'M Tovey (Y)' },
  { date: '04/04/26', time: '15:00', competition: 'GCL', opponent: 'Sharpness', venue: 'H', result: 'L 1-2', scorers: 'T Fry', cards: 'T Bradley (Y), F Joe Frazer (R), C Hillyer (Y), T Merrett (Y), M Tovey (Y)' },
  { date: '06/04/26', time: '15:00', competition: 'GCL', opponent: 'Tytherington Rocks', venue: 'H', result: 'L 1-2', scorers: 'C Hillyer' },
  { date: '18/04/26', time: '15:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'A', result: 'W 3-1', scorers: 'K Cooper, T Merrett, F Venables', cards: 'Y Abdulrahman (R), T Bradley (R), K Cooper (Y), L Dorman (Y)' },
  { date: '21/04/26', time: '18:30', competition: 'GCL', opponent: 'Sharpness', venue: 'A', result: 'W 3-2', scorers: 'J Cole, T Merrett, M Tovey', cards: 'K Cooper (Y), T Merrett (Y)' },
  { date: '28/04/26', time: '18:30', competition: 'GCL', opponent: 'Chalford', venue: 'A', result: 'D 1-1', scorers: 'F Venables', cards: 'M Tovey (Y)' },
  { date: '02/05/26', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'A', result: 'W 2-1', scorers: 'K Cooper, T Merrett' },
  { date: '04/05/26', time: '15:00', competition: 'GCL', opponent: 'Frampton United', venue: 'H', result: 'L 1-4', scorers: 'T Fry', cards: 'F Joe Frazer (Y)' },
  { date: '06/05/26', time: '18:30', competition: 'GCL', opponent: 'Wick', venue: 'H', result: 'D 1-1', scorers: 'T Merrett' },
  { date: '09/05/26', time: '15:00', competition: 'GCL', opponent: 'Tewkesbury Town', venue: 'H', result: 'L 0-2', cards: 'K Cooper (Y), T Merrett (Y)' },
  { date: '12/05/26', time: '18:30', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'A', result: 'D 2-2', scorers: 'F Joe Frazer, D Quick' },
]

export type ReserveFixture = {
  date: string
  time: string
  competition: string
  opponent: string
  venue: 'H' | 'A'
  ground: string
  result?: string
  scorers?: string
  cards?: string
}

/** 2026/27 reserve fixtures — cleared pending the new league schedule. */
export const reserveFixtures: ReserveFixture[] = []

/**
 * Archived 2024/25 reserve fixtures & results — Bristol & Suburban League,
 * Division Four, finished 4th (P18 W11 D3 L4, 25-13, 36pts).
 */
export const reserveFixtures2024_25: ReserveFixture[] = [
  { date: '07/09/24', time: '14:00', competition: 'BSD4', opponent: 'Hartcliffe FC First', venue: 'H', ground: 'Elm Park', result: 'W 2-1' },
  { date: '14/09/24', time: '14:00', competition: 'BSD4', opponent: 'Broad Plain House Reserves', venue: 'A', ground: 'Creswicke Road', result: 'L 0-1', cards: 'J Reid (Y), J Phillipps (Y)' },
  { date: '28/09/24', time: '14:00', competition: 'BSD4', opponent: 'Easton Cowboys Reserves', venue: 'H', ground: 'Elm Park', result: 'W 1-0', scorers: 'R Nixon', cards: 'C Horseman (Y), R Nixon (Y), H Bailey (Y), J Phillipps (Y)' },
  { date: '12/10/24', time: '14:00', competition: 'ABC', opponent: 'Mendip Broadwalk Res', venue: 'A', ground: 'Filwood Park Playing Fields', result: 'L 1-2', scorers: 'F Pereira' },
  { date: '26/10/24', time: '14:00', competition: 'BSD4', opponent: 'Phoenix NextGen First', venue: 'A', ground: 'Netham Park', result: 'L 0-4', cards: 'C Horseman (Y), J Reid (Y)' },
  { date: '02/11/24', time: '14:00', competition: 'BSD4', opponent: 'Avonmouth Reserves', venue: 'H', ground: 'Elm Park', result: 'W 1-0', scorers: 'B Reed' },
  { date: '09/11/24', time: '14:00', competition: 'BSD4', opponent: 'Fishponds Old Boys 1st', venue: 'H', ground: 'Elm Park', result: 'W 1-0', scorers: 'H Bailey' },
  { date: '16/11/24', time: '14:00', competition: 'BSD4', opponent: 'Almondsbury Reserves', venue: 'H', ground: 'Elm Park', result: 'D 1-1', scorers: 'B Bennett', cards: 'A Allen (R)' },
  { date: '23/11/24', time: '14:00', competition: 'BSD4', opponent: 'Lawrence Weston Athletic Saturday First', venue: 'H', ground: 'Elm Park', result: 'W 5-1', scorers: 'L Dart, C Peacock, B Reed, F Pereira' },
  { date: '14/12/24', time: '14:00', competition: 'BSD4', opponent: 'Brislington 2nd', venue: 'A', ground: 'Brislington 2nd', result: 'W 3-0', scorers: 'H Bailey, J (Jay) Moore, B Reed', cards: 'C Horseman (Y)' },
  { date: '21/12/24', time: '14:00', competition: 'BSD4', opponent: 'Broad Plain House Reserves', venue: 'H', ground: 'Elm Park', result: 'L 0-1', cards: 'T Brunt (Y), J Phillipps (Y)' },
  { date: '01/02/25', time: '14:00', competition: 'BSD4', opponent: 'Avonmouth Reserves', venue: 'A', ground: 'St Bedes Catholic College', result: 'L 0-2', cards: 'B Reed (Y)' },
  { date: '08/02/25', time: '14:00', competition: 'BSD4', opponent: 'Fishponds Old Boys 1st', venue: 'A', ground: 'Downend Sports Centre', result: 'W 2-0', scorers: 'B Reed' },
  { date: '01/03/25', time: '14:00', competition: 'BSD4', opponent: 'Lawrence Weston Athletic Saturday First', venue: 'A', ground: 'Kings Weston Sports Club', result: 'W 3-1', scorers: 'H Bailey, B Reed', cards: 'H Bailey (Y), C Horseman (Y), R Nixon (Y)' },
  { date: '08/03/25', time: '14:00', competition: 'BSD4', opponent: 'Brislington 2nd', venue: 'H', ground: 'Elm Park', result: 'W (walkover)' },
  { date: '22/03/25', time: '14:00', competition: 'BSD4', opponent: 'Hartcliffe FC First', venue: 'A', ground: 'Creswicke Road', result: 'D 1-1', scorers: 'R Nixon', cards: 'J Phillipps (R)' },
  { date: '05/04/25', time: '14:00', competition: 'BSD4', opponent: 'Easton Cowboys Reserves', venue: 'A', ground: 'Whitehall Sports Ground (Packers)', result: 'W 4-0', scorers: 'L Dart, R Nixon, B Reed, H Bailey' },
  { date: '09/04/25', time: '18:15', competition: 'BSD4', opponent: 'Phoenix NextGen First', venue: 'H', ground: 'Elm Park', result: 'W 1-0', scorers: 'Y Abdulrahman', cards: 'T Brunt (Y), H Bailey (Y)' },
  { date: '12/04/25', time: '14:00', competition: 'BSD4', opponent: 'Almondsbury Reserves', venue: 'A', ground: 'Elm Park', result: 'D 0-0', cards: 'A Perry (Y)' },
]

/**
 * Archived 2025/26 reserve fixtures & results — Bristol & Suburban League,
 * Senior division, finished 3rd (P20 W15 D2 L3, 46-15, 47pts). Scorers/cards
 * are partial where FA Full-Time didn't attribute every goal to a player.
 */
export const reserveFixtures2025_26: ReserveFixture[] = [
  { date: '13/09/25', time: '14:00', competition: 'SEN', opponent: 'Lawrence Weston Athletic Saturday First', venue: 'H', ground: 'Elm Park', result: 'W 6-0', scorers: 'T Boulton, S Hassan, M Hoare, R Nixon', cards: 'B Reed (Y), J Saunders (Y)' },
  { date: '27/09/25', time: '14:00', competition: 'SEN', opponent: 'Brislington 2nd', venue: 'A', ground: 'Ironmould Lane', result: 'W 1-0', scorers: 'H Fay', cards: 'T Evans (Y), R Whalen (Y), A Allen (Y)' },
  { date: '04/10/25', time: '14:00', competition: 'ABC', opponent: 'Almondsbury Reserves', venue: 'A', ground: 'The Field', result: 'L 1-3', scorers: 'T Boulton' },
  { date: '11/10/25', time: '14:00', competition: 'SEN', opponent: 'Hartcliffe FC First', venue: 'A', ground: 'Creswicke Road', result: 'W 3-1', scorers: 'L Dart, J Saunders, K Terry' },
  { date: '25/10/25', time: '14:00', competition: 'SEN', opponent: 'Mendip Broadwalk Res', venue: 'H', ground: 'Elm Park', result: 'W 2-0', scorers: 'L Dart, R Whalen', cards: 'T Brunt (Y), J Saunders (Y), N Radford (Y)' },
  { date: '22/11/25', time: '14:00', competition: 'SEN', opponent: 'Cosmos UK Saturday First', venue: 'H', ground: 'Elm Park', result: 'L 0-3', cards: 'T Brunt (Y)' },
  { date: '10/01/26', time: '14:00', competition: 'SEN', opponent: 'Brislington 2nd', venue: 'H', ground: 'Elm Park', result: 'D 0-0', cards: 'T Evans (Y), R Jones (Y), J Mitchell (Y), B Reed (Y)' },
  { date: '14/02/26', time: '14:00', competition: 'SEN', opponent: 'Wessex Wanderers Reserves', venue: 'H', ground: 'Patchway School', result: 'W 4-2', scorers: 'S Hassan, M Hoare, K Terry' },
  { date: '21/02/26', time: '14:00', competition: 'SEN', opponent: 'Broad Plain House Reserves', venue: 'H', ground: 'Elm Park', result: 'W 5-0', scorers: 'M Hoare, R Nixon, K Terry, K Adan, J Mitchell' },
  { date: '28/02/26', time: '14:00', competition: 'SEN', opponent: 'Fishponds Old Boys 1st', venue: 'H', ground: 'St Bedes Catholic College #1', result: 'W 2-0', scorers: 'S Hassan, B Reed', cards: 'R Jones (Y)' },
  { date: '07/03/26', time: '14:00', competition: 'SEN', opponent: 'AFC Bohemia First', venue: 'H', ground: 'Elm Park', result: 'L 0-1', cards: 'T Brunt (Y), R Jones (Y), C Mitchell (Y)' },
  { date: '14/03/26', time: '14:00', competition: 'SEN', opponent: 'Hartcliffe FC First', venue: 'H', ground: 'Elm Park', result: 'W 7-0', scorers: 'T Merrett, B Reed, T Boulton, S Hassan' },
  { date: '21/03/26', time: '14:00', competition: 'SEN', opponent: 'Fishponds Old Boys 1st', venue: 'A', ground: 'King George V Playing Field (Downend)', result: 'L 0-2', cards: 'A Allen (Y), L Dart (Y), M Hoare (Y)' },
  { date: '28/03/26', time: '14:00', competition: 'SEN', opponent: 'Bromley Heath United Reserves', venue: 'H', ground: 'Elm Park', result: 'W 4-0', scorers: 'A Allen, K Henry, B Phillips' },
  { date: '04/04/26', time: '13:00', competition: 'SEN', opponent: 'Cosmos UK Saturday First', venue: 'A', ground: 'Oakland\'s Park', result: 'W 2-0', scorers: 'M Hoare, B Reed' },
  { date: '11/04/26', time: '14:00', competition: 'SEN', opponent: 'AFC Bohemia First', venue: 'A', ground: 'Bawa Leisure', result: 'W 4-2', scorers: 'A Allen, K Cooper, M Hoare, T Merrett' },
  { date: '18/04/26', time: '14:00', competition: 'SEN', opponent: 'Wessex Wanderers Reserves', venue: 'A', ground: 'Lockleaze Sports Club', result: 'W 1-0', scorers: 'T Boulton' },
  { date: '21/04/26', time: '19:30', competition: 'SEN', opponent: 'Mendip Broadwalk Res', venue: 'A', ground: 'Filwood Park Playing Fields', result: 'D 1-1', scorers: 'B Reed' },
  { date: '25/04/26', time: '14:00', competition: 'SEN', opponent: 'Lawrence Weston Athletic Saturday First', venue: 'A', ground: 'Kings Weston Sports Club', result: 'W 4-3', scorers: 'T Brunt, T Merrett, E Wilson, T Boulton' },
  { date: '28/04/26', time: '18:30', competition: 'SEN', opponent: 'Bromley Heath United Reserves', venue: 'A', ground: 'Pomphrey Hill', result: 'W (walkover)' },
  { date: '02/05/26', time: '14:00', competition: 'SEN', opponent: 'Broad Plain House Reserves', venue: 'A', ground: 'Filwood Park Playing Fields', result: 'W (walkover)' },
]

export type TableRow = { pos: number; team: string; p: number; w: number; d: number; l: number; f: number; a: number; gd: number; pts: number }

/**
 * 2026/27 league table — Marcliff Gloucestershire County Football League,
 * Division 1. Updated from FA Full-Time; the live/full version (with all results
 * and scorers) is linked from the table section. Snapshot after matchday 1.
 */
export const leagueTable: TableRow[] = [
  { pos: 1, team: 'Bishops Cleeve Development', p: 1, w: 1, d: 0, l: 0, f: 2, a: 0, gd: 2, pts: 3 },
  { pos: 2, team: 'University of Bristol', p: 1, w: 1, d: 0, l: 0, f: 2, a: 1, gd: 1, pts: 3 },
  { pos: 3, team: 'Henbury & Rockleaze', p: 1, w: 1, d: 0, l: 0, f: 1, a: 0, gd: 1, pts: 3 },
  { pos: 4, team: 'Longlevens Reserves', p: 1, w: 0, d: 1, l: 0, f: 2, a: 2, gd: 0, pts: 1 },
  { pos: 5, team: 'Quedgeley Wanderers', p: 1, w: 0, d: 1, l: 0, f: 2, a: 2, gd: 0, pts: 1 },
  { pos: 6, team: 'Frampton United', p: 1, w: 0, d: 1, l: 0, f: 1, a: 1, gd: 0, pts: 1 },
  { pos: 7, team: 'Wick', p: 1, w: 0, d: 1, l: 0, f: 1, a: 1, gd: 0, pts: 1 },
  { pos: 8, team: 'Chalford', p: 1, w: 0, d: 1, l: 0, f: 0, a: 0, gd: 0, pts: 1 },
  { pos: 9, team: 'Stoke Gifford SGS United', p: 1, w: 0, d: 1, l: 0, f: 0, a: 0, gd: 0, pts: 1 },
  { pos: 10, team: 'Broadwell Amateurs', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 11, team: 'Ruardean Hill Rangers', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 12, team: 'Tewkesbury Town', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 13, team: 'Filton Athletic', p: 1, w: 0, d: 0, l: 1, f: 1, a: 2, gd: -1, pts: 0 },
  { pos: 14, team: 'Totterdown United', p: 1, w: 0, d: 0, l: 1, f: 0, a: 1, gd: -1, pts: 0 },
  { pos: 15, team: 'AFC Mangotsfield Rocks', p: 1, w: 0, d: 0, l: 1, f: 0, a: 2, gd: -2, pts: 0 },
]

/** Archived final 2023/24 league table — Bristol & Suburban Premier Division. Filton finished 1st, Champions. */
export const leagueTable2023_24: TableRow[] = [
  { pos: 1, team: 'Filton Athletic', p: 22, w: 18, d: 3, l: 1, f: 72, a: 18, gd: 54, pts: 57 },
  { pos: 2, team: 'Broad Plain House', p: 22, w: 16, d: 3, l: 3, f: 73, a: 34, gd: 39, pts: 51 },
  { pos: 3, team: 'Wessex Wanderers', p: 22, w: 15, d: 2, l: 5, f: 61, a: 28, gd: 33, pts: 47 },
  { pos: 4, team: 'Bristol Spartak', p: 22, w: 13, d: 3, l: 6, f: 59, a: 29, gd: 30, pts: 42 },
  { pos: 5, team: 'Stoke Gifford United Res', p: 22, w: 10, d: 3, l: 9, f: 44, a: 45, gd: -1, pts: 33 },
  { pos: 6, team: 'Easton Cowboys', p: 21, w: 9, d: 4, l: 8, f: 49, a: 42, gd: 7, pts: 31 },
  { pos: 7, team: 'Redbridge', p: 22, w: 9, d: 3, l: 10, f: 59, a: 56, gd: 3, pts: 30 },
  { pos: 8, team: 'Southmead CS Athletic', p: 22, w: 9, d: 2, l: 11, f: 33, a: 46, gd: -13, pts: 29 },
  { pos: 9, team: 'Old Cothamians', p: 22, w: 6, d: 4, l: 12, f: 36, a: 49, gd: -13, pts: 22 },
  { pos: 10, team: 'Rockleaze Rangers Res', p: 22, w: 5, d: 4, l: 13, f: 44, a: 64, gd: -20, pts: 19 },
  { pos: 11, team: 'St Aldhelms', p: 22, w: 3, d: 1, l: 18, f: 31, a: 93, gd: -62, pts: 10 },
  { pos: 12, team: 'Lawrence Weston Athletic Saturday', p: 21, w: 2, d: 0, l: 19, f: 23, a: 80, gd: -57, pts: 2 },
]

/** Archived final 2024/25 league table — Division 1. */
export const leagueTable2024_25: TableRow[] = [
  { pos: 1, team: 'Almondsbury', p: 30, w: 20, d: 4, l: 6, f: 61, a: 30, gd: 31, pts: 64 },
  { pos: 2, team: 'Stoke Gifford SGS United', p: 30, w: 19, d: 5, l: 6, f: 72, a: 26, gd: 46, pts: 62 },
  { pos: 3, team: 'Frampton United', p: 30, w: 19, d: 5, l: 6, f: 75, a: 30, gd: 45, pts: 62 },
  { pos: 4, team: 'Wick', p: 30, w: 19, d: 3, l: 8, f: 89, a: 47, gd: 42, pts: 60 },
  { pos: 5, team: 'Sharpness', p: 30, w: 17, d: 8, l: 5, f: 65, a: 29, gd: 36, pts: 59 },
  { pos: 6, team: 'Filton Athletic', p: 30, w: 16, d: 11, l: 3, f: 62, a: 35, gd: 27, pts: 59 },
  { pos: 7, team: 'Chalford', p: 30, w: 13, d: 8, l: 9, f: 46, a: 35, gd: 11, pts: 47 },
  { pos: 8, team: 'Bromley Heath United', p: 30, w: 13, d: 3, l: 14, f: 55, a: 44, gd: 11, pts: 42 },
  { pos: 9, team: 'Henbury & Rockleaze', p: 30, w: 10, d: 10, l: 10, f: 45, a: 48, gd: -3, pts: 40 },
  { pos: 10, team: 'Totterdown United', p: 30, w: 11, d: 3, l: 16, f: 44, a: 68, gd: -24, pts: 36 },
  { pos: 11, team: 'Ruardean Hill Rangers', p: 30, w: 10, d: 5, l: 15, f: 47, a: 54, gd: -7, pts: 35 },
  { pos: 12, team: 'Broadwell Amateurs', p: 30, w: 8, d: 8, l: 14, f: 35, a: 54, gd: -19, pts: 32 },
  { pos: 13, team: 'Hanham Athletic', p: 30, w: 9, d: 4, l: 17, f: 61, a: 85, gd: -24, pts: 27 },
  { pos: 14, team: 'Quedgeley Wanderers', p: 30, w: 5, d: 7, l: 18, f: 25, a: 71, gd: -46, pts: 22 },
  { pos: 15, team: 'Cheltenham Civil Service', p: 30, w: 4, d: 3, l: 23, f: 26, a: 87, gd: -61, pts: 15 },
  { pos: 16, team: 'Gala Wilton', p: 30, w: 3, d: 1, l: 26, f: 22, a: 87, gd: -65, pts: 10 },
]

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

/**
 * 2026/27 A's division table — Bristol & Suburban League, Division Three.
 * Pre-season: fixtures aren't confirmed yet, so every club shows zeros
 * (listed alphabetically, per the league's own pre-season table).
 */
export const asTeamTable: TableRow[] = [
  { pos: 1, team: 'AFC Bristol AFC Bristol', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 2, team: 'AJA Athletic 1st', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 3, team: 'Almondsbury A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 4, team: 'Avonmouth A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 5, team: 'Bristol Phoenix Firsts', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 6, team: 'Bristol Wanderers Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 7, team: 'Bromley Heath United A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 8, team: 'Cosmos UK Saturday Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 9, team: 'Easton Cowboys A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 10, team: 'Eighty One United 1st', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 11, team: 'Filton Athletic A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 12, team: 'Hanham Abbotonians Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 13, team: 'Hartcliffe FC Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 14, team: 'Imperial A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 15, team: 'Lockleaze Community First', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 16, team: 'Made For Ever Development', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 17, team: 'Parson Street Old Boys Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 18, team: 'Phoenix NextGen Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 19, team: 'Rockleaze Rangers C', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 20, team: 'Shaftesbury Crusade A', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 21, team: 'St Aldhelms Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 22, team: 'St Vallier First', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 23, team: 'Tytherington Rocks Reserves', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
  { pos: 24, team: 'Wessex Wanderers Colts', p: 0, w: 0, d: 0, l: 0, f: 0, a: 0, gd: 0, pts: 0 },
]

/** Archived final 2024/25 reserve league table — Division Four. */
export const reserveTable2024_25: TableRow[] = [
  { pos: 1, team: 'Avonmouth Reserves', p: 18, w: 15, d: 0, l: 3, f: 48, a: 20, gd: 28, pts: 45 },
  { pos: 2, team: 'Phoenix NextGen First', p: 17, w: 13, d: 2, l: 2, f: 55, a: 29, gd: 26, pts: 41 },
  { pos: 3, team: 'Almondsbury Reserves', p: 18, w: 11, d: 3, l: 4, f: 45, a: 30, gd: 15, pts: 36 },
  { pos: 4, team: 'Filton Athletic Reserves', p: 18, w: 11, d: 3, l: 4, f: 25, a: 13, gd: 12, pts: 36 },
  { pos: 5, team: 'Hartcliffe FC First', p: 18, w: 7, d: 3, l: 8, f: 34, a: 34, gd: 0, pts: 24 },
  { pos: 6, team: 'Broad Plain House Reserves', p: 18, w: 7, d: 0, l: 11, f: 22, a: 29, gd: -7, pts: 21 },
  { pos: 7, team: 'Lawrence Weston Athletic Saturday First', p: 18, w: 5, d: 2, l: 11, f: 34, a: 60, gd: -26, pts: 17 },
  { pos: 8, team: 'Brislington 2nd', p: 18, w: 4, d: 3, l: 11, f: 26, a: 46, gd: -20, pts: 15 },
  { pos: 9, team: 'Fishponds Old Boys 1st', p: 17, w: 4, d: 1, l: 12, f: 32, a: 45, gd: -13, pts: 13 },
  { pos: 10, team: 'Easton Cowboys Reserves', p: 18, w: 2, d: 3, l: 13, f: 30, a: 45, gd: -15, pts: 8 },
]

/** Archived final 2025/26 reserve league table — Senior division. */
export const reserveTable2025_26: TableRow[] = [
  { pos: 1, team: 'Mendip Broadwalk Res', p: 20, w: 15, d: 3, l: 2, f: 61, a: 13, gd: 48, pts: 48 },
  { pos: 2, team: 'AFC Bohemia First', p: 20, w: 15, d: 2, l: 3, f: 80, a: 31, gd: 49, pts: 47 },
  { pos: 3, team: 'Filton Athletic Reserves', p: 20, w: 15, d: 2, l: 3, f: 46, a: 15, gd: 31, pts: 47 },
  { pos: 4, team: 'Cosmos UK Saturday First', p: 20, w: 14, d: 2, l: 4, f: 57, a: 25, gd: 32, pts: 44 },
  { pos: 5, team: 'Wessex Wanderers Reserves', p: 20, w: 8, d: 5, l: 7, f: 46, a: 43, gd: 3, pts: 29 },
  { pos: 6, team: 'Brislington 2nd', p: 20, w: 7, d: 3, l: 10, f: 49, a: 53, gd: -4, pts: 24 },
  { pos: 7, team: 'Hartcliffe FC First', p: 20, w: 7, d: 3, l: 10, f: 38, a: 64, gd: -26, pts: 24 },
  { pos: 8, team: 'Bromley Heath United Reserves', p: 20, w: 5, d: 2, l: 13, f: 35, a: 59, gd: -24, pts: 17 },
  { pos: 9, team: 'Lawrence Weston Athletic Saturday First', p: 20, w: 5, d: 1, l: 14, f: 30, a: 85, gd: -55, pts: 16 },
  { pos: 10, team: 'Fishponds Old Boys 1st', p: 20, w: 3, d: 3, l: 14, f: 34, a: 66, gd: -32, pts: 12 },
  { pos: 11, team: 'Broad Plain House Reserves', p: 20, w: 3, d: 0, l: 17, f: 26, a: 48, gd: -22, pts: 9 },
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
