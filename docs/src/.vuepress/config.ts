import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { removeHtmlExtensionPlugin } from 'vuepress-plugin-remove-html-extension';
import { baiduAnalyticsPlugin } from '@vuepress/plugin-baidu-analytics';
import { getDirname, path } from 'vuepress/utils';

const __dirname = getDirname(import.meta.url);


export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  host: '0.0.0.0',
  title: '云梦都 MC',
  description: '帮助文档',
  head: [
    [
      'link', { rel: 'icon', href: '/images/logo.webp' }
    ],
  ],
  theme,
  plugins: [
    baiduAnalyticsPlugin({
      id: "7a0d3a4e8454cc167b63e7dc1de54488"
    }),
    removeHtmlExtensionPlugin(),
  ],
  clientConfigFile: path.resolve(__dirname, "./client.ts"),
});
