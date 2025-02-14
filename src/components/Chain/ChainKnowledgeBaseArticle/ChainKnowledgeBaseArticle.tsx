// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

import styled from 'styled-components';

import { ItemV } from '../../../css/SharedStyling';
import ChainBottomComponent from '../ChainBottomComponent';
import ChainKnowledgeBaseGrid from '../ChainKnowledgeBase/ChainKnowledgeGrid';
import ChainKnowledgeBaseArticleContent from './ChainKnowledgeBaseArticleContent';

import { device } from '../../../config/globals';

const ChainKnowledgeBaseArticle = ({ item }) => {
  return (
    <ChainWrapper>
      <ChainInnerWrapper>
        <ChainKnowledgeBaseArticleContent item={item} />
        <ChainKnowledgeBaseGrid />
        <ChainBottomComponent />
      </ChainInnerWrapper>
    </ChainWrapper>
  );
};

export default ChainKnowledgeBaseArticle;

const ChainWrapper = styled(ItemV)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e8eff8;
  font-family: N27, sans-serif;
`;

const ChainInnerWrapper = styled(ItemV)`
  width: 1200px;
  margin: 0 auto;

  @media ${device.desktopL} {
    width: 1400px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }

  @media ${device.tablet} {
    padding: 0 24px;
  }

  @media ${device.mobileL} {
    padding: 0 16px;
  }
`;
