import { firstTeamFixtures, type Fixture } from './club'

/**
 * Opponent previews — a "get to know Saturday's visitors" page published ahead
 * of each game, before the full matchday programme is ready.
 *
 * To add a preview: drop a new entry in `opponentPreviews` keyed by a slug, set
 * `fixtureOpponent` to the exact opponent string used in the fixture list
 * (src/data/club.ts) so the page can pull the date, venue and competition, then
 * fill in whatever the club has sent over. Every field except slug/name/
 * fixtureOpponent is optional — omit one and that section is simply skipped.
 *
 * The page lives at /preview/<slug>, is linked from the homepage "Next match"
 * card, and is prerendered for social/link sharing.
 */

export type OpponentPlayer = {
  name: string
  position: string
  age?: number
}

export type OpponentPreview = {
  slug: string
  /** Full display name, e.g. "University of Bristol AFC". */
  name: string
  /** Exact opponent string in the fixture list, used to find the fixture. */
  fixtureOpponent: string
  nickname?: string
  /** Short tag for the page, e.g. "Season opener" or "Local derby". */
  occasion?: string
  history: string[]
  quickFacts?: { label: string; value: string }[]
  honours?: string[]
  manager?: string
  /** Notable players with position and age. */
  keyPlayers?: OpponentPlayer[]
  /** Full named squad; markers like "(C)", "(GK)" are shown as printed. */
  fullSquad?: string[]
  /** Where the club history / squad came from (shown as a small footnote). */
  sourceNote?: string
}

export const opponentPreviews: OpponentPreview[] = [
  {
    slug: 'university-of-bristol',
    name: 'University of Bristol AFC',
    fixtureOpponent: 'University of Bristol',
    occasion: 'Season opener',
    history: [
      'The University of Bristol Athletic Football Club (UBAFC) has competed in British Universities and College Sport (BUCS) competitions since it was formed in 2008. UBAFC runs six teams across the BUCS Aldi Men’s Western Leagues, from the sixth tier to the first, alongside a Saturday team created in 2023 which now plays in the Gloucestershire County Football League. It is one of the largest, most sociable and most successful clubs at the University of Bristol.',
      'It has been a successful few years. The First Team won BUCS Division 1 in 2020 and 2025, and secured promotion to the Men’s Premier South Division after winning the promotion play-off against the University of Sussex in 2026. In the Saturday team’s debut season in 2023/24 they finished runners-up in Hellenic Division Two West and won the Bateman Sports Chairmans Challenge Cup, beating Letcombe, before losing the Marsh Supplementary Challenge Cup final to FC Stratford on penalties.',
      'In 2024/25 the Saturday side finished 3rd in Hellenic Division Two and reached the quarter-finals of the Marsh Challenge Cup, losing narrowly to Hellenic Premier Division outfit Fairford Town. They also retained the Bateman Sports Chairmans Challenge Cup, beating Swindon Supermarine 5-0 in the final.',
      'The 2025/26 season saw UBAFC win the Hellenic League Alliance West title and beat Iron Acton in the promotion play-off to reach the Gloucestershire County Football League — the highest level in the club’s history. The Saturday team was set up to give players more game time and a taste of men’s football before they finish their studies, and the goal in the seasons ahead is to keep providing those opportunities while competing hard in every league and cup.',
    ],
    quickFacts: [
      { label: 'Club formed', value: '2008 (Saturday team, 2023)' },
      { label: 'Manager', value: 'Alan Tyers' },
      { label: 'This season', value: 'Gloucestershire County League — their first at this level' },
      { label: 'Last season', value: 'Hellenic League Alliance West champions, 2025/26' },
    ],
    honours: [
      'Gloucestershire County League — promoted 2025/26 (via play-off vs Iron Acton)',
      'Hellenic League Alliance West champions, 2025/26',
      'Bateman Sports Chairmans Challenge Cup winners, 2023/24 & 2024/25',
      'BUCS Division 1 champions (First Team), 2020 & 2025',
    ],
    manager: 'Alan Tyers',
    keyPlayers: [
      { name: 'James Harwood', position: 'Goalkeeper', age: 19 },
      { name: 'Pranav Ganti', position: 'Goalkeeper', age: 19 },
      { name: 'Toby Swift', position: 'Right-back', age: 21 },
      { name: 'Zach Twaddle', position: 'Centre-back', age: 20 },
      { name: 'Jason Pool', position: 'Centre-back', age: 20 },
      { name: 'Miles Whilby', position: 'Centre-back', age: 20 },
      { name: 'Lewis Johnstone', position: 'Centre-back', age: 21 },
      { name: 'Jimi Adesanya', position: 'Centre-back', age: 19 },
      { name: 'Sammy Morgan', position: 'Left-back', age: 21 },
      { name: 'Sam Guildford', position: 'Centre-back', age: 20 },
      { name: 'Jamie Goodwin', position: 'Central midfield (Captain)', age: 21 },
      { name: 'Arthur Baldwin', position: 'Central midfield', age: 20 },
      { name: 'Jonty Sinclair', position: 'Central midfield', age: 21 },
      { name: 'Edgar Van Parys', position: 'Central midfield', age: 20 },
      { name: 'Khoa Dao', position: 'Right wing', age: 20 },
      { name: 'Jake Wintour', position: 'Right wing', age: 19 },
      { name: 'Lucas Menezes', position: 'Left wing', age: 20 },
      { name: 'Gab Morgante', position: 'Left wing', age: 20 },
      { name: 'Seb Tolosa', position: 'Striker', age: 20 },
      { name: 'Nasser Abdel', position: 'Striker', age: 25 },
    ],
    fullSquad: [
      'Jamie Goodwin (C)',
      'Toby Swift (VC)',
      'James Harwood (GK)',
      'Max Diment (GK)',
      'Pranav Ganti (GK)',
      'Jason Pool',
      'Zeb Buckeridge',
      'Ralph Rushton',
      'Zach Twaddle',
      'Jimi Adesanya',
      'Miles Whilby',
      'Lewis Johnstone',
      'Jack Powell',
      'Sam Guilford',
      'Sammy Morgan',
      'Callum Goon',
      'Arthur Baldwin',
      'Jonty Sinclair',
      'Nemo Al-Qaq',
      'Khoa Dao',
      'Edgar Van Parys',
      'Callum Bleasdale',
      'Lucas Menezes',
      'Faniki Deche',
      'Jake Wintour',
      'Nasser Abdel',
      'Sebastian Tolosa',
    ],
    sourceNote: 'Club history and squad details supplied by University of Bristol AFC.',
  },
  {
    slug: 'tewkesbury-town',
    name: 'Tewkesbury Town FC',
    fixtureOpponent: 'Tewkesbury Town',
    history: [
      'Tewkesbury Town returned to Whaddon Road in 2018/19 for the Senior Charity Cup and this time came away victorious.',
      'In 2021/22 the club won promotion to the Gloucestershire Northern Senior League for the first time, and in their second season lifted the GNSL Division 2 title to earn promotion to GNSL Division 1.',
      'In 2023/24 they established a Saturday Development (3rd) team in the Cheltenham league, taking the club to four senior men’s teams plus a Veterans side.',
      '2024/25 was one of the most successful seasons in the club’s history: the first team were crowned champions of Gloucestershire Northern Senior League 1 and won promotion to the Gloucestershire County League via a play-off, lifting the Reg Davis League Cup along the way. The reserves finished league runners-up and also went up, the Development team gained promotion, and the Sunday side won the Evesham Sunday League.',
      'In 2025/26 their first team competed in the Gloucestershire County League for the first time in the club’s history, and with a new intake of U18s stepping up they launched a fourth Saturday team to develop them into senior football.',
    ],
    sourceNote: 'Club history supplied in the Filton Athletic matchday programme.',
  },
]

export function getOpponentPreview(slug: string | undefined): OpponentPreview | undefined {
  return opponentPreviews.find((p) => p.slug === slug)
}

/** The preview for a given fixture opponent, if one exists. */
export function previewForOpponent(opponent: string): OpponentPreview | undefined {
  return opponentPreviews.find((p) => p.fixtureOpponent === opponent)
}

/** The upcoming (result-less) first-team fixture this preview is for, if any. */
export function fixtureForPreview(preview: OpponentPreview): Fixture | undefined {
  return firstTeamFixtures.find((f) => f.opponent === preview.fixtureOpponent && !f.result)
}
