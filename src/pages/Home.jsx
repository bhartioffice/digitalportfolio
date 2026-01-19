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

      {/* 1. TOP WAVE (Transition from White -> Dark Blue) */}
      <div style={{ lineHeight: 0, marginTop: "-1px" }}>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", display: "block" }}
        >
          <path
            fill="#002a5c" /* Matches Stats Section Dark Color */
            fillOpacity="1"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,176C672,160,768,160,864,176C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Stats />

      {/* 3. BOTTOM WAVE (Transition from Dark Blue -> White) */}
      <div style={{ lineHeight: 0, backgroundColor: "#fff" }}>
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            marginTop: "-1px",
          }}
        >
          <path
            fill="#002a5c"
            fillOpacity="1"
            d="M0,64L48,85.3C96,107,192,149,288,149.3C384,149,480,107,576,96C672,85,768,107,864,122.7C960,139,1056,149,1152,133.3C1248,117,1344,75,1392,53.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <Highlights />
      <Glimpses />
      <GlobalReach />
      <Reviewers />
    </div>
  );
};

export default Home;
