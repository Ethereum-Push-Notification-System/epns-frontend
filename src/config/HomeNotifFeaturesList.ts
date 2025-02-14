export const NotifFeaturesList = {
  first: [
    {
      config: {
        id: 'native',
        padding: '24px',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: true,
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
        title: 'home.notification-section.box1.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'notifs/web3-native',
          videosrc: 'notifs/web3-native-video',
          videowebm: true,
          imagealt: 'home.notification-section.box1.imagealt',
          imagetitle: 'home.notification-section.box1.imagetitle',
        },
      ],
    },
    {
      config: {
        id: 'cross-chain',
        padding: '24px',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: true,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'home.notification-section.box2.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'notifs/cross-chain',
          videosrc: 'notifs/cross-chain-video',
          videowebm: true,
          imagealt: 'home.notification-section.box2.imagealt',
          imagetitle: 'home.notification-section.box2.imagetitle',
        },
      ],
    },
    {
      config: {
        id: 'custom-notif',
        padding: '24px',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: true,
          mobile: false,
        },
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'home.notification-section.box3.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'notifs/notif',
          videosrc: 'notifs/notif-video',
          videowebm: true,
          imagealt: 'home.notification-section.box3.imagealt',
          imagetitle: 'home.notification-section.box3.imagetitle',
        },
      ],
    },
  ],
  second: [
    {
      config: {
        id: 'lightweight',
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
        link: {
          url: 'https://push.org',
          linktitle: 'Lightweight Code with Rapid API Integration',
        },
      },
      header: {
        title: 'home.notification-section.box4.title',
        align: 'center',
      },
      body: [
        {
          type: 'title',
          titletext: 'home.notification-section.box4.titletext',
        },
        {
          type: 'button',
          buttontext: 'home.notification-section.box4.buttontext',
          buttonlink: 'https://comms.push.org/docs/notifications/quickstart',
          buttontitle: 'home.notification-section.box4.buttontitle',
        },
        {
          type: 'image',
          imagesrc: 'notifs/lightweight-notif',
          videosrc: 'notifs/lightweight-notif-video',
          videowebm: true,
          imagealt: 'home.notification-section.box4.imagealt',
          imagetitle: 'home.notification-section.box4.imagetitle',
        },
      ],
    },
    {
      config: {
        id: 'interoperable',
        height: '202px',
        fluid: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        bg: require('@site/static/assets/website/home/notifs/interoperable.webp')
          .default,
        bgvideosrc: 'notifs/interoperable-video',
        bgvideowebm: true,
        bgtitle: 'home.notification-section.box5.bgtitle',
        bgsize: 'cover',
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: true,
        },
      },
      header: {
        title: 'home.notification-section.box5.title',
        align: 'left',
      },
    },
  ],
  third: [
    {
      config: {
        id: 'anti-spam',
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
          mobile: false,
        },
      },
      header: {
        title: 'home.notification-section.box6.title',
        align: 'left',
        illustration: 'notifs/anti-spam',
        illustrationvideo: 'notifs/anti-spam-video',
        illustrationvideowebm: true,
        imagealt: 'home.notification-section.box6.iconalt',
        imagetitle: 'home.notification-section.box6.icontitle',
      },
    },
    {
      config: {
        id: 'snap',
        fluid: {
          desktop: true,
          laptop: false,
          tablet: false,
          mobile: false,
        },
        padding: '24px',
        bg: require('@site/static/assets/website/home/notifs/snap-bg.png')
          .default,
        bgvideowebm: true,
        hide: {
          desktop: false,
          laptop: false,
          tablet: false,
          mobile: false,
        },
      },
      header: {
        title: 'home.notification-section.box7.title',
        theme: 'hue',
        align: 'left',
        icon: 'notifs/starIcon',
        highlight: {
          title: 'NEW',
          color: '#D98AEC',
          border: '1px solid #D98AEC',
          fontSize: '9px',
        },
      },
      body: [
        {
          type: 'image',
          imagesrc: 'notifs/snap',
          videosrc: 'notifs/snap-video',
          videowebm: true,
          imagealt: 'home.notification-section.box7.imagealt',
          imagetitle: 'home.notification-section.box7.imagetitle',
        },
      ],
      footer: {
        text: 'home.notification-section.box7.footertext',
      },
    },
    {
      config: {
        id: 'increase',
        height: '260px',
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
          tablet: true,
          mobile: true,
        },
      },
      header: {
        title: 'home.notification-section.box8.title',
        align: 'left',
      },
      body: [
        {
          type: 'image',
          imagesrc: 'notifs/engage',
          videosrc: 'notifs/engage-video',
          videowebm: true,
          imagealt: 'home.notification-section.box8.imagealt',
          imagetitle: 'home.notification-section.box8.imagetitle',
        },
      ],
    },
  ],
};

export const NotifUseCasesList = [
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
