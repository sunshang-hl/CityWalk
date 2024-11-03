import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

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

  profile: {
    avatar: '/plume.png',
    name: '城市漫步-深圳 CityWalk ',
    description: '这是收集深圳所有公园绿地、郊野公园、社区公园的地图，我将记录走完鲲鹏径200KM，记录走遍莲花山、笔架山、梧桐山、凤凰山、马峦山的每一个峰。',
    location: 'shenzhen, China',
    organization: 'sunshang-hl',
  },

  footer: {
    copyright: 'Copyright © 2024-present sunshang-hl',
  },


  locales: {
    '/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'City Walk',
        description: 'city walk with shenzhen',
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
  },
})
