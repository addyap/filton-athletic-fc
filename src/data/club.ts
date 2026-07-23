export const officials = {
  chairman: 'Oliver Keeble',
  viceChairman: 'Paul Woodrow',
  secretary: 'Matt Shipsey',
  committee: [
    'Gary Keary',
    'Jenna Shipsey',
    'Kieran Humby',
    'Luke Selman',
    'Mark Alexander',
    'Mike Slade',
    'Neil Thomas',
    'Pete Jeffery',
    'Ryan Nixon',
  ],
  firstTeamManager: 'Mike Humby',
  firstTeamCoaches: ['Pete Jeffery', 'Mike Slade', 'Dean Willmor'],
  reserveTeamManager: 'Jim Phillipps',
  reserveTeamCoaches: ['Todd Brunt', 'Ryan Nixon'],
}

export type Squaddie = { name: string; position: string; blurb: string }

export const squad: Squaddie[] = [
  { name: 'Barry Phillips', position: 'GK', blurb: "The illustrious Baz, Bristol's answer to Gianluigi Buffon - if Buffon played in a Sunday league and considered not conceding a goal his life's greatest achievement." },
  { name: 'Matty Barry', position: 'GK', blurb: 'Young and highly rated keeper was the saviour of the team when he stepped in last season. Has enormous potential even with his small stature.' },
  { name: 'Chris Hillyer', position: 'Defender', blurb: 'Out and out defender who is quick and strong with a long throw and eye for a pass.' },
  { name: 'Jack Cutler', position: 'Defender', blurb: 'Uncompromising silky defender who is comfortable on the ball. Quick, strong and reads the game better than most.' },
  { name: 'Jack Willmor', position: 'Def/Mid (Vice-Captain)', blurb: 'A strong fast powerful player, leader on the pitch and great communicator.' },
  { name: 'Joe Mitchell', position: 'Def/Mid', blurb: 'Technically gifted and versatile player who performs wherever he plays. Consistent and dependable with a great attitude.' },
  { name: 'Kieran Daniels', position: 'Def/Mid', blurb: 'Dynamic player with a great left foot, can play in multiple positions and provides good options at the back or in midfield.' },
  { name: 'Tom Fry', position: 'Defender', blurb: 'A strong and solid footballer, loves a challenge and great on the ball. In his youth played at BRFC academy.' },
  { name: 'Callum Mitchell', position: 'Midfielder', blurb: 'Energetic midfielder who loves a tackle, good on the ball and has a penalty in the locker when required.' },
  { name: 'Dan Matthews', position: 'Def/Mid', blurb: 'Tenacious player who loves the physical side of the game. Will contribute with goals from midfield and can do a job in defence.' },
  { name: 'Liam Dorman', position: 'Midfielder', blurb: 'Determined player who leads by example, loves to pressure the opposition, and never stops trying to win the ball back.' },
  { name: 'Yusuf Abdulrahman', position: 'Midfielder', blurb: 'Box to box midfielder that never seems to stop running. Not afraid of a strong tackle.' },
  { name: 'Fraser Venables', position: 'Midfielder', blurb: 'Goals and assists sums this guy up, outrageous control and wand of a left foot.' },
  { name: 'Jay Moore', position: 'Midfielder', blurb: "Skilful winger with extremely good feet, can be a defender's nightmare when dribbling at them." },
  { name: 'Jack Cole', position: 'Midfielder', blurb: 'Huge addition to the club when he joined in 2023. Has added pace, power, and creativity to the team.' },
  { name: 'Kyle Thomas', position: 'Mid/Fwd (Captain)', blurb: 'Established attacking midfielder with bundles of ability. Strong on the ball and in the air and a deft touch at set pieces.' },
  { name: 'Fabian Pereira', position: 'Forward', blurb: 'Skilful attacking player, clinical when given the opportunity.' },
  { name: 'Said Hassan', position: 'Forward', blurb: 'Young and promising forward with tons of skill. Top scorer for the Reserves last season.' },
  { name: 'Kieran Cooper', position: 'Forward', blurb: "Big strong forward whose work ethic is second to none and has a worldie in his pocket." },
  { name: 'Trey Merrett', position: 'Forward', blurb: 'Young striker with lightning pace, a great first touch and eye for goal. Top scorer in 2023-24.' },
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

export const firstTeamFixtures: Fixture[] = [
  { date: '10/08/24', time: '15:00', competition: 'GCL', opponent: 'Wick', venue: 'A', result: 'D 1-1', scorers: 'F Venables' },
  { date: '17/08/24', time: '15:00', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'H', result: 'W 2-0', scorers: 'T Merrett, S Hassan' },
  { date: '24/08/24', time: '15:00', competition: 'GCL', opponent: 'Gala Wilton', venue: 'H', result: 'W 4-0', scorers: 'T Merrett 2, F Venables, K Thomas' },
  { date: '07/09/24', time: '15:00', competition: 'LJC', opponent: 'Gala Wilton', venue: 'A', result: 'L 1-2', scorers: 'F Venables' },
  { date: '14/09/24', time: '15:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'A', result: 'L 2-4', scorers: 'T Merrett, K Cooper' },
  { date: '28/09/24', time: '15:00', competition: 'GCL', opponent: 'Cheltenham Civil Service', venue: 'H', result: 'W 4-0', scorers: 'K Cooper 2, T Fry, K Thomas' },
  { date: '05/10/24', time: '15:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'H', result: 'D 2-2', scorers: 'T Merrett, C Hillyer' },
  { date: '12/10/24', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'A', result: 'W 3-1', scorers: 'K Thomas, T Merrett, Y Abdulrahman' },
  { date: '19/10/24', time: '14:00', competition: 'GFA', opponent: 'Sneyd Park First', venue: 'A', result: 'W 11-0', scorers: 'A Lot' },
  { date: '26/10/24', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'H', result: 'L 1-4', scorers: 'J Cole' },
  { date: '09/11/24', time: '14:00', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'H', result: 'D 1-1', scorers: 'T Merrett' },
  { date: '16/11/24', time: '14:00', competition: 'GFA', opponent: 'Stoke Gifford SGS United', venue: 'H', result: 'W 1-0', scorers: 'K Cooper' },
  { date: '23/11/24', time: '14:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'A', result: 'P-P' },
  { date: '30/11/24', time: '14:00', competition: 'GCL', opponent: 'Almondsbury', venue: 'H', result: 'D 2-2', scorers: 'C Mitchell, F Venables' },
  { date: '07/12/24', time: '14:00', competition: 'GCL', opponent: 'Chalford', venue: 'A', result: 'P-P' },
  { date: '14/12/24', time: '14:00', competition: 'GFA', opponent: 'Almondsbury', venue: 'H', result: 'W 3-0', scorers: 'K Thomas 2, F Venables' },
  { date: '21/12/24', time: '14:00', competition: 'GCL', opponent: 'Sharpness', venue: 'H' },
  { date: '28/12/24', time: '14:00', competition: 'GCL', opponent: 'Wick', venue: 'H' },
  { date: '08/01/25', time: '19:30', competition: 'GCL', opponent: 'Stoke Gifford SGS United', venue: 'A' },
  { date: '11/01/25', time: '14:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'H' },
  { date: '18/01/25', time: '14:00', competition: 'GCL', opponent: 'Gala Wilton', venue: 'A' },
  { date: '25/01/25', time: '14:00', competition: 'GCL', opponent: 'Hanham Athletic', venue: 'A' },
  { date: '01/02/25', time: '14:00', competition: 'GCL', opponent: 'Bromley Heath United', venue: 'H' },
  { date: '08/02/25', time: '14:00', competition: 'GFA', opponent: 'Bromley Heath United', venue: 'A' },
  { date: '15/02/25', time: '14:00', competition: 'GCL', opponent: 'Broadwell Amateurs', venue: 'A' },
  { date: '22/02/25', time: '14:00', competition: 'GCL', opponent: 'Frampton United', venue: 'H' },
  { date: '01/03/25', time: '15:00', competition: 'GCL', opponent: 'Ruardean Hill Rangers', venue: 'A' },
  { date: '08/03/25', time: '15:00', competition: 'GCL', opponent: 'Totterdown United', venue: 'H' },
  { date: '22/03/25', time: '15:00', competition: 'GCL', opponent: 'Quedgeley Wanderers', venue: 'H' },
  { date: '29/03/25', time: '15:00', competition: 'GCL', opponent: 'Almondsbury', venue: 'A' },
  { date: '05/04/25', time: '15:00', competition: 'GCL', opponent: 'Chalford', venue: 'H' },
  { date: '12/04/25', time: '15:00', competition: 'GCL', opponent: 'Sharpness', venue: 'A' },
  { date: '16/04/25', time: '18:30', competition: 'GCL', opponent: 'Henbury & Rockleaze', venue: 'A' },
  { date: '19/04/25', time: '15:00', competition: 'GCL', opponent: 'Cheltenham Civil Service', venue: 'A' },
]

export type TableRow = { pos: number; team: string; p: number; w: number; d: number; l: number; f: number; a: number; gd: number; pts: number }

export const leagueTable: TableRow[] = [
  { pos: 1, team: 'Almondsbury', p: 12, w: 9, d: 2, l: 1, f: 22, a: 7, gd: 15, pts: 29 },
  { pos: 2, team: 'Sharpness', p: 12, w: 8, d: 3, l: 1, f: 32, a: 14, gd: 18, pts: 27 },
  { pos: 3, team: 'Stoke Gifford SGS United', p: 13, w: 8, d: 1, l: 4, f: 27, a: 13, gd: 14, pts: 25 },
  { pos: 4, team: 'Frampton United', p: 10, w: 7, d: 2, l: 1, f: 31, a: 11, gd: 20, pts: 23 },
  { pos: 5, team: 'Wick', p: 11, w: 7, d: 2, l: 2, f: 29, a: 15, gd: 14, pts: 23 },
  { pos: 6, team: 'Chalford', p: 11, w: 5, d: 3, l: 3, f: 18, a: 12, gd: 6, pts: 18 },
  { pos: 7, team: 'Ruardean Hill Rangers', p: 11, w: 5, d: 2, l: 4, f: 22, a: 18, gd: 4, pts: 17 },
  { pos: 8, team: 'Filton Athletic', p: 10, w: 4, d: 4, l: 2, f: 22, a: 15, gd: 7, pts: 16 },
  { pos: 9, team: 'Hanham Athletic', p: 10, w: 4, d: 1, l: 5, f: 25, a: 26, gd: -1, pts: 13 },
  { pos: 10, team: 'Bromley Heath United', p: 10, w: 4, d: 0, l: 6, f: 21, a: 16, gd: 5, pts: 12 },
  { pos: 11, team: 'Broadwell Amateurs', p: 11, w: 3, d: 2, l: 6, f: 14, a: 22, gd: -8, pts: 11 },
  { pos: 12, team: 'Totterdown United', p: 12, w: 3, d: 2, l: 7, f: 16, a: 32, gd: -16, pts: 11 },
  { pos: 13, team: 'Henbury & Rockleaze', p: 12, w: 2, d: 4, l: 6, f: 14, a: 25, gd: -11, pts: 10 },
  { pos: 14, team: 'Cheltenham Civil Service', p: 11, w: 3, d: 0, l: 8, f: 12, a: 23, gd: -11, pts: 9 },
  { pos: 15, team: 'Gala Wilton', p: 13, w: 3, d: 0, l: 10, f: 9, a: 34, gd: -25, pts: 9 },
  { pos: 16, team: 'Quedgeley Wanderers', p: 13, w: 1, d: 2, l: 10, f: 6, a: 37, gd: -31, pts: 5 },
]

export const reserveTable: TableRow[] = [
  { pos: 1, team: 'Phoenix NextGen First', p: 9, w: 8, d: 1, l: 0, f: 31, a: 15, gd: 16, pts: 25 },
  { pos: 2, team: 'Filton Athletic Reserves', p: 9, w: 6, d: 1, l: 2, f: 14, a: 8, gd: 6, pts: 19 },
  { pos: 3, team: 'Avonmouth Reserves', p: 8, w: 6, d: 0, l: 2, f: 20, a: 9, gd: 11, pts: 18 },
  { pos: 4, team: 'Hartcliffe FC First', p: 8, w: 4, d: 0, l: 4, f: 20, a: 19, gd: 1, pts: 12 },
  { pos: 5, team: 'Almondsbury Reserves', p: 8, w: 3, d: 2, l: 3, f: 21, a: 21, gd: 0, pts: 11 },
  { pos: 6, team: 'Lawrence Weston Athletic Saturday First', p: 10, w: 3, d: 1, l: 6, f: 22, a: 35, gd: -13, pts: 10 },
  { pos: 7, team: 'Broad Plain House Reserves', p: 7, w: 3, d: 0, l: 4, f: 12, a: 16, gd: -4, pts: 9 },
  { pos: 8, team: 'Brislington 2nd', p: 6, w: 2, d: 1, l: 3, f: 9, a: 13, gd: -4, pts: 7 },
  { pos: 9, team: 'Fishponds Old Boys 1st', p: 9, w: 2, d: 1, l: 6, f: 21, a: 27, gd: -6, pts: 7 },
  { pos: 10, team: 'Easton Cowboys Reserves', p: 8, w: 0, d: 1, l: 7, f: 11, a: 18, gd: -7, pts: 1 },
]

export const sponsors = [
  { name: 'The Filton Feast', blurb: 'Café & coffee shop, 156 Station Rd, Bristol, BS34 7JL' },
  { name: 'First Auto Care Techs', blurb: 'Vehicle repairs & servicing at Elberton Garage' },
  { name: 'DM Flooring', blurb: 'Kit sponsor' },
  { name: 'BS3 Building & Carpentry / BS3 Roofing', blurb: 'The complete roofing company' },
  { name: 'GP Rowe Decorating Services', blurb: 'Painting, decorating and wall papering' },
  { name: 'Optimum Flooring', blurb: 'Commercial and domestic flooring' },
]

export const groundInfo = {
  firstTeam: { name: 'Pen Park Sports Ground', address: 'Jarratts Road, Bristol, BS10 6WF' },
  reserves: { name: 'Elm Park', address: 'Filton, Bristol, BS34 7PS' },
}
