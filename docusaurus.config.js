// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Rally Documentation Demo",
  staticDirectories: ["static"],
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Easypark Group", // Usually your GitHub org/user name.
  projectName: "Rally", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexPages: true,
        //searchContextByPaths: ["/"],
        docsRouteBasePath: ["/app"],
        docsDir: ["app"],
        language: ["en"],
        //explicitSearchResultPath: true,
        searchBarShortcut: false,
        searchBarShortcutHint: false,
        searchContextByPaths: ["/app"],
        searchBarPosition: "left",
        //hideSearchBarWithNoSearchContext: true,
        // ... other options
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "app", // Change this to 'app'
          routeBasePath: "app", // Optional: change the base URL path from /docs to /app
          sidebarPath: "./sidebars.js",
          breadcrumbs: false,
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Blog title",
          blogDescription: "Blog",
          blogListComponent: "@theme/BlogListPage",
          blogPostComponent: "@theme/BlogPostPage",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/global.css",
        },
      }),
    ],
  ],
  plugins: [],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // announcementBar: {
      //   id: "support_us",
      //   content:
      //     'This is a banner example to prompt for specific occasions <a target="_blank" rel="noopener noreferrer" href="#">Can also support links</a>',
      //   backgroundColor: "var(--rally-color-background-inverted)",
      //   textColor: "var(--rally-color-primary)",
      //   isCloseable: false,
      // },
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-placeholder-light.svg",
          srcDark: "img/logo-placeholder-dark.svg",
        },
        items: [
          {
            type: "doc",
            position: "left",
            docId: "intro",
            label: "App",
          },
          { to: "/blog", label: "Blog", position: "left" },
          { to: "/custom", label: "Custom", position: "left" },
          {
            type: "search",
            position: "right",
          },
        ],
      },
    }),
};

export default config;
