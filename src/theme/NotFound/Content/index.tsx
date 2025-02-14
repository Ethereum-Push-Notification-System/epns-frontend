/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import clsx from 'clsx';
import { useLocation } from '@docusaurus/router';

import Translate from '@docusaurus/Translate';
import type { Props } from '@theme/NotFound/Content';
import Heading from '@theme/Heading';

import { useSiteBaseUrl } from '@site/src/utils/useSiteBaseUrl';

import { Content, ItemH, ItemV, Section } from '../../../css/SharedStyling';
import PushLogo from '@site/static/assets/website/brb/pushIcon.svg';
import ChainLogoDark from '@site/static/assets/website/chain/ChainLogoDark.svg';
import ChainFooter from '@site/src/components/Chain/ChainFooter';

export default function NotFoundContent({ className }: Props): ReactElement {
  const location = useLocation();
  const baseURL = useSiteBaseUrl();
  // Normalize the pathname by removing the "push-website/pr-preview/pr-XXX" prefix
  const normalizedPathname = location?.pathname.startsWith('/push-website')
    ? location?.pathname.replace(/^\/push-website\/pr-preview\/pr-\d+/, '')
    : location.pathname;

  const oldDocsUrls = [
    '/docs/chat',
    '/docs/notifications',
    '/docs/dao',
    '/docs/hackers',
    '/docs/rewards',
    '/docs/roadmap',
    '/docs/tokenomics',
    '/docs/video',
  ];
  // Determine if the pathname starts with any of the oldDocsUrls
  const isOldDocsPage = oldDocsUrls.some((url) =>
    location?.pathname.startsWith(baseURL + url)
  );

  // Determine if the pathname starts with '/docs'
  const isDocsOrBlogsPage =
    location?.pathname.startsWith(baseURL + '/docs') ||
    location?.pathname.startsWith(baseURL + '/blog');

  // Redirect logic for old docs pages
  useEffect(() => {
    if (isOldDocsPage) {
      const externalUrl = `https://comms.push.org${normalizedPathname}`;
      window.location.href = externalUrl; // Redirect to external site
    }
  }, [isOldDocsPage, location.pathname]);

  return (
    <>
      {isOldDocsPage ? (
        <Container>
          <PushLogoBlackContainer className='headerlogo' flex='initial'>
            <PushLogo style={{ margin: '0px 9px 0px 4px' }} />
            <ChainLogoDark />
          </PushLogoBlackContainer>
          <Message>Redirecting...</Message>
        </Container>
      ) : (
        <PageContainer isDocsOrBlogsPage={isDocsOrBlogsPage!}>
          <Section>
            <Content>
              <main className={clsx('container margin-vert--xl', className)}>
                <div className='row'>
                  <div className='col col--6 col--offset-3'>
                    <Heading as='h1' className='hero__title'>
                      <Translate
                        id='theme.NotFound.title'
                        description='The title of the 404 page'
                      >
                        Page Not Found
                      </Translate>
                    </Heading>
                    <p>
                      <Translate
                        id='theme.NotFound.p1'
                        description='The first paragraph of the 404 page'
                      >
                        We could not find what you were looking for.
                      </Translate>
                    </p>
                    <p>
                      <Translate
                        id='theme.NotFound.p2'
                        description='The 2nd paragraph of the 404 page'
                      >
                        Please contact the owner of the site that linked you to
                        the original URL and let them know their link is broken.
                      </Translate>
                    </p>
                  </div>
                </div>
              </main>
            </Content>
          </Section>

          {isDocsOrBlogsPage && (
            <ItemH background='#e8eff8'>
              <ChainFooter showPattern={false} />
            </ItemH>
          )}
        </PageContainer>
      )}
    </>
  );
}

const PageContainer = styled.div<{ isDocsPage?: boolean }>`
  display: flex;
  flex-direction: column;
  ${({ isDocsOrBlogsPage }) => !isDocsOrBlogsPage && 'background: #e8eff8'};
  ${({ isDocsOrBlogsPage }) => isDocsOrBlogsPage && 'min-height: 100vh;'};
  ${({ isDocsOrBlogsPage }) =>
    isDocsOrBlogsPage
      ? 'color: var(--ifm-color-primary-text) !important'
      : 'color: #000 !important'};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: white;
  text-align: center;
`;

const PushLogoBlackContainer = styled(ItemV)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`;

const Message = styled.p`
  font-size: 18px;
  margin-top: 8px;
`;
