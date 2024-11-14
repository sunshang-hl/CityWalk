import { defineNavbarConfig } from 'vuepress-theme-plume'
import { zhSharedNavbar, enSharedNavbar, deSharedNavbar, esSharedNavbar, frSharedNavbar, jaSharedNavbar, ruSharedNavbar, viSharedNavbar, trSharedNavbar, zhTWSharedNavbar } from '../../../../../shared/config/navbar'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '游记', link: '/blog/' },
  // { text: '标签', link: '/blog/tags/' },
  // { text: '归档', link: '/blog/archives/' },
  // { text: '综合公园', link: '/notes/ComprehensivePark/README.md' },
  // { text: '社区公园', link: '/notes/CommunityPark/README.md' },
  {
    text: '公园',
    items: [{ text: '综合公园', link: '/notes/综合公园/README.md' },
    { text: '社区公园', link: '/notes/社区公园/README.md' },
    { text: '专类公园', link: '/notes/专类公园/README.md' },
    // {
    //   text: '专类公园',
    //   items: [{ text: '动物园', link: '/notes/SpecializedPark/Zoo/README.md' },
    //   { text: '植物园', link: '/notes/SpecializedPark/BotanicalGarden/README.md' },
    //   { text: '历史名园', link: '/notes/SpecializedPark/HistoricGarden/README.md' },
    //   { text: '遗址公园', link: '/notes/SpecializedPark/HeritagePark/README.md' },
    //   { text: '游乐公园', link: '/notes/SpecializedPark/FunParks/README.md' },
    //   { text: '儿童公园', link: '/notes/SpecializedPark/ChildrenPark/README.md' },
    //   { text: '体育健身公园', link: '/notes/SpecializedPark/Sports&Fitness/README.md' },
    //   { text: '滨水公园', link: '/notes/SpecializedPark/WaterfrontPark/README.md' },
    //   { text: '纪念性公园', link: '/notes/SpecializedPark/CommemorativePark/README.md' },
    //   { text: '雕塑公园', link: '/notes/SpecializedPark/SculpturePark/README.md' },
    //   ]
    // },
    { text: '游园', link: '/notes/游园/README.md' },
    ]
  },

  // { text: '游园', link: '/notes/TravellingGarden/README.md' },
  { text: '广场/街区', link: '/notes/广场&街区/README.md' },
  { text: '风景休憩绿地', link: '/notes/风景休憩绿地/README.md' },
  // {
  //   text: '风景休憩绿地',
  //   items: [{ text: '风景名胜区', link: '/notes/ScenicAttraction/README.md' },
  //   { text: '森林公园', link: '/notes/ForestPark/README.md' },
  //   { text: '绿地公园', link: '/notes/GreenPark/README.md' },
  //   { text: '郊野公园', link: '/notes/CountryPark/README.md' },
  //   { text: '野生动物园', link: '/notes/WildlifePark/README.md' },
  //   { text: '遗址公园', link: '/notes/HeritagePark /README.md' },
  //   { text: '地质公园', link: '/notes/GeologicalPark/README.md' },
  //   { text: '矿山公园', link: '/notes/MiningPark/README.md' },
  //   ]
  // },
  { text: '博物/图书馆', link: '/notes/博物&图书馆/README.md' },
  // {
  //   text: '生态保育绿地',
  //   items: [{ text: '自然保护区', link: '/notes/NaturalReserve/README.md' },
  //   { text: '水源保护区', link: '/notes/WaterSourceProtectionArea/README.md' },
  //   { text: '湿地保护区', link: '/notes/WetlandConservationArea /README.md' },
  //   { text: '公益林', link: '/notes/PublicWelfareForest/README.md' },
  //   { text: '水体防护林', link: '/notes/WaterBodyProtectiveForest/README.md' },
  //   { text: '生态修复地', link: '/notes/EcologicalRestorationArea/README.md' },
  //   { text: '生物物种栖息地', link: '/notes/HabitatOfBiologicalSpecies/README.md' },

  //   ]
  // },
  { text: '专项', link: '/notes/专项/README.md' },
  { text: '导航', link: '/site-map/' },
  // {
  //   text: '专项',
  //   items: [{ text: '骑行&绿道', link: '/notes/Cycling&Greenway/README.md' },
  //   { text: '房车营地', link: '/notes/RVPark /README.md' },
  //   { text: '红色旅游路线', link: '/notes/RedTourismRoute/README.md' }
  //   ]
  // },
  ...zhSharedNavbar,
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'TravelNotes', link: '/en/blog/' },
  // { text: 'Tags', link: '/en/blog/tags/' },
  // { text: 'Archives', link: '/en/blog/archives/' },
  // { text: 'Comprehensive Park', link: '/en/notes/ComprehensivePark/README.md' },
  // { text: 'Community Park', link: '/en/notes/CommunityPark/README.md' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/en/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/en/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/en/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/en/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/en/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/en/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/en/notes/Museum&Library/README.md' },
  // {
  //   text: 'Ecological Conservation Green Space',
  //   items: [{ text: 'Natural Reserve', link: '/en/notes/NaturalReserve/README.md' },
  //   { text: 'Water Source Protection Area', link: '/en/notes/WaterSourceProtectionArea/README.md' },
  //   { text: 'Wetland Conservation Area', link: '/en/notes/WetlandConservationArea /README.md' },
  //   { text: 'Public Welfare Forest', link: '/en/notes/PublicWelfareForest/README.md' },
  //   { text: 'Water Body Protective Forest', link: '/en/notes/WaterBodyProtectiveForest/README.md' },
  //   { text: 'Ecological Restoration Area', link: '/en/notes/EcologicalRestorationArea/README.md' },
  //   { text: 'HabitatOf Biological Species', link: '/en/notes/HabitatOfBiologicalSpecies/README.md' },

  //   ]
  // },
  { text: 'Other', link: '/en/notes/Other/README.md' },
  // {
  //   text: 'Other',
  //   items: [{ text: 'Cycling&Greenway', link: '/en/notes/Cycling&Greenway/README.md' },
  //   { text: 'RVPark', link: '/en/notes/RVPark/README.md' },
  //   { text: 'Red Tourism Route', link: '/en/notes/RedTourismRoute/README.md' }
  //   ]
  // },
  ...enSharedNavbar
])


export const deNavbar = defineNavbarConfig([
  { text: 'Home', link: '/de/' },
  { text: 'TravelNotes', link: '/de/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/de/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/de/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/de/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/de/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/de/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/de/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/de/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/de/notes/Other/README.md' },

  ...deSharedNavbar
])


export const esNavbar = defineNavbarConfig([
  { text: 'Home', link: '/es/' },
  { text: 'TravelNotes', link: '/es/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/es/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/es/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/es/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/es/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/es/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/es/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/es/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/es/notes/Other/README.md' },

  ...esSharedNavbar
])


export const frNavbar = defineNavbarConfig([
  { text: 'Home', link: '/fr/' },
  { text: 'TravelNotes', link: '/fr/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/fr/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/fr/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/fr/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/fr/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/fr/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/fr/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/fr/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/fr/notes/Other/README.md' },

  ...frSharedNavbar
])

export const jaNavbar = defineNavbarConfig([
  { text: 'Home', link: '/ja/' },
  { text: 'TravelNotes', link: '/ja/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/ja/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/ja/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/ja/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/ja/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/ja/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/ja/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/ja/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/ja/notes/Other/README.md' },

  ...jaSharedNavbar
])



export const ruNavbar = defineNavbarConfig([
  { text: 'Home', link: '/ru/' },
  { text: 'TravelNotes', link: '/ru/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/ru/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/ru/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/ru/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/ru/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/ru/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/ru/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/ru/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/ru/notes/Other/README.md' },

  ...ruSharedNavbar
])


export const trNavbar = defineNavbarConfig([
  { text: 'Home', link: '/tr/' },
  { text: 'TravelNotes', link: '/tr/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/tr/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/tr/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/tr/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/tr/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/tr/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/tr/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/tr/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/tr/notes/Other/README.md' },

  ...trSharedNavbar
])



export const viNavbar = defineNavbarConfig([
  { text: 'Home', link: '/vi/' },
  { text: 'TravelNotes', link: '/vi/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/vi/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/vi/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/vi/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/vi/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/vi/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/vi/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/vi/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/vi/notes/Other/README.md' },

  ...viSharedNavbar
])


export const zhTWNavbar = defineNavbarConfig([
  { text: 'Home', link: '/zh-TW/' },
  { text: 'TravelNotes', link: '/zh-TW/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Comprehensive Park', link: '/zh-TW/notes/ComprehensivePark/README.md' },
    { text: 'Community Park', link: '/zh-TW/notes/CommunityPark/README.md' },
    { text: 'Specialized Park', link: '/zh-TW/notes/SpecializedPark/README.md' },
    { text: 'Travelling Garden', link: '/zh-TW/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Landscape Leisure Green Space', link: '/zh-TW/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: 'Square&Block', link: '/zh-TW/notes/Square&Block/README.md' },

  { text: 'Museum&Library', link: '/zh-TW/notes/Museum&Library/README.md' },

  { text: 'Other', link: '/zh-TW/notes/Other/README.md' },

  ...zhTWSharedNavbar
])

