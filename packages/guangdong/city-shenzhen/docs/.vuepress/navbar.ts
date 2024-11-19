import { defineNavbarConfig } from 'vuepress-theme-plume'
import { esSharedNavbar, frSharedNavbar, jaSharedNavbar, ruSharedNavbar, viSharedNavbar, trSharedNavbar, zhTWSharedNavbar } from '../../../../../shared/config/navbar'
import { deSharedNavbar } from '../../../../../shared/config/site-navbar/de'
import { enSharedNavbar } from '../../../../../shared/config/site-navbar/en'
import { getNavbarData } from '../../../../../shared/config/site-navbar/site-index'


// const zhSharedNavbar = getNavbarData('zh');

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
    // { text: '专类公园', link: '/notes/专类公园/README.md' },

    { text: '游园', link: '/notes/游园/README.md' },
    ]
  },
  {
    text: '专类公园',
    items: [{ text: '动物园', link: '/notes/SpecializedPark/Zoo/README.md' },
    { text: '植物园', link: '/notes/SpecializedPark/BotanicalGarden/README.md' },
    { text: '历史名园', link: '/notes/SpecializedPark/HistoricGarden/README.md' },
    { text: '遗址公园', link: '/notes/SpecializedPark/HeritagePark/README.md' },
    { text: '游乐公园', link: '/notes/SpecializedPark/FunParks/README.md' },
    { text: '儿童公园', link: '/notes/SpecializedPark/ChildrenPark/README.md' },
    { text: '体育健身公园', link: '/notes/SpecializedPark/Sports&Fitness/README.md' },
    { text: '滨水公园', link: '/notes/SpecializedPark/WaterfrontPark/README.md' },
    { text: '纪念性公园', link: '/notes/SpecializedPark/CommemorativePark/README.md' },
    { text: '雕塑公园', link: '/notes/SpecializedPark/SculpturePark/README.md' },
    ]
  },

  // { text: '游园', link: '/notes/TravellingGarden/README.md' },
  { text: '风景休憩绿地', link: '/notes/风景休憩绿地/README.md' },
  { text: '广场/街区', link: '/notes/广场&街区/README.md' },

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
  {
    text: '深圳',
    icon: 'gis:poi-map',
    link: '/site-map/'
  },
  // {
  //   text: '专项',
  //   items: [{ text: '骑行&绿道', link: '/notes/Cycling&Greenway/README.md' },
  //   { text: '房车营地', link: '/notes/RVPark /README.md' },
  //   { text: '红色旅游路线', link: '/notes/RedTourismRoute/README.md' }
  //   ]
  // },
  ...getNavbarData('zh'),
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
    { text: 'Landscape Leisure Green Space', link: '/en/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Travelling Garden', link: '/en/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Square&Block', link: '/en/notes/SquareBlock/README.md' },
  { text: 'Museum&Library', link: '/en/notes/MuseumLibrary/README.md' },
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
  { text: 'Startseite', link: '/de/' },
  { text: 'Reisebericht', link: '/de/blog/' },

  {
    text: 'Park',
    items: [{ text: 'UUmfassenderPark', link: '/de/notes/ComprehensivePark/README.md' },
    { text: 'GemeindePark', link: '/de/notes/CommunityPark/README.md' },
    { text: 'SpezialPark', link: '/de/notes/SpecializedPark/README.md' },
    { text: 'Landschaftlicher Erholungsraum', link: '/de/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Gartentour', link: '/de/notes/TravellingGarden/README.md' },
    ]
  },

  { text: 'Quadrat/Block', link: '/de/notes/SquareBlock/README.md' },
  { text: 'Museum&Bibliothek', link: '/de/notes/MuseumLibrary/README.md' },
  { text: 'Sonstiges', link: '/de/notes/Other/README.md' },

  ...deSharedNavbar
])


export const esNavbar = defineNavbarConfig([
  { text: 'Página principal', link: '/es/' },
  { text: 'Relato de viaje', link: '/es/blog/' },

  {
    text: 'Parque',
    items: [{ text: 'Parque integral', link: '/es/notes/ComprehensivePark/README.md' },
    { text: 'Parque comunitario', link: '/es/notes/CommunityPark/README.md' },
    { text: 'Parque especializado', link: '/es/notes/SpecializedPark/README.md' },
    { text: 'Espacio verde de descanso escénico', link: '/es/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Visita al jardín', link: '/es/notes/TravellingGarden/README.md' },
    ]
  },
  { text: 'Plaza&Barrio', link: '/es/notes/SquareBlock/README.md' },
  { text: 'Museo&Biblioteca', link: '/es/notes/MuseumLibrary/README.md' },
  { text: 'Otro', link: '/es/notes/Other/README.md' },

  ...esSharedNavbar
])


export const frNavbar = defineNavbarConfig([
  { text: 'Accueil', link: '/fr/' },
  { text: 'Carnet de voyage', link: '/fr/blog/' },

  {
    text: 'Parc',
    items: [{ text: 'Parc omnisports', link: '/fr/notes/ComprehensivePark/README.md' },
    { text: 'Parc communautaire', link: '/fr/notes/CommunityPark/README.md' },
    { text: 'Parc spécialisé', link: '/fr/notes/SpecializedPark/README.md' },
    { text: 'Espace vert de repos pittoresque', link: '/fr/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Visite du jardin', link: '/fr/notes/TravellingGarden/README.md' },
    ]
  },
  { text: 'Carré&bloc', link: '/fr/notes/SquareBlock/README.md' },
  { text: 'Musée&Bibliothèque', link: '/fr/notes/MuseumLibrary/README.md' },
  { text: 'Autre', link: '/fr/notes/Other/README.md' },

  ...frSharedNavbar
])

export const jaNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/ja/' },
  { text: '旅行記', link: '/ja/blog/' },

  {
    text: '公園',
    items: [{ text: '総合公園', link: '/ja/notes/ComprehensivePark/README.md' },
    { text: '地域公園', link: '/ja/notes/CommunityPark/README.md' },
    // { text: '専門公園', link: '/ja/notes/SpecializedPark/README.md' },
    { text: '庭園ツアー ', link: '/ja/notes/TravellingGarden/README.md' },
    ]
  },

  {
    text: '専門公園',
    items: [{ text: '动物园', link: '/notes/SpecializedPark/Zoo/README.md' },
    { text: '植物园', link: '/notes/SpecializedPark/BotanicalGarden/README.md' },
    { text: '历史名园', link: '/notes/SpecializedPark/HistoricGarden/README.md' },
    { text: '遗址公园', link: '/notes/SpecializedPark/HeritagePark/README.md' },
    { text: '游乐公园', link: '/notes/SpecializedPark/FunParks/README.md' },
    { text: '儿童公园', link: '/notes/SpecializedPark/ChildrenPark/README.md' },
    { text: '体育健身公园', link: '/notes/SpecializedPark/Sports&Fitness/README.md' },
    { text: '滨水公园', link: '/notes/SpecializedPark/WaterfrontPark/README.md' },
    { text: '纪念性公园', link: '/notes/SpecializedPark/CommemorativePark/README.md' },
    { text: '雕塑公园', link: '/notes/SpecializedPark/SculpturePark/README.md' },
    ]
  },

  { text: '風景休息緑地', link: '/ja/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: '広場&街区', link: '/ja/notes/SquareBlock/README.md' },

  {
    text: '博物館&図書館', link: '/ja/notes/MuseumLibrary/README.md'
  },

  { text: 'その他', link: '/ja/notes/Other/README.md' },

  ...jaSharedNavbar
])

export const ruNavbar = defineNavbarConfig([
  { text: 'Главная', link: '/ru/' },
  { text: 'ПутевыеЭаметки', link: '/ru/blog/' },

  {
    text: 'Парк',
    items: [{ text: 'Комплексный Парк', link: '/ru/notes/ComprehensivePark/README.md' },
    { text: 'Парк общины', link: '/ru/notes/CommunityPark/README.md' },
    { text: 'Специализированный Парк', link: '/ru/notes/SpecializedPark/README.md' },
    { text: 'Ландшафтная Эона отдыха', link: '/ru/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Экскурсия По Саду', link: '/ru/notes/TravellingGarden/README.md' },
    ]
  },


  { text: 'Квадрат&блок', link: '/ru/notes/SquareBlock/README.md' },
  { text: 'Музей&Библиотека', link: '/ru/notes/MuseumLibrary/README.md' },
  { text: 'Другое', link: '/ru/notes/Other/README.md' },

  ...ruSharedNavbar
])


export const trNavbar = defineNavbarConfig([
  { text: 'Anasayfa', link: '/tr/' },
  { text: 'SeyahatNotları', link: '/tr/blog/' },

  {
    text: 'Park',
    items: [{ text: 'Kapsamlı Park', link: '/tr/notes/ComprehensivePark/README.md' },
    { text: 'Topluluk Parkı', link: '/tr/notes/CommunityPark/README.md' },
    { text: 'Özel Parkı', link: '/tr/notes/SpecializedPark/README.md' },
    { text: 'Manzaralı Yeşil Alan', link: '/tr/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Bahçe Turu', link: '/tr/notes/TravellingGarden/README.md' },
    ]
  },


  { text: 'Kare&blok', link: '/tr/notes/SquareBlock/README.md' },
  { text: 'Müze&Kütüphane', link: '/tr/notes/MuseumLibrary/README.md' },
  { text: 'Diğer', link: '/tr/notes/Other/README.md' },

  ...trSharedNavbar
])

export const viNavbar = defineNavbarConfig([
  { text: 'TrangDhủ', link: '/vi/' },
  { text: 'NhậtKýDuLịch', link: '/vi/blog/' },

  {
    text: 'CôngViên',
    items: [{ text: 'CôngViênTổngHợp', link: '/vi/notes/ComprehensivePark/README.md' },
    { text: 'CôngViênCộngDồng', link: '/vi/notes/CommunityPark/README.md' },
    { text: 'CôngViênChuyênBiệt', link: '/vi/notes/SpecializedPark/README.md' },
    { text: 'Khu vực xanh nghỉ ngơi cảnh quan', link: '/vi/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: 'Tham quan vườn', link: '/vi/notes/TravellingGarden/README.md' },
    ]
  },


  { text: 'QuảngTrường&KhuPhố', link: '/vi/notes/SquareBlock/README.md' },
  { text: 'BảoTàng&ThưViện', link: '/vi/notes/MuseumLibrary/README.md' },
  { text: 'Khác', link: '/vi/notes/Other/README.md' },

  ...viSharedNavbar
])


export const zhTWNavbar = defineNavbarConfig([
  { text: '首頁', link: '/zh-TW/' },
  { text: '遊記', link: '/zh-TW/blog/' },

  {
    text: '公園',
    items: [{ text: '綜合公園', link: '/zh-TW/notes/ComprehensivePark/README.md' },
    { text: '社區公園', link: '/zh-TW/notes/CommunityPark/README.md' },
    // { text: '專類公園', link: '/zh-TW/notes/SpecializedPark/README.md' },
    { text: '遊園', link: '/zh-TW/notes/TravellingGarden/README.md' },
    ]
  },

  {
    text: '專類公園',
    items: [{ text: '动物园', link: '/notes/SpecializedPark/Zoo/README.md' },
    { text: '植物园', link: '/notes/SpecializedPark/BotanicalGarden/README.md' },
    { text: '历史名园', link: '/notes/SpecializedPark/HistoricGarden/README.md' },
    { text: '遗址公园', link: '/notes/SpecializedPark/HeritagePark/README.md' },
    { text: '游乐公园', link: '/notes/SpecializedPark/FunParks/README.md' },
    { text: '儿童公园', link: '/notes/SpecializedPark/ChildrenPark/README.md' },
    { text: '体育健身公园', link: '/notes/SpecializedPark/Sports&Fitness/README.md' },
    { text: '滨水公园', link: '/notes/SpecializedPark/WaterfrontPark/README.md' },
    { text: '纪念性公园', link: '/notes/SpecializedPark/CommemorativePark/README.md' },
    { text: '雕塑公园', link: '/notes/SpecializedPark/SculpturePark/README.md' },
    ]
  },

  { text: '風景休憩綠地', link: '/zh-TW/notes/LandscapeLeisureGreenSpace/README.md' },
  { text: '幣場&街區', link: '/zh-TW/notes/SquareBlock/README.md' },

  { text: '博物館&圖書館', link: '/zh-TW/notes/MuseumLibrary/README.md' },

  { text: '其他', link: '/zh-TW/notes/Other/README.md' },

  ...zhTWSharedNavbar
])

