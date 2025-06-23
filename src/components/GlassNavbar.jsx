import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/GlassNavbar.css';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaTools,
  FaGraduationCap,
  FaEnvelopeOpenText
} from 'react-icons/fa';

const sectionData = [
  { id: 'home', label: 'Home', icon: <FaHome /> },
  { id: 'about', label: 'About', icon: <FaUser /> },
  { id: 'experience', label: 'Experience', icon: <FaBriefcase /> },
  { id: 'projects', label: 'Projects', icon: <FaProjectDiagram /> },
  { id: 'skills', label: 'Skills', icon: <FaTools /> },
  { id: 'education', label: 'Education', icon: <FaGraduationCap /> },
  { id: 'hire', label: 'Hire Me', icon: <FaEnvelopeOpenText /> }
];

function GlassNavbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const navbarRef = useRef(null);

  // Section observer for active highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            break;
          }
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -30% 0px'
      }
    );

    sectionData.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Observe footer to hide navbar
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Prevent back to internal section — allow only exit
  useEffect(() => {
    const initialURL = window.location.href;

    window.history.pushState(null, '', window.location.href);

    const onPopState = () => {
      if (window.location.href === initialURL) {
        window.close();
      } else {
        window.history.pushState(null, '', window.location.href);
      }
    };

    window.addEventListener('popstate', onPopState);

    return () => {
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  // Scroll to section without modifying URL
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      ref={navbarRef}
      className={`glass-navbar ${isFooterVisible ? 'hide-navbar' : ''}`}
    >
      <ul className="glass-navbar-links">
        {sectionData.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              title={label}
              className={activeSection === id ? 'active' : ''}
              onClick={() => scrollToSection(id)}
            >
              {icon}
              <span className="label">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GlassNavbar;
