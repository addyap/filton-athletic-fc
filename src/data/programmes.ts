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
 * Hand-written extras per fixture. Keyed by slugified opponent name.
 * Add new matches here as their content is ready.
 */
const programmeExtras: Record<string, ProgrammeExtras> = {
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
}

/** All 2025/26 home first-team fixtures, each turned into an archived programme, in date order. */
export const programmes: Programme[] = firstTeamFixtures2025_26
  .filter((f) => f.venue === 'H')
  .map((fixture) => {
    const base = slugify(fixture.opponent)
    return {
      slug: base,
      fixture,
      isoDate: isoDate(fixture.date),
      longDate: longDate(fixture.date),
      competitionName: competitionName(fixture.competition),
      extras: programmeExtras[base] ?? {},
    }
  })

// Guard against two home games against the same opponent colliding on a slug.
const seen = new Map<string, number>()
for (const p of programmes) {
  const count = seen.get(p.slug) ?? 0
  if (count > 0) p.slug = `${p.slug}-${p.isoDate}`
  seen.set(p.slug, count + 1)
}

export function getProgramme(slug: string | undefined): Programme | undefined {
  return programmes.find((p) => p.slug === slug)
}

/** The next home game still to be played (no result recorded), else the last one. */
export function nextProgramme(): Programme | undefined {
  return programmes.find((p) => !p.fixture.result) ?? programmes[programmes.length - 1]
}

function normaliseTeam(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(reserves|development|first|1st|2nd|saturday|res)\b/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

/** Find a 2025/26 league-table row for a fixture opponent, tolerating naming differences. */
export function findTableRow(team: string): TableRow | undefined {
  const target = normaliseTeam(team)
  return leagueTable2025_26.find((r) => {
    const t = normaliseTeam(r.team)
    return t === target || t.startsWith(target) || target.startsWith(t)
  })
}

export const filtonTableRow = findTableRow('Filton Athletic')

/** Last `count` completed 2025/26 first-team results before `beforeIso`, oldest → newest. */
export function formBefore(beforeIso: string, count = 5): Array<'W' | 'D' | 'L'> {
  return firstTeamFixtures2025_26
    .filter((f) => f.result && /^[WDL]/.test(f.result) && isoDate(f.date) < beforeIso)
    .sort((a, b) => isoDate(a.date).localeCompare(isoDate(b.date)))
    .slice(-count)
    .map((f) => f.result![0] as 'W' | 'D' | 'L')
}

/** The reverse (away) 2025/26 fixture against the same opponent, if any. */
export function reverseFixtureFor(opponent: string): Fixture | undefined {
  return firstTeamFixtures2025_26.find((f) => f.opponent === opponent && f.venue === 'A')
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
