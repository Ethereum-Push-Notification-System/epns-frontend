/* eslint-disable @typescript-eslint/ban-types */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, useEffect, useRef, useState } from 'react';

import ReactPlayer from 'react-player';
import Link from '@docusaurus/Link';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { TbArrowUpRight } from 'react-icons/tb';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { device, size } from '../../../src/config/globals';
import { useSiteBaseUrl } from '../../utils/useSiteBaseUrl';

import ImageBg from '@site/static/assets/website/chain/chainFeaturesDivider@3x.png';
import { Button } from '@site/src/css/SharedStyling';
import CustomReactPlayer from '../../utils/CustomReactPlayer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export type ChainFeaturesSectionProps = {};

const ChainFeaturesSection: FC<ChainFeaturesSectionProps> = () => {
  const playerRef = useRef<ReactPlayer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const canPlayVideo =
    isPlaying &&
    typeof window !== 'undefined' &&
    window.innerWidth > size.tablet;

  const history = useHistory();
  const baseURL = useSiteBaseUrl() || '';

  const handleClick = () => {
    const targetUrl = `${baseURL}/chain/knowledge`;
    history.push(targetUrl);
  };

  useEffect(() => {
    ScrollTrigger.create({
      trigger: playerRef.current?.wrapper, // The video wrapper element
      start: 'top bottom',
      end: 'bottom top',
      onEnter: () => setIsPlaying(true), // Start playback when video enters
      onLeave: () => {
        setIsPlaying(false);
        playerRef.current?.seekTo(0);
      },
      onEnterBack: () => setIsPlaying(true),
      onLeaveBack: () => {
        setIsPlaying(false);
        playerRef.current?.seekTo(0);
      },
    });
  }, []);

  return (
    <ChainFeaturesContainer>
      <DividerImg />

      <ChainFeaturesWrapper>
        <InnerContainer>
          <HeaderContainer>
            <Header>
              Craft seamless, consumer-focused
              <br />
              experiences for users on any chain
            </Header>
            <Link href='https://whitepaper.push.org/' target='_blank'>
              <Button
                background='#D548EC'
                borderRadius='16px'
                fontFamily='N27'
                fontSize='18px'
                fontWeight='500'
                display='flex'
                gap='12px'
              >
                Read Whitepaper
                <TbArrowUpRight size={24} />
              </Button>
            </Link>
          </HeaderContainer>
          <FeatureContainer id='technology'>
            <FeatureSubContainer>
              <FinalityContainer ref={playerRef}>
                <CustomReactPlayer
                  url={
                    require(
                      `@site/static/assets/website/chain/instant-finality.webm`
                    ).default
                  }
                  playing={canPlayVideo}
                  link={'instant-finality'}
                  title='Instant Finality'
                  alt='Instant Finality'
                />

                <FeatureTextHeading>
                  Instant
                  <span className='breakpoint'> Finality</span>
                </FeatureTextHeading>
              </FinalityContainer>

              <FeatureContainerSegregator>
                <OnboardingContainer>
                  <div className='video'>
                    <CustomReactPlayer
                      url={
                        require(
                          `@site/static/assets/website/chain/onboarding.webm`
                        ).default
                      }
                      playing={canPlayVideo}
                      link={'seamless-instant'}
                      title='Seamless Instant'
                      alt='Seamless Instant'
                    />
                  </div>

                  <FeatureTextSubHeading>
                    Seamless, Instant
                    <br />
                    Onboarding
                  </FeatureTextSubHeading>
                </OnboardingContainer>

                <FeatureContainerSecondSegregator>
                  <TxFeeContainer>
                    <div ref={playerRef} className='video'>
                      <CustomReactPlayer
                        url={
                          require(
                            `@site/static/assets/website/chain/cheap_storage.webm`
                          ).default
                        }
                        playing={canPlayVideo}
                        link={'cheap-storage'}
                        title='Cheap Storage'
                        alt='Cheap Storage'
                      />
                    </div>

                    <FeatureTextSubHeading style={{ color: 'white' }}>
                      Cheap
                      <br />
                      Storage &<br />
                      Tx Fee
                    </FeatureTextSubHeading>
                  </TxFeeContainer>

                  <StorageAndScalableContainerMobile>
                    <TxFeeContainerMobile>
                      <div ref={playerRef} className='video'>
                        <CustomReactPlayer
                          url={
                            require(
                              `@site/static/assets/website/chain/cheap_storage.webm`
                            ).default
                          }
                          playing={canPlayVideo}
                          link={'cheap-storage'}
                          title='Cheap Storage'
                          alt='Cheap Storage'
                        />
                      </div>

                      <FeatureTextSubHeading style={{ color: 'white' }}>
                        Cheap
                        <br />
                        Storage &<br />
                        Tx Fee
                      </FeatureTextSubHeading>
                    </TxFeeContainerMobile>

                    <ScalableContainerMobile>
                      <div ref={playerRef} className='video'>
                        <CustomReactPlayer
                          url={
                            require(
                              `@site/static/assets/website/chain/infinitely_scale.webm`
                            ).default
                          }
                          playing={canPlayVideo}
                          link={'infinitely-scalable'}
                          title='Infinitely Scalable'
                          alt='Infinitely Scalable'
                        />
                      </div>

                      <FeatureTextSubHeading>
                        Infinitely
                        <br />
                        Scalable
                      </FeatureTextSubHeading>
                    </ScalableContainerMobile>
                  </StorageAndScalableContainerMobile>

                  <AnyChainContainer>
                    <CustomReactPlayer
                      url={
                        require(
                          `@site/static/assets/website/chain/any_chain.webm`
                        ).default
                      }
                      playing={canPlayVideo}
                      link={'any-chain'}
                      title='Any Chain'
                      alt='Any Chain'
                    />

                    <FeatureTextSubHeading style={{ color: '#000' }}>
                      Any Chain
                      <span className='breakpoint'>Transactions</span>
                    </FeatureTextSubHeading>
                  </AnyChainContainer>
                </FeatureContainerSecondSegregator>
              </FeatureContainerSegregator>
            </FeatureSubContainer>

            <FeatureSubContainer>
              <KnowledgeBaseContainer onClick={handleClick}>
                <div ref={playerRef} className='video'>
                  <CustomReactPlayer
                    url={
                      require(
                        `@site/static/assets/website/chain/knowledge_base.webm`
                      ).default
                    }
                    playing={canPlayVideo}
                    playContinuously={true}
                    link={'explore-knowledgebase'}
                    title='Explore Knowledgebase'
                    alt='Explore Knowledgebase'
                  />

                  <KnowledgeBaseIcon
                    size={56}
                    style={{ alignSelf: 'flex-start' }}
                  />
                  <KnowledgeBaseIconMobile
                    size={24}
                    style={{ alignSelf: 'flex-start' }}
                  />
                </div>
                <KnowledgeBaseTextContainer>
                  <FeatureTextHeading
                    style={{ color: '#000000', whiteSpace: 'break-spaces' }}
                  >
                    Explore the
                    <br />
                    Knowledge Base
                  </FeatureTextHeading>
                  <span>
                    Learn why Push Chain stands out as
                    <br />
                    the foremost consumer chain in web3
                  </span>
                </KnowledgeBaseTextContainer>
              </KnowledgeBaseContainer>

              <ScalableContainer ref={playerRef}>
                <div className='video'>
                  <CustomReactPlayer
                    url={
                      require(
                        `@site/static/assets/website/chain/infinitely_scale.webm`
                      ).default
                    }
                    playing={canPlayVideo}
                    link={'infinitely-scalable'}
                    title='Infinitely Scalable'
                    alt='Infinitely Scalable'
                  />
                </div>
                <FeatureTextSubHeading>
                  Infinitely
                  <br />
                  Scalable
                </FeatureTextSubHeading>
              </ScalableContainer>
            </FeatureSubContainer>
          </FeatureContainer>

          <HeaderTwoContainer>
            <HeaderTwo>One chain for infinite possibilities</HeaderTwo>

            <CustomReactPlayer
              url={
                require(`@site/static/assets/website/chain/one-chain.webm`)
                  .default
              }
              playing={canPlayVideo}
              playContinuously={true}
              link={'one-chain'}
              title='one chain'
              alt='one chain'
            />

            <HeaderTwoSubheader>
              Push chain allows developers to finally create applications that
              are accessible from any chain.
              <br /> <br />
              Push Chain's shared state enables settlement from all EVM and
              non-EVM chains, enabling shared applications and unleashing new
              experiences that benefit all L1s, L2s, and their users.
            </HeaderTwoSubheader>
          </HeaderTwoContainer>
        </InnerContainer>
      </ChainFeaturesWrapper>

      <DividerImg inverted />
    </ChainFeaturesContainer>
  );
};

export { ChainFeaturesSection };

const ChainFeaturesContainer = styled.div`
  align-items: flex-start;
  display: flex;
  padding: 172px 0px 192px 0px;
  flex-direction: column;

  width: -webkit-fill-available;

  .inverted-divider {
    transform: rotate(180deg);
  }

  .breakpoint {
    display: block;
  }
`;

const DividerImg = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${ImageBg});
  background-repeat: repeat-x;
  background-size: contain;
  background-position: ${({ inverted }) => (inverted ? 'bottom' : 'bottom')};
  transform: ${({ inverted }) => (inverted ? 'rotate(180deg)' : 'none')};
`;

const ChainFeaturesWrapper = styled.div`
  background-color: #000000;
  margin: -4px 0px;
  width: -webkit-fill-available;
  padding: 150px 0;
`;

const InnerContainer = styled.div`
  width: 1200px;
  margin: 0 auto;

  @media ${device.desktopL} {
    width: 1400px;
  }

  @media ${device.desktop} {
    width: 1200px;
  }

  @media (max-width: 1248px) {
    padding: 0 24px;
    width: 100%;
  }

  @media ${device.tablet} {
    padding: 0 24px;
  }

  @media ${device.mobileL} {
    padding: 0 16px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const Header = styled.span`
  color: #fff;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -0.96px;

  @media ${device.tablet} {
    text-align: center;
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 100px;
  flex-direction: column;

  @media ${device.tablet} {
    margin-top: 40px;
  }
`;

const FeatureSubContainer = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const FeatureTextHeading = styled.h2`
  color: #fff;
  font-family: N27;
  font-size: 52px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 52px */
  letter-spacing: -1.04px;
  margin: 0;

  display: inline;
  white-space: nowrap;

  @media ${device.tablet} {
    font-size: 28px;

    .breakpoint {
      display: inline;
    }
  }
`;

const FeatureTextSubHeading = styled.span`
  color: #000;
  font-family: N27;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 36px */
  letter-spacing: -0.72px;

  display: inline;
  white-space: nowrap;

  @media ${device.tablet} {
    font-size: 24px;

    .breakpoint {
      display: inline;
    }
  }
`;

const FinalityContainer = styled.div`
  display: flex;
  width: 50%;
  height: 630.085px;
  padding: 40px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  border: 2px solid #fff;
  position: relative;

  @media (max-width: 1248px) {
    width: calc(50% - 8px);
  }

  @media ${device.tablet} {
    width: 100%;
    height: fit-content;
    padding: 24px;
    overflow: hidden;
    border-radius: 16px;

    img {
      display: block;
      width: auto;
      height: 200px;
      object-fit: contain;
    }
  }
`;

const FeatureContainerSegregator = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  gap: 16px;

  @media (max-width: 1248px) {
    width: calc(50% - 8px);
  }

  @media ${device.tablet} {
    flex-direction: column;
    width: -webkit-fill-available;
  }
`;

const FeatureContainerSecondSegregator = styled.div`
  display: flex;
  width: -webkit-fill-available;
  gap: 16px;

  @media ${device.tablet} {
    flex-direction: column;
  }
`;

const TxFeeContainer = styled.div`
  display: flex;
  width: 49%;
  height: 278.124px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #4b75ff;

  .video {
    height: 120px !important;
    width: auto !important;
  }

  video {
    display: block;
    height: 120px !important;
    width: auto !important;
    object-fit: contain;
  }

  @media ${device.tablet} {
    display: none;
    border-radius: 16px;
    height: 275px;
    overflow: hidden;

    img {
      display: block;
      width: auto;
      height: 150px;
      object-fit: contain;
    }
  }
`;

const TxFeeContainerMobile = styled(TxFeeContainer)`
  display: none;

  @media ${device.tablet} {
    display: flex;

    .video {
      height: 120px !important;
      width: auto !important;
    }

    video {
      display: block;
      height: 120px !important;
      width: auto !important;
      object-fit: contain;
    }
  }
`;

const OnboardingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 334.496px;
  padding: 32px;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #64f6b2;
  flex-direction: column;

  .video {
    width: auto;
    height: 169px;
  }

  @media ${device.tablet} {
    width: 100%;
    height: fit-content;
    overflow: hidden;
    border-radius: 16px;
    padding: 24px;

    img {
      display: block;
      width: auto;
      height: 200px;
      object-fit: contain;
    }
  }
`;
const AnyChainContainer = styled.div`
  display: flex;
  width: 49%;
  height: 278.124px;
  padding: 32px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #ffff;

  @media ${device.tablet} {
    width: 100%;
    height: 246px;
    overflow: hidden;
    border-radius: 16px;
    padding: 24px;

    img {
      display: block;
      width: auto;
      object-fit: contain;
    }
  }
`;

const ScalableContainer = styled.div`
  display: flex;
  width: 24%;
  height: 413.56px;
  padding: 32px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #ffe659;

  .video {
    // width: 100%;
    height: 250px;
  }

  @media ${device.tablet} {
    display: none;
  }
`;

const ScalableContainerMobile = styled(ScalableContainer)`
  display: none;
  @media ${device.tablet} {
    display: flex;
    width: 47%;
    border-radius: 16px;
    height: 275px;
    overflow: hidden;

    img {
      display: block;
      width: auto;
      height: 150px;
      object-fit: contain;
    }
  }
`;

const KnowledgeBaseContainer = styled.div`
  display: flex;
  width: 75.2%;
  height: 413.56px;
  padding: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 48px;
  background: #e492ff;

  img {
    display: block;
    width: auto !important;
    height: 200px !important;
    object-fit: contain;
  }

  .video {
    width: 100% !important;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  video {
    display: block;
    width: 420px !important;
    height: auto !important;
    object-fit: contain;
  }

  span {
    color: #000;
    font-family: N27;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 30px */
    letter-spacing: -0.48px;

    @media ${device.tablet} {
      font-size: 14px;
    }
  }

  &:hover {
    cursor: pointer;
    color: #fff !important;

    span {
      color: #fff !important;
    }

    h2 {
      color: #fff !important;
    }
  }

  @media ${device.tablet} {
    width: 100%;
    height: fit-content;
    overflow: hidden;
    border-radius: 16px;
    padding: 24px;
    gap: 30px;

    img {
      display: block;
      width: 80%;
      height: auto;
      object-fit: contain;
    }

    video {
      display: block;
      width: 80% !important;
      object-fit: contain;
    }
  }
`;

const KnowledgeBaseTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: -webkit-fill-available;

  @media ${device.tablet} {
    align-items: flex-start;
  }
`;

const KnowledgeBaseIcon = styled(TbArrowUpRight)`
  display: flex;
  @media ${device.tablet} {
    display: none;
  }
`;

const KnowledgeBaseIconMobile = styled(TbArrowUpRight)`
  display: none;
  @media ${device.tablet} {
    display: flex;
  }
`;

const StorageAndScalableContainerMobile = styled.div`
  display: none;
  @media ${device.tablet} {
    display: flex;
    gap: 16px;
  }
`;

const HeaderTwoContainer = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 300px auto 0 auto;
  gap: 20px;

  @media ${device.tablet} {
    margin-top: 120px;
  }
`;

const HeaderTwo = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 57.6px */
  letter-spacing: -0.96px;
`;

const HeaderTwoSubheader = styled.span`
  color: #fff;
  text-align: center;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 33.6px */
`;
