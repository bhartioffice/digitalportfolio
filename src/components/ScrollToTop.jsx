// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    // 1. Reset standard browser scroll
    window.scrollTo(0, 0);

    // 2. Reset Lenis Smooth Scroll (Critical Step)
    if (lenis) {
      // 'immediate: true' makes it jump instantly instead of scrolling slowly
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]); // Runs every time you change pages

  return null;
};

export default ScrollToTop;
