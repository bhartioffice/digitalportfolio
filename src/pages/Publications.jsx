import React, { useState, useMemo, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import "./Publications.css";
import SEO from "../components/SEO";

// Import Sub-Components
import BookCard from "../components/publications/BookCard";
import ChapterCard from "../components/publications/ChapterCard";
import ArticleCard from "../components/publications/ArticleCard";
import ConferenceCard from "../components/publications/ConferenceCard";

// Import Data
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
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Ref for Auto-Scroll
  const resultsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const tab = location.hash.replace("#", "");
      if (["books", "chapters", "articles", "conferences"].includes(tab)) {
        setActiveTab(tab);
        setSearchQuery("");
        setActiveFilters([]);
        const element = document.querySelector(".tab-content");
        if (element) {
          setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
        }
      }
    }
  }, [location]);

  // Scroll to top when tab changes (Browsing Mode only)
  useEffect(() => {
    if (!searchQuery) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [activeTab, searchQuery]);

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

  // Keyboard Killer: Forces mobile keyboard to close
  const toggleFilterMenu = () => {
    if (!isFilterMenuOpen) {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
      }
    }
    setIsFilterMenuOpen(!isFilterMenuOpen);
  };

  const clearTextOnly = () => setSearchQuery("");
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

  // Smart Fallback Logic
  const globalMatches = useMemo(() => {
    if (
      !searchQuery ||
      filteredResults.length > 0 ||
      activeFilters.length === 0
    )
      return [];

    const lowerQuery = searchQuery.toLowerCase();
    return allData.filter((item) => {
      const searchableText = `${item.title} ${item.authors} ${item.year} ${
        item.category
      } ${item.venue || ""} ${item.publisher || ""}`.toLowerCase();
      return searchableText.includes(lowerQuery);
    });
  }, [searchQuery, allData, filteredResults.length, activeFilters.length]);

  const groupedResults = useMemo(() => {
    if (filteredResults.length === 0) return {};
    return {
      Book: filteredResults.filter((i) => i.category === "Book"),
      Chapter: filteredResults.filter((i) => i.category === "Chapter"),
      Article: filteredResults.filter((i) => i.category === "Article"),
      Conference: filteredResults.filter((i) => i.category === "Conference"),
    };
  }, [filteredResults]);

  // Close filter menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isFilterMenuOpen && !e.target.closest(".filter-ui-group")) {
        setIsFilterMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFilterMenuOpen]);

  // Handle "View All" Click with Auto-Scroll
  const handleViewAllFallback = () => {
    setActiveFilters([]);
    // Smooth scroll to results after state update
    setTimeout(() => {
      if (resultsRef.current) {
        resultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  };

  return (
    <>
      <SEO
        title="Publications"
        description="Scholarly contributions by Prof. Nalin Bharti."
        url="/publications"
      />

      {!searchQuery && (
        <section className="page-header container fade-in-item is-visible">
          <h1 className="page-title">Scholarly Contributions</h1>
          <p className="center-text-sm">
            A curated collection of research works, books, and conference
            papers.
          </p>
        </section>
      )}

      {/* --- SEARCH BAR --- */}
      <div
        className={`container search-section ${
          isSearchFocused ? "search-focused" : ""
        }`}
      >
        <div className="search-box-wrapper">
          <div className="search-row-layout">
            <div
              className={`search-input-pill ${
                isSearchFocused ? "focused" : ""
              }`}
            >
              <i className="fa-solid fa-magnifying-glass search-icon-input"></i>
              <input
                type="text"
                id="globalSearch"
                className="clean-search-input"
                placeholder={
                  activeTab === "books"
                    ? "shivadiya, 2014, conference, etc...        (Global search) "
                    : "Search publications..."
                }
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  onClick={clearTextOnly}
                  className="search-clear-btn"
                  aria-label="Clear text"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>

            <div className="filter-ui-group">
              <button
                className={`filter-circle-btn ${
                  isFilterMenuOpen || activeFilters.length > 0 ? "active" : ""
                }`}
                onClick={toggleFilterMenu}
                aria-label="Filters"
              >
                <i className="fa-solid fa-sliders"></i>
                {activeFilters.length > 0 && (
                  <span className="filter-dot"></span>
                )}
              </button>

              <div className={`filter-menu ${isFilterMenuOpen ? "show" : ""}`}>
                <div className="filter-header-mobile">
                  <span>Filter Content</span>
                  <button
                    onClick={() => setActiveFilters([])}
                    className="sheet-clear-btn"
                  >
                    Reset
                  </button>
                </div>

                <div className="filter-options">
                  {["Book", "Chapter", "Article", "Conference"].map((type) => (
                    <button
                      key={type}
                      className={`filter-option ${
                        activeFilters.includes(type) ? "selected" : ""
                      }`}
                      onClick={() => toggleFilter(type)}
                    >
                      <span className="opt-text">{type}s</span>
                      {activeFilters.includes(type) ? (
                        <i className="fa-solid fa-circle-check opt-icon checked"></i>
                      ) : (
                        <i className="fa-regular fa-circle opt-icon"></i>
                      )}
                    </button>
                  ))}
                </div>

                <div className="sheet-footer">
                  <button
                    className="sheet-done-btn"
                    onClick={() => setIsFilterMenuOpen(false)}
                  >
                    View{" "}
                    {filteredResults.length > 0
                      ? `${filteredResults.length} Results`
                      : "Results"}
                  </button>
                </div>
              </div>

              <div
                className={`filter-overlay ${isFilterMenuOpen ? "show" : ""}`}
                onClick={() => setIsFilterMenuOpen(false)}
              ></div>
            </div>
          </div>

          <div
            className={`active-filters-wrapper ${
              activeFilters.length > 0 ? "expanded" : ""
            }`}
          >
            <div className="active-filters-row">
              {activeFilters.map((f) => (
                <span
                  key={f}
                  className={`search-chip chip-${f}`}
                  onClick={() => toggleFilter(f)}
                >
                  {f} <i className="fa-solid fa-xmark"></i>
                </span>
              ))}
              <button
                className="clear-filters-link"
                onClick={() => setActiveFilters([])}
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      {searchQuery || activeFilters.length > 0 ? (
        <div
          className="container"
          ref={resultsRef} // Auto-Scroll Target
          style={{ display: "block", minHeight: "60vh" }}
        >
          {/* POLISH: More Prominent Header & Button */}
          <div className="search-results-header">
            <h3 className="section-subtitle">
              Found {filteredResults.length} Results
            </h3>
            <button onClick={resetAll} className="btn-reset-prominent">
              <i className="fa-solid fa-xmark"></i> Clear Search
            </button>
          </div>

          {filteredResults.length === 0 ? (
            <div className="no-results-state">
              {/* SMART FALLBACK */}
              {searchQuery &&
              activeFilters.length > 0 &&
              globalMatches.length > 0 ? (
                <div className="fade-in-item is-visible">
                  <div className="no-results-icon" style={{ color: "#d97706" }}>
                    <i className="fa-regular fa-lightbulb"></i>
                  </div>
                  <h4>
                    No {activeFilters.map((f) => f + "s").join(" or ")} match "
                    {searchQuery}"
                  </h4>
                  <p style={{ maxWidth: "400px", margin: "0 auto 1.5rem" }}>
                    However, we found{" "}
                    <strong>{globalMatches.length} results</strong> in other
                    categories.
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <Button variant="primary" onClick={handleViewAllFallback}>
                      View All {globalMatches.length} Results
                    </Button>
                    <button
                      onClick={resetAll}
                      className="clear-search-link"
                      style={{ fontSize: "0.85rem", opacity: 0.8 }}
                    >
                      Clear Search Completely
                    </button>
                  </div>
                </div>
              ) : (
                /* STANDARD DEAD END */
                <>
                  <div className="no-results-icon">
                    <i className="fa-solid fa-magnifying-glass-minus"></i>
                  </div>
                  <h4>No matches found for "{searchQuery}"</h4>
                  <p>Try checking your spelling or clearing filters.</p>
                  <Button variant="outline" onClick={resetAll}>
                    Clear Search
                  </Button>
                </>
              )}
            </div>
          ) : (
            <div className="grouped-results-container">
              {/* Ordered Groups with Highlighter Props Passed */}
              {["Book", "Chapter", "Article", "Conference"].map((cat) => {
                const items = groupedResults[cat];
                if (!items || items.length === 0) return null;

                return (
                  <div className="result-group" key={cat}>
                    <div className="group-header">
                      <h4 className="group-title">{cat}s</h4>
                      <span className="count-pill">{items.length}</span>
                    </div>
                    <div className="group-divider"></div>

                    <div
                      className={
                        cat === "Book"
                          ? "modern-book-grid"
                          : cat === "Chapter"
                          ? "chapter-grid"
                          : cat === "Article"
                          ? "publication-grid numbered-pub-grid"
                          : "conference-grid"
                      }
                    >
                      {items.map((item) => {
                        // PASSING HIGHLIGHT PROP TO ALL CARDS
                        if (cat === "Book")
                          return (
                            <BookCard
                              key={item.id}
                              data={item}
                              highlight={searchQuery}
                            />
                          );
                        if (cat === "Chapter")
                          return (
                            <ChapterCard
                              key={item.id}
                              data={item}
                              highlight={searchQuery}
                            />
                          );
                        if (cat === "Article")
                          return (
                            <ArticleCard
                              key={item.id}
                              data={item}
                              highlight={searchQuery}
                            />
                          );

                        // FIXED: Direct return for Conferences (No wrapper div)
                        return (
                          <ConferenceCard
                            key={item.id}
                            data={item}
                            highlight={searchQuery}
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        /* STANDARD TABS VIEW */
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

          {activeTab === "books" && (
            <section className="tab-content container active">
              <div className="modern-book-grid">
                {booksData.map((item) => (
                  <BookCard key={item.id} data={item} />
                ))}
              </div>
            </section>
          )}

          {activeTab === "chapters" && (
            <section className="tab-content container active">
              <div className="chapter-grid">
                {chaptersData.map((item) => (
                  <ChapterCard key={item.id} data={item} />
                ))}
              </div>
            </section>
          )}

          {activeTab === "articles" && (
            <section className="tab-content container active">
              <div className="publication-grid numbered-pub-grid">
                {articlesData.map((item) => (
                  <ArticleCard
                    key={item.id}
                    data={{ ...item, category: "Article" }}
                  />
                ))}
              </div>
            </section>
          )}

          {activeTab === "conferences" && (
            <section className="tab-content container active">
              {/* NEW GRID LAYOUT (Replaces Timeline) */}
              <div className="conference-grid">
                {conferencesData.map((conf) => (
                  <ConferenceCard key={conf.id} data={conf} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Publications;
