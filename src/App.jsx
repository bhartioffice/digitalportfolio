import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Layout Components (Keep these standard)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AccessibilityTool from "./components/AccessibilityTool";
import BackToTop from "./components/BackToTop";

// --- LAZY LOAD PAGES ---
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Research = lazy(() => import("./pages/Research"));
const Publications = lazy(() => import("./pages/Publications"));
const People = lazy(() => import("./pages/People"));
const Awards = lazy(() => import("./pages/Awards"));
const Contact = lazy(() => import("./pages/Contact"));

// --- LOADING SPINNER COMPONENT ---
const PageLoader = () => (
  <div
    style={{
      height: "60vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: "var(--color-primary)",
    }}
  >
    <div className="loader-spinner"></div> {/* We will add CSS for this */}
  </div>
);

function App() {
  return (
    <>
      <Navbar />

      <main>
        {/* Suspense handles the loading state while the page chunk is fetched */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/people" element={<People />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />

      {/* Tools */}
      <AccessibilityTool />
      <BackToTop />
    </>
  );
}

export default App;
