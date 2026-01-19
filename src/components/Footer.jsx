// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const date = new Date();
  const lastUpdated = `${date.toLocaleString("default", {
    month: "short",
  })} ${date.getFullYear()}`;

  return (
    <footer className="footer fade-in-section is-visible">
      <div className="footer-grid container">
        {/* Column 1: Identity */}
        <div className="footer-col">
          <h4>Prof. Nalin Bharti</h4>
          <p>
            Professor of Economics and DPIIT IPR Chair at IIT Patna,
            specializing in International Trade, Macroeconomic Reforms, and
            Intellectual Property Rights.
          </p>
          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/nalin-bharti-439b3815/"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://x.com/nalinbharti"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="X/Twitter"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.facebook.com/nalin.bharti"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.researchgate.net/profile/Nalin-Bharti"
              target="_blank"
              rel="noreferrer"
              className="social-link"
              aria-label="ResearchGate"
            >
              <i className="fa-brands fa-researchgate"></i>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/research">Research & Teaching</Link>
            </li>
            <li>
              <Link to="/publications">Publications</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/awards">Awards & Media</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Related Links */}
        <div className="footer-col">
          <h4>Related Links</h4>
          <ul>
            <li>
              <a
                href="https://www.iitp.ac.in/"
                target="_blank"
                rel="noreferrer"
              >
                IIT Patna
              </a>
            </li>
            <li>
              <a
                href="https://www.iitp.ac.in/hss/"
                target="_blank"
                rel="noreferrer"
              >
                Dept. of HSS
              </a>
            </li>
            <li>
              <a href="https://dpiit.gov.in/" target="_blank" rel="noreferrer">
                DPIIT, Govt. of India
              </a>
            </li>
            <li>
              <a
                href="https://www.impriindia.com/"
                target="_blank"
                rel="noreferrer"
              >
                IMPRI
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li className="icon-text">
              <i className="fa-solid fa-map-marker-alt"></i>
              <span>IIT Patna, Bihta, Patna – 801106, India</span>
            </li>
            <li className="icon-text">
              <i className="fa-solid fa-envelope"></i>
              <span>nalinbharti@iitp.ac.in</span>
            </li>
            <li className="icon-text">
              <i className="fa-solid fa-phone"></i>
              <span>+91-6115-233017</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p>
            &copy; <span className="current-year">{currentYear}</span>{" "}
            nalinbharti.in | All rights reserved.
          </p>

          {/* REPLACED COUNTER WITH 'LAST UPDATED' BADGE */}
          <div className="visitor-badge" style={{ cursor: "default" }}>
            <span className="vb-icon">
              <i className="fa-regular fa-clock"></i>
            </span>
            <span className="vb-text">
              Last Updated: <strong>{lastUpdated}</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
