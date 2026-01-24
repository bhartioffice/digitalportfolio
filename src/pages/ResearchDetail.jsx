import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Img from "../components/Img";
import {
  researchAreas,
  researchProjects,
  policyGovernance,
  giOdyssey,
  outreachEvents,
  invitedTalks,
  organizedEvents,
} from "../data/researchData";
import "./ResearchDetail.css";

const ResearchDetail = () => {
  const { id } = useParams();

  // 1. Find the Item and Determine Context
  let item = null;
  let tabHash = "";
  let tabLabel = "";
  let categoryLabel = "Research";

  // --- Check Tab: Research (#research) ---
  if (id.startsWith("p")) {
    item = researchProjects.find((i) => i.id === id);
    tabHash = "research";
    tabLabel = "Research Projects";
    categoryLabel = "Sponsored Project";
  } else if (id.startsWith("r")) {
    item = researchAreas.find((i) => i.id === id);
    tabHash = "research";
    tabLabel = "Research Areas";
    categoryLabel = "Field of Inquiry";
  }
  // --- Check Tab: Policy & Outreach (#dpiit) ---
  else if (id.startsWith("gi")) {
    item = giOdyssey.find((i) => i.id === id);
    tabHash = "dpiit";
    tabLabel = "Policy & Outreach";
    categoryLabel = "GI Odyssey / Field Work";
  } else if (id.startsWith("gov")) {
    item = policyGovernance.find((i) => i.id === id);
    tabHash = "dpiit";
    tabLabel = "Policy & Outreach";
    categoryLabel = "Policy Governance";
  } else if (id.startsWith("evt")) {
    item = outreachEvents.find((i) => i.id === id);
    tabHash = "dpiit";
    tabLabel = "Policy & Outreach";
    categoryLabel = "Outreach Event";
  }
  // --- Check Tab: Leadership & Talks (#talks) ---
  else if (id.startsWith("t")) {
    item = invitedTalks.find((i) => i.id === id);
    tabHash = "talks";
    tabLabel = "Leadership & Talks";
    categoryLabel = item?.type || "Invited Talk";
  } else if (id.startsWith("e")) {
    item = organizedEvents.find((i) => i.id === id);
    tabHash = "talks";
    tabLabel = "Leadership & Talks";
    categoryLabel = "Organized Event";
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="research-detail-container">
        <div className="res-not-found">
          <h2>Item Not Found</h2>
          <Link to="/research" className="res-back-btn">
            <i className="fa-solid fa-arrow-left"></i> Back to Research
          </Link>
        </div>
      </div>
    );
  }

  const hasImage = !!item.img;

  return (
    <div className="research-detail-container">
      {/* Smart Back Navigation */}
      <Link to={`/research#${tabHash}`} className="res-back-btn">
        <i className="fa-solid fa-arrow-left"></i> Back to {tabLabel}
      </Link>

      <div className="res-detail-card">
        {/* HERO SECTION */}
        {hasImage && id.startsWith("gi") ? (
          <div className="res-hero-section has-image">
            <Img src={item.img} alt={item.title} className="res-hero-img" />
          </div>
        ) : (
          <div className="res-hero-section">
            <span className="res-category-badge">{categoryLabel}</span>
            <h1 className="res-title">{item.title}</h1>
            {(item.subtitle || item.org || item.venue) && (
              <h3 className="res-subtitle">
                {item.subtitle || item.org || item.venue}
              </h3>
            )}
          </div>
        )}

        {/* BODY SECTION */}
        <div className="res-body">
          {/* If image was used as hero, show title here */}
          {hasImage && id.startsWith("gi") && (
            <div style={{ marginBottom: "30px" }}>
              <span className="res-category-badge">
                {item.category || categoryLabel}
              </span>
              <h1 className="res-title">{item.title}</h1>
            </div>
          )}

          <div className="res-description">
            {item.description || item.desc || "No description available."}
          </div>

          {/* DYNAMIC METADATA GRID */}
          <div className="res-meta-grid">
            {item.role && (
              <div className="res-meta-item">
                <span className="res-meta-label">Role</span>
                <span className="res-meta-value">{item.role}</span>
              </div>
            )}

            {item.agency && (
              <div className="res-meta-item">
                <span className="res-meta-label">Funding Agency</span>
                <span className="res-meta-value">
                  <i className="fa-solid fa-building-columns res-icon"></i>{" "}
                  {item.agency}
                </span>
              </div>
            )}

            {(item.date || item.duration) && (
              <div className="res-meta-item">
                <span className="res-meta-label">Timeline / Date</span>
                <span className="res-meta-value">
                  <i className="fa-regular fa-calendar res-icon"></i>{" "}
                  {item.date || item.duration}
                </span>
              </div>
            )}

            {(item.location || item.venue) && (
              <div className="res-meta-item">
                <span className="res-meta-label">Location</span>
                <span className="res-meta-value">
                  <i className="fa-solid fa-location-dot res-icon"></i>{" "}
                  {item.location || item.venue}
                </span>
              </div>
            )}

            {item.amount && (
              <div className="res-meta-item">
                <span className="res-meta-label">Grant Amount</span>
                <span className="res-meta-value">{item.amount}</span>
              </div>
            )}

            {item.status && (
              <div className="res-meta-item">
                <span className="res-meta-label">Status</span>
                <span className={`status-badge ${item.status}`}>
                  {item.status}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchDetail;
