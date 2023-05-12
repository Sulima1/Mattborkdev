// src/components/About.js

import React, { useState, useEffect } from "react";

export default function About() {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector("nav");
    const height = navbar.offsetHeight;
    setNavbarHeight(height);
  }, []);

  const sectionStyle = {
    minHeight: `calc(95vh - ${navbarHeight}px)`,
  };

  return (
    <section id="main" className="flex items-center justify-center" style={sectionStyle}>
      <div className="container snap-y snap-mandatory overflow-auto mx-auto flex px-5 py-20 flex-col items-center justify-center mb-10">
        <div className="snap-start lg:pl-24 md:pl-16 flex flex-col sm:items-start sm:text-left mb-16 md:mb-0 text-center">
          <p className="no-wrap sm:text-xl lg:text-xl mx-5 md:mx-8 mb-2 leading-relaxed text-[#D2931B]" style={{ fontFamily: 'Inconsolata' }}>
            Hi, my name is
          </p>
          <h1 className="no-wrap sm:text-4xl md:text-5xl lg:text-6xl mx-5 md:mx-12 title-font sm:text-4xl text-3xl mb-4 font-medium text-[#C7D4F0]" style={{ fontFamily: 'Inter' }}>
            Matthew Borkowski.
          </h1>
          <h2 className="mx-5 no-wrap sm:text-4xl md:text-5xl lg:text-6xl mx-5 md:ml-16 title-font mb-4 font-medium text-[#8B96B3]" style={{ fontFamily: 'Inter' }}>
            <span>Developer and student.</span>
          </h2>
          <p className="md:text-xl lg:text-xl md:mx-8 mb-8 paragraph max-w-xl" style={{ fontFamily: 'Inconsolata' }}>
            I'm a computer science student at <span className="text-[#D2931B]">Wilfrid Laurier University</span> and I like to code things in my free time.
          </p>
        </div>
      </div>
    </section>
  );
}