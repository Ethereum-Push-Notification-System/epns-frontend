// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { createGridRows } from '../utils/CreateGridRows';

import { H2, ItemV } from '../../../css/SharedStyling';
import { knowledgeBaseArticleContent } from '../config/ChainKnowledgeBaseConfig';
import ChannelKnowledgeBaseComponentItem from './ChannelKnowledgeBaseComponentItem';

const ChainKnowledgeBaseGrid = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);

  const gridRows = createGridRows(knowledgeBaseArticleContent);

  return (
    <ChainKnowledgeBaseGridWrapper>
      <ItemV>
        <H2
          fontSize={isMobile ? '32px' : '40px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight={isMobile ? '100%' : '140%'}
          letterSpacing='-0.8px'
          textAlign='center'
        >
          Hey! Want to learn more about Push Chain?
        </H2>
      </ItemV>

      <ChainKnowledgeGridWrapper>
        {!isTablet &&
          gridRows?.map((row, rowIndex) => (
            <ChainKnowledgeGrid key={rowIndex} itemsInRow={row.length}>
              {row.map((item, index) => (
                <ChannelKnowledgeBaseComponentItem item={item} index={index} />
              ))}
            </ChainKnowledgeGrid>
          ))}

        <ChainKnowledgeGrid>
          {isTablet &&
            knowledgeBaseArticleContent?.map((item, index) => (
              <ChannelKnowledgeBaseComponentItem item={item} index={index} />
            ))}
        </ChainKnowledgeGrid>
      </ChainKnowledgeGridWrapper>
    </ChainKnowledgeBaseGridWrapper>
  );
};

export default ChainKnowledgeBaseGrid;

const ChainKnowledgeBaseGridWrapper = styled.div`
  margin: 200px auto 0 auto;

  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const ChainKnowledgeGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 48px 0 0 0;
`;

const ChainKnowledgeGrid = styled.div`
  display: grid;
  grid-template-columns: ${({ itemsInRow }) =>
    itemsInRow === 3 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'};
  gap: 24px;
  width: 100%;
  justify-content: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr); /* Two items per row for tablets */
  }

  @media ${device.mobileL} {
    grid-template-columns: 1fr; /* One item per row for mobile */
  }
`;
