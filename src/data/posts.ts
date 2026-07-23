export type Post = {
  slug: string
  title: string
  date: string
  category: 'Players' | 'Coaches' | 'Volunteers' | 'Youth' | 'Club news'
  excerpt: string
  /** Each string is a paragraph. */
  body: string[]
  contactEmail?: string
  contactName?: string
  contactPhone?: string
}

/**
 * Recruitment and club posts. Add a new object to the top of this array and it
 * automatically appears in the Join Us section and gets its own shareable page
 * at /join/<slug>.
 */
export const posts: Post[] = [
  {
    slug: 'first-team-players-2025-26',
    title: 'First team players wanted for the 2025/26 season',
    date: '2025-09-27',
    category: 'Players',
    excerpt:
      'We are always looking to add to our squad as we push up the Marcliff Gloucestershire County Football League.',
    body: [
      'Filton Athletic are looking for committed players to add to our first team squad. We compete in the Marcliff Gloucestershire County Football League, having been promoted as Champions from the Bristol & Suburban Premier Division in 2023-24.',
      'Under new management this season we are building a side that plays on the front foot, and we want players who will work hard for each other. Training and home matches are at BBS Park North, Filton Leisure Centre, Elm Park.',
      'Whatever your position, if you think you can add something to the group we would love to hear from you. Come down, meet the lads and see what the club is about.',
    ],
    contactEmail: 'filtonathleticfc@outlook.com',
  },
  {
    slug: 'reserve-team-players',
    title: 'Reserve team looking for players',
    date: '2025-09-27',
    category: 'Players',
    excerpt:
      'Our Reserves compete in the Bristol & Suburban Senior Division and are keen to hear from players of all levels.',
    body: [
      'Our Reserve team play in the Bristol & Suburban Senior Division and are always open to new players looking for regular Saturday football.',
      'The Reserves are a genuine route into the first team — several of our current first team squad stepped up from the Reserves. Just as importantly, it is a good group of lads who enjoy their football.',
      'Home games are played at BBS Park North, Elm Park, Filton. Get in touch if you would like to come along to a session.',
    ],
    contactEmail: 'filtonathleticfc@outlook.com',
  },
  {
    slug: 'youth-players-and-coaches',
    title: 'Youth players and volunteer coaches wanted',
    date: '2025-09-27',
    category: 'Youth',
    excerpt:
      'Filton Athletic Youth run teams from YDS through to U12s — mixed groups of boys and girls, all welcome.',
    body: [
      'Filton Athletic Youth FC was established in 2023 and now runs teams across YDS (Year 1 and below), U7s, U8s, U9s, U10s, U11s and U12s. Our groups are mixed, with boys and girls playing together.',
      'All of our coaches are FA qualified and DBS checked. The emphasis is on being part of a team and, most importantly, having fun.',
      'We are also looking for volunteer coaches and helpers. If you can spare some time on a weekend and want to get involved, we will support you through your FA qualifications and DBS check.',
      'Home games and training are at BBS Park North, Elm Park, Filton.',
    ],
    contactEmail: 'filtonathleticfc@outlook.com',
    contactName: 'Kev or Ollie',
    contactPhone: 'Kev 07710 581381 · Ollie 07429 595476',
  },
  {
    slug: 'volunteers-and-committee',
    title: 'Get involved off the pitch — volunteers welcome',
    date: '2025-09-27',
    category: 'Volunteers',
    excerpt:
      'The club is run entirely by volunteers, and there is always a job to be done on a matchday.',
    body: [
      'Filton Athletic is run by an enthusiastic and committed committee who have the drive and ambition to move the club forward both on and off the field — and we welcome anyone who wishes to get involved.',
      'There are plenty of ways to help: matchday setup, running the line, helping at the Filton Feast after games, social media, sponsorship, or joining the committee itself.',
      'You do not need any experience — just a bit of time and enthusiasm. Have a word with any committee member on a matchday or drop us an email.',
    ],
    contactEmail: 'filtonathleticfc@outlook.com',
  },
]

export function getPost(slug: string | undefined) {
  return posts.find((p) => p.slug === slug)
}

export function formatPostDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
