// src/components/GlobalReach/GlobalReach.jsx
import React from "react";
import "./GlobalReach.css";

// Data verified from CV "International Collaboration" section
const partners = [
  {
    id: 1,
    country: "Japan",
    flag: "jp",
    institution: "Kobe University & Chuo Gakuin Univ.",
    collab: "India-Japan Trade & Pharma Investment", // [cite: 34, 188]
  },
  {
    id: 2,
    country: "United Kingdom",
    flag: "gb",
    institution: "King's College London",
    collab: "Innovation for Social Impact & MedTech", // [cite: 186]
  },
  {
    id: 3,
    country: "Hungary",
    flag: "hu",
    institution: "Óbuda University",
    collab: "FDI in Agribusiness & Trade Dynamics", // [cite: 185, 270]
  },
  {
    id: 4,
    country: "Singapore",
    flag: "sg",
    institution: "National University of Singapore",
    collab: "Blue Economy & Policy Frameworks", // [cite: 184]
  },
];

const GlobalReach = () => {
  return (
    <section className="global-reach-section fade-in-section is-visible">
      {/* Background Map Decoration */}
      <div className="map-bg"></div>

      <div className="container relative-z">
        <div className="section-header center-text">
          <h2 className="title-gradient">Global Academic Footprint</h2>
          <p className="subtitle">
            Bridging borders through collaborative research in International
            Trade and Policy.
          </p>
        </div>

        <div className="reach-grid">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="reach-card fade-in-item is-visible"
            >
              <div className="flag-wrapper">
                <img
                  src={`https://flagcdn.com/w80/${partner.flag}.png`}
                  alt={partner.country}
                  className="country-flag"
                  loading="lazy"
                />
              </div>
              <div className="reach-content">
                <h3>{partner.institution}</h3>
                <span className="country-name">{partner.country}</span>
                <div className="divider-line"></div>
                <p className="collab-topic">{partner.collab}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Metric Summary based on CV data */}
        <div className="reach-stats fade-in-item is-visible">
          <div className="stat-pill">
            <i className="fa-solid fa-handshake"></i> International MOUs
          </div>
          <div className="stat-pill">
            <i className="fa-solid fa-earth-americas"></i> Cross-Border Policy
            Research
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
