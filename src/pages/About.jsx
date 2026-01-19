// src/pages/About.jsx
import React from "react";
import "./About.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Prof. Nalin Bharti"
        description="Biography of Prof. Nalin Bharti, Professor of Economics and DPIIT IPR Chair at IIT Patna."
        url="/about"
      />

      {/* --- SECTION 1: HEADER --- */}
      <section className="container spacer-top-lg spacer-bottom-md fade-in-item is-visible">
        <div className="page-header">
          <h1 className="page-title">About Prof. Nalin Bharti</h1>
          <p className="page-subtitle">
            Economist <span className="separator">·</span> Policy Advisor
            <span className="separator">·</span> Institutional Leader
          </p>
          <p
            style={{
              maxWidth: "700px",
              margin: "1rem auto",
              color: "var(--color-text-muted)",
              fontSize: "1.1rem",
            }}
          >
            Bridging economic research with real-world policy impact.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="image-frame">
              <Img
                src="/Photos/photos%20of%20nalin%20sir/profile-photo.webp"
                alt="Professor Nalin Bharti"
                className="profile-img"
              />
            </div>
          </div>

          <div className="bio-intro fade-in-item is-visible">
            <div className="identity-strip">
              Professor of Economics <span className="dot">·</span> DPIIT IPR
              Chair <span className="dot">·</span> IIT Patna
            </div>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginBottom: "1.2rem",
              }}
            >
              Prof. Nalin Bharti is a distinguished economist and policy
              scholar, currently serving as{" "}
              <strong>Professor of Economics</strong> and{" "}
              <strong>DPIIT IPR Chair Professor</strong> at the Indian Institute
              of Technology (IIT) Patna.
            </p>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}
            >
              His academic work lies at the intersection of international trade,
              macroeconomic reform, and IPR, translating rigorous research into
              practical policy solutions.
            </p>
            <div className="human-story-quote">
              "His work is driven by a commitment to using economic research as
              a tool for societal progress and inclusive development."
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: NARRATIVE CARDS --- */}
      <section className="container spacer-bottom-lg">
        <div className="bio-narrative-container">
          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <h3 className="nc-title">Academic Foundations</h3>
            </div>
            <div className="nc-content">
              <p>
                Developing deep expertise in international economics and trade
                negotiations.
              </p>
            </div>
          </div>
          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <h3 className="nc-title">Research & Policy</h3>
            </div>
            <div className="nc-content">
              <p>
                Focusing on the real-world impacts of trade agreements,
                privatization, and IPR regimes.
              </p>
            </div>
          </div>
          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-landmark"></i>
              </div>
              <h3 className="nc-title">Institutional Leadership</h3>
            </div>
            <div className="nc-content">
              <p>
                As DPIIT IPR Chair, strengthening India’s intellectual property
                ecosystem through research.
              </p>
            </div>
          </div>
          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="nc-title">Vision & Impact</h3>
            </div>
            <div className="nc-content">
              <p>
                Viewing economic research as a catalyst for sustainable
                development and social inclusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: TIMELINE --- */}
      <section className="container spacer-top-md spacer-bottom-lg">
        <div className="journey-section fade-in-section is-visible">
          <h3 className="section-subtitle">My Academic Odyssey</h3>

          <div className="tree-container">
            <div className="tree-trunk"></div>

            {/* 1. VISITING PROF (IMPRI) */}
            <div className="tree-leaf left current">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/impri-logo.webp"
                  alt="IMPRI Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-status">Current Role</span>
                  <span className="leaf-date">Present</span>
                  <h4>Visiting Professor</h4>
                  <p>IMPRI, New Delhi</p>
                </div>
              </div>
            </div>

            {/* 2. IPR CHAIR (DPIIT) */}
            <div className="tree-leaf right current">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/dpiit-logo.jpg"
                  alt="DPIIT Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-status">Current Role</span>
                  <span className="leaf-date">Apr 2023 - Present</span>
                  <h4>DPIIT IPR Chair Professor</h4>
                  <p>Ministry of Commerce & Industry, Govt. of India</p>
                </div>
              </div>
            </div>

            {/* 3. PROFESSOR (IITP) */}
            <div className="tree-leaf left current">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/iitp-logo.png"
                  alt="IIT Patna Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-status">Current Role</span>
                  <span className="leaf-date">Feb 2022 - Present</span>
                  <h4>Professor of Economics</h4>
                  <p>Indian Institute of Technology Patna</p>
                </div>
              </div>
            </div>

            {/* 4. ASSOCIATE PROF */}
            <div className="tree-leaf right">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/iitp-logo.png"
                  alt="IIT Patna Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-date">Dec 2015 - Feb 2022</span>
                  <h4>Associate Professor</h4>
                  <p>Indian Institute of Technology Patna</p>
                </div>
              </div>
            </div>

            {/* 5. ASSISTANT PROF */}
            <div className="tree-leaf left">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/iitp-logo.png"
                  alt="IIT Patna Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-date">Dec 2008 - Dec 2015</span>
                  <h4>Assistant Professor</h4>
                  <p>Indian Institute of Technology Patna</p>
                </div>
              </div>
            </div>

            {/* 6. NALSAR */}
            <div className="tree-leaf right">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/nalsar-logo.webp"
                  alt="NALSAR Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-date">May 2006 - Dec 2008</span>
                  <h4>Lecturer (Law & Economics)</h4>
                  <p>NALSAR University of Law, Hyderabad</p>
                </div>
              </div>
            </div>

            {/* 7. HIDAYATULLAH */}
            <div className="tree-leaf left">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/hidayatullah-logo.jpg"
                  alt="HNLU Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-date">Feb 2005 - May 2006</span>
                  <h4>Assistant Professor</h4>
                  <p>Hidayatullah National Law University, Raipur</p>
                </div>
              </div>
            </div>

            {/* 8. FINANCE COMMISSION */}
            <div className="tree-leaf right">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <Img
                  src="/Photos/IPR/logos/finance_commission-logo.jpg"
                  alt="Finance Commission Logo"
                  className="leaf-logo"
                />
                <div className="leaf-content">
                  <span className="leaf-date">2004 - Nov 2004</span>
                  <h4>Research Associate</h4>
                  <p>12th Finance Commission of India</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: EDUCATION --- */}
        <div className="education-section fade-in-section is-visible">
          <h3 className="section-subtitle">Foundations of Expertise</h3>
          <div className="edu-ladder">
            {/* PHD */}
            <div className="edu-step">
              <div className="edu-icon">
                <Img src="/Photos/IPR/logos/JNU-Logo.jpg" alt="JNU Logo" />
              </div>
              <div className="edu-content">
                <span className="edu-year">1999 - 2004</span>
                <h4>Ph.D. (South Asian Studies)</h4>
                <p>Jawaharlal Nehru University (JNU)</p>
                <span className="edu-note">Thesis: Privatization of SOEs</span>
              </div>
            </div>

            {/* MPHIL */}
            <div className="edu-step">
              <div className="edu-icon">
                <Img src="/Photos/IPR/logos/JNU-Logo.jpg" alt="JNU Logo" />
              </div>
              <div className="edu-content">
                <span className="edu-year">1997 - 1999</span>
                <h4>M.Phil (South Asian Studies)</h4>
                <p>Jawaharlal Nehru University (JNU)</p>
              </div>
            </div>

            {/* UGC NET */}
            <div className="edu-step">
              <div className="edu-icon">
                <Img src="/Photos/IPR/logos/UGC-NET.jpg" alt="UGC Logo" />
              </div>
              <div className="edu-content">
                <span className="edu-year">1999</span>
                <h4>UGC-NET (Economics)</h4>
                <p>Qualified for Lectureship</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
