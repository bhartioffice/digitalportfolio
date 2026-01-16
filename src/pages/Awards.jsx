import React, { useState } from "react";
import Card from "../components/ui/Card";
import "./Awards.css";

// Import extracted data
import { awardsData, mediaData, galleryImages } from "../data/awardsData";

const Awards = () => {
  const [activeTab, setActiveTab] = useState("awards-honors");
  const [lightboxImage, setLightboxImage] = useState(null);

  const closeLightbox = () => setLightboxImage(null);

  return (
    <>
      {/* --- PAGE HEADER --- */}
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Awards & Media</h1>
        <p className="center-text-sm">
          Recognition of excellence and contributions to the public discourse.
        </p>
      </section>

      {/* --- TABS --- */}
      <div className="container fade-in-item is-visible">
        <div className="tabs-wrapper">
          <button
            className={`tab-btn ${
              activeTab === "awards-honors" ? "active" : ""
            }`}
            onClick={() => setActiveTab("awards-honors")}
          >
            Awards & Honors
          </button>
          <button
            className={`tab-btn ${
              activeTab === "media-coverage" ? "active" : ""
            }`}
            onClick={() => setActiveTab("media-coverage")}
          >
            Media Coverage
          </button>
          <button
            className={`tab-btn ${
              activeTab === "gallery-photos" ? "active" : ""
            }`}
            onClick={() => setActiveTab("gallery-photos")}
          >
            Gallery
          </button>
        </div>
      </div>

      {/* =========================================================
          TAB 1: AWARDS & HONORS
      ========================================================= */}
      {activeTab === "awards-honors" && (
        <section className="tab-content container active">
          <div className="awards-list">
            {awardsData.map((award) => (
              <Card
                key={award.id}
                className="award-item"
                style={{ padding: "2rem", opacity: 1, transform: "none" }} // Force visible
              >
                <div className="award-icon">
                  <i className={`fa-solid ${award.icon}`}></i>
                </div>
                <div className="award-content" style={{ flexGrow: 1 }}>
                  <div className="award-header">
                    <h3>{award.title}</h3>
                    <span className="award-year">{award.year}</span>
                  </div>
                  <h4 className="award-org">{award.org}</h4>
                  <p>{award.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 2: MEDIA COVERAGE (UPDATED WITH VIDEO SUPPORT)
      ========================================================= */}
      {activeTab === "media-coverage" && (
        <section className="tab-content container active">
          <div className="media-grid">
            {mediaData.map((media) => (
              <Card
                key={media.id}
                className="media-card"
                style={{ padding: 0, opacity: 1, transform: "none" }} // Force visible & remove padding
              >
                <div
                  className="media-img-wrapper"
                  style={{ height: "225px", overflow: "hidden" }}
                >
                  {media.type === "video" ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${media.videoId}`}
                      title={media.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ border: "none" }}
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={media.img}
                        alt={media.title}
                        loading="lazy"
                        onError={(e) =>
                          (e.target.src =
                            "https://placehold.co/600x400?text=News+Clip")
                        }
                      />
                      <div className="media-overlay">
                        <i className="fa-solid fa-newspaper"></i>
                      </div>
                    </>
                  )}
                </div>
                <div className="media-content">
                  <span
                    className={`media-date ${
                      media.type === "video" ? "video-tag" : ""
                    }`}
                  >
                    {media.type === "video" && (
                      <i
                        className="fa-brands fa-youtube"
                        style={{ color: "#ff0000", marginRight: "5px" }}
                      ></i>
                    )}
                    {media.date} | {media.outlet}
                  </span>
                  <h4 style={{ marginTop: "0.5rem" }}>{media.title}</h4>
                  <p>{media.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          TAB 3: GALLERY (MASONRY GRID)
      ========================================================= */}
      {activeTab === "gallery-photos" && (
        <section className="tab-content container active">
          <div className="gallery-masonry">
            {galleryImages.map((photo, index) => (
              <div
                key={index}
                className="gallery-item"
                style={{ opacity: 1, transform: "none" }} // Force visible
                onClick={() => setLightboxImage(photo)}
              >
                <div className="g-img-container">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                  <div className="g-overlay">
                    <span className="g-text">
                      <i className="fa-solid fa-magnifying-glass-plus"></i> View
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* =========================================================
          LIGHTBOX MODAL
      ========================================================= */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <img src={lightboxImage.src} alt={lightboxImage.alt} />
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
