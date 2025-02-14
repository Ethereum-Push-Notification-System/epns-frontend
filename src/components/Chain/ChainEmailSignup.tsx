/* eslint-disable no-useless-escape */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';
import styled from 'styled-components';

// Internal Configs
import { device } from '@site/src/config/globals';
import useEmailValidationAndSend from '@site/src/hooks/useEmailValidationAndSend';

// Internal Components
import { Span } from '@site/src/css/SharedStyling';

export type signupType = {
  showButton?: boolean;
  showArrow?: boolean;
  background?: string;
  borderColor?: string;
  inputWidth?: string;
  textColor?: string;
};

export const ChainEmailSignup = (props: signupType) => {
  const [isLoading, apiResponse, emailError, onEmailSubmit] =
    useEmailValidationAndSend(true);

  return (
    <Box>
      <Wrapper
        background={props.background}
        border={props.borderColor}
        onSubmit={onEmailSubmit}
      >
        <SignupInputField
          type='text'
          name='email'
          placeholder='Email Address'
          background={props.background}
          inputWidth={props.inputWidth}
          textColor={props.textColor}
          tabIndex={0}
          required
        />
        {props.showButton && (
          <>
            <Button tabIndex={0} type='submit'>
              {!isLoading && <AiOutlineArrowRight size={32} color='#e492ff' />}
              {isLoading && (
                <BiLoaderAlt size={32} className='loader' color='#FFF' />
              )}
            </Button>
            {isLoading ? <MaskInput /> : null}
          </>
        )}
      </Wrapper>

      {apiResponse && (
        <ResponseSpan className='msg' color='#000'>
          {apiResponse}
        </ResponseSpan>
      )}
      {!apiResponse && emailError && (
        <ResponseSpan className='msg' color='#000'>
          {emailError}
        </ResponseSpan>
      )}
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${device.tablet} {
    & .msg {
      font-size: 18px;
      margin: 10px auto 0px auto;
    }
  }
`;

const Wrapper = styled.form`
  position: relative;
  display: flex;
  flex: 1;
  gap: 12px;
  align-items: center;
  padding: 5px 0px;
  justify-content: space-between;

  @media ${device.tablet} {
    gap: 12px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  background: #000;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 72px;
  white-space: nowrap;
  border: 0;

  @media ${device.tablet} {
    min-width: auto;
    font-size: 12px;
  }

  @media ${device.mobileL} {
    height: 48px;
    width: 48px;
  }

  & svg {
    height: 1.5rem;
    width: 1.5rem;
  }

  @keyframes loadingAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  & .loader {
    animation-name: loadingAnimation;
    animation-duration: 1500ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;

const SignupInputField = styled.input`
  all: unset;
  box-sizing: border-box;
  color: #a3a7ac;
  font-family: N27;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.48px;
  background: ${(props) => props.background || '#ffffff'};
  width: ${(props) => props.inputWidth || '100%'};
  padding: 24px;
  flex: 1;
  border-radius: 16px;

  @media ${device.laptop} {
    min-width: auto;
  }

  @media ${device.mobileL} {
    font-size: 16px;
    padding: 16px 24px;
  }

  &:placeholder {
    color: #a3a7ac;
    opacity: 1;
  }
`;

const MaskInput = styled.div`
  position: absolute;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 21px;
  opacity: 0.4;
  z-index: 10;
`;

const ResponseSpan = styled(Span)`
  margin: 0;
  padding: 0;
  font-family: FK Grotesk Neue;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  margin-top: 12px;
`;
