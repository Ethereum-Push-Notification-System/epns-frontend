// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// React + Web3 Essentials
import React from 'react';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

// Internal Component
import ChainKnowledgeBase from '../../components/Chain/ChainKnowledgeBase/ChainKnowledgeBase';

// Internal Configs
import { PageMeta } from '@site/src/config/pageMeta';

function PushChainKnowledgeBase() {
  return (
    <Layout
      title={PageMeta.KNOWLEDGE.pageTitle}
      description={PageMeta.KNOWLEDGE.pageDescription}
      showNavbar={'chain'}
    >
      <Head>
        {/* <!-- Update Facebook Meta Tags --> */}
        <meta property='og:url' content='https://push.org/chain/knowledge' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='Push Chain | Knowledge Base' />
        <meta
          name='og:description'
          content='Discover everything for tutorials to code base to what makes Push Chain tick at the knowledge hub.'
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
        <meta name='twitter:title' content='Push Chain | Knowledge Base' />
        <meta
          name='twitter:description'
          content='Discover everything for tutorials to code base to what makes Push Chain tick at the knowledge hub.'
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

      <ChainKnowledgeBase />
    </Layout>
  );
}

export default PushChainKnowledgeBase;
