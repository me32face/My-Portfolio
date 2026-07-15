import React from "react";
import "../assets/styles/Education.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Computer Applications (BCA)",
      institute: "Indira Gandhi National Open University (IGNOU)",
      status: "Pursuing",
      year: "July 2025 – Present",
    },
    {
      id: 2,
      degree: "Diploma in Robotic Process Automation (RPA)",
      institute: "State Board of Technical Education, Kerala",
      location: "College of Engineering Pathanapuram",
      year: "2021 – 2024",
      score: "CGPA: 7.9",
    },
    {
      id: 3,
      degree: "Higher Secondary – Science",
      institute: "Board of Higher Secondary Examinations, Kerala",
      location: "GHSS Ashthamudi, Kundara, Kollam",
      year: "2021",
      score: "79%",
    },
  ];

  return (
    <div className="section-container" id="education">
      <h2 className="section-title">Education</h2>

      <div className="edu-grid">
        {educationData.map((edu) => (
          <div className="edu-card glass-card" key={edu.id}>
            <div className="edu-icon-wrapper">
              <FaGraduationCap className="edu-icon" />
            </div>
            <div className="edu-content">
              <span className="edu-year">{edu.year}</span>
              <h3 className="edu-degree">{edu.degree}</h3>
              <h4 className="edu-institute">{edu.institute}</h4>
              {edu.location && <p className="edu-location">{edu.location}</p>}
              {edu.score && <p className="edu-score">Score: {edu.score}</p>}
              {edu.status && <p className="edu-score status">{edu.status}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
