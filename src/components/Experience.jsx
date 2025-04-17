import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-black text-gray-200 pt-5 pb-12 px-6 md:px-20">

      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8">
          Experience
        </h2>

        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 md:p-8 rounded-2xl shadow-lg border border-gray-700">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-xl font-semibold text-purple-400">
              Capgemini – Software Engineer
            </h3>
            <p className="text-sm text-gray-400">November 2021 – August 2023</p>
          </div>

          <p className="text-gray-300 leading-7">
            I contributed to an enterprise-level vehicle incident management and spare parts tracking system for a leading automotive client. I worked on designing and developing responsive user interfaces using HTML, CSS, JavaScript, and JSP. My role also involved integrating APIs, debugging, optimizing performance, and collaborating closely with cross-functional teams. This experience enhanced my frontend development skills and deepened my understanding of large-scale web applications and agile workflows.
          </p>
        </div>

        <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 my-10" />
      </div>
    </section>
  );
};

export default Experience;
