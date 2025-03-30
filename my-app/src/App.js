// src/App.js
import React from "react";
import MainPage from "./components/MainPage.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Bio from "./components/Bio.js";
import WorkHistory from "./components/WorkHistory.js";

export default function App() {
  return (
    <div id="mainContainer" className="text-[#C7D4F0] bg-[#052529] body-font">
      <Navbar />
      <div className="scroll-container">
        <div className="scroll-section">
          <MainPage />
        </div>
        <div className="scroll-section">
          <Bio />
        </div>
        <div className="scroll-section">
          <WorkHistory />
        </div>
        <div className="scroll-section">
          <Projects />
        </div>
      </div>
    </div>
  );
}
