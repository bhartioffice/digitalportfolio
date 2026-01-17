import React, { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button"; // Kept for consistency if needed later
import "./People.css";
import Img from "../components/Img";

// Import extracted data
import {
  phdStudents,
  alumniData,
  staffData,
  internsData,
} from "../data/peopleData";

const People = () => {
  const [activeTab, setActiveTab] = useState("phd-students");

  return (
    <>
      {/* --- PAGE HEADER --- */}
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">People & Team</h1>
        <p className="center-text-sm">
          Building the future of economic research with a dedicated team of
          scholars and researchers.
        </p>
      </section>

      {/* --- TABS --- */}
      <div className="container fade-in-item is-visible">
        <div className="tabs-wrapper">
          <button
            className={`tab-btn ${
              activeTab === "phd-students" ? "active" : ""
            }`}
            onClick={() => setActiveTab("phd-students")}
          >
            PhD Scholars
          </button>
          <button
            className={`tab-btn ${activeTab === "alumni" ? "active" : ""}`}
            onClick={() => setActiveTab("alumni")}
          >
            Alumni Network
          </button>
          <button
            className={`tab-btn ${
              activeTab === "research-staff" ? "active" : ""
            }`}
            onClick={() => setActiveTab("research-staff")}
          >
            Research Staff
          </button>
          <button
            className={`tab-btn ${activeTab === "interns" ? "active" : ""}`}
            onClick={() => setActiveTab("interns")}
          >
            Interns
          </button>
        </div>
      </div>

      {/* =========================================================
          TAB 1: PHD STUDENTS (ONGOING)
      ========================================================= */}
      {activeTab === "phd-students" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Ongoing Doctoral Research</h3>
            <p>
              Current PhD candidates working on cutting-edge topics in
              International Trade, Labour Economics, and Intellectual Property
              Rights.
            </p>
          </div>

          <div className="people-grid">
            {phdStudents.map((student) => (
              <Card
                key={student.id}
                className="person-card status-ongoing"
                // Important: Override Card padding to keep the edge-to-edge layout
                style={{ padding: 0 }}
              >
                <span className="status-badge ongoing">Ongoing</span>

                <div className="person-header">
                  <div className="person-img">
                    <Img
                      src={student.img}
                      alt={student.name}
                      loading="lazy"
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/200x200?text=Scholar")
                      }
                    />
                  </div>
                </div>

                <div className="person-info">
                  <h4>
                    {student.name}
                    {student.linkedin && student.linkedin !== "#" && (
                      <a
                        href={student.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="name-link"
                        aria-label="LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    )}
                  </h4>
                  <span className="role-subtitle">{student.role}</span>

                  <div className="research-topic">
                    <strong>
                      <i className="fa-solid fa-microscope"></i> Topic
                    </strong>
                    {student.topic}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 2: ALUMNI (AWARDED)
      ========================================================= */}
      {activeTab === "alumni" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Alumni Network</h3>
            <p>
              Our graduated scholars are now contributing to academia and
              policymaking institutions across India and the globe.
            </p>
          </div>

          <div className="people-grid">
            {alumniData.map((alum) => (
              <Card
                key={alum.id}
                className="person-card status-graduated"
                style={{ padding: 0 }}
              >
                <span className="status-badge awarded">
                  Awarded {alum.year}
                </span>

                <div className="person-header">
                  <div className="person-img">
                    <Img
                      src={alum.img}
                      alt={alum.name}
                      loading="lazy"
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/200x200?text=Alumni")
                      }
                    />
                  </div>
                </div>

                <div className="person-info">
                  <h4>
                    {alum.name}
                    {alum.linkedin && alum.linkedin !== "#" && (
                      <a
                        href={alum.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="name-link"
                        aria-label="LinkedIn"
                      >
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    )}
                  </h4>
                  <span className="role-subtitle">{alum.currentRole}</span>
                  <span className="tenure">{alum.place}</span>

                  <div className="thesis-topic">
                    <strong>
                      <i className="fa-solid fa-book-open"></i> Thesis Topic
                    </strong>
                    {alum.thesis}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 3: RESEARCH STAFF
      ========================================================= */}
      {activeTab === "research-staff" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>DPIIT IPR Chair Team</h3>
            <p>
              Dedicated researchers working under the DPIIT IPR Chair and other
              sponsored projects.
            </p>
          </div>

          <div
            className="people-grid"
            style={{
              justifyContent: "center",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
            }}
          >
            {staffData.map((staff) => (
              <Card
                key={staff.id}
                className="person-card status-staff"
                style={{ maxWidth: "350px", width: "100%", padding: 0 }}
              >
                <span className="status-badge staff-badge">Staff</span>

                <div className="person-header">
                  <div className="person-img">
                    <Img
                      src={staff.img}
                      alt={staff.name}
                      loading="lazy"
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/200x200?text=Staff")
                      }
                    />
                  </div>
                </div>

                <div className="person-info">
                  <h4>{staff.name}</h4>
                  <span className="role-subtitle">{staff.role}</span>

                  <div
                    className="research-topic"
                    style={{ borderLeftColor: "var(--color-accent)" }}
                  >
                    <strong>
                      <i className="fa-solid fa-briefcase"></i> Project
                    </strong>
                    {staff.project}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 4: INTERNS
      ========================================================= */}
      {activeTab === "interns" && (
        <section className="tab-content container active">
          <div className="teaching-intro">
            <h3>Research Interns</h3>
            <p>
              Young minds from various prestigious institutions contributing to
              our research ecosystem.
            </p>
          </div>

          <div className="people-grid compact-grid">
            {internsData.map((intern) => (
              <Card
                key={intern.id}
                className="person-card compact"
                style={{ padding: 0 }}
              >
                <div className="person-header" style={{ marginTop: "2rem" }}>
                  <div
                    className="person-img"
                    style={{ width: "100px", height: "100px" }}
                  >
                    <Img
                      src={intern.img}
                      alt={intern.name}
                      loading="lazy"
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/150x150?text=Intern")
                      }
                    />
                  </div>
                </div>

                <div
                  className="person-info"
                  style={{ paddingBottom: "1.5rem" }}
                >
                  <h4 style={{ fontSize: "1.1rem" }}>{intern.name}</h4>
                  <span
                    className="role-subtitle"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {intern.role}
                  </span>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "var(--color-text-muted)",
                      marginTop: "0.5rem",
                    }}
                  >
                    <i className="fa-solid fa-building-columns"></i>{" "}
                    {intern.institute}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default People;
