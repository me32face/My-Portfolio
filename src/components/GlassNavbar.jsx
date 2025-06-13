import React, { useEffect, useState } from 'react';
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

  return (
    <nav className="glass-navbar">
      <ul className="glass-navbar-links">
        {sectionData.map(({ id, label, icon }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              title={label}
              className={activeSection === id ? 'active' : ''}
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
