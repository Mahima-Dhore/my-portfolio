import React from "react";
import Profile from '../assets/Mahima.jpeg'

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-black text-white pt-4 pb-32 px-6 md:px-20 flex flex-col md:flex-row items-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
            About Me
          </h2>

          <p className="text-lg leading-8 text-gray-300 mb-6">
            Hi! I'm <span className="text-purple-400 font-semibold">Mahima Dhore</span>, a passionate front-end developer dedicated to building clean, responsive, and engaging user interfaces. My coding journey began with a deep interest in web development and evolved into creating real-world applications that make an impact.
          </p>

          <p className="text-lg leading-8 text-gray-300">
            With a strong foundation in HTML, CSS, JavaScript, and React, I love transforming ideas into visually appealing digital experiences. My goal is to keep learning, building, and growing into a full-stack developer while contributing to projects that solve real problems.
          </p>

          <div className="w-full h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 my-10" />
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-300 to-purple-600 blur-xl opacity-60 group-hover:opacity-90 transition duration-500"></div>
.v 
            <img
              src={Profile}
              alt="Profile"
              className="relative w-64 h-64 rounded-full object-cover border-4 border-white shadow-xl transition-transform transform group-hover:scale-110 group-hover:shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
