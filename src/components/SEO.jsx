// src/components/SEO.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description, url }) => {
  // Default values
  const siteTitle = "Prof. Nalin Bharti | IIT Patna";
  const defaultDesc =
    "Official academic portfolio of Prof. Nalin Bharti, DPIIT IPR Chair and Professor of Economics at IIT Patna. Expert in International Trade and Policy.";
  const siteUrl = "https://nalinbharti.in"; // Replace with your actual domain

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title ? `${title} | Prof. Nalin Bharti` : siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      <link rel="canonical" href={url ? `${siteUrl}${url}` : siteUrl} />

      {/* Social Media (Open Graph) - Makes links look good on LinkedIn/WhatsApp */}
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url ? `${siteUrl}${url}` : siteUrl} />
      <meta
        property="og:image"
        content={`${siteUrl}/Photos/prof-nalin-bharti-portrait.jpg`}
      />
    </Helmet>
  );
};

export default SEO;
