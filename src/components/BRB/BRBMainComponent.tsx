// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React, { useRef, useState } from 'react';

// External Components
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

// Internal Components
import { CommunityPartners } from '@site/src/components/BRB/BRBCommunityPartners';
import BRBParallax from '@site/src/components/BRB/BRBParallax';
import { PartnerBounties } from '@site/src/components/BRB/BRBPartnerBounties';
import { Partners } from '@site/src/components/BRB/BRBPartners';
import Schedules from '@site/src/components/BRB/BRBSchedules';
import ImageHolder from '@site/src/components/ImageHolder';
import { ChatComponent } from '@site/src/components/PushChat/PushChatComponent';
import {
  Button,
  Content,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import { BRBAlert } from './BRBAlert';

// Import Assets
import Discord from '@site/static/assets/website/brb/Discord-BRB.svg';
import ImageBRB from '@site/static/assets/website/brb/Image-BRB.png';
import MobileBRB from '@site/static/assets/website/brb/Mobile-BRB.png';
import X from '@site/static/assets/website/brb/X-BRB.svg';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

// Internal Configs
import GLOBALS, { device, structure } from '@site/src/config/globals';
import BRBOnline from './BRBOnline';
import { useScrollDirection } from '../../hooks/useScrollDirection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export const BRBMainComponent = () => {
  const d = new Date();
  const year = d.getFullYear();
  const isMobile = useMediaQuery(device.mobileL);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollDirection] = useScrollDirection(isMobileMenuOpen);

  const [isAlertVisible, setIsAlertVisible] = React.useState(true);

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
    <BrbWrapper background='#000'>
      {/* header style */}
      <StyledHeader
        showMobileMenu={showMobileMenu}
        className={`header ${headerClass}`}
      >
        <BRBAlert
          isAlertVisible={isAlertVisible}
          setIsAlertVisible={setIsAlertVisible}
        />

        <Section>
          <Content alignSelf='center' className='contentBox'>
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
                  {/* <NavigationMenuItem onClick={() => handleSectionNavigation('partners')}>
                      <NavigationMenuHeader>
                        <Span
                          fontSize="18px"
                        >
                          Partners
                        </Span>
                      </NavigationMenuHeader>
                    </NavigationMenuItem> */}

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('bounties')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>Bounties</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('schedule')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>Schedule</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('online')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>BRB Online</Span>
                    </NavigationMenuHeader>
                  </NavigationMenuItem>

                  <NavigationMenuItem
                    onClick={() => handleSectionNavigation('playground')}
                  >
                    <NavigationMenuHeader>
                      <Span fontSize='18px'>BRB Chat</Span>
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
          </Content>
        </Section>
      </StyledHeader>

      <ItemTop>
        <ItemV
          id='new'
          margin={isAlertVisible && isMobile ? '5em 0 0 0' : '0 0 0 0'}
        >
          <MemberImage
            className='pushMissingSvg'
            src={isMobile ? MobileBRB : ImageBRB}
            srcSet={isMobile ? MobileBRB : ImageBRB}
          />
        </ItemV>

        <NavText id='elems0'>
          Get ready for an epic tech showdown across 18 cities in India, where
          amazing minds come together to solve one big problem, with a chance to
          win over $50,000 USD in prizes!
        </NavText>

        <NavButtons id='elems' ref={elem0}>
          <ButtonItem
            borderRadius='24px'
            background='#E64DE9'
            border='1px solid #FC6DFF'
            fontSize='18px'
            padding='16px 32px'
            fontWeight='400'
            onClick={() => handleSectionNavigation('bounties')}
          >
            Register Now
          </ButtonItem>
          <ButtonBar
            borderRadius='24px'
            background='#000'
            border='1px solid #E64DE9'
            fontSize='18px'
            padding='16px 32px'
            fontWeight='400'
            onClick={() => handleSectionNavigation('playground')}
          >
            Join the conversation
          </ButtonBar>
        </NavButtons>
      </ItemTop>

      <BRBParallax />

      <Section id='partners'>
        <Content>
          <Partners />
        </Content>
      </Section>

      <Section>
        <Content className='fluid'>
          <CommunityPartners />
        </Content>
      </Section>

      <Section id='bounties'>
        <Content>
          <PartnerBounties />
        </Content>
      </Section>

      <Section id='schedule'>
        <Content className='fluid'>
          <Schedules />
        </Content>
      </Section>

      <Section id='online'>
        <Content>
          <BRBOnline />
        </Content>
      </Section>

      <Section id='playground'>
        <Content>
          <ChatComponent />
        </Content>
      </Section>

      <Section id='support'>
        <Content>
          <ItemFooter>
            <ItemH gap='28px'>
              <ItemV
                minWidth='280px'
                background='#000'
                padding='20px 48px'
                gap='14px'
                borderRadius='48px'
                background='#2a2a39'
              >
                <SpanContent
                  fontSize='112px'
                  fontWeight='400'
                  color='#E64DE9'
                  letterSpacing='0.01'
                >
                  Drop us a GM!
                </SpanContent>
              </ItemV>

              <ItemV gap='28px' minWidth='280px' alignItems='stretch'>
                <FooterBar
                  style={{ cursor: 'pointer' }}
                  onClick={() => openLink('https://discord.gg/cTRqvYzXpW')}
                >
                  <i>
                    <Discord />
                  </i>

                  <Span fontSize='36px' fontWeight='400' color='#6F8BEE'>
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
                    <X className='discord' />
                  </i>

                  <Span fontSize='36px' fontWeight='400' color='#63BFF3'>
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
        </Content>
      </Section>

      <BottomGrad>
        <Span fontSize='18px' fontWeight='400' color='#FFF'>
          © {year || ''} Push. All rights reserved.
        </Span>
      </BottomGrad>
    </BrbWrapper>
  );
};

const MemberImage = styled(ImageHolder)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;

const ItemTop = styled.main`
  width: 100%;
  margin: 261px 0 261px 0;

  @media ${device.mobileL} {
    width: 100%;
    margin: 125px 0 0px 0;
  }
`;

const ButtonItem = styled(Button)`
  vertical-align: middle;
  font-size: 18px;
  font-style: normal;
  font-family: Glancyr, sans-serif;
  letter-spacing: 0.03em;
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
  letter-spacing: 0.03em;
  font-family: Glancyr, sans-serif;
  &:hover {
    border: 1px solid #e64de9;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;

const BrbWrapper = styled(ItemV)`
  overflow: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #000;
  font-family: Glancyr, sans-serif;

  & .pushMissingSvg {
    width: 900px;
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
  width: 100%;
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
  margin: 51px auto 0 auto;

  @media ${device.laptop} {
    flex-direction: column;
    width: 100%;
    padding: 14px 10px 14px 20px;
    margin: 10px auto;
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

  & .contentBox {
    padding: 0px ${structure.PADDING.DESKTOP.RIGHT}px !important;
    max-width: ${GLOBALS.STRUCTURE.MAX_WIDTH}px !important;

    @media ${device.tablet} {
      padding: 0px ${structure.PADDING.TABLET.RIGHT}px !important;
    }

    @media ${device.mobile} {
      padding: 0px ${structure.PADDING.MOBILE.RIGHT}px !important;
    }
  }

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
  width: 100%;
`;

const SpanContent = styled(Span)`
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;

  @media ${device.laptop} {
    -webkit-line-clamp: 3;
  }

  @media ${device.mobileL} {
    font-size: 89px;
    line-height: 110%;
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
    & svg {
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
