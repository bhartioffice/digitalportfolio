import React from "react";
import "./Home.css";

// Import all your components
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Highlights from "../components/Highlights";
import Reviewers from "../components/Reviewers";
import Updates from "../components/Updates";

const Home = () => {
  // CORRECT PATH: Points to public/Photos/gallery/iit patna.jpg
  // Note: We use '%20' to represent the space in the filename safely
  const bannerImage = "/Photos/gallery/iit%20patna.jpg";

  return (
    <>
      <Hero />
      <Stats />
      <Highlights />
      <Reviewers />
      <Updates />
    </>
  );
};

export default Home;
