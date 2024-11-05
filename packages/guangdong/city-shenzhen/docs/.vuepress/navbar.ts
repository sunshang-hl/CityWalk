import { defineNavbarConfig } from 'vuepress-theme-plume'
import { zhSharedNavbar, enSharedNavbar } from '../../../../../shared/config/navbar'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '游记', link: '/blog/' },
  { text: '标签', link: '/en/blog/tags/' },
  { text: '归档', link: '/en/blog/archives/' },
  { text: '综合公园', link: '/notes/ComprehensivePark/README.md' },
  { text: '社区公园', link: '/notes/CommunityPark/README.md' },
  {
    text: '专类公园',
    items: [{ text: '动物园', link: '/notes/Zoo/README.md' },
    { text: '植物园', link: '/notes/BotanicalGarden/README.md' },
    { text: '历史名园', link: '/notes/HistoricGarden/README.md' },
    { text: '遗址公园', link: '/notes/HeritagePark/README.md' },
    { text: '游乐公园', link: '/notes/FunParks/README.md' },
    { text: '儿童公园', link: '/notes/ChildrenPark/README.md' },
    { text: '体育健身公园', link: '/notes/Sports&Fitness/README.md' },
    { text: '滨水公园', link: '/notes/WaterfrontPark/README.md' },
    { text: '纪念性公园', link: '/notes/CommemorativePark/README.md' },
    { text: '雕塑公园', link: '/notes/SculpturePark/README.md' },
    ]
  },
  { text: '游园', link: '/notes/TravellingGarden/README.md' },
  { text: '广场/街区', link: '/notes/Square&Block/README.md' },
  {
    text: '风景休憩绿地',
    items: [{ text: '风景名胜区', link: '/notes/ScenicAttraction/README.md' },
    { text: '森林公园', link: '/notes/ForestPark/README.md' },
    { text: '绿地公园', link: '/notes/GreenPark/README.md' },
    { text: '郊野公园', link: '/notes/CountryPark/README.md' },
    { text: '野生动物园', link: '/notes/WildlifePark/README.md' },
    { text: '遗址公园', link: '/notes/HeritagePark /README.md' },
    { text: '地质公园', link: '/notes/GeologicalPark/README.md' },
    { text: '矿山公园', link: '/notes/MiningPark/README.md' },
    ]
  },
  { text: '博物/图书馆', link: '/notes/Museum&Library/README.md' },
  {
    text: '生态保育绿地',
    items: [{ text: '自然保护区', link: '/notes/NaturalReserve/README.md' },
    { text: '水源保护区', link: '/notes/WaterSourceProtectionArea/README.md' },
    { text: '湿地保护区', link: '/notes/WetlandConservationArea /README.md' },
    { text: '公益林', link: '/notes/PublicWelfareForest/README.md' },
    { text: '水体防护林', link: '/notes/WaterBodyProtectiveForest/README.md' },
    { text: '生态修复地', link: '/notes/EcologicalRestorationArea/README.md' },
    { text: '生物物种栖息地', link: '/notes/HabitatOfBiologicalSpecies/README.md' },

    ]
  },
  {
    text: '专项',
    items: [{ text: '骑行&绿道', link: '/notes/Cycling&Greenway/README.md' },
    { text: '房车营地', link: '/notes/RVPark /README.md' },
    { text: '红色旅游路线', link: '/notes/RedTourismRoute/README.md' }
    ]
  },
  ...zhSharedNavbar,
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'TravelNotes', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  { text: 'Comprehensive Park', link: '/en/notes/ComprehensivePark/README.md' },
  { text: 'Community Park', link: '/en/notes/CommunityPark/README.md' },
  {
    text: 'Specialized Park',
    items: [{ text: 'Zoo', link: '/en/notes/Zoo/README.md' },
    { text: 'Botanical Garden', link: '/en/notes/BotanicalGarden/README.md' },
    { text: 'Historic Garden', link: '/en/notes/HistoricGarden/README.md' },
    { text: 'Heritage Park', link: '/en/notes/HeritagePark/README.md' },
    { text: 'FunParks', link: '/en/notes/FunParks/README.md' },
    { text: 'Children Park', link: '/en/notes/ChildrenPark/README.md' },
    { text: 'Sports&Fitness', link: '/en/notes/Sports&Fitness/README.md' },
    { text: 'WaterFrontPark', link: '/en/notes/WaterFrontPark/README.md' },
    { text: 'CommemorativePark', link: '/en/notes/CommemorativePark/README.md' },
    { text: 'SculpturePark', link: '/en/notes/SculpturePark/README.md' },
    ]
  },
  { text: 'Travelling Garden', link: '/en/notes/TravellingGarden/README.md' },
  { text: 'Square&Block', link: '/en/notes/Square&Block/README.md' },
  {
    text: 'Landscape Leisure Green Space',
    items: [{ text: 'ScenicAttraction', link: '/en/notes/ScenicAttraction/README.md' },
    { text: 'Forest Park', link: '/en/notes/ForestPark/README.md' },
    { text: 'Green Park', link: '/en/notes/GreenPark/README.md' },
    { text: 'Country Park', link: '/en/notes/CountryPark/README.md' },
    { text: 'Wildlife Park', link: '/en/notes/WildlifePark/README.md' },
    { text: 'Heritage Park', link: '/en/notes/HeritagePark/README.md' },
    { text: 'Geological Park', link: '/en/notes/GeologicalPark/README.md' },
    { text: 'Mining Park', link: '/en/notes/MiningPark/README.md' },
    ]
  },
  { text: 'Museum&Library', link: '/en/notes/Museum&Library/README.md' },
  {
    text: 'Ecological Conservation Green Space',
    items: [{ text: 'Natural Reserve', link: '/en/notes/NaturalReserve/README.md' },
    { text: 'Water Source Protection Area', link: '/en/notes/WaterSourceProtectionArea/README.md' },
    { text: 'Wetland Conservation Area', link: '/en/notes/WetlandConservationArea /README.md' },
    { text: 'Public Welfare Forest', link: '/en/notes/PublicWelfareForest/README.md' },
    { text: 'Water Body Protective Forest', link: '/en/notes/WaterBodyProtectiveForest/README.md' },
    { text: 'Ecological Restoration Area', link: '/en/notes/EcologicalRestorationArea/README.md' },
    { text: 'HabitatOf Biological Species', link: '/en/notes/HabitatOfBiologicalSpecies/README.md' },

    ]
  },
  {
    text: 'Other',
    items: [{ text: 'Cycling&Greenway', link: '/en/notes/Cycling&Greenway/README.md' },
    { text: 'RVPark', link: '/en/notes/RVPark/README.md' },
    { text: 'Red Tourism Route', link: '/en/notes/RedTourismRoute/README.md' }
    ]
  },
  ...enSharedNavbar
])

