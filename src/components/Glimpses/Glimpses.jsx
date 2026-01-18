import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../Img";
import "./Glimpses.css";

// Placeholder data - You will replace these paths with your actual photos of famous personalities
const glimpsesData = [
  {
    id: 1,
    img: "/Photos/gallery/john_taylor_stanford.JPG", // Replace with actual file name
    caption:
      "With Prof. John B. Taylor, Stanford University, renowned for the Taylor Rule in monetary policy.",
  },
  {
    id: 2,
    img: "/Photos/gallery/nobel_laureate_vernon_smith.JPG", // Replace with actual file name
    caption:
      "With Nobel Laureate Prof. Vernon L. Smith (Economics, 2002) at an academic conference.",
  },
  {
    id: 3,
    img: "/Photos/gallery/panagariya_16th_fc.jpg", // Replace with actual file name
    caption:
      "With Dr. Arvind Panagariya, Chairman, 16th Finance Commission, at Nalanda University",
  },
];

const Glimpses = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => setSelectedImage(image);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <>
      <section className="glimpses-section fade-in-section is-visible">
        <div className="container">
          <div className="glimpses-header">
            <h2>Glimpses with Visionaries</h2>
            <p>Moments of academic dialogue and policy discourse.</p>
          </div>

          <div className="glimpses-grid">
            {glimpsesData.map((item) => (
              // CHANGED: From Link to div with onClick
              <div
                key={item.id}
                className="glimpse-card"
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
              >
                <div className="glimpse-img-wrapper">
                  <Img
                    src={item.img}
                    alt={item.caption}
                    loading="lazy"
                    onError={(e) =>
                      (e.target.src =
                        "https://placehold.co/400x300?text=VIP+Interaction")
                    }
                  />
                  <div className="glimpse-overlay">
                    <span className="view-icon">
                      <i className="fa-solid fa-magnifying-glass-plus"></i>
                    </span>
                  </div>
                </div>
                <p className="glimpse-caption">{item.caption}</p>
              </div>
            ))}
          </div>

          <div className="center-btn">
            {/* Keeps the link to the full gallery page */}
            <Link to="/awards#gallery" className="btn-text-arrow">
              View Full Gallery <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <Img src={selectedImage.img} alt={selectedImage.caption} />
            <div className="lightbox-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Glimpses;
