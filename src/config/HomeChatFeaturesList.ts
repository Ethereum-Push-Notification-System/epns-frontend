export const ChatFeaturesList = {
  first: [
    {
      config: {
        id: 'share',
        padding: '24px 24px 0px 24px',
        fluid: {
          desktop: true,
          laptop: true,
          tablet: true,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
        bodyjustifycontent: 'bottom',
      },
      header: {
        title: 'home.chat-section.box1.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'chats/share',
          videosrc: 'chats/share-video',
          videowebm: true,
          imagealt: 'home.chat-section.box1.imagealt',
          imagetitle: 'home.chat-section.box1.imagetitle',
        },
      ],
    },
    {
      config: {
        id: 'chat-requests',
        padding: '24px',
        fluid: {
          desktop: false,
          laptop: true,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'home.chat-section.box2.title',
        align: 'left',
        illustration: 'chats/requests',
        illustrationvideo: 'chats/requests-video',
        illustrationvideowebm: true,
        subheader: 'home.chat-section.box2.subheader',
        iconalt: 'home.chat-section.box2.iconalt',
        icontitle: 'home.chat-section.box2.icontitle',
      },
    },
    {
      config: {
        id: 'secure',
        padding: '24px',
        fluid: {
          desktop: false,
          laptop: true,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'home.chat-section.box3.title',
        tags: [
          {
            title: 'COMING SOON',
            background: 'transparent',
            color: '#D98AEC',
            border: '1px solid #D98AEC',
            fontSize: '9px',
          },
        ],
        align: 'left',
      },
    },
  ],
  second: [
    {
      config: {
        id: 'lightweight-code',
        padding: '24px',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        link: {
          url: 'https://push.org',
          linktitle: 'Lightweight Code with Rapid API Integration',
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'home.chat-section.box4.title',
        align: 'center',
      },
      body: [
        {
          type: 'title',
          titletext: 'home.chat-section.box4.titletext',
        },
        {
          type: 'button',
          buttontext: 'home.chat-section.box4.buttontext',
          buttonlink: 'https://comms.push.org/docs/chat',
          buttontitle: 'home.chat-section.box4.buttontitle',
        },
        {
          type: 'image',
          imagesrc: 'chats/lightweight-chat',
          videosrc: 'chats/lightweight-chat-video',
          videowebm: true,
          imagealt: 'home.chat-section.box4.imagealt',
          imagetitle: 'home.chat-section.box4.imagetitle',
        },
      ],
    },
    {
      config: {
        id: 'hyperscalable',
        height: '280px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        bg: require('@site/static/assets/website/home/chats/hyper@3x.webp')
          .default,
        bgtitle: 'home.chat-section.box5.bgtitle',
        bgvideosrc: 'chats/hyper-video',
        bgvideowebm: true,
        bgsize: 'contain',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'home.chat-section.box5.title',
        align: 'left',
      },
      after: {
        message: 'home.chat-section.box5.afterMessage',
        alignment: 'right',
      },
    },
    {
      config: {
        id: 'plug-play',
        height: '280px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px 24px 24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'home.chat-section.box6.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'chats/plug-play',
          videosrc: 'chats/plug-play-video',
          videowebm: true,
          imagealt: 'home.chat-section.box6.imagealt',
          imagetitle: 'home.chat-section.box6.imagetitle',
        },
      ],
    },
  ],
  third: [
    {
      config: {
        id: 'chain-agnostic',
        padding: '24px',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'home.chat-section.box7.title',
        align: 'left',
        illustration: 'chats/chain-agnostic',
        illustrationvideo: 'chats/chain-agnostic-video',
        illustrationvideowebm: true,
        subheader: 'home.chat-section.box7.subheader',
        iconalt: 'home.chat-section.box7.imagealt',
        icontitle: 'home.chat-section.box7.imagetitle',
      },
    },
    {
      config: {
        id: 'token-gated',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      body: [
        {
          type: 'image',
          imagesrc: 'chats/token-gated',
          videosrc: 'chats/token-gated-video',
          videowebm: true,
          imagealt: 'home.chat-section.box8.imagealt',
          imagetitle: 'home.chat-section.box8.imagetitle',
        },
      ],
      footer: {
        text: 'home.chat-section.box8.footertext',
      },
    },
    {
      config: {
        id: 'e2e',
        padding: '24px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: true,
          tablet: true,
          mobile: false,
        },
      },
      header: {
        title: 'home.chat-section.box9.title',
        align: 'left',
        illustration: 'chats/e2e',
        illustrationvideo: 'chats/e2e-video',
        illustrationvideowebm: true,
        subheader: 'home.chat-section.box9.subheader',
        iconalt: 'home.chat-section.box9.imagealt',
        icontitle: 'home.chat-section.box9.imagetitle',
      },
    },
    {
      config: {
        id: 'web3-standard',
        padding: '24px',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'home.chat-section.box10.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'chats/web3-standard',
          videosrc: 'chats/web3-standard-video',
          videowebm: true,
          imagealt: 'home.chat-section.box10.imagealt',
          imagetitle: 'home.chat-section.box10.imagetitle',
        },
      ],
    },
  ],
};

export const ChatUseCasesList = [
  {
    url: 'https://blog.ethereum.org/2020/08/19/esp-beyond-grants',
    title: 'Infrastructure',
  },
  {
    url: 'https://www.coindesk.com/business/2022/04/14/ethereum-push-notification-service-raises-10m-at-131m-valuation/',
    title: 'Social',
  },
  {
    url: 'https://defiprime.com/ethereum-push-notification-service',
    title: 'Blockchain',
  },
  {
    url: 'https://x.com/PushChain/status/1336359832081768448',
    title: 'Gaming',
  },
  {
    url: 'https://beincrypto.com/learn/web3-communication-networks/?utm_source=twitter&utm_medium=URL&utm_campaign=learn',
    title: 'DAO',
  },
  {
    url: 'https://beincrypto.com/learn/web3-communication-networks/?utm_source=twitter&utm_medium=URL&utm_campaign=learn',
    title: 'NFT',
  },
];
