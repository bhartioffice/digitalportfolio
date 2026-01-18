// src/App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Feature Components
import BackToTop from "./components/BackToTop";
import AccessibilityTool from "./components/AccessibilityTool";
import SmoothScroll from "./components/SmoothScroll";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";

function App() {
  // Scroll Progress Logic
  const [scrollWidth, setScrollWidth] = useState(0);

  const handleScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollWidth(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SmoothScroll>
      {" "}
      {/* Wraps the entire app for smooth scrolling */}
      {/* Scroll Progress Bar */}
      <div id="scroll-progress-bar" style={{ width: `${scrollWidth}%` }}></div>
      <Navbar />
      <ScrollToTop />
      <AccessibilityTool />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/research" element={<Research />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/people" element={<People />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <BackToTop />
    </SmoothScroll>
  );
}

export default App;
