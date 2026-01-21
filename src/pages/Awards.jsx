import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Awards.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

import { awardsData, mediaData, galleryImages } from "../data/awardsData";

const Awards = () => {
  const [activeTab, setActiveTab] = useState("awards-honors");
  const [lightboxImage, setLightboxImage] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let tab = location.hash.replace("#", "");
      if (tab === "gallery") tab = "gallery-photos";
      if (["awards-honors", "media-coverage", "gallery-photos"].includes(tab)) {
        setActiveTab(tab);
        const element = document.querySelector(".tab-content");
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, [location]);

  // Split Media into Featured and Standard
  const featuredMedia = mediaData.filter((m) => m.featured);
  const standardMedia = mediaData.filter((m) => !m.featured);

  return (
    <>
      <SEO
        title="Awards & Media"
        description="Recognition of excellence and contributions to the public discourse by Prof. Nalin Bharti."
        url="/awards"
      />

      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Recognition & Impact</h1>
        <p className="center-text-sm">
          Celebrating academic excellence and contributions to public economic
          discourse.
        </p>
      </section>

      <div className="container fade-in-item is-visible">
        <div className="tabs-wrapper">
          {["awards-honors", "media-coverage", "gallery-photos"].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "awards-honors"
                ? "Awards & Honors"
                : tab === "media-coverage"
                  ? "Media Room"
                  : "Gallery"}
            </button>
          ))}
        </div>
      </div>

      {/* --- TAB 1: AWARDS (Hall of Fame) --- */}
      {activeTab === "awards-honors" && (
        <section className="tab-content container active">
          <div className="awards-list">
            {awardsData.map((award) => (
              <div key={award.id} className="certificate-card">
                <div className="cert-icon-box">
                  <i className={`fa-solid ${award.icon}`}></i>
                </div>
                <div className="cert-content">
                  <span className="cert-year-badge">{award.year}</span>
                  <h3 className="cert-title">{award.title}</h3>
                  <span className="cert-org">{award.org}</span>
                  <p className="cert-desc">{award.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- TAB 2: MEDIA (Cinema & Magazine) --- */}
      {activeTab === "media-coverage" && (
        <section className="tab-content container active">
          {/* 1. CINEMA SECTION (Featured Videos) */}
          <div className="newsroom-hero">
            {featuredMedia.map((media) => (
              <div key={media.id} className="hero-video-card">
                <div className="hero-video-frame">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${media.videoId}`}
                    title={media.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="hero-video-content">
                  <div className="hero-meta">
                    <span className="hero-tag">Featured</span>
                    <span className="hero-outlet">{media.outlet}</span>
                  </div>
                  <h3 className="hero-title">{media.title}</h3>
                  <p className="hero-desc">{media.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="spacer-divider"></div>
          <h3 className="section-subtitle" style={{ fontSize: "1.5rem" }}>
            Media Archive
          </h3>

          {/* 2. ARCHIVE MAGAZINE GRID */}
          <div className="media-archives-grid">
            {standardMedia.map((media) => (
              <div key={media.id} className="archive-card">
                <div className="archive-thumb">
                  {/* Badge */}
                  <span className="archive-type-badge">
                    {media.type === "video" ? (
                      <i className="fa-solid fa-play"></i>
                    ) : (
                      <i className="fa-regular fa-newspaper"></i>
                    )}
                    &nbsp; {media.type}
                  </span>

                  {/* Content */}
                  {media.type === "video" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${media.videoId}`}
                      title={media.title}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <Img
                      src={media.img}
                      alt={media.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onError={(e) =>
                        (e.target.src =
                          "https://placehold.co/600x400?text=News+Clip")
                      }
                    />
                  )}
                </div>

                <div className="archive-content">
                  <div className="archive-meta">
                    <span>{media.outlet}</span>
                    <span>{media.date}</span>
                  </div>
                  <h4 className="archive-title">{media.title}</h4>
                  <p className="archive-desc">{media.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* --- TAB 3: GALLERY --- */}
      {activeTab === "gallery-photos" && (
        <section className="tab-content container active">
          <div className="gallery-masonry">
            {galleryImages.map((photo, index) => (
              <div
                key={index}
                className="gallery-item"
                onClick={() => setLightboxImage(photo)}
              >
                <div className="g-img-container">
                  <Img src={photo.src} alt={photo.alt} loading="lazy" />
                  <div className="g-overlay">
                    <span className="g-text">
                      <i className="fa-solid fa-expand"></i> View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="lightbox-close"
              onClick={() => setLightboxImage(null)}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <Img src={lightboxImage.src} alt={lightboxImage.alt} />
            {lightboxImage.alt && (
              <div className="lightbox-caption">{lightboxImage.alt}</div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Awards;
