import { viteBundler } from "@vuepress/bundler-vite";
import { path } from "@vuepress/utils";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ONVIF中文社区",
      description: "ONVIF中文社区 官方文档",
    }
  },

  bundler: viteBundler({
    viteOptions: {
      build: {
        cssCodeSplit: false,
      }, 
    resolve: {
      alias: {
        "cytoscape/dist/cytoscape.umd.js": "cytoscape"
      },
    },
    },
  }),

  theme,

  shouldPrefetch: false,
});
