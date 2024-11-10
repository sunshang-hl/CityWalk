import { defineNavbarConfig } from 'vuepress-theme-plume'
import { zhSharedNavbar, enSharedNavbar } from '../../../../../shared/config/navbar'

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

