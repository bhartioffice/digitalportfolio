import "./Stats.css";
import React, { useEffect, useRef, useState } from "react";

const Stats = () => {
  // Data for the stats
  const statsData = [
    { icon: "fa-file-lines", number: "100+", label: "Publications" },
    { icon: "fa-user-graduate", number: "13", label: "PhDs Awarded" },
    { icon: "fa-chalkboard-user", number: "12,200+", label: "NPTEL Learners" },
    {
      icon: "fa-hand-holding-dollar",
      number: "~ ₹ 1 Crore",
      label: "Research Grants",
    },
  ];

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="metrics-section" ref={sectionRef}>
      <div className="container metrics-grid">
        {statsData.map((item, index) => (
          <div key={index} className="metric-card fade-in-item is-visible">
            <div className="metric-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className="metric-data">
              <Counter
                targetString={item.number}
                startAnimation={hasAnimated}
              />
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper Component to handle the number animation logic
const Counter = ({ targetString, startAnimation }) => {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (!startAnimation) return;

    // Parse the string (e.g., "~ ₹ 1 Crore" -> prefix: "~ ₹ ", value: 1, suffix: " Crore")
    // Note: This regex assumes the number part is "1" or "100" or "12,200".
    // It's a simplified version of the original script logic.
    const match = targetString.match(/^([^0-9]*)([0-9,]+)(.*)$/);

    if (!match) {
      setDisplayValue(targetString); // Fallback if no number found
      return;
    }

    const prefix = match[1];
    const numericValue = parseInt(match[2].replace(/,/g, ""), 10);
    const suffix = match[3];

    let startTimestamp = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const currentVal = Math.floor(progress * numericValue);
      setDisplayValue(`${prefix}${currentVal.toLocaleString()}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [startAnimation, targetString]);

  return <h3>{displayValue}</h3>;
};

export default Stats;
