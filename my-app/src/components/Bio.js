import React from "react";

export default function MainApp() {
  return (
    <section section id="about" className="flex items-center justify-center h-screen">
        <div className="flex" style={{ fontFamily: 'Inconsolata' }}>
            <div className="w-1/2">
            </div>
            <div className="w-1/2 p-10">
                <h1 className="text-4xl font-bold mb-10 text-[#D2931B]">
                    Some more about me.
                </h1>
                <p class="text-xl w-full md:w-10/12 lg:w-10/12">
                    I am a fourth-year computer science student at Wilfrid Laurier University. I first got into software development when I was 
                    pursuing a design degree and took a course where we had to mess around with an Arduino. Turned out I like programming a bit more than I thought I would!
                    <br></br><br></br>
                    I'm still figuring out what career path I want to go down but recently I've really been into research.
                    I love a good challenge and exploring everything that coding can do. In my free time I like to collect records, play a couple of video games, and go to the gym. 
                    If you want to contact me for work, projects, or even to run some video games feel free to reach out! 
                </p>
            </div>
        </div>
    </section>
  );
}