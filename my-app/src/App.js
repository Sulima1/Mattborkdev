// src/App.js
import React from "react";
import MainPage from "./components/MainPage.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";
import Bio from "./components/Bio.js";

export default function App() {
  return (
    <main className="text-[#C7D4F0] bg-[#052529] body-font">
      <Navbar />
      <MainPage />
      <Bio />
      <Projects />
      <Contact />
    </main>
  );
}
