// src/components/Typewriter.jsx
import React, { useState, useEffect } from "react";

const Typewriter = () => {
  const words = [
    "Macroeconomic Reforms",
    "International Trade",
    "Intellectual Property Rights",
    "Labour Economics",
    "Infrastructure Economics",
    "Sustainable Development",
  ];

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  // Typing Logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
      },
      reverse ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  // RETURN ONLY THE TEXT SPAN, NO WRAPPER DIVS
  return (
    <span className="typewriter">
      {words[index].substring(0, subIndex)}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;
