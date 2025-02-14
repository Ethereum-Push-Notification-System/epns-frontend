/* eslint-disable no-irregular-whitespace */
// Knowledge Base Content Configuration:
// - Add a new object with the following fields:
//   - `slug`: URL identifier for the knowledge base item.
//   - `image`, `title`, `subtitle`: Metadata for the item.
//   - `content`: Use HTML or Markdown to create the article (similar to the blog section).
//   - `url`: For external links, provide the full URL instead of using `content`.
//NOTE: , cause we use a plugin to get this to work, you have to restart your local server to see the code changes after editing a blog article(TODO: add hot-reload functionality)

export const knowledgeBaseArticleContent = [
  //   {
  //     slug: 'partnerships',
  //     image: '',
  //     title: 'Partnerships',
  //     subtitle:
  //       'Push Chain powers dApps and decentralized messaging, connecting blockchains seamlessly',
  //     content: `

  // ![Cover Image of Push Protocol Monthly Updates - October](/assets/previews/brbpreview.png)

  // October has been another outstanding month for Push Protocol, showcasing significant advancements across development, integrations, and community engagement. As we move forward, we’re excited to share key highlights from the month that underscore our continued commitment to driving Web3 communication and community growth.

  // Here’s a recap of our latest updates 👇

  // ### **Protocol Milestones:**

  // ### **Push Points Program Launch 🚀**

  // October saw the launch of the [**Push Points Program**](https://push.org/blog/introducing-the-push-points-program/), a reputation-based system designed to reward our community members and reinforce ties with our ecosystem partners. This initiative strengthens user engagement and incentivizes active participation in our ecosystem, adding a new layer of value to our protocol.

  // ### **User Growth and Notification Achievements 📈**

  // Push Protocol continues to witness incredible traction:

  // * **34,094** new subscribers, reaching a total of **279,270 subscribers**.
  // * **9.12 million new notifications** were sent, reaching a cumulative **128.59 million** since launch.
  // * **40,373 users** are actively engaging in **Push Chat** (+86.9% MoM) with **7,300 active users**.

  // These metrics are a testament to the growing interest in secure, on-chain communication, and we’re excited to bring in even more innovative updates in the coming months.

  // ### **Development Highlights:**

  // **Push DApp**

  // 1. **The [Push Points Program](https://app.push.org/points)** launched.
  // 2.  **A new [UI](https://app.push.org/channels?chain=1&category=All) for channel listings** and an improved channel dashboard were moved to the review and testing phases.
  // 3.  The **‘Reply to’** feature on Push Chat was released, making interactions more seamless.
  // 4.  **In-app notifications, as a feature, was** sent to the testing phase.
  // 5.  Several **UI enhancements and fixes** were completed, further refining the user experience.

  // **Mobile App**

  // - An **Android-optimized version was released to** improve accessibility.
  // - A new engineer was onboarded to the team to drive further mobile app enhancements.

  // **Website Updates**

  // - We published comprehensive **Push Points Program [documentation](https://push.org/docs/rewards/)**.
  // - We released several blog posts on topics like [**Push Points](https://push.org/blog/introducing-the-push-points-program/), [CCR Features](https://push.org/blog/abstracting-chains-for-better-dapp-ux/)**, [decentralized social media](https://push.org/blog/what-is-decentralized-social-media/), and [consumer crypto themes](https://push.org/blog/), contributed by community members.
  // - We enhanced review and testing with the deploy preview functionality and migrated the production build from Vercel to the GitHub pages for improved efficiency.

  // **SDK & Backend Updates**

  // - **The chat Reply Feature** implementation was completed and sent to testing.
  // - We updated the **notification card UI** and finished priority bug fixes.
  // - Backend improvements for **scalability and stability** were made to accommodate higher traffic, with horizontal scaling and new project integrations.

  // **Smart Contract Developments**

  // - We completed testing, scripts, and changes to the **Rust Smart Contract**.
  // - **Push Core V3** underwent its first implementation and review.
  // - We progressed with the **CCR development** with mainnet preparations and conducted audits on **Cairo contracts** to ensure robust security.

  // ### **Ecosystem Growth**

  // November saw major ecosystem updates in this sphere, with exciting integrations and partnerships that amplify our protocol’s reach:

  // **Integration Milestones**

  // - [**Revoke Cash**](https://app.push.org/channels/0x65bB67c2416186aE3107F7c2C6728b272a579e3d) now sends real-time alerts for token approvals, ensuring users have timely prompts to revoke approvals as needed.
  // - [**HyperLiquid**](https://app.push.org/channels/0xf1A1542Ca902AE861B59bffE77D92E8CD76146f1) integrated **Push notifications** to offer real-time updates on liquidations and position changes.
  // - [DePerp Labs](https://x.com/pushprotocol/status/1846784886457184359) integrated Push Chat making the DePerp experience far richer than ever before.
  // - [**Unstoppable Domains**](https://x.com/unstoppableweb/status/1839653386339107064) (UD) wallet now supports **end-to-end encrypted messaging** between domain owners, leveraging Push for more secure communication.
  // - Contributors at Cartesi created an [integration template](https://push.org/blog/how-developers-can-integrate-cartesi-and-push-protocol/) for developers to leverage web3 notifications for Cartesi DApps enabling DApps built on Cartesi to integrate Push’s notification services within 5 minutes or less.
  // - [Fuse Network](https://news.fuse.io/fuse-partners-with-push-protocol-to-enhance-communication-for-web3-dapps/) kicked off their partnership with Push for enabling wallet-to-wallet messaging in addition to structuring and launching Push notifications for applications built on Fuse.

  // **Push Points Partner Collaborations**

  // Push Points rolled out collaborations with [**QuickSwap](https://app.push.org/channels/0xf198eBCc8dB86F707bAdDdBa236aB5b619c59D3c), [ShapeShift](https://app.push.org/channels/0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be), [Cyber](https://app.push.org/channels/0xBc28359C93cA00A5724fe398606f27e43007C22D), [PWN](https://app.push.org/channels/0x991552E1C2A96D0Ae72E19552b08A1889aebCF53), [Revoke Cash](https://app.push.org/channels/0x65bB67c2416186aE3107F7c2C6728b272a579e3d),** and [**Unstoppable Domains**](https://app.push.org/channels/0xdbBc2Ac8cb8D02B26F165b4BC120fd4b14DA6cDA) to bring Push Points to life and ensure that it scales as a program.

  // **Channel Growth Highlights**

  // - [**ENS Domains**](https://app.push.org/channels/0x983110309620D911731Ac0932219af06091b6744) achieved a new milestone with **7,500+ subscribers**.
  // - [**QuickSwap**](https://app.push.org/channels/0xf198eBCc8dB86F707bAdDdBa236aB5b619c59D3c) saw rapid growth, surpassing **1,500 subscribers**.
  // - [Shapeshift](https://app.push.org/channels/0x90A48D5CF7343B08dA12E067680B4C6dbfE551Be) and [Rekt](https://app.push.org/channels/0x57cD6665e725232123F5250328E35Db6ABf6d80C) also hit major milestones of 30,000+ subscribers and 2,100+ subscribers respectively.

  // ### **DAO Updates**

  // Push Protocol’s DAO initiatives reflect our dedication to community-driven growth and strategic transparency:

  // **Strategic and Operational Developments**

  // - **Push Grants** saw an all-time high in applications, with [over 30 inbound applications.](https://app.charmverse.io/push-dao/proposals?viewId=all)
  // - We secured 5 soft commitments for 2025’s app-focused Push Grants program.
  // - We increased the contributor base by **8x** since March 2024.

  // **Governance & Transparency**

  // - We published the DAO’s [first quarterly **transparency report**.](https://gov.push.org/t/push-dao-2024-q3-transparency-report/1945)
  // - We passed a **Sybil resistance** upgrade proposal, strengthening DAO governance.
  // - We began establishing a strategic framework for 2025, some of which has already begun to show [in proposals on the forum](https://gov.push.org/).

  // **Community Initiatives**

  // - We partnered with **Unstoppable Domains** as a Push Points partner.
  // - We architected the strategy and sourced the tooling needed for the launch of the **PushCast podcast** (launching in November).
  // - We supported two Devcon attendees through our [**Devcon](https://devcon.org/en/) Scholar Initiative**.
  // - We began developing more transparent contributor pathways for 2025, showcasing how contributors can grow within the ecosystem. As with all Push DAO strategy changes for 2025, we’ll share the frameworks publicly in their final form, in December.

  // **Workshops and Events**

  // Our commitment to Web3 education and ecosystem expansion continued through November with several events and speaking engagements:

  // **Major Events & Sponsorships**

  // - We sponsored the [Invisible Gardens](https://x.com/pushprotocol/status/1842082904999903367) camp in Chiang Mai, Thailand, showcasing how to build consumer-ready apps with Push Protocol SDKs.
  // - Harsh Rajat represented Push on a panel at [**Binance Blockchain Week**](https://www.binanceblockchainweek.com/event/b7fbe2af-9ab6-4bb2-b78b-486c4d1fa80f/websitePage:9ec1ee53-cbdd-4234-8f04-fb70d6f7ad2e) in Dubai.

  // **Community Education & Developer Evangelism**

  // - We conducted an [**Ekolance Workshop**](https://www.youtube.com/watch?v=60t101ro2uM), a grantee-hosted session on building Web3 DApps with Push tech.
  // - Our DAO Lead, Ian LeViness, participated in a [**SocialFi panel**](https://x.com/pushprotocol/status/1849401395147055525) on X alongside partners such as **Conflux** and **Unstoppable Domains**.
  // - Ian also represented the ecosystem on several podcasts, including [**The Silicon Dreams](https://www.youtube.com/watch?v=Mc_wp_4zNvQ&list=PLu0fIscp1uLKza4WMSCl76C5VdK9l0Tll&index=49) Podcast** and [**Jax Dwyer’s](https://www.youtube.com/watch?v=Ysy-jV0tiUU) Podcast**, promoting Push’s vision and community.
  // - We also booked several more podcast appearances for November and December, which will be included in the following reports.

  // ### **Looking Ahead**

  // With many exciting updates on our [roadmap](https://push.org/docs/roadmap/), we’re thrilled to push the boundaries of Web3 communication as we approach the new year. Stay tuned for December updates as we continue to innovate and enhance our ecosystem. Your support drives us forward!

  // Let’s keep pushing! 🌍🚀`,
  //   },
  {
    slug: 'why-push-chain',
    image: 'why-push-chain',
    title: 'Why Push Chain?',
    subtitle:
      'Push Protocol recently announced its governance proposal of launching Push Chain. Push Protocol envisions the creation of Push Chain which enables a shared state L1 chain designed to support truly scalable consumer applications and universal applications.',
    url: '/blog/why-push-chain',
  },
  {
    slug: 'innovations-by-push-chain',
    image: 'innovations-by-push-chain',
    title: 'Innovations by Push Chain',
    subtitle:
      'Unlike traditional L1 chains, Push Chain introduces ten key innovations and optimized mechanisms to unify any chain, any user, and any app. This article will help you understand - What Innovations Push Chain brings to Web3!',
    url: '/blog/innovations-by-push-chain',
  },
  {
    slug: 'partners',
    image: 'push-chain-partners',
    title: 'Explore Partners',
    subtitle:
      'Explore partnerships committed to building universal apps and unlocking chain abstraction on Push Chain..',
    url: '/knowledge/partners',
    target: '_self',
  },
  {
    slug: 'evolution-of-push',
    image: 'evolution-of-push',
    title: 'Evolution of Push',
    subtitle:
      'Push Protocol has come a long way! We’ve delivered over 140M notifications, built a community of 500K aggregate users, powered notifications for 500+ projects, and are known as the de facto leader in notifications and communications for web3.',
    url: '/blog/evolution-of-push',
  },
  {
    slug: 'another-l1',
    title: 'Is Push Chain Another L1?',
    image: 'another-l1',
    subtitle:
      'The move towards Push Chain was driven by the realisation that we had to do our bit to move the needle on interoperability, not in order to create our own fragmented ecosystem.',
    url: '/blog/another-l1',
  },
  {
    slug: 'faq-push-chain',
    image: 'frequently-asked-questions',
    title: 'Push Chain’s Frequently Asked Questions',
    subtitle:
      'The place to find answers to all the popular questions the community has asked about Push Chain. Crowdsourced from Push Fam ❤️ and curated by the Push team 💪.',
    url: '/blog/faq-push-chain/',
  },
  {
    slug: 'consumer-apps-that-can-be-built-on-push-chain',
    image: 'consumer-apps',
    title: 'Consumer Apps 🫶🏽 Push Chain?',
    subtitle:
      'Web 3 is growing at lightning speed!Hundreds of L1s, Thousands of L2s and soon Tens of thousands of L3s!! While striving to make systems more scalable, decentralized and secure, we risk overlooking a crucial goal...',
    url: '/blog/consumer-apps-that-can-be-built-on-push-chain/',
  },
  {
    slug: 'parallel-validators-and-dynamic-sharding',
    image: 'benchmarking-push-chain-nodes',
    title: 'Benchmark of Push Chain',
    subtitle:
      'The Push Chain Network, a Proof-of-Stake (PoS) blockchain designed for consumer-centric applications, offers an innovative approach to scalability and usability in the decentralized space. By leveraging features like dynamic sharding, parallel block execution, and true scale, Push Chain...',
    url: '/blog/parallel-validators-and-dynamic-sharding',
  },
  {
    slug: 'randomized-node-selection-push-chain',
    image: 'randomized-parallel',
    title: 'Node Randomization',
    subtitle:
      'One of the defining aspects of decentralized networks is their lack of a central authority to govern how they operate. Instead, these networks rely on a set of rules and systems to securely communicate and reach consensus on the overall state of the network.',
    url: '/blog/randomized-node-selection-push-chain',
  },

  {
    slug: 'understand-proof-of-stake-and-push-chain',
    image: 'understand-proof-of-stake',
    title: 'Understand Proof of Stake (POS) and Push Chain PoS',
    subtitle:
      'In a globally distributed computing environment, achieving collective agreement on the true state of the system has always been a complex challenge. Fortunately, there are algorithms (specialized instructions) that assist in preserving this ‘single-truth-state’ while...',
    url: '/blog/understand-proof-of-stake-and-push-chain/',
  },
];
