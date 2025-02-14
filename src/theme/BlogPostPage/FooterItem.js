import React from 'react';
import styled from 'styled-components';

// Internal Components
import { Button, H2, ItemV, Span } from '@site/src/css/SharedStyling';
import { BsLinkedin, BsTwitter, BsYoutube, BsX } from 'react-icons/bs';
import { BiShareAlt } from 'react-icons/bi';
import { FaDiscord, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

import Modal from 'react-modal';

// Internal Configs
import { device } from '@site/src/config/globals';

const FooterItem = () => {
  const isMobile = useMediaQuery(device.tablet);
  const [open, setOpen] = React.useState(false);

  const openModal = () => {
    setOpen(true);
    // document.body.style.overflow = "hidden";
  };

  function afterOpenModal() {
    document.body.style.overflow = 'hidden';
    // references are now sync'd and can be accessed.
  }

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrollin
  };

  const customStyles = {
    overlay: {
      background: 'rgba(0, 0, 0, 0.60)',
      backdropFilter: 'blur(10px)',
    },
    content: {
      height: '230px',
      width: '348px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '16px',
      border: 'none',
      background: 'var(--ifm-color-primary-inverse)',
    },
  };

  const OpenURL = (link) => {
    window.open(link, '_blank');
  };

  const LinkModal = () => {
    const openLink = (link) => {
      window.open(link, '_blank');
    };

    return (
      <Modal
        isOpen={open}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterOpen={afterOpenModal}
      >
        <ModalItem>
          <ModalDiv>
            <ModalTopic>Share</ModalTopic>
            <BsX
              color=''
              size={28}
              onClick={closeModal}
              className='closeIcon'
            />
          </ModalDiv>

          <ModalIcons>
            <ModalFigure
              color='#1DA1F2'
              onClick={() =>
                openLink(
                  `https://twitter.com/intent/tweet?text=${window.location.href}`
                )
              }
            >
              <BsTwitter size={32} color='#fff' />
            </ModalFigure>

            <ModalFigure
              color='#0077B5'
              onClick={() =>
                openLink(
                  `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
                )
              }
            >
              <FaLinkedinIn size={32} color='#fff' />
            </ModalFigure>

            <ModalFigure
              color='#4867AA'
              onClick={() =>
                openLink(
                  `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
                )
              }
            >
              <FaFacebookF size={32} color='#fff' />
            </ModalFigure>
          </ModalIcons>

          <ModalLink>
            <ModalInput>{window.location.href}</ModalInput>
            <ModalCopy
              onClick={() =>
                navigator.clipboard.writeText(window.location.href)
              }
            >
              Copy link
            </ModalCopy>
          </ModalLink>
        </ModalItem>
      </Modal>
    );
  };

  return (
    <div>
      <ShareRow>
        <ResponsiveH2
          size={isMobile ? '16px' : '24px'}
          weight='500'
          spacing='-0.02em'
          lineHeight='110%'
          color='#00000'
        >
          Be a part of the conversation by sharing this article
        </ResponsiveH2>

        {/* <Anchor
                  // href="https://x.com/PushChain"
                  title="Developer Docs"
                  target="_blank"
                  bg="#DD44B9"
                  radius="12px"
                  padding="14px 20px"
                  size="16px"
                  weight="500"
                  spacing="-0.03em"
                  lineHeight="26px"
                  self={isMobile ? 'stretch' : 'self'}
                > */}
        <ShareButton
          title='Developer Docs'
          background='#D53A94'
          radius='12px'
          padding='14px 20px'
          size='16px'
          weight='500'
          spacing='-0.03em'
          lineHeight='26px'
          display='flex'
          flexDirection='row'
          alignItems='center'
          self={isMobile ? 'stretch' : 'self'}
          onClick={openModal}
        >
          <BiShareAlt size={23} color='#fff' style={{ marginRight: '10px' }} />
          Share
        </ShareButton>
        {/* </Anchor> */}
      </ShareRow>

      {open && <LinkModal />}

      <AboutSection>
        <AboutTitle>About Push Chain</AboutTitle>
        <AboutSpan
          fontFamily='Strawford'
          textAlign='center'
          fontSize='19px'
          fontWeight='400'
          lineHeight='32px'
        >
          Push Chain is a Proof of Stake (PoS) layer 1 blockchain network
          designed to revolutionize web3 by addressing scalability,
          interoperability, and user experience challenges. Its shared-state
          architecture empowers developers to create universal applications that
          can blend financial and non-financial use cases with ease, all while
          achieving sub-second finality.
        </AboutSpan>
      </AboutSection>

      <KPIBanner>
        <BannerItem
          onClick={() => OpenURL('https://x.com/PushChain')}
          gap='18px'
          className='kpiItem'
        >
          {/* <KPIFigure> */}
          <BsTwitter size={32} />
          {/* </KPIFigure> */}
          <KPIMetric>Twitter</KPIMetric>
        </BannerItem>

        <BannerItem
          onClick={() => OpenURL('https://discord.gg/pushprotocol')}
          gap='18px'
          className='kpiItem'
        >
          {/* <KPIFigure> */}
          <FaDiscord size={32} />
          {/* </KPIFigure> */}
          <KPIMetric>Discord</KPIMetric>
        </BannerItem>

        <BannerItem
          onClick={() => OpenURL('https://www.youtube.com/@pushprotocol')}
          gap='18px'
          className='kpiItem'
        >
          {/* <KPIFigure> */}
          <BsYoutube size={32} />
          {/* </KPIFigure> */}
          <KPIMetric>YouTube</KPIMetric>
        </BannerItem>

        <BannerItem
          onClick={() =>
            OpenURL('https://www.linkedin.com/company/push-protocol/')
          }
          gap='18px'
          className='kpiItem'
        >
          {/* <KPIFigure> */}
          <BsLinkedin size={32} />
          {/* </KPIFigure> */}
          <KPIMetric>Linkedin</KPIMetric>
        </BannerItem>
      </KPIBanner>
    </div>
  );
};

export default FooterItem;

const AboutSection = styled.div`
  margin-top: 99px;
  span {
    font-size: 18px;
    line-height: 37px;
    color: #282a2d;
    letter-spacing: -0.002em;

    @media ${device.mobileL} {
      font-size: 16px;
      line-height: 36px;
    }
  }
`;

const AboutTitle = styled.div`
  font-family: 'Strawford' !important;
  font-weight: 700;
  font-size: 28px;
  line-height: 38px;
  color: var(--ifm-color-primary-blog);
  margin-bottom: 10px;
  letter-spacing: -0.02em;
  @media ${device.mobileL} {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
  }
`;

const AboutSpan = styled(Span)`
  color: var(--ifm-color-blog-tag) !important;
`;

const KPIBanner = styled.div`
  background: var(--ifm-color-blog-footer);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px 0px;
  font-family: 'Strawford';
  font-style: normal;
  margin-top: 30px;
  margin-bottom: 100px;

  & .kpiItem {
    display: flex;
    flex-direction: row;
    align-items: center !important;
  }

  @media ${device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    width: 100%;

    row-gap: 32px;
    column-gap: 8px;
    margin-top: 30px;

    & .kpiItem {
      flex-direction: row;
      row-gap: 8px;

      // for 4 items
      flex: 0 0 48%;
      // align-items: flex-start;

      // for 3 items
      // flex: 0 0 100%;
      // align-items: center;
    }
  }
`;

const BannerItem = styled(ItemV)`
  color: var(--ifm-color-footer);
  grid-gap: 8px;
  cursor: pointer
  align-items: center !important;
  &:hover {
    color: #d53893;
  }
`;

const KPIMetric = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 110%;
  letter-spacing: -0.03em;
  @media ${device.tablet} {
    font-size: 16px;
    font-weight: 400;
  }
`;

const ResponsiveH2 = styled(H2)``;

const ShareRow = styled.div`
  margin: 50px 0 0px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.tablet} {
    flex-direction: row;
    margin-top: 52px;
    align-items: center;
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

const ShareButton = styled(Button)`
  @media ${device.mobileL} {
    width: 100%;
    margin: 20px;
  }
`;

// modal url
const ModalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;

  &.closeIcon {
    cursor: pointer;
  }
`;

const ModalTopic = styled.div`
  color: var(--ifm-color-primary-text);
  font-size: 20px;
  font-family: Strawford;
  line-height: 142%;
  letter-spacing: -0.6px;
`;

const ModalIcons = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  grid-gap: 32px;
`;

const ModalLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 28px;
  justify-content: center;
`;

const ModalCopy = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: Strawford;
  font-weight: 500;
  line-height: 142%;
  letter-spacing: -0.42px;
  border-radius: 0px 8px 8px 0px;
  background: #d53a94;
  padding: 8px 12px;
  height: 35.88px;
  cursor: pointer;
`;

const ModalInput = styled.div`
  border-radius: 8px 0px 0px 8px;
  border: var(--ifm-modal-border-input);
  background: var(--ifm-modal-input);
  color: var(--ifm-color-primary-text);
  padding: 8px 12px;
  max-width: 212px;
  min-width: 212px;
  height: 35.88px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
  @media ${device.mobileL} {
    max-width: 200px;
    min-width: 200px;
  }
  @media ${device.mobileM} {
    max-width: 150px;
    min-width: 150px;
  }
`;

const ModalFigure = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 16px;
  background: ${(props) => props.color};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const ModalItem = styled.div``;
