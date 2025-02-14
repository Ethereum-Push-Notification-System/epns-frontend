/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';

import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import styled from 'styled-components';
import { PageMeta } from '@site/src/config/pageMeta';

export default function BlogLayout(props) {
  const { sidebar, toc, children } = props;

  const location = useLocation();
  const pathname = location?.pathname;

  const isBlogMainPage =
    pathname.includes('/page/') || pathname == '/blog/' || pathname == '/blog';

  return (
    <Layout
      title={isBlogMainPage ? PageMeta.BLOG.pageTitle : ''}
      description={isBlogMainPage ? PageMeta.BLOG.pageDescription : ''}
    >
      {isBlogMainPage && (
        <Head>
          {/* <!-- Facebook Meta Tags --> */}
          <meta property='og:url' content='https://push.org/blog' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Push Blog' />
          <meta
            property='og:description'
            content='Discover the latest trends, insights, and tips about Push Chain in our blog! Stay informed and inspired with our expert articles, guides, and resources.'
          />
          <meta
            property='og:image'
            content={
              require('@site/static/assets/previews/blogpreview.png').default
            }
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@PushChain' />
          <meta name='twitter:title' content='Push Blog' />
          <meta
            name='twitter:description'
            content='Discover the latest trends, insights, and tips about Push Chain in our blog! Stay informed and inspired with our expert articles, guides, and resources.'
          />
          <meta
            name='twitter:image'
            // content={useBaseUrl(
            //   require("/static/assets/previews/blogpreview.png").default,
            //   { absolute: true },
            // )}
            content={
              require('@site/static/assets/previews/blogpreview.png').default
            }
          />
          <script type='application/ld+json'>
            {JSON.stringify({
              '@context': 'https://schema.org/',
              '@type': 'Organization',
              name: 'Push Chain',
              description: 'Any Chain. Any User. Any App',
              url: 'https://push.org',
              logo: '/assets/website/favicon.ico',
              sameAs: [
                'https://x.com/PushChain',
                'https://www.linkedin.com/company/push-protocol/mycompany/',
              ],
            })}
          </script>
        </Head>
      )}

      {toc ? (
        <BlogItem className='blog-section'>
          <TOC className=''></TOC>
          <main
            className='mainItem'
            itemScope
            itemType='http://schema.org/Blog'
          >
            {children}
          </main>
          <TOC className=''>{toc}</TOC>
        </BlogItem>
      ) : (
        <div className='container blog-section'>
          <BlogSidebar sidebar={sidebar} />
          <main
            className='mainItem'
            itemScope
            itemType='http://schema.org/Blog'
          >
            {children}
          </main>
        </div>
      )}
    </Layout>
  );
}

const BlogItem = styled.div`
  max-width: 100vw !important;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 85vw !important;
    min-width: 85vw !important;
    margin: 0 auto;
    & main {
      margin: 0 auto;
    }
  }
`;

const TOC = styled.div`
  display: none;

  @media (min-width: 1200px) {
    width: 250px;
    display: block;
    margin-top: 100px;
  }
`;
