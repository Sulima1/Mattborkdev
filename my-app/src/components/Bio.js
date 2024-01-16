import React from "react";
import headshot from "../media/IMG_9090-min 1.jpg";

export default function MainApp() {
  return (
    <section section id="bio" className="flex items-center justify-center mb-20 min-h-screen md:min-h-1200">
      <div>
        <div className="flex flex-wrap">
            <div className="w-1/2 mx-auto relative">
                <img src={headshot} alt="headshot" className="mx-auto sm:mt-[-250px] md:mt-0 mr-10px relative rounded-full w-1/2"/>
            </div>
        <div className="w-full lg:w-1/2 lg:h-96 flex flex-col justify-center px-10 py-6">
            <h1 className="text-3xl lg:text-4xl font-bold mb-10 text-[#D2931B] text-center">
            Some more about me.
            </h1>
            <p className="sm:text-xl lg:text-xl"style={{ fontFamily: 'Inconsolata' }}>
              I am a fourth-year computer science student at Wilfrid Laurier University and currently an intern at Oshkosh Corporation. I first got into software development when I was 
              pursuing a Bachelor of Design. When I took a course where we had to create art with an Arduino, I learned that I like programming a bit more than I thought I would. That sent me down the coding rabbit hole and I am so glad I chose to do so. 
              <br></br><br></br>
              With my graduation coming up, I've been focusing in on a career in Software Engineering or Data Science. I really found a lot of enjoyment in Machine Learning and Image Processing in my classwork. In my free time I like to collect records, play video games, and go to the gym. 
              If you want to contact me for work, projects, or even to run some video games feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}