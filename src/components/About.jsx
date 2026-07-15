import React from "react";
import "../assets/styles/About.css";
import {
  FaCode,
  FaCogs,
  FaToolbox,
  FaUserGraduate,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaUsers,
  FaSyncAlt,
  FaLightbulb,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiJavascript,
  SiUipath,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiJsonwebtokens
} from "react-icons/si";

// A reusable progress bar component
const ProgressBar = ({ skill, percent, icon }) => (
  <div className="progress-item">
    <div className="progress-info">
      <span className="progress-name">
        {icon && <span className="progress-icon">{icon}</span>}
        {skill}
      </span>
      <span className="progress-percent">{percent}%</span>
    </div>
    <div className="progress-bg">
      <div className="progress-bar" style={{ width: `${percent}%` }}></div>
    </div>
  </div>
);

function About() {
  return (
    <div className="section-container" id="about">
      <h2 className="section-title">About & Skills</h2>

      <div className="bento-grid">
        {/* Intro Card (Large) */}
        <div className="bento-card bento-intro glass-card">
          <div className="bento-header">
            <FaUserGraduate className="bento-icon" />
            <h3>Who I Am</h3>
          </div>
          <p>
            I'm a Full Stack Developer from Kerala, India, specializing in
            building production-grade web applications. My expertise lies in the
            MERN stack and Next.js, with a strong focus on creating scalable
            server-side rendered apps, complex role-based access control
            systems, and intuitive user interfaces.
          </p>
          <p>
            I'm also experienced in Robotic Process Automation (RPA) using
            UiPath, allowing me to build end-to-end automated solutions that
            save time and reduce errors.
          </p>
        </div>

        {/* Quick Facts (Small) */}
        <div className="bento-card bento-facts glass-card">
          <div className="bento-header">
            <FaToolbox className="bento-icon" />
            <h3>Fast Facts</h3>
          </div>
          <ul className="facts-list">
            <li>
              <strong>Location:</strong> Kollam, Kerala
            </li>
            <li>
              <strong>Experience:</strong> Hands-on MERN & RPA
            </li>
            <li>
              <strong>Focus:</strong> Scalable SaaS & Automation
            </li>
            <li>
              <strong>Design:</strong> Minimalist Component-driven
            </li>
          </ul>
        </div>

        {/* Tech Stack (Medium) */}
        <div className="bento-card bento-stack glass-card">
          <div className="bento-header">
            <FaCode className="bento-icon" />
            <h3>Tech Stack</h3>
          </div>
          <div className="skills-grid">
            <div className="skills-group">
              <h4 className="group-title">Frontend</h4>
              <ProgressBar icon={<FaReact className="react-icon"/>} skill="React.js" percent={90} />
              <ProgressBar icon={<SiNextdotjs className="next-icon"/>} skill="Next.js" percent={85} />
              <ProgressBar icon={<SiJavascript className="js-icon"/>} skill="JavaScript (ES6+)" percent={90} />
              <ProgressBar icon={<SiTailwindcss className="tailwind-icon"/>} skill="Tailwind CSS" percent={85} />
              <ProgressBar icon={<SiRedux className="redux-icon"/>} skill="Redux" percent={80} />
              <ProgressBar icon={<span className="icon-group"><FaHtml5 className="html-icon"/><FaCss3Alt className="css-icon"/></span>} skill="HTML5 / CSS3" percent={95} />
            </div>
            
            <div className="skills-group">
              <h4 className="group-title">Backend & Database</h4>
              <ProgressBar icon={<FaNodeJs className="node-icon"/>} skill="Node.js" percent={85} />
              <ProgressBar icon={<SiExpress className="express-icon"/>} skill="Express.js" percent={85} />
              <ProgressBar icon={<SiMongodb className="mongodb-icon"/>} skill="MongoDB / Mongoose" percent={80} />
              <ProgressBar icon={<FaServer className="api-icon"/>} skill="REST APIs" percent={90} />
              <ProgressBar icon={<SiJsonwebtokens className="jwt-icon"/>} skill="JWT Auth" percent={85} />
            </div>
          </div>
        </div>

        {/* Soft Skills & Tools (Small) */}
        <div className="bento-card bento-soft glass-card">
          <div className="bento-header">
            <FaCogs className="bento-icon" />
            <h3>Tools & Soft Skills</h3>
          </div>
          <div className="skills-group">
            <ProgressBar icon={<SiUipath className="uipath-icon"/>} skill="UiPath (RPA)" percent={85} />
            <ProgressBar icon={<span className="icon-group"><FaGitAlt className="git-icon"/><FaGithub className="github-icon"/></span>} skill="Git / GitHub" percent={90} />
            <ProgressBar icon={<SiPostman className="postman-icon"/>} skill="Postman" percent={90} />
            <ProgressBar icon={<span className="icon-group"><SiVercel className="vercel-icon"/><SiFirebase className="firebase-icon"/></span>} skill="Vercel / Firebase" percent={80} />
            <hr className="group-divider" />
            <ProgressBar icon={<FaUsers className="teamwork-icon"/>} skill="Teamwork" percent={95} />
            <ProgressBar icon={<FaSyncAlt className="adapt-icon"/>} skill="Adaptability" percent={90} />
            <ProgressBar icon={<FaLightbulb className="problem-icon"/>} skill="Problem Solving" percent={95} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
