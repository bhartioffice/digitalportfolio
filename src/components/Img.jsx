// src/components/Img.jsx
import React from "react";

const Img = ({ src, alt, ...props }) => {
  // 1. Get the base URL from Vite config (e.g., "/v1profile/" or "/")
  const baseUrl = import.meta.env.BASE_URL;

  // 2. Clean the src: remove the leading slash if it exists
  // (so we don't end up with "//v1profile//Photos")
  const cleanSrc = src.startsWith("/") ? src.slice(1) : src;

  // 3. Combine them
  const finalSrc = `${baseUrl}${cleanSrc}`;

  return (
    <img
      src={finalSrc}
      alt={alt}
      {...props} // This passes down any className, style, onClick, etc.
    />
  );
};

export default Img;
