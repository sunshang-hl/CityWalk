import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

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

const EcologicalConservation = defineNoteConfig({
  dir: 'EcologicalConservation',
  link: '/EcologicalConservation',
  sidebar: 'auto',
})

const LandscapeLeisureGreenSpace = defineNoteConfig({
  dir: 'LandscapeLeisureGreenSpace',
  link: '/LandscapeLeisureGreenSpace',
  sidebar: 'auto',
})

const MuseumLibrary = defineNoteConfig({
  dir: 'MuseumLibrary',
  link: '/MuseumLibrary',
  sidebar: 'auto',
})

const Other = defineNoteConfig({
  dir: 'Other',
  link: '/Other',
  sidebar: 'auto',
})

const SpecializedPark = defineNoteConfig({
  dir: 'SpecializedPark',
  link: '/SpecializedPark',
  sidebar: 'auto',
})

const SquareBlock = defineNoteConfig({
  dir: 'SquareBlock',
  link: '/SquareBlock',
  sidebar: 'auto',
})

const TravellingGarden = defineNoteConfig({
  dir: 'TravellingGarden',
  link: '/TravellingGarden',
  sidebar: 'auto',
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote, CommunityPark, ComprehensivePark, EcologicalConservation, LandscapeLeisureGreenSpace,
    MuseumLibrary, Other, SpecializedPark, SquareBlock, TravellingGarden],
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

