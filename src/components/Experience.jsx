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
              <h3 className="exp-role">MERN Full Stack Developer Intern</h3>
              <span className="exp-duration">Nov 2024 – Present</span>
            </div>
            <p className="exp-company">Sristhi Campus, Thiruvananthapuram</p>
            <ul className="exp-points">
              <li>Developed real-world full-stack applications using the MERN stack</li>
              <li>Built and maintained frontends with React and backends with Node.js, Express, and MongoDB</li>
              <li>Created REST APIs; using Git for version control</li>
              <li>Deployed full-stack apps and adding user-focused features</li>
              <li>Improved skills in debugging, problem-solving, and app architecture.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;
