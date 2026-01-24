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
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

// Research
const Research = lazy(() => import("./pages/Research"));
const ResearchDetail = lazy(() => import("./pages/ResearchDetail"));

// Publications
const Publications = lazy(() => import("./pages/Publications"));
const PublicationDetail = lazy(() => import("./pages/PublicationDetail"));

// People
const People = lazy(() => import("./pages/People"));
const PersonDetail = lazy(() => import("./pages/PersonDetail"));

// Awards & Media
const Awards = lazy(() => import("./pages/Awards"));
const AwardDetail = lazy(() => import("./pages/AwardDetail")); // New Import

const Contact = lazy(() => import("./pages/Contact"));

ReactGA.initialize("G-TYL4FY2KGP");

// Simple Loading Spinner
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

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Research Routes */}
          <Route path="/research" element={<Research />} />
          <Route path="/research/:id" element={<ResearchDetail />} />

          {/* Publications Routes */}
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:id" element={<PublicationDetail />} />

          {/* People Routes */}
          <Route path="/people" element={<People />} />
          <Route path="/people/:id" element={<PersonDetail />} />

          {/* Awards & Media Routes */}
          <Route path="/awards" element={<Awards />} />
          <Route path="/awards/:id" element={<AwardDetail />} />

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
