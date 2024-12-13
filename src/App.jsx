import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Work from './components/work/Work';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme");
  };

  return (
    <>
    <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

    <main className='main'>
    <Home darkMode={darkMode} />
      <About />
      <Skills />
      <Qualification/>
      <Work/>
      <Testimonials/>
      <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App
