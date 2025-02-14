// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { useState } from 'react';
import styled from 'styled-components';

import { device } from '../../../config/globals';
import useMediaQuery from '../../../hooks/useMediaQuery';
import { ChainEcosystemAppsList } from '../config/ChainEcosystemList';

import { Button, H3, ItemH, ItemV, Span } from '../../../css/SharedStyling';
import ChainEcosystemAppItem from './ChainEcosystemAppItem';

const ChainEcosystemContent = () => {
  const isMobile = useMediaQuery(device.mobileL);

  // State to manage the number of items to display
  const [visibleApps, setVisibleApps] = useState(6);

  const handleLoadMore = () => {
    setVisibleApps(ChainEcosystemAppsList?.length); // Show all items
  };

  return (
    <ChainEcosystemWrapper>
      <ItemV maxWidth='920px' margin='0 auto'>
        <H3
          fontSize={isMobile ? '36px' : '54px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight='140%'
          letterSpacing='-1.04px'
          color='#000'
        >
          A thriving ecosystem of consumer apps
        </H3>

        <Span
          fontSize={isMobile ? '20px' : '24px'}
          fontWeight='500'
          fontFamily='N27'
          lineHeight='140%'
          letterSpacing='-0.48px'
          color='#D548EC'
          alignSelf='flex-end'
        >
          Powered by Push Chain
        </Span>
      </ItemV>

      <ChainEcoSystemApps>
        {ChainEcosystemAppsList?.slice(0, visibleApps).map((item, index) => (
          <ChainEcosystemAppItem key={index} item={item} index={index} />
        ))}
      </ChainEcoSystemApps>

      {visibleApps < ChainEcosystemAppsList?.length && (
        <ItemH>
          <Button
            background='transparent'
            border='1.5px solid #000'
            hoverBorder='1.5px solid #000'
            color='#000'
            margin='0 auto'
            fontWeight='500'
            fontSize='16px'
            lineHeight='16px'
            onClick={handleLoadMore} // Load all items on click
          >
            Load More Apps
          </Button>
        </ItemH>
      )}
    </ChainEcosystemWrapper>
  );
};

export default ChainEcosystemContent;

const ChainEcosystemWrapper = styled.div`
  margin: 213px auto 0 auto;

  @media ${device.mobileL} {
    margin: 153px auto 0 auto;
  }
`;

const ChainEcoSystemApps = styled.div`
  margin: 48px auto;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
  }

  @media ${device.mobileL} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
  }
`;
