import React from "react";
import Img from "../Img";

// Helper function to highlight search text
const highlightText = (text, highlight) => {
  if (!highlight || !text) return text;
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, index) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <mark key={index}>{part}</mark>
    ) : (
      part
    )
  );
};

const ChapterCard = ({ data, highlight }) => {
  return (
    <div className="chapter-card">
      {/* 1. VISUAL SIDEBAR (The 3D Book Shelf) */}
      <div className="chapter-visual">
        <Img
          src={data.img || "https://placehold.co/150x220?text=Book"}
          alt={`${data.book} Cover`}
          className="chapter-book-cover"
          loading="lazy"
        />
      </div>

      {/* 2. CONTENT SIDE */}
      <div className="chapter-body">
        {/* Top: Metadata Pill */}
        <div className="chapter-meta-top">
          <span className="chapter-type-pill">Book Chapter</span>
        </div>

        {/* Middle: Title & Context */}
        <h3 className="chapter-title">
          {highlightText(data.title, highlight)}
        </h3>

        <div className="chapter-in-book">
          <span>In:</span>
          <em>{data.book}</em>
        </div>

        {/* Bottom: Actions */}
        <div className="chapter-actions">
          <span className="year-badge">{data.year}</span>

          {data.link && data.link !== "#" ? (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-read-chapter"
            >
              Read Chapter <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          ) : (
            <span style={{ fontSize: "0.85rem", color: "#ccc" }}>
              Citation Only
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChapterCard;
