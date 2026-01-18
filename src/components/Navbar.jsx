import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track open dropdown
  const location = useLocation();

  // Close mobile menu and reset dropdowns when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Toggle Dropdown (Mobile Only)
  const toggleDropdown = (menuName, e) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="header">
      <nav className="navbar container">
        {/* LOGO */}
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <div className="logo-icon">
            <i className="fa-solid fa-graduation-cap"></i>
          </div>
          <span className="logo-text">Prof. Nalin Bharti</span>
        </Link>

        {/* MOBILE OVERLAY */}
        <div
          className={`nav-overlay ${isMobileMenuOpen ? "active" : ""}`}
          onClick={closeMenu}
        ></div>

        {/* NAVIGATION MENU */}
        <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
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

            {/* DROPDOWN: RESEARCH */}
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
                <li className="dropdown-item">
                  <Link
                    to="/research"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Research Areas
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/research"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Teaching
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/research"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    DPIIT IPR Chair
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/research"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Invited Talks
                  </Link>
                </li>
              </ul>
            </li>

            {/* DROPDOWN: PUBLICATIONS */}
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
                >
                  <i
                    className={`fa-solid fa-chevron-down ${
                      activeDropdown === "publications" ? "rotate" : ""
                    }`}
                  ></i>
                </button>
              </div>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link
                    to="/publications"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Books
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/publications"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Book Chapters
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/publications"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Journal Articles
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/publications"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Conferences
                  </Link>
                </li>
              </ul>
            </li>

            {/* DROPDOWN: PEOPLE */}
            <li
              className={`has-dropdown ${
                activeDropdown === "people" ? "active" : ""
              }`}
            >
              <div className="nav-item-wrapper">
                <NavLink to="/people" className="nav-link" onClick={closeMenu}>
                  People
                </NavLink>
                <button
                  className="dropdown-toggle-btn"
                  onClick={(e) => toggleDropdown("people", e)}
                >
                  <i
                    className={`fa-solid fa-chevron-down ${
                      activeDropdown === "people" ? "rotate" : ""
                    }`}
                  ></i>
                </button>
              </div>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link
                    to="/people"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    PhD Students
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/people"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Alumni
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/people"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Research Staff
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/people"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Interns
                  </Link>
                </li>
              </ul>
            </li>

            {/* DROPDOWN: AWARDS */}
            <li
              className={`has-dropdown ${
                activeDropdown === "awards" ? "active" : ""
              }`}
            >
              <div className="nav-item-wrapper">
                <NavLink to="/awards" className="nav-link" onClick={closeMenu}>
                  Awards & Media
                </NavLink>
                <button
                  className="dropdown-toggle-btn"
                  onClick={(e) => toggleDropdown("awards", e)}
                >
                  <i
                    className={`fa-solid fa-chevron-down ${
                      activeDropdown === "awards" ? "rotate" : ""
                    }`}
                  ></i>
                </button>
              </div>
              <ul className="dropdown">
                <li className="dropdown-item">
                  <Link
                    to="/awards"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Awards & Honors
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/awards"
                    className="dropdown-link"
                    onClick={closeMenu}
                  >
                    Media Coverage
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/awards"
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

        {/* RIGHT CONTROLS */}
        <div className="nav-right-group">
          <button
            className="hamburger"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i
              className={`fa-solid ${
                isMobileMenuOpen ? "fa-xmark" : "fa-bars"
              }`}
            ></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
