import "./Highlights.css";
import React from "react";

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
            <a href="#research" className="highlight-link">
              Explore Research <i className="fa-solid fa-arrow-right"></i>
            </a>
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
            <a href="#dpiit" className="highlight-link">
              View Initiatives <i className="fa-solid fa-arrow-right"></i>
            </a>
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
            <a href="#people" className="highlight-link">
              Meet the Team <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
