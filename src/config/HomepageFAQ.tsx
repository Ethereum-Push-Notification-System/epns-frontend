// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
//
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { A, ItemH, LI, Span, UL } from '@site/src/css/SharedStyling';

// Import Assets
import ImageFAQ from '@site/static/assets/website/faq/faq-projects.webp';

// Internal Configs
import { device } from '@site/src/config/globals';

export const General = [
  {
    question: 'What is Push?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push is the world’s first blockchain-agnostic decentralised
          communication protocol for Web3. It is an open network for validating
          and indexing all sorts of communication (notifications, chats, etc)
          that can then be integrated by any crypto frontend (dApps, wallets,
          etc).
        </Span>
        <Span>
          Any smart contract, dApp, or backend service can integrate Push to
          provide a communication layer through notifications or chats that are
          tied to the wallet addresses of users.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'What is Push trying to solve?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push is building the communication layer for Web3, using which any
          dApp, smart contracts or backend can send any real time communications
          (such as notifications, chats, video and more) that are tied directly
          to a user's wallet address (aka web3 usernames).
        </Span>
        <Span>
          This addresses a major gap in the web3 infrastructure, and improving
          the everyday experience for blockchain users. The notifications (or
          any other communications) are off-chain, gasless for all scenarios
          except when a smart contract sends them (in which case the smart
          contract pays a slightly higher gas fees for the payload that is sent
          on blockchain).
        </Span>
        <Span>
          While communications are encrypted and secure, they utilize Push open
          network which means any dApp or crypto wallet can easily integrate
          them making the lives of all web3 users a lot easier and more akin to
          web2 UX where apps (or protocols) communicate with their users
          whenever something of importance occurs or is about to occur for them.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'What are the web3 communication products launched by Push?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          <b>⚬ Push Notifications:</b> Enables any smart contract, dApp, backend
          to deliver critical informations as notifications to web3 users
          directly to their wallet addresses.
        </Span>
        <Span>
          <b>⚬ Push Chat(wallet-to-wallet chat):</b> Enabling 2-way
          communication for web3 users from their wallet addresses.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How can I use Push as an end-user?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Connect to the{' '}
          <AMod href='https://app.push.org/#/channels' target={'_blank'}>
            Push dApp
          </AMod>{' '}
          & opt-in to channels to get notifications for protocols that are
          relevant to you. Channels are protocols that activate themselves on
          Push protocol to send notification.
        </Span>
        <Span>
          You can receive notifications from any crypto frontends that have
          already integrated Push. Alternatively, you can use via{' '}
          <AMod href='https://app.push.org/#/channels' target={'_blank'}>
            Push dApp
          </AMod>
          ,{' '}
          <AMod
            href='https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg'
            target={'_blank'}
          >
            browser extension
          </AMod>
          , and mobile app (
          <AMod
            href='https://play.google.com/store/apps/details?id=io.epns.epns&pli=1'
            target={'_blank'}
          >
            Android
          </AMod>{' '}
          &{' '}
          <AMod
            href='https://apps.apple.com/app/ethereum-push-service-epns/id1528614910'
            target={'_blank'}
          >
            iOS
          </AMod>
          ) in case your favorite wallet or dApp doesn't have Push support yet.
        </Span>
        <Span>
          Push recently launched a wallet-to-wallet communication product called
          Push Chat which is in alpha stage. Reach out to us on{' '}
          <AMod
            href='https://discord.com/invite/pushprotocol'
            target={'_blank'}
          >
            Discord
          </AMod>{' '}
          to get exclusive Push Chat access.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Is Push decentralised?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push operates on network of nodes called Push Nodes which are
          responsible for the validation, storage, and delivery of notifications
          & chats.
        </Span>
        <Span>
          Major efforts are put into decentralising Push Nodes which is in the
          final stages now. Any content or payloads getting delivered are
          already immutable and can't be changed as they are secured using
          crypto-graphical proofs. The other part which ensures that the content
          can't be censored is in final stages now of testing and public alpha
          push nodes are expected to be rolled out soon.
        </Span>
      </Answer>
    ),
  },
  {
    question:
      'On which blockchain is Push deployed? Can I send notifications from non-EVM chains as well?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push is currently live on Ethereum, Polygon and BNB chain with other
          major EVM chains and non-EVM / non-Ethereum chains to be supported
          soon. Push Notifications via gasless sdk and Push Chat sdk supports
          all EVM chains as of now.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How many projects have integrated with Push so far?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          <Image src={ImageFAQ} alt='Push Ecosystem' loading='lazy' />
        </Span>
        <Span>
          More than 400 projects have integrated with Push which includes our
          150+ partners including Lens, Polygon, Gitcoin, Decentraland, etc.
        </Span>
      </Answer>
    ),
  },
];

export const Notifs = [
  {
    question: 'Can I integrate notifications on Frontend / Wallet?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          Yes, Push Protocol is an open yet secure network, and behaves similar
          to a blockchain network but for all things communication. This means
          that any frontend and / or wallet can integrate notifications or chat
          on their side and start making the web3 UX and re-engagement a
          reality.
        </Span>
        <Span>
          Learn more about{' '}
          <AMod
            href={
              'https://comms.push.org/docs/notifications/build/integrating-notifications/'
            }
            target={'_blank'}
          >
            integrating Push Notification in your dApp
          </AMod>{' '}
          /{' '}
          <AMod
            href={
              'https://comms.push.org/docs/notifications/tutorials/integrate-notifications-via-delivery-node/'
            }
            target={'_blank'}
          >
            Push Notification in your crypto wallet.
          </AMod>
        </Span>
        <Span>
          Additionally, wallets should check out{' '}
          <AMod
            href='https://comms.push.org/docs/tokenomics/deepdive/$push/'
            target={'_blank'}
          >
            fee pool of Push which re-imagines and incentivises their
            contribution
          </AMod>{' '}
          acknowledging them as an entry point for web3.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How can I start receiving notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          To enable an xyz protocol to send a notification, they need your
          consent before they can do so which is called opt-in which is gasless.
          They are also fondly called channels in Push protocol terminology
        </Span>
        <Span>
          Once you opt-in to any channel that you want to get notifications
          from, your job is done, the channels will send notifications based on
          their own logic to you.{' '}
        </Span>
        <Span>
          You can receive notifications from any crypto frontends that have
          already integrated Push. Alternatively, you can use via{' '}
          <AMod href='https://app.push.org/#/channels' target={'_blank'}>
            Push dApp
          </AMod>
          ,{' '}
          <AMod
            href='https://chrome.google.com/webstore/detail/push-protocol-alpha/lbdcbpaldalgiieffakjhiccoeebchmg'
            target={'_blank'}
          >
            browser extension
          </AMod>
          , and mobile app (
          <AMod
            href='https://play.google.com/store/apps/details?id=io.epns.epns&pli=1'
            target={'_blank'}
          >
            Android
          </AMod>{' '}
          &{' '}
          <AMod
            href='https://apps.apple.com/app/ethereum-push-service-epns/id1528614910'
            target={'_blank'}
          >
            iOS
          </AMod>
          ) in case your favorite wallet or dApp doesn't have Push support yet.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Do I need a channel to receive notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          No, a channel is only required if you want to send a notification. In
          order to receive notifications, you just need to connect your wallet
          to the dapp/mobile app/browser extension and Opt-in to the already
          existing channels that you want to get notifications from.{' '}
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Do I need a channel to send notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          Yes, any protocol that wants to send notifications will need to
          activate themselves on Push protocol, read{' '}
          <AMod
            href={
              'https://comms.push.org/docs/notifications/tutorials/create-your-channel/'
            }
            target={'_blank'}
          >
            How to create channel
          </AMod>{' '}
          for more details.
        </Span>
      </Answer>
    ),
  },
  {
    question:
      'Does Push only handle on-chain notifications? Does Push only handles events based notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          No, Push is extremely versatile and can handle on-chain (coming from
          smart contracts) or off-chain (coming from backend) notifications
          apart from notifications generated via sub-graphs.
        </Span>
        <Span>
          The logic of notification depends on what the xyz protocol wants to
          send to you which already ranges from a variety of use cases such as
          near loan liquidations, NFT rebids, on-chain or off chain governance,
          web3 news, airdrop alerts and so much more. If you imagine a use case
          that your users will benefit from, chances are Push will be able to
          enable dispatching those notifications to your users (wallet
          addresses).
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Do I have to pay to send notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          No, Push doesn’t take any fees for you to send notification. Although,
          there is a nominal charge of 50 PUSH required during Channel creation,
          which is put in place to prevent spamming.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'What are some use cases of notifications?',
    section: 'Notifs',
    renderAnswer: () => (
      <Answer>
        <Span>
          The most popular ones are Governance, Loan Pool & Staking and
          Marketing related notifications though we have many other interesting
          use cases depending upon the protocols on the channel.
        </Span>
      </Answer>
    ),
  },
];

export const Chat = [
  {
    question: 'Is Push Chat end-to-end encrypted?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>
          Yes, Push Chat is end-to-end encrypted. The encryption is based on PGP
          Keys. Read more about{' '}
          <AMod href={'https://comms.push.org/docs/chat'} target={'_blank'}>
            how it works here.
          </AMod>
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How are messages stored in Push Chat?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>
          Messages are all stored on IPFS in an encrypted manner. So only the
          wallets that are part of the chat can decrypt the messages.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Will Push charge messaging fees?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>
          For now Push is not charging any fees for you to message anyone. There
          are plans to introduce a freemium model in future.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Does Push Chat have notifications?',
    section: 'Chat',
    renderAnswer: () => (
      <Answer>
        <Span>
          Yes. Push Chat has notifications built-in. So there is no need to
          create a channel or do any extra step to send Push Chat notifications.
        </Span>
      </Answer>
    ),
  },
];

export const IntegratingPush = [
  {
    question: 'How can I integrate Push as a service/developer?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push can be used as a utility for communication. A service/developer
          can integrate Push to communicate critical information to its users
          and to improve the user experience through notifications and chat
          (Push Chat)
        </Span>
        <Span>
          The{' '}
          <AMod
            href={'https://comms.push.org/docs/notifications/quickstart/'}
            target={'_blank'}
          >
            Push JS SDK
          </AMod>{' '}
          is a major component that makes the integration seamless. A few
          integration ideas using SDK include
        </Span>
        <UL>
          <LIFaq>
            integrate <b>Opt-in</b> feature on your frontend so users wouldn't
            have to leave your website to enable notifications from your Channel
          </LIFaq>
          <LIFaq>show the notifications on your frontend</LIFaq>
          <LIFaq>send critical information as notifications</LIFaq>
          <LIFaq>
            integrate <b>Push Chat</b> on your frontend and enable 2-way
            communication between your users or use chat as a way to provide
            support to your users.
          </LIFaq>
        </UL>
        <Span>
          Other ways of integrating Push notifications are via{' '}
          <AMod
            href={
              'https://comms.push.org/docs/notifications/build/send-notification-via-smart-contract/'
            }
            target={'_blank'}
          >
            smart contracts
          </AMod>
          ,{' '}
          <AMod
            href={
              'https://comms.push.org/docs/notifications/tutorials/send-notification-via-subgraph'
            }
            target={'_blank'}
          >
            subgraphs
          </AMod>
          , and{' '}
          <AMod
            href={'https://comms.push.org/docs/notifications'}
            target={'_blank'}
          >
            more as outlined here!
          </AMod>
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How can I test Push integration during the development?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push has a{' '}
          <AMod href='https://staging.push.org/#/channels' target={'_blank'}>
            Staging dApp
          </AMod>{' '}
          for developers that points to Ethereum Sepolia testnet, Polygon Mumbai
          testnet and BNB testnet.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Where can I find the code samples for integration?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push Chat integration -{' '}
          <AMod href={'https://comms.push.org/docs/chat'} target={'_blank'}>
            Docs
          </AMod>
          ,
          <AMod
            href='https://github.com/push-protocol/push-sdk'
            target={'_blank'}
          >
            Github
          </AMod>{' '}
          Push Notifications -{' '}
          <AMod
            href={'https://comms.push.org/docs/notifications'}
            target={'_blank'}
          >
            Docs
          </AMod>
          ,
          <AMod
            href='https://github.com/push-protocol/push-for-hackers'
            target={'_blank'}
          >
            Github
          </AMod>
          <br />
          <AMod
            href='https://github.com/push-protocol/push-showrunners-framework'
            target={'_blank'}
          >
            Showrunners Framework
          </AMod>
          , a scaffold solution to integrate Push Notification can also used to
          get started.
        </Span>
      </Answer>
    ),
  },
  {
    question:
      'How I can be assisted in case of any blockers during integration?',
    section: 'IntegratingPush',
    renderAnswer: () => (
      <Answer>
        <Span>
          You can just drop your queries on the{' '}
          <AMod href='https://discord.com/invite/pushprotocol'>
            Push Discord
          </AMod>{' '}
          and the community managers will be able to assist you.
        </Span>
      </Answer>
    ),
  },
];

export const Governance = [
  {
    question:
      'I want to apply for a grant to build on Push Protocol, how can I do this?',
    section: 'Governance',
    renderAnswer: () => (
      <Answer>
        <Span>
          Reach out to the Push team on{' '}
          <AMod
            href='https://discord.com/invite/pushprotocol'
            target={'_blank'}
          >
            Discord
          </AMod>{' '}
          or schedule a pitch in the office hours or directly dropping a
          proposal on the{' '}
          <AMod href='https://gov.push.org/c/grants/10' target={'_blank'}>
            Push Governance Forum.
          </AMod>
        </Span>
      </Answer>
    ),
  },
  {
    question:
      'If I have queries about grants where’s the best place to direct them?',
    section: 'Governance',
    renderAnswer: () => (
      <Answer>
        <Span>
          The{' '}
          <AMod
            href='https://discord.com/invite/pushprotocol'
            target={'_blank'}
          >
            Push Discord
          </AMod>{' '}
          is really active when it comes to Push DAO related conversations, try
          redirecting your queries there and we will be there to help you out.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How can I attend PushDAO Calls and Meetings?',
    section: 'Governance',
    renderAnswer: () => (
      <Answer>
        <Span>
          Office Hours are hosted on the{' '}
          <AMod href='https://discord.com/invite/pushprotocol'>
            Push Discord
          </AMod>{' '}
          for DAO related meetings, try joining the discord for more
          information.
        </Span>
      </Answer>
    ),
  },
];

export const Token = [
  {
    question: 'What’s the utility of $PUSH token?',
    section: 'Token',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push Protocol aims to achieve a circular economy for its protocol by
          engendering a communication layer that is run by the community and for
          the community. The goal is for every participant to be rewarded for
          their participation while simultaneously discouraging behaviour that
          would be detrimental to the network.
        </Span>
        <Span>
          $PUSH is the native token of Push Protocol. It achieves the circular
          economy today through four major use cases: securing the network,
          network utility, Push DAO and governance, and reward pool fee.
        </Span>
        <Span>
          Read in detail 👉{' '}
          <AMod
            href='https://comms.push.org/docs/tokenomics/'
            target={'_blank'}
          >
            Pusheconomics
          </AMod>
        </Span>
      </Answer>
    ),
  },
  {
    question: 'From where can I get $PUSH?',
    section: 'Token',
    renderAnswer: () => (
      <Answer>
        <Span>
          You can swap any token to $PUSH from{' '}
          <AMod
            href='https://app.uniswap.org/#/swap?inputCurrency=0xf418588522d5dd018b425e472991e52ebbeeeeee'
            target={'_blank'}
          >
            Uniswap
          </AMod>{' '}
          or from any of the{' '}
          <AMod
            href='https://coinmarketcap.com/currencies/epns/markets/'
            target={'_blank'}
          >
            listed exchanges.
          </AMod>
        </Span>
      </Answer>
    ),
  },
];

const Answer = styled(ItemH)`
  align-items: stretch;
  align-self: stretch;
  justify-content: flex-start;
  margin: 0px;
  padding: 0 0 24px 0;

  & ${Span} {
    color: #bbbcd0;
    font-size: 19px;
    font-family: FK Grotesk Neue;
    font-weight: 400;
    line-height: 140%;

    @media ${device.mobileL} {
      font-size: 16px;
    }
  }

  & Span:not(:first-child) {
    margin-top: 24px;
  }
`;

const Image = styled.img`
  width: 80%;
  height: auto;
`;

const AMod = styled(A)`
  color: #e79cff !important;
  font-weight: 400;
  background: transparent;
  padding: 0px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LIFaq = styled(LI)`
  color: #bbbcd0;
  font-size: 19px;
  font-family: FK Grotesk Neue;
  font-weight: 400;
  line-height: 140%;
  list-style-type: circle;
`;
