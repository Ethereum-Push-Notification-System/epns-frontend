/* eslint-disable */
// @ts-nocheck

// External Components
import React from 'react';
import styled from 'styled-components';
import { Section } from './SharedStyling';
import { FiArrowUpRight } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';

// Internal Components
import { ItemHV2, SpanV2, Atag } from './SharedStylingV2';

// Internal Configs
import { device } from '../config/globals';

const Alert = ({ hideAlert, isAlertVisible }) => {
  const alertMessage = 'Web3 Messaging with Push Chat & Group Chat is here,';
  const alertLink = 'https://app.push.org/#/chat';

  const openLink = () => {
    window.open(alertLink, '_blank');
  };

  return (
    <Section>
      {isAlertVisible && (
        <AlertContainer>
          <AlertText onClick={openLink}>
            {alertMessage}
            <KnowMoreLink
              href={alertLink}
              target="_blank"
            >
              Know More
            </KnowMoreLink>
            <FiArrowUpRight className="icon" />
          </AlertText>

          <CancelIcon>
            <AiOutlineClose
              size="1.25rem"
              color="#7f7b80"
              className="icon"
              onClick={hideAlert}
            />
          </CancelIcon>
        </AlertContainer>
      )}
    </Section>
  );
};

const AlertContainer = styled(ItemHV2)`
  background: linear-gradient(
    90deg,
    rgba(18, 19, 21, 0.5) -2.55%,
    rgba(42, 42, 57, 0.5) 32.62%,
    rgba(142, 49, 122, 0.5) 68.34%,
    rgba(18, 19, 21, 0.5) 102.97%
  );
  background-color: black;
  padding: 1rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media ${device.tablet} {
    padding: 0rem 0rem;
  }
`;

const AlertText = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 142%;
  letter-spacing: -0.03em;
  color: #ffffff;
  margin: auto auto;
  cursor: pointer;
  @media ${device.tablet} {
    font-size: 14px;
    width: 80%;
    padding: 10px;
  }

  .icon {
    position: relative;
    bottom: -3px;
  }
`;
const CancelIcon = styled.div`
  margin-right: 20px;
  @media ${device.tablet} {
  }

  .icon {
    cursor: pointer;
    @media ${device.tablet} {
      width: 15px;
    }
  }
`;

const KnowMoreLink = styled.a`
  padding: 0;
  background: none;
  font-size: 1.125rem;
  padding-left: 0.3rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }

  @media ${device.tablet} {
    font-size: 14px;
    padding-left: 0.5rem;
  }
`;

export default React.memo(Alert);
