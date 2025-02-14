// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// External Components
import Link from '@docusaurus/Link';
import styled from 'styled-components';
// Internal Components
import { A, ItemH, Span } from '@site/src/css/SharedStyling';

// Internal Configs
import { device } from '@site/src/config/globals';

export const General = [
  {
    question: 'What is Push Chain?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push Chain is a shared state blockchain for universal applications. It
          is designed to allow <b>transactions from any chain</b> (ETH, Solana,
          EVM, non-EVM), has <b>1s fast finality</b> and has{' '}
          <b>true scalability</b> (read and write throughput increases as the
          number of nodes increases).
        </Span>
        <Span>
          It introduces some ground breaking innovations such as consumer txs
          (order not important), parallel validators and dynamic sharding and
          universal smart contracts. The result is a layer 1 with the ability to
          become a shared settlement layer for all L1s 🤝 L2s 🤝 L3.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How does Push Chain work?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push Chain is a sharded, Proof-of-Stake (PoS) blockchain that features
          different types of nodes—validators, storage nodes, and archival
          nodes—each optimized for specific roles and responsibilities to ensure
          high efficiency. This design gives the chain fast finality of less
          than one second.
        </Span>
        <Span>
          Push Chain also introduces several key innovations in web3. At launch,
          these include <b>consumer transactions</b> (these are txs where order
          is not critical), <b>Push ID</b>, which maps multiple EVM and non-EVM
          accounts to a single user and <b>wallet and fees abstraction</b>.
        </Span>
        <Span>
          In later phases, Push Chain will introduce <b>shared state</b> and{' '}
          <b>universal smart contracts</b>. These features will enable smart
          contracts deployed on Push Chain to access the state of both EVM and{' '}
          non-EVM wallets connected to a single user.
        </Span>
        <Span>
          This results in <b>universal applications</b> for web3. In this
          paradigm, instead of being a user of "Uniswap on Ethereum," "Uniswap
          on Polygon," or "Uniswap on Arbitrum," a person simply becomes a{' '}
          <b>user of Uniswap</b>.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'Why is Push Chain unique for users?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Push Chain addresses specific gaps in the existing blockchains, such
          as interoperability, shared app experiences, enabling new app
          experiences, and scalability. While existing blockchains are robust,
          they operate in their own eco-system and an aggregator to unite these
          chains are needed.
        </Span>
        <Span>
          Push Chain’s focus is on being a <b>shared state chain</b> for
          universal applications acting as a unifying layer where all chains can
          come together and use PC as universal hub or do settlement between
          them.
        </Span>
        <Span>
          PC offers a new paradigm of web3 that works from <b>Any Chain.</b> For{' '}
          <b>Any User.</b> And is suitable for <b>Any App.</b>
        </Span>
      </Answer>
    ),
  },
  {
    question: 'How do I get involved with Push Chain Grants?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          While we are thrilled with the early interest coming from developers
          to build universal apps, we are still in the governance phase for
          ratifying our evolution from Push Protocol to Push Chain and hence do
          not have a grants program now.
        </Span>
        <Span>
          This will change very soon once the community approves of Push Chain!
          Meanwhile, to frontrun other grantees, please drop us an email at{' '}
          <Link href='mailto:team@push.org'>team@push.org</Link> with the
          subject line as <b>Grant MEOW</b> and your app idea. Or, simply follow{' '}
          <Link href='https://x.com/PushChain' target='_blank'>
            @PushChain
          </Link>{' '}
          for more updates around the grants program and its release.
        </Span>
      </Answer>
    ),
  },
  {
    question: 'What will happen to Push Protocol?',
    section: 'General',
    renderAnswer: () => (
      <Answer>
        <Span>
          Today's push notification and chat protocols will benefit
          significantly from being built on top of Push Chain. A dedicated
          section of the team will focus on maintaining and enhancing these
          protocols, ensuring they remain the de-facto standard in their
          respective domains.
        </Span>
        <Span>
          By aligning with Push Chain, notifications and chat sent through the
          protocols will be processed as transactions on the chain. This
          integration not only enables these protocols to accrue value but also
          marks the beginning of a new chapter in their evolution, further
          enhancing their utility and impact within the web3 ecosystem.
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
    color: #000;
    font-family: N27;
    font-size: 20px;
    font-style: normal;
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
