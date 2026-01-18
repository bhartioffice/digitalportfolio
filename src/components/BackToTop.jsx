// src/components/BackToTop.jsx
import React, { useState, useEffect } from "react";
import { useLenis } from "lenis/react";
import "./BackToTop.css"; // Ensure you have the CSS file linked

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis(); // Get the lenis instance for clicking

  // 1. VISIBILITY LOGIC (Universal)
  // We use standard window event because it works on BOTH Desktop (Lenis) and Mobile (Native)
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // 2. CLICK LOGIC (Hybrid)
  const scrollToTop = () => {
    if (lenis) {
      // If Lenis is active (Desktop), use it to avoid "fighting"
      lenis.scrollTo(0, { duration: 1.5 });
    } else {
      // Fallback for Mobile (if Lenis is inactive)
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={isVisible ? "show" : ""}
      aria-label="Back to top"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
