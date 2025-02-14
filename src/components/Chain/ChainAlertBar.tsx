// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from 'react';

// External Components
import styled from 'styled-components';
import { BsArrowRight } from 'react-icons/bs';

// Internal Components
import { Button, H2 } from '../../../src/css/SharedStyling';

// Import Assets
import StarColoredIcon from '../../../static/assets/website/illustrations/starColoredIcon.svg';

// Internal Configs
import { device } from '../../../src/config/globals';

type AlertBarProps = {
  text: string;
  url?: string;
  textColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  iconColor?: string;
  showStarIcon?: boolean;
  center?: boolean;
};

const ChainAlertBar = ({
  text,
  url,
  textColor = '#000', // Default text color
  backgroundColor = '#fff', // Default background color
  borderColor = '#f19aff', // Default border color
  iconColor = '#D548EC', // Default icon color
  showStarIcon = true, // Default: show the star icon
  center = false, // Default: no centering
}: AlertBarProps) => {
  return (
    <HeroButton
      onClick={() => {
        if (url) window.open(url, '_blank');
      }}
      textColor={textColor}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      center={center}
    >
      {showStarIcon && <StarColoredIcon />}
      <H2 fontWeight='400' fontFamily='FK Grotesk Neue'>
        {text}
      </H2>
      <BsArrowRight color={iconColor} />
    </HeroButton>
  );
};

const HeroButton = styled(Button)<{
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  center: boolean;
}>`
  font-family: FK Grotesk Neue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  gap: 8px;

  ${(props) => (props.center ? 'margin: 0 auto;' : 'margin: 0;')}

  border-radius: 16px;
  border: 1.5px solid ${(props) => props.borderColor};
  background: ${(props) => props.backgroundColor};

  @media ${device.mobileM} {
    gap: 4px;
  }

  @media ${device.mobileS} {
    gap: 2px;
    padding: 12px 6px;
    width: calc(100vw - 32px);
    box-sizing: border-box;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  h2 {
    color: ${(props) => props.textColor};
    font-family: N27;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;

    @media ${device.mobileL} {
      font-size: 12px;
    }

    @media ${device.mobileM} {
      font-size: 11px;
    }
  }
`;

export default ChainAlertBar;
