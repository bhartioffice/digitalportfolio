import React from "react";
import "./About.css";
import Img from "../components/Img";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="About Prof. Nalin Bharti"
        description="Biography of Prof. Nalin Bharti, Professor of Economics and DPIIT IPR Chair at IIT Patna. Learn about his academic journey and policy impact."
        url="/about"
      />
      {/* --- SECTION 1: HEADER & BIO --- */}
      <section className="container spacer-top-lg spacer-bottom-md fade-in-item is-visible">
        <div
          className="page-header"
          style={{ paddingBottom: "2rem", textAlign: "center" }}
        >
          <h1 className="page-title">About Prof. Nalin Bharti</h1>

          <p className="page-subtitle">
            Economist <span className="separator">·</span> Policy Advisor
            <span className="separator">·</span> Institutional Leader
          </p>

          <p
            className="center-text-sm"
            style={{
              maxWidth: "700px",
              margin: "1rem auto 0",
              color: "var(--color-text-muted)",
              fontSize: "1.1rem",
              opacity: 0.9,
            }}
          >
            Bridging economic research with real-world policy impact.
          </p>
        </div>

        <div className="about-grid" style={{ marginBottom: "3rem" }}>
          <div className="about-image-wrapper">
            <div className="image-frame">
              {/* FIXED IMAGE PATH */}
              <Img
                src="/Photos/photos%20of%20nalin%20sir/profile-photo.webp"
                alt="Professor Nalin Bharti"
                className="profile-img"
                width="400"
                height="400"
              />
            </div>
          </div>

          <div className="bio-intro fade-in-item is-visible">
            <div className="identity-strip">
              Professor of Economics <span className="dot">·</span> DPIIT IPR
              Chair
              <span className="dot">·</span> IIT Patna
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
              macroeconomic reform, intellectual property rights, and
              development policy, with a strong focus on translating rigorous
              research into practical policy solutions.
            </p>

            <div className="human-story-quote">
              "His work is driven by a commitment to using economic research as
              a tool for societal progress and inclusive development. Through
              his teaching, research, and institutional leadership, he has
              contributed to shaping policy discourse at national and
              international levels."
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
                Prof. Bharti’s academic journey reflects a sustained pursuit of
                excellence in economic analysis and policy research. Over the
                years, he has developed deep expertise in international
                economics, trade negotiations, intellectual property systems,
                and macroeconomic policy frameworks.
              </p>
              <p>
                He has been actively involved in teaching and mentoring students
                across undergraduate, postgraduate, and doctoral programs,
                helping shape the next generation of economists and policy
                professionals.
              </p>
            </div>
          </div>

          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <h3 className="nc-title">Research & Policy Engagement</h3>
            </div>
            <div className="nc-content">
              <p>
                Prof. Bharti’s research agenda focuses on the real-world impacts
                of trade agreements, privatization, intellectual property
                regimes, and macroeconomic reforms, particularly in emerging and
                developing economies.
              </p>
              <p>
                His work frequently engages with themes such as global trade
                governance, WTO dynamics, labour market reforms, innovation
                systems, and development strategies, making his scholarship both
                academically rigorous and policy relevant.
              </p>
            </div>
          </div>

          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-landmark"></i>
              </div>
              <h3 className="nc-title">
                Institutional Leadership & Public Service
              </h3>
            </div>
            <div className="nc-content">
              <p>
                In his role as <strong>DPIIT IPR Chair Professor</strong>, Prof.
                Bharti leads initiatives that strengthen India’s intellectual
                property ecosystem through research, training, outreach, and
                policy dialogue.
              </p>
              <p>
                Beyond his institutional responsibilities, he regularly
                contributes to academic forums, professional bodies, policy
                consultations, and international conferences, reinforcing the
                bridge between scholarship and public policy.
              </p>
            </div>
          </div>

          <div className="narrative-card fade-in-item is-visible">
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-users-viewfinder"></i>
              </div>
              <h3 className="nc-title">Mentorship & Academic Community</h3>
            </div>
            <div className="nc-content">
              <p>
                Prof. Bharti is deeply committed to academic mentorship and
                collaborative research. He supervises doctoral scholars, works
                closely with research staff, and fosters interdisciplinary
                cooperation within and beyond the university.
              </p>
            </div>
          </div>

          <div
            className="narrative-card fade-in-item is-visible"
            style={{ borderLeft: "6px solid var(--color-accent)" }}
          >
            <div className="nc-header">
              <div className="nc-icon">
                <i className="fa-solid fa-lightbulb"></i>
              </div>
              <h3 className="nc-title">Vision & Impact</h3>
            </div>
            <div className="nc-content">
              <p>
                At the core of Prof. Bharti’s work lies a vision of economic
                research as a catalyst for sustainable development,
                institutional reform, and social inclusion. Through his
                scholarship, leadership, and teaching, he continues to
                contribute meaningfully to the advancement of economic knowledge
                and the formulation of effective public policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: ACADEMIC TIMELINE (TREE) --- */}
      <section className="container spacer-top-md spacer-bottom-lg">
        <div className="journey-section fade-in-section is-visible">
          <h3 className="section-subtitle center-text">My Academic Odyssey</h3>

          <div className="tree-container">
            <div className="tree-trunk"></div>

            {/* Current Role 1 */}
            <div className="tree-leaf left current">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <span className="leaf-status">Current Role</span>
                <span className="leaf-date">Present</span>
                <h4>Visiting Professor</h4>
                <p>
                  IMPRI, New Delhi
                  <br />
                  <em>Policy Analysis & Development</em>
                </p>
              </div>
            </div>

            {/* Current Role 2 */}
            <div className="tree-leaf right current">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <span className="leaf-status">Current Role</span>
                <span className="leaf-date">Apr 2023 - Present</span>
                <h4>DPIIT IPR Chair Professor</h4>
                <p>
                  Ministry of Commerce & Industry, Govt. of India
                  <br />
                  <em>(Additional Charge)</em>
                </p>
              </div>
            </div>

            {/* Current Role 3 */}
            <div className="tree-leaf left current">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <span className="leaf-status">Current Role</span>
                <span className="leaf-date">Feb 2022 - Present</span>
                <h4>Professor of Economics</h4>
                <p>Indian Institute of Technology Patna</p>
              </div>
            </div>

            {/* Past Role 1 */}
            <div className="tree-leaf right">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <span className="leaf-date">Dec 2015 - Feb 2022</span>
                <h4>Associate Professor</h4>
                <p>Indian Institute of Technology Patna</p>
              </div>
            </div>

            {/* Past Role 2 */}
            <div className="tree-leaf left">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <span className="leaf-date">Dec 2008 - Dec 2015</span>
                <h4>Assistant Professor</h4>
                <p>Indian Institute of Technology Patna</p>
              </div>
            </div>

            {/* Past Role 3 */}
            <div className="tree-leaf right">
              <div className="leaf-branch"></div>
              <div className="leaf-card">
                <span className="leaf-date">May 2006 - Dec 2008</span>
                <h4>Lecturer (Law & Economics)</h4>
                <p>NALSAR University of Law, Hyderabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 4: EDUCATION LADDER --- */}
        <div className="education-section fade-in-section is-visible">
          <h3 className="section-subtitle center-text">
            Foundations of Expertise
          </h3>
          <div className="edu-ladder">
            <div className="edu-step">
              <div className="edu-icon">
                <i className="fa-solid fa-user-graduate"></i>
              </div>
              <div className="edu-content">
                <span className="edu-year">1999 - 2004</span>
                <h4>Ph.D. (South Asian Studies)</h4>
                <p>Jawaharlal Nehru University (JNU), New Delhi</p>
                <small className="edu-note">
                  Thesis: Privatization of SOEs in Bangladesh & India
                </small>
              </div>
            </div>

            <div className="edu-step">
              <div className="edu-icon">
                <i className="fa-solid fa-scroll"></i>
              </div>
              <div className="edu-content">
                <span className="edu-year">1997 - 1999</span>
                <h4>M.Phil (South Asian Studies)</h4>
                <p>Jawaharlal Nehru University (JNU), New Delhi</p>
              </div>
            </div>

            <div className="edu-step">
              <div className="edu-icon">
                <i className="fa-solid fa-certificate"></i>
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
