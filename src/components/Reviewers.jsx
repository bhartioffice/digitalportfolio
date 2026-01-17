import React from "react";
import Img from "../components/Img";

const Reviewers = () => {
  // List of logos (filenames based on your folder structure)
  const logos = [
    "taylor_and_francis.png",
    "sag.png",
    "springer-logo.png",
    "emerald.png",
    "inderscience.jpg",
    "scopus.png",
    "P-IGI-Global.png",
  ];

  return (
    <section className="logos-section fade-in-section is-visible">
      <div className="container">
        <h3 className="logos-title">Reviewer for Leading Academic Journals</h3>
        <div className="logo-marquee">
          <div className="logo-track">
            {/* Render logos once */}
            {logos.map((logo, index) => (
              <Img
                key={`logo-${index}`}
                src={`/Photos/logos/${logo}`}
                alt="Journal Logo"
                loading="lazy"
              />
            ))}
            {/* Render logos again to create the seamless loop effect */}
            {logos.map((logo, index) => (
              <Img
                key={`logo-dup-${index}`}
                src={`/Photos/logos/${logo}`}
                alt="Journal Logo"
                loading="lazy"
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviewers;
