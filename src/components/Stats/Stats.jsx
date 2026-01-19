// src/components/Stats/Stats.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import "./Stats.css";

const Stats = () => {
  const statsData = [
    { icon: "fa-file-lines", number: 100, label: "Publications", suffix: "+" },
    { icon: "fa-user-graduate", number: 13, label: "PhDs Awarded" },
    {
      icon: "fa-chalkboard-user",
      number: 12200,
      label: "NPTEL Learners",
      suffix: "+",
    },
    {
      icon: "fa-hand-holding-dollar",
      number: 1,
      label: "Research Grants",
      prefix: "~ ₹ ",
      suffix: " Crore ",
    },
  ];

  // Trigger animation only when visible
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="metrics-section" ref={ref}>
      <div className="container metrics-grid">
        {statsData.map((item, index) => (
          <div key={index} className="metric-card fade-in-item is-visible">
            <div className="metric-icon">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div className="metric-data">
              <h3>
                {inView ? (
                  <CountUp
                    start={0}
                    end={item.number}
                    duration={2.5}
                    separator=","
                    prefix={item.prefix || ""}
                    suffix={item.suffix || ""}
                  />
                ) : (
                  <span>0</span>
                )}
              </h3>
              <p>{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
