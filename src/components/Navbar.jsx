import React, { useState, useEffect } from 'react';
import '../assets/styles/Navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'hire'];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 81);
      setHideNavbar(currentScrollY < 700);

      // Scroll Spy logic
      for (let id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (currentScrollY >= offsetTop - 150 && currentScrollY < offsetBottom - 150) {
            setActiveSection(id);
            break;
          }
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <nav className={`navbar-wrapper ${scrolled ? 'scrolled' : ''} ${hideNavbar ? 'hidden' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo">Akshay A</div>
          <ul className={`navbar-links ${open ? 'open' : ''}`}>
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, id)}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
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
