// const themeConfig = require('./themeConfig');

module.exports = {
    title: 'Bruce',
    description: '一个算法工程师的修炼金字塔',
    // 语言设置
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    base:'/blog/',
    dest:'blogs',
    // 对markdown的配置
    markdown: {
      // 显示行号
      lineNumbers: true,
      // markdown-it-anchor 的选项
      anchor: { permalink: true },
      // markdown-it-toc 的选项
      toc: { includeLevel: [1, 2, 3] },
      config: md => {
         // 使用更多 markdown-it-katex 插件！
          md.set({html: true});
          md.use(require("markdown-it"));
          // md.use(require("markdown-it-katex"));
          // md.use(require("markdown-it-katex-external"));
      }
    },
    // 主题设置
    theme: 'reco',
    themeConfig: {
        // author
        author: 'bruce ran',
        authorAvatar: 'img/bruce.jpg',
        // 备案信息
        record: 'ICP 备案文案',
        recordLink: 'ICP 备案指向链接',
        cyberSecurityRecord: '公安部备案文案',
        cyberSecurityLink: '公安部备案指向链接',
        // 项目开始时间，只填写年份
        startYear: '2019',
        
        // 导航设置
        nav: [
            // 主页
            { text: 'Home',link: '/',icon: 'reco-home' },
            // 分类
            { text: 'Category',link: '/category/',icon: 'reco-category',
                items:[
                    {text: 'ML', link: '/category/ML/'},
                    {text: 'NLP', link: '/category/Nlp/'},
                    {text: 'Python', link: '/category/Python/'},
                    {text: 'Leetcode', link: '/category/Leetcode/'},
                    {text: 'Thinking', link: '/category/Thinking/'},
                ]
            },
            // 时间线设置
            { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
            // 账号
            { text: 'About', link: '/about/', icon: 'reco-account',
                items:[
                    {text: 'me', link: '/about/me/about.md'},
                    {text: 'tool', link: '/about/tool/'},
                    {text: 'link', link: '/about/link/'},
                ]
            },
            // github
            { text: 'Github', link: 'https://github.com/dygwyp', icon: 'reco-github' },
            // CSDN
            { text: 'CSDN', link: 'https://blog.csdn.net/lingpy', icon: 'reco-csdn' },
        ],
        // 侧边栏设置
        // sidebar: 'auto',
        // sidebar: {
        //     '/category/Leetcode/':['dp','tree'],
        //     '/category/ML/':[''],
        //     // collapsable: false,
        //     // children:['/category/Leetcode/dp']
        // },
        sidebarDepth: '2',
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        lastUpdated: '最近更新',
        // 博客配置
        type: 'blog',
        blogConfig: {
          category: {
            location: 2,     // 在导航栏菜单中所占的位置，默认2
            text: 'Category' // 默认文案 “分类”
          },
          tag: {
            location: 3,     // 在导航栏菜单中所占的位置，默认3
            text: 'Tag'      // 默认文案 “标签”
          }
        },
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        // 其它设置
        locales: {
          '/': {
            recoLocales: {
              homeBlog: {
                article: '美文', // 默认 文章
                tag: '标识', // 默认 标签
                category: '类别', // 默认 分类
                friendLink: '友链' // 默认 友情链接
              },
              pagation: {
                prev: '上一页',
                next: '下一页',
                go: '前往',
                jump: '跳转至'
              }
            }
          }
        },
        // 评论设置
        valineConfig: {
            appId: '8CqS3JhSz9VATYi5tyd0ajUI-gzGzoHsz',// your appId
            appKey: 'dTViqMWRwcijBtdAfETIColn', // your appKey
        },
        head: [
            ['link',{rel:'icon',href:'img/bruce.jpg'}],
            // 移动端优化
            ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
            // markdown公式
            ['link', {rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css"}],
            ['link', {rel: 'stylesheet', href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"}]
        ]
    },
    // 插件
    plugins: [
    [
      //先安装在配置， npm install @vuepress-plugin-meting --save
      'meting', {
      metingApi: "https://api.i-meto.com/meting/api",
      meting: {
        server: "netease",
        type: "playlist",
        mid: "621465725"
      },          // 不配置该项的话不会出现全局播放器
      aplayer: {
        // 吸底模式
        fixed: true,
        mini: true,
        // 自动播放
        autoplay: true,
        // 歌曲栏折叠
        listFolded:true,
        // 颜色
        theme: '#f9bcdd',
        // 播放顺序为随机
        order: 'random',
        // 初始音量
        volume: 0.1,
        // 关闭歌词显示
        lrcType: 0
      },
      mobile :{
        // 手机端去掉cover图
        cover: false,
      }
    }],
      //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
    ["cursor-effects",
    {
      size: 3,                    // size of the particle, default: 2
      shape: ['star'],  // shape of the particle, default: 'star'
      zIndex: 999999999           // z-index property of the canvas, default: 999999999
    }],
    //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    ["dynamic-title",
    {
      showIcon: "img/bruce_head.png",
      showText: "(/≧▽≦/)嘻嘻！我们又相遇了！",
      hideIcon: "img/bruce_head.png",
      hideText: "(●—●)哎呀，舍不得你！",
      recoverTime: 2000
    }],
    //图片放大插件 先安装在配置， npm install @vuepress\plugin-medium-zoom --save
    ['@vuepress/plugin-medium-zoom', {
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 24,
        background: 'rgba(25,18,25,0.9)',
        scrollOffset: 40
      }
    }],
    // mathjax-work!
    [
      "vuepress-plugin-mathjax",{
        target:'svg',
        macros:{
          '*':'\\times'
        }
      }
    ],
     //插件广场的流程图插件 先安装在配置 npm install vuepress-plugin-flowchart --save
    ['flowchart'],
      //插件广场的sitemap插件 先安装在配置 npm install vuepress-plugin-sitemap --save
    'sitemap',{
      hostname: 'https://pake.web.id'
    },
    ['@vuepress/pwa', {
      serviceWorker: true,  //vuepress插件PWA 先安装在配置 npm install @vuepress/pwa --save
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    }],
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",  //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!"
      }
    }],
    // 版权
    ['copyright',
    {
      noCopy: true, // 选中的文字将无法被复制
      minLength: 20, // 如果长度超过 100 个字符
      authorName:{
        'en-US':'bruce ran',
        'zn_CN':'凌客',
      }
    }],
    // 自动侧边栏
    // 'autobar',
    // 百度自动推送
    ['vuepress-plugin-baidu-autopush'],
    // ["@vuepress-yard/vuepress-plugin-window",{
    //   title: "bruceの公告",  //vuepress公告插件 先安装在配置 npm install @vuepress-yard/vuepress-plugin-window --save
    //   contentInfo: {
    //     title: "欢迎进来的小耳朵 🎉🎉🎉",
    //     needImg: true,
    //     imgUrl: "https://reinness.com/avatar.png",
    //     content: "喜欢博皮可以到博客园关注教程",
    //     contentStyle: ""
    //   },
    //   bottomInfo: {
    //     btnText: '关于',
    //     linkTo: 'https://cnblogs.com/glassysky'
    //   },
    //   closeOnce: false
    // }],
    ]
}