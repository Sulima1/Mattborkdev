import React, { useState, useEffect } from 'react';
import { ReactComponent as IconDiscord } from '../media/discordSVG.svg';
import { ReactComponent as IconGithub } from '../media/githubSVG.svg';
import { ReactComponent as IconLinkedin } from '../media/LinkedInSVG.svg';
import { ReactComponent as IconSpotify } from '../media/spotifySVG.svg';
import classNames from 'classnames';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={classNames(
        "bg-[#052529] md:sticky top-0 z-10 transition-all transform-gpu",
        {"scale-y-90 h-14": isScrolled}
      )}
      style={{ transformOrigin: 'top' }}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:mr-auto md:ml-4 md:py-1 sm:pl-4 sm:ml-4 sm:py-4 sm:pl-4 flex flex-wrap items-center text-base justify-center w-full" style={{ marginTop: isScrolled ? '-20px' : '0' }}>
          <a href="https://discord.com/users/163341997971603456" className={classNames("mx-8 my-1 sm:mx-10 md:mx-14 sm:my-0 hover:scale-110", {"scale-75 hover:scale-90": isScrolled})}>
            <IconDiscord className="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
          <a href="https://github.com/Sulima1" className={classNames("mx-8 my-1 sm:mx-10 md:mx-14 ms:my-0 hover:scale-110", {"scale-75 hover:scale-90": isScrolled})}>
            <IconGithub className="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
          <a href="https://www.linkedin.com/in/-matthewborkowski/" className={classNames("mx-8 my-1 sm:mx-10 md:mx-14 md:my-0 hover:scale-110", {"scale-75 hover:scale-90": isScrolled})}>
            <IconLinkedin className="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
          <a href="https://open.spotify.com/user/qsnbjn8b4dvg2x7om45e05y4w" className={classNames("mx-8 my-1 sm:mx-10 md:mx-14 md:my-0 hover:scale-110", {"scale-75 hover:scale-90": isScrolled})}>
            <IconSpotify className="w-8 h-8 sm:w-12 sm:h-12" />
          </a>
        </nav>
      </div>
    </header>
  );
}