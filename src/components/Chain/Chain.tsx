// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

// External Components
import { device } from '../../../src/config/globals';
import { ItemV } from '../../../src/css/SharedStyling';
import {
  ChainMarqueeList,
  ChainMarqueeSecondList,
} from './config/ChainMarqueeList';

// Internal Components
import ChainHeroSection from './ChainHeroSection';
import ChainMarqueeSection from './ChainMarqueeSection';
import ChainBottomComponent from './ChainBottomComponent';
import ChainUseCase from './ChainUseCase';
import ChainRoadmapSection from './ChainRoadmapSection';
import { ChainFeaturesSection } from './ChainFeaturesSection';
import ChainCountDownFeature from './ChainCountDownFeature';

// Import assets
import StarIcon from '@site/static/assets/website/chain/StarIcon.svg';
import UnionIcon from '@site/static/assets/website/chain/Union.svg';
import NoteIcon from '@site/static/assets/website/chain/note.svg';
import SmileIcon from '@site/static/assets/website/chain/smile.svg';
import EmailIcon from '@site/static/assets/website/chain/email.svg';
import SpadeIcon from '@site/static/assets/website/chain/spades.svg';
import BellIcon from '@site/static/assets/website/chain/bellicon.svg';
import DCAIcon from '@site/static/assets/website/chain/dcaicon.svg';
import TechnologyIcon from '@site/static/assets/website/chain/technology.svg';

const Chain = () => {
  return (
    <ChainWrapper>
      {/* Main Content */}
      <CountdownWrapper>
        <ChainCountDownFeature />
      </CountdownWrapper>

      <MainContent>
        <ChainHeroSection />
      </MainContent>

      {/* marquee section */}
      <ChainMarqueeSection
        chainMarqueeList={ChainMarqueeList}
        backgroundColor='#F19AFF'
        rotateDegree={-5} // Custom rotation degree
        icons={[StarIcon, UnionIcon]}
      />

      <ChainFeaturesSection />

      <MainContent>
        <ChainUseCase />
      </MainContent>

      {/* second marquee section */}
      <ChainMarqueeSection
        chainMarqueeList={ChainMarqueeSecondList}
        backgroundColor='#3EF09D'
        rotateDegree={5} // Custom rotation degree
        icons={[
          SpadeIcon,
          SmileIcon,
          EmailIcon,
          NoteIcon,
          BellIcon,
          DCAIcon,
          TechnologyIcon,
        ]}
      />

      <MainContent>
        <ChainRoadmapSection />

        <ChainBottomComponent showFaq={true} />
      </MainContent>
    </ChainWrapper>
  );
};

export default Chain;

const ChainWrapper = styled(ItemV)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #e8eff8;
  font-family: N27, sans-serif;
`;

const MainContent = styled(ItemV)`
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

const CountdownWrapper = styled.div`
  width: 100%;
  z-index: 99999999;
`;
