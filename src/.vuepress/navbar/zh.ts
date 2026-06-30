import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  "/guide/",
  "/tutorial/",
  {
    text: "资源专区",
    icon: "lightbulb",
    prefix: "reference/",
    children: ["resources","books","tools","projects"],
  },
  {
    text: "了解更多",
    icon: "laptop-code",
    prefix: "more/",
    children: [
      "contact"
    ],
  },
]);
