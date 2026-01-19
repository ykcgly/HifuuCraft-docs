import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  '/start': [
    {
      text: '开始',
      icon: 'signs-post',
      link: '/start/',
      children: [
        '/start/help.md',
      ]
    },
     {
       text: '指令',
       icon: 'lightbulb',
       link: '/function/',
     },
    {
      text: 'FAQ',
      icon: 'circle-question',
      link: '/FAQ/',
    },
    // {
    //   text: '更新日志',
    //   icon: 'clock',
    //   link: '/changelog/next'
    // },
    {
      text: '更多',
      icon: 'splotch',
      link: '/about/',
    },
  ],
  '/about': [
    {
      text: '贡献指南',
      collapsible: false,
      children: [
        '/about/contribute/zh_style.md',
        '/about/contribute/md_style.md',
        '/about/contribute/md_grammar.md',
      ]
    },
    {
      text: '赞助',
      collapsible: false,
      link: '/about/sponsor.html',
    },
  ],
});
