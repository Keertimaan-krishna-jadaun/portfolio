import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="bg-white">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;