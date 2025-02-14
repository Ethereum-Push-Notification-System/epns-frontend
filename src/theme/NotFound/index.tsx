/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// External Components
import React, { ReactElement } from 'react';

// Internal Components
import { translate } from '@docusaurus/Translate';
import { PageMetadata } from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
import { useLocation } from '@docusaurus/router';
import { useSiteBaseUrl } from '@site/src/utils/useSiteBaseUrl';

export default function Index(): ReactElement {
  const location = useLocation();
  const pathname = location?.pathname;

  const baseURL = useSiteBaseUrl();

  const title = translate({
    id: 'theme.NotFound.title',
    message: 'Page Not Found',
  });
  return (
    <>
      <PageMetadata title={title} />

      <Layout
        showNavbar={
          !pathname.startsWith(baseURL + '/docs') &&
          !pathname.startsWith(baseURL + '/blog')
            ? 'chain'
            : 'docusaurus'
        }
      >
        <NotFoundContent />
      </Layout>
    </>
  );
}
