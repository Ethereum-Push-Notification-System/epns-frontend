// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React, { useState } from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { PushChatTheme } from '@site/src/components/BRB/PushChatTheme';
import { Modal } from '@site/src/components/Modal';
import { TokenFaucet } from '@site/src/components/TokenFaucet';
import Spinner, {
  SPINNER_TYPE,
} from '@site/src/components/reusables/spinners/SpinnerUnit';
import {
  A,
  Button,
  Image,
  ItemH,
  ItemV,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import { useDisableBodyScroll } from '@site/src/hooks/useDisabledBodyScroll';

// Import Assets
import PlaygroundBg from '@site/static/assets/website/brb/PlaygroundBg.png';
import TokenGated from '@site/static/assets/website/brb/others/token-gated.svg';
import WhiteArrow from '@site/static/assets/website/brb/others/white-arrow.svg';

// Internal Configs
import BrowserOnly from '@docusaurus/BrowserOnly';
import GLOBALS, { device } from '@site/src/config/globals';

export const ChatComponent = () => {
  const [showFaucet, setShowFaucet] = useState<boolean>(false);

  useDisableBodyScroll({ open: showFaucet });
  return (
    <Container>
      <Header>
        Join the conversation
        <BrandA href='https://comms.push.org/docs' target='_blank'>
          <Image
            src={
              require(
                `@site/static/assets/website/brb/others/brand-header.webp`
              ).default
            }
            srcSet={`${require(`@site/static/assets/website/brb/others/brand-header@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/others/brand-header@3x.webp`).default} 3x`}
            alt={`Image showing BRB Chat is powered by Push Chat`}
            loading='lazy'
          />
        </BrandA>
      </Header>

      <PlayGround>
        {/* 
          b8e068e02fe12d7136bc2f24408835573f30c6fbf0b65ea26ab4c7055a2c85f1 -> test group
          4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68 -> brb group 
          */}
        <BrowserOnly
          fallback={
            <Spinner
              size={42}
              color={GLOBALS.COLORS.PRIMARY_COLOR}
              type={SPINNER_TYPE.PROCESSING}
            />
          }
        >
          {() => {
            const uiweb = require('@pushprotocol/uiweb');

            const ChatUIProvider = uiweb.ChatUIProvider;
            const ChatView = uiweb.ChatView;
            const MODAL_POSITION_TYPE = uiweb.MODAL_POSITION_TYPE;

            return (
              <>
                <ChatUIProvider theme={PushChatTheme}>
                  <ChatView
                    chatId='4ac5ab85c9c3d57adbdf2dba79357e56b2f9ef0256befe750d9f93af78d2ca68'
                    limit={10}
                    isConnected={true}
                    onVerificationFail={() => setShowFaucet(true)}
                    verificationFailModalPosition={MODAL_POSITION_TYPE.RELATIVE}
                  />
                </ChatUIProvider>
              </>
            );
          }}
        </BrowserOnly>
      </PlayGround>

      <BottomBar>
        <TokenGated />
        <Span fontSize='16px' color='#fff' fontWeight='400'>
          This is a token gated group. You can join but will need{' '}
          <span style={{ color: '#E64DE9', fontWeight: '400' }}>1 $PUSH</span>{' '}
          in your wallet to be able to send messages.
        </Span>
        <ButtonItem
          background='#E64DE9'
          padding='8px'
          margin='0px 0px 0px 16px'
          fontWeight='500'
          fontSize='16px'
          fontFamily='Glancyr, sans-serif'
          onClick={() => setShowFaucet(true)}
        >
          Get Free Push Tokens
          <WhiteArrow />
        </ButtonItem>
      </BottomBar>

      {showFaucet && (
        <Modal>
          <TokenFaucet handleFaucet={setShowFaucet} />
        </Modal>
      )}
    </Container>
  );
};

const Container = styled(ItemV)`
  width: 100%;
  height: auto;
  justify-content: flex-start;
  align-items: center;
`;

const BottomBar = styled(ItemH)`
  max-height: 33px;
  background: transparent;
  align-items: center;
  color: #fff;
  z-index: 0 !important;
  margin-top: 20px;

  & ${Span} {
    @media ${device.mobileL} {
      font-size: 14px;
    }
  }
`;

const ButtonItem = styled(Button)`
  font-size: 12px;
  font-style: normal;
  display: flex;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.03em;
  border-radius: 8px;
  &:hover:after {
    opacity: 0;
  }
  &:active:after {
    opacity: 0;
  }
  @media ${device.mobileL} {
    width: 178px;
    margin-top: 10px;
  }
`;

// const Span = styled(Span)`
//   font-size: ${(props) => props.fontSize || '8px'};
//   color: ${(props) => props.color || '#b5bcd6'};
//   font-weight: ${(props) => props.fontWeight || '300'};
//   letter-spacing: 0.01em;
//   margin: 5px 16px 0px 4px;
//   @media ${device.mobileL} {
//     width: 80%;
//     margin: 0px 0px 0px 4px;
//     line-height: 1.3;
//   }
// `;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: Glancyr, sans-serif;
  color: #fff;
  margin: 0px 0px 60px;
  position: relative;
  @media (max-width: 768px) {
    margin: 0px 0px 49px;
  }
  @media (max-width: 480px) {
    text-align: center;
  }
`;

const BrandA = styled(A)`
  background: transparent;
  position: absolute;
  right: 0px;
  bottom: -33px;
  padding: 10px 0px;

  @media ${device.mobileL} {
    padding: 10px;
    bottom: -43px;
    right: 25px;
  }
`;

const PlayGround = styled(Section)`
  font-family: 'Strawford', sans-serif;
  flex-direction: column;
  background-image: url(${PlaygroundBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 75vh;
  margin: 0 auto;
`;
