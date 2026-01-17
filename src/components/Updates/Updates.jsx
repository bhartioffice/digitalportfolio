import "./Updates.css";

import React from "react";

const Updates = () => {
  return (
    <section className="updates-section container fade-in-section is-visible">
      <div className="updates-header">
        <h2>Recent Updates</h2>
        {/* Link to Awards page */}
        <a href="/awards" className="view-all-link">
          View All <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="card-list">
        <div className="card-item fade-in-item is-visible">
          <h4>Panelist: Union Budget 2025-26</h4>
          <p>
            <strong>FEB 2025:</strong> Discussed Education, S&T, and R&D
            allocations in the Union Budget with IMPRI.
          </p>
        </div>

        <div className="card-item fade-in-item is-visible">
          <h4>New Publication in 'Economies'</h4>
          <p>
            <strong>JAN 2025:</strong> Paper titled "The Impact of EU Trade
            Policies on Its Textile and Clothing Imports" published in MDPI
            Economies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Updates;
