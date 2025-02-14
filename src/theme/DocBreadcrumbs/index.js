/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import { useLocation } from '@docusaurus/router';
import { ThemeClassNames } from '@docusaurus/theme-common';
import {
  useHomePageRoute,
  useSidebarBreadcrumbs,
} from '@docusaurus/theme-common/internal';
import HomeBreadcrumbItem from '@theme/DocBreadcrumbs/Items/Home';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.css';
// TODO move to design system folder
function BreadcrumbsItemLink({ children, href, isLast }) {
  const className = 'breadcrumbs__link';
  if (isLast) {
    return (
      <span className={className} itemProp='name'>
        {children}
      </span>
    );
  }
  return href ? (
    <Link className={className} href={href} itemProp='item'>
      <span itemProp='name'>{children}</span>
    </Link>
  ) : (
    // TODO Google search console doesn't like breadcrumb items without href.
    // The schema doesn't seem to require `id` for each `item`, although Google
    // insist to infer one, even if it's invalid. Removing `itemProp="item
    // name"` for now, since I don't know how to properly fix it.
    // See https://github.com/facebook/docusaurus/issues/7241
    <span className={className}>{children}</span>
  );
}
// TODO move to design system folder
function BreadcrumbsItem({ children, active, index, addMicrodata }) {
  return (
    <li
      {...(addMicrodata && {
        itemScope: true,
        itemProp: 'itemListElement',
        itemType: 'https://schema.org/ListItem',
      })}
      className={clsx('breadcrumbs__item', {
        'breadcrumbs__item--active': active,
      })}
    >
      {children}
      <meta itemProp='position' content={String(index + 1)} />
    </li>
  );
}
export default function DocBreadcrumbs() {
  let breadcrumbs = useSidebarBreadcrumbs();

  // override breadcrumps to add product as well
  let locationpath = useLocation()?.pathname;
  // remove /docs/ from path
  locationpath = locationpath.replace('/docs/', '');
  // split path into array
  const pathArray = locationpath.split('/');
  // take first item of array
  const product = pathArray[0];

  // add product to breadcrumbs if it's notifications or chat
  if (product.length > 0) {
    breadcrumbs = [
      {
        label:
          product.toUpperCase() === 'DAO'
            ? product.toUpperCase()
            : product.charAt(0).toUpperCase() + product.slice(1),
        href: `/docs/${product}`,
      },
      ...(breadcrumbs || []),
    ];
  }

  const homePageRoute = useHomePageRoute();
  if (!breadcrumbs || breadcrumbs == null) {
    return null;
  }
  return (
    <nav
      className={clsx(
        ThemeClassNames.docs.docBreadcrumbs,
        styles.breadcrumbsContainer
      )}
      aria-label={translate({
        id: 'theme.docs.breadcrumbs.navAriaLabel',
        message: 'Breadcrumbs',
        description: 'The ARIA label for the breadcrumbs',
      })}
    >
      <ul
        className='breadcrumbs'
        itemScope
        itemType='https://schema.org/BreadcrumbList'
      >
        {homePageRoute && <HomeBreadcrumbItem />}
        {breadcrumbs?.map((item, idx) => {
          const isLast = idx === breadcrumbs.length - 1;
          return (
            <BreadcrumbsItem
              key={idx}
              active={isLast}
              index={idx}
              addMicrodata={!!item.href}
            >
              <BreadcrumbsItemLink href={item.href} isLast={isLast}>
                {item.label}
              </BreadcrumbsItemLink>
            </BreadcrumbsItem>
          );
        })}
      </ul>
    </nav>
  );
}
