// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React, { useRef, useState } from 'react';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Internal Components
import {
  Button,
  Content,
  H2,
  H3,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import Accordion from '../Accordion';
import BootcampCurriculum from './BootcampCurriculum';
import { bootcampFaq } from '@site/src/config/BootcampFaq';
import { bootcampCards } from '@site/src/config/BootcampCard';
import InfoBar from '@site/src/components/InfoBar';

// Import Assets
import Discord from '@site/static/assets/website/brb/Discord-BRB.svg';
import Query from '@site/static/assets/website/bootcamp/query.svg';
import FirstImage from '@site/static/assets/website/bootcamp/bg-image1.png';
import X from '@site/static/assets/website/brb/X-BRB.svg';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import { AiOutlineClose, AiOutlineGithub } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

// Internal Configs
import GLOBALS, { device } from '@site/src/config/globals';
import { useScrollDirection } from '../../hooks/useScrollDirection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const BootcampMainComponent = () => {
  const d = new Date();
  const year = d.getFullYear();
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const isLaptop = useMediaQuery(device.laptop);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection] = useScrollDirection(isMobileMenuOpen);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const showMobileMenu = isMobile && isMobileMenuOpen;
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const handleSectionNavigation = (id) => {
    if (showMobileMenu) toggleMobileMenu();

    gsap.to(window, {
      duration: 0.75,
      scrollTo: { y: `#${id}` },
    });
  };

  const openLink = (link: string) => {
    window.open(link, '_blank');
  };

  const elem0 = useRef(null);

  const openHomePage = () => {
    window.open('/', '_self');
  };

  return (
    <BootcampWrapper background='#000'>
      {/* header style */}
      <BootcampBG>
        <StyledHeader
          showMobileMenu={showMobileMenu}
          className={`header ${headerClass}`}
        >
          <Section>
            <NavList isMobileMenuOpen={isMobileMenuOpen}>
              <MenuTop flex='initial'>
                <PushLogoBlackContainer className='headerlogo' flex='initial'>
                  <PushLogo
                    style={{ margin: '0px 9px 0px 4px' }}
                    onClick={openHomePage}
                  />
                  <Span
                    fontSize='24px'
                    fontWeight='400'
                    style={{ fontFamily: 'Glancyr' }}
                  >
                    #BRB
                  </Span>
                </PushLogoBlackContainer>

                <MobileMenuToggleIcon>
                  {isMobileMenuOpen ? (
                    <AiOutlineClose
                      size={28}
                      color='#fff'
                      onClick={toggleMobileMenu}
                    />
                  ) : (
                    <GiHamburgerMenu
                      size={28}
                      color='#fff'
                      onClick={toggleMobileMenu}
                    />
                  )}
                </MobileMenuToggleIcon>
              </MenuTop>

              <HeaderNavItemV showMobileMenu={isMobileMenuOpen} margin>
                <NavigationMenu
                  role='menu'
                  className='navigationMenu'
                  showMobileMenu={isMobileMenuOpen}
                >
                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('ready')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>Why BRB Bootcamp?</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('curriculum')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>Curriculum</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('faq')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>FAQ</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('support')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>Support</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>
                </NavigationMenu>
              </HeaderNavItemV>

              <HeaderFocusItems flex='initial' alignSelf='stretch'>
                <IconMenu
                  role='menu'
                  className='navigationMenu'
                  showMobileMenu={isMobileMenuOpen}
                >
                  <NavigationMenuItem
                    onClick={() => {
                      if (isMobileMenuOpen) toggleMobileMenu();
                      openLink('https://discord.gg/cTRqvYzXpW');
                    }}
                  >
                    <NavigationMenuHeader>
                      <Discord />
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => {
                      if (isMobileMenuOpen) toggleMobileMenu();
                      openLink('https://x.com/PushChain');
                    }}
                  >
                    <NavigationMenuHeader>
                      <X />
                    </NavigationMenuHeader>
                  </NavigationMenuItem>
                </IconMenu>
              </HeaderFocusItems>
            </NavList>
            {/* </Content> */}
          </Section>
        </StyledHeader>

        <ItemTop>
          <ItemH margin='0px auto 0 auto'>
            <InfoBar
              text='BRB Bootcamp has concluded. Thank you for joining us!'
              url='https://github.com/orgs/push-protocol/discussions/categories/brb-bootcamp'
            />
          </ItemH>

          <ItemV id='new' margin={isMobile ? '5em 0 0 0' : '24px 0 0 0'}>
            <MemberImage
              className='pushMissingSvg'
              src={
                require(`@site/static/assets/website/bootcamp/bootcamp.png`)
                  .default
              }
              srcSet={`${require(`@site/static/assets/website/bootcamp/bootcamp@2x.png`).default} 2x, ${require(`@site/static/assets/website/bootcamp/bootcamp@3x.png`).default} 3x, ${require(`@site/static/assets/website/bootcamp/bootcamp@4x.png`).default} 4x`}
              alt={'BRB Bootcamp'}
            />
          </ItemV>

          <NavText id='elems0'>
            6-week virtual program designed to teach participants about smart
            contracts, Web3 UX, building a startup, and other aspects of the
            Web3 ecosystem.
          </NavText>

          <NavButtons id='elems' ref={elem0}>
            <ButtonItem
              borderRadius='24px'
              background='#E64DE9'
              border='1px solid #FC6DFF'
              fontSize='18px'
              padding='16px 50px 22px 50px !important'
              fontWeight='400'
              onClick={() =>
                openLink(
                  'https://github.com/orgs/push-protocol/discussions/categories/brb-bootcamp'
                )
              }
            >
              Join Discussion
            </ButtonItem>
            <ButtonBar
              borderRadius='24px'
              background='#000'
              border='1px solid #E64DE9'
              fontSize='18px'
              padding='16px 32px'
              fontWeight='400'
              onClick={() => handleSectionNavigation('faq')}
            >
              Learn More
            </ButtonBar>
          </NavButtons>
        </ItemTop>
      </BootcampBG>

      <Section>
        <Content
          className='fluid'
          overflow='visible'
          padding={isMobile ? '0px 0px' : '0px 0px 100px 0px'}
        >
          <Image
            src={
              require(`@site/static/assets/website/bootcamp/bg-image2.png`)
                .default
            }
            srcSet={`${require(`@site/static/assets/website/bootcamp/bg-image2@2x.png`).default} 2x, ${require(`@site/static/assets/website/bootcamp/bg-image2@3x.png`).default} 3x`}
            alt={`Image showing BRB Chat is powered by Push Chat`}
          />
        </Content>
      </Section>

      <Section id='ready'>
        <Content>
          <H2
            color='#FFF'
            fontSize={isMobile ? '32px' : '46px'}
            fontFamily='Glancyr, sans-serif'
            textAlign='center'
            fontWeight='400'
          >
            Ready, Set, Grow
          </H2>

          <ItemH
            flexDirection={isMobile && 'column'}
            margin={'64px 0 0 0'}
            gap={isMobile ? '16px' : '32px'}
          >
            {bootcampCards?.map((item) => (
              <CardItem>
                <CardImage
                  src={
                    require(
                      `@site/static/assets/website/bootcamp/${item.href}.png`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/bootcamp/${item.href}@2x.png`).default} 2x, ${require(`@site/static/assets/website/bootcamp/${item.href}@3x.png`).default} 3x`}
                  alt={`Image showing BRB Chat is powered by Push Chat`}
                />

                <H3
                  color='#FFF'
                  fontSize={isMobile ? '24px' : '28px'}
                  fontFamily='Glancyr, sans-serif'
                  textAlign='center'
                  fontWeight='400'
                  margin='12px 0 0 0'
                >
                  {item.title}
                </H3>

                <H3
                  color='#FFF'
                  fontSize={isMobile ? '14px' : '18px'}
                  fontFamily='Glancyr, sans-serif'
                  textAlign='center'
                  fontWeight='300'
                  margin='12px 0 0 0'
                  lineHeight='normal'
                >
                  {item.subtitle}
                </H3>
              </CardItem>
            ))}
          </ItemH>
        </Content>
      </Section>

      <Section id='curriculum'>
        <Content>
          <H2
            color='#FFF'
            fontSize={isMobile ? '32px' : '46px'}
            fontFamily='Glancyr, sans-serif'
            textAlign='center'
            fontWeight='400'
          >
            Curriculum
          </H2>

          <BootcampCurriculum />
        </Content>
      </Section>

      <Section>
        <Content>
          <H2
            color='#FFF'
            fontSize={isMobile ? '32px' : '46px'}
            fontFamily='Glancyr, sans-serif'
            textAlign='center'
            fontWeight='400'
          >
            Bootcamp Rewards
          </H2>

          <H3
            color='#FFF'
            fontSize={isMobile ? '14px' : '20px'}
            fontFamily='Glancyr, sans-serif'
            textAlign='center'
            fontWeight='300'
            margin='8px 0 0 0'
          >
            Beyond unmeasurable learning, you will also earn a NFT Certificate,
            Earn Push Tokens, Rewards and Social badges
          </H3>

          <RewardsImage
            src={
              require(`@site/static/assets/website/bootcamp/rewards.png`)
                .default
            }
            srcSet={`${require(`@site/static/assets/website/bootcamp/rewards@2x.png`).default} 2x, ${require(`@site/static/assets/website/bootcamp/rewards@3x.png`).default} 3x`}
            alt={`Image showing BRB Chat is powered by Push Chat`}
          />
        </Content>
      </Section>

      <Section id='faq'>
        <Content>
          <ItemH
            flexDirection={isMobile && 'column'}
            alignItems='flex-start'
            justifyContent='space-between'
          >
            <H2
              color='#FFF'
              fontSize={isMobile ? '32px' : '46px'}
              fontFamily='Glancyr, sans-serif'
              textAlign={isLaptop && 'center'}
              margin={isLaptop && '0 auto'}
              fontWeight='400'
            >
              FAQ
            </H2>

            <AccordionGrid>
              <Accordion items={bootcampFaq} fontFamily='Glancyr, sans-serif' />
            </AccordionGrid>
          </ItemH>
        </Content>
      </Section>

      <Section>
        <Content>
          <ItemH
            gap={isTablet ? '24px' : '175px'}
            flexDirection={isTablet && 'column'}
          >
            <ItemV>
              <H2
                color='#FFF'
                fontSize={isMobile ? '32px' : '46px'}
                fontFamily='Glancyr, sans-serif'
                fontWeight='400'
                margin={!isLaptop ? '0 auto 0 0' : '0 auto'}
                textAlign={isTablet && 'center'}
              >
                Follow and share about BRB Bootcamp with #BRBBootcamp on X
              </H2>
            </ItemV>

            <ButtonItem
              borderRadius='24px'
              background='#E64DE9'
              border='1px solid #FC6DFF'
              fontSize='18px'
              padding='16px 32px'
              fontWeight='400'
              width={isMobile && '250px !important'}
              onClick={() => openLink('https://x.com/pushbuilders')}
            >
              Follow us
            </ButtonItem>
          </ItemH>
        </Content>
      </Section>

      <ItemFooter id='support'>
        <ItemH gap={isMobile ? '24px' : '28px'}>
          <ItemV
            gap={isMobile ? '24px' : '28px'}
            minWidth='280px'
            alignItems='stretch'
          >
            <FooterBar
              style={{ cursor: 'pointer' }}
              onClick={() =>
                openLink(
                  'https://app.push.org/chat/0x71Ffa5771E8019787190D098586EFe02026a3c8C'
                )
              }
            >
              <i>
                <Query className='same' />
              </i>

              <Span
                fontSize={isMobile ? '24px' : '36px'}
                fontWeight='400'
                color='#F576F8'
              >
                Ask our AI for any Push Queries
              </Span>

              <Image
                width={65}
                src={
                  require(
                    `@site/static/assets/website/brb/others/ArrowIcon.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/brb/others/ArrowIcon@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/others/ArrowIcon@3x.webp`).default} 3x`}
                alt={`Image showing BRB Chat is powered by Push Chat`}
              />
            </FooterBar>

            <FooterBar
              style={{ cursor: 'pointer' }}
              onClick={() =>
                openLink(
                  'https://github.com/orgs/push-protocol/discussions/categories/brb-bootcamp'
                )
              }
            >
              <i>
                <AiOutlineGithub color='#fff' size={isMobile ? '55' : '75'} />
              </i>

              <Span
                fontSize={isMobile ? '24px' : '36px'}
                fontWeight='400'
                color='#3ADB84'
              >
                Github Discussions
              </Span>

              <Image
                width={65}
                src={
                  require(
                    `@site/static/assets/website/brb/others/ArrowIcon.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/brb/others/ArrowIcon@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/others/ArrowIcon@3x.webp`).default} 3x`}
                alt={`Image showing BRB Chat is powered by Push Chat`}
              />
            </FooterBar>
          </ItemV>

          <ItemV
            gap={isMobile ? '24px' : '28px'}
            minWidth='280px'
            alignItems='stretch'
          >
            <FooterBar
              style={{ cursor: 'pointer' }}
              onClick={() => openLink('https://discord.gg/cTRqvYzXpW')}
            >
              <i>
                <Discord className='expand' />
              </i>

              <Span
                fontSize={isMobile ? '24px' : '36px'}
                fontWeight='400'
                color='#6F8BEE'
              >
                24x7 Support on Discord
              </Span>

              <Image
                width={65}
                src={
                  require(
                    `@site/static/assets/website/brb/others/ArrowIcon.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/brb/others/ArrowIcon@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/others/ArrowIcon@3x.webp`).default} 3x`}
                alt={`Image showing BRB Chat is powered by Push Chat`}
              />
            </FooterBar>

            <FooterBar
              style={{ cursor: 'pointer' }}
              onClick={() => openLink('https://x.com/PushChain')}
            >
              <i>
                <X className='discord expand' />
              </i>

              <Span
                fontSize={isMobile ? '24px' : '36px'}
                fontWeight='400'
                color='#63BFF3'
              >
                Updates & Announcements
              </Span>

              <Image
                width={65}
                src={
                  require(
                    `@site/static/assets/website/brb/others/ArrowIcon.webp`
                  ).default
                }
                srcSet={`${require(`@site/static/assets/website/brb/others/ArrowIcon@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/others/ArrowIcon@3x.webp`).default} 3x`}
                alt={`Image showing BRB Chat is powered by Push Chat`}
              />
            </FooterBar>
          </ItemV>
        </ItemH>
      </ItemFooter>

      <BottomGrad>
        <Span fontSize='18px' fontWeight='400' color='#FFF'>
          © {year || ''} Push. All rights reserved.
        </Span>
      </BottomGrad>
    </BootcampWrapper>
  );
};

const MemberImage = styled(Image)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ItemTop = styled.main`
  width: 100%;
  margin: 323px 0 0 0;

  @media ${device.mobileL} {
    width: 100%;
    margin: 125px 0 0px 0;
  }
`;

const BootcampBG = styled.div`
  flex-direction: column;
  background-image: url(${FirstImage});
  background-position: top;
  //   background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  font-family: 'Strawford', sans-serif;
  width: 100%;
  // width: 1536px;
  //   height: 700px;
  margin: 0 auto;
  @media (max-width: 1650px) {
    width: 100%;
    background-size: cover;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const ButtonItem = styled(Button)`
  font-size: 18px;
  font-weight: 400;
  font-family: Glancyr, sans-serif;
  letter-spacing: 0.03em;
  line-height: 18px;
  padding: 16px 54px 22px 54px;
  border-radius: 24px;

  &:hover {
    box-shadow: 0px 4px 12px 0px rgba(230, 77, 233, 0.5);
    border: 1px solid transparent;
  }
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const ButtonBar = styled(Button)`
  font-size: 18px;
  letter-spacing: 0.03em;
  font-family: Glancyr, sans-serif;
  padding: 16px 32px 22px 32px;
  line-height: 18px;
  border-radius: 24px;
  font-weight: 400;

  &:hover {
    border: 1px solid #e64de9;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const BootcampWrapper = styled(ItemV)`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  font-family: Glancyr, sans-serif;

  & .pushMissingSvg {
    width: 680px;
    @media ${device.tablet} {
      width: 50%;
    }
    @media ${device.mobileL} {
      width: 248px;
    }
  }
`;

const NavList = styled.div`
  position: relative;
  width: 1243px;
  height: ${(props) => (!props.isMobileMenuOpen ? '78px' : 'auto')};
  max-height: ${(props) => (!props.isMobileMenuOpen ? '78px' : 'auto')};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  border-radius: 55px;
  border: 1px solid #2a2a39;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  padding: 0px 23px;
  margin-top: 51px;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    padding: 14px 10px 14px 20px;
    margin: 10px 10px;
    box-sizing: border-box;
    align-items: center;
    border-radius: ${(props) => (props.isMobileMenuOpen ? '32px' : '55px')};
  }
`;

const StyledHeader = styled.header`
  font-family: 'Strawford', sans-serif;

  /* padding: 0px 160px; */

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 78px;

  /* color: #ffffff;
  background: #121315; */
  opacity: 1;
  z-index: 99999 !important;

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  transition: top 0.3s ease-in-out;

  &.hide {
    top: -100%;
  }

  &.light {
    & span {
      color: #121315;
    }

    & svg.chevronIcon {
      fill: #121315;

      & path {
        stroke: #121315;
      }
    }
  }

  z-index: 999;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${device.laptop} {
    flex-direction: column;

    &.hide {
      top: -100%;
    }
  }
`;

const NavText = styled.div`
  color: #fff;
  font-family: Glancyr, sans-serif;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  z-index: -1;

  width: 844px;
  text-align: center;
  margin: 20px auto 0 auto;

  @media ${device.laptop} {
    width: 80%;
  }

  @media ${device.mobileL} {
    width: 248px;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
  }
`;

const NavButtons = styled.div`
  margin: 39px 0 0 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: center;
  align-items: center;
  z-index: -1;

  @media ${device.laptop} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    margin: 50px auto 0 auto;
    flex-direction: column;
    width: 252px;
  }
`;

const MenuTop = styled(ItemV)`
  display: flex;

  & svg {
    cursor: pointer;
  }

  @media ${device.laptop} {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

const RewardsImage = styled(Image)`
  width: 577px;
  margin: 64px auto 0 auto;

  @media ${device.tablet} {
    width: 100%;
  }
`;

const CardImage = styled(Image)`
  width: 90px;
  height: 90px;
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: #fff;
  font-size: 24.207px;
  font-style: normal;
  font-weight: 400;
`;

const MobileMenuToggleIcon = styled.span`
  display: none;

  @media ${device.laptop} {
    display: flex;
    cursor: pointer;
    margin-right: 20px;
  }
`;

const HeaderNavItemV = styled(ItemV)`
  margin: 0px ${GLOBALS.ADJUSTMENTS.PADDING.SMALL} 0
    ${GLOBALS.ADJUSTMENTS.PADDING.SMALL};

  @media ${device.laptop} {
    margin: ${(props) => (props.showMobileMenu ? '30px 20px 20px 20px' : '0')};
  }
`;

const HeaderFocusItems = styled(ItemH)`
  align-self: stretch;
  flex-wrap: nowrap;

  @media ${device.laptop} {
    flex-direction: collumn;
    align-self: flex-start;
    flex-wrap: wrap;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;

  gap: 36px;

  z-index: 999;

  @media ${device.laptop} {
    flex-direction: column;
    flex: 0 0 75%;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

const IconMenu = styled.ul`
  list-style: none;
  margin: 0 20px 0 0;
  justify-content: flex-start;
  padding: 0;
  display: flex;
  gap: 20px;
  z-index: 999;

  @media ${device.laptop} {
    flex-direction: row;
    flex: 1;
    margin: 10px 20px 20px 20px;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

/**
 * HOVER happens on this element
 */
const NavigationMenuItem = styled.li`
  position: relative;
  font-family: Glancyr, sans-serif;
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  & span {
    font-weight: 400;
    font-size: 18px;
    line-height: 142%;
    color: var(--ifm-color-primary-inverse);
  }

  &:hover {
    & span {
      color: #dd44b9;
      transition-duration: 0.7s;
    }

    & .chevronIcon {
      transform: rotate(180deg);
    }

    & .menuContent {
      display: block;
    }
  }
`;

const NavigationMenuHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
  }

  & span {
    color: #fff;
  }

  @media ${device.laptop} {
    justify-content: space-between;

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) =>
        props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }
`;

const ItemFooter = styled(ItemV)`
  position: relative;
  top: 80px;
  display: flex;
  align-self: center;

  max-width: 1243px;
  width: 100%;

  @media ${device.laptop} {
    width: 90%;
  }
`;

const FooterBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px 48px;
  box-sizing: border-box;
  gap: 14px;

  border-radius: 48px;
  background: #2a2a39;
  flex: 1;

  @media ${device.laptop} {
    flex-direction: column;
    flex-wrap: wrap;
  }

  @media ${device.mobileL} {
    gap: 6px;
  }

  & ${Span} {
    max-width: 312px;

    @media ${device.laptop} {
      font-size: 24px;
    }

    @media ${device.mobileL} {
      font-size: 24px;
      border-radius: 32px;
      padding: 0px;
      box-sizing: border-box;
    }
  }

  & i {
    & .same {
      max-width: 75px !important;
      min-width: 75px !important;

      @media ${device.mobileL} {
        max-width: 52px !important;
        min-width: 52px !important;
      }
    }
    & .expand {
      transform: scale(1.8) !important;
      margin-right: 24px;

      @media ${device.mobileL} {
        transform: scale(1.2) !important;
      }
    }
  }
  & svg {
    margin-left: auto;
  }

  @media ${device.mobileL} {
    border-radius: 32px;
    padding: 35px 20px;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const BottomGrad = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(70, 37, 244, 0.8) 75.63%,
    rgba(251, 142, 255, 0.8) 100%
  );
  height: 340px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 57px;
  box-sizing: border-box;
`;

const CardItem = styled(ItemV)`
  background: #2a2a38;
  padding: 64px 32px;
  border-radius: 48px;
  justify-content: flex-start;

  @media ${device.tablet} {
    padding: 32px 16px;
  }

  @media ${device.mobileL} {
    padding: 64px 32px;
  }
`;

const AccordionGrid = styled.div`
  max-width: 877px;
  min-width: 877px;

  @media ${device.laptop} {
    max-width: 100%;
    min-width: 100%;
  }
`;
