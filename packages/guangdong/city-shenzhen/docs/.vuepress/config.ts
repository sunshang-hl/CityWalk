import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics'
import { includeConfig } from '../../../../../shared/config/include'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: '城市漫步-深圳',
      lang: 'zh-CN',
      description: '城市漫步深圳站点',
    },
    '/en/': {
      title: 'City Walk ShenZhen',
      lang: 'en-US',
      description: 'city walk website ShenZhen',
    },
    '/de/': {
      title: 'Stadtspaziergang Shenzhen',
      lang: 'de-DE',
      description: 'Stadtspaziergang Shenzhen',
    },
    '/es/': {
      title: 'Paseo por la ciudad Shenzhen',
      lang: 'es-ES',
      description: 'city walk website ShenZhen',
    },
    '/fr/': {
      title: 'Paseo por la ciudad Shenzhen',
      lang: 'fr-FR',
      description: 'city walk website ShenZhen',
    },
    '/ja/': {
      title: '深圳を歩く都市',
      lang: 'ja-JP',
      description: '深圳を歩く都市',
    },
    '/ru/': {
      title: 'Прогулка по городу Шэньчжэнь',
      lang: 'ru-RU',
      description: 'city walk website ShenZhen',
    },
    '/tr/': {
      title: 'Прогулка по городу Шэньчжэнь',
      lang: 'tr-TR',
      description: 'city walk website ShenZhen',
    },
    '/vi/': {
      title: 'Thâm Quyến đi dạo trong thành phố',
      lang: 'vi-VN',
      description: 'city walk website ShenZhen',
    },
    '/zh-TW/': {
      title: '城市漫步-深圳',
      lang: 'zh-TW',
      description: 'city walk website ShenZhen',
    },
  },

  bundler: viteBundler(),

  theme: plumeTheme({
    // 主题内的多语言配置
    locales: {
      '/': {
        // 当前语言显示在导航栏多语言下拉菜单的文本
        selectLanguageName: '简体中文',
        navbar: [
          { text: '首页', link: '/' },
          { text: '博客', link: '/blog/' },
        ]
      },
      '/en/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/en/' },
          { text: 'Blog', link: '/en/blog/' },
        ]
      },
      '/fr/': {
        selectLanguageName: 'Français',
        navbar: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Le Blog', link: '/fr/blog/' },
        ]
      },
      '/de/': {
        selectLanguageName: 'Deutsch',
        navbar: [
          { text: 'Accueil', link: '/de/' },
          { text: 'Le Blog', link: '/de/blog/' },
        ]
      },
      '/es/': {
        selectLanguageName: 'Español',
        navbar: [
          { text: 'Accueil', link: '/es/' },
          { text: 'Le Blog', link: '/es/blog/' },
        ]
      },
      '/ja/': {
        selectLanguageName: '日本語',
        navbar: [
          { text: 'Accueil', link: '/ja/' },
          { text: 'Le Blog', link: '/ja/blog/' },
        ]
      },
      '/ru/': {
        selectLanguageName: 'Русский язык',
        navbar: [
          { text: 'Accueil', link: '/ru/' },
          { text: 'Le Blog', link: '/ru/blog/' },
        ]
      },
      '/tr/': {
        selectLanguageName: 'Türkçe',
        navbar: [
          { text: 'Accueil', link: '/tr/' },
          { text: 'Le Blog', link: '/tr/blog/' },
        ]
      },
      '/vi/': {
        selectLanguageName: 'Tiếng Việt',
        navbar: [
          { text: 'Accueil', link: '/vi/' },
          { text: 'Le Blog', link: '/vi/blog/' },
        ]
      },
      '/zh-TW/': {
        selectLanguageName: '繁体中文',
        navbar: [
          { text: 'Accueil', link: '/zh-TW/' },
          { text: 'Le Blog', link: '/zh-TW/blog/' },
        ]
      }
    },

    //     bulletin: {
    //       layout: 'bottom-right',
    //       title: '公告板标题',
    //       enablePage: true,
    //       lifetime: 'always',
    //       contentType: 'markdown',
    //       content: `\
    // **更新说明**

    // - 新增了一些功能
    // - 修复了一些 bug
    // `,

    //     },

    // 添加您的部署域名
    hostname: 'https://shenzhen.citywalk.group',

    plugins: {
      // 百度统计
      baiduAnalyticsPlugin: {
        id: '21348329',
      },
      //谷歌统计
      googleAnalyticsPlugin: {
        id: 'G-XDBNMHY3T4',
        debug: true,
      },
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      // },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        // demo: true,
        include: includeConfig,
        //   chart: true,
        //   echarts: true,
        //   mermaid: true,
        //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      markdownPower: {
        pdf: true,
        //   caniuse: true,
        //   plot: true,
        bilibili: true,
        youtube: true,
        icons: true,
        //   codepen: true,
        //   replit: true,
        //   codeSandbox: true,
        //   jsfiddle: true,
        //   repl: {
        //     go: true,
        //     rust: true,
        //     kotlin: true,
        //   },
      },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Waline', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: '',
        repoId: '',
        categoryId: '',
        mapping: 'https://citywalk-waline-8ly8k6e5o-sunshang-hls-projects.vercel.app',   //pathname
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
  }),
})
