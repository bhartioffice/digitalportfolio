// src/components/Highlights/Highlights.jsx
import "./Highlights.css";
import React from "react";
import { Link } from "react-router-dom"; // <--- IMPORT LINK

const Highlights = () => {
  return (
    <section className="highlights-section fade-in-section is-visible">
      <div className="container">
        <h2>Academic Highlights</h2>
        <div className="highlights-grid">
          <div className="highlight-card fade-in-item is-visible">
            <div className="highlight-icon-box">
              <i className="fa-solid fa-earth-asia"></i>
            </div>
            <h3>International Trade</h3>
            <p>
              Exploring trade policies, WTO negotiations, and economic
              partnerships in South Asia.
            </p>
            {/* FIXED LINK */}
            <Link to="/research" className="highlight-link">
              Explore Research <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="highlight-card fade-in-item is-visible">
            <div className="highlight-icon-box">
              <i className="fa-solid fa-scale-balanced"></i>
            </div>
            <h3>DPIIT IPR Chair</h3>
            <p>
              Spearheading IPR pedagogy and research under the Ministry of
              Commerce & Industry.
            </p>
            {/* FIXED LINK: Points to the DPIIT Tab */}
            <Link to="/research#dpiit" className="highlight-link">
              View Initiatives <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="highlight-card fade-in-item is-visible">
            <div className="highlight-icon-box">
              <i className="fa-solid fa-users-viewfinder"></i>
            </div>
            <h3>PhD Supervision</h3>
            <p>
              Mentoring a vibrant group of doctoral scholars in economics and
              policy.
            </p>
            {/* FIXED LINK */}
            <Link to="/people" className="highlight-link">
              Meet the Team <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
