import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/GlassNavbar.css";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaProjectDiagram,
  FaGraduationCap,
  FaEnvelopeOpenText,
  FaSun,
  FaMoon,
} from "react-icons/fa";

const sectionData = [
  { id: "home", label: "Home", icon: <FaHome /> },
  { id: "about", label: "About", icon: <FaUser /> },
  { id: "experience", label: "Experience", icon: <FaBriefcase /> },
  { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
  { id: "education", label: "Education", icon: <FaGraduationCap /> },
  { id: "hire", label: "Hire Me", icon: <FaEnvelopeOpenText /> },
];

function GlassNavbar({ theme, toggleTheme }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const intersecting = entries.find((entry) => entry.isIntersecting);
        if (intersecting) {
          setActiveSection(intersecting.target.id);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-10% 0px -40% 0px",
      },
    );

    sectionData.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className={`navbar-wrapper ${isFooterVisible ? "hide-navbar" : ""}`}
    >
      <div className="nav-logo gradient-text">
        <b>A.</b>
      </div>

      <ul className="nav-links">
        {sectionData.map(({ id, label, icon }) => (
          <li key={id} className="nav-item">
            <a
              className={`nav-link ${activeSection === id ? "active" : ""}`}
              onClick={() => scrollToSection(id)}
              aria-label={label}
            >
              {icon}
              <span className="nav-label">{label}</span>
            </a>
          </li>
        ))}
      </ul>

      <button
        className="theme-toggle-btn"
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        title="Toggle Light/Dark Mode"
      >
        {theme === "dark" ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  );
}

export default GlassNavbar;
