import React, { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga4";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import AccessibilityTool from "./components/AccessibilityTool";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

// --- LAZY LOAD PAGES ---
// This splits the code so the browser only downloads what it needs
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Research = lazy(() => import("./pages/Research"));
const Publications = lazy(() => import("./pages/Publications"));
const People = lazy(() => import("./pages/People"));
const Awards = lazy(() => import("./pages/Awards"));
const Contact = lazy(() => import("./pages/Contact"));

ReactGA.initialize("G-TYL4FY2KGP");

// Simple Loading Spinner to show while the new page downloads
const Loading = () => (
  <div
    style={{
      height: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.2rem",
      color: "#64748b",
    }}
  >
    <i
      className="fa-solid fa-spinner fa-spin"
      style={{ marginRight: "10px" }}
    ></i>
    Loading...
  </div>
);

function App() {
  const location = useLocation();
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <SmoothScroll>
      <ScrollProgress />
      <Header />
      <ScrollToTop />
      <AccessibilityTool />

      {/* Suspense handles the loading state while the lazy page is fetched */}
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/people" element={<People />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>

      <Footer />
      <BackToTop />
    </SmoothScroll>
  );
}

export default App;
