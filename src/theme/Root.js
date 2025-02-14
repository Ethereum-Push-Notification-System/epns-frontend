// React + Web3 Essentials
import { useLocation } from '@docusaurus/router';
import React from 'react';

// External Components
import i18nInitialize from '@site/src/utils/i18n';
import styled from 'styled-components';

// Internal Components
// import Footer from '@site/src/segments/Footer';
import ServerStyle from '@site/src/theme/ServerStyle';
import CookieComponent from '../components/CookieComponent';
import { useSiteBaseUrl } from '../utils/useSiteBaseUrl';
import { Notification } from '../hooks/useRewardsNotification';

// Initialize Internalization
i18nInitialize();

export default function Root({ children }) {
  // superimposed conditions
  const superimposedConditions = [
    {
      classname: 'DocsHub PushDocs DocusaurusNavbar NavBarDark',
      pathname: '/DOCS',
      condition: 'exact',
    },
    {
      classname: 'PushDocs DocusaurusNavbar',
      pathname: '/DOCS',
      condition: 'subpaths',
    },
    {
      classname: 'BlogHub PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'exact',
    },
    {
      classname: 'PushBlog DocusaurusNavbar',
      pathname: '/BLOG',
      condition: 'subpaths',
    },
  ];

  const baseURL = useSiteBaseUrl();
  const excludePaths = ['/BRB', '/DOCS', '/BOOTCAMP', '/CHAIN', '/TEMPLATE'];
  const shouldRenderFooter = excludePaths.every((path) =>
    excludeDefaultConfigAt(path)
  );

  // return superimposed class names if conditions are met
  function returnAdditionalClasses(conditions) {
    let result = '';
    for (var i = 0; i < conditions.length; i++) {
      const item = conditions[i];
      const pathname = baseURL + item?.pathname;

      if (locationPathExists(pathname, item.condition)) {
        result = item.classname;
        break;
      }
    }

    // return result
    return result;
  }

  // enable disable default config
  function excludeDefaultConfigAt(pathname, condition) {
    const fullPathname = baseURL + pathname;
    return !locationPathExists(fullPathname, condition);
  }

  // check if location path exists
  function locationPathExists(pathname, condition) {
    let result = false;
    pathname = pathname?.toUpperCase();

    // Define location
    const location = useLocation();

    const str = location?.pathname.toUpperCase();
    const modstr =
      str != null && str.length >= pathname.length
        ? str.substring(0, pathname.length)
        : null;

    result = modstr === pathname ? true : false;
    if (condition === 'exact' || condition === 'subpaths') {
      // check if sub path exist in pathname and change result;
      if (
        str.length > pathname.length &&
        str.substring(0, pathname.length) === pathname
      ) {
        // path has more
        const remainingLength =
          str.substring(pathname.length, pathname.length + 1) === '/'
            ? str.length - pathname.length - 1
            : str.length - pathname.length;

        if (condition === 'exact') {
          result = remainingLength == 0 ? true : false;
        } else if (condition === 'subpaths') {
          result = remainingLength > 0 ? true : false;
        }
      }
    }

    return result;
  }

  return (
    <PageContainer className={returnAdditionalClasses(superimposedConditions)}>
      <ServerStyle from={children} />

      {/* Main react children */}
      <Content>{children}</Content>
      <Notification />

      {shouldRenderFooter && (
        <>
          {/* <Footer /> */}
          <CookieComponent />
        </>
      )}
    </PageContainer>
  );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

// The main content should take up all remaining space
const Content = styled.div`
  flex: 1;
`;
