import React from "react";

const ArticleCard = ({ data }) => {
  return (
    <div className="article-tech-card">
      {/* 1. LEFT SIDEBAR: The "Data Track" with Index Number */}
      <div className="article-index-track">
        <div className="tech-decoration-line"></div>
      </div>

      {/* 2. MAIN CONTENT: The "System Record" */}
      <div className="article-body">
        {/* Header: Meta Data in "Code" Style */}
        <div className="article-tech-header">
          <span className="tech-year">[{data.year}]</span>
          <span className={`tech-tag ${data.tag?.toLowerCase()}`}>
            {data.tag || "JOURNAL"}
          </span>
        </div>

        {/* Title: Professional Academic Serif */}
        <h5 className="article-title">{data.title}</h5>

        {/* Details: Labeled like variables */}
        <div className="article-details">
          <div className="detail-row">
            <span className="detail-label">SOURCE ::</span>
            <span
              className="detail-value"
              dangerouslySetInnerHTML={{ __html: data.journal }}
            ></span>
          </div>
          <div className="detail-row">
            <span className="detail-label">AUTHORS ::</span>
            <span className="detail-value">{data.authors}</span>
          </div>
        </div>

        {/* Action: Command Button */}
        <div className="article-action-row">
          {data.link && data.link !== "#" ? (
            <a
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="tech-access-btn"
            >
              <span className="btn-text">INITIALIZE_READ_PROTOCOL</span>
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          ) : (
            <span className="tech-status-offline">
              <i className="fa-solid fa-lock"></i> ACCESS_RESTRICTED
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
