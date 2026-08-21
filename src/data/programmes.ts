import {
  firstTeamFixtures,
  firstTeamFixtures2025_26,
  leagueTable2025_26,
  type Fixture,
  type TableRow,
} from './club'

/**
 * Digital matchday programmes.
 *
 * Each HOME first-team fixture automatically becomes a programme at
 * /programme/<slug>. Most of the content (fixtures, league table, squad,
 * sponsors, ground info) is pulled live from ./club.ts, so it can never go
 * stale. On top of that, each match can carry a few hand-written extras below
 * (welcome, dugout notes, visitor profile, charity feature, team sheets).
 *
 * To add the bespoke content for a fixture, add an entry to `programmeExtras`
 * keyed by the fixture slug (slugified opponent name, e.g. 'ruardean-hill-rangers').
 * Everything is optional — omit a field and that section is simply skipped.
 */

export type ProgrammeExtras = {
  /** Sequential programme number, as printed on the cover ("No. 4"). */
  number?: number
  /** URL of the full printable programme PDF (hosted on Vercel Blob). */
  pdfUrl?: string
  /** Chairman's / club welcome for this specific game. */
  welcome?: { author: string; role: string; paragraphs: string[] }
  /** Manager's "From the Dugout" notes. */
  dugout?: { author: string; role: string; matchTitle?: string; paragraphs: string[] }
  /** Profile of the visiting club. */
  visitors?: { name: string; paragraphs: string[] }
  /** Featured charity / good cause. */
  charity?: { name: string; paragraphs: string[]; url?: string }
  /** Named match official. */
  matchOfficial?: string
  /** Team sheets as they appear on matchday. */
  teamSheets?: {
    home: TeamSheet
    away: TeamSheet
  }
}

export type TeamSheet = {
  team: string
  kit?: string
  staff?: string[]
  players: string[]
}

export type Programme = {
  slug: string
  fixture: Fixture
  isoDate: string
  /** e.g. "Saturday 27 September 2025" */
  longDate: string
  competitionName: string
  extras: ProgrammeExtras
  season: '2026/27' | '2025/26'
}

/** Full competition names, keyed by the abbreviations used in the fixture list. */
const competitionNames: Record<string, string> = {
  GCL: 'Marcliff Gloucestershire County Football League',
  LJC: 'Les James League Cup',
  GFA: 'GFA Senior Amateur Cup',
  SEN: 'Bristol & Suburban Senior League',
  ABC: 'Alf Bosley Cup',
  BSP: 'Bristol & Suburban Premier Division',
  BSPC: 'Bristol & Suburban League Cup',
  BSD4: 'Bristol & Suburban League, Division Four',
}

export function competitionName(code: string): string {
  return competitionNames[code] ?? code
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/** Parse the fixture 'DD/MM/YY' date into a real Date. */
function parseFixtureDate(date: string): Date {
  const [dd, mm, yy] = date.split('/').map(Number)
  return new Date(2000 + yy, mm - 1, dd)
}

function isoDate(date: string): string {
  const d = parseFixtureDate(date)
  const mm = String(d.getMonth() + 1).padStart(2, '0')
  const dd = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mm}-${dd}`
}

function longDate(date: string): string {
  return parseFixtureDate(date).toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

/**
 * Hand-written extras for 2025/26 (archived season). Keyed by slugified opponent name.
 */
const programmeExtras2025_26: Record<string, ProgrammeExtras> = {
  'ruardean-hill-rangers': {
    number: 4,
    pdfUrl:
      'https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%204%20-%2027.09.25.pdf',
    welcome: {
      author: 'Ollie Keeble',
      role: 'Chairman, Filton Athletic FC',
      paragraphs: [
        'After almost a month of away games we finally get to another game at home, and we are looking forward to seeing everyone cheer the lads on. In that time, we have advanced to the next round of the cup but have only picked up two points in the league. We do love a draw!!',
        'This weekend we welcome Ruardean Hill Rangers to BBS Park North @ Elm Park who currently sit in eleventh place in the league having only played three games so far. In those three games they have picked up four points with a win, a draw and a loss to their name so far this season. I am sure they will be hoping to double their wins tally against us this weekend.',
        'We currently sit in fourth place on nine points having picked up two wins and three draws so far. Last season the points were shared between the teams with each taking three points home in the away fixtures, so we are expecting a tough game this time around as well. A win this weekend would help us keep up with the top of the table teams and help with some teams around us having played a game less.',
        'Our next game is away and sees us travel up the M5 again to Quedgeley, but the rest of October sees us stay closer to home as in the league Hanham visit BBS Park North and we take the quick trip over to the Lawns to play Cribbs. The other clash in October sees us kick off our GFA cup campaign on the Downs to Saints Old Boys.',
        'We hope to see all the fans as well as all the Ruardean players and coaches back at the feast after the game for some food, some beer and a bit of a disco.',
      ],
    },
    dugout: {
      author: 'Kyle Thomas',
      role: 'First Team Manager',
      matchTitle: 'Filton Athletic vs Ruardean Hill Rangers',
      paragraphs: [
        'Firstly, welcome to the management, players, and supporters of Ruardean. It is the first time we have played a home fixture since the 30th of August, which was our abandoned game against Tiv Rocks.',
        'Six games into the season now and still undefeated. Five in the league and through to the next round in the cup. It has been a positive start given new management, new style of play and a new home ground. Lots to build and work on. Draws against Henbury, Broadwell and Tewkesbury in the league. Similar to last season, we need to start turning some of the draws into wins. Although after a really poor first half performance against Tewkesbury, we had a positive reaction second half and should have won the game in the end. Credit to Tewkesbury though, it will be a tough place to go for teams during the season.',
        'There is no easy game in the league this year. Unlike last season where you had the bottom two adrift, this year will be tough from the bottom to the top. Ruardean have had a mixed bag of results, beating Gifford away in the cup and four points from three games in the league. We lost 4-1 at home in the league last season where I thought they were clinical going forwards. I am expecting a tough physical game like last season, from an honest bunch who will work hard for each other. It would be great to finish September still unbeaten, but we need to be at it from the first whistle.',
      ],
    },
    visitors: {
      name: 'Ruardean Hill Rangers',
      paragraphs: [
        'Ruardean Hill Rangers play their football on the highest point in the Forest of Dean, 920 feet above sea level.',
        "Formed in 1919, Ruardean Hill played in the old Forest of Dean league until its termination in the late 1950's, where they moved into the North Gloucestershire League and have remained there in some capacity ever since.",
        "Ruardean Hill gained their first promotion to the Northern Senior League in 1994/95 and competed there for several seasons before being relegated in 2001. They immediately gained promotion the following year, only to be relegated again in 2004. In the 2011/12 season they gained a last-day promotion back to the senior league and also reached the final of the 'Amateur Cup'. The 2012/13 season brought the club its first promotion to the Northern Senior League Division 1 for back-to-back titles.",
        "The 'Hill' finished in the top eight for each of the next three seasons before finally winning the Division 1 title last season, scoring an incredible 125 goals and conceding just 34 in 35 games. Ruardean Hill's current first team has a good mixture of youth and experience.",
        "The club's promotions owe a lot to the depth of its other senior teams and the junior ranks. Ruardean Hill now field 3 senior teams and an Under 14's team who became Champions of their league and gained promotion to Division 1 of the Cheltenham Youth League last season with an undefeated season.",
        'The club are this season competing in their 9th season in the Marcliff County League and are hoping for a strong showing again this year having established themselves.',
      ],
    },
    charity: {
      name: 'The Ben Saunders Foundation',
      url: 'https://www.bensaundersfoundation.org/',
      paragraphs: [
        'The Ben Saunders Foundation (BSF) has been started to raise funds to support children and young adults with cancer within the UK.',
        'I (the founder) Ben Saunders was diagnosed with a rare form of cancer, a sarcoma attached to my heart, which I have been fighting since October 2019. It has spread into my lungs and I have faced many challenges along the way. These include two major open-heart surgeries and 6 rounds of very intense chemotherapy, which I am now currently back on!',
        'These are just some of the things I have experienced along my cancer journey, and I am looking to help and offer whatever I can alongside my family and the foundation to support young people with cancer like myself.',
        'I have been fortunate enough throughout my journey so far to have received the support I have, whether that be mentally, physically or a short holiday with friends recently to Center Parcs. I feel everyone in these circumstances deserves to be given as much support and happiness through the very difficult times they come across.',
      ],
    },
    matchOfficial: 'Matt Dyer',
    teamSheets: {
      home: {
        team: 'Filton Athletic',
        kit: 'Navy shirts, navy shorts, navy socks',
        staff: ['Kyle Thomas (Manager)', 'Josh Phillipps', 'Mike Slade'],
        players: [
          'Tom Bradley',
          'Chris Hillyer',
          'Jack Cole',
          'Jack Willmor',
          'Tom Fry',
          'Joe Mitchell',
          'Kieran Daniels',
          'Dan Matthews',
          'Callum Mitchell',
          'Liam Dorman',
          'Fraser Venables',
          'Yusuf Abdulrahman',
          'Charlie Peacock',
          'Matt Tovey',
          'Fabien Pereira',
          'Dylan Quick',
          'Dan Payne',
          'Trey Merrett',
          'Said Hassan',
          'Kieran Cooper',
        ],
      },
      away: {
        team: 'Ruardean Hill Rangers',
        kit: 'Light blue shirts, navy shorts, navy socks',
        staff: ['Bobby Walding (Manager)', 'Luke Brown'],
        players: [
          'Aaron Underwood',
          'Steve Bowles',
          'Bobby Walding',
          'Jack Meek',
          'Ricky Tingle',
          'Blaine Smith',
          'Dan Bowles',
          'Isaac Hunter',
          'Dan Matthews',
          'Ryan Smith',
          'Mitch Griffin',
          'Stuart Cornwell-Boote',
          'Dan Mason',
          'Steve Coombs',
          'Charley Mason',
          'Luke Brown',
          'Ben Ball',
          'Kane Fellows',
          'Luke Johnson',
          'Shaun Tingle',
        ],
      },
    },
  },
  "henbury-and-rockleaze": {
    number: 1,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%201%20-%2009.08.25.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "I would like to wish everyone a very warm welcome back. I write this from a sun lounger in Spain and whilst I am enjoying the sun, beer and relaxation after a summer of little if any decent football on TV it is great to be on the verge of watching the best kind of football, grassroots. As a club and personally as a fan the new season could not come soon enough as we hope to build on a fantastic first season in the league last year.",
        "As you know we have a new manager this season but before I talk about that I must mention the outgoing manager Ginge and his team, Pistol, Deano and Sladey. During their tenure we have gone from being a Suburban Premier side to a County League side that finished in a decent position in our first County League season and we have a great chance of becoming an established side in the league as well as pushing on further up the pyramid. This is testament to the fantastic job they did whilst they were in charge and the whole club thanks them for everything that they have done.",
        "Now onto our new manager Kyle. I was delighted to be able to offer him this role as his first managerial position. He is a Filton lad and as a club we would always prefer to have someone who is affiliated with the club in charge. It is a special club, and I always say that you may go play elsewhere but once you are Filton you are always Filton and Kyle is the epitome of this. He has great experience from playing at higher levels and is well known in the grassroots game which has helped him bring in some fantastic additions to the squad.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Henbury & Rockleaze",
      paragraphs: [
        "Firstly, good luck to the other 16 sides in this year's county league. In my opinion, the league will be a lot stronger than last year with the teams coming up and going down. It will be very competitive which we are looking forward to the challenge.",
        "Secondly, I would like to thank Ollie and the committee for giving me the opportunity to manage Filton in my first managerial position alongside Josh as my assistant and Sladey. We were all disappointed when Ginge decided to step down given the magnificent job he has done over the last 4 years alongside Pete, Sladey and Deano. Although not managing, Ginge is still a big part of the club's future which is great.",
        "The main focus when coming in was to keep the players we had. There have been 6 or 7 who had approaches from the league above but decided to stay. Not one player has left which shows the togetherness we have in the squad on and off the pitch. My target was to bring 2-3 in to give us a bit more quality which I have done. Also, we are back home at Elm Park which everyone is looking forward to.",
        "Henbury & Rockleaze, as tough as you can get in the first game. They started the season off poorly last year but finished strong. If it wasn't for the slow start, they would have been challenging at the top. I expect them to be in the top 2 or 3 this season. We have to be on the top of our game to get anything from the game, it's a shame we have six or seven out but it's expected in August.",
        "Looking forward to the season ahead.",
      ],
    },
    matchOfficial: "Simon Turner",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Henbury & Rockleaze",
        kit: "Red & orange shirts, black shorts, black socks",
        staff: [
          "Peter Bradbury (Manager)",
        ],
        players: [
          "Harry Trett",
          "Nick Jones",
          "George James",
          "Jordan Buckett",
          "Tasman Rook",
          "Sam Bailey",
          "Marcus Williams",
          "Drew Sawdon",
          "Tommy Collins",
          "Sean Heal",
          "Tate Shaw",
          "Harvey Moran",
          "Rhys Iles",
          "Fraser Butt",
          "Bleran Thaqi",
          "Callum Winter",
        ],
      },
    },
  },
  "chalford": {
    number: 2,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%202%20-%2016.08.25.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "It was great to welcome you all back to Elm Park last week for our opening game of the county league season and it was even better that we had some of our youth team acting as mascots, walking out with the players and acting as ball boys and girls.",
        "We are one big club, and they are the future so seeing the enjoyment they got from doing it was fantastic. A big thanks to Henbury and Rockleaze for being great with them and we hope they enjoyed the al fresco dining experience at the feast after the game.",
        "Whilst we did not get the three points we wanted last week, we can be immensely proud of our performance in a hard-fought game against tough opposition. We had chances in the game and could have snatched three points at the end when our shot went straight to their keeper however a draw was a fair result in the end considering how tight the game was.",
        "This week we welcome Chalford to Elm Park, we played them twice in the space of a month towards the end of last season narrowly beating them both times in two hard fought games and we are sure this one will be just as difficult. We will be looking forward to welcoming them back to the fine upmarket establishment of the Feast for some amazing food and a few drinks after the game.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Chalford",
      paragraphs: [
        "Firstly, I would like to give a warm welcome to the management, fans and players of Chalford.",
        "Reflecting on last weekend, it was fantastic to be back home playing in Filton after many years away. It was great to see so many familiar and new faces supporting the team alongside the mascots on the day. It shows how far the club has risen on and off the pitch. It's a shame the game itself didn't live up to the occasion. The heat and dry pitch slowed the intensity of the game down and it was two evenly matched teams which a draw was a fair result. The game was played in good spirit and looking forward to the return fixture.",
        "Similar to Henbury, we are expecting another very difficult test against Chalford. Again, another team who I expect will be challenging at the top come April. We got the better of them in both fixtures last year but there was very little between the teams in all honesty. The league table showed that with finishing sixth and seventh. We are anticipating a physical challenge against an experienced outfit. We should have four or five back which were missing last weekend which will give us a boost.",
        "Looking forward to the game and a few beers after.",
      ],
    },
    matchOfficial: "Graham McNulty",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Chalford",
        kit: "Red shirts, black shorts, red socks",
        staff: [
          "Ben Powell (Manager)",
        ],
        players: [
          "Duane Portlock",
          "Sam Neale",
          "Luke Benneyworth",
          "Johnny Davis",
          "Luke Barstow",
          "Charlie Bond",
          "Jamie Lock",
          "Ben Minnican",
          "Ryan Outram",
          "Simon Loftus",
          "Brad Moore",
          "Danny Harris",
          "Andrew Roberts",
          "James Keylock",
          "Sid Fawcett",
          "Freddie Wilson",
          "Luke Brunsdon",
          "George Parker",
          "Andy Maryon",
          "Ryan Harry",
          "Nat Buckland",
        ],
      },
    },
  },
  "hanham-athletic": {
    number: 5,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%204%20-%2011.10.25.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "It's good to be back home after a tough away trip last week which saw us not pick up points for the first time this season. Our home form has been good so hopefully we can put last week behind us and keep that up this week.",
        "We welcome Hanham to BBS Park North this week. I'm sure Hanham haven't started the season the way they wanted having only picked up five points from the seven games they've played. However two of those points have been on the road so they'll be hoping to pick up some more this week against us. We are unbeaten at home so will work hard to keep that going as we want to make BBS Park North @ Elm Park a fortress that people don't look forward to coming to.",
        "We have some of the best fans in the league and we will be looking for them to help us keep our home record going. We are thankful they are there each week to drive us forward and help keep us going when we have tough games which I am sure this weekend will be.",
        "We look forward to welcoming everyone back to the feast after the game for some beers and food and whilst I can't be there myself I am sure those that are there will be great hosts.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Hanham Athletic",
      paragraphs: [
        "Firstly, welcome to the management, players, and supporters of Hanham. It is good to be back home. Still yet to concede a goal at home this season and hopefully it continues today.",
        "Tough one to take on Saturday against a very good Quedgeley team. Not ideal to play a team in red hot form with a depleted squad but taking nothing away from Quedgeley, I thought they were excellent and deserved the three points. Only seven games in, it is a good marker to see where we need to be. We look forward to welcoming them back to Filton later in the season.",
        "Hanham have had a mixed bag of results. They have some good individual quality players. There is no easy game in this league as you can see from the results so far. We will have to be at our best to get three points and get back on track.",
      ],
    },
    matchOfficial: "Greg Wentland",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Hanham Athletic",
        kit: "Green & white shirts, green shorts, green socks",
        staff: [
          "Jamie Johnson (Manager)",
          "Harmen Boyce",
        ],
        players: [
          "David Taylor",
          "Lincoln Tooker",
          "Harley Boyce",
          "Liam Planter",
          "Cade Lovell",
          "Jay Vile",
          "Josh Gibbs",
          "Lewis Williams",
          "McKyle Beck",
          "George Shiner",
          "Liam Dibble",
          "Preston Webb",
          "Brandon Barnes",
          "Ceejay Summerlin",
          "Sam Archer",
          "Liam Maggs",
          "Noah Woodland",
          "Karim Rendall",
          "Morgan Stryjewski",
          "Tom Sayers",
          "Paul Coles",
          "Char Derham",
        ],
      },
    },
  },
  "bishops-cleeve-development": {
    number: 6,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%205%20-%2001.11.25.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly I would like to welcome Bishops Cleeve and their supporters to BBS Park North this weekend. We look forward to a great game and some food and beers afterwards.",
        "Since my last welcome we have won two and drawn one so not a bad run of results but as we all know we do love a draw and that has been no different this season, and the draw in our last game took us to four so far this season. Despite the number of draws we currently sit in third place ahead of Quedgeley on goal difference but only six points separates second and tenth in the league.",
        "A win this weekend will help to stretch that gap as Bishops Cleeve sit in ninth place on eleven points. As with every game in this league it will be a difficult one especially with the away team having picked up maximum points from their last two league games, they crashed out of the cup in their last game so they will be hoping it's just a blip and that they will get back to winning ways back in the league this weekend.",
        "The pitch at BBS Park North @ Elm Park is looking great and a lot of credit for that goes to the ground staff. Everyone at Filton would like to thank them for their hard work in getting it to this position and we're looking forward to them continuing to improve it so it's the best pitch in the county league.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Bishops Cleeve Development",
      paragraphs: [
        "Firstly, welcome to the management, players, and supporters of Bishops Cleeve. The return of the 2pm kick offs when the weather starts to get colder.",
        "Eleven games played now in all competitions and only one defeat. However, similar to last season, just as many wins as draws. To be sitting in third place in a really competitive league and through in both cup competitions coming into November reflects a positive start. That being said, we are circa 4 or 5 points short where we should be coming into today with points being dropped where we have dominated games. The game against Cribbs was a perfect example. We had a depleted squad for the game with six starters missing due to injuries / holidays and within the first 35 minutes, we lost three more to injury which made it really tough. But we totally dominated the game but when it's only 1-0 anything can happen, and a soft goal meant the game finished 1-1. That is football and we will learn from it. Credit to Cribbs who battled hard for 90 minutes.",
        "We are expecting a tough afternoon against a fit and youthful Bishops Cleeve side who are currently sitting in mid table. We have a large number of the squad out due to injury, which is a shame, but it will give opportunities to those who have not had as much game time and some of the reserves who have been performing brilliantly this year a chance to step up.",
        "We still have a 100% record at home this season. Hopefully, this form continues to conclude October.",
      ],
    },
    matchOfficial: "Mark Loughlin",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Bishops Cleeve Development",
        kit: "Pink shirts, grey shorts, grey socks",
        staff: [
          "Alex Cheal (Manager)",
        ],
        players: [
          "Victor Balitski",
          "George Cuzner",
          "Callum Debonis",
          "Kiril Halenin",
          "Matt Magee",
          "William Pugh",
          "Noah Sunter",
          "Daniel Beasley",
          "Henry Danter-Welch",
          "Alex Ebdon",
          "Mike Hodgins",
          "Monty New",
          "Ubaid Salehbhai",
          "Archie Tucker",
          "Lewis Cartwright",
          "Harry Davis",
          "George Ellerton",
          "Ben Hunt",
          "Frankie O'Leary",
          "Fin Smith",
          "Jay Wells",
          "Marcus Cornwall",
          "Tom De Quincey Adams",
          "Kian Gardiner",
          "Josh Long",
          "Solomon Osinuga",
          "Sam Smith",
        ],
      },
    },
  },
  "totterdown-united": {
    number: 7,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%206%20-%2008.11.25.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly I would like to welcome Totterdown and their supporters to BBS Park North this weekend. We look forward to a great game and some food and beers afterwards at the Feast.",
        "We picked up another three points last weekend with a great performance against Bishops Cleeve to keep our unbeaten home run going. Well done to the away team for coming back after and they were a pleasure to host.",
        "We managed to do the double against Totterdown last season but both wins were hard fought and we are expecting another tough game on the weekend. Totterdown have had a mixed run this season and currently sit fourteenth in the league with 8 points. With only one win in their last four games they'll be hoping to pick up three points to move them up the league.",
        "Another three points on the board this weekend will help us maintain third place with the two teams behind us only three points back with games in hand. If results go our way we could move up to second and close the gap on the league leaders.",
        "Regardless we'll have a great time at the feast as Totterdown are a great bunch of lads and always up for a bit of banter whatever the result.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Totterdown United",
      paragraphs: [
        "Firstly, welcome to the management, players and supporters of Totterdown. We always look forward to our games against Totterdown, a great club with a good bunch of blokes who follow the same traditions as Filton. I'm sure like last year, we will have a good time with them in the bar after the game.",
        "Arguably the performance of the season on Saturday against Bishops Cleeve. Taking into account the number of first team players we had out, we put in a brilliant performance and deserved the 3 points. The lads who stepped up from the reserves were great, in particular Ryan Nixon at centre back who received MOM. A special mention to our fourth goal scorer Taylor Anderson who has been out for over 2 seasons who stepped in and scored an excellent goal. We have good team spirit and togetherness and that showed last weekend. The intensity from minute 1 was great and I'm hoping for something similar today.",
        "The Totterdown game is always tough. They have some brilliant players who have played levels above in years gone by. The league is really competitive this season, it's closely bunched from the bottom to mid table. We have players returning which will help us as we are expecting a tough afternoon against a well drilled side. Looking forward to the challenge ahead.",
        "Hoping our fantastic home form continues.",
      ],
    },
    matchOfficial: "Richard J. Morris",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Totterdown United",
        kit: "Red & black shirts, black shorts, red socks",
        staff: [
          "Josh Hemmings (Manager)",
        ],
        players: [
          "Ashley Martin",
          "Frazer Clarke",
          "Billy Wiltshire",
          "Alex Silvester",
          "Toby Carter",
          "Jack Thorley",
          "Kieron Bull",
          "Frank Tobin",
          "Ollie Lovell",
          "Jack Moon",
          "Aaron Thorne",
          "David Hackett",
          "Chaz Hemmings",
          "Jack Hearsey",
        ],
      },
    },
  },
  "stoke-gifford-sgs-united": {
    number: 8,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%207%20-%2020.12.25.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly I would like to welcome SGS United and their supporters to BBS Park North this weekend. We look forward to a great game and some food and beers afterwards at the Feast.",
        "I can't think of a better way to end the year than with a local derby. These games are always tough affairs and I don't expect anything different from this weekend's game. The fact that the two teams are separated by four points makes it even more interesting as a win puts us seven points ahead of the college with a game in hand.",
        "The college have picked up three wins out of their last five league games but come into this game after a heavy defeat to Bishops Cleeve so will be hoping to get back to winning ways this week.",
        "We are currently unbeaten in our last five league games and will be hoping to continue that record at BBS Park North this weekend. A win will keep us within touching distance of the top spots and with games in hand of second place.",
        "I can't sign off without wishing everyone a Happy Christmas and New Year from all at the club. This is our last game over the festive period so enjoy the food and drink and we will see you all at BBS Park North in 2026.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Stoke Gifford SGS United",
      paragraphs: [
        "Welcome to the management team, players and supporters of Stoke Gifford SGS. Local derby always brings a good crowd with it, especially being the last game before Christmas. It's always great to see some familiar faces from the Gifford side and I'm sure we will have a drink with them after the game.",
        "It's our first home game in the league for over a month, where we defeated Totterdown 7-0. During that time, we have beaten DRG and Hallen Reserves at home in the Cup. Our home form has been excellent so far this campaign \u2014 apart from the first game of the season where we drew 0-0, we have won every game since. Unfortunately, we still have a number of first team players out injured or on holiday, but the way we come together as a group during this difficult period has been great to see.",
        "Stoke Gifford will be a difficult test. We beat them 2-0 at home last year and drew 1-1 away, so they will want revenge. Gifford were arguably the title favourites given the player pull from the college and the resources they have available, but the first half of the season has been hit and miss for them. That being said, they have some great young players in their squad and, like last season, will be wanting to go on a winning run to challenge at the top come the end of the season.",
        "We are looking forward to a fiery local derby and hoping our fantastic home form continues.",
      ],
    },
    matchOfficial: "Simon Laraway",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Stoke Gifford SGS United",
        kit: "Burgundy shirts, burgundy shorts, burgundy socks",
        staff: [
          "Marcus Thatcher (Manager)",
          "Dan Worton",
          "Daryll Barnes",
        ],
        players: [
          "Evan Healen",
          "Tauren Williams",
          "Harrison Murchdoch-McCormack",
          "Lawrence Mitchell",
          "Jared Ball",
          "Courtney Pinnock",
          "Rudy Hall",
          "Raymond Oppong",
          "Ben Chambers",
          "Harry Ford",
          "Daniel Twomey",
          "Sam Garrod",
          "Kyle Ford",
          "Joe Taylor",
          "Oscar Sealey",
          "Masood Garder",
          "Patryk Kosciolek",
          "Ben Courtier",
          "Stu Alexander",
        ],
      },
    },
  },
  "broadwell-amateurs": {
    number: 9,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%208%20-%2031.01.26.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly, I would like to welcome Broadwell Amateurs and their supporters to BBS Park North. Hopefully, the weather holds out, and this is not another welcome that will never be read.",
        "We have not played since our game against SGS back in December which has been good to help get players back and give them a rest, but it's a long time to not have a game and we will need everyone to get up to match speed quickly. Broadwell have played four times since our last game and will be hoping that will be of benefit to them.",
        "Broadwell are only two points behind us in the table and know a win will put them above us, at least until we play some of our games in hand. Four wins in their last seven league games have helped them rise up the table and they will be hoping to continue that this weekend.",
        "We were on a good run in the league before our enforced break, having not dropped points since October. We will be hoping to pick up where we left off at BBS Park North this weekend with a win potentially moving us up to third in the table with games in hand of all the teams around us.",
        "Regardless of the result we will have a great time after the game, and I am sure there will be a bit of banter whatever happens. Hopefully we will see you in the Feast.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Broadwell Amateurs",
      paragraphs: [
        "Welcome to the management team, players, and supporters of Broadwell. Our last game against SGS was back on 20th December. It has been a long time since our last game.",
        "Reflecting on that game at home, it was a sticky pitch and tough conditions for both sides. After going 1-0 up in the second half through a great strike from Trey, it was disappointing to concede late on. Then we went down to ten men for the last 8 minutes. It showed character and belief within the group to score a last-minute winner, with our captain coming up with the goods. That is four wins in a row in the league now since drawing to Cribbs, and six wins out of the last seven in league and cup.",
        "Broadwell are having a positive season, and we are expecting a tough game, similar to the 0-0 at their place which could have gone either way.",
        "It is great to see a few players coming back to fitness after having six or seven out for most weeks. Look forward to the game and having a pint in the Feast after.",
      ],
    },
    matchOfficial: "Nick Dawson",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Broadwell Amateurs",
        kit: "Claret shirts, claret shorts, claret socks",
        staff: [
          "Guy Jones (Manager)",
          "Kirk Imm",
          "Chris Brain",
        ],
        players: [
          "Jack Watkins",
          "Jordan Locke",
          "Kris Burnard",
          "Aidan Creighton",
          "Kian Skidmore",
          "Ethan Dunscombe",
          "Ben Fishwick",
          "Dan Brain",
          "Nathan Davies",
          "Jamie Belfitt",
          "Harry Knight",
          "Jack Knight",
          "Rhys Macpherson",
          "Liam Brain",
          "Billy Guest",
          "Rhys Childs",
          "Ben Lear",
        ],
      },
    },
  },
  "quedgeley-wanderers": {
    number: 10,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%209%20-%2014.02.26.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly, I would like to welcome Quedgeley and their supporters to BBS Park North. Hopefully, the weather holds out, and we can watch some football at BBS North this weekend.",
        "With fixtures coming thick and fast between now and the end of the season it was good to get the last couple of games on, even if last week's result was not. Quedgeley had their last game called off so I am sure will be looking to get out there again this week. They have played three times since Christmas which will no doubt help them towards the end of the season if they can avoid a fixture pile-up.",
        "We are again playing a team in and around us, with Quedgeley only two points behind us in the table and knowing a win will move them above us for the time being at least. Three wins in their last seven league games has slowed their push towards the top of the table and, after a positive start to the season, they will be hoping to get back on track this weekend.",
        "We have been on a good run in the league, and we will be hoping to put our cup exit behind us at BBS Park North this weekend with a win to help us keep up with the top two. We have games in hand on all the sides around us and, whilst we would have preferred to play those games, if we can get results in them we will be right in the mix come the end of the season.",
        "Regardless of the result we will have a great time after the game, and I am sure there will be a bit of banter whatever happens. Hopefully, we will see you in the Feast.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Quedgeley Wanderers",
      paragraphs: [
        "Welcome to the management team, players, and supporters of Quedgeley. Coming off a disappointing GFA Cup defeat in a bizarre game which could have easily ended 9-9, our focus turns to the league with still eighteen games left to play.",
        "With a rotated team and some key players missing last weekend, it was a poor team performance. We should have been 5-1 up after 20 minutes with some gilt-edged chances which we did not score. Then defensively we had a bad day which has been unlike us all season. We need to dust ourselves down quickly and focus on our league campaign, which has always been the priority. Our league form has been great \u2014 five wins in a row, which has been pleasing to see.",
        "Quedgeley have been the only team to beat us this season, which they thoroughly deserved. We dropped way below our normal standards; however, on the day I thought they were brilliant. I am surprised they have dropped so many points recently but still expect them to be near the top come the end of the season. If we perform like we did against Broadwell at home, we will be difficult to beat like we have all season.",
        "We are looking forward to a close game and having a few pints after.",
      ],
    },
    matchOfficial: "Simon Laraway",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Dan Matthews",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Fabien Pereira",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Quedgeley Wanderers",
        kit: "Red & black shirts, black shorts, black socks",
        staff: [
          "Beckem Foley (Manager)",
          "Tony Hawkins",
        ],
        players: [
          "Steven Sparrow",
          "Louis Peyton",
          "Alec Porter",
          "Oli Barnett",
          "Alfie Pledger",
          "Sam Jackson",
          "Ben Langworthy",
          "Reece Wells",
          "Sebastian Keith",
          "Charlie Wilkes",
          "Riley Stokes",
          "Nathan Payne",
          "Jerzy Marszalek",
          "Tom De Quincey Adams",
          "Fin Jenner",
          "Billy Osabuohien",
        ],
      },
    },
  },
  "cribbs-a": {
    number: 11,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%2010%20-%2028.02.26.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly, I would like to welcome Cribbs Reserves and their supporters to BBS Park North. Hopefully, the weather is turning and getting games on becomes easier. The ground staff have done a fantastic job getting our games on and deserve lots of credit for getting games on where others in the league have been called off.",
        "We're getting into the business end of the season now, the fixture schedule is starting to become congested and the night games are starting, so it's been good to get games on and minutes into the legs after an enforced winter break. Cribbs come into this after having played during the week and we will be their second game in a run that sees them play four games in eleven days.",
        "Cribbs haven't had a great season so far and are fighting to retain their place in the league, currently sitting just inside the relegation places. Nine points from their last four games have helped them keep pace with the teams above them, but they will be hoping to keep the momentum going to give them a chance of moving out of the bottom two.",
        "We have managed to keep up our good league form since the break in January and we will be hoping to put in a better performance than when we played them at theirs earlier in the season. A win will help us keep the pressure on the top two as well as keep some distance to the chasing pack, although we still have games in hand on all the sides around us.",
        "Regardless of the result we will have a beer after the game, and a little bit of friendly banter as well. Hopefully, we will see you in the Feast.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Cribbs Reserves",
      paragraphs: [
        "Welcome to the management team, players, and supporters of Cribbs. We have reached the halfway point of our season, and we are at the end of February. It has been unprecedented weather this season. Hopefully, that is the end of the rain now and the rest of the season will be uninterrupted.",
        "Coming off a hard-fought 3-2 victory against bottom of the table Hanham. It was a mixed Hanham team with a couple of players from Corsham and Roman Glass which made the game a difficult one, and full credit to Hanham \u2014 they showed grit and determination and were the better team for long periods in horrible conditions. Great to see Payner back from a long-term injury and grabbing the winner. We showed real character the last two games after being behind at the break to come back and win without being at our best.",
        "Since we drew 1-1 at Cribbs back in October, we have won every game in the league. It was probably the most one-sided game we have been involved in this season and was disappointing to get just the one point on the day. That's football \u2014 if you don't score your chances, you can get punished, which we did. The team has evolved a lot since then and we are looking forward to the challenge against an improving Cribbs side.",
        "We are looking forward to the game and having a few pints after.",
      ],
    },
    matchOfficial: "Nick Dawson",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Cribbs Reserves",
        kit: "Red shirts, black shorts, white socks",
        staff: [
          "Andy Sledge (Manager)",
          "Andy Capon",
          "Paul Westwood",
        ],
        players: [
          "Jude Brown",
          "Luke Wilcox",
          "Bleran Thaqi",
          "James Pellowe",
          "Andy Forward",
          "James Capon",
          "Dan Monk",
          "Harvey Jasper",
          "Liam Clayton",
          "Alex Craig",
          "James Carolan",
          "Toby Pocock",
          "Toby Kinnerly",
          "Abdul Bangoura",
          "Toby Stocks Hayward",
        ],
      },
    },
  },
  "bromley-heath-united": {
    number: 12,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%2011%20-%2021.03.26.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly, I would like to welcome Bromley Heath and their supporters to BBS Park North. It is nice to be writing this now the weather has turned, and we have some confidence that the game will be going ahead. The ground staff have been brilliant over the winter period at getting our games on. An extremely big thank you goes out to Mark and his team for the work during the week to keep the pitch in great shape.",
        "We are now coming towards the end of the season but, with so many games to play still, we cannot take our foot off the pedal. Our game in midweek against Tytherington Rocks was a tough one but we managed to hold on despite being a man down and closed the gap on the leaders to a point having played a game more.",
        "Bromley Heath have had an ok season in the league so far, sitting around mid-table, but with lots of games to play they will be hoping to put some points on the board with their games in hand. It was a difficult game when we went to their place back in November, as it has been every time we have played them, and we are expecting the same this weekend.",
        "We will be looking to keep up the pressure on the league leaders and another three points on the weekend could take us above them if results go our way. We move into a period which sees us play twelve times in six weeks and a win this weekend will help, with little room for error from either side over the remaining games of the season.",
        "Regardless of the result we will have a beer after the game, and a little bit of friendly banter as well. Hopefully, we will see you in the Feast.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Bromley Heath United",
      paragraphs: [
        "Welcome to the management team, players, and supporters of Bromley Heath. A great football club on and off the pitch. It is good to finally be back at home after three away games in a row.",
        "It has been a tough couple of weeks with away games in Gloucester against Bishops Cleeve and Ruardean, followed by another midweek away game against Tytherington Rocks. Winning all three and picking up nine points has been very pleasing. The lads have dug in together to grind out results even at times when we have not been at our best.",
        "Bromley is always a tough test. They have had a mixed bag of results so far this season, but we know they have some very good players. We managed to secure a 2-1 victory at their place last time and hopefully we can do something similar at home. Eleven wins in a row now and still undefeated at home \u2014 we will have to be at our best to pick up another three points.",
        "We are looking forward to the game and having a few pints after.",
      ],
    },
    matchOfficial: "Shaun Enever",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Bromley Heath United",
        kit: "Yellow & blue shirts, blue shorts, blue socks",
        staff: [
          "Craig Britton (Manager)",
          "Ross Britton",
          "Sam Iles",
          "Liam O'Donoghue",
        ],
        players: [
          "Will Ferguson",
          "Sam Sackett Springer",
          "Joel Mitchellmore",
          "Fletcher Cripps",
          "Dec Mannion",
          "Ben O'Brien",
          "Charlie Snell",
          "Jake Millward",
          "Trai Elliston Sackett",
          "Mason Lewis",
          "Cam Ford",
          "Matt May",
          "Charlie McCaw-Semple",
          "Elliot Doughty",
          "Jack Waldron",
          "Olly Hanham",
          "Jack Glanvill",
          "Micah Gayle",
          "Harry Cole",
        ],
      },
    },
  },
  "sharpness": {
    number: 13,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%2012%20-%2004.04.26.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly, I would like to welcome Sharpness and their supporters to BBS North. It is great to be writing this ahead of one of the biggest games of the season. There is still a long way to go but this top-of-the-table clash could be pivotal in the title race, especially as both teams have only lost once all season.",
        "The two teams finished last season in 5th and 6th and level on points, with both matches between the teams being tight affairs, so we should be in for a difficult match that could go either way.",
        "Sharpness have had a great season so far, sitting top of the table for some time. They were up there in the top three for most of last season and started to slip away towards the end, so we will of course be hoping the same happens this year. Sharpness have some tough games during their run-in but I am sure they will believe playing eight of their remaining ten league games at home will put them in a strong position if they can pick up points this weekend.",
        "We will be looking to keep up our impressive home record this weekend, and a win would close the gap to a point with another game between the two sides coming up in a couple of weeks. There are no easy games in this league and, with a tough run-in, maximum points would help us keep the pressure on the leaders.",
        "Regardless of the result we will have a beer after the game, and a little bit of friendly banter as well. Hopefully, we will see you in the Feast.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Sharpness",
      paragraphs: [
        "Welcome to the management team, players, and supporters of Sharpness. Looking forward to a great game between two teams who are in excellent form. It's looking more likely, as the season goes on, that the top two spots will be occupied by the teams on show today. Surprisingly, both have ten games left in the league and we are already in April, so lots of football still to be played. Whatever the result today, it will be a great day to see how the club has evolved \u2014 from being in the Suburban League for many years to challenging at the top of the County League and back playing home games at Filton for the first time. Big steps forward, and I'm sure there will be a fair few watching today.",
        "We are coming off a 0-0 draw against a well-disciplined Frampton side. Although we were the better team in the first half, our performance was disappointing in the second half, and a draw was a fair result overall. Taking the emotion out of the game and having six of our starting eleven missing, a draw wasn't a bad result but it ended our 12-match winning run.",
        "This is the first game against Sharpness today, as we play them in the reverse fixture a few weeks later. Lots to play for and we are excited for the run-in.",
        "I hope everyone enjoys the game and has a few beers after.",
      ],
    },
    matchOfficial: "Simon Laraway (assistants: Matt Dyer, Graham McNulty)",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Sharpness",
        kit: "Red shirts, white shorts, red socks",
        staff: [
          "Ben Gibbs (Manager)",
          "Brad Thomas",
          "Ben Waters",
          "Ali Priday",
        ],
        players: [
          "Pete Dykes",
          "Will Payne",
          "Riley Woodman",
          "Callum Dummelow",
          "Brad Gibbs",
          "James Priday",
          "Devon Morgan",
          "George Thomas",
          "Archie Mears",
          "Tom Frankham",
          "Marley Thomas",
          "Mike Bryant",
          "Ben Hemmings",
          "Will Tainton",
          "James Tainton",
          "Kier Bennett",
          "Alfie Jones",
        ],
      },
    },
  },
  "tewkesbury-town": {
    number: 14,
    pdfUrl: "https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%2014%20-%2009.05.26.pdf",
    welcome: {
      author: "Ollie Keeble",
      role: "Chairman, Filton Athletic FC",
      paragraphs: [
        "Firstly, I would like to welcome Tewkesbury Town and their supporters to BBS North for our final home game of the season. Whenever we are at this point in the season, I always spend time reflecting on how the season has gone, where the club is compared to the start of the season and what could have been done differently to learn for the future.",
        "It has been a successful season for the club. The first team have already sealed second place in the league, and the reserves finished their season in third place on goal difference, which is the highest position the sides have achieved in our history. The club is in a good place with both teams back at Elm Park \u2014 two strong sides who are competitive and challenging in their respective divisions, and a growing youth section.",
        "As well as looking at the past, the club are always looking forwards. After two good seasons in the county league the club will plan for the next step and what needs to be done to allow the first team to move up and hopefully, in a few years, have a first team in the Western League and a reserve team in the county league. For this dream to become a reality we need more volunteers to help on matchdays and take on roles like programme creator or events coordinator. Without these people the ability to grow the club will be impossible, so get in contact.",
        "Having played Tewkesbury twice already this season, we know it will be a tough game, and both teams \u2014 whilst not having anything to play for \u2014 will want to finish the season with another three points.",
        "Before signing off for the season I would like to say thank you to all our fans, players, management and volunteers for their support and the jobs they have done throughout the year. We cannot function without you all and the club look forward to welcoming you back next season.",
        "Regardless of the result we will have a beer after the game, and a little bit of friendly banter as well. Hopefully, we will see you in the Feast.",
      ],
    },
    dugout: {
      author: "Kyle Thomas",
      role: "First Team Manager",
      matchTitle: "Filton Athletic vs Tewkesbury Town",
      paragraphs: [
        "Welcome to the management team, players, and supporters of Tewkesbury. It's been a long and gruelling season, with lots of effort from everyone at the club \u2014 a season with lots of positives in how far the club has come on and off the pitch. To achieve a second-place finish in a very competitive league is a credit to the players.",
        "We are getting to the end of the season where we only have 8 or 9 first team players available, so it is tough. However, the lads from the reserves have stepped up and put in some very good performances.",
        "It would be great to finish the last home game of the season with three points. I hope everyone enjoys the game.",
      ],
    },
    matchOfficial: "Shaun Enever (assistants: James Grady, Christos Kanatsoulis)",
    teamSheets: {
      home: {
        team: "Filton Athletic",
        kit: "Navy shirts, navy shorts, navy socks",
        staff: [
          "Kyle Thomas (Manager)",
          "Josh Phillipps",
          "Mike Slade",
        ],
        players: [
          "Tom Bradley",
          "Chris Hillyer",
          "Jack Cole",
          "Jack Willmor",
          "Tom Fry",
          "Joe Mitchell",
          "Kieran Daniels",
          "Callum Mitchell",
          "Liam Dorman",
          "Fraser Venables",
          "Yusuf Abdulrahman",
          "Charlie Peacock",
          "Matt Tovey",
          "Dylan Quick",
          "Dan Payne",
          "Trey Merrett",
          "Said Hassan",
          "Kieran Cooper",
        ],
      },
      away: {
        team: "Tewkesbury Town",
        kit: "Yellow & black shirts, black shorts, black socks",
        staff: [
          "James Coates (Manager)",
          "Teejay Hosking",
          "Ryan Davies",
          "Marc Lane",
          "Stuart Bailey",
        ],
        players: [
          "Alexander Roder",
          "Bailey Gardner",
          "Callum Trust",
          "Cameron Anderson",
          "Charlie Deary",
          "George Beauchamp",
          "Harry Heath",
          "Jamie Goodwin",
          "Joe Poole",
          "Jordan Huggins",
          "Lee Llewellyn",
          "Lorcan Sheehan",
          "Mike Oliver",
          "Nathan Newland Galloway",
          "Scott Nicholls",
          "Teejay Hosking",
        ],
      },
    },
  },
}

/**
 * Hand-written extras for 2026/27 (current season). Keyed by slugified opponent name.
 * Add new matches here as their content is ready.
 */
const programmeExtras2026_27: Record<string, ProgrammeExtras> = {
  'university-of-bristol': {
    number: 1,
    pdfUrl:
      'https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%20-%2001%20-%20University%20of%20Bristol.pdf',
    welcome: {
      author: 'Paul Woodrow',
      role: 'Vice-Chairman, Filton Athletic FC',
      paragraphs: [
        'Afternoon everyone and a warm sunny welcome back to home of football at Elm Park for our opening match of the new Gloucestershire County League season!',
        'It is finally great to get our third season in the league underway after a proudly thrilling but ultimately disappointing summer cheering on those mighty Three Lions of England.',
        'Our main focus this season is to continue the great work and progress we have made both on and off the pitch over the last few seasons, and to continue to try and push the First Team, Reserves and newly formed ‘A’ team forward. A huge thank you in that respect must go to our volunteers and committee who work tirelessly behind the scenes to get every team match ready.',
        'Our opponents for today’s opening fixture are the University of Bristol Athletic Football Club (UBAFC), who are entering their debut season in the Gloucestershire County League. A very warm welcome is extended their way today, along with our congratulations on their successful promotion in the 2025/26 season.',
        'With that in mind I’m looking forward to a highly competitive, energetic and exciting fixture this afternoon, with fair play and respect to the match officials always honoured. Good luck to both teams today, and best of luck to UBAFC for their maiden season ahead.',
        'A final thank you goes out to all of our sponsors, new and old. Your contributions and continued support are enabling us to continue to move the club forward and strive to give our players the best chance they have for success. Thank you all.',
      ],
    },
    dugout: {
      author: 'Kyle Thomas',
      role: 'First Team Manager',
      matchTitle: 'Filton Athletic vs University of Bristol',
      paragraphs: [
        'Welcome to the players, management team and supporters of University of Bristol FC for today’s opening league fixture. Congratulations to University of Bristol on their promotion to Step 7 — it’s always exciting to welcome a new club into the league, and I’m sure they’ll be looking to make a strong start.',
        'It feels like only yesterday the season finished, yet here we are ready to begin another campaign. With the season kicking off on 1st August, it certainly feels early, but the hard work starts now. Pre-season has been a little disrupted with holidays and the World Cup, making it difficult at times to get everyone together — but that’s now behind us, and our full focus is on the league campaign ahead.',
        'We know we’ll be in for a tough test this afternoon against a young, energetic University of Bristol side. They’ll arrive full of confidence after winning their league last season and securing promotion through the play-offs in impressive fashion. I expect this league to be every bit as competitive as it was last year, with perhaps eight or nine teams capable of challenging near the top — that makes every point important from the very first whistle.',
        'There’s always a special feeling about the opening day of the season. Everyone starts with optimism and ambition, and we’re no different. We’re looking forward to the challenge ahead and hope to build on the foundations we laid last season.',
        'Finally, thank you to everyone who continues to support Filton Athletic. Your backing, both home and away, is hugely appreciated by the players and staff. Let’s get behind the lads and hopefully start the season with a positive result. Enjoy the game.',
      ],
    },
    visitors: {
      name: 'University of Bristol AFC',
      paragraphs: [
        'The University of Bristol Athletic Football Club (UBAFC) has competed in British Universities and College Sport (BUCS) competitions since it was formed in 2008. UBAFC runs six teams across the BUCS Aldi Men’s Western Leagues, from the sixth tier to the first, alongside a Saturday team created in 2023 which now plays in the Gloucestershire County Football League. It is one of the largest, most sociable and most successful clubs at the University of Bristol.',
        'It has been a successful few years. The First Team won BUCS Division 1 in 2020 and 2025, and secured promotion to the Men’s Premier South Division after winning the promotion play-off against the University of Sussex in 2026. In the Saturday team’s debut season in 2023/24 they finished runners-up in Hellenic Division Two West and won the Bateman Sports Chairmans Challenge Cup, beating Letcombe, before losing the Marsh Supplementary Challenge Cup final to FC Stratford on penalties.',
        'In 2024/25 the Saturday side finished 3rd in Hellenic Division Two and reached the quarter-finals of the Marsh Challenge Cup, losing narrowly to Hellenic Premier Division outfit Fairford Town. They also retained the Bateman Sports Chairmans Challenge Cup, beating Swindon Supermarine 5-0 in the final.',
        'The 2025/26 season saw UBAFC win the Hellenic League Alliance West title and beat Iron Acton in the promotion play-off to reach the Gloucestershire County Football League — the highest level in the club’s history.',
      ],
    },
    charity: {
      name: 'The Ben Saunders Foundation',
      url: 'https://www.bensaundersfoundation.org/',
      paragraphs: [
        'The Ben Saunders Foundation (BSF) has been started to raise funds to support children and young adults with cancer within the UK.',
        'I (the founder) Ben Saunders was diagnosed with a rare form of cancer, a sarcoma attached to my heart, which I have been fighting since October 2019. It has spread into my lungs and I have faced many challenges along the way. These include two major open-heart surgeries and 6 rounds of very intense chemotherapy, which I am now currently back on!',
        'These are just some of the things I have experienced along my cancer journey, and I am looking to help and offer whatever I can alongside my family and the foundation to support young people with cancer like myself.',
        'I have been fortunate enough throughout my journey so far to have received the support I have, whether that be mentally, physically or a short holiday with friends recently to Center Parcs. I feel everyone in these circumstances deserves to be given as much support and happiness through the very difficult times they come across.',
      ],
    },
    matchOfficial: 'Matt Dyer, Bobby Tutton, Mike Rogers',
    teamSheets: {
      home: {
        team: 'Filton Athletic',
        kit: 'Navy shirts, navy shorts, navy socks',
        staff: ['Kyle Thomas (Manager)', 'Josh Phillipps'],
        players: [
          'Tom Bradley',
          'Ashley Eyles',
          'Chris Hillyer',
          'Jack Cole',
          'Jack Willmor',
          'Kyle Thomas',
          'Tom Fry',
          'Joe Mitchell',
          'Kieran Daniels',
          'Callum Mitchell',
          'Liam Dorman',
          'Fraser Venables',
          'Yusuf Abdulrahman',
          'Freddie Frazer',
          'Taylor Anderson',
          'Matthew Hoare',
          'Charlie Peacock',
          'Matt Tovey',
          'Dylan Quick',
          'Dan Payne',
          'Trey Merrett',
          'Said Hassan',
        ],
      },
      away: {
        team: 'University of Bristol',
        kit: 'Red shirts, black shorts, black socks',
        staff: ['Alan Tyers (Manager)'],
        players: [
          'Jamie Goodwin',
          'Toby Swift',
          'James Harwood',
          'Max Diment',
          'Pranav Ganti',
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
        ],
      },
    },
  },
  'stoke-gifford-sgs-united': {
    number: 2,
    pdfUrl:
      'https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%20-%2002%20-%20Stoke%20Gifford%20SGS%20United.pdf',
    matchOfficial: 'Mark Loughlin (referee), Nick Dawson, Greg Wentland',
  },
  'tewkesbury-town': {
    number: 3,
    pdfUrl:
      'https://3p4oewzml4cd0fez.public.blob.vercel-storage.com/Filton%20Athletic%20-%20Match%20Day%20Programme%20-%2003.pdf',
  },
}

/** 2026/27 home first-team fixtures, each turned into a programme, in date order. */
export const programmes2026_27: Programme[] = firstTeamFixtures
  .filter((f) => f.venue === 'H')
  .map((fixture) => {
    const base = slugify(fixture.opponent)
    return {
      slug: base,
      fixture,
      isoDate: isoDate(fixture.date),
      longDate: longDate(fixture.date),
      competitionName: competitionName(fixture.competition),
      extras: programmeExtras2026_27[base] ?? {},
      season: '2026/27' as const,
    }
  })

/** All 2025/26 home first-team fixtures, each turned into an archived programme, in date order. */
export const programmes2025_26: Programme[] = firstTeamFixtures2025_26
  .filter((f) => f.venue === 'H')
  .map((fixture) => {
    const base = slugify(fixture.opponent)
    return {
      slug: base,
      fixture,
      isoDate: isoDate(fixture.date),
      longDate: longDate(fixture.date),
      competitionName: competitionName(fixture.competition),
      extras: programmeExtras2025_26[base] ?? {},
      season: '2025/26' as const,
    }
  })

export const programmes: Programme[] = [...programmes2026_27, ...programmes2025_26]

// Guard against two games (even across seasons) against the same opponent colliding on a
// slug. The archived (2025/26) programme keeps its established slug — it may already be
// linked or shared — and a same-slug 2026/27 fixture gets its date appended instead.
const seen = new Map<string, number>()
for (const p of [...programmes2025_26, ...programmes2026_27]) {
  const count = seen.get(p.slug) ?? 0
  if (count > 0) p.slug = `${p.slug}-${p.isoDate}`
  seen.set(p.slug, count + 1)
}

export function getProgramme(slug: string | undefined): Programme | undefined {
  return programmes.find((p) => p.slug === slug)
}

/** The next current-season home game still to be played (no result recorded), else the last one. */
export function nextProgramme(): Programme | undefined {
  return programmes2026_27.find((p) => !p.fixture.result) ?? programmes2026_27[programmes2026_27.length - 1]
}

function normaliseTeam(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(reserves|development|first|1st|2nd|saturday|res)\b/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Find a league-table row for a fixture opponent, tolerating naming differences. Defaults to the 2025/26 archive table. */
export function findTableRow(team: string, table: TableRow[] = leagueTable2025_26): TableRow | undefined {
  const target = normaliseTeam(team)
  return table.find((r) => {
    const t = normaliseTeam(r.team)
    return t === target || t.startsWith(target) || target.startsWith(t)
  })
}

export const filtonTableRow = findTableRow('Filton Athletic')

/** Last `count` completed results before `beforeIso`, oldest → newest. Defaults to the 2025/26 archive fixtures. */
export function formBefore(
  beforeIso: string,
  count = 5,
  fixtures: Fixture[] = firstTeamFixtures2025_26,
): Array<'W' | 'D' | 'L'> {
  return fixtures
    .filter((f) => f.result && /^[WDL]/.test(f.result) && isoDate(f.date) < beforeIso)
    .sort((a, b) => isoDate(a.date).localeCompare(isoDate(b.date)))
    .slice(-count)
    .map((f) => f.result![0] as 'W' | 'D' | 'L')
}

/** The reverse (away) fixture against the same opponent, if any. Defaults to the 2025/26 archive fixtures. */
export function reverseFixtureFor(opponent: string, fixtures: Fixture[] = firstTeamFixtures2025_26): Fixture | undefined {
  return fixtures.find((f) => f.opponent === opponent && f.venue === 'A')
}

/** The next first-team fixture still to be played (no result recorded yet). */
export const nextFirstTeamFixture: Fixture | undefined = firstTeamFixtures.find(
  (f) => !f.result,
)

/** The most recent completed first-team result (win, draw or loss). */
export const lastFirstTeamResult: Fixture | undefined = [...firstTeamFixtures]
  .reverse()
  .find((f) => f.result != null && /^[WDL]/.test(f.result))

/** The home programme that belongs to a given fixture, if it is a home game. */
export function programmeForFixture(fixture: Fixture): Programme | undefined {
  return programmes.find((p) => p.fixture === fixture)
}

/** Long human date (e.g. "Saturday 27 September 2025") for any fixture date. */
export function fixtureLongDate(date: string): string {
  return longDate(date)
}
