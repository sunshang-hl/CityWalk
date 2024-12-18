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
  navbarSocialInclude: ['github', 'qq'],

  profile: {
    avatar: '/plume.png',
    name: '城市漫步-广州 CityWalk',
    description: '广州-千年都市，这里文化悠久、历史韵律源远流长，这里有白云山、有博物馆、更有串城的珠江，这里有李小龙的故居、有黄木岗烈士公墓。每一处都值得留恋。',
    location: 'shenzhen, China',
    organization: 'sunshang-hl',
  },

  footer: {
    copyright: 'Copyright © 2024-present sunshang-hl',
    message: '粤ICP备2024338794号-1',
  },

  locales: {
    '/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'City Walk',
        description: 'city walk with guangzhou',
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
        description: 'city walk with guangzhou',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
