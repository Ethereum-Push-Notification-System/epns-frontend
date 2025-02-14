/* eslint-disable */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import { useKeyboardNavigation } from '@docusaurus/theme-common/internal';
import Header from '@site/src/segments/Header';
import AnnouncementBar from '@theme/AnnouncementBar';
import ErrorPageContent from '@theme/ErrorPageContent';
import Footer from '@theme/Footer';
import LayoutProvider from '@theme/Layout/Provider';
import Navbar from '@theme/Navbar';
import SkipToContent from '@theme/SkipToContent';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
import ChainHeader from '@site/src/components/Chain/ChainHeader';
import ChainFooter from '@site/src/components/Chain/ChainFooter';
import { ItemH } from '@site/src/css/SharedStyling';

export default function Layout(props) {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
    showNavbar,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />
      <SkipToContent />
      <AnnouncementBar />
      {/* navbar for docs/blogs */}
      {(showNavbar === undefined || showNavbar === 'docusaurus') && <Navbar />}
      {/* navbar for chain pages and sub pages */}
      {showNavbar === 'chain' && <ChainHeader />}
      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
      {showNavbar === 'chain' && (
        <ItemH background='#e8eff8'>
          <ChainFooter showPattern={true} />
        </ItemH>
      )}
    </LayoutProvider>
  );
}
