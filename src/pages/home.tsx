// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Internal Component
import Chain from '../components/Chain/Chain';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushHomepage() {
  return (
    <Layout
      title={PageMeta.CHAIN.pageTitle}
      description={PageMeta.CHAIN.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org' />
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Push Chain | Any Chain. Any User. Any App'
        />
        <meta
          name='og:description'
          content='Push Chain is a shared state blockchain for shared app experience. Capable of doing tx from any chain and connecting L1s, L2s, & L3s with <1 second finality with linear scalability.'
        />
        <meta
          property='og:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainpreview.png').default,
            { absolute: true }
          )}
        />

        {/* <!-- Update Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@PushChain' />
        <meta
          name='twitter:title'
          content='Push Chain | Any Chain. Any User. Any App'
        />
        <meta
          name='twitter:description'
          content='Push Chain is a shared state blockchain for shared app experience. Capable of doing tx from any chain and connecting L1s, L2s, & L3s with <1 second finality with linear scalability.'
        />
        <meta
          name='twitter:image'
          content={useBaseUrl(
            require('/static/assets/previews/chainpreview.png').default,
            { absolute: true }
          )}
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

      <div style={{ background: '#e8eff8' }}>
        <Chain />
      </div>
    </Layout>
  );
}

export default PushHomepage;
