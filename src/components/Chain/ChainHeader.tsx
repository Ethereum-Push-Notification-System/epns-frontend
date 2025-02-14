// /* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, useEffect, useState } from 'react';

import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLocation } from '@docusaurus/router';
import { useHistory } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';

import GLOBALS, { device, structure } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { useSiteBaseUrl } from '@site/src/utils/useSiteBaseUrl';
import { ChainNavBarItems } from './config/ChainNavBarItems';
import useModal from './hooks/useModal';

import {
  Button,
  Content,
  H3,
  ItemH,
  ItemV,
  Section,
  Span,
} from '../../../src/css/SharedStyling';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import ChainLogo from '@site/static/assets/website/chain/ChainLogo.svg';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';
import ChainElevateModal from './ChainElevateModal';
import { BsChevronDown } from 'react-icons/bs';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const defaultMobileMenuState = {
  0: false,
  1: false,
  2: false,
  3: false,
  4: false,
  // add next [index]: false for new main Nav menu item
};

const ChainHeader: FC = () => {
  const isMobile = useMediaQuery(device.laptopM);
  const history = useHistory();
  const location = useLocation();

  const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const [scrollDirection] = useScrollDirection(isMobileMenuOpen);
  const { isOpen, open, close } = useModal();

  const baseURL = useSiteBaseUrl() || '';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const showMobileMenu = isMobile && isMobileMenuOpen;
  const headerClass = `${scrollDirection === 'scrollDown' ? 'hide' : 'show'}`;

  const onMobileHeaderMenuClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    menuIndex: number,
    itemId
  ) => {
    e.preventDefault();
    const newMenuState = {
      ...mobileMenuMap,
      [menuIndex]: !mobileMenuMap[menuIndex], // Toggle only the clicked menu
    };

    setMobileMenuMap(newMenuState);
    setActiveItem(itemId);
  };

  const handleMouseEnter = (e, activeId, itemId) => {
    setMobileMenuMap({
      ...defaultMobileMenuState,
      [activeId]: true,
    });
    setActiveItem(itemId!);
  };

  const handleMouseLeave = (e, activeId) => {
    setMobileMenuMap({
      ...defaultMobileMenuState,
      [activeId]: false,
    });
    setActiveItem(null);
  };

  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      // Cleanup: Reset overflow when the component unmounts
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isMobile]);

  const handleSectionNavigation = (item) => {
    setActiveItem(item?.id);
    if (!item.url) {
      if (showMobileMenu) toggleMobileMenu();

      // Scroll to the section if no URL exists
      gsap.to(window, {
        duration: 0.75,
        scrollTo: { y: `#${item?.id}` },
      });
    }
  };

  const handleRedirect = (item) => {
    setActiveItem(item?.id);

    if (!item.url) return;

    // Handle external links
    if (item?.url.startsWith('https://')) {
      setIsMobileMenuOpen(false);
      window.open(item?.url, '_blank');
      return;
    }

    if (item?.url == '/blog') {
      const targetUrl = baseURL + item?.url;

      // Navigate to the new URL
      history.push(targetUrl);
      setIsMobileMenuOpen(false);
      return;
    }

    // Handle internal links
    if (item?.url.startsWith('/')) {
      const targetUrl = baseURL + item?.url;

      // Navigate to the new URL
      history.push(targetUrl);
      setIsMobileMenuOpen(false);

      // Scroll to the section
      gsap.to(window, {
        duration: 0.75,
        scrollTo: { y: `#${item?.id}` },
      });
      return;
    }

    // Handle in-page navigation
    handleSectionNavigation(item);
  };

  const openHomePage = () => {
    const targetUrl = baseURL;
    history.push(targetUrl);
  };

  // Update the active item based on the current location
  useEffect(() => {
    const activeNavItem = ChainNavBarItems?.find(
      (item) => location.pathname === baseURL + item.url
    );
    if (activeNavItem) {
      setActiveItem(activeNavItem.id);
    }
  }, [location]);

  return (
    <StyledHeader
      showMobileMenu={showMobileMenu}
      isMobileMenuOpen={isMobileMenuOpen}
      className={`header ${headerClass}`}
    >
      <Section>
        <HeaderContent
          className='contentBox'
          isMobileMenuOpen={isMobileMenuOpen}
          showMobileMenu={showMobileMenu}
        >
          <NavList showMobileMenu={showMobileMenu}>
            <MenuTop padding={isMobileMenuOpen && '16px'} flex='initial'>
              <PushLogoBlackContainer
                className='headerlogo'
                flex='initial'
                onClick={openHomePage}
              >
                <PushLogo style={{ margin: '0px 9px 0px 4px' }} />

                {isMobileMenuOpen ? <ChainLogoDark /> : <ChainLogo />}
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
                    color='#000'
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
                {ChainNavBarItems?.map((item, index) => (
                  <NavigationMenuItem
                    key={item.id}
                    isActive={activeItem === item.id}
                    className={activeItem === item?.id ? 'active' : ''}
                    onClick={(e) => {
                      if (item?.subItems) {
                        onMobileHeaderMenuClick(e, index, item.id);
                      } else {
                        handleRedirect(item);
                      }
                    }}
                    showMobileMenu={showMobileMenu}
                    expanded={mobileMenuMap[index]}
                    {...(item.subItems && {
                      onMouseEnter: (e) => handleMouseEnter(e, index, item.id),
                      onMouseLeave: (e) => handleMouseLeave(e, index, item.id),
                    })}
                  >
                    <MenuNavLink className='navLink'>
                      <NavigationMenuHeader isActive={activeItem === item.id}>
                        <Span fontSize='18px'>{item.label}</Span>
                        {item.subItems && (
                          <BsChevronDown
                            size={12}
                            color={activeItem === item.id ? '#000' : '#fff'}
                            className='chevronIcon'
                          />
                        )}
                      </NavigationMenuHeader>

                      {item.subItems && (
                        <DropdownMenu
                          className='menuContent'
                          expanded={mobileMenuMap[index]}
                        >
                          {item.subItems?.map((subItem) => (
                            <DropdownItem
                              key={subItem.id}
                              onClick={() => handleRedirect(subItem)}
                            >
                              <H3>{subItem.label} </H3>
                              <Span>{subItem?.sublabels}</Span>
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      )}
                    </MenuNavLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenu>
            </HeaderNavItemV>

            <HeaderFocusItems flex='initial' alignSelf='stretch'>
              <IconMenu
                role='menu'
                className='navigationMenu'
                showMobileMenu={isMobileMenuOpen}
              >
                <Button
                  background='#D548EC'
                  fontFamily='N27'
                  fontWeight='500'
                  fontSize='18px'
                  flex={isMobileMenuOpen && '1'}
                  onClick={open}
                >
                  Get Notified
                </Button>
              </IconMenu>
            </HeaderFocusItems>
          </NavList>
        </HeaderContent>
      </Section>

      {/* modal */}
      <ChainElevateModal isOpen={isOpen} onClose={close} />
    </StyledHeader>
  );
};

export default ChainHeader;

const HeaderContent = styled(Content)`
  height: ${(props) => (!props.showMobileMenu ? '64px' : 'auto')};
  align-self: ${(props) => (props.showMobileMenu ? 'flex-start' : 'stretch')};
  overflow: visible;
`;

const NavList = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (!props.showMobileMenu ? '64px' : '100%')};
  max-height: ${(props) => (!props.showMobileMenu ? '64px' : '100%')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-: center;
  flex: 1;
  padding: 0px 23px;
  margin: 0px auto 0 auto;

  @media ${device.laptopM} {
    flex-direction: column;
    width: 100%;
    padding: 14px 0px 14px 0px;
    margin: 0px auto;
    box-sizing: border-box;
    align-items: center;
    border-radius: ${(props) => (props.showMobileMenu ? '32px' : '55px')};
    min-height: ${(props) => (props.showMobileMenu ? '100vh' : '100%')};
    justify-content: ${(props) =>
      props.isMobileMenuOpen ? 'flex-start' : 'space-between'};
  }
`;

const StyledHeader = styled.header`
  font-family: N27, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${(props) => (props.showMobileMenu ? '100vh' : 'auto')};
  padding-top: 12px;
  padding-bottom: 12px;

  background: rgba(232, 239, 248, 0.5);
  backdrop-filter: blur(calc(24px / 2));
  z-index: 99999 !important;
  transition: top 0.3s ease-in-out;

  &.hide {
    top: -100%;
  }

  &.light {
    & span {
      color: #121315;
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

  @media ${device.laptopM} {
    flex-direction: column;
    top: 0px;
    padding-top: 0px;
    padding-bottom: 0px;
    background-color: ${(props) =>
      props.showMobileMenu ? '#000' : 'transparent'};

    &.hide {
      top: -100%;
    }
  }
`;

const MenuTop = styled(ItemV)`
  display: flex;

  & svg {
    cursor: pointer;
  }

  @media ${device.laptopM} {
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
`;

const MobileMenuToggleIcon = styled.span`
  display: none;

  @media ${device.laptopM} {
    display: flex;
    cursor: pointer;
  }
`;

const MenuNavLink = styled.div`
  position: relative;
  cursor: pointer;

  @media ${device.laptopM} {
    align-self: flex-start;
    justify-content: flex-start;
  }
`;

const HeaderNavItemV = styled(ItemV)`
  border-radius: 24px;
  background: #000;
  width: fit-content;
  flex: 0;
  padding: 8px;

  @media ${device.laptopM} {
    margin: ${(props) => (props.showMobileMenu ? '24px 0px 0px 0px' : '0')};
    width: ${(props) => (props.showMobileMenu ? '100%' : 'fit-content')};
    padding: ${(props) => (props.showMobileMenu ? '0px' : '8px')};
    flex: 0;
    background: transparent;
  }
`;

const HeaderFocusItems = styled(ItemH)`
  align-self: stretch;
  flex-wrap: nowrap;

  @media ${device.laptopM} {
    flex-direction: column;
    align-self: flex-start;
    flex-wrap: wrap;
    margin: auto 0 0 0;
    width: 100%;
  }
`;

const NavigationMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
  display: flex;
  gap: 8px;

  z-index: 999;

  .active {
    background: #fff !important;
  }

  @media ${device.laptopM} {
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
  z-index: 9;

  @media ${device.laptopM} {
    flex-direction: row;
    flex: 1;
    margin: 0 0 auto 0;
    align-self: stretch;
    display: ${(props) => (props.showMobileMenu ? 'flex' : 'none')};
  }
`;

/**
 * HOVER happens on this element
 */
const NavigationMenuItem = styled.li`
  position: relative;
  font-family: N27, sans-serif;
  border-radius: 16px;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.showMobileMenu ? 'flex-start' : 'center')};
  transition: background 0.3s;

  & span {
    color: ${(props) => (props.isActive ? '#000' : '#FFF')};
    font-family: N27;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    text-transform: uppercase;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
  }

  .navLink {
    flex: 1;
    margin: auto 0;
    display: flex;
    align-items: center;
    width: 100%;
    padding: ${(props) => (props.showMobileMenu ? '16px' : '0px 24px')};
  }

  &:hover {
    cursor: pointer;

    & span {
      transition-duration: 0.7s;
    }

    & .chevronIcon {
      transform: rotate(180deg);
    }

    // & .menuContent {
    //   display: block;
    // }
  }

  @media ${device.laptopM} {
    & span {
      font-size: 16px;
    }

    .navLink {
      display: block;
    }
  }
`;

const NavigationMenuHeader = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0;
  gap: 8px;

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
  }

  & span {
    color: ${(props) => (props.isActive ? '#000' : '#FFF')};
  }

  @media ${device.laptopM} {
    justify-content: space-between;

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) =>
        props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }
`;

const DropdownMenu = styled.ul`
  list-style: none;

  display: ${(props) => (props.expanded ? 'flex' : 'none !important')};
  position: absolute;
  top: 90%;
  left: 0;
  flex-direction: column;
  z-index: 9999999999 !important;
  padding: 12px;
  border-radius: 24px;
  background: rgba(11, 11, 13, 0.9);
  min-width: 300px;
  gap: 16px;

  @media ${device.laptopM} {
    width: 100%;
    min-width: 100%;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 0;
    padding: 12px;
    max-height: initial;
    min-height: initial;
    border-radius: 12px;

    position: relative;

    display: ${(props) => (props.expanded ? 'flex' : 'none !important')};
    & a {
      justify-content: flex-start;
    }
  }

  @media ${device.tablet} {
    max-height: initial;
    min-height: initial;
  }
`;

const DropdownItem = styled.li`
  padding: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 12px;

  h3 {
    color: #fff;
    font-family: N27;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }

  span {
    text-transform: capitalize;
    color: #bbbcd0;
    font-family: N27;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  &:hover {
    border: 1px solid #fff;
    background: #f4f4f4;
    background: rgba(11, 11, 13, 0.9);
    backdrop-filter: blur(calc(16px / 2));

    h3 {
      color: #d98aec;
    }
  }
`;
