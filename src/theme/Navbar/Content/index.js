/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// React + Web3 Essentials
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { ErrorCauseBoundary, useThemeConfig } from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import { device } from '@site/src/config/globals';
import {
  H2,
  H3,
  Image,
  ItemH,
  LinkTo,
  Span,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarSearch from '@theme/Navbar/Search';
import NavbarItem from '@theme/NavbarItem';
import SearchBar from '@theme/SearchBar';
import { useTranslation } from 'react-i18next';
import { BsChevronDown } from 'react-icons/bs';
import styled from 'styled-components';
import { HeaderList } from '../../../config/HeaderList';
import styles from './styles.module.css';
import { useSiteBaseUrl } from '@site/src/utils/useSiteBaseUrl';

const defaultMobileMenuState = {
  0: false,
  1: false,
  2: false,
  3: false,
  // add next [index]: false for new main Nav menu item
};

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}

function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <ErrorCauseBoundary
          key={i}
          onError={(error) =>
            new Error(
              `A theme navbar item failed to render.
Please double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:
${JSON.stringify(item, null, 2)}`,
              { cause: error }
            )
          }
        >
          <NavbarItem {...item} />
        </ErrorCauseBoundary>
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className='navbar__inner'>
      <div className='navbar__items'>{left}</div>
      <div className='navbar__items navbar__items--right'>{right}</div>
    </div>
  );
}
export default function NavbarContent() {
  // for navigation
  const history = useHistory();
  const location = useLocation();
  const pathname = location?.pathname;
  const baseURL = useSiteBaseUrl() || '';

  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();

  // eslint has to disabled for this line cause the leftItems is required
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  const isLaptopM = useMediaQuery(device.laptopM);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileMenuMap, setMobileMenuMap] = useState(defaultMobileMenuState);

  // Internationalization
  const { t } = useTranslation();

  const showMobileMenu = isLaptopM && isMobileMenuOpen;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((lastOpen) => !lastOpen);
  };

  const onMobileHeaderMenuClick = (e, menuIndex) => {
    e.preventDefault();

    // if (isLaptopM) {
    setMobileMenuMap((oldMap) => {
      return {
        ...defaultMobileMenuState,
        [menuIndex]: !oldMap[menuIndex],
      };
    });
  };

  const HeaderSpace = ({ item, index }) => {
    const openLink = (e, href, id, target) => {
      e.stopPropagation();

      if (href) {
        if (target && target !== '_blank') {
          if (target === '_self') {
            // check if url is external
            if (href.includes('http')) {
              window.location.href = href;
            } else {
              history.push(baseURL + href);
            }
          }
        } else {
          // check if url is internal and if so append the base url
          if (href.includes('http')) {
            window.open(href, target);
          } else {
            window.open(`${window.location.origin}${baseURL + href}`, target);
          }
        }
      } else if (id) {
        if (showMobileMenu) toggleMobileMenu();

        document.getElementById(id).scrollIntoView({
          behavior: 'smooth',
        });
      } else return;
    };

    return (
      <HeaderItem onClick={(e) => openLink(e, item.href, item.id, item.target)}>
        {item.srcrefoff && (
          <HeaderImage
            key={index}
            src={
              require(
                `@site/static/assets/website/header/${item.srcrefoff}.png`
              ).default
            }
            srcSet={`${require(`@site/static/assets/website/header/${item.srcrefoff}@2x.png`).default} 2x, ${require(`@site/static/assets/website/header/${item.srcrefoff}@3x.png`).default} 3x`}
            alt={`${item?.title}`}
            height={24}
            width={24}
          />
        )}

        <ItemH flexDirection='column' alignItems='flex-start' gap='4px'>
          <H2
            fontSize='16px'
            fontFamily='FK Grotesk Neue'
            color='var(--ifm-color-primary-text)'
            lineHeight='130%'
            letterSpacing='normal'
            fontWeight='500'
          >
            {t(item.title)}
          </H2>

          <H3
            fontSize='14px'
            fontFamily='FK Grotesk Neue'
            color='var(--ifm-navbar-dropdown-subtext)'
            lineHeight='130%'
            letterSpacing='normal'
            fontWeight='400'
          >
            {t(item.subtitle)}
          </H3>
        </ItemH>
      </HeaderItem>
    );
  };

  const textIds = ['text0', 'text1', 'text2', 'text3', 'text4'];

  const handleMouseEnter = (e, activeId) => {
    textIds.forEach((id) => {
      if (id !== activeId) {
        const element = document.getElementById(id);
        if (element) {
          element.style.color = '#6C6C6C';
          element.style.transitionDuration = '1s';
        }
      }
    });
  };

  const handleMouseLeave = () => {
    textIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.style.color = '#fff';
        element.style.transitionDuration = '1s';
      }
    });
  };

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />

          {/* Change Header from docs to blog if required */}
          {!isLaptopM &&
            (pathname?.startsWith(baseURL + '/docs') ? (
              <NavItem to={baseURL + '/docs'} aria-label='Push Docs'>
                Docs
              </NavItem>
            ) : (
              <NavItem to={baseURL + '/blog'} aria-label='Push Blog'>
                Blog
              </NavItem>
            ))}

          {!isLaptopM && pathname?.startsWith(baseURL + '/blog') && (
            <NavigationMenuItem>
              <NavigationMenuHeader
                onClick={(e) => onMobileHeaderMenuClick(e, 0)}
                expanded={mobileMenuMap[0]}
                onMouseEnter={(e) => handleMouseEnter(e, 'text0')}
                onMouseLeave={(e) => handleMouseLeave(e)}
                id='text0'
              >
                <Span
                  fontSize='18px'
                  fontWeight='500'
                  letterSpacing='-0.03em'
                  lineHeight='142%'
                  padding='16px'
                  color='inherit'
                >
                  Explore
                </Span>
                <BsChevronDown size={12} className='chevronIcon' />
              </NavigationMenuHeader>

              <NavigationMenuContent
                className='menuContent'
                expanded={mobileMenuMap[0]}
              >
                {HeaderList.docshub.map((item, index) => (
                  <HeaderSpace item={item} index={index} />
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}

const NavigationMenuItem = styled.div`
  position: relative;
  // Styles for the flags
  .flag-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  & span {
    font-family: 'FK Grotesk Neue';

    padding: 4px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: normal;
    // color: #6c6c6c;
  }

  &:hover {
    & span {
      // color: #fff;
    }

    & .chevronIcon {
      transform: rotate(180deg);
      // color: #fff;
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
  margin: 0px 12px;
  padding: 12px 0px;

  & span {
    color: var(--ifm-navbar-text-color);
    padding: 0px 4px 0px 12px;
    border-left: 1px solid var(--ifm-color-primary-text);

    &:hover {
      color: var(--ifm-navbar-text-color);
    }
  }

  &:hover {
    cursor: pointer;
  }

  & .chevronIcon {
    transition-duration: 0.4s;
    transition-property: transform;
    color: var(--ifm-navbar-text-color);
  }

  @media ${device.laptopM} {
    justify-content: space-between;
    margin: 24px 0 0px 0;

    & span {
      padding: 0px;
    }

    & .chevronIcon {
      width: 16px;
      height: 16px;
      transform: ${(props) =>
        props.expanded ? 'rotate(180deg)' : 'none  !important'};
    }
  }
`;

const NavigationMenuContent = styled.ul`
  list-style: none;

  font-family: 'Strawford', 'Manrope', sans-serif;
  display: none;
  position: absolute;

  // logic - this should touch the parent li for enough hover surface area.
  top: 44px;
  left: 100%;
  transform: translateX(-20%);
  z-index: 188;
  padding: 10px 14px 24px 14px;
  border-radius: 24px;
  border: var(--ifm-docs-navbar-border);
  background: var(--ifm-navbar-dropdown-bg);

  @media ${device.laptopM} {
    width: 100%;
    position: relative;
    top: 0px;
    left: 0;
    transform: none;
    display: flex;
    flex-direction: column;
    margin: 8px 0 0 0;
    padding: 0px 12px 6px 12px;
    max-height: initial;
    min-height: initial;

    position: relative;
    clip-path: inset(0 round 24px);

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

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  gap: 6px;
  margin: 14px 0 0 0;
  cursor: pointer;

  @media (min-width: 1025px) {
    min-width: 450px;
  }

  & ${Image} {
    filter: var(--ifm-navbar-dropdown-image);
  }

  &:hover {
    background: var(--ifm-navbar-dropdown-hover);
    border-radius: 16px;

    h2 {
      color: #d98aec;
    }
    & ${Image} {
      filter: brightness(0) saturate(100%) invert(83%) sepia(53%)
        saturate(5899%) hue-rotate(225deg) brightness(107%) contrast(85%);
    }
  }

  @media ${device.laptopM} {
    max-width: 100%;
    margin: 6px 0 0 0;
  }
`;

const HeaderImage = styled(Image)`
  margin: 10px;

  @media ${device.laptopM} {
    margin: 10px 10px 10px 0;
  }
`;

const NavItem = styled(LinkTo)`
  color: var(--ifm-color-primary-text);

  font-family: 'FK Grotesk Neue';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: normal;

  border-radius: 8px;
  background: var(--ifm-navbar-search-bg);
  padding: 0px 12px;

  &:hover {
    color: var(--ifm-color-primary-text);
  }
`;
