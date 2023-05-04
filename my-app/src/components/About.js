// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center h-screen">
      <div className="container mx-auto flex px-5 py-20 flex-col items-center justify-center mt-[-150px]">
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 text-center">
          <p className="no-wrap text-md md:text-lg lg:text-2xl mx-5 md:mx-8 mb-2 leading-relaxed text-[#D2931B]">
            Hi, my name is
          </p>
          <h1 className="no-wrap text-lg md:text-xl lg:text-4xl mx-5 md:mx-12 title-font sm:text-4xl text-3xl mb-4 font-medium text-[#C7D4F0]">
            Matthew Borkowski.
          </h1>
          <h2 className="no-wrap text-lg md:text-xl lg:text-4xl mx-5 md:mx-16 title-font mb-4 font-medium text-[#C7D4F0]">
            <span className="pl-4">Developer and student.</span>
          </h2>
          <p className="mx-5 md:mx-8 mb-8 leading-relaxed">
            I'm a computer science student at <span className="text-[#D2931B]">Wilfrid Laurier University</span> <br className="hidden lg:inline-block" /> and I like to code things in my free time.
          </p>
        </div>
      </div>
    </section>
  );
}