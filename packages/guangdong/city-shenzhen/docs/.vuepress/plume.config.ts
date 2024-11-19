import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar, deNavbar, esNavbar, frNavbar, jaNavbar, ruNavbar, trNavbar, viNavbar, zhTWNavbar } from './navbar'
import { enNotes, zhNotes, deNotes, esNotes, frNotes, jaNotes, ruNotes, trNotes, viNotes, zhTWNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  // your git repo url
  docsRepo: 'https://github.com/sunshang-hl/CityWalk',
  docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/sunshang-hl/CityWalk' },
    { icon: 'qq', link: 'https://txc.qq.com/products/674896' },
  ],
  navbarSocialInclude: ['github'],

  profile: {
    avatar: '/plume.png',
    name: '城市漫步-深圳 CityWalk ',
    description: '这是收集深圳所有公园绿地、郊野公园、社区公园的地图,我将记录走完鲲鹏径200KM,记录走遍莲花山、笔架山、梧桐山、凤凰山、马峦山的每一个峰。',
    location: 'shenzhen, China',
    organization: 'sunshang-hl',
    layout: 'right',
    circle: true,
  },

  footer: {
    copyright: 'Copyright © 2024-present sunshang-hl',
  },


  locales: {
    '/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: '城市漫步',
        description: '城市漫步-深圳 CityWalk ',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'City Walk',
        description: 'city walk with shenzhen',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
    '/de/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Stadtspaziergang',
        description: 'Stadtspaziergang  Shenzhen',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: deNavbar,
      notes: deNotes,
    },
    '/es/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Paseo por la ciudad',
        description: 'paseo por la ciudad de Shenzhen',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: esNavbar,
      notes: esNotes,
    },
    '/fr/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'Promenade en ville',
        description: 'Promenade en ville à Shenzhen',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: frNavbar,
      notes: frNotes,
    },
    '/ja/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'City Walk',
        description: '深センの街歩き',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: jaNavbar,
      notes: jaNotes,
    },
    '/ru/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'прогулка по городу',
        description: 'Прогулка по городу в Шэньчжэне',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: ruNavbar,
      notes: ruNotes,
    },
    '/tr/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'şehir yürüyüşü',
        description: 'Shenzhen de bir şehir yürüyüşü',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: trNavbar,
      notes: trNotes,
    },
    '/vi/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'đi dạo trong thành phố',
        description: 'Một chuyến đi dạo trong thành phố Thâm Quyến',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: viNavbar,
      notes: viNotes,
    },
    '/zh-TW/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: '城市漫步',
        description: '在深圳城市漫步',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhTWNavbar,
      notes: zhTWNotes,
    },
  },
})
