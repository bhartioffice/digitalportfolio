import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  booksData,
  chaptersData,
  articlesData,
  conferencesData,
} from "../data/publicationsData";
import Button from "../components/ui/Button";
import "./PublicationDetail.css";

const PublicationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // 1. Find the item and its category
  let item = null;
  let categoryHash = "";
  let itemType = "";

  // Check Books
  if (!item) {
    item = booksData.find((i) => i.id === id);
    if (item) {
      categoryHash = "books";
      itemType = "Book";
    }
  }
  // Check Chapters
  if (!item) {
    item = chaptersData.find((i) => i.id === id);
    if (item) {
      categoryHash = "chapters";
      itemType = "Book Chapter";
    }
  }
  // Check Articles
  if (!item) {
    item = articlesData.find((i) => i.id === id);
    if (item) {
      categoryHash = "articles";
      itemType = "Journal Article";
    }
  }
  // Check Conferences
  if (!item) {
    item = conferencesData.find((i) => i.id === id);
    if (item) {
      categoryHash = "conferences";
      itemType = "Conference Paper";
    }
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="publication-detail-container">
        <div className="pub-not-found">
          <h2>Publication Not Found</h2>
          <Link to="/publications" className="pub-back-btn">
            <i className="fa-solid fa-arrow-left"></i> Back to Publications
          </Link>
        </div>
      </div>
    );
  }

  const hasImage = !!item.img;

  return (
    <div className="publication-detail-container">
      {/* Smart Back Button */}
      <Link to={`/publications#${categoryHash}`} className="pub-back-btn">
        <i className="fa-solid fa-arrow-left"></i> Back to {categoryHash}
      </Link>

      <div className="pub-detail-card">
        <div className={`pub-content-wrapper ${hasImage ? "has-image" : ""}`}>
          {/* Left Column: Image (if applicable) */}
          {hasImage && (
            <div className="pub-image-container">
              <img
                src={item.img}
                alt={item.title}
                className="pub-detail-img"
                onError={(e) =>
                  (e.target.src = "https://placehold.co/300x450?text=No+Image")
                }
              />
            </div>
          )}

          {/* Right Column: Information */}
          <div className="pub-info-container">
            <span className="pub-type-badge">{itemType}</span>
            <h1 className="pub-title">{item.title}</h1>
            {item.subtitle && <h3 className="pub-subtitle">{item.subtitle}</h3>}

            <div className="pub-meta-grid">
              {item.year && (
                <div className="meta-item">
                  <span className="meta-label">Year</span>
                  <span className="meta-value">{item.year}</span>
                </div>
              )}
              {item.authors && (
                <div className="meta-item">
                  <span className="meta-label">Authors</span>
                  <span className="meta-value">{item.authors}</span>
                </div>
              )}

              {/* Specific Fields based on type */}
              {item.publisher && (
                <div className="meta-item">
                  <span className="meta-label">Publisher</span>
                  <span className="meta-value">{item.publisher}</span>
                </div>
              )}
              {item.isbn && (
                <div className="meta-item">
                  <span className="meta-label">ISBN</span>
                  <span className="meta-value">{item.isbn}</span>
                </div>
              )}
              {item.journal && (
                <div className="meta-item">
                  <span className="meta-label">Journal</span>
                  <span
                    className="meta-value"
                    dangerouslySetInnerHTML={{ __html: item.journal }}
                  />
                </div>
              )}
              {item.book && (
                <div className="meta-item">
                  <span className="meta-label">In Book</span>
                  <span className="meta-value">{item.book}</span>
                </div>
              )}
              {item.venue && (
                <div className="meta-item">
                  <span className="meta-label">Venue/Conference</span>
                  <span className="meta-value">{item.venue}</span>
                </div>
              )}
              {item.location && (
                <div className="meta-item">
                  <span className="meta-label">Location</span>
                  <span className="meta-value">{item.location}</span>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pub-actions">
              {item.link && item.link !== "#" ? (
                <Button href={item.link} target="_blank" variant="primary">
                  View External Source{" "}
                  <i
                    className="fa-solid fa-external-link-alt"
                    style={{ marginLeft: "8px" }}
                  ></i>
                </Button>
              ) : (
                <span style={{ color: "#94a3b8", fontStyle: "italic" }}>
                  Offline / Citation Only
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationDetail;
