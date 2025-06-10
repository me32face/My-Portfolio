import React, { useState } from 'react';
import {
  FaChevronDown,
  FaChevronUp,
  FaExternalLinkAlt,
  FaCodeBranch,
  FaServer,
  FaRobot,
  FaGlobe
} from 'react-icons/fa';
import '../assets/styles/Projects.css';
import { FaLinkedin } from 'react-icons/fa';


function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const projects = [
    {
      title: "TechBlog – A Full Stack Blogging Platform",
      subtitle: "Built with the MERN Stack (MongoDB, Express, React, Node.js)",
      links: [
        { label: "Live App", icon: <FaGlobe />, url: "https://your-live-app-link.com" },
        { label: "Frontend Code", icon: <FaCodeBranch />, url: "github.com/me32face/Techblog_2-FrontEnd" },
        { label: "Backend Code", icon: <FaServer />, url: "github.com/me32face/TechBlog_2-Backend" },
        { label: "Project Video Phase 1", icon: <FaLinkedin />, url: "https://www.linkedin.com/posts/akshay-a-023a472a4_mernstack-mongodbatlas-reactjs-activity-7337848744127713280-MUZ_/" }


      ],
      details: [
        "Complete blogging platform with post creation, comment system, and like functionality.",
        "Supports guest users using browser localStorage; logged-in users can save posts.",
        "Connected RESTful APIs for smooth frontend-backend communication.",
        "Currently integrating AI-based post summarization and comment moderation.",
        "Hosted on Render (backend), MongoDB Atlas (database), Vercel (frontend).",
        "Migration to AWS in progress for better scalability."
      ]
    },
    {
      title: "Travel Buddy Robot – RPA Automation",
      subtitle: "Built with UiPath Studio for intelligent travel planning",
      icon: <FaRobot />,
      links: [],
      details: [
        "Users input email, source, destination, and travel date via a web form.",
        "Bot scrapes travel data from websites using browser automation.",
        "Fetched data is sorted and stored in Excel sheets.",
        "Automated emails with results are sent using SMTP.",
        "Built entirely with UiPath: scraping, sorting, emailing — fully automated."
      ]
    }
  ];

  return (
    <section className="projects-gradient-section" id="projects">
      <div className="projects-container">
        <h2 className="projects-heading">My <span>Projects</span></h2>

        {projects.map((proj, index) => (
          <div key={index} className={`projects-card ${activeIndex === index ? 'active' : ''}`}>
            <div className="projects-header" onClick={() => toggleAccordion(index)}>
              <h3 className="projects-title">
                {proj.icon && <span className="projects-icon">{proj.icon}</span>}
                {proj.title}
              </h3>
              <span className="projects-toggle-icon">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {activeIndex === index && (
              <div className="projects-body">
                <p className="projects-subtitle">{proj.subtitle}</p>

                {proj.links.length > 0 && (
                  <div className="projects-links">
                    {proj.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.icon} {link.label} <FaExternalLinkAlt className="projects-external-icon" />
                      </a>
                    ))}
                  </div>
                )}

                <ul className="projects-list">
                  {proj.details.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
