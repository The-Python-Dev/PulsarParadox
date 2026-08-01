/**
 * src/hooks/useScrollToTop.js
 *
 * Scrolls the window to the top whenever the route changes.
 * Fixes the React Router SPA scroll-position-persistence bug.
 *
 * Usage: Call once inside <App /> below the Router.
 */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use 'instant' to avoid jarring animated scrolls on page change.
    // If you later add Lenis smooth scroll, you can swap this for lenis.scrollTo(0, { immediate: true })
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
};