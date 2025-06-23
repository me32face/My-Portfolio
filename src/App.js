import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';
import Home from './components/Home';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import About from './components/About'
import HireMe from './components/HireMe';
import GlassNavbar from './components/GlassNavbar';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const isDesktop = window.innerWidth >= 769;
      const isScrolled = window.scrollY > 80;

      if (isDesktop && isScrolled) {
        document.body.classList.add('scrolled-active');
      } else {
        document.body.classList.remove('scrolled-active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      {/* <Navbar /> */}
      <main className="app-main">
        <section id="nav"><GlassNavbar /></section>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section> 
        <section id="education"><Education /></section>
        <section id="hire"><HireMe /></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
