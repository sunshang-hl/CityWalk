import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhSharedNavbar = defineNavbarConfig([
  {
    text: '城市',
    items: [
      {  text: '深圳', link: 'https://shenzhen.citywalk.gronp'}
    ]
  }
])

export const enSharedNavbar = defineNavbarConfig([
  {
    text: 'City',
    items: [
      {  text: 'ShenZhen', link: 'https://shenzhen.citywalk.gronp'}
    ]
  }
])
