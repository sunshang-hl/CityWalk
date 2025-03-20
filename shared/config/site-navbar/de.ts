import { defineNavbarConfig } from 'vuepress-theme-plume'

export const deSharedNavbar = defineNavbarConfig([
  {
    text: 'Provinces',
    items: [
      {
        text: 'Guangdong',
        items: [
          { text: 'Shenzhen', link: 'https://shenzhen.citywalk.group' },
          { text: 'Guangzhou', link: 'https://guangzhou.citywalk.gronp' }
        ]
      },
      // Add more provinces and cities here
    ]
  }
])