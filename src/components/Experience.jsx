import React from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import "../assets/styles/Experience.css";

function ProjectCard({ proj, isSingle }) {
  return (
    <div className={`project-card ${isSingle ? "single-project-card" : ""}`}>
      {proj.name && <h5 className="project-name">{proj.name}</h5>}
      <ul className="project-points">
        {proj.points.map((pt, ptIndex) => {
          const splitIndex = pt.indexOf(":");
          if (splitIndex !== -1) {
            const prefix = pt.substring(0, splitIndex);
            const rest = pt.substring(splitIndex + 1);
            return (
              <li key={ptIndex}>
                <strong className="point-prefix">{prefix}:</strong>
                <span className="point-text">{rest}</span>
              </li>
            );
          }
          return (
            <li key={ptIndex} className="point-text">
              {pt}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Full Stack Web Developer",
      company: "ESTA Enterprises Pvt. Ltd.",
      duration: "Nov 2025 – Present",
      projects: [
        {
          name: "Key Engineering Accomplishments",
          points: [
            "Centralized Architecture & Authentication: Engineered a multi-tenant matrimonial platform (MarryMitra) with a Node.js/Express API and Next.js 16 (App Router, React 19) portals, implementing secure session states via JWTs in HTTP-Only cookies.",
            "AI-Assisted Integrations: Developed an AI conversational helper utilizing the Google Gemini API to serve context-aware, multilingual (English, Malayalam, Manglish) response templates with automatic fallback systems.",
            "Real-Time Messaging: Implemented real-time, high-concurrency chat services using Socket.io, supporting live presence tracking, receipts, reactions, and customizable deletion protocols.",
            "Reporting & Dashboards: Built operational administration consoles utilizing Recharts/Chart.js for growth analytics and integrated jsPDF/SheetJS to automate Excel ledgers and PDF reporting.",
            "Payment Pipelines: Formulated subscription monetization grids by integrating the Razorpay gateway with cron-scheduled usage limit resets and wallet-based unlock ledgers.",
            "Role-Based Access Control: Configured granular role-based access controls (RBAC) for franchise and support portals, streamlining registration and localized sales auditing."
          ],
        },
      ],
    },
    {
      id: 2,
      role: "MERN Full Stack Intern",
      company: "Srishti Campus, Thiruvananthapuram",
      duration: "Jan 2025 – Jun 2025",
      projects: [
        {
          name: "Core Responsibilities",
          points: [
            "Developed full-stack web applications using React, Node.js, Express, and MongoDB.",
            "Built and consumed RESTful APIs following structured Git workflows.",
            "Collaborated in team-based development to implement real-world applications.",
            "Assisted in deployment using platforms such as Render and Vercel.",
          ],
        },
      ],
    },
  ];

  return (
    <div className="section-container" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-container">
        <div className="experience-grid">
          {experiences.map((exp) => (
            <div className="experience-card glass-card" key={exp.id}>
              <div className="experience-header">
                <div className="experience-title-group">
                  <h3 className="experience-role">{exp.role}</h3>
                  <h4 className="experience-company">
                    <FaBuilding className="icon-company" /> {exp.company}
                  </h4>
                </div>
                <div className="experience-duration-wrapper">
                  <span className="experience-duration">
                    <FaCalendarAlt className="icon-calendar" /> {exp.duration}
                  </span>
                </div>
              </div>

              <div className={`experience-projects ${exp.projects.length === 1 ? "single-project" : ""}`}>
                {exp.projects.map((proj, pIndex) => (
                  <ProjectCard proj={proj} isSingle={exp.projects.length === 1} key={pIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
