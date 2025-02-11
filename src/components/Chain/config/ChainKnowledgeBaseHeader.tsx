/* eslint-disable no-irregular-whitespace */
import React from 'react';

// Knowledge Base Header Configuration:
// This edits the Header, description oon /chain/knowledge
// FOr the header image, if you want to use an image, use the image field.
// If you want to use a youtube link or video, attach the embed link url in the video field

export const ChainKnowledgeBaseHeader = {
  title: 'Introducing Push Chain',
  description: () => (
    <div>
      <div>
        Push Chain is a shared state blockchain for universal applications. It
        is designed to allow <b>transactions from any chain</b> (ETH, Solana,
        EVM, non-EVM) enabling <b>apps from any chain</b> to be accessed by
        <b> users of any chain</b>.
      </div>
      <div>
        <p /> <p />
        It enables new paradigm of apps where users of all chains can come
        together for shared app experiences (universal AI agents, universal
        DeFi, universal Predication Market, universal Socials, etc).
      </div>
    </div>
  ),
  // video: {
  //   src: 'https://www.youtube.com/embed/lhiwW3SfoZE',
  //   title: 'title',
  // },
  image: `knowledge-frame`,
  learnMore: 'Hey! Want to learn more about Push Chain?',
};
