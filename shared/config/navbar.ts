import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhSharedNavbar = defineNavbarConfig([
  {
    text: '城市',
    items: [
      { text: '全国站点', link: 'https://citywalk.gronp' },
      { text: '深圳', link: 'https://shenzhen.citywalk.gronp' },
      { text: '广州', link: 'https://guangzhou.citywalk.gronp' }
    ]
  }
])

export const enSharedNavbar = defineNavbarConfig([
  {
    text: 'City',
    items: [
      { text: 'home', link: 'https://citywalk.gronp' },
      { text: 'ShenZhen', link: 'https://shenzhen.citywalk.gronp' },
      { text: 'guangzhou', link: 'https://guangzhou.citywalk.gronp' }
    ]
  }
])
