import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { awardsData, mediaData } from "../data/awardsData";
import "./AwardDetail.css";

const AwardDetail = () => {
  const { id } = useParams();

  // 1. Search Logic
  let item = null;
  let type = "award"; // default type
  let backHash = "awards";
  let backLabel = "Awards & Recognition";

  // Check Awards
  const awardItem = awardsData.find((i) => i.id === id);
  if (awardItem) {
    item = awardItem;
    type = "award";
    backHash = "awards";
    backLabel = "Awards";
  }

  // Check Media
  if (!item) {
    const mediaItem = mediaData.find((i) => i.id === id);
    if (mediaItem) {
      item = mediaItem;
      type = "media";
      backHash = "media";
      backLabel = "Media Center";
    }
  }

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!item) {
    return (
      <div className="award-detail-container">
        <div className="aw-not-found">
          <h2>Item Not Found</h2>
          <Link to="/awards" className="aw-back-btn">
            <i className="fa-solid fa-arrow-left"></i> Back to Awards
          </Link>
        </div>
      </div>
    );
  }

  // --- RENDER: CERTIFICATE STYLE (AWARDS) ---
  if (type === "award") {
    return (
      <div className="award-detail-container">
        <Link to={`/awards#${backHash}`} className="aw-back-btn">
          <i className="fa-solid fa-arrow-left"></i> Back to {backLabel}
        </Link>

        <div className="certificate-card fade-in-item is-visible">
          <div className="cert-border-inner">
            <div className="cert-icon-wrapper">
              <i className={`fa-solid ${item.icon || "fa-award"}`}></i>
            </div>
            <span className="cert-type-label">Certificate of Achievement</span>

            <h1 className="cert-title">{item.title}</h1>

            <div className="cert-year">{item.year}</div>

            <p className="cert-citation">"{item.desc}"</p>

            <div className="cert-issuer">
              <span>Presented By</span>
              <strong>{item.org}</strong>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- RENDER: MEDIA ROOM STYLE (VIDEO/NEWS) ---
  const isVideo = item.type === "video";

  return (
    <div className="award-detail-container">
      <Link to={`/awards#${backHash}`} className="aw-back-btn">
        <i className="fa-solid fa-arrow-left"></i> Back to {backLabel}
      </Link>

      <div className="media-detail-card fade-in-item is-visible">
        {/* HERO: Video Embed or Image */}
        <div className="media-hero">
          {isVideo && item.videoId ? (
            <div className="media-video-wrapper">
              <iframe
                src={`https://www.youtube.com/embed/${item.videoId}?autoplay=0&rel=0`}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={
                item.img || `https://placehold.co/800x450?text=${item.outlet}`
              }
              alt={item.title}
              className="media-image-hero"
            />
          )}
        </div>

        {/* CONTENT BODY */}
        <div className="media-content">
          <div className="media-meta-row">
            <span className="media-tag">
              {isVideo ? (
                <>
                  <i className="fa-brands fa-youtube"></i> Video Coverage
                </>
              ) : (
                <>
                  <i className="fa-regular fa-newspaper"></i> News Article
                </>
              )}
            </span>
            <span>•</span>
            <span>{item.date}</span>
          </div>

          <h1 className="media-title">{item.title}</h1>
          <p className="media-desc">{item.desc}</p>

          <div className="media-outlet-badge">
            <i className="fa-solid fa-building-broadcast"></i>
            Source: {item.outlet}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardDetail;
