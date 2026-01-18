import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Feature Components
import BackToTop from "./components/BackToTop";
import AccessibilityTool from "./components/AccessibilityTool";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Research from "./pages/Research";
import Publications from "./pages/Publications";
import People from "./pages/People";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";

function App() {
  return (
    <SmoothScroll>
      <ScrollProgress />

      <Header />

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
