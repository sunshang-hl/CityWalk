import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'
import { includeConfig } from '../../../../../shared/config/include'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: '城市漫步-广州',
      lang: 'zh-CN',
      description: '城市漫步广州市首页',
    },
    '/en/': {
      title: 'City Walk GuangZhou',
      lang: 'en-US',
      description: 'city walk with guangzhou',
    },
  },

  head: [
    [
      "script",
      {
        "data-ad-client": "ca-pub-4050514513058387",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
      //   <script async src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4050514513058387"
      //  crossorigin = "anonymous" > </script>
    ]
  ],

  bundler: viteBundler(),
  // 减少不必要的预加载的带宽消耗
  // shouldPrefetch: false,

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://guangzhou.citywalk.group',

    markdown: {
      // demo: true,
      include: includeConfig,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
    },


    codeHighlighter: {
      themes: { light: 'vitesse-light', dark: 'vitesse-dark' },
      notationDiff: true,
      notationErrorLevel: true,
      notationFocus: true,
      notationHighlight: true,
      notationWordHighlight: true,
      highlightLines: true,
      collapsedLines: false,
      lineNumbers: true,
    },

    plugins: {

      //  * Shiki 代码高亮
      //  * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
      //  */
      // shiki: {
      //   // // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
      //   theme: { light: 'vitesse-light', dark: 'vitesse-dark' },
      //   languages: ['js', 'ts', 'html', 'css', 'shell', 'bash', 'typescript', 'javascript'],
      // },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {


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
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },
  }),
})
