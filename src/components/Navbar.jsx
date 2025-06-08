import React, { useState, useEffect } from 'react';
import '../assets/styles/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(true);  // initially hidden at top

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      // Hide navbar only when at very top
      if (window.scrollY<700) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Optional: prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''} ${hideNavbar ? 'hidden' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">Akshay A</div>
          <ul className={`navbar-links ${open ? 'open' : ''}`}>
            <li><a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
            <li><a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
            <li><a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
            <li><a href="#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
            <li><a href="#education" onClick={(e) => handleNavClick(e, 'education')}>Education</a></li>
            <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
          </ul>
          <button
            className={`navbar-toggle ${open ? 'open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>
      {open && <div className="backdrop" onClick={() => setOpen(false)}></div>}
    </>
  );
}

export default Navbar;
