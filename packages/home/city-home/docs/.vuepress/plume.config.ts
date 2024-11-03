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

  // logo: '/plume.png',
  // docsRepo: 'https://github.com/pengzhanbo/vuepress-theme-plume',
  // docsDir: 'docs',

  appearance: true,

  social: [
    { icon: 'github', link: 'https://github.com/sunshang-hl/CityWalk' },
    { icon: 'qq', link: 'https://txc.qq.com/products/674896' },
  ],

  profile: {
    avatar: '/plume.png',
    name: '城市漫步 CityWalk',
    description: '这是一个帮你了解全国所有城市公园绿地、户外旅游的的地图，无论是身边社区公园还是远方的大千世界，都一网打尽。',
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
        name: '城市漫步 City Walk',
        description: 'city walk website home',
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
        name: 'City Walk China',
        description: 'Chinese City Walk Website Homepage',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
