import React from 'react';
import '../assets/styles/Education.css';

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-wrapper">
        <h2 className="education-title">Education</h2>

        <div className="edu-card">
          <h3 className="edu-degree">Diploma in Robotic Process Automation (RPA)</h3>
          <p className="edu-details">
            <em>College of Engineering Pathanapuram, Pathanapuram — Aug 2021 – Aug 2024</em>
          </p>
          <p className="edu-score">CGPA: 7.9</p>
        </div>

        <div className="edu-card">
          <h3 className="edu-degree">Higher Secondary – Science</h3>
          <p className="edu-details">
            <em>GHSS Ashthamudi, Kundara, Kollam — 2021</em>
          </p>
          <p className="edu-score">Percentage: 79%</p>
        </div>

        <div className="edu-card">
          <h4 className="edu-additional-title">Additional Information</h4>
          <ul className="edu-list">
            <li>🛠️ Internships: Keltron – Computer Hardware & Networking</li>
            <li>🧪 Workshops: Fault Detection & Electrical Machines, Blockchain Technology & IoT</li>
            <li>🌐 Languages Known: English, Hindi, Malayalam</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
