export type HistoricTeamPhoto = {
  slug: string
  title: string
  team: string
  season: string
  collectionLabel: string
  imageUrl: string
  originalImageUrl: string
  alt: string
  summary: string
  archiveNote: string
  playerIdentification?: {
    sourceNote: string
    groups: Array<{
      label: string
      people: string[]
    }>
  }
}

/**
 * Original photographs supplied from the club's clubhouse display.
 * Labels and seasons are retained only where they are visible on the supplied print.
 */
export const historicTeamPhotos: HistoricTeamPhoto[] = [
  {
    slug: 'first-team-2018-19-clubhouse-display',
    title: 'First Team 2018/19',
    team: 'First Team',
    season: '2018/19',
    collectionLabel: 'Clubhouse display photograph',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/TmLPTqINTJztBZDZ.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/EMufgcXyqJFdlBGn.jpg',
    alt: 'Supplied clubhouse photograph of the Filton Athletic First Team 2018/19 display, including the printed squad caption.',
    summary:
      'A photographed clubhouse display preserving the Filton Athletic First Team squad for 2018/19. The original print carries the season label and its own player listing beneath the group photograph.',
    archiveNote: 'The photograph is presented as supplied, including the original display board and printed caption.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Jim Phillips', 'Billy Bennett', 'Mike Humby', 'Luke Selman', 'Ash Eyles', 'Paolo Missiatto', 'Taylor Anderson', 'Mark Loftus'],
        },
        {
          label: 'Front row · left to right',
          people: ['Ryan Nixon', 'James Lowe', 'Alex Cafearo', 'Dan Turner', "Liam O'Reilly", 'Jack Osbourne', 'Curtis Reid'],
        },
      ],
    },
  },
  {
    slug: 'reserves-2017-18-clubhouse-display',
    title: 'Reserves 2017/18',
    team: 'Reserves',
    season: '2017/18',
    collectionLabel: 'Clubhouse display photograph',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/FoRLvotmFdPJpvTl.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/tfmQGDZCTqNNRzBo.jpg',
    alt: 'Supplied clubhouse photograph of the Filton Athletic Reserves 2017/18 display, including the printed squad caption.',
    summary:
      'This clubhouse display records the Filton Athletic Reserves for the 2017/18 season. The original print identifies the side and includes its own back-row and front-row player caption.',
    archiveNote: 'The original printed season label and squad caption remain visible in the supplied image.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Mark Jones', 'Alex Pullen', 'Liam Dorman', 'Sam Jones', 'Nick Jones', 'Kieran Daniels', 'Scott Jones', 'Martin Sims', 'Mike Slade', 'Pete Jeffrey', 'Pete Burge', 'Paul Woodrow'],
        },
        {
          label: 'Front row · left to right',
          people: ['Shane Bulger', 'Jamie Barry', 'Kurtis Henry', 'Matt Shipsey', 'Billy Bennett'],
        },
      ],
    },
  },
  {
    slug: 'first-team-2015-16-black-frame',
    title: 'First Team 2015/16 — black-framed display',
    team: 'First Team',
    season: '2015/16',
    collectionLabel: 'Black-framed clubhouse display',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/fwobZwgFHCYTaKjM.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/uKlJTTHUqGbdsOCc.jpg',
    alt: 'Supplied black-framed clubhouse display photograph of the Filton Athletic First Team 2015/16 with the original printed caption.',
    summary:
      'A black-framed clubhouse display of the Filton Athletic First Team in 2015/16. It preserves the group photograph together with the original printed roster caption.',
    archiveNote: 'This is one of two separately supplied photographs of the 2015/16 First Team display.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Nathan Burge (Manager)', 'Aaron Coles', 'Paul Hughes', 'Luke Selman', 'Kurtis Henry', 'Curtis Reid (Captain)', 'Brad Humby', 'Josh Phillipps', 'Niall Loughlin', "Kevin O'Donnell (Assistant Manager)"],
        },
        {
          label: 'Front row · left to right',
          people: ['Dean Wilmor', 'Jack Wilmor', 'Ben Pamplin', 'Mike Humby', 'Paolo Missiatto', 'Pete Burge (Chairman)', 'Mascot (name not stated)', "Kieran O'Donnell"],
        },
      ],
    },
  },
  {
    slug: 'first-team-2014-15-black-frame',
    title: 'First Team 2014/15',
    team: 'First Team',
    season: '2014/15',
    collectionLabel: 'Black-framed clubhouse display',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/EbAyQVSfodBSHUpr.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/iNMNiMasQJWFwnga.jpg',
    alt: 'Supplied black-framed clubhouse display photograph of the Filton Athletic First Team 2014/15 with the original printed caption.',
    summary:
      'This framed team photograph records Filton Athletic’s First Team for 2014/15. The original display identifies the season and provides the team caption beneath the photograph.',
    archiveNote: 'The supplied image includes the original frame, crest display and printed squad caption.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Nathan Burge (Manager)', 'Taylor Anderson', 'Josh Phillipps', 'Jack Osbourne', 'Curtis Reid (Captain)', 'Pete Jeffrey', 'Gary Keary', 'Joe Mitchell', 'Kurtis Henry', 'Luke Selman', 'Mike Slade', 'Mark Loftus (Assistant Manager)'],
        },
        {
          label: 'Front row · left to right',
          people: ['Ben Pamplin', 'Dean Wilmor', 'Paolo Missiatto', 'Mike Humby', 'Jack Wilmor', 'Niall Loughlin'],
        },
      ],
    },
  },
  {
    slug: 'reserves-2018-19-display-wide',
    title: 'Reserves 2018/19 — wide display view',
    team: 'Reserves',
    season: '2018/19',
    collectionLabel: 'Clubhouse display photograph',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/iZEwhRYsJdILBHvH.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/bdpkbuLRqnCUpCCc.jpg',
    alt: 'Wide supplied photograph of the Filton Athletic Reserves 2018/19 framed clubhouse display and printed caption.',
    summary:
      'A wide record of the framed Filton Athletic Reserves 2018/19 display. The original print names the squad in its own caption below the group photograph.',
    archiveNote: 'This wide view is retained as its own archive item alongside the separately supplied close display view.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Paul Woodrow', 'Shane Bulger', 'Pete Jeffrey', 'Tyler Skuse', 'Sam Jones', 'Mike Slade', 'Callum Atwill', 'Martin Sims', 'Mark Jones'],
        },
        {
          label: 'Front row · left to right',
          people: ['Kieran Daniels', 'Harry Garrett', 'Ryan Jones', 'Jamie Barry', 'Liam Dorman', 'Niall Loughlin', 'Matt Shipsey'],
        },
      ],
    },
  },
  {
    slug: 'reserves-2018-19-display-close',
    title: 'Reserves 2018/19 — close display view',
    team: 'Reserves',
    season: '2018/19',
    collectionLabel: 'Clubhouse display photograph',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/cvAWheJoUSQOSpfB.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/HWjcjviHUvJSVZVv.jpg',
    alt: 'Close supplied photograph of the Filton Athletic Reserves 2018/19 framed clubhouse display and printed caption.',
    summary:
      'A closer supplied view of the Filton Athletic Reserves 2018/19 display. It preserves the original season title and player caption with a more focused view of the frame.',
    archiveNote: 'This close view is retained as an individual archive item, as supplied by the club.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Paul Woodrow', 'Shane Bulger', 'Pete Jeffrey', 'Tyler Skuse', 'Sam Jones', 'Mike Slade', 'Callum Atwill', 'Martin Sims', 'Mark Jones'],
        },
        {
          label: 'Front row · left to right',
          people: ['Kieran Daniels', 'Harry Garrett', 'Ryan Jones', 'Jamie Barry', 'Liam Dorman', 'Niall Loughlin', 'Matt Shipsey'],
        },
      ],
    },
  },
  {
    slug: 'first-team-clubhouse-display',
    title: 'First Team — clubhouse display',
    team: 'First Team',
    season: 'Season not stated on the supplied display',
    collectionLabel: 'Clubhouse display photograph',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/MmUYgBgmYdFmLQbt.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/HDHLANeUEqQxmDlA.jpg',
    alt: 'Supplied framed clubhouse display photograph of a Filton Athletic First Team squad with a printed player caption.',
    summary:
      'A framed Filton Athletic First Team photograph supplied from the clubhouse display. The visible caption identifies the First Team and names players, but does not state a season clearly enough to record one here.',
    archiveNote: 'The archive intentionally leaves the season unstated rather than making an unsupported identification.',
    playerIdentification: {
      sourceNote: 'The supplied caption lists names but does not distinguish rows; the season is not stated clearly enough to add one.',
      groups: [
        {
          label: 'Names listed on the supplied display',
          people: ['Jim Phillips', 'Jack Osbourne', 'Billy Bennett', 'Kieran Daniels', 'Mike Humby', 'James Lowe', 'Kirk Waldron', 'Taylor Anderson', 'Ali Williams', 'Alex Cafearo', 'Luke Selman', 'Kieran Cooper', 'Jack Willmor', 'Mark Loftus', 'Paulo Missiato', 'Ryan Nixon'],
        },
      ],
    },
  },
  {
    slug: 'clubhouse-team-photographs-pair',
    title: 'Team photographs — clubhouse pair',
    team: 'Club archive',
    season: 'Season not stated on the supplied display',
    collectionLabel: 'Two-photograph clubhouse display',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/GBMfBJwLhpIfdrHV.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/kjBamsQvWhYkLmWO.jpg',
    alt: 'Supplied photograph showing two Filton Athletic team photographs displayed together in the clubhouse.',
    summary:
      'A supplied record of two Filton Athletic team photographs displayed together in the clubhouse. The image is kept as a separate archive feature to preserve the original arrangement and context of the display.',
    archiveNote: 'No date or team label is assigned beyond what is visible in the supplied photograph.',
  },
  {
    slug: 'first-team-2015-16-light-frame',
    title: 'First Team 2015/16 — light-framed display',
    team: 'First Team',
    season: '2015/16',
    collectionLabel: 'Light-framed clubhouse display',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/oSSyZSwjCLUFwmnr.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/pFHkEwlzaZnhrIVF.jpg',
    alt: 'Supplied light-framed clubhouse display photograph of the Filton Athletic First Team 2015/16.',
    summary:
      'A second supplied clubhouse display of the Filton Athletic First Team 2015/16. Its lighter frame and wider presentation preserve a distinct view of the same season’s team photograph.',
    archiveNote: 'This alternate presentation is catalogued separately to retain every supplied club-archive image.',
    playerIdentification: {
      sourceNote: 'The supplied light-framed display shows the 2015/16 season title but no readable roster. The row identification is transcribed from the separately supplied black-framed 2015/16 display of the same team photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Nathan Burge (Manager)', 'Aaron Coles', 'Paul Hughes', 'Luke Selman', 'Kurtis Henry', 'Curtis Reid (Captain)', 'Brad Humby', 'Josh Phillipps', 'Niall Loughlin', "Kevin O'Donnell (Assistant Manager)"],
        },
        {
          label: 'Front row · left to right',
          people: ['Dean Wilmor', 'Jack Wilmor', 'Ben Pamplin', 'Mike Humby', 'Paolo Missiatto', 'Pete Burge (Chairman)', 'Mascot (name not stated)', "Kieran O'Donnell"],
        },
      ],
    },
  },
  {
    slug: 'reserves-2014-15',
    title: 'Reserves 2014/15',
    team: 'Reserves',
    season: '2014/15',
    collectionLabel: 'Black-framed clubhouse display',
    imageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/eOvmHBKkHvLYJkMM.jpg',
    originalImageUrl: 'https://files.manuscdn.com/user_upload_by_module/session_file/310519663341830314/MrVMsdNCCtPgTIUz.jpg',
    alt: 'Supplied framed clubhouse display photograph of the Filton Athletic Reserves 2014/15 with original printed squad caption.',
    summary:
      'This framed club photograph documents the Filton Athletic Reserves in 2014/15. The original print identifies the season and retains its own player and staff caption.',
    archiveNote: 'The image is presented unedited as a supplied record from the club archive.',
    playerIdentification: {
      sourceNote: 'Transcribed from the original printed row caption beneath the supplied photograph.',
      groups: [
        {
          label: 'Back row · left to right',
          people: ['Pete Jeffrey', 'Paul Hughes', 'Matthew Shipsey (Captain)', 'Tom Evans', 'Kenny Wynne', 'Sam Jones', 'Scott Jones', 'Mark Jones (Manager)'],
        },
        {
          label: 'Front row · left to right',
          people: ['Gary Rowe', 'Paul Taylor', 'Liam Dorman', 'Jacob Reid', 'Paul Woodrow'],
        },
      ],
    },
  },
]

export function getHistoricTeamPhoto(slug: string | undefined) {
  return historicTeamPhotos.find((photo) => photo.slug === slug)
}
