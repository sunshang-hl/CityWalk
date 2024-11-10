import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

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
  notes: [zhDemoNote, 社区公园, 综合公园, 生态保育绿地, 风景休憩绿地,
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

