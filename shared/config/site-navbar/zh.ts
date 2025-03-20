import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhSharedNavbar = defineNavbarConfig([
  {
    text: '深圳',
    items: [
      {
        text: '广东',
        items: [
          { text: '深圳', link: 'https://shenzhen.citywalk.group' },
          { text: '广州', link: 'https://guangzhou.citywalk.gronp' }
        ]
      },
      // Add more provinces and cities here
      {
        text: '福建',
        items: [
          { text: '厦门', link: 'https://xiamen.citywalk.gronp' },
          { text: '福州', link: 'https://fuzhou.citywalk.gronp' }
        ]
      },
    ]
  }
])