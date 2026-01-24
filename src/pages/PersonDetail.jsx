import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Img from "../components/Img";
import {
  phdStudents,
  alumniData,
  staffData,
  previousStaffData,
  internsData,
} from "../data/peopleData";
import "./PersonDetail.css";

const PersonDetail = () => {
  const { id } = useParams();

  // 1. Find the person across all datasets
  let person = null;
  let categoryHash = "";
  let categoryLabel = "";

  // Check Alumni (prefix 'a')
  if (id.startsWith("a")) {
    person = alumniData.find((p) => p.id === id);
    categoryHash = "alumni";
    categoryLabel = "Alumni Network";
  }
  // Check Staff (prefix 's') OR Previous Staff (prefix 'ps')
  else if (id.startsWith("s") || id.startsWith("ps")) {
    // Check current staff first
    person = staffData.find((p) => p.id === id);
    if (!person) {
      person = previousStaffData.find((p) => p.id === id);
    }
    categoryHash = "research-staff";
    categoryLabel = "Research Staff";
  }
  // Check Interns (prefix 'i')
  else if (id.startsWith("i")) {
    person = internsData.find((p) => p.id === id);
    categoryHash = "interns";
    categoryLabel = "Interns";
  }
  // Default: PhD Students (prefix 'p')
  else if (id.startsWith("p")) {
    person = phdStudents.find((p) => p.id === id);
    categoryHash = "phd-students";
    categoryLabel = "PhD Scholars";
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!person) {
    return (
      <div className="person-detail-container">
        <div className="not-found-container">
          <h2>Profile Not Found</h2>
          <Link to="/people" className="person-back-btn">
            <i className="fa-solid fa-arrow-left"></i> Back to People
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="person-detail-container">
      {/* Smart Back Button */}
      <Link to={`/people#${categoryHash}`} className="person-back-btn">
        <i className="fa-solid fa-arrow-left"></i> Back to {categoryLabel}
      </Link>

      <div className="person-profile-card">
        {/* Left: Image */}
        <div className="person-image-wrapper">
          <Img
            src={person.img}
            alt={person.name}
            className="person-img"
            loading="eager"
            onError={(e) =>
              (e.target.src = "https://placehold.co/300x300?text=Profile")
            }
          />
        </div>

        {/* Right: Info Body */}
        <div className="person-info-body">
          <span className="person-role-badge">{person.role}</span>
          <h1 className="person-name">{person.name}</h1>

          <ul className="person-meta-list">
            {/* Tenure */}
            {person.tenure && (
              <li className="person-meta-item">
                <i className="fa-regular fa-calendar meta-icon"></i>
                <span>
                  <span className="meta-label">Tenure:</span> {person.tenure}
                </span>
              </li>
            )}
            {/* Year (for Alumni) */}
            {person.year && (
              <li className="person-meta-item">
                <i className="fa-regular fa-calendar-check meta-icon"></i>
                <span>
                  <span className="meta-label">Year:</span> {person.year}
                </span>
              </li>
            )}

            {/* Current Role/Place (for Alumni) */}
            {(person.currentRole || person.place) && (
              <li className="person-meta-item">
                <i className="fa-solid fa-briefcase meta-icon"></i>
                <span>
                  <span className="meta-label">Current:</span>{" "}
                  {person.currentRole}{" "}
                  {person.place ? `at ${person.place}` : ""}
                </span>
              </li>
            )}

            {/* Email (if public) */}
            {person.email && (
              <li className="person-meta-item">
                <i className="fa-regular fa-envelope meta-icon"></i>
                <span>{person.email}</span>
              </li>
            )}

            {/* Topic/Thesis */}
            {(person.topic || person.thesis) && (
              <li className="person-meta-item">
                <i className="fa-solid fa-book-open meta-icon"></i>
                <span>
                  <span className="meta-label">Research Topic:</span>
                  {person.topic || person.thesis}
                </span>
              </li>
            )}

            {/* Project (for Staff/Interns) */}
            {person.project && (
              <li className="person-meta-item">
                <i className="fa-solid fa-diagram-project meta-icon"></i>
                <span>
                  <span className="meta-label">Project:</span> {person.project}
                </span>
              </li>
            )}
          </ul>

          {/* Social / Link Actions */}
          <div className="person-social-row">
            {person.linkedin && person.linkedin !== "#" && (
              <a
                href={person.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-btn linkedin"
              >
                <i className="fa-brands fa-linkedin-in"></i> LinkedIn
              </a>
            )}

            {person.researchLink && person.researchLink !== "#" && (
              <a
                href={person.researchLink}
                target="_blank"
                rel="noreferrer"
                className="social-btn research"
              >
                <i className="fa-solid fa-graduation-cap"></i>{" "}
                {person.researchLabel || "Research Profile"}
              </a>
            )}

            {person.webpage && person.webpage !== "#" && (
              <a
                href={person.webpage}
                target="_blank"
                rel="noreferrer"
                className="social-btn email"
              >
                <i className="fa-solid fa-globe"></i> Website
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonDetail;
