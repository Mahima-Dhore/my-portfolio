import React from "react";

const Projects = () => {
    const projectList = [
        {
            title: "Portfolio Website",
            description:
                "A personal portfolio showcasing my skills, experience, and projects. Built using React and TailwindCSS with a focus on design and responsiveness.",
            tech: "React, TailwindCSS",
            link: "#",
        },
        {
            title: "Incident Management System",
            description:
                "An enterprise-level web app for vehicle incident tracking and spare parts management, improving internal operations for automotive clients.",
            tech: "HTML, CSS, JavaScript, JSP, Java, Spring Boot",
            link: "#",
        },
        {
            title: "Responsive Login & Dashboard UI",
            description:
                "Created a responsive login page and dashboard using React and Tailwind. Focused on UI/UX and mobile-first design.",
            tech: "HTML, CSS, JavaScript, React",
            link: "#",
        },
    ];

    return (
        <section
            id="projects"
            className="w-full bg-black text-white pt-20 pb-16 px-6 md:px-20"
        >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-8 ml-[40px] sm:ml-[80px] md:ml-[120px] lg:ml-[165px]">
                Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
                {projectList.map((project, index) => (
                    <div
                        key={index}
                        className={`bg-[#111] border border-gray-700 rounded-2xl shadow-md p-6 transition duration-300 hover:border-blue-500 ${projectList.length % 2 !== 0 &&
                            index === projectList.length - 1 &&
                            "md:col-span-2 md:mx-auto md:w-1/2"
                            }`}
                    >
                        <h3 className="text-xl font-semibold text-blue-400 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-gray-300 mb-3">{project.description}</p>
                        <p className="text-sm text-gray-400 mb-4">
                            <span className="font-semibold text-purple-400">Tech:</span>{" "}
                            {project.tech}
                        </p>
                        <a
                            href={project.link}
                            className="text-sm text-blue-400 hover:text-blue-500 underline"
                            target="_blank"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
