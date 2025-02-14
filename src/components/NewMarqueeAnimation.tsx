/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useRef } from 'react';

// External Components
import useMediaQuery from '@site/src/hooks/useMediaQuery';

import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

type Props = {
  direction: MarqueeDirection;
  speed?: number;
  gap?: number;
  gradientWidth?: number;
  children?: React.ReactNode;
  pause?: boolean;
  width?: string;
  height?: string;
};

function NewMarqueeAnimation(props: Props) {
  const {
    speed,
    gap = 0,
    gradient = false,
    gradientWidth = 64,
    direction,
    fixedWidth,
    pause = false,
    bg,
    width,
    height,
  } = props;

  const isMobile = useMediaQuery('(max-width: 480px)');
  const isTablet = useMediaQuery('(max-width: 1130px)');
  const splideRef = useRef(null);

  return (
    <div
      style={{
        maxHeight: height || '85px',
        minHeight: height || '85px',
        background: bg,
        margin: 'auto 0',
      }}
    >
      <Splide
        ref={splideRef}
        options={{
          width: width
            ? width
            : isMobile
              ? '90vw'
              : isTablet
                ? '95vw'
                : '1213px',
          type: 'loop',
          direction: direction,
          arrows: false,
          pagination: false,
          drag: false,
          gap: gap,
          fixedWidth: fixedWidth ? fixedWidth : 'auto',
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: speed,
          },
        }}
        extensions={{ AutoScroll }}
      >
        {props.children}
      </Splide>
    </div>
  );
}

export default NewMarqueeAnimation;
