// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC } from 'react';

import styled from 'styled-components';

import { device } from '../../../src/config/globals';
import useMediaQuery from '../../../src/hooks/useMediaQuery';

import { H3 } from '../../css/SharedStyling';

const ChainUseCase: FC = () => {
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.laptop);

  return (
    <ChainUseCaseWrapper>
      <StyledH3
        fontSize={isMobile ? '36px' : '52px'}
        fontWeight='500'
        fontFamily='N27'
        lineHeight='120%'
        letterSpacing='-1.05px'
        textAlign={isTablet ? 'center' : 'left'}
      >
        An app for every user on every chain
      </StyledH3>

      <GridText>
        Build true universal applications for any user on any chain. The
        possibilities are endless.
      </GridText>
    </ChainUseCaseWrapper>
  );
};

export default ChainUseCase;

const ChainUseCaseWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  gap: 222px;

  @media ${device.laptop} {
    flex-direction: column;
    align-items: center;
    gap: 48px;
    margin-top: 0px;
  }
`;

const StyledH3 = styled(H3)`
  width: 480px;
  text-align: left;

  @media ${device.laptop} {
    max-width: 500px;
    text-align: center;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;

const GridText = styled.div`
  width: 480px;
  color: #000;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media ${device.laptop} {
    max-width: 500px;
    margin-top: 48px;
    text-align: center;
  }

  @media ${device.mobileL} {
    width: 100%;
  }
`;
