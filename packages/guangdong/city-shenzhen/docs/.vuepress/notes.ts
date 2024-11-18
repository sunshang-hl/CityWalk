import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

// const zhDemoNote = defineNoteConfig({
//   dir: 'demo',
//   link: '/demo',
//   sidebar: ['', 'foo', 'bar'],
// })

const 社区公园 = defineNoteConfig({
  dir: '社区公园',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const 综合公园 = defineNoteConfig({
  dir: '综合公园',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const 生态保育绿地 = defineNoteConfig({
  dir: '生态保育绿地',
  link: '/EcologicalConservation',
  sidebar: 'auto',
})

const 风景休憩绿地 = defineNoteConfig({
  dir: '风景休憩绿地',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const 博物和图书馆 = defineNoteConfig({
  dir: '博物&图书馆',
  link: '/MuseumLibrary',
  sidebar: 'auto',
})

const 广场和街区 = defineNoteConfig({
  dir: '广场&街区',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Other = defineNoteConfig({
  dir: '专项',
  link: '/Other',
  sidebar: 'auto',
})

const 专类公园 = defineNoteConfig({
  dir: '专类公园',
  link: '/SpecializedPark',
  sidebar: 'auto',
})


const 游园 = defineNoteConfig({
  dir: '游园',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [社区公园, 综合公园, 生态保育绿地, 风景休憩绿地,
    博物和图书馆, Other, 专类公园, 广场和街区, 游园],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

/* =================== locale: de-DE ======================= */

const deDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const deNotes = defineNotesConfig({
  dir: 'de/notes',
  link: '/de/',
  notes: [deDemoNote],
})


/* =================== locale: es-ES ======================= */

const esDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const esNotes = defineNotesConfig({
  dir: 'es/notes',
  link: '/es/',
  notes: [esDemoNote],
})


/* =================== locale: fr-FR ======================= */

const frDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const frNotes = defineNotesConfig({
  dir: 'fr/notes',
  link: '/fr/',
  notes: [frDemoNote],
})

/* =================== locale: ja-JP ======================= */

const jaDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const jaNotes = defineNotesConfig({
  dir: 'ja/notes',
  link: '/ja/',
  notes: [frDemoNote],
})

/* =================== locale: ru-RU ======================= */

const ПаркOбщины = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const ПаркКомплексный = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const ПаркСпециализированный = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const ЭкскурсияПоCаду = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const ЛандшафтнаяЭонаOтдыха = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const МузейБиблиотека = defineNoteConfig({
  dir: 'MuseumLibrary',
  link: '/MuseumLibrary',
  sidebar: 'auto',
})

const Квадратблок = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Другое = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

export const ruNotes = defineNotesConfig({
  dir: 'ru/notes',
  link: '/ru/',
  notes: [ПаркOбщины, ПаркКомплексный, ПаркСпециализированный, ЭкскурсияПоCаду, ЛандшафтнаяЭонаOтдыха,
    МузейБиблиотека, Квадратблок, Другое],
})


/* =================== locale: tr-TR ======================= */

const ToplulukPark = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const KapsamlıPark = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const UzmanlaşmışParklar = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const BahçeTuru = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const ManzaralıYeşilAlan = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const MüzeKütüphane = defineNoteConfig({
  dir: 'MuseumLibrary',
  link: '/MuseumLibrary',
  sidebar: 'auto',
})

const KareBlok = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Diğer = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})


export const trNotes = defineNotesConfig({
  dir: 'tr/notes',
  link: '/tr/',
  notes: [ToplulukPark, KapsamlıPark, UzmanlaşmışParklar, BahçeTuru, ManzaralıYeşilAlan, MüzeKütüphane, KareBlok, Diğer],
})


/* =================== locale: vi-VN ======================= */

const CôngViênCộngDồng = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const CôngViênTổngHợp = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const CôngViênChuyênBiệt = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const ThamQuanVườn = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const KhuVựcXanhNghỉNgơiCảnhQuan = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const BảoTàngThưViện = defineNoteConfig({
  dir: 'MuseumLibrary',
  link: '/MuseumLibrary',
  sidebar: 'auto',
})

const QuảngTrườngKhuPhố = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Khác = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

export const viNotes = defineNotesConfig({
  dir: 'vi/notes',
  link: '/vi/',
  notes: [CôngViênCộngDồng, CôngViênTổngHợp, CôngViênChuyênBiệt, ThamQuanVườn,
    KhuVựcXanhNghỉNgơiCảnhQuan, BảoTàngThưViện, QuảngTrườngKhuPhố, Khác],
})

/* =================== locale: zh-TW ======================= */

const zhTWDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const 社區公園 = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const 綜合公園 = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

// const 生态保育绿地 = defineNoteConfig({
//   dir: '生态保育绿地',
//   link: '/EcologicalConservation',
//   sidebar: 'auto',
// })

const 風景休憩綠地 = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const 博物館和圖書館 = defineNoteConfig({
  dir: 'MuseumLibrary',
  link: '/MuseumLibrary',
  sidebar: 'auto',
})

const 幣場和街區 = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const 其他 = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

const 專類公園 = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})


const 遊園 = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

export const zhTWNotes = defineNotesConfig({
  dir: 'zh-TW/notes',
  link: '/zh-TW',
  notes: [社區公園, 綜合公園, 生态保育绿地, 風景休憩綠地,
    博物館和圖書館, 專類公園, 幣場和街區, 遊園, 其他],
})

