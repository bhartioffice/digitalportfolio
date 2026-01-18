import React from "react";
import "./Home.css";
import SEO from "../components/SEO";

import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Highlights from "../components/Highlights/Highlights";
import Glimpses from "../components/Glimpses/Glimpses";
import GlobalReach from "../components/GlobalReach/GlobalReach";
import Reviewers from "../components/Reviewers/Reviewers";

const Home = () => {
  return (
    <div className="home-page">
      <SEO
        title="Home"
        description="Welcome to the academic portfolio of Prof. Nalin Bharti, specializing in International Trade, IPR, and Macroeconomic Reforms at IIT Patna."
      />
      <Hero />
      <Stats />
      <Highlights />
      <Glimpses />
      <GlobalReach />
      <Reviewers />
    </div>
  );
};

export default Home;
