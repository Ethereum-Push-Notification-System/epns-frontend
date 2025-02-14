// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { FC } from 'react';
import styled from 'styled-components';
import ReactMarquee from 'react-fast-marquee';

import { H2, ItemV } from '@site/src/css/SharedStyling';
import { device } from '../../../src/config/globals';

interface ChainMarqueeSectionProps {
  backgroundColor?: string; // Optional background color
  rotateDegree?: number; // Optional rotation degree
  chainMarqueeList: Array<{ title: string }>; // Marquee data list
  icons: React.ComponentType<React.SVGProps<SVGSVGElement>>[]; // Array of icon components
}

const ChainMarqueeSection: FC<ChainMarqueeSectionProps> = ({
  backgroundColor = '#F19AFF',
  rotateDegree = -5,
  chainMarqueeList,
  icons,
}) => {
  const duplicatedList = [...chainMarqueeList, ...chainMarqueeList]; // Duplicate the list
  return (
    <MarqueeWrapper
      padding='0'
      overflow='hidden'
      flex='1'
      margin='174px 0 80px 0'
      backgroundColor={backgroundColor}
      rotateDegree={rotateDegree}
    >
      <ReactMarquee
        gradient={false} // Disable gradient for simplicity
        speed={50} // Adjust the speed to your preference
        direction='left'
        loop={0}
      >
        {duplicatedList?.map((item, index) => {
          // Cycle through the icons based on the index and number of icons
          const Icon = icons[index % icons.length]; // Modulo ensures it wraps around if there are more items than icons
          return (
            <MarqueeItem key={index}>
              <H2 fontFamily='N27'>{item.title}</H2>
              <Icon width={34} height={34} />
            </MarqueeItem>
          );
        })}
      </ReactMarquee>
    </MarqueeWrapper>
  );
};

export default ChainMarqueeSection;

const MarqueeWrapper = styled(ItemV)<{
  backgroundColor: string;
  rotateDegree: number;
}>`
  width: 100%;
  overflow: hidden;
  transform-origin: center center;
  background-color: ${(props) => props.backgroundColor};
  transform: skewY(${(props) => props.rotateDegree}deg);
  padding: 33px 0;
  overflow: hidden;
`;

const MarqueeItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 24px;
  overflow: hidden;
  gap: 64px;

  @media ${device.desktop} {
    margin: auto 24px;
    justify-content: space-between;
    gap: 48px;
  }

  @media ${device.laptopL} {
    margin: auto 24px;
    justify-content: space-between;
    gap: 48px;
  }

  h2 {
    color: #000;
    font-family: N27;
    font-size: 42px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: -0.84px;
  }
`;
