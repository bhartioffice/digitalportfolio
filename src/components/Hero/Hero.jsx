import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "../Typewriter";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
        {/* === PART 1: TOP SPLIT === */}
        <div className="hero-top-split">
          {/* --- LEFT: Text Content --- */}
          <div className="hero-text-content fade-in-item is-visible">
            {/* Name is now strictly one line via CSS */}
            <h1 className="hero-name">Prof. Nalin Bharti</h1>
            <p className="hero-tagline">
              Professor of Economics · DPIIT IPR Chair · IIT Patna
            </p>

            <div className="hero-actions">
              <Link to="/research" className="btn btn-primary">
                Explore Research <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact
              </Link>
            </div>

            {/* Beautified Expert Box */}
            <div className="expert-container">
              <span className="expert-label">Expert In:</span>
              <div className="expert-typewriter">
                <Typewriter />
              </div>
            </div>
          </div>

          {/* --- RIGHT: Large Visual with Fade --- */}
          <div className="hero-visual-wrapper fade-in-item is-visible">
            <div className="hero-image-container">
              <picture>
                <source
                  media="(max-width: 1024px)"
                  srcSet="/Photos/nalin_bharti_mobile.webp"
                />
                <source
                  media="(min-width: 1025px)"
                  srcSet="/Photos/nalin_bharti_desktop.webp"
                />
                <img
                  src="/Photos/nalin_bharti_desktop.webp"
                  alt="Prof. Nalin Bharti"
                  className="hero-img"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* === PART 2: BOTTOM DETAILS & FOOTER === */}
        <div className="hero-bottom-details fade-in-item is-visible">
          {/* Designations */}
          <div className="designation-grid">
            <div className="designation-card">
              <div className="icon-box">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="designation-info">
                <h4>Professor of Economics</h4>
                <p>Dept. of Humanities & Social Sciences</p>
                <p>Indian Institute of Technology, Patna</p>
              </div>
            </div>

            <div className="divider-vertical"></div>

            <div className="designation-card">
              <div className="icon-box">
                <i className="fa-solid fa-scale-balanced"></i>
              </div>
              <div className="designation-info">
                <h4>DPIIT IPR Chair Professor</h4>
                <span className="sub-charge">(Additional Charge)</span>
                <p>Ministry of Commerce & Industry, Govt. of India</p>
              </div>
            </div>
          </div>

          {/* Socials & CV */}
          <div className="hero-footer">
            <div className="researcher-ids">
              <a
                href="https://www.researchgate.net/profile/Nalin-Bharti"
                target="_blank"
                rel="noreferrer"
                className="id-badge researchgate"
              >
                <i className="ai ai-researchgate-square"></i> ResearchGate
              </a>
              <a
                href="https://www.linkedin.com/in/nalin-bharti-439b3815/"
                target="_blank"
                rel="noreferrer"
                className="id-badge linkedin"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://orcid.org/0000-0002-5586-2383"
                target="_blank"
                rel="noreferrer"
                className="id-badge orcid"
              >
                <i className="ai ai-orcid"></i> ORCID
              </a>
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=8212184000"
                target="_blank"
                rel="noreferrer"
                className="id-badge scopus"
              >
                <i className="ai ai-scopus"></i> Scopus
              </a>
            </div>

            <div className="footer-links">
              <Link to="/about">Full Biography</Link>
              <Link to="/publications">Publications</Link>
              <a
                href="https://icgetei.in/Brief%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="download-link"
              >
                Brief CV <i className="fa-solid fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
