import React from 'react';
import '../assets/styles/Education.css';


const EducationTimeline = () => {
  const educationData = [
    {
      degree: "Diploma in Computer Engineering",
      board: "State Board of Technical Education, Kerala",
      institute: "College of Engineering Pathanapuram",
      year: "2021 – 2024",
      score: "CGPA: 7.9"
    },
    {
      degree: "Higher Secondary – Science",
      board: "Board of Higher Secondary Examinations, Kerala",
      institute: "GHSS Ashthamudi, Kundara, Kollam",
      year: "2021",
      score: "Percentage: 79%"
    },
    {
      degree: "SSLC",
      board: "Kerala State Board of Public Examinations",
      institute: "GHSS Anchalummoodu",
      year: "2019",
      score: "Percentage: 85%"
    },
  ];

  return (
    <div className="edu-timeline-main">
      <div className="edu-timeline-container">
        <h2 className="edu-timeline-title">My <span>Education</span></h2>
        <div className="edu-timeline-wrapper">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`edu-timeline-card ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="edu-content">
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-details">{edu.institute}</p>
                <p className="edu-details">{edu.board}</p>
                <p className="edu-details">{edu.year}</p>
                <p className="edu-score">{edu.score}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationTimeline;
