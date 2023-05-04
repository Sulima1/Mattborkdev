// src/components/Navbar.js

import React from "react";

import { ReactComponent as IconDiscord } from './media/discordSVG.svg';
import { ReactComponent as IconGithub } from './media/githubSVG.svg';
import { ReactComponent as IconLinkedin } from './media/LinkedInSVG.svg';
import { ReactComponent as IconSpotify } from './media/spotifySVG.svg';



export default function Navbar() {
  return (
    <header className="bg-[#052529] md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center w-full">
          <a href="#projects" className="mx-8 my-1 md:mx-14 md:my-0 hover:text-white">
            <IconDiscord className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a href="#skills" className="mx-8 my-1 md:mx-14 md:my-0 hover:text-white">
            <IconGithub className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a href="#testimonials" className="mx-8 my-1 md:mx-14 md:my-0 hover:text-white">
            <IconLinkedin className="w-8 h-8 md:w-12 md:h-12" />
          </a>
          <a href="#testimonials" className="mx-8 my-1 md:mx-14 md:my-0 hover:text-white">
            <IconSpotify className="w-8 h-8 md:w-12 md:h-12" />
          </a>
        </nav>
      </div>
    </header>
  );
}