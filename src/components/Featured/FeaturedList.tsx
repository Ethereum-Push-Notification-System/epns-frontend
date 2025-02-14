// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

// React + Web3 Essentials
import React, { useState } from 'react';

// External Components
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BsArrowUpRight, BsArrowRight, BsFileX } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';

// Internal Components
import {
  A,
  B,
  Button,
  Content,
  H1,
  H2,
  H3,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import MarqueeAnimation from '@site/src/components/MarqueeAnimation';

// Internal Configs
import { MediaList } from '@site/src/config/HomeMediaList';

// Setup some constants
const MARQUEE_ANIMATION_SPEED = 40;

const FeaturedList = () => {
  // Internationalization
  const { t, i18n } = useTranslation();
  const [hovered, setHovered] = useState(false);

  // handle mouse entry
  const handleMouseEnter = (e, id) => {
    setHovered(id);
  };

  // handle mouse leave
  const handleMouseLeave = (e, id) => {
    setHovered(false);

    // // reset transform
    // const container = document.getElementById(id);
    // container.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0px)`;
  };

  // handle mouse position
  const handleMouseMove = (e, id) => {
    const container = document.getElementById(id);
    const rect = container.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const x = rect.width - offsetX;
    const y = offsetY;

    // Apply glow
    const glowwys = document.querySelectorAll(`.${id} > .glowwy`);
    glowwys.forEach((glowwy) => {
      glowwy.style.top = `${y}px`;
      glowwy.style.right = `${x}px`;
    });
  };

  return (
    <FeaturedCardList className='featuredInMarquee'>
      <MarqueeAnimation speed={MARQUEE_ANIMATION_SPEED * 1.15} gradient={false}>
        {MediaList.map((item) => {
          return (
            <FeaturedCard id={item.srcref} key={item.srcref}>
              <FeaturedCardTitle>{t(item.translatedtitle)}</FeaturedCardTitle>
              <ArticleSource>
                <Image
                  width={item.title ? '64px' : 'auto'}
                  borderRadius={item.title ? '50%' : '0'}
                  src={
                    require(
                      `@site/static/assets/website/coverage/${item.srcref}.webp`
                    ).default
                  }
                  srcSet={`${require(`@site/static/assets/website/coverage/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/coverage/${item.srcref}@3x.webp`).default} 3x`}
                  alt={`${item?.alt}`}
                  loading='lazy'
                />
                <A
                  href={item.url}
                  title={t(item.urltranslatedtitle)}
                  display='flex'
                  alignItems='center'
                  target='_blank'
                  background='transparent'
                  hoverBackground='transparent'
                  hover='transparent'
                  filter='none'
                  borderRadius='16px'
                  padding='0'
                >
                  <SpanLink className='text-underline'>
                    {t(item.urltranslatedtitle)}
                  </SpanLink>
                  <FiArrowUpRight className='anchorSVG' />
                </A>
              </ArticleSource>
            </FeaturedCard>
          );
        })}
      </MarqueeAnimation>
    </FeaturedCardList>
  );
};

const FeaturedCardList = styled(ItemH)`
  margin: 64px 0 0 0;
  flex: 0;
  flex-flow: nowrap;
`;
const FeaturedCard = styled(ItemV)`
  width: 522px;
  height: 285px;
  padding: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 32px;
  border: 2px solid #fff;
  margin: 0 12px;
  overflow: hidden !important;

  & a {
    border-radius: 0px;
  }
  &:hover {
    // background: linear-gradient(251.72deg, rgb(221, 68, 185) 14.29%, rgb(139, 111, 217) 86.35%);
    background: #d548ec;

    .text-underline {
      text-decoration: text-underline;
    }
  }

  .anchorSVG {
    width: 1em;
    height: 1em;
    margin-left: 5px;
    position: relative;
    top: 0px;
  }
`;

const FeaturedCardTitle = styled(Span)`
  flex: initial;
  align-self: auto;
  color: rgb(255, 255, 255);
  background: transparent;
  font-weight: 400;
  font-size: 19px;
  text-transform: inherit;
  margin: 0px;
  padding: 0px;
  letter-spacing: normal;
  text-align: initial;
  line-height: 140%;
  position: initial;
  inset: auto;
`;

const ArticleSource = styled(ItemH)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  flex: 0;

  & img {
    height: 40px;
  }
`;

const GlowwyBorder = styled.div`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  box-shadow:
    0 0 49px 19px rgb(202, 55, 237),
    0 0 80px 40px #ca37ed,
    0 0 100px 50px rgb(202, 55, 237);
  // box-shadow:
  // 0 0 59px 29px rgb(202, 55, 237),
  // 0 0 100px 60px #CA37ED,
  // 0 0 140px 90px rgb(202, 55, 237);
  position: absolute;
  z-index: 9;
  display: none;

  &.active {
    display: block;
  }
`;

const Glowwy = styled(GlowwyBorder)`
  box-shadow: 0 0 100px 100px rgba(135, 34, 158, 0.15);
  z-index: 1;
`;

const SpanLink = styled(Span)`
  position: relative;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #fff;
  font-family: N27;
  line-height: 142%;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

export default FeaturedList;
