import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./People.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

// Import Data
import {
  phdStudents,
  alumniData,
  staffData,
  previousStaffData,
  internsData,
} from "../data/peopleData";

const People = () => {
  const [activeTab, setActiveTab] = useState("phd-students");
  const location = useLocation();

  // Hash Listener
  useEffect(() => {
    if (location.hash) {
      const tab = location.hash.replace("#", "");
      if (
        ["phd-students", "alumni", "research-staff", "interns"].includes(tab)
      ) {
        setActiveTab(tab);
        const element = document.querySelector(".tab-content");
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, [location]);

  return (
    <>
      <SEO
        title="People & Team"
        description="Meet the PhD scholars, Research Staff, and Alumni working with Prof. Nalin Bharti at IIT Patna."
        url="/people"
      />

      {/* --- PAGE HEADER --- */}
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">People & Team</h1>
        <p className="center-text-sm">
          A dedicated community of scholars, researchers, and alumni driving
          innovation in economic policy.
        </p>
      </section>

      {/* --- TABS --- */}
      <div className="container fade-in-item is-visible">
        <div className="tabs-wrapper">
          {["phd-students", "alumni", "research-staff", "interns"].map(
            (tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "phd-students"
                  ? "PhD Scholars"
                  : tab === "research-staff"
                    ? "Research Team"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ),
          )}
        </div>
      </div>

      {/* =========================================================
          TAB 1: PHD SCHOLARS (ID CARD STYLE)
      ========================================================= */}
      {activeTab === "phd-students" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Doctoral Research Scholars</h3>
            <p>
              Candidates currently pursuing their PhD, focusing on trade, IPR,
              and development economics.
            </p>
          </div>

          <div className="scholar-grid">
            {phdStudents.map((student) => (
              <div key={student.id} className="scholar-card">
                <div className="scholar-header"></div>
                <div className="scholar-img-wrapper">
                  <Img src={student.img} alt={student.name} loading="lazy" />
                </div>

                <div className="scholar-body">
                  <h4 className="scholar-name">{student.name}</h4>
                  <span className="scholar-role">{student.role}</span>

                  <div className="topic-box">
                    <span className="topic-label">Research Focus</span>
                    <span className="topic-text">{student.topic}</span>
                  </div>

                  <div className="scholar-meta">
                    <div className="meta-row">
                      <i className="fa-regular fa-calendar"></i>
                      <span>{student.tenure || "Current"}</span>
                    </div>
                    {/* Add IITP Email if available for credibility */}
                    {student.email && (
                      <div className="meta-row">
                        <i className="fa-regular fa-envelope"></i>
                        <span>{student.email}</span>
                      </div>
                    )}
                  </div>

                  <div className="scholar-actions">
                    {student.linkedin && student.linkedin !== "#" && (
                      <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="action-btn btn-linkedin"
                      >
                        <i className="fa-brands fa-linkedin-in"></i> LinkedIn
                      </a>
                    )}
                    {student.researchLink && student.researchLink !== "#" && (
                      <a
                        href={student.researchLink}
                        target="_blank"
                        rel="noreferrer"
                        className="action-btn btn-research"
                      >
                        <i className="fa-solid fa-graduation-cap"></i>{" "}
                        {student.researchLabel || "Profile"}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 2: ALUMNI (NETWORK STYLE)
      ========================================================= */}
      {activeTab === "alumni" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Global Alumni Network</h3>
            <p>
              Our graduates are making an impact in academia, government, and
              industry worldwide.
            </p>
          </div>

          <div className="scholar-grid" style={{ gridTemplateColumns: "1fr" }}>
            {alumniData.map((alum) => (
              <div key={alum.id} className="alumni-card">
                <span className="alumni-badge">{alum.year}</span>

                <div className="alumni-body">
                  <div className="alumni-header">
                    <Img
                      src={alum.img}
                      alt={alum.name}
                      className="alumni-img"
                    />
                    <div className="alumni-details">
                      <h4>{alum.name}</h4>
                      <div className="current-position">
                        <span className="cp-title">{alum.currentRole}</span>
                        <span className="cp-place">{alum.place}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div className="topic-box" style={{ margin: 0 }}>
                      <span className="topic-label">PhD Thesis</span>
                      <span className="topic-text">{alum.thesis}</span>
                    </div>

                    <div
                      className="scholar-actions"
                      style={{
                        justifyContent: "flex-start",
                        marginTop: "1rem",
                        flexWrap: "wrap", // Ensures buttons wrap on small screens
                      }}
                    >
                      {/* 1. LinkedIn */}
                      {alum.linkedin && alum.linkedin !== "#" && (
                        <a
                          href={alum.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="action-btn btn-linkedin"
                        >
                          <i className="fa-brands fa-linkedin-in"></i> Connect
                        </a>
                      )}

                      {/* 2. Webpage */}
                      {alum.webpage && alum.webpage !== "#" && (
                        <a
                          href={alum.webpage}
                          target="_blank"
                          rel="noreferrer"
                          className="action-btn btn-research"
                        >
                          <i className="fa-solid fa-globe"></i> Webpage
                        </a>
                      )}

                      {/* 3. Research ID (UPDATED with CSS Class) */}
                      {alum.researchLink && alum.researchLink !== "#" && (
                        <a
                          href={alum.researchLink}
                          target="_blank"
                          rel="noreferrer"
                          className="action-btn btn-green" // <--- CHANGED THIS
                        >
                          <i className="fa-solid fa-graduation-cap"></i>{" "}
                          {alum.researchLabel || "Research"}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 3: RESEARCH STAFF ("PROFILE PODS")
      ========================================================= */}
      {activeTab === "research-staff" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>DPIIT IPR Chair Team</h3>
            <p>
              Dedicated research associates and assistants driving our sponsored
              projects.
            </p>
          </div>

          <h4 className="section-subtitle" style={{ fontSize: "1.5rem" }}>
            Current Team
          </h4>

          <div className="pods-grid">
            {staffData.map((staff) => (
              <div key={staff.id} className="profile-pod">
                <span className="pod-status" title="Active Member"></span>

                <div className="pod-img-wrapper">
                  <Img src={staff.img} alt={staff.name} className="pod-img" />
                </div>

                <div className="pod-body">
                  <span className="pod-role">{staff.role}</span>
                  <h4 className="pod-name">{staff.name}</h4>

                  <div className="pod-meta-stack">
                    <div className="pod-meta-row">
                      <span>
                        <i className="fa-solid fa-briefcase meta-icon"></i>{" "}
                        Project
                      </span>
                      <strong style={{ color: "#334155" }}>
                        {staff.project}
                      </strong>
                    </div>
                    <div className="pod-meta-row">
                      <span>
                        <i className="fa-regular fa-clock meta-icon"></i> Tenure
                      </span>
                      <span>{staff.tenure}</span>
                    </div>
                  </div>

                  {staff.linkedin && staff.linkedin !== "#" && (
                    <a
                      href={staff.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="pod-link"
                    >
                      <i className="fa-brands fa-linkedin"></i> Profile
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* PREVIOUS STAFF SECTION */}
          {previousStaffData && previousStaffData.length > 0 && (
            <>
              <div className="spacer-divider"></div>
              <h4 className="section-subtitle" style={{ fontSize: "1.5rem" }}>
                Previous Staff
              </h4>
              <div className="pods-grid">
                {previousStaffData.map((staff) => (
                  <div key={staff.id} className="profile-pod previous">
                    <span className="pod-status" title="Alumni Staff"></span>

                    <div className="pod-img-wrapper">
                      <Img
                        src={staff.img}
                        alt={staff.name}
                        className="pod-img"
                      />
                    </div>

                    <div className="pod-body">
                      <span className="pod-role" style={{ color: "#64748b" }}>
                        {staff.role}
                      </span>
                      <h4 className="pod-name" style={{ color: "#64748b" }}>
                        {staff.name}
                      </h4>

                      <div className="pod-meta-stack">
                        <div className="pod-meta-row">
                          <span>Project</span>
                          <span>{staff.project}</span>
                        </div>
                        <div className="pod-meta-row">
                          <span>Tenure</span>
                          <span>{staff.tenure}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </section>
      )}

      {/* =========================================================
          TAB 4: INTERNS ("PROFILE PODS")
      ========================================================= */}
      {activeTab === "interns" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Research Interns</h3>
            <p>
              Promising students contributing to our ongoing research projects.
            </p>
          </div>

          <div className="pods-grid">
            {internsData.map((intern) => (
              <div key={intern.id} className="profile-pod">
                <span className="pod-status" title="Active Intern"></span>

                <div className="pod-img-wrapper">
                  <Img src={intern.img} alt={intern.name} className="pod-img" />
                </div>

                <div className="pod-body">
                  {/* Gold Role for Interns */}
                  <span className="pod-role" style={{ color: "#d69e2e" }}>
                    {intern.role}
                  </span>

                  <h4 className="pod-name">{intern.name}</h4>

                  <div className="pod-meta-stack">
                    <div className="pod-meta-row">
                      <span>
                        <i className="fa-solid fa-folder-open meta-icon"></i>{" "}
                        Focus
                      </span>
                      <strong style={{ color: "#334155" }}>
                        {intern.project}
                      </strong>
                    </div>
                    <div className="pod-meta-row">
                      <span>
                        <i className="fa-regular fa-clock meta-icon"></i> Term
                      </span>
                      <span>{intern.tenure}</span>
                    </div>
                  </div>

                  {intern.linkedin && intern.linkedin !== "#" && (
                    <a
                      href={intern.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="pod-link"
                    >
                      <i className="fa-brands fa-linkedin"></i> Connect
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default People;
