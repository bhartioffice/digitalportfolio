import React from "react";
import { Link } from "react-router-dom"; // Import Link

// Helper to highlight search terms
const highlightText = (text, highlight) => {
  if (!highlight || !text) return text;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <mark key={index}>{part}</mark>
    ) : (
      part
    ),
  );
};

const ConferenceCard = ({ data, highlight }) => {
  const isIntl = data.tag?.toLowerCase().includes("international");

  return (
    <div className="conf-diplomatic-card">
      {/* 1. LEFT SIDEBAR: The "Spine" */}
      <div className={`conf-strip ${isIntl ? "strip-intl" : "strip-nat"}`}>
        <span className="conf-strip-text">
          {isIntl ? "GLOBAL_SUMMIT" : "NATIONAL_EVENT"}
        </span>
      </div>

      {/* 2. MAIN CONTENT */}
      <div className="conf-body">
        {/* Header: Date & Status */}
        <div className="conf-header">
          <div className="conf-date-group">
            <i className="fa-regular fa-calendar-check"></i>
            <span className="conf-date-text">{data.date}</span>
          </div>
          {data.extraTag && (
            <span className="conf-extra-badge">{data.extraTag}</span>
          )}
        </div>

        {/* Title - LINK ADDED */}
        <h5 className="conf-title">
          <Link
            to={`/publications/${data.id}`}
            style={{ color: "inherit", textDecoration: "none" }}
          >
            {highlightText(data.title, highlight)}
          </Link>
        </h5>

        {/* Venue & Location Block */}
        <div className="conf-geo-block">
          <div className="geo-row">
            <i className="fa-solid fa-landmark"></i>
            <span>{highlightText(data.venue, highlight)}</span>
          </div>
          <div className="geo-row">
            <i className="fa-solid fa-location-dot"></i>
            <span className="geo-city">{data.location}</span>
          </div>
        </div>

        {/* Note/Assoc */}
        {data.assoc && (
          <div className="conf-note">
            <i className="fa-solid fa-circle-info"></i> {data.assoc}
          </div>
        )}

        {/* Footer: Authors */}
        <div className="conf-footer">
          <span className="conf-authors">
            <strong>Presented by:</strong>{" "}
            {highlightText(data.authors, highlight)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCard;
