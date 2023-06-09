import React from "react";
import { projects } from "../data.js";

export default function Projects() {
  return (
    <section
      id="projects"
      className="className=bg-[#052529] flex flex-col justify-center min-h-screen md:min-h-1200" style={{ marginTop: '2rem', fontFamily: 'Inconsolata'  }}
    >
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-bold text-[#D2931B]" style={{ fontFamily: 'Inter' }}>
            Here are some projects I've worked on
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              target="_blank" 
              rel="noopener noreferrer"
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center lg:object-scale-down"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-2 border-[#D2931B] bg-[#052529] opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-[#D2931B] mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}