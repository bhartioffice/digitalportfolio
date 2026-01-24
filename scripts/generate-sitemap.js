import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 1. Import your data sources
// Note: Ensure your data files are pure JS (no JSX or image imports like 'import img from ./png')
import {
  booksData,
  chaptersData,
  articlesData,
  conferencesData,
} from "../src/data/publicationsData.js";

import {
  phdStudents,
  alumniData,
  staffData,
  previousStaffData,
  internsData,
} from "../src/data/peopleData.js";

import {
  researchProjects,
  researchAreas,
  giOdyssey,
  policyGovernance,
  outreachEvents,
  invitedTalks,
  organizedEvents,
} from "../src/data/researchData.js";

import { awardsData, mediaData } from "../src/data/awardsData.js";

// 2. Configuration
const BASE_URL = "https://www.nalinbharti.in";
const OUTPUT_PATH = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "../public/sitemap.xml",
);

// 3. Define Static Routes
const staticRoutes = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/about", priority: "0.8", changefreq: "monthly" },
  { url: "/research", priority: "0.9", changefreq: "weekly" },
  { url: "/publications", priority: "0.9", changefreq: "weekly" },
  { url: "/people", priority: "0.8", changefreq: "monthly" },
  { url: "/awards", priority: "0.7", changefreq: "monthly" },
  { url: "/contact", priority: "0.5", changefreq: "yearly" },
];

// 4. Helper to Generate XML URL Entry
const generateUrlEntry = (path, priority = "0.7", changefreq = "monthly") => {
  return `
  <url>
    <loc>${BASE_URL}${path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

// 5. Main Generation Function
const generateSitemap = () => {
  let urlSet = "";

  // A. Add Static Routes
  console.log("Adding Static Routes...");
  staticRoutes.forEach((route) => {
    urlSet += generateUrlEntry(route.url, route.priority, route.changefreq);
  });

  // B. Add Publications
  console.log("Adding Publications...");
  const allPubs = [
    ...booksData,
    ...chaptersData,
    ...articlesData,
    ...conferencesData,
  ];
  allPubs.forEach((item) => {
    if (item.id) urlSet += generateUrlEntry(`/publications/${item.id}`, "0.8");
  });

  // C. Add People
  console.log("Adding People...");
  const allPeople = [
    ...phdStudents,
    ...alumniData,
    ...staffData,
    ...(previousStaffData || []),
    ...internsData,
  ];
  allPeople.forEach((item) => {
    if (item.id) urlSet += generateUrlEntry(`/people/${item.id}`, "0.6");
  });

  // D. Add Research
  console.log("Adding Research...");
  const allResearch = [
    ...researchProjects,
    ...researchAreas,
    ...giOdyssey,
    ...policyGovernance,
    ...outreachEvents,
    ...invitedTalks,
    ...organizedEvents,
  ];
  allResearch.forEach((item) => {
    if (item.id) urlSet += generateUrlEntry(`/research/${item.id}`, "0.7");
  });

  // E. Add Awards & Media
  console.log("Adding Awards & Media...");
  const allAwards = [...awardsData, ...mediaData];
  allAwards.forEach((item) => {
    if (item.id) urlSet += generateUrlEntry(`/awards/${item.id}`, "0.6");
  });

  // 6. Final XML Assembly
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlSet}
</urlset>`;

  // 7. Write File
  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`✅ Sitemap generated successfully at: ${OUTPUT_PATH}`);
};

generateSitemap();
