// src/components/Hero/Hero.jsx
import "./Hero.css";
import React from "react";
import { Link } from "react-router-dom"; // <--- IMPORT LINK
import Typewriter from "../Typewriter";
import Img from "../Img";

const Hero = () => {
  return (
    <section className="hero-banner" id="home">
      <div className="container hero-container-flex">
        {/* TEXT CONTENT */}
        <div className="hero-text fade-in-item is-visible">
          <h1 className="hero-name spacer-bottom-sm">Prof. Nalin Bharti</h1>
          <p className="hero-tagline">
            Professor of Economics · DPIIT IPR Chair · IIT Patna · International
            Trade & Policy
          </p>

          <div className="cta-buttons">
            {/* FIXED LINK */}
            <Link to="/research" className="cta-primary">
              Explore Research
            </Link>
            {/* FIXED LINK */}
            <Link to="/contact" className="cta-secondary">
              Contact
            </Link>
          </div>

          <div className="designation-box spacer-bottom-md">
            <h2>Professor (Economics)</h2>
            <span className="ampersand">&</span>

            {/* GROUPED FOR BETTER ALIGNMENT */}
            <div className="title-group">
              <h2>DPIIT IPR Chair Professor</h2>
              <span className="additional-charge">(Additional Charge)</span>
            </div>
          </div>

          <div className="affiliation-box spacer-bottom-md">
            <p>Ministry of Commerce & Industry, Government of India</p>
            <p>Department of Humanities and Social Sciences</p>
            <p className="institute-name">
              <strong>Indian Institute of Technology Patna</strong>
            </p>
          </div>

          <div className="expert-box-container fade-in-item is-visible">
            <div className="expert-box">
              <span className="expert-label">Expert in:</span>
              <Typewriter />
            </div>
          </div>

          {/* RESEARCHER IDs (Colors handled in CSS now) */}
          <div className="researcher-ids spacer-bottom-md">
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

          <div className="secondary-links">
            {/* FIXED LINKS */}
            <Link to="/about" className="text-link">
              Full Biography
            </Link>
            <span className="link-separator">|</span>
            <Link to="/publications" className="text-link">
              Publications List
            </Link>
            <span className="link-separator">|</span>
            <a
              href="https://icgetei.in/Brief%20CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-link"
              download
            >
              Brief CV <i className="fa-solid fa-download"></i>
            </a>
          </div>
        </div>

        {/* IMAGE */}
        <div className="hero-image fade-in-item is-visible">
          <div className="image-frame">
            <Img
              src="/Photos/photos of nalin sir/sirphoto.jpg"
              alt="Prof. Nalin Bharti"
              className="hero-profile-img"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
