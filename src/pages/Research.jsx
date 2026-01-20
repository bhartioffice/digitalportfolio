// src/pages/Research.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Keep this
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom"; // Ensure Link is imported
import "./Research.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

import {
  researchAreas,
  researchProjects,
  peerReviews,
  onlineCourses,
  coursesIITP,
  externalCourses,
  dpiitHeroData,
  policyGovernance,
  giOdyssey,
  outreachEvents,
  institutionalLeadership,
  dpiitFieldVisits,
  invitedTalks,
  organizedEvents,
  policyImpact,
} from "../data/researchData";

const Research = () => {
  // Default tab "research"
  const [activeTab, setActiveTab] = useState("research");
  const location = useLocation();

  // Handle URL hashes
  useEffect(() => {
    if (location.hash) {
      const tab = location.hash.replace("#", "");
      if (["research", "teaching", "dpiit", "talks"].includes(tab)) {
        setActiveTab(tab);
        const element = document.querySelector(".tab-content");
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // Mobile Flip Card Logic
  const [flippedIndex, setFlippedIndex] = useState(null);
  const handleCardClick = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  // --- UPDATED STATS DATA WITH LINKS ---
  const mentorshipStats = [
    {
      label: "PhD Scholars Graduated",
      value: "13",
      link: "/people#alumni",
    },
    {
      label: "Ongoing PhD Scholars",
      value: "6",
      link: "/people#phd-students",
    },
    {
      label: "NPTEL Sponsored Pre-Doc Fellows",
      value: "2",
      highlight: true,
      link: "/people#interns",
    },
    {
      label: "Interns Mentored",
      value: "30+",
      link: "/people#interns",
    },
  ];

  // Helper for Icons (Keep existing helpers)
  const getServiceIcon = (type) => {
    const t = type.toLowerCase();
    if (t.includes("chair") || t.includes("moderator")) return "fa-gavel";
    if (t.includes("fdp") || t.includes("refresher"))
      return "fa-chalkboard-user";
    if (t.includes("keynote")) return "fa-microphone";
    return "fa-lectern";
  };

  const getServiceClass = (type) => {
    const t = type.toLowerCase();
    if (t.includes("chair") || t.includes("moderator")) return "chair";
    if (t.includes("fdp") || t.includes("refresher")) return "fdp";
    if (t.includes("organizer")) return "organizer";
    return "talk";
  };

  return (
    <>
      <SEO
        title="Research & Teaching | Prof. Nalin Bharti"
        description="Research portfolio, teaching philosophy, and policy outreach of Prof. Nalin Bharti."
        url="/research"
      />

      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Research & Teaching</h1>
      </section>

      {/* --- PREMIUM NAVIGATION TABS --- */}
      <div className="container fade-in-item is-visible">
        <div className="tabs-wrapper">
          <button
            className={`tab-btn ${activeTab === "research" ? "active" : ""}`}
            onClick={() => setActiveTab("research")}
          >
            Research Areas
          </button>
          <button
            className={`tab-btn ${activeTab === "teaching" ? "active" : ""}`}
            onClick={() => setActiveTab("teaching")}
          >
            Teaching
          </button>
          <button
            className={`tab-btn ${activeTab === "dpiit" ? "active" : ""}`}
            onClick={() => setActiveTab("dpiit")}
          >
            Policy & Outreach
          </button>
          <button
            className={`tab-btn ${activeTab === "talks" ? "active" : ""}`}
            onClick={() => setActiveTab("talks")}
          >
            Leadership & Talks
          </button>
        </div>
      </div>

      {/* ==================== TAB 1: RESEARCH AREAS ==================== */}
      {activeTab === "research" && (
        <section className="tab-content container active">
          {/* ... (Keep existing Flip Cards code) ... */}
          <h3 className="section-subtitle">Fields of Inquiry</h3>
          <div className="flip-grid">
            {researchAreas.map((area, index) => (
              <div
                className="flip-card"
                key={area.id}
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`flip-inner ${
                    flippedIndex === index ? "flipped" : ""
                  }`}
                >
                  <div className="flip-front">
                    <i className={`fa-solid ${area.icon}`}></i>
                    <h4>{area.title}</h4>
                    <span className="mobile-tap-hint">
                      <i className="fa-solid fa-arrow-rotate-right"></i> Tap to
                      flip
                    </span>
                  </div>
                  <div className="flip-back">
                    <h4>{area.title}</h4>
                    <p>{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">Research Projects</h3>
          <div className="projects-grid">
            {researchProjects.map((project) => (
              <Card
                key={project.id}
                className={`project-card ${
                  project.status === "Ongoing" ? "featured" : ""
                }`}
              >
                <div className="project-header">
                  <span
                    className={`badge ${
                      project.status === "Ongoing" ? "ongoing" : "completed"
                    }`}
                  >
                    {project.status}
                  </span>
                  <span className="amount">{project.amount}</span>
                </div>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <div className="project-footer">
                  <span>
                    <i className="fa-solid fa-building-columns"></i>{" "}
                    {project.agency}
                  </span>
                  <span>{project.duration}</span>
                </div>
              </Card>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Peer Review & Editorial
          </h3>
          <div className="review-two-sided">
            {peerReviews.map((review) => (
              <Card key={review.id} className="review-card">
                <Img
                  src={review.img}
                  alt={review.publisher}
                  className="rc-logo-img"
                />
                <div
                  className="rc-name"
                  style={{ fontWeight: 600, color: "var(--color-text-main)" }}
                >
                  {review.journal}
                </div>
              </Card>
            ))}
          </div>
          <div className="center-btn spacer-top-md">
            <Link to="/people#research-staff" className="btn-premium-cta">
              Meet the Research Team{" "}
              <i className="fa-solid fa-users-viewfinder"></i>
            </Link>
          </div>
        </section>
      )}

      {/* ==================== TAB 2: TEACHING ==================== */}
      {activeTab === "teaching" && (
        <section className="tab-content container active">
          {/* ... (Keep existing Teaching Intro & NPTEL code) ... */}
          <div className="teaching-intro">
            <h3>Knowledge Sharing Philosophy</h3>
            <p>
              Democratizing economic knowledge through classroom rigor and
              massive open online courses (MOOCs).
            </p>
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Online Courses (NPTEL / SWAYAM)
          </h3>
          <div className="nptel-compact-grid">
            {onlineCourses.map((course) => (
              <a
                href={course.link}
                target="_blank"
                rel="noreferrer"
                className="nptel-compact"
                key={course.id}
              >
                <div className="nc-img">
                  <Img src={course.image} alt={course.title} />
                  <span className="nc-badge">{course.duration}</span>
                </div>
                <div className="nc-content">
                  <h4>{course.title}</h4>
                  <p>{course.description}</p>
                  <div className="nc-meta">
                    <span>
                      <i className="fa-solid fa-users"></i> {course.enrolled}{" "}
                      Enrolled
                    </span>
                    <span className="nc-btn">
                      View <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Courses at IIT Patna
          </h3>
          <div className="course-legend">
            <span className="legend-item">
              <span className="dot btech"></span> B.Tech / M.Tech
            </span>
            <span className="legend-item">
              <span className="dot phd"></span> PhD Level
            </span>
          </div>
          <div className="courses-tags-grid">
            {coursesIITP.map((course, index) => {
              const isPhD =
                course.includes("701") ||
                course.includes("702") ||
                course.includes("7208");
              const [code, title] = course.split(":");
              return (
                <span
                  key={index}
                  className={`course-tag ${isPhD ? "phd" : "btech"}`}
                >
                  <b>{code}:</b> {title}
                </span>
              );
            })}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Courses at Other Institutions
          </h3>
          <div className="courses-tags-grid">
            {externalCourses.map((course, index) => (
              <span key={index} className="course-tag external">
                <i className="fa-solid fa-building-columns"></i> {course}
              </span>
            ))}
          </div>

          {/* --- UPDATED: CLICKABLE MENTORSHIP STATS --- */}
          <h3 className="section-subtitle spacer-top-lg">
            Nurturing the Next Generation
          </h3>
          <div className="mentorship-stats">
            {mentorshipStats.map((stat, index) => (
              // Changed div to Link to make the whole card clickable
              <Link
                to={stat.link}
                key={index}
                className={`m-stat ${stat.highlight ? "highlight" : ""}`}
                aria-label={`View details for ${stat.label}`}
              >
                <span className="m-num">{stat.value}</span>
                <span className="m-label">
                  {stat.label}{" "}
                  <i className="fa-solid fa-arrow-right m-arrow"></i>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ==================== TAB 3: POLICY & OUTREACH ==================== */}
      {activeTab === "dpiit" && (
        <section className="tab-content container active">
          {/* ... (Keep existing Policy code same as before) ... */}
          <div className="policy-hero fade-in-item">
            <div className="ph-content">
              <span className="ph-badge">SPRIHA SCHEME</span>
              <h3 className="ph-title">{dpiitHeroData.title}</h3>
              <div className="ph-subtitle">{dpiitHeroData.subtitle}</div>
              <p className="ph-desc">{dpiitHeroData.mandate}</p>
            </div>
            <div className="ph-icon">
              <i className="fa-solid fa-map-location-dot"></i>
            </div>
          </div>

          <h3 className="section-subtitle">Policy & Governance Impact</h3>
          <div className="gov-grid fade-in-item">
            {policyGovernance.map((item, index) => (
              <div key={item.id} className="gov-card">
                <div className="gov-header">
                  <div className="gov-icon-box">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <div className="gov-number">0{index + 1}</div>
                </div>
                <span className="gov-role">{item.role}</span>
                <h4 className="gov-org">{item.org}</h4>
                <p className="gov-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            The GI Odyssey: Field Research
          </h3>
          <p
            className="text-center"
            style={{ maxWidth: "700px", margin: "0 auto 3rem", color: "#666" }}
          >
            Documenting the journey from soil to shelf. Grassroots interaction
            with artisans, farmers, and weavers to secure Geographical
            Indication tags for Bihar's heritage.
          </p>
          <div className="gi-grid fade-in-item">
            {giOdyssey.map((item) => (
              <div key={item.id} className="gi-card">
                <Img
                  src={item.img}
                  alt={item.title}
                  className="gi-bg"
                  onError={(e) =>
                    (e.target.src =
                      "https://placehold.co/600x800?text=Field+Visit")
                  }
                />
                <div className="gi-overlay">
                  <span className="gi-cat">{item.category}</span>
                  <h4 className="gi-title">{item.title}</h4>
                  <span className="gi-loc">
                    <i className="fa-solid fa-location-dot"></i> {item.location}
                  </span>
                  <p className="gi-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Advocacy & Outreach
          </h3>
          <div className="timeline-vertical fade-in-item">
            {outreachEvents.map((evt) => (
              <div className="v-item" key={evt.id}>
                <div className="v-date">{evt.date}</div>
                <div className="v-content">
                  <h4>{evt.title}</h4>
                  <p>
                    <strong>{evt.role}:</strong> {evt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Institutional Leadership
          </h3>
          <div className="leadership-grid fade-in-item">
            {institutionalLeadership.map((item, index) => (
              <div key={index} className="lead-card">
                <div className="lead-icon">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div className="lead-info">
                  <h4>{item.role}</h4>
                  <span>{item.org}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="center-btn spacer-top-lg">
            <Link to="/people#research-staff" className="btn-premium-cta">
              Meet the Policy Research Team{" "}
              <i className="fa-solid fa-users-viewfinder"></i>
            </Link>
          </div>
        </section>
      )}

      {/* ==================== TAB 4: LEADERSHIP & TALKS ==================== */}
      {activeTab === "talks" && (
        <section className="tab-content container active">
          {/* 1. ACADEMIC EVENTS ORGANIZED */}
          <h3 className="section-subtitle">Academic Events Organized</h3>
          <p
            className="text-center"
            style={{
              color: "var(--color-text-secondary)",
              marginBottom: "3rem",
              maxWidth: "700px",
              marginInline: "auto",
            }}
          >
            Conferences, GIAN Courses, and Symposia convened to foster global
            academic dialogue and regional development.
          </p>

          <div className="events-grid fade-in-item">
            {organizedEvents.map((event) => (
              <div key={event.id} className="event-card">
                <div className="event-header">
                  <span className="event-role">{event.role}</span>
                  <span className="event-date">
                    <i className="fa-regular fa-calendar"></i> {event.date}
                  </span>
                </div>
                <div className="event-body">
                  <h4>{event.title}</h4>
                  <p>{event.desc}</p>
                  <div className="event-loc">
                    <i
                      className="fa-solid fa-location-dot"
                      style={{ color: "var(--color-accent)" }}
                    ></i>{" "}
                    {event.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. INVITED TALKS (High Worth Only) */}
          <h3 className="section-subtitle spacer-top-lg">
            Keynote & Invited Lectures
          </h3>
          <p
            className="text-center"
            style={{
              color: "var(--color-text-secondary)",
              marginBottom: "3rem",
            }}
          >
            Selected high-impact talks at premier international universities and
            national policy forums.
          </p>

          <div className="service-grid fade-in-item">
            {invitedTalks.map((talk) => (
              <Card key={talk.id} className="service-card">
                <div className="service-icon">
                  <i className={`fa-solid ${talk.icon || "fa-microphone"}`}></i>
                </div>
                <div className="service-content">
                  <span className="service-type">{talk.type}</span>
                  <h4>{talk.title}</h4>
                  <div className="service-meta">
                    <span>
                      <i className="fa-solid fa-landmark"></i> {talk.venue}
                    </span>
                    <span>
                      <i className="fa-regular fa-calendar-check"></i>{" "}
                      {talk.date}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Research;
