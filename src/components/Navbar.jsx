import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}
          <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 text-transparent bg-clip-text">
            Mahima
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            <a
              href="#home"
              className="hover:text-sky-400 transition duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-violet-400 transition duration-200"
            >
              About
            </a>
            
            <a
              href="#projects"
              className="hover:text-sky-400 transition duration-200"
            >
              Projects
            </a>
            <a
              href="#skills"
              className="hover:text-violet-400 transition duration-200"
            >
              Skills
            </a>
            <a
              href="#contact"
              className="hover:text-sky-400 transition duration-200"
            >
              Contact
            </a>
          </div>

          {/* Resume Button */}
          <div className="hidden md:block">
            <a
              href="/Mahima_Resume.pdf"
              download
              className="bg-gradient-to-r from-violet-500 to-sky-400 text-black px-4 py-2 rounded font-semibold shadow hover:opacity-90 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
