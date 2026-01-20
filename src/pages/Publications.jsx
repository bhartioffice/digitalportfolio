import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import "./Publications.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

// Import extracted data
import {
  booksData,
  chaptersData,
  articlesData,
  conferencesData,
} from "../data/publicationsData";

const Publications = () => {
  const [activeTab, setActiveTab] = useState("books");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // --- LISTENER LOGIC ADDED HERE ---
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const tab = location.hash.replace("#", "");
      if (["books", "chapters", "articles", "conferences"].includes(tab)) {
        setActiveTab(tab);
        // Clear search so the user sees the tab content
        setSearchQuery("");
        setActiveFilters([]);

        // Optional: Scroll to content
        const element = document.querySelector(".tab-content");
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, [location]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  // --- SEARCH LOGIC ---
  const allData = useMemo(() => {
    return [
      ...booksData.map((d) => ({ ...d, category: "Book" })),
      ...chaptersData.map((d) => ({ ...d, category: "Chapter" })),
      ...articlesData.map((d) => ({ ...d, category: "Article" })),
      ...conferencesData.map((d) => ({ ...d, category: "Conference" })),
    ];
  }, []);

  const toggleFilter = (filterType) => {
    if (activeFilters.includes(filterType)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterType));
    } else {
      setActiveFilters([...activeFilters, filterType]);
    }
  };

  // UX FIX: Clear ONLY the text, keep the filters
  const clearTextOnly = () => {
    setSearchQuery("");
  };

  // This clears everything (used for "Back to Publications")
  const resetAll = () => {
    setSearchQuery("");
    setActiveFilters([]);
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery && activeFilters.length === 0) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return allData.filter((item) => {
      if (activeFilters.length > 0 && !activeFilters.includes(item.category))
        return false;
      if (!searchQuery) return true;
      const searchableText = `${item.title} ${item.authors} ${item.year} ${
        item.category
      } ${item.venue || ""} ${item.publisher || ""}`.toLowerCase();
      return searchableText.includes(lowerQuery);
    });
  }, [searchQuery, activeFilters, allData]);

  return (
    <>
      <SEO
        title="Publications"
        description="List of books, journal articles, and conference papers authored by Prof. Nalin Bharti on International Trade and Economics."
        url="/publications"
      />
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Scholarly Contributions</h1>
        <p className="center-text-sm">
          A curated collection of research works, books, and conference papers.
        </p>
      </section>

      {/* --- SEARCH BAR --- */}
      <div className="container fade-in-item is-visible search-section">
        <div className="search-box-wrapper">
          <div className="search-container">
            <div className="search-input-group">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>

              <div className="search-chips-input">
                {activeFilters.map((f) => (
                  <span
                    key={f}
                    className={`search-chip chip-${f}`}
                    onClick={() => toggleFilter(f)}
                  >
                    {f} <i className="fa-solid fa-xmark"></i>
                  </span>
                ))}

                <input
                  type="text"
                  id="globalSearch"
                  placeholder="Search papers, books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* UX FIX: Clear Text Button */}
                {searchQuery && (
                  <button
                    onClick={clearTextOnly}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#999",
                      cursor: "pointer",
                      padding: "0 8px",
                    }}
                    aria-label="Clear search text"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </button>
                )}
              </div>

              <button
                className={`filter-toggle-btn ${
                  isFilterMenuOpen ? "active" : ""
                }`}
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              >
                <i className="fa-solid fa-sliders"></i>
              </button>
            </div>

            <div className={`filter-menu ${isFilterMenuOpen ? "show" : ""}`}>
              <div className="filter-options">
                {["Book", "Chapter", "Article", "Conference"].map((type) => (
                  <button
                    key={type}
                    className={`filter-option ${
                      activeFilters.includes(type) ? "selected" : ""
                    }`}
                    onClick={() => toggleFilter(type)}
                  >
                    {type}s
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA (Search Results OR Tabs) --- */}
      {searchQuery || activeFilters.length > 0 ? (
        <div className="container" style={{ display: "block" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.5rem",
            }}
          >
            <h3 className="section-subtitle" style={{ marginBottom: 0 }}>
              Search Results ({filteredResults.length})
            </h3>

            {/* "Reset All" logic */}
            <Button variant="text" onClick={resetAll} className="text-sm">
              <i className="fa-solid fa-rotate-left"></i> Reset All
            </Button>
          </div>

          <div className="publication-list" id="search-results-list">
            {filteredResults.map((item) => (
              <Card
                key={item.id}
                className={`is-search-result search-result-${item.category}`}
                style={{ opacity: 1, transform: "none" }} // FORCE VISIBILITY
              >
                <span className="source-tag">{item.category}</span>
                <h5>{item.title}</h5>
                <p>{item.subtitle || item.venue || item.journal}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "auto",
                  }}
                >
                  <span style={{ fontWeight: "800" }}>{item.year}</span>
                  {item.link && item.link !== "#" && (
                    <Button variant="text" href={item.link} target="_blank">
                      View
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {filteredResults.length === 0 && (
            <p
              className="center-text"
              style={{ color: "#666", marginTop: "2rem" }}
            >
              No results found. Try clearing filters or adjusting your search
              term.
            </p>
          )}
        </div>
      ) : (
        /* --- NORMAL TABS VIEW --- */
        <>
          <div className="container fade-in-item is-visible">
            <div className="tabs-wrapper">
              {["books", "chapters", "articles", "conferences"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "chapters"
                    ? "Book Chapters"
                    : tab === "articles"
                    ? "Journal Articles"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: BOOKS */}
          {activeTab === "books" && (
            <section className="tab-content container active">
              <div className="modern-book-grid">
                {booksData.map((book) => (
                  <Card
                    key={book.id}
                    className="book-card-pro"
                    style={{
                      overflow: "visible",
                      opacity: 1,
                      transform: "none",
                    }}
                  >
                    <div className="book-cover-container">
                      <div className="book-cover-3d">
                        <Img
                          src={book.img}
                          alt={book.title}
                          loading="lazy"
                          onError={(e) =>
                            (e.target.src =
                              "https://placehold.co/300x450?text=Cover")
                          }
                        />
                      </div>
                    </div>
                    <div className="book-info-pro">
                      <div className="book-badges">
                        <span className="b-badge year">{book.year}</span>
                      </div>
                      <h4>{book.title}</h4>
                      <p className="b-subtitle">{book.subtitle}</p>
                      <div className="b-action">
                        {book.link !== "#" ? (
                          <Button
                            variant="text"
                            href={book.link}
                            target="_blank"
                          >
                            View Book{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: CHAPTERS */}
          {activeTab === "chapters" && (
            <section className="tab-content container active">
              <div className="chapter-grid">
                {chaptersData.map((chap) => (
                  <Card
                    key={chap.id}
                    className="chapter-card"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="chapter-img">
                      <Img
                        src={chap.img}
                        alt="Cover"
                        loading="lazy"
                        onError={(e) =>
                          (e.target.src =
                            "https://placehold.co/150x220?text=Chapter")
                        }
                      />
                    </div>
                    <div className="chapter-content">
                      <span className="pub-year-badge">{chap.year}</span>
                      <h5>{chap.title}</h5>
                      <p>
                        In <em>"{chap.book}"</em>
                      </p>
                      {chap.link && chap.link !== "#" && (
                        <Button
                          variant="text"
                          href={chap.link}
                          target="_blank"
                          className="journal-link"
                        >
                          View Chapter{" "}
                          <i className="fa-solid fa-arrow-right"></i>
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* TAB 3: ARTICLES */}
          {activeTab === "articles" && (
            <section className="tab-content container active">
              <div className="publication-grid numbered-pub-grid">
                {articlesData.map((art) => (
                  <Card
                    key={art.id}
                    className="pub-item"
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="pub-header">
                      <span className="pub-year-badge">{art.year}</span>
                      <span className={`tag ${art.tag.toLowerCase()}`}>
                        {art.tag}
                      </span>
                    </div>
                    <div className="pub-content">
                      <h5>{art.title}</h5>
                      <p dangerouslySetInnerHTML={{ __html: art.journal }}></p>
                      <span className="pub-authors">{art.authors}</span>
                      <div
                        style={{
                          marginTop: "auto",
                          paddingTop: "1rem",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {art.link && art.link !== "#" ? (
                          <Button
                            variant="text"
                            href={art.link}
                            target="_blank"
                            className="journal-link"
                          >
                            View Publication{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </Button>
                        ) : (
                          <span
                            className="journal-link"
                            style={{ color: "#999", cursor: "default" }}
                          >
                            Link N/A
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* TAB 4: CONFERENCES */}
          {activeTab === "conferences" && (
            <section className="tab-content container active">
              <div className="timeline-container">
                {conferencesData.map((conf, index) => {
                  const showYear =
                    index === 0 ||
                    conferencesData[index - 1].year !== conf.year;
                  return (
                    <React.Fragment key={conf.id}>
                      {showYear && (
                        <div className="timeline-year-marker fade-in-item is-visible">
                          {conf.year}
                        </div>
                      )}
                      <div
                        className="timeline-item"
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <Card className="tl-content">
                          <div
                            className="tag-group"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            <span
                              className={`tag ${
                                conf.tag.toLowerCase().includes("international")
                                  ? "international"
                                  : "national"
                              }`}
                            >
                              {conf.tag}
                            </span>
                            {conf.extraTag && (
                              <span
                                className={`tag ${
                                  conf.extraTag.includes("Poster")
                                    ? "poster"
                                    : conf.extraTag.includes("Plenary")
                                    ? "plenary"
                                    : "vc"
                                }`}
                                style={{ marginLeft: "5px" }}
                              >
                                {conf.extraTag}
                              </span>
                            )}
                          </div>
                          <h5>{conf.title}</h5>
                          <p className="tl-venue">
                            <i className="fa-solid fa-landmark"></i>{" "}
                            {conf.venue}
                          </p>
                          {conf.assoc && (
                            <div className="tl-assoc">
                              <strong>Note:</strong> {conf.assoc}
                            </div>
                          )}
                          <p className="tl-meta">
                            <i className="fa-regular fa-calendar"></i>{" "}
                            {conf.date} &nbsp;|&nbsp;
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            {conf.location}
                          </p>
                          <p className="tl-authors">{conf.authors}</p>
                        </Card>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Publications;
