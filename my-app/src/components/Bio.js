import React from "react";
import headshot from "../media/IMG_9090-min 1.jpg";

export default function MainApp() {
  return (
    <section section id="bio" className="flex items-center justify-center mb-20 min-h-screen md:min-h-1200 scroll-snap">
      <div className="snap-y snap-mandatory overflow-auto">
        <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-1/2 lg:h-96 mx-auto">
                <img src={headshot} alt="headshot" className="sm:h-5/6 lg:h-full w-full object-contain"/>
            </div>
        <div className="w-full lg:w-1/2 lg:h-96 flex flex-col justify-center px-10 py-6">
            <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-[#D2931B]">
            Some more about me.
            </h1>
            <p className="sm:text-xl lg:text-xl"style={{ fontFamily: 'Inconsolata' }}>
              I am a fourth-year computer science student at Wilfrid Laurier University. I first got into software development when I was 
              pursuing a design degree and took a course where we had to mess around with an Arduino. Turned out I like programming a bit more than I thought I would!
              <br></br><br></br>
              I'm still figuring out what career path I want to go down but recently I've really been into research.
              I love a good challenge and exploring everything that coding can do. In my free time I like to collect records, play a couple of video games, and go to the gym. 
              If you want to contact me for work, projects, or even to run some video games feel free to reach out! 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}