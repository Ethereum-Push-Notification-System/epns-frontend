// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from '@docusaurus/router';

// External Components
import { useTranslation } from 'react-i18next';
import { BsTwitterX } from 'react-icons/bs';
import styled from 'styled-components';

// Internal Components
import {
  A,
  Content,
  Image,
  ItemH,
  ItemV,
  LinkTo,
  Section,
  Span,
} from '@site/src/css/SharedStyling';
import DiscordSVG from '@site/static/assets/website/shared/discord.svg';
import GithubSVG from '@site/static/assets/website/shared/github.svg';
import TelegramSVG from '@site/static/assets/website/shared/telegram.svg';
import { MailingSignup } from '../components/MailingSignup/MailingSignup';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Internal Configs
import { device } from '@site/src/config/globals';
import { HeaderList } from '@site/src/config/HeaderList';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useSiteBaseUrl } from '../utils/useSiteBaseUrl';

function Footer() {
  // Internationalization
  const { t } = useTranslation();
  const isMobile = useMediaQuery(device.mobileL);
  const isTablet = useMediaQuery(device.tablet);
  const baseURL = useSiteBaseUrl() || '';

  // for navigation
  const history = useHistory();
  const location = useLocation();

  const scrollToTop = () => {
    document.documentElement.scrollTo(0, 0);
  };

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
          scrollToTop();
        }
      } else {
        // check if url is internal and if so append the base url
        if (href.includes('http')) {
          window.open(href, target);
        } else {
          window.open(`${window.location.origin}${baseURL + href}`, target);
        }
        // scrollToTop();
      }
    } else if (id) {
      if (location?.pathname !== baseURL + '/' && id) {
        history.push(baseURL + '/');
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }

      if (location?.pathname === baseURL + '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }
    } else return;
  };

  return (
    <StyledFooter>
      <FooterSection id='footer'>
        <Content alignSelf='center'>
          {/* footer links */}
          <ItemH flex='1' margin='0px 0 0 0'>
            <FooterContainer>
              <FooterColumn>
                <FooterLinkItem>
                  <LinkTo
                    className='pushLogo'
                    to={useBaseUrl('/')}
                    title='Push'
                    onClick={scrollToTop}
                    justifyContent={isMobile ? 'center' : 'flex-start'}
                    padding='0px 0px'
                  >
                    <Image
                      src={
                        require(
                          `@site/static/assets/website/segments/PushLogoTextWhite.webp`
                        ).default
                      }
                      srcSet={`${require(`@site/static/assets/website/segments/PushLogoTextWhite@2x.webp`).default} 2x, ${require(`@site/static/assets/website/segments/PushLogoTextWhite@3x.webp`).default} 3x`}
                      alt={`Push Logo`}
                      width='auto'
                      height='auto'
                      loading='lazy'
                    />
                  </LinkTo>

                  <Span
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='142%'
                    margin={isMobile ? '32px auto 12px auto' : '48px 0 12px 0'}
                  >
                    {/* Get the latest Push news */}
                    {t('footer.mail-section.title')}
                  </Span>

                  <MailingSignup
                    showArrow={true}
                    background='#0000'
                    borderColor='rgba(255, 255, 255, 0.30)'
                    inputWidth='90%'
                  />
                </FooterLinkItem>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='150%'
                    margin='0 0 8px 0'
                  >
                    {t('header.products.title')}
                  </Span>

                  {HeaderList.products.map((item) => (
                    <FooterAnchorSecondary
                      as={'div'}
                      title={t(item.title)}
                      onClick={(e) =>
                        openLink(e, item.href, item.id, item.target)
                      }
                    >
                      {t(item.title)}
                    </FooterAnchorSecondary>
                  ))}
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='150%'
                    margin='0 0 8px 0'
                  >
                    {t('header.developers.title')}
                  </Span>

                  {HeaderList.developers.map((item) => (
                    <FooterAnchorSecondary
                      as={'div'}
                      title={t(item.title)}
                      onClick={(e) =>
                        openLink(e, item.href, item.id, item.target)
                      }
                    >
                      {t(item.title)}
                    </FooterAnchorSecondary>
                  ))}
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='150%'
                    margin='0 0 8px 0'
                  >
                    {t('header.community.title')}
                  </Span>

                  {HeaderList.community.map((item) => (
                    <FooterAnchorSecondary
                      as={'div'}
                      title={t(item.title)}
                      onClick={(e) =>
                        openLink(e, item.href, item.id, item.target)
                      }
                    >
                      {t(item.title)}
                    </FooterAnchorSecondary>
                  ))}
                </FooterLinks>
              </FooterColumn>

              <FooterColumn>
                <FooterLinks>
                  <Span
                    fontWeight='500'
                    fontSize='16px'
                    lineHeight='150%'
                    margin='0 0 8px 0'
                  >
                    {t('header.resources.title')}
                  </Span>

                  {HeaderList.resources.map((item) => (
                    <FooterAnchorSecondary
                      as={'div'}
                      title={t(item.title)}
                      onClick={(e) =>
                        openLink(e, item.href, item.id, item.target)
                      }
                    >
                      {t(item.title)}
                    </FooterAnchorSecondary>
                  ))}
                </FooterLinks>
              </FooterColumn>
            </FooterContainer>
          </ItemH>

          {/* Social Icon Links */}
          <SocialLinks>
            <ItemH
              justifyContent='flex-start'
              flex='1'
              gap='12px'
              className='pushLinks'
            >
              <FooterAnchorSecondary
                as={LinkTo}
                to={useBaseUrl('/privacy')}
                title={t('footer.links-section.subscribe-column.faq-link')}
                onClick={scrollToTop}
              >
                {t('footer.mail-section.privacy')}
              </FooterAnchorSecondary>

              <FooterAnchorSecondary
                as={LinkTo}
                to={useBaseUrl('/tos')}
                title={t('footer.links-section.subscribe-column.faq-link')}
                onClick={scrollToTop}
              >
                {t('footer.mail-section.tos')}
              </FooterAnchorSecondary>
            </ItemH>

            <ItemV
              flexDirection={isTablet ? 'column' : 'row'}
              gap={isMobile ? '24px' : '16px'}
              justifyContent='flex-end'
            >
              <ItemH
                // justifyContent="flex-start"
                flex='0'
                gap='16px'
                className='pushLinks'
              >
                <FooterAnchorIcon
                  href='https://x.com/PushChain'
                  title='Push Twitter'
                  target='_blank'
                >
                  <BsTwitterX size={22} />
                </FooterAnchorIcon>

                <FooterAnchorIcon
                  href='https://github.com/push-protocol/'
                  title='Push Github'
                  target='_blank'
                >
                  <GithubSVG width={24} height={24} />
                </FooterAnchorIcon>

                <FooterAnchorIcon
                  href='https://t.me/epnsproject'
                  title='Push Telegram'
                  target='_blank'
                >
                  <TelegramSVG width={24} height={24} />
                </FooterAnchorIcon>
                <FooterAnchorIcon
                  href='https://discord.gg/pushprotocol'
                  title='Push Discord'
                  target='_blank'
                >
                  <DiscordSVG width={24} height={24} />
                </FooterAnchorIcon>
              </ItemH>

              <ItemH
                // justifyContent="flex-end"
                flex='0'
                gap='12px'
                className='pushPlatformLinks'
              >
                <A
                  href='https://apps.apple.com/app/ethereum-push-service-epns/id1528614910'
                  title='Push iOS app'
                  target='_blank'
                  padding='0px 0px'
                  borderRadius='0px'
                >
                  <Image
                    src={
                      require(`@site/static/assets/website/footer/appstore.png`)
                        .default
                    }
                    srcSet={`${require(`@site/static/assets/website/footer/appstore@2x.png`).default} 2x, ${require(`@site/static/assets/website/footer/appstore@3x.png`).default} 3x`}
                    alt={`Push Logo`}
                    width='auto'
                    height='30px'
                    loading='lazy'
                  />
                </A>

                <A
                  href='https://play.google.com/store/apps/details?id=io.epns.epns'
                  title='Push Android app'
                  target='_blank'
                  padding='0px 0px'
                  borderRadius='0px'
                >
                  <Image
                    src={
                      require(
                        `@site/static/assets/website/footer/googleplay.png`
                      ).default
                    }
                    srcSet={`${require(`@site/static/assets/website/footer/googleplay@2x.png`).default} 2x, ${require(`@site/static/assets/website/footer/googleplay@3x.png`).default} 3x`}
                    alt={`Push Logo`}
                    width='auto'
                    height='30px'
                    loading='lazy'
                  />
                </A>
              </ItemH>
            </ItemV>
          </SocialLinks>
        </Content>
      </FooterSection>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  font-family: FK Grotesk Neue;
  display: flex;
  position: relative;
  background: #0d0d0f;
`;

const FooterSection = styled(Section)`
  // flex-direction: column;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  // flex-basis: 20%;
  box-sizing: border-box;
  color: #ffffff;

  flex-direction: column;

  align-items: center;

  @media ${device.tablet} {
    flex-basis: 50%;
    padding: 0px;
    row-gap: 16px;

    align-items: flex-start;

    & span {
      font-size: 16px;
    }

    // &:last-child {
    //   flex-basis: 100%;
    // }
  }

  @media ${device.mobileL} {
    &:first-child {
      flex-basis: 100%;
    }
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 154px;
  @media ${device.mobileL} {
    min-width: 100%;
    margin-top: 32px;
  }
`;

const FooterLinkItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  @media ${device.mobileL} {
    min-width: 100%;
  }
`;

const SocialLinks = styled(ItemH)`
  margin: 64px 0 0px 0;
  position: relative;

  @media ${device.tablet} {
    flex-direction: column;

    & .pushLinks {
      justify-content: center;

      & a.pushLogo {
        flex: 0 0 100%;
      }
    }

    & .pushPlatformLinks {
      justify-content: center;
    }
  }
  @media ${device.mobileL} {
    flex-direction: column-reverse;
    gap: 24px;
  }
`;

const FooterAnchorSecondary = styled(A)`
  color: #6c6c6c !important;
  padding: 0px;
  font-size: 14px;
  font-weight: 200;
  letter-spacing: normal;
  line-height: 219%;
  justify-content: flex-start;
  background: transparent;
  border-radius: 0;

  &:hover {
    color: #fff !important;
    background: transparent !important;
  }

  &:before {
    background: transparent;
  }
`;

const FooterAnchorIcon = styled(A)`
  border-radius: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  opacity: 0.5;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    transition: transform 0.25s ease-out;
  }
`;

export default Footer;
