// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Nerite Protocol Documentation",
  tagline: "Go Slow.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://neriteorg.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "NeriteOrg", // Usually your GitHub org/user name.
  projectName: "neriteorg.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/NeriteOrg/neriteorg.github.io",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/nerite-social-card.jpg",
      navbar: {
        title: "Nerite",
        logo: {
          alt: "Nerite Logo",
          src: "/img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "left",
          },
          {
            href: "https://github.com/NeriteOrg/nerite-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "User Docs",
                to: "http://docs.nerite.org/docs/category/user-docs/",
              },
              {
                label: "Technical Documentation",
                to: "http://docs.nerite.org/docs/category/technical-documentation/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Github",
                href: "https://github.com/NeriteOrg/nerite",
              },
              {
                label: "Discord",
                href: "https://discord.gg/5h3avBYxcn",
              },
              {
                label: "X",
                href: "https://x.com/neriteorg",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "DAO Dashboard",
                href: "https://app.aragon.org/#/daos/arbitrum/0x108f48e558078c8ef2eb428e0774d7ecd01f6b1d/dashboard",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Nifty Chess, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
