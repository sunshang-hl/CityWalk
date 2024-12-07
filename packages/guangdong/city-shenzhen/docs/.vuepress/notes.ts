import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const 综合公园 = defineNoteConfig({
  dir: '综合公园',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const 社区公园 = defineNoteConfig({
  dir: '社区公园',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const 游园 = defineNoteConfig({
  dir: '游园',
  link: '/TravellingGarden',
  sidebar: 'auto',
})
/// 专类公园
const 动物园 = defineNoteConfig({
  dir: '专类公园/动物园',
  link: '/SpecializedPark/Zoo',
  sidebar: 'auto',
})

const 植物园 = defineNoteConfig({
  dir: '专类公园/植物园',
  link: '/SpecializedPark/BotanicalGarden',
  sidebar: 'auto',
})

const 历史名园 = defineNoteConfig({
  dir: '专类公园/历史名园',
  link: '/SpecializedPark/HistoricGarden',
  sidebar: 'auto',
})

const 遗址公园 = defineNoteConfig({
  dir: '专类公园/遗址公园',
  link: '/SpecializedPark/HeritagePark',
  sidebar: 'auto',
})

const 游乐公园 = defineNoteConfig({
  dir: '专类公园/游乐公园',
  link: '/SpecializedPark/FunParks',
  sidebar: 'auto',
})

const 儿童公园 = defineNoteConfig({
  dir: '专类公园/儿童公园',
  link: '/SpecializedPark/ChildrenPark',
  sidebar: 'auto',
})

const 体育健身公园 = defineNoteConfig({
  dir: '专类公园/体育健身公园',
  link: '/SpecializedPark/SportsFitness',
  sidebar: 'auto',
})

const 滨水公园 = defineNoteConfig({
  dir: '专类公园/滨水公园',
  link: '/SpecializedPark/WaterFrontPark',
  sidebar: 'auto',
})

const 纪念性公园 = defineNoteConfig({
  dir: '专类公园/纪念性公园',
  link: '/SpecializedPark/CommemorativePark',
  sidebar: 'auto',
})

const 雕塑公园 = defineNoteConfig({
  dir: '专类公园/雕塑公园',
  link: '/SpecializedPark/SculpturePark',
  sidebar: 'auto',
})


/// 专类公园
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
  dir: '文体场馆',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const 广场和街区 = defineNoteConfig({
  dir: '广场&街区',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const 专项 = defineNoteConfig({
  dir: '专项',
  link: '/Other',
  sidebar: 'auto',
})

const 专类公园 = defineNoteConfig({
  dir: '专类公园',
  link: '/SpecializedPark',
  sidebar: 'auto',
})




export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [社区公园, 综合公园, 生态保育绿地, 风景休憩绿地,
    博物和图书馆, 专项, 专类公园, 广场和街区, 游园, 动物园,
    历史名园, 植物园, 遗址公园, 游乐公园, 儿童公园,
    体育健身公园, 滨水公园, 纪念性公园, 雕塑公园],
})

/* =================== locale: en-US ======================= */

const CommunityPark = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const ComprehensivePark = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const SpecializedPark = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const TravellingGarden = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const LandscapeLeisureGreenSpace = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const CulturalSportsVenues = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const SquareBlock = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Other = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})


export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [CommunityPark, ComprehensivePark, SpecializedPark, TravellingGarden, LandscapeLeisureGreenSpace,
    CulturalSportsVenues, SquareBlock, Other],
})

/* =================== locale: de-DE ======================= */

const GemeindePark = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const UmfassenderPark = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const SpezialPark = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const Gartentour = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const LandschaftlicherErholungsraum = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const MuseumBibliothek = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const QuadratBlock = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Sonstiges = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})


export const deNotes = defineNotesConfig({
  dir: 'de/notes',
  link: '/de/',
  notes: [GemeindePark, UmfassenderPark, SpezialPark, Gartentour, LandschaftlicherErholungsraum,
    MuseumBibliothek, QuadratBlock, Sonstiges],
})


/* =================== locale: es-ES ======================= */

const ParqueComunitario = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const ParqueIntegral = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const ParqueEspecializado = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const VisitaAlJardín = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const EspacioVerdeDeDescansoEscénico = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const MuseoBiblioteca = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const PlazaBarrio = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Otro = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})


export const esNotes = defineNotesConfig({
  dir: 'es/notes',
  link: '/es/',
  notes: [ParqueComunitario, ParqueIntegral, ParqueEspecializado, VisitaAlJardín, EspacioVerdeDeDescansoEscénico,
    MuseoBiblioteca, PlazaBarrio, Otro],
})


/* =================== locale: fr-FR ======================= */

const ParcCommunautaire = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const ParcOmnisports = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

const ParcSpécialisé = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const VisiteDuJardin = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const EspaceVertDeReposPittoresque = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const MuséeBibliothèque = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const CarréBloc = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const Autre = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

export const frNotes = defineNotesConfig({
  dir: 'fr/notes',
  link: '/fr/',
  notes: [ParcCommunautaire, ParcOmnisports, ParcSpécialisé, VisiteDuJardin,
    EspaceVertDeReposPittoresque, MuséeBibliothèque, CarréBloc, Autre],
})

/* =================== locale: ja-JP ======================= */

const コミュニティパーク = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const 総合公園 = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})


/// 专类公园
const 動物園ja = defineNoteConfig({
  dir: 'SpecializedPark/Zoo',
  link: '/SpecializedPark/Zoo',
  sidebar: 'auto',
})

const 植物園ja = defineNoteConfig({
  dir: 'SpecializedPark/BotanicalGarden',
  link: '/SpecializedPark/BotanicalGarden',
  sidebar: 'auto',
})

const 歴史ある庭園 = defineNoteConfig({
  dir: 'SpecializedPark/HistoricGarden',
  link: '/SpecializedPark/HistoricGarden',
  sidebar: 'auto',
})

const ヘリテージパーク = defineNoteConfig({
  dir: 'SpecializedPark/HeritagePark',
  link: '/SpecializedPark/HeritagePark',
  sidebar: 'auto',
})

const 遊園地 = defineNoteConfig({
  dir: 'SpecializedPark/FunParks',
  link: '/SpecializedPark/FunParks',
  sidebar: 'auto',
})

const 児童公園 = defineNoteConfig({
  dir: 'SpecializedPark/ChildrenPark',
  link: '/SpecializedPark/ChildrenPark',
  sidebar: 'auto',
})



const スポーツフィットネスパーク = defineNoteConfig({
  dir: 'SpecializedPark/SportsFitness',
  link: '/SpecializedPark/SportsFitness',
  sidebar: 'auto',
})

const 浜水公園 = defineNoteConfig({
  dir: 'SpecializedPark/WaterFrontPark',
  link: '/SpecializedPark/WaterfrontPark',
  sidebar: 'auto',
})

const 記念公園 = defineNoteConfig({
  dir: 'SpecializedPark/CommemorativePark',
  link: '/SpecializedPark/CommemorativePark',
  sidebar: 'auto',
})

const 彫刻公園 = defineNoteConfig({
  dir: 'SpecializedPark/SculpturePark',
  link: '/SpecializedPark/SculpturePark',
  sidebar: 'auto',
})
/// 专类公园

const 庭園ツアー = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

const 風景休息緑地 = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const 博物館和図書館 = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const 広場和街区 = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const その他 = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

export const jaNotes = defineNotesConfig({
  dir: 'ja/notes',
  link: '/ja/',
  notes: [コミュニティパーク, 総合公園, 風景休息緑地, 博物館和図書館, 動物園ja, 植物園ja,
    その他, 広場和街区, 風景休息緑地, 庭園ツアー, 歴史ある庭園,
    ヘリテージパーク, 遊園地, 児童公園, スポーツフィットネスパーク,
    浜水公園, 記念公園, 彫刻公園],
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
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
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
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
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
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
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


/* =================== locale: ko-KR ======================= */

const 커뮤니티공원 = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const 종합공원 = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})

/// 专类公园
const 동물원 = defineNoteConfig({
  dir: 'SpecializedPark/Zoo',
  link: '/SpecializedPark/Zoo',
  sidebar: 'auto',
})

const 식물원 = defineNoteConfig({
  dir: 'SpecializedPark/BotanicalGarden',
  link: '/SpecializedPark/BotanicalGarden',
  sidebar: 'auto',
})

const 역사공원 = defineNoteConfig({
  dir: 'SpecializedPark/HistoricGarden',
  link: '/SpecializedPark/HistoricGarden',
  sidebar: 'auto',
})

const 유산공원 = defineNoteConfig({
  dir: 'SpecializedPark/HeritagePark',
  link: '/SpecializedPark/HeritagePark',
  sidebar: 'auto',
})

const 놀이공원 = defineNoteConfig({
  dir: 'SpecializedPark/FunParks',
  link: '/SpecializedPark/FunParks',
  sidebar: 'auto',
})

const 어린이공원 = defineNoteConfig({
  dir: 'SpecializedPark/ChildrenPark',
  link: '/SpecializedPark/ChildrenPark',
  sidebar: 'auto',
})

const 스포츠및피트니스공원 = defineNoteConfig({
  dir: 'SpecializedPark/SportsFitness',
  link: '/SpecializedPark/SportsFitness',
  sidebar: 'auto',
})

const 워터프론트공원 = defineNoteConfig({
  dir: 'SpecializedPark/WaterfrontPark',
  link: '/SpecializedPark/WaterfrontPark',
  sidebar: 'auto',
})

const 기념공원 = defineNoteConfig({
  dir: 'SpecializedPark/CommemorativePark',
  link: '/SpecializedPark/CommemorativePark',
  sidebar: 'auto',
})

const 조각공원 = defineNoteConfig({
  dir: 'SpecializedPark/SculpturePark',
  link: '/SpecializedPark/SculpturePark',
  sidebar: 'auto',
})
/// 专类公园

const 조경된열린공간 = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const 박물관및도서관 = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const 광장및인근지역 = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const 기타 = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})


const 정원투어 = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

export const koNotes = defineNotesConfig({
  dir: 'ko/notes',
  link: '/ko',
  notes: [커뮤니티공원, 종합공원, 동물원, 식물원, 역사공원, 유산공원, 놀이공원,
    어린이공원, 스포츠및피트니스공원, 워터프론트공원, 기념공원, 조각공원,
    조경된열린공간, 박물관및도서관, 광장및인근지역, 기타, 정원투어],
})


/* =================== locale: pt ======================= */

const ParquesComunitários = defineNoteConfig({
  dir: 'CommunityPark',
  link: '/CommunityPark',
  sidebar: 'auto',
})

const ParquesDeUsoGeral = defineNoteConfig({
  dir: 'ComprehensivePark',
  link: '/ComprehensivePark',
  sidebar: 'auto',
})


const PasseioPeloJardim = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

/// 专类公园
const JardinsZoológicos = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})
/// 专类公园

const EspaçoAbertoPaisagístico = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const MuseusBibliotecas = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
  sidebar: 'auto',
})

const PraçasBairros = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const OutrosParques = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

export const ptNotes = defineNotesConfig({
  dir: 'pt/notes',
  link: '/pt',
  notes: [ParquesComunitários, ParquesDeUsoGeral, PasseioPeloJardim, JardinsZoológicos,
    EspaçoAbertoPaisagístico, MuseusBibliotecas, PraçasBairros,
    OutrosParques
  ],
})

/* =================== locale: zh-tw ======================= */

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


const 遊園 = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

/// 专类公园
const 動物園 = defineNoteConfig({
  dir: 'SpecializedPark/Zoo',
  link: '/SpecializedPark/Zoo',
  sidebar: 'auto',
})

const 植物園 = defineNoteConfig({
  dir: 'SpecializedPark/BotanicalGarden',
  link: '/SpecializedPark/BotanicalGarden',
  sidebar: 'auto',
})

const 歷史名園 = defineNoteConfig({
  dir: 'SpecializedPark/HistoricGarden',
  link: '/SpecializedPark/HistoricGarden',
  sidebar: 'auto',
})

const 遺址公園 = defineNoteConfig({
  dir: 'SpecializedPark/HeritagePark',
  link: '/SpecializedPark/HeritagePark',
  sidebar: 'auto',
})

const 遊樂公園 = defineNoteConfig({
  dir: 'SpecializedPark/FunParks',
  link: '/SpecializedPark/FunParks',
  sidebar: 'auto',
})

const 兒童公園 = defineNoteConfig({
  dir: 'SpecializedPark/ChildrenPark',
  link: '/SpecializedPark/ChildrenPark',
  sidebar: 'auto',
})

const 運動健身公園 = defineNoteConfig({
  dir: 'SpecializedPark/SportsFitness',
  link: '/SpecializedPark/SportsFitness',
  sidebar: 'auto',
})

const 濱水公園 = defineNoteConfig({
  dir: 'SpecializedPark/WaterfrontPark',
  link: '/SpecializedPark/WaterfrontPark',
  sidebar: 'auto',
})

const 紀念性公園 = defineNoteConfig({
  dir: 'SpecializedPark/CommemorativePark',
  link: '/SpecializedPark/CommemorativePark',
  sidebar: 'auto',
})

const 雕塑公園 = defineNoteConfig({
  dir: 'SpecializedPark/SculpturePark',
  link: '/SpecializedPark/SculpturePark',
  sidebar: 'auto',
})
/// 专类公园

const 風景休憩綠地 = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const 博物館和圖書館 = defineNoteConfig({
  dir: 'Cultural-Sports-Venues',
  link: '/Cultural-Sports-Venues',
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

export const zhTWNotes = defineNotesConfig({
  dir: 'zh-tw/notes',
  link: '/zh-tw',
  notes: [社區公園, 綜合公園, 生态保育绿地, 風景休憩綠地,
    博物館和圖書館, 動物園, 植物園, 歷史名園,
    遺址公園, 遊樂公園, 兒童公園, 運動健身公園, 濱水公園,
    紀念性公園, 雕塑公園, 幣場和街區, 遊園, 其他],
})