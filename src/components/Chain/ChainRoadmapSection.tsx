// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';

import { device } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';

import { H2, H3, Span } from '../../css/SharedStyling';

const ChainRoadmapSection: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const completedList = [
    'Proof Of Stake',
    'Dynamic Sharding',
    'Parallel Validators',
    'Any Chain Transactions',
    'Wallet Abstraction',
  ];

  const inProgressList = [
    'Mapping Multiple Web3 Wallets',
    'Smart Contracts/Virtual Machine',
    'Fees Abstraction',
    'Seamless Interoperability',
    'Wallet State on any Chain',
    'Universal Smart Contracts',
  ];

  return (
    <ChainRoadmapWrapperSection>
      <H2
        fontSize={isMobile ? '36px' : '48px'}
        fontWeight='500'
        fontFamily='N27'
        lineHeight='120%'
        letterSpacing='-0.96px'
        textAlign='center'
      >
        Development Progress
      </H2>
      <H3
        fontSize={isMobile ? '20px' : '24px'}
        fontWeight='400'
        fontFamily='N27'
        lineHeight='140%'
        letterSpacing='-1.05px'
        textAlign='center'
        margin={isMobile && '8px 0 0 0'}
      >
        Explore the milestones shaping our blockchain journey
      </H3>

      <RoadmapSection>
        <CompleteSection>
          <Span
            fontSize={isMobile ? '20px' : '20px'}
            fontWeight='700'
            fontFamily='N27'
            padding='8px'
            textTransform='uppercase'
          >
            Completed
          </Span>

          {completedList?.map((item) => (
            <CompleteTag>
              <Span
                fontSize={isMobile ? '20px' : '20px'}
                fontWeight='400'
                color='#FFF'
                fontFamily='N27'
                lineHeight='140%'
              >
                {item}
              </Span>
              <div></div>
            </CompleteTag>
          ))}
        </CompleteSection>

        <InProgressSection>
          <Span
            fontSize={isMobile ? '20px' : '20px'}
            fontWeight='700'
            fontFamily='N27'
            padding='8px'
            textTransform='uppercase'
            color='#FFF'
          >
            In Progress
          </Span>

          {inProgressList?.map((item) => (
            <InProgressTag>
              <Span
                fontSize={isMobile ? '20px' : '20px'}
                fontWeight='400'
                color='#FFF'
                fontFamily='N27'
                lineHeight='140%'
              >
                {item}
              </Span>
              <div></div>
            </InProgressTag>
          ))}
        </InProgressSection>
      </RoadmapSection>
    </ChainRoadmapWrapperSection>
  );
};

export default ChainRoadmapSection;

const RoadmapSection = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 64px;
  align-items: stretch;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CompleteSection = styled.div`
  background: #f19aff;
  padding: 16px;
  border-radius: 24px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media ${device.laptopM} {
    width: 100%;
  }
`;

const InProgressSection = styled.div`
  background: #000;
  padding: 16px;
  border-radius: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.laptopM} {
    width: 100%;
  }
`;

const ChainRoadmapWrapperSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 200px;

  @media ${device.tablet} {
    margin-top: 200px;
  }
`;

// const RoadmapSection = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 16px;
//   margin-top: 64px;
//   align-items: flex-start;

//   @media ${device.tablet} {
//     flex-direction: column;
//   }
// `;

// const CompleteSection = styled.div`
//   background: #f19aff;
//   padding: 16px;
//   border-radius: 24px;
//   flex: 2;

//   @media ${device.laptopM} {
//     width: 100%;
//   }

//   @media ${device.tablet} {
//     width: 100%;
//   }
// `;

const CompleteTag = styled.div`
  background: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 8px 0 0 0;
  border-radius: 16px;
  border: 1px solid transparent;
  div {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: #2ec780;
  }

  &:first-of-type {
    margin: 16px 0 0 0;
  }
`;

// const InProgressSection = styled.div`
//   width: 100%;
//   background: #000;
//   padding: 16px;
//   border-radius: 24px;
//   flex: 1;
// `;

const InProgressTag = styled.div`
  width: 100%;
  background: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin: 8px 0 0 0;
  border-radius: 16px;
  border: 1px solid #fff;

  div {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: #e3b92d;
  }

  &:first-of-type {
    margin: 16px 0 0 0;
  }
`;
