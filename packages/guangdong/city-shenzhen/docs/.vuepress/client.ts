import { defineClientConfig } from 'vuepress/client'
import { defineCatalogInfoGetter } from '@vuepress/plugin-catalog/client'
// import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
// import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
// import CustomComponent from './theme/components/Custom.vue'

// import './theme/styles/custom.css'

// Define how to extract catalog info from route meta
defineCatalogInfoGetter((meta) => {
  // If meta has title, return a catalog info object
  if (typeof meta.title === 'string') {
    return {
      title: meta.title,
    }
  }
  return null
})

export default defineClientConfig({
  enhance({ app }) {
    // app.component('Swiper', Swiper)
    // app.component('RepoCard', RepoCard)
    // app.component('CustomComponent', CustomComponent)

  },
})