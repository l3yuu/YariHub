import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

const NAV_OFFSET = -96;

const ScrollToTopOnNavigate = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const hash = location.hash.replace('#', '');
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        const timer = window.setTimeout(() => {
          lenis.scrollTo(target, { offset: NAV_OFFSET, immediate: false, duration: 1.1 });
        }, 50);
        return () => window.clearTimeout(timer);
      }
    }

    lenis.scrollTo(0, { immediate: true });
  }, [location.pathname, location.hash, lenis]);

  return null;
};

export default ScrollToTopOnNavigate;
