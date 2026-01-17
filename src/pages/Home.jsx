import React from "react";
import "./Home.css";

import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Highlights from "../components/Highlights/Highlights";
import Reviewers from "../components/Reviewers/Reviewers";
import Updates from "../components/Updates/Updates";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Stats />
      <Highlights />
      <Reviewers />
      <Updates />
    </div>
  );
};

export default Home;
