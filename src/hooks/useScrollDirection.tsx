// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { useEffect, useState } from 'react';

let lastScrollY = 0;
const SCROLL_DELTA = 5;

if (typeof window !== 'undefined') {
  lastScrollY = window.scrollY;
}

export function useScrollDirection(mobileMenuActive) {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    const updateScrollDirection = () => {
      let scrollY = 0;

      if (typeof window !== 'undefined') {
        scrollY = window.scrollY;
      }
      let direction = scrollY > lastScrollY ? 'scrollDown' : 'scrollUp';

      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > SCROLL_DELTA ||
          scrollY - lastScrollY < -SCROLL_DELTA)
      ) {
        // check if isMobileMenuOpen then override
        if (mobileMenuActive) {
          direction = 'scrollUp';
        }

        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    // add event listener
    window.addEventListener('scroll', updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateScrollDirection); // clean up
    };
  }, [scrollDirection, mobileMenuActive]);

  return [scrollDirection];
}
