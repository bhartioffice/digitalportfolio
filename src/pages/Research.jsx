import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import "./Research.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

// Import extracted data
import {
  researchAreas,
  researchProjects,
  peerReviews,
  collaborations,
  professionalAffiliations,
  onlineCourses,
  coursesIITP,
  externalCourses,
  dpiitFieldVisits,
  invitedTalks,
} from "../data/researchData";

const Research = () => {
  const [activeTab, setActiveTab] = useState("research");

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Remove the '#' to get the tab name (e.g., "teaching")
      const tab = location.hash.replace("#", "");

      // Check if it matches one of your tabs
      if (["research", "teaching", "dpiit", "talks"].includes(tab)) {
        setActiveTab(tab);

        // Optional: Scroll to the content so it's not hidden behind the header
        const element = document.querySelector(".tab-content");
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, [location]);

  // UX FIX: Track which card is flipped on mobile
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleCardClick = (index) => {
    // Toggle: if clicking the same one, close it. If new one, open it.
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  // Local data for DPIIT & Mentorship
  const dpiitTimeline = [
    {
      date: "30 Sep 2024 - 22 Oct 2024",
      title: "Handicraft Awareness Seminars (CHCDS)",
      description:
        "Participated as GI Expert in seminars organized by the Ministry of Textiles in Hajipur, Muzaffarpur, and Gaya.",
    },
    {
      date: "21 March 2025",
      title: 'Workshop on "GI and Bihar"',
      description:
        "Organized at IIT Patna. Chief Guest: Shri Arjun Mandal (President Awardee).",
    },
    {
      date: "13 August 2024",
      title: "National Policy on GI",
      description:
        "Provided expert suggestions to the DPIIT for formulating the National Policy on Geographical Indications.",
    },
  ];

  const mentorshipStats = [
    { label: "PhD Scholars Graduated", value: "13", highlight: false },
    { label: "Ongoing PhD Scholars", value: "6", highlight: false },
    { label: "NPTEL Pre-Doc Fellows", value: "2", highlight: true },
    { label: "Interns Mentored", value: "30+", highlight: false },
  ];

  const getServiceIcon = (type) => {
    const t = type.toLowerCase();
    if (
      t.includes("chair") ||
      t.includes("moderator") ||
      t.includes("discussant")
    )
      return "fa-gavel";
    if (t.includes("fdp") || t.includes("refresher") || t.includes("workshop"))
      return "fa-chalkboard-user";
    if (t.includes("organizer")) return "fa-users-gear";
    return "fa-microphone-lines";
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
        title="Research & Teaching"
        description="Explore research in International Trade, DPIIT IPR Chair initiatives, and courses taught by Prof. Nalin Bharti."
        url="/research"
      />
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Research & Teaching</h1>
      </section>

      <div className="container fade-in-item is-visible">
        <div className="tabs-wrapper">
          {["research", "teaching", "dpiit", "talks"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "dpiit"
                ? "DPIIT IPR Chair"
                : tab === "talks"
                ? "Invited Talks"
                : tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* --- RESEARCH TAB --- */}
      {activeTab === "research" && (
        <section className="tab-content container active">
          <h3 className="section-subtitle">Fields of Inquiry & Impact</h3>
          <div className="flip-grid">
            {researchAreas.map((area, index) => (
              <div
                className="flip-card"
                key={area.id}
                onClick={() => handleCardClick(index)} // Add Click Handler
              >
                {/* Add 'flipped' class conditionally */}
                <div
                  className={`flip-inner ${
                    flippedIndex === index ? "flipped" : ""
                  }`}
                >
                  <div className="flip-front">
                    <i className={`fa-solid ${area.icon}`}></i>
                    <h4>{area.title}</h4>
                    {/* Visual cue for mobile */}
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
          <h3 className="section-subtitle spacer-top-lg">Research in Action</h3>
          {/* FIX: Removed 'fade-in-item is-visible' here */}
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
            Peer Review & Editorial Contributions
          </h3>
          <div className="review-two-sided">
            {" "}
            {/* REMOVED fade-in classes */}
            {peerReviews.map((review) => (
              <Card key={review.id} className="review-card">
                <div className="rc-logo">{review.publisher}</div>
                <div className="rc-name">{review.journal}</div>
              </Card>
            ))}
          </div>
          <h3 className="section-subtitle spacer-top-lg">
            International Collaborations
          </h3>
          <div className="collab-grid">
            {" "}
            {/* REMOVED fade-in classes */}
            {collaborations.map((collab, index) => (
              <div className="collab-item" key={index}>
                <Img
                  src={`https://flagcdn.com/${
                    collab.country === "United Kingdom"
                      ? "gb"
                      : collab.country === "Japan"
                      ? "jp"
                      : collab.country === "Hungary"
                      ? "hu"
                      : "sg"
                  }.svg`}
                  alt={collab.country}
                  className="flag"
                />
                <div className="collab-info">
                  <h4>{collab.country}</h4>
                  <p>
                    {collab.collaborators.map((person, i) => (
                      <React.Fragment key={i}>
                        {person}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h3 className="section-subtitle spacer-top-lg">
            Professional Affiliations
          </h3>
          <div className="affiliations-grid">
            {" "}
            {/* REMOVED fade-in classes */}
            {professionalAffiliations.map((affil, index) => (
              <div className="affil-item" key={index}>
                <i className="fa-solid fa-check-circle"></i>
                <span>{affil}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- TEACHING TAB --- */}
      {activeTab === "teaching" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Knowledge Sharing Philosophy</h3>
            <p>
              Making complex economic concepts accessible through rigorous
              academic courses and digital initiatives.
            </p>
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Online Courses (NPTEL / SWAYAM)
          </h3>
          <div className="nptel-compact-grid">
            {" "}
            {/* REMOVED fade-in classes */}
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
                      View Course <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Courses Taught at IIT Patna
          </h3>
          <div className="course-legend">
            <span className="legend-item">
              <span className="dot btech"></span> B.Tech Course
            </span>
            <span className="legend-item">
              <span className="dot phd"></span> PhD Course
            </span>
          </div>
          <div className="courses-tags-grid">
            {" "}
            {/* REMOVED fade-in classes */}
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
            {" "}
            {/* REMOVED fade-in classes */}
            {externalCourses.map((course, index) => (
              <span key={index} className="course-tag external">
                <i className="fa-solid fa-building-columns"></i> {course}
              </span>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Nurturing the Next Generation
          </h3>
          <div className="mentorship-stats">
            {" "}
            {/* REMOVED fade-in classes */}
            {mentorshipStats.map((stat, index) => (
              <div
                key={index}
                className={`m-stat ${stat.highlight ? "highlight" : ""}`}
              >
                <span className="m-num">{stat.value}</span>
                <span className="m-label">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="center-btn spacer-top-md">
            <Button variant="outline" href="/people">
              Meet the Research Team
            </Button>
          </div>
        </section>
      )}

      {/* --- DPIIT TAB --- */}
      {activeTab === "dpiit" && (
        <section className="tab-content container active">
          <div className="dpiit-hero">
            <div className="dpiit-text">
              <h3>DPIIT IPR Chair Activities</h3>
              <p>
                Spearheading a robust IPR ecosystem under the SPRIHA scheme.
              </p>
            </div>
            <div className="dpiit-icon">
              <i className="fa-solid fa-award"></i>
            </div>
          </div>

          <h3 className="section-subtitle">
            Key Achievement: Field Research & Impact
          </h3>
          <div className="field-visit-grid">
            {" "}
            {/* REMOVED fade-in classes */}
            {dpiitFieldVisits.map((visit, index) => (
              <Card key={index} className="visit-card">
                <div className="visit-img">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="visit-content">
                  <h4>{visit.title}</h4>
                  <span className="visit-loc">
                    <i className="fa-solid fa-location-dot"></i>{" "}
                    {visit.location} ({visit.date})
                  </span>
                  <p>{visit.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <h3 className="section-subtitle spacer-top-lg">
            Workshops & Outreach
          </h3>
          <div className="timeline-vertical">
            {dpiitTimeline.map((item, index) => (
              <div className="v-item" key={index}>
                <div className="v-date">{item.date}</div>
                <div className="v-content">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="center-btn spacer-top-md">
            <Button variant="primary" href="/people#research-staff">
              Meet the Research Staff
            </Button>
          </div>
        </section>
      )}

      {/* --- TALKS TAB --- */}
      {activeTab === "talks" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Academic Leadership & Outreach</h3>
            <p>
              Invited lectures, session chairs, and faculty development programs
              that foster academic dialogue.
            </p>
          </div>

          <div className="service-grid">
            {" "}
            {/* REMOVED fade-in classes */}
            {invitedTalks.map((talk) => (
              <Card key={talk.id} className="service-card">
                <div className={`service-icon ${getServiceClass(talk.type)}`}>
                  <i className={`fa-solid ${getServiceIcon(talk.type)}`}></i>
                </div>
                <div className="service-content">
                  <span className="service-type">{talk.type}</span>
                  <h4>{talk.title}</h4>
                  <p className="service-event">
                    <i className="fa-solid fa-landmark"></i> {talk.venue}
                  </p>
                  <div className="service-meta">
                    <span>
                      <i className="fa-regular fa-calendar"></i> {talk.date}
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
