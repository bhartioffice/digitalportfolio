// src/components/Updates/Updates.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Updates.css";

const updatesData = [
  {
    id: 1,
    title: "Panelist: Union Budget 2025-26",
    date: "FEB 2025",
    desc: "Discussed Education, S&T, and R&D allocations in the Union Budget with IMPRI.",
    isNew: true, // Flags this item as the latest one
    link: "/awards#media-coverage", // Optional link to more info
  },
  {
    id: 2,
    title: "New Publication in 'Economies'",
    date: "JAN 2025",
    desc: 'Paper titled "The Impact of EU Trade Policies on Its Textile and Clothing Imports" published in MDPI Economies.',
    isNew: false,
    link: "/publications#articles",
  },
  {
    id: 3,
    title: "Keynote: International Trade Conference",
    date: "DEC 2024",
    desc: "Delivered keynote address on 'Digital Economy in South Asia' at NIT Trichy.",
    isNew: false,
    link: "/research#talks",
  },
];

const Updates = () => {
  return (
    <section className="updates-section fade-in-section is-visible">
      <div className="container">
        <div className="updates-header">
          <div className="header-text">
            <h2>Latest News & Updates</h2>
            <p>
              Tracking recent academic contributions and public engagements.
            </p>
          </div>

          <Link to="/awards" className="view-all-btn">
            View All <i className="fa-solid fa-arrow-right"></i>
          </Link>
        </div>

        <div className="timeline-container">
          {/* Vertical Line */}
          <div className="timeline-line"></div>

          {updatesData.map((item, index) => (
            <div
              key={item.id}
              className="timeline-item fade-in-item is-visible"
            >
              {/* Timeline Dot */}
              <div
                className={`timeline-dot ${item.isNew ? "pulse" : ""}`}
              ></div>

              {/* Date Marker (Desktop) */}
              <div className="timeline-date">{item.date}</div>

              {/* Content Card */}
              <div className="timeline-content">
                {item.isNew && <span className="badge-new">NEW</span>}
                <h4>{item.title}</h4>
                <p>{item.desc}</p>

                {item.link && (
                  <Link to={item.link} className="read-more-link">
                    Read More <i className="fa-solid fa-angle-right"></i>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Updates;
