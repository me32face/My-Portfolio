import React from 'react';
import '../assets/styles/Projects.css';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-wrapper">
        <h2 className="projects-title">Projects</h2>

        <div className="project-card">
          <h3 className="project-name">TechBlog – Full-Stack Blog Application</h3>
          <ul className="project-features">
            <li>🧠 Built and deployed a full-stack blog app with authentication and CRUD operations</li>
            <li>👍 Implemented like system using localStorage for persistent UI interactions</li>
            <li>💬 Comment section with moderation, validation, and timestamp display</li>
            <li>🧪 Exploring AI integration for enhanced UX</li>
          </ul>
          <p className="tech-stack">
            <strong>Tech Stack:</strong> React.js, Node.js, MongoDB Atlas, Firebase Auth, Postman, Git
          </p>
        </div>

        <div className="project-card">
          <h3 className="project-name">Travel Buddy – RPA Automation Project</h3>
          <ul className="project-features">
            <li>🧳 Automated travel workflow processes using UiPath Studio</li>
            <li>📊 Integrated Excel automation, email handling, and web scraping</li>
          </ul>
          <p className="tech-stack">
            <strong>Tech Stack:</strong> UiPath, Excel, Email Automation, Web Scraping
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
