// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../assets/styles.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // 1. SCROLL LOCK LOGIC (Prevents background scrolling when menu is open)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  // 2. Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Toggle Dropdown (Mobile)
  const toggleDropdown = (menuName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <header className="header">
        <nav className="navbar container">
          {/* LOGO */}
          <Link to="/" className="nav-logo" onClick={closeMenu}>
            <div className="logo-monogram">NB</div>
            <div className="logo-text-group">
              <span className="logo-name">Prof. Nalin Bharti</span>
              <span className="logo-tag">IIT Patna</span>
            </div>
          </Link>

          {/* MOBILE OVERLAY */}
          <div
            className={`nav-overlay ${isMenuOpen ? "active" : ""}`}
            onClick={closeMenu}
          ></div>

          {/* NAVIGATION MENU */}
          <div className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link" end onClick={closeMenu}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="nav-link" onClick={closeMenu}>
                  About
                </NavLink>
              </li>

              {/* 1. RESEARCH & TEACHING DROPDOWN */}
              <li
                className={`has-dropdown ${
                  activeDropdown === "research" ? "active" : ""
                }`}
              >
                <div className="nav-item-wrapper">
                  <NavLink
                    to="/research"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Research & Teaching
                  </NavLink>
                  <button
                    className="dropdown-toggle-btn"
                    onClick={(e) => toggleDropdown("research", e)}
                    aria-label="Toggle Research Menu"
                  >
                    <i
                      className={`fa-solid fa-chevron-down ${
                        activeDropdown === "research" ? "rotate" : ""
                      }`}
                    ></i>
                  </button>
                </div>
                <ul className="dropdown">
                  <li>
                    <Link
                      to="/research#research"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Research Areas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research#teaching"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Teaching
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research#dpiit"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Policy & Outreach
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/research#talks"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Leadership & Talks
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 2. PUBLICATIONS DROPDOWN */}
              <li
                className={`has-dropdown ${
                  activeDropdown === "publications" ? "active" : ""
                }`}
              >
                <div className="nav-item-wrapper">
                  <NavLink
                    to="/publications"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Publications
                  </NavLink>
                  <button
                    className="dropdown-toggle-btn"
                    onClick={(e) => toggleDropdown("publications", e)}
                    aria-label="Toggle Publications Menu"
                  >
                    <i
                      className={`fa-solid fa-chevron-down ${
                        activeDropdown === "publications" ? "rotate" : ""
                      }`}
                    ></i>
                  </button>
                </div>
                <ul className="dropdown">
                  <li>
                    <Link
                      to="/publications#books"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/publications#chapters"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Book Chapters
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/publications#articles"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Journal Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/publications#conferences"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Conferences
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 3. PEOPLE DROPDOWN */}
              <li
                className={`has-dropdown ${
                  activeDropdown === "people" ? "active" : ""
                }`}
              >
                <div className="nav-item-wrapper">
                  <NavLink
                    to="/people"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    People
                  </NavLink>
                  <button
                    className="dropdown-toggle-btn"
                    onClick={(e) => toggleDropdown("people", e)}
                    aria-label="Toggle People Menu"
                  >
                    <i
                      className={`fa-solid fa-chevron-down ${
                        activeDropdown === "people" ? "rotate" : ""
                      }`}
                    ></i>
                  </button>
                </div>
                <ul className="dropdown">
                  <li>
                    <Link
                      to="/people#phd-students"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      PhD Scholars
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/people#alumni"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Alumni
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/people#research-staff"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Research Staff
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/people#interns"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Interns
                    </Link>
                  </li>
                </ul>
              </li>

              {/* 4. AWARDS DROPDOWN */}
              <li
                className={`has-dropdown ${
                  activeDropdown === "awards" ? "active" : ""
                }`}
              >
                <div className="nav-item-wrapper">
                  <NavLink
                    to="/awards"
                    className="nav-link"
                    onClick={closeMenu}
                  >
                    Awards & Media
                  </NavLink>
                  <button
                    className="dropdown-toggle-btn"
                    onClick={(e) => toggleDropdown("awards", e)}
                    aria-label="Toggle Awards Menu"
                  >
                    <i
                      className={`fa-solid fa-chevron-down ${
                        activeDropdown === "awards" ? "rotate" : ""
                      }`}
                    ></i>
                  </button>
                </div>
                <ul className="dropdown">
                  <li>
                    <Link
                      to="/awards#awards-honors"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Awards & Honors
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/awards#media-coverage"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Media Coverage
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/awards#gallery"
                      className="dropdown-link"
                      onClick={closeMenu}
                    >
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* HAMBURGER BUTTON */}
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
