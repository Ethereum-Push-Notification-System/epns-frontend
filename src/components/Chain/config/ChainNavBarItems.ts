export const ChainNavBarItems = [
  { id: 'technology', label: 'Technology', url: '/' },
  { id: 'knowledge', label: 'Knowledge Base', url: '/knowledge' },
  {
    id: 'docs',
    label: 'Developers',
    subItems: [
      {
        id: 'chain-docs',
        label: 'Documentation Hub',
        sublabels: 'Curated docs to integrate Push Chain',
        url: `/docs`,
      },
      {
        id: 'discord',
        label: 'Developer Discord',
        sublabels: 'Join our thriving community of devs',
        url: 'https://discord.com/invite/pushprotocol',
      },
    ],
  },
  { id: 'blog', label: 'Blog', url: '/blog' },
  {
    id: 'resources',
    label: 'resources',
    subItems: [
      {
        id: 'litepaper',
        label: 'Litepaper',
        sublabels: 'Push Chain Litepaper',
        url: `https://push.org/litepaper.pdf`,
      },
      {
        id: 'whitepaper',
        label: 'Whitepaper',
        sublabels: 'Push Chain Whitepaper',
        url: 'https://whitepaper.push.org/',
      },
      {
        id: 'faq',
        label: 'FAQ',
        sublabels: 'Frequently asked questions about Push Chain',
        url: '/',
      },
    ],
  },
];
