// src/App.js
import React from "react";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Navbar from "./components/Navbar.js";
import Projects from "./components/Projects.js";

export default function App() {
  return (
    <main className="text-[#C7D4F0] bg-[#052529] body-font">
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
