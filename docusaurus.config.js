// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.dracula;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Push | The Communication Protocol of Web3',
  tagline: 'One place to learn about everything Push Protocol!',
  favicon: '/assets/website/favicon.ico',

  // Set the production url of your site here
  url: process.env.GITHUB_ACTIONS
    ? `${process.env.REACT_APP_PUBLIC_URL}`
    : 'https://push.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: process.env.GITHUB_ACTIONS
    ? `/push-website/pr-preview/${process.env.REACT_APP_PREVIEW_BASE}`
    : '/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'push-protocol', // Usually your GitHub org/user name.
  projectName: 'push-website', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace 'en' with 'zh-Hans'.
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  // Themes
  themes: ['@docusaurus/theme-mermaid'],

  // Static linking
  staticDirectories: ['public', 'static'],

  plugins: [
    '@docusaurus/theme-live-codeblock',
    [
      './plugins/blog-plugin',
      {
        id: 'blog',
        path: './blog',
        routeBasePath: 'blog',
        blogSidebarTitle: 'All posts',
        blogSidebarCount: 'ALL',
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              // keep only the 10 most recent blog posts in the feed
              blogPosts: blogPosts.filter((item, index) => index < 10),
              ...rest,
            });
          },
        },
      },
    ],
    require.resolve('./plugins/custom-webpack-plugin'),
    require.resolve('./plugins/myPlugin'),
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
        toExtensions: ['exe', 'zip'], // /myAsset -> /myAsset.zip (if latter exists)
        redirects: [
          {
            from: '/docs/chat/build/get-started/',
            to: 'https://comms.push.org/docs',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs/dev')) {
            // Redirect from /docs/team/X to /community/X and /docs/support/X to /community/X
            return [existingPath.replace('/docs/dev', '/docs')];
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        gtag: {
          trackingID: 'G-N9ZHXNRLYL',
        },
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsed: false,
          // Please change this to your repo.
          // Remove this to remove the 'edit this page' links.
          editUrl: 'https://github.com/push-protocol/push-website/blob/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  headTags: [
    {
      tagName: 'script',
      attributes: {
        type: 'text/javascript',
      },
      innerHTML: `
       (function (l) {
          if (l.search[1] === '/') {
            var decoded = l.search
              .slice(1)
              .split('&')
              .map(function (s) {
                return s.replace(/~and~/g, '&');
              })
              .join('?');
            window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
          }
        })(window.location);
      `,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "/assets/docs/social-card.jpg",
      themeconfig: {
        sidebarCollapsible: true,
      },
      navbar: {
        hideOnScroll: true,
        // title: 'Title with Logo',
        logo: {
          alt: 'Push Logo',
          src: '/assets/website/docshub/PushLogoBlack@3x.png',
          srcDark: '/assets/website/docshub/PushLogo@3x.png',
          href: '/',
        },
        items: [
          {
            to: '/',
            position: 'left',
            label: 'Homepage',
          },
          {
            to: '/docs',
            position: 'left',
            label: 'Docs',
          },
          {
            to: 'https://github.com/push-protocol',
            label: 'GitHub',
            position: 'right',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'right',
          },
          {
            to: 'https://discord.com/invite/pushprotocol',
            label: 'Discord',
            position: 'right',
          },
          {
            to: 'https://app.push.org/',
            label: 'Launch App',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'LHUKHXUHQP',

        // Public API key: it is safe to commit it
        apiKey: 'f41c253713d3cee20253bd3bfb166cac',

        indexName: 'v2-push',
        insights: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      liveCodeBlock: {
        /**
         * The position of the live playground, above or under the editor
         * Possible values: "top" | "bottom"
         */
        playgroundPosition: 'bottom',
      },
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'We are looking to revamp our docs, please fill <a target='_blank' rel='noopener noreferrer' href='#'>this survey</a>',
      //   backgroundColor: '#fff',
      //   textColor: '#e03dc1',
      //   isCloseable: true,
      // },
    }),
};

module.exports = config;
