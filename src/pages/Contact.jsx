import React, { useState } from "react";
import "./Contact.css";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [copyStatus, setCopyStatus] = useState(null); // 'address', 'phone', 'email'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus(null);

    const FORM_ENDPOINT = "https://formspree.io/f/mreeegza";

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus(type);
      setTimeout(() => setCopyStatus(null), 2000);
    });
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Prof. Nalin Bharti for research collaborations, speaking engagements, or academic inquiries."
        url="/contact"
      />

      {/* --- PAGE HEADER --- */}
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Executive Correspondence</h1>
        <p className="center-text-sm">
          Direct channels for academic collaboration, policy advisory, and
          research inquiries.
        </p>
      </section>

      <div className="container contact-section fade-in-item is-visible">
        <div className="contact-grid">
          {/* --- LEFT COLUMN: THE DISPATCH STACK --- */}
          <div className="contact-info-stack">
            {/* 1. Address Dispatch */}
            <div
              className={`dispatch-card ${copyStatus === "address" ? "copied" : ""}`}
              onClick={() =>
                copyToClipboard(
                  "Room No –210, 2nd Floor, Block 1, Dept. of HSS, IIT Patna, Bihta – 801106",
                  "address",
                )
              }
            >
              <div className="dispatch-icon">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="dispatch-content">
                <span className="dispatch-label">Headquarters</span>
                <div className="dispatch-value">IIT Patna Campus</div>
                <span className="dispatch-sub">
                  Room 210, Block 1, Dept. of HSS
                  <br />
                  Bihta, Patna – 801106
                </span>
              </div>
              {copyStatus === "address" && (
                <span className="copy-feedback">Copied</span>
              )}
            </div>

            {/* 2. SMART EMAIL DISPATCH (Dual Channel) */}
            <div className="dispatch-card" style={{ cursor: "default" }}>
              <div className="dispatch-icon">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>

              <div className="dispatch-content">
                <span
                  className="dispatch-label"
                  style={{ marginBottom: "0.8rem", display: "block" }}
                >
                  Digital Correspondence
                </span>

                <div className="email-smart-group">
                  {/* CHANNEL A: ACADEMIC */}
                  <div
                    className={`email-item ${copyStatus === "email_official" ? "copied-row" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent card click
                      copyToClipboard(
                        "nalinbharti@iitp.ac.in",
                        "email_official",
                      );
                    }}
                  >
                    <div className="email-text-col">
                      <span className="email-tag">Official Channel</span>
                      <span className="email-addr">nalinbharti@iitp.ac.in</span>
                    </div>
                    <i
                      className={`copy-hint-icon fa-solid ${copyStatus === "email_official" ? "fa-check" : "fa-copy"}`}
                    ></i>
                  </div>

                  {/* CHANNEL B: DIRECT */}
                  <div
                    className={`email-item ${copyStatus === "email_direct" ? "copied-row" : ""}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      copyToClipboard("nalinbharti@gmail.com", "email_direct");
                    }}
                  >
                    <div className="email-text-col">
                      <span className="email-tag">Direct Channel</span>
                      <span className="email-addr">nalinbharti@gmail.com</span>
                    </div>
                    <i
                      className={`copy-hint-icon fa-solid ${copyStatus === "email_direct" ? "fa-check" : "fa-copy"}`}
                    ></i>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Phone Dispatch */}
            <div
              className={`dispatch-card ${copyStatus === "phone" ? "copied" : ""}`}
              onClick={() => copyToClipboard("+916115233017", "phone")}
            >
              <div className="dispatch-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="dispatch-content">
                <span className="dispatch-label">Direct Line</span>
                <div className="dispatch-value">+91-6115-233 017</div>
                <span className="dispatch-sub">
                  Mon - Fri, 09:00 - 17:00 IST
                </span>
              </div>
              {copyStatus === "phone" && (
                <span className="copy-feedback">Copied</span>
              )}
            </div>

            {/* 4. Social Connect Box */}
            <div className="social-connect-box">
              <span className="dispatch-label">Connect Professionally</span>
              <div className="social-grid">
                <a
                  href="https://www.linkedin.com/in/nalin-bharti-439b3815/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn sb-linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a
                  href="https://x.com/nalinbharti"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn sb-twitter"
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/nalin.bharti"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn sb-facebook"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.researchgate.net/profile/Nalin-Bharti"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn sb-research"
                >
                  <i className="fa-brands fa-researchgate"></i>
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: THE FORM --- */}
          <div className="correspondence-card">
            <div className="form-header">
              <h3>Direct Correspondence</h3>
              <p>
                Your message will be routed directly to the academic office.
              </p>
            </div>

            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
              </div>

              <div className="input-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject" className="form-label">
                  Subject of Inquiry
                </label>
              </div>

              <div className="input-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  className="form-input"
                  placeholder=" "
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Message Content
                </label>
              </div>

              <div style={{ marginTop: "1rem" }}>
                {formStatus === "success" ? (
                  <div
                    className="alert success"
                    style={{
                      color: "green",
                      background: "#f0fff4",
                      padding: "15px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      border: "1px solid #bbf7d0",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Message Transmitted Successfully.</span>
                  </div>
                ) : formStatus === "error" ? (
                  <div
                    className="alert error"
                    style={{
                      color: "#c53030",
                      background: "#fff5f5",
                      padding: "15px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      border: "1px solid #feb2b2",
                    }}
                  >
                    Transmission Failed. Please try again.
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="btn-submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fa-solid fa-spinner fa-spin"></i>{" "}
                        Processing...
                      </>
                    ) : (
                      <>
                        Transmit Message{" "}
                        <i className="fa-solid fa-paper-plane"></i>
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* --- LOCATION INTELLIGENCE --- */}
      <div className="container location-container fade-in-item is-visible">
        <div className="map-frame">
          <div className="map-badge">
            <i className="fa-solid fa-location-dot"></i>
            <span>Dept. of HSS, IIT Patna</span>
          </div>
          <iframe
            src="http://maps.google.com/maps?q=IIT%20Patna&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="IIT Patna Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
