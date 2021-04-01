import React, { useState, useEffect } from 'react';
// import './App.css';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
// import Projects from './components';

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </>
  );
};

export default App;
