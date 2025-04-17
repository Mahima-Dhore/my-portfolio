import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Skills/>
      <Contact />
    </div>
  );
};

export default App;
