import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 py-24 text-center"
    >
      <p className="text-xl sm:text-2xl mb-4 tracking-wide text-violet-300 font-light">
        Hi, I'm <span className="text-sky-400 font-medium">Mahima Dhore</span>
      </p>

      <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-500">
          FULL STACK
        </span>{' '}
        <br />
        <span className="text-white">SOFTWARE</span> <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-sky-400">
          DEVELOPER
        </span>
      </h1>

      <div className="w-12 h-1 bg-gradient-to-r from-sky-400 to-violet-500 mb-6 shadow-md"></div>

      <p className="text-sm sm:text-base text-gray-400 max-w-xl mb-8">
        Crafting pixel-perfect, scalable web apps using the power of{' '}
        <span className="text-sky-400">JavaScript</span>,{' '}
        <span className="text-violet-400">React</span>,{' '}
        <span className="text-sky-400">Node.js</span>, and{' '}
        <span className="text-violet-400">AWS</span>. Based in Pune, building
        web experiences that are fast, beautiful, and reliable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button className="px-6 py-2 bg-gradient-to-r from-sky-400 to-violet-500 text-black font-semibold rounded shadow-md hover:opacity-90 transition">
          Explore Projects
        </button>
        <a
          href="#contact"
          className="px-6 py-2 border border-violet-500 text-violet-400 font-semibold rounded shadow-md hover:bg-violet-500 hover:text-white transition"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Home;
