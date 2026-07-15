import React from "react";
import "../assets/styles/Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills-wrapper" tabIndex={-1}>
      <div className="skills-content">
        <h2 className="skills-title">
          Technical <span>Skills</span>
        </h2>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-badges-row">
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                  className="violet-icon"
                />
                <span>Next.js</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                <span>React.js</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                />
                <span>TypeScript</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                />
                <span>Tailwind CSS</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <span>JavaScript</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                />
                <span>HTML5</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS3"
                />
                <span>CSS3</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                  alt="Bootstrap"
                  className="violet-icon"
                />
                <span>Bootstrap</span>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-badges-row">
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                <span>Node.js</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.simpleicons.org/express/FFD700"
                  alt="Express.js"
                />
                <span>Express.js</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                <span>MongoDB</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
                  alt="Socket.io"
                  className="violet-icon"
                />
                <span>Socket.io</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"
                  alt="Postman"
                />
                <span>REST APIs</span>
              </div>
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className="skill-category">
            <h3>Tools & Platforms</h3>
            <div className="skill-badges-row">
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  alt="Git"
                />
                <span>Git</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.simpleicons.org/github/c2c2c2"
                  alt="GitHub"
                />
                <span>GitHub</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.simpleicons.org/googlegemini/8E75C2"
                  alt="Gemini API"
                />
                <span>Gemini API</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.simpleicons.org/razorpay/00299B"
                  alt="Razorpay"
                />
                <span>Razorpay</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="Firebase"
                />
                <span>Firebase</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
                  alt="Vercel"
                />
                <span>Vercel</span>
              </div>
            </div>
          </div>

          {/* RPA & Automation */}
          <div className="skill-category">
            <h3>RPA & Automation</h3>
            <div className="skill-badges-row">
              {/* Common icons */}
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2907/2907144.png"
                  alt="Gear"
                />
                <span>UiPath</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2331/2331818.png"
                  alt="Gear"
                />
                <span>Automation Anywhere</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3208/3208820.png"
                  alt="Gear"
                />
                <span>Selenium</span>
              </div>
            </div>
          </div>

          {/* Others */}
          {/* App Logic & Architecture */}
          <div className="skill-category">
            <h3>App Architecture</h3>
            <div className="skill-badges-row">
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1005/1005141.png"
                  alt="RBAC"
                />
                <span>RBAC</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2092/2092663.png"
                  alt="Auth"
                />
                <span>Auth Systems</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/8297/8297437.png"
                  alt="Workflow"
                />
                <span>Workflow Logic</span>
              </div>
            </div>
          </div>

          {/* Real-Time & Interaction */}
          <div className="skill-category">
            <h3>Real-Time Features</h3>
            <div className="skill-badges-row">
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3592/3592869.png"
                  alt="Presence"
                />
                <span>User Presence</span>
              </div>
              <div className="skill-badge" tabIndex={0}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3253/3253896.png"
                  alt="API"
                />
                <span>API Integration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <h2 className="skills-title soft-title">
          Soft <span>Skills</span>
        </h2>
        <ul className="soft-skills-list" aria-label="Soft skills list">
          <li tabIndex={0}>🤝 Teamwork</li>
          <li tabIndex={0}>🔄 Adaptability</li>
          <li tabIndex={0}>⚡ Quick Learner</li>
          <li tabIndex={0}>⏱️ Time Management</li>
        </ul>
      </div>
    </section>
  );
}

export default Skills;
