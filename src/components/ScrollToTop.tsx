import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef<string>('');

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;

      requestAnimationFrame(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant' as ScrollBehavior
        });
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
