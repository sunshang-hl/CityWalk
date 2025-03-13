import { defineNavbarConfig } from 'vuepress-theme-plume'
// import { esSharedNavbar, frSharedNavbar, jaSharedNavbar, ruSharedNavbar, viSharedNavbar, trSharedNavbar, zhTWSharedNavbar } from '../../../../../shared/config/navbar'
// import { deSharedNavbar } from '../../../../../shared/config/site-navbar/de'
// import { enSharedNavbar } from '../../../../../shared/config/site-navbar/en'
// import { getNavbarData } from '../../../../../shared/config/site-navbar/site-index'


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
    { text: 'A级景区', link: '/notes/A级景区/README.md' },

    { text: '游园', link: '/notes/游园/README.md' },
    ]
  },
  {
    text: '专类公园',
    items: [{ text: '动物园', link: '/notes/专类公园/动物园/README.md' },
    { text: '植物园', link: '/notes/专类公园/植物园/README.md' },
    { text: '历史名园', link: '/notes/专类公园/历史名园/README.md' },
    // { text: '遗址公园', link: '/notes/专类公园/遗址公园/README.md' },
    { text: '游乐公园', link: '/notes/专类公园/游乐公园/README.md' },
    { text: '儿童公园', link: '/notes/专类公园/儿童公园/README.md' },
    { text: '体育健身公园', link: '/notes/专类公园/体育健身公园/README.md' },
    { text: '滨水公园', link: '/notes/专类公园/滨水公园/README.md' },
    { text: '纪念性公园', link: '/notes/专类公园/纪念性公园/README.md' },
    { text: '雕塑公园', link: '/notes/专类公园/雕塑公园/README.md' },
    ]
  },

  // { text: '游园', link: '/notes/TravellingGarden/README.md' },
  // { text: '风景休憩绿地', link: '/notes/风景休憩绿地/README.md' },

  {
    text: '风景休憩绿地',
    items: [{ text: '风景名胜区', link: '/notes/风景休憩绿地/风景名胜区/README.md' },
    { text: '森林公园', link: '/notes/风景休憩绿地/森林公园/README.md' },
    // { text: '绿地公园', link: '/notes/风景休憩绿地/绿地公园/README.md' },
    { text: '湿地公园', link: '/notes/风景休憩绿地/湿地公园/README.md' },
    { text: '郊野公园', link: '/notes/风景休憩绿地/郊野公园/README.md' },
    { text: '地质公园', link: '/notes/风景休憩绿地/地质公园/README.md' },
    { text: '矿山公园', link: '/notes/风景休憩绿地/矿山公园/README.md' },
    ]
  },
  // { text: '文体场馆', link: '/notes/文体场馆/README.md' },

  {
    text: '文体场馆',
    items: [
      { text: '体育中心', link: '/notes/文体场馆/体育中心/README.md' },
      { text: '博物馆', link: '/notes/文体场馆/博物馆/README.md' },
      { text: '图书馆', link: '/notes/文体场馆/图书馆/README.md' },
      { text: '文化馆', link: '/notes/文体场馆/文化馆/README.md' },
      { text: '文保单位', link: '/notes/文体场馆/文保单位/README.md' },
      { text: '演出场所', link: '/notes/文体场馆/演出场所/README.md' },
      { text: '美术馆', link: '/notes/文体场馆/美术馆/README.md' },
    ]
  },
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
  { text: '广场/街区', link: '/notes/广场&街区/README.md' },
  { text: 'Other', link: '/notes/Other/README.md' },
  {
    text: '深圳',
    icon: 'gis:poi-map',
    link: '/city-site-map/city-guides-overview/'
  },
  // {
  //   text: 'Other',
  //   items: [{ text: '骑行&绿道', link: '/notes/Cycling&Greenway/README.md' },
  //   { text: '房车营地', link: '/notes/RVPark /README.md' },
  //   { text: '红色旅游路线', link: '/notes/RedTourismRoute/README.md' }
  //   ]
  // },
  // ...getNavbarData('zh'),
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
  { text: 'Museum&Library', link: '/en/notes/Cultural-Sports-Venues/README.md' },
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

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/en/city-site-map/en-city-guides-overview/'
  },
  // {
  //   text: 'Other',
  //   items: [{ text: 'Cycling&Greenway', link: '/en/notes/Cycling&Greenway/README.md' },
  //   { text: 'RVPark', link: '/en/notes/RVPark/README.md' },
  //   { text: 'Red Tourism Route', link: '/en/notes/RedTourismRoute/README.md' }
  //   ]
  // },
  // ...enSharedNavbar
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
  { text: 'Museum&Bibliothek', link: '/de/notes/Cultural-Sports-Venues/README.md' },
  { text: 'Sonstiges', link: '/de/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/de/city-site-map/de-city-guides-overview/'
  },

  // ...deSharedNavbar
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
  { text: 'Museo&Biblioteca', link: '/es/notes/Cultural-Sports-Venues/README.md' },
  { text: 'Otro', link: '/es/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/es/city-site-map/es-city-guides-overview/'
  },

  // ...esSharedNavbar
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
  { text: 'Musée&Bibliothèque', link: '/fr/notes/Cultural-Sports-Venues/README.md' },
  { text: 'Autre', link: '/fr/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/fr/city-site-map/fr-city-guides-overview/'
  },
  // ...frSharedNavbar
])

export const jaNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/ja/' },
  { text: '旅行記', link: '/ja/blog/' },

  {
    text: '公園',
    items: [{ text: '総合公園', link: '/ja/notes/ComprehensivePark/README.md' },
    { text: 'A級景勝地', link: '/ja/notes/A-Level/README.md' },
    // { text: '専門公園', link: '/ja/notes/SpecializedPark/README.md' },
    { text: '庭園ツアー ', link: '/ja/notes/TravellingGarden/README.md' },
    ]
  },

  {
    text: '専門公園',
    items: [
      // { text: '动物园', link: '/ja/notes/SpecializedPark/Zoo/README.md' },
      { text: '植物园', link: '/ja/notes/SpecializedPark/BotanicalGarden/README.md' },
      // { text: '历史名园', link: '/ja/notes/SpecializedPark/HistoricGarden/README.md' },
      // { text: '遗址公园', link: '/ja/notes/SpecializedPark/HeritagePark/README.md' },
      // { text: '游乐公园', link: '/ja/notes/SpecializedPark/FunParks/README.md' },
      { text: '儿童公园', link: '/ja/notes/SpecializedPark/ChildrenPark/README.md' },
      { text: '体育健身公园', link: '/ja/notes/SpecializedPark/SportsFitness/README.md' },
      // { text: '滨水公园', link: '/ja/notes/SpecializedPark/WaterfrontPark/README.md' },
      { text: '纪念性公园', link: '/ja/notes/SpecializedPark/CommemorativePark/README.md' },
      { text: '雕塑公园', link: '/ja/notes/SpecializedPark/SculpturePark/README.md' },
    ]
  },

  // { text: '風景憩いの緑地', link: '/ja/notes/LandscapeLeisureGreenSpace/README.md' },
  // { text: '広場&街区', link: '/ja/notes/SquareBlock/README.md' },
  {
    text: '風景憩いの緑地',
    items: [{ text: '景勝地', link: '/ja/notes/LandscapeLeisureGreenSpace/ScenicHistoricAreas/README.md' },
    { text: '森林の公園', link: '/ja/notes/LandscapeLeisureGreenSpace/ForestPark/README.md' },
    // { text: '緑地公園', link: '/ja/notes/LandscapeLeisureGreenSpace/GreenPark/README.md' },
    { text: '湿地公園', link: '/ja/notes/LandscapeLeisureGreenSpace/WetlandPark/README.md' },
    { text: '郊外公園', link: '/ja/notes/LandscapeLeisureGreenSpace/CountryPark/README.md' },
    { text: 'ジオパーク', link: '/ja/notes/LandscapeLeisureGreenSpace/GeologicalPark/README.md' },
    { text: '鉱山公園', link: '/ja/notes/LandscapeLeisureGreenSpace/MiningPark/README.md' },
    ]
  },

  // {
  //   // text: '博物館&図書館', link: '/ja/notes/Cultural-Sports-Venues/README.md'
  // },
  {
    text: '文体センター',
    items: [
      { text: '運動中心', link: '/ja/notes/Cultural-Sports-Venues/Sports-Center/README.md' },
      { text: '博物館', link: '/ja/notes/Cultural-Sports-Venues/Museum/README.md' },
      { text: '圖書館', link: '/ja/notes/Cultural-Sports-Venues/Library/README.md' },
      { text: '文化館', link: '/ja/notes/Cultural-Sports-Venues/Cultural-Center/README.md' },
      { text: '文保單位', link: '/ja/notes/Cultural-Sports-Venues/Cultural-Relics-Protection-Unit/README.md' },
      { text: '演出場所', link: '/ja/notes/Cultural-Sports-Venues/Performance-Venue/README.md' },
      { text: '美術館', link: '/ja/notes/Cultural-Sports-Venues/Art-Gallery/README.md' },
    ]
  },

  // { text: 'その他', link: '/ja/notes/Other/README.md' },
  {
    text: 'その他',
    items: [
      { text: '緑道を走る', link: '/ja/notes/Other/Cycling-Greenway/README.md' },
      { text: '赤い観光', link: '/ja/notes/Other/Red-Tourism-Route/README.md' },
      { text: 'カーキャンプ', link: '/ja/notes/Other/RVPark/README.md' },
    ]
  },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/ja/city-site-map/ja-city-guides-overview/'
  },
  // ...jaSharedNavbar
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
  { text: 'Музей&Библиотека', link: '/ru/notes/Cultural-Sports-Venues/README.md' },
  { text: 'Другое', link: '/ru/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/ru/city-site-map/ru-city-guides-overview/'
  },
  // ...ruSharedNavbar
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
  { text: 'Müze&Kütüphane', link: '/tr/notes/Cultural-Sports-Venues/README.md' },
  { text: 'Diğer', link: '/tr/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/tr/city-site-map/tr-city-guides-overview/'
  },
  // ...trSharedNavbar
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
  { text: 'BảoTàng&ThưViện', link: '/vi/notes/Cultural-Sports-Venues/README.md' },
  { text: 'Khác', link: '/vi/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/vi/city-site-map/vi-city-guides-overview/'
  },
  // ...viSharedNavbar
])

export const zhTWNavbar = defineNavbarConfig([
  { text: '首頁', link: '/zh-tw/' },
  { text: '遊記', link: '/zh-tw/blog/' },

  {
    text: '公園',
    items: [{ text: '綜合公園', link: '/zh-tw/notes/ComprehensivePark/README.md' },
    { text: 'A級景區', link: '/zh-tw/notes/A-Level/README.md' },
    { text: '遊園', link: '/zh-tw/notes/TravellingGarden/README.md' },
    ]
  },

  {
    text: '專類公園',
    items: [{ text: '动物园', link: '/zh-tw/notes/SpecializedPark/Zoo/README.md' },
    { text: '植物园', link: '/zh-tw/notes/SpecializedPark/BotanicalGarden/README.md' },
    { text: '历史名园', link: '/zh-tw/notes/SpecializedPark/HistoricGarden/README.md' },
    { text: '遗址公园', link: '/zh-tw/notes/SpecializedPark/HeritagePark/README.md' },
    { text: '游乐公园', link: '/zh-tw/notes/SpecializedPark/FunParks/README.md' },
    { text: '儿童公园', link: '/zh-tw/notes/SpecializedPark/ChildrenPark/README.md' },
    { text: '体育健身公园', link: '/zh-tw/notes/SpecializedPark/SportsFitness/README.md' },
    { text: '濱水公園', link: '/zh-tw/notes/SpecializedPark/WaterFrontPark/README.md' },
    { text: '纪念性公园', link: '/zh-tw/notes/SpecializedPark/CommemorativePark/README.md' },
    { text: '雕塑公园', link: '/zh-tw/notes/SpecializedPark/SculpturePark/README.md' },
    ]
  },

  {
    text: '風景休憩綠地',
    items: [{ text: '風景名勝區', link: '/zh-tw/notes/風景休憩綠地/風景名勝區/README.md' },
    { text: '森林公園', link: '/zh-tw/notes/風景休憩綠地/森林公園/README.md' },
    { text: '濕地公園', link: '/zh-tw/notes/風景休憩綠地/濕地公園/README.md' },
    { text: '郊野公園', link: '/zh-tw/notes/風景休憩綠地/郊野公園/README.md' },
    { text: '地質公園', link: '/zh-tw/notes/風景休憩綠地/地質公園/README.md' },
    { text: '礦場公園', link: '/zh-tw/notes/風景休憩綠地/礦場公園/README.md' },
    ]
  },
  // { text: '幣場&街區', link: '/zh-tw/notes/SquareBlock/README.md' },

  {
    text: '文體場館',
    items: [
      { text: '運動中心', link: '/zh-tw/notes/文體場館/運動中心/README.md' },
      { text: '博物館', link: '/zh-tw/notes/文體場館/博物館/README.md' },
      { text: '圖書館', link: '/zh-tw/notes/文體場館/圖書館/README.md' },
      { text: '文化館', link: '/zh-tw/notes/文體場館/文化館/README.md' },
      { text: '文保單位', link: '/zh-tw/notes/文體場館/文保單位/README.md' },
      { text: '演出場所', link: '/zh-tw/notes/文體場館/演出場所/README.md' },
      { text: '美術館', link: '/zh-tw/notes/文體場館/美術館/README.md' },
    ]
  },

  // { text: '其他', link: '/zh-tw/notes/Other/README.md' },
  {
    text: '其他',
    items: [
      { text: '騎乘綠道', link: '/zh-tw/notes/Other/Cycling-Greenway/README.md' },
      { text: '紅色旅遊路線', link: '/zh-tw/notes/Other/Red-Tourism-Route/README.md' },
      { text: '房車營地', link: '/zh-tw/notes/Other/RVPark/README.md' },
    ]
  },
  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/zh-tw/city-site-map/zh-tw-city-guides-overview/'
  },
  // ...zhTWSharedNavbar
])

export const koNavbar = defineNavbarConfig([
  { text: '홈 페이지', link: '/ko/' },
  { text: '여행기', link: '/ko/blog/' },

  {
    text: '공원',
    items: [{ text: '종합 공원', link: '/ko/notes/ComprehensivePark/README.md' },
    { text: '조경된 오픈 스페이스', link: '/ko/notes/LandscapeLeisureGreenSpace/README.md' },
    { text: '정원 투어', link: '/ko/notes/TravellingGarden/README.md' },
    ]
  },

  {
    text: '전문 공원',
    items: [{ text: '동물원', link: '/ko/notes/SpecializedPark/Zoo/README.md' },
    { text: '식물원', link: '/ko/notes/SpecializedPark/BotanicalGarden/README.md' },
    { text: '역사 정원', link: '/ko/notes/SpecializedPark/HistoricGarden/README.md' },
    { text: '유산 공원', link: '/ko/notes/SpecializedPark/HeritagePark/README.md' },
    { text: '놀이 공원', link: '/ko/notes/SpecializedPark/FunParks/README.md' },
    { text: '어린이 공원', link: '/ko/notes/SpecializedPark/ChildrenPark/README.md' },
    { text: '스포츠 및 피트니스 공원', link: '/ko/notes/SpecializedPark/SportsFitness/README.md' },
    { text: '워터프론트 공원', link: '/ko/notes/SpecializedPark/WaterfrontPark/README.md' },
    { text: '기념 공원', link: '/ko/notes/SpecializedPark/CommemorativePark/README.md' },
    { text: '조각 공원', link: '/ko/notes/SpecializedPark/SculpturePark/README.md' },
    ]
  },

  // { text: '광장 및 근린공원', link: '/ko/notes/SquareBlock/README.md' },
  { text: '박물관 및 도서관', link: '/ko/notes/Cultural-Sports-Venues/README.md' },
  { text: '기타', link: '/ko/notes/Other/README.md' },

  {
    text: 'ShenZhen',
    icon: 'gis:poi-map',
    link: '/ko/city-site-map/ko-city-guides-overview/'
  },
  // ...viSharedNavbar
])
