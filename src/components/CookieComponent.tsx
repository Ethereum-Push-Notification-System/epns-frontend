// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable */

import React, { useState } from 'react';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import {
  A,
  Button,
  H2,
  Image,
  ItemH,
  ItemV,
  Section,
} from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';
import GLOBALS, { device } from '@site/src/config/globals';

const CookieComponent = () => {
  const [cookies, setCookie] = useCookies(['pushCookies']);
  const [showModal, setShowModal] = useState(
    () => cookies.pushCookies === undefined
  );

  const handleAccept = () => {
    setCookie('pushCookies', true, { path: '/' });
    setShowModal(false);
  };

  const handleReject = () => {
    setCookie('pushCookies', false, {
      path: '/',
    });
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <CookieContainer>
          <H2
            color='#000'
            fontWeight='400'
            letterSpacing='normal'
            fontSize={'14px'}
            fontFamily='FK Grotesk Neue'
            lineHeight='130%'
            textAlign='left'
          >
            We use cookies to personalize your experience. Learn more in our{' '}
            <a
              href='https://push.org/privacy'
              target='_blank'
              style={{ textDecoration: 'underline' }}
            >
              Privacy Policy
            </a>
            .
          </H2>

          <ButtonContainer>
            <AcceptButton onClick={handleAccept}>Accept</AcceptButton>
            <RejectButton onClick={handleReject}>Opt-out</RejectButton>
          </ButtonContainer>
        </CookieContainer>
      )}
    </>
  );
};

const CookieContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 344px;
  z-index: 999999999999;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(12px);

  h2 {

  a {
    color: black;

    &:hover {
      text-decoration: underline;
    }
  }
}

  @media ${device.mobileL} {
      width: calc(100% - 32px);
      left: 16px
      bottom: 16px;
      right: 16px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 32px;
`;

const AcceptButton = styled(Button)`
  color: #ffffff;
  border: none;
  height: 48px;
  width: 104px;
  padding: 0px;
  border-radius: 4px;
  cursor: pointer;
  border-radius: 8px;
  background: #d548ec;
  font-size: 14px;
  font-weight: 500;
  font-family: FK Grotesk Neue;
`;

const RejectButton = styled(Button)`
  background-color: transparent;
  color: #000;
  border: none;
  height: 48px;
  width: 104px;
  padding: 0px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: FK Grotesk Neue;

  &:hover {
    background-color: transparent !important;
  }
`;
export default CookieComponent;
