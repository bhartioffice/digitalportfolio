// src/components/Hero/Hero.jsx
import "./Hero.css";
import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "../Typewriter";

const Hero = () => {
  return (
    <section
      className="hero-banner"
      id="home"
      aria-label="Introduction to Professor Nalin Bharti"
    >
      {/* PERFORMANCE UPGRADE: Real Image instead of CSS Background */}
      {/* This fixes LCP (Largest Contentful Paint) and adds Accessibility */}
      <div className="hero-image-wrapper">
        <img
          src="/Photos/manish-profile.jpeg"
          alt="Professor Nalin Bharti standing at the IIT Patna campus"
          className="hero-bg-img"
          loading="eager" /* Loads immediately for speed */
          width="1920" /* Prevents Layout Shift (CLS) */
          height="1080"
        />
        <div className="hero-overlay-gradient"></div>
      </div>

      <div className="container hero-layout">
        {/* === MAIN HERO CONTENT === */}
        <div className="hero-main-content fade-in-item is-visible">
          {/* MISTAKE 1 FIX: Better Typography Hierarchy */}
          <h1 className="hero-name">Prof. Nalin Bharti</h1>
          <p className="hero-tagline">
            Professor of Economics · DPIIT IPR Chair · IIT Patna
          </p>

          {/* MISTAKE 3 FIX: CTA Hierarchy & Glassmorphism */}
          <div className="cta-buttons">
            <Link
              to="/research"
              className="cta-primary"
              aria-label="Explore Research Areas"
            >
              Explore Research{" "}
              <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </Link>
            <Link
              to="/contact"
              className="cta-secondary"
              aria-label="Contact Professor Bharti"
            >
              Contact
            </Link>
          </div>

          {/* MISTAKE 2 FIX: Stable 'Expert In' Box */}
          <div className="expert-container">
            <div className="expert-box">
              <span className="expert-label">Expert In:</span>
              <div className="typewriter-wrapper">
                <Typewriter />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator" aria-hidden="true">
            <span className="scroll-text">Scroll for Details</span>
            <i className="fa-solid fa-chevron-down bounce"></i>
          </div>
        </div>

        {/* === ROLES & LINKS (Below Fold) === */}
        <div className="scroll-content fade-in-item is-visible">
          <div className="glass-roles-grid">
            <div className="glass-card">
              <div className="role-icon">
                <i className="fa-solid fa-building-columns"></i>
              </div>
              <div className="role-text">
                <span className="role-label">Primary Role</span>
                <h3>Professor of Economics</h3>
                <p>Dept. of Humanities & Social Sciences</p>
                <p class="inst-name"> Indian Institute of Technology, Patna</p>
              </div>
            </div>

            <div className="glass-card highlight">
              <div className="role-icon">
                <i className="fa-solid fa-award"></i>
              </div>
              <div className="role-text">
                <span className="role-label">National Chair</span>
                <h3>DPIIT IPR Chair Professor</h3>
                <p>(Additional Charge)</p>
                <p class="inst-name">
                  Ministry of Commerce & Industry, Govt. of India
                </p>
              </div>
            </div>
          </div>

          <div className="bottom-links-row">
            <div className="researcher-ids">
              <a
                href="https://www.researchgate.net/profile/Nalin-Bharti"
                target="_blank"
                rel="noreferrer"
                className="id-badge researchgate"
                aria-label="ResearchGate Profile"
              >
                <i className="ai ai-researchgate-square"></i> ResearchGate
              </a>
              <a
                href="https://www.linkedin.com/in/nalin-bharti-439b3815/"
                target="_blank"
                rel="noreferrer"
                className="id-badge linkedin"
                aria-label="LinkedIn Profile"
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://orcid.org/0000-0002-5586-2383"
                target="_blank"
                rel="noreferrer"
                className="id-badge orcid"
                aria-label="ORCID Profile"
              >
                <i className="ai ai-orcid"></i> ORCID
              </a>
              <a
                href="https://www.scopus.com/authid/detail.uri?authorId=8212184000"
                target="_blank"
                rel="noreferrer"
                className="id-badge scopus"
                aria-label="Scopus Profile"
              >
                <i className="ai ai-scopus"></i> Scopus
              </a>
            </div>

            <div className="secondary-links">
              <Link to="/about" className="text-link">
                Full Biography
              </Link>
              <span className="sep">|</span>
              <Link to="/publications" className="text-link">
                Publications List
              </Link>
              <span className="sep">|</span>
              <a
                href="https://icgetei.in/Brief%20CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-link download"
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
