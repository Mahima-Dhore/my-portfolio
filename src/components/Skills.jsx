import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-500" },
  { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
  { name: "Node", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "GitHub", icon: <FaGithub />, color: "text-gray-400" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-black text-white px-4 pt-24 md:px-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8 ml-[40px] sm:ml-[80px] md:ml-[120px] lg:ml-[165px]">
        Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-md shadow-fuchsia-500/30 flex flex-col items-center justify-center text-center py-4 px-6 text-lg font-semibold transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-pink-500/40"
          >
            {/* Circular Block */}
            <div
              className={`${
                index % 2 === 0 ? "rounded-full" : "rounded-full"
              } text-4xl mb-4 w-16 h-16 flex items-center justify-center ${skill.color} hover:text-white transition-colors duration-300`}
            >
              {skill.icon}
            </div>
            <p className="text-xs">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
