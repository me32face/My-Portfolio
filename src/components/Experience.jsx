import React from 'react';
import '../assets/styles/Experience.css';

function Experience() {
  return (
    <div className="exp-main-content">
      <section id="experience" className="exp-wrapper">
        <div className="exp-content">
          <h2 className="exp-title">Experience</h2>

          <div className="exp-card">
            <div className="exp-header">
              <h3 className="exp-role">MERN Full Stack Intern</h3>
              <span className="exp-duration">Nov 2024 – Present</span>
            </div>
            <p className="exp-company">Srishti Campus, Thiruvananthapuram</p>
            <ul className="exp-points">
              <li>Built full-stack web applications using React, Node.js, Express, and MongoDB</li>
              <li>Collaborated on real-world web apps in team environments</li>
              <li>Developed REST APIs using Postman, managed Git workflows, and deployed with Vercel</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
