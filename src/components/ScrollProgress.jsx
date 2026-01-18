// src/components/ScrollProgress.jsx
import React, { useState } from "react";
import { useLenis } from "lenis/react";

const ScrollProgress = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useLenis(({ scroll, limit }) => {
    // scroll = current position
    // limit = total scrollable distance (scrollHeight - clientHeight)
    const progress = (scroll / limit) * 100;
    setScrollWidth(progress);
  });

  return (
    <div
      id="scroll-progress-bar"
      style={{
        width: `${scrollWidth}%`,
        // Inline styles ensure no overrides interfere
        position: "fixed",
        top: 0,
        left: 0,
        height: "4px",
        background: "var(--color-accent)",
        zIndex: 9999,
        // CRITICAL: No transition. Updates must be instant to look smooth.
        transition: "none",
      }}
    ></div>
  );
};

export default ScrollProgress;
