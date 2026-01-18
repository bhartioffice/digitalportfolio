import React, { useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import "./Contact.css";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [copyStatus, setCopyStatus] = useState(null); // 'address', 'phone', 'email1', 'email2'

  // Form Submission States
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
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Get in Touch</h1>
        <p className="center-text-sm">
          Reach out for research collaborations, speaking engagements, or
          academic inquiries.
        </p>
      </section>

      <div className="container contact-section fade-in-item is-visible">
        <div className="contact-grid">
          {/* --- LEFT: INFO CARDS --- */}
          <div className="contact-info-wrapper">
            {/* Address Card */}
            <Card
              className="contact-card"
              onClick={() =>
                copyToClipboard(
                  "Room No –210, 2nd Floor, Block 1, Dept. of HSS, IIT Patna, Bihta – 801106",
                  "address"
                )
              }
              style={{ cursor: "pointer" }}
            >
              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="contact-details">
                <h4>Office Address</h4>
                <p style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  Room No –210, 2nd Floor, Block 1<br />
                  Department of Humanities and Social Sciences
                  <br />
                  <strong>Indian Institute of Technology Patna</strong>
                  <br />
                  Bihta, Patna – 801106, India
                </p>
                {copyStatus === "address" && (
                  <span
                    className="sub-text"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Address Copied!
                  </span>
                )}
              </div>
            </Card>

            {/* Email Card (With Individual Copy Buttons) */}
            <Card className="contact-card" style={{ cursor: "default" }}>
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-details" style={{ width: "100%" }}>
                <h4>Email</h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {/* Email 1 */}
                  <div
                    className="email-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      href="mailto:nalinbharti@iitp.ac.in"
                      className="contact-link"
                    >
                      nalinbharti@iitp.ac.in
                    </a>
                    <button
                      className="btn-icon-only"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard("nalinbharti@iitp.ac.in", "email1");
                      }}
                      title="Copy Email"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: copyStatus === "email1" ? "green" : "#999",
                      }}
                    >
                      <i
                        className={`fa-solid ${
                          copyStatus === "email1" ? "fa-check" : "fa-copy"
                        }`}
                      ></i>
                    </button>
                  </div>

                  {/* Email 2 */}
                  <div
                    className="email-row"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <a
                      href="mailto:nalinbharti@gmail.com"
                      className="contact-link"
                    >
                      nalinbharti@gmail.com
                    </a>
                    <button
                      className="btn-icon-only"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard("nalinbharti@gmail.com", "email2");
                      }}
                      title="Copy Email"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: copyStatus === "email2" ? "green" : "#999",
                      }}
                    >
                      <i
                        className={`fa-solid ${
                          copyStatus === "email2" ? "fa-check" : "fa-copy"
                        }`}
                      ></i>
                    </button>
                  </div>
                </div>
              </div>
            </Card>

            {/* Phone Card */}
            <Card
              className="contact-card"
              onClick={() => copyToClipboard("+916115233017", "phone")}
              style={{ cursor: "pointer" }}
            >
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <span className="contact-link">+91-6115-233 017</span>
                <span className="sub-text">
                  Office Hours: Mon-Fri, 9AM - 5PM
                </span>
                {copyStatus === "phone" && (
                  <span
                    className="sub-text"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Copied!
                  </span>
                )}
              </div>
            </Card>

            {/* Socials */}
            <Card
              className="contact-card"
              style={{ borderLeft: "4px solid var(--color-accent)" }}
            >
              <div className="contact-details" style={{ width: "100%" }}>
                <h4>Social Profiles</h4>
                <div className="social-row">
                  <a
                    href="https://www.linkedin.com/in/nalin-bharti-439b3815/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://x.com/nalinbharti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/nalin.bharti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Nalin-Bharti"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-researchgate"></i>
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* --- RIGHT: FORM CARD --- */}
          <Card className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <p
              style={{
                marginBottom: "2rem",
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
              }}
            >
              Send a direct message via the website.
            </p>

            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">Your Name</label>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder=" "
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              <div style={{ marginTop: "1rem" }}>
                {formStatus === "success" ? (
                  <div
                    className="alert success"
                    style={{
                      color: "green",
                      fontWeight: "bold",
                      padding: "10px",
                      background: "#f0fff4",
                      borderRadius: "4px",
                    }}
                  >
                    <i className="fa-solid fa-check-circle"></i> Message sent
                    successfully!
                  </div>
                ) : formStatus === "error" ? (
                  <div
                    className="alert error"
                    style={{
                      color: "#c53030",
                      fontWeight: "bold",
                      padding: "10px",
                      background: "#fff5f5",
                      borderRadius: "4px",
                    }}
                  >
                    <i className="fa-solid fa-circle-exclamation"></i> Error
                    sending message. Please try again.
                  </div>
                ) : (
                  <Button
                    type="submit"
                    variant="primary"
                    className="submit-btn"
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, width: "100%" }}
                  >
                    {isSubmitting ? (
                      <span>
                        <i className="fa-solid fa-spinner fa-spin"></i>{" "}
                        Sending...
                      </span>
                    ) : (
                      <span>
                        Send Message <i className="fa-solid fa-paper-plane"></i>
                      </span>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>

      {/* --- MAP SECTION --- */}
      {/* Removed Card wrapper to eliminate the "box" look. Now it's a clean, full-width container. */}
      <div
        className="container fade-in-item is-visible"
        style={{ marginTop: "4rem", marginBottom: "4rem" }}
      >
        <div
          style={{
            width: "100%",
            height: "450px",
            borderRadius: "12px",
            overflow: "hidden",
            border: "1px solid var(--color-border)",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7200.187795165745!2d84.849425!3d25.535249!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954a4ab%3A0x6ce8f1b9fc2aa02a!2sIndian%20Institute%20of%20Technology%2C%20Patna!5e0!3m2!1sen!2sin!4v1768570338455!5m2!1sen!2sin"
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
