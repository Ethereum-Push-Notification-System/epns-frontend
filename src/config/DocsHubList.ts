interface IQuickstartItem {
  title: string;
  codeblock: string;
}

export interface ITechDocItem {
  title: string;
  description: string;
  codeblock?: string;
  srcref?: string;
  alt?: string;
  link?: string;
  target?: string;
}

interface ISdkListItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  PinkSvg?: React.ComponentType<React.ComponentProps<'svg'>>;
  link?: string;
}

export const QuickstartItems: IQuickstartItem[] = [
  {
    title: 'Push Chain Quickstart',
    codeblock: `// Import Push Chain SDK
import { PushChain, createUniversalAccount, createUniversalSigner } from '@pushchain/devnet';

// Import utility functions from viem
import { hexToBytes } from 'viem';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';

// Generate viem Account
const account = privateKeyToAccount(generatePrivateKey());

// Create Signer. Defaults to the Ethereum Sepolia chain
const signer = createUniversalSigner({
  address: account.address,
  signMessage: async (data) =>
    hexToBytes(await account.signMessage({ message: { raw: data } })),
});

// Initialize SDK
const pushChain = await PushChain.initialize(signer);

// Send Transaction
const tx = await pushChain.tx.send(
  [
    // Defaults to the Ethereum Sepolia chain
    createUniversalAccount({
      address: '0x22B173e0596c6723dD1A95817052D96b97176Dd8',
    }),
  ],
  { category: 'MY_CUSTOM_CATEGORY', data: 'Hello world!' }
);
`,
  },
];

export const TechDocItems: ITechDocItem[] = [
  {
    title: 'Push Chain',
    srcref: 'pushchain',
    alt: 'Logo representing Push Chain - Push Protocol',
    link: '/docs/chain',
    target: '_self',
    description:
      'Explore Push Chain and learn how to integrate it for building universal Apps.',
    codeblock: `// Create Signer. Defaults to the Ethereum Sepolia chain
const signer = createUniversalSigner({
  address: account.address,
  signMessage: async (data) =>
    hexToBytes(await account.signMessage({ message: { raw: data } })),
});

// Initialize SDK
const pushChain = await PushChain.initialize(signer);

// Send Transaction
const tx = await pushChain.tx.send(
  [
    // Defaults to the Ethereum Sepolia chain
    createUniversalAccount({
      address: '0x22B173e0596c6723dD1A95817052D96b97176Dd8',
    }),
  ],
  { category: 'MY_CUSTOM_CATEGORY', data: 'Hello world!' }
);`,
  },
  {
    title: 'Examples',
    srcref: 'star',
    alt: 'Logo representing examples repo - Push Protocol',
    link: 'https://github.com/push-protocol/push-chain-sdk/tree/main/examples',
    target: '_blank',
    description:
      'Examples to showcase the power of Push Protocol’s communication stack.',
  },
  {
    title: 'Push Reward Points',
    srcref: 'rewards',
    alt: 'Logo representing reward points of Push Protocol',
    link: '/docs/rewards',
    target: '_self',
    description:
      'Reward Points Program for contributors. Complete activities and earn points.',
  },
  {
    title: 'Push Notification & Chat Protocol',
    srcref: 'showrunners',
    alt: 'Logo representing reward points of Push Protocol',
    link: 'https://comms.push.org/docs',
    target: '_blank',
    description:
      'Looking for Push Notification or Chat protocol? they have a new home over here.',
  },
];

export const SdkItemsList: ISdkListItem[] = [
  {
    title: 'Devnet SDK',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://www.npmjs.com/package/@pushchain/devnet',
  },
  // {
  //   title: 'REST API',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/restapi',
  // },
  // {
  //   title: 'React Native',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/react-native-sdk',
  // },
  // {
  //   title: 'Socket',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/socket',
  // },
  // {
  //   title: 'UIWeb',
  //   Svg: require('@site/static/assets/docs/arrowupright.svg').default,
  //   PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
  //   link: 'https://www.npmjs.com/package/@pushprotocol/uiweb',
  // },
  {
    title: 'UI Kit',
    Svg: require('@site/static/assets/docs/arrowupright.svg').default,
    PinkSvg: require('@site/static/assets/docs/ArrowUpRight-pink.svg').default,
    link: 'https://github.com/push-protocol/push-chain-sdk',
  },
];

export const accordionItems = [
  { title: 'What is Push?', content: 'Content for Section 1' },
  {
    title: 'How do I contact customer support?',
    content:
      'You can try telekinesis, but we recommend using our contact form instead.',
  },
  { title: 'What is Push trying to solve?', content: 'Content for Section 3' },
  {
    title: 'How can I use Push as an end-user?',
    content: 'Content for Section 3',
  },
  {
    title: 'What are the web3 communication products launched by Push?',
    content: 'Content for Section 3',
  },
  {
    title: 'Do I have to pay to send notifications?',
    content: 'Content for Section 3',
  },
];
