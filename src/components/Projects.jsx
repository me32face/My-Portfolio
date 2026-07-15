import React, { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle, FaTimes } from "react-icons/fa";
import "../assets/styles/Projects.css";

function Projects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCaseStudy(null);
      }
    };
    if (activeCaseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCaseStudy]);

  const projects = [
    {
      title: "MarryMitra",
      type: "Enterprise-Grade Matrimonial Platform",
      description:
        "A multi-tenant matrimonial platform supporting central administration, franchise partners, support staff, and end-users. Features an AI conversation assistant powered by Google Gemini, real-time WebSocket chat messaging, automated usage limits, and Razorpay-secured monetization.",
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "Gemini API",
        "Razorpay",
        "Tailwind CSS"
      ],
      links: [],
      caseStudy: {
        overview: "MarryMitra is a centralized, multi-tenant matrimony platform designed to connect end-users through a real-time web application, supported by dedicated admin control portals, staff dashboards, and localized franchise agent consoles.",
        features: [
          {
            title: "AI-Powered Contextual Conversation Coach",
            desc: "Developed an AI-assisted messaging assistant using the Google Gemini API to boost user response rates.",
            tech: "Configured Gemini JSON Schema response formats to eliminate conversational filler. Handled multilingual chats including English, Malayalam, and Manglish. Implemented automatic fallback arrays during API rate limits to guarantee uninterrupted communication.",
            highlights: "Dynamic UI bubble options, smooth Framer Motion insertion animation, and auto-populated chat text boxes."
          },
          {
            title: "Multi-Tenant Enterprise Administration & Analytics",
            desc: "Created a full-scale administration console to manage the system health, user profiles, and monetization metrics.",
            tech: "Integrated Recharts and Chart.js to build responsive analytics dashboards showing growth metrics. Built a secure moderation workflow where changes to user profiles are held in a pending queue for approval. Integrated jsPDF and xlsx for instant generation of PDF reports and Excel ledgers.",
            highlights: "Interactive statistics cards, clean modal popups for profile reviews, and smooth state updates using SweetAlert2 and React Hot Toast."
          },
          {
            title: "Real-Time Communication Grid with WebSockets",
            desc: "Engineered a highly interactive messaging client using WebSockets (Socket.io) to support synchronous chat between user matches.",
            tech: "Managed real-time socket connections, synchronization of read receipts, typing statuses, and reaction triggers. Enforced strict 15-minute windows on message edits and built a dual-mode deletion pipeline ('delete for me' vs. 'delete for everyone').",
            highlights: "Emoji pickers, media attachments (via Cloudinary integration), interactive chat lists with unread count bubbles, and custom online status badges."
          }
        ]
      }
    },
    {
      title: "CV Craft",
      type: "Full Stack Resume Builder",
      description:
        "A full-stack resume builder using Next.js and Express.js, featuring an interactive drag-and-drop interface via React DnD, Google Gemini AI integration for context-aware resume content, and a custom Undo/Redo history engine.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "Gemini AI",
        "Tailwind CSS",
        "React DnD",
        "jsPDF"
      ],
      links: [],
      caseStudy: {
        overview: "CV Craft is a highly advanced, production-ready full-stack application dealing heavily in complex client-side state manipulation, DOM-to-PDF rendering, and structured prompt engineering. It leverages a modern Next.js App Router frontend and an MVC-style Express backend secured with strict rate limiting to prevent API abuse.",
        features: [
          {
            title: "AI-Powered Generation & Prompt Engineering",
            desc: "Integrated Google Gemini AI (gemma-3-12b) to automatically generate context-aware resume content such as summaries, skills, and experiences.",
            tech: "Abstracted GeminiService class. Highly structured prompts with strict delimiters and specific line structures force the AI to format its output for seamless plain-text parsing into the builder's state objects.",
            highlights: "Intelligent data extraction, scalable multi-section generation, and robust context awareness."
          },
          {
            title: "Complex Editor State Management",
            desc: "Implemented a suite of custom React Contexts to manage the intensive state requirements of the resume editor.",
            tech: "Custom-built Undo/Redo engine tracking a history array (capped at 50 states). SelectedElementContext for contextual toolbars and PageManagerContext for handling DOM pagination. Used lz-string to compress complex JSON state objects for efficient storage.",
            highlights: "Memory-efficient history traversal, precise element targeting, and robust multi-page content flow."
          },
          {
            title: "Interactive Drag & Drop and DOM-to-PDF",
            desc: "Engineered a dynamic layout manipulation system paired with high-fidelity client-side PDF export.",
            tech: "React DnD with HTML5 backend for native-feeling modular component dragging. jsPDF and html2canvas for capturing and downloading precise resume PDFs directly from the DOM.",
            highlights: "Dynamic CSS grid template switching, scale-aware ZoomControl, and seamless data state retention during layout changes."
          }
        ]
      }
    },
    {
      title: "Emithram Platform",
      type: "Enterprise Franchise & Service Platform",
      description:
        "A massive, multi-faceted digital service platform built to handle franchise management, digital service distribution, staff administration, and comprehensive training schedules. This core system was also adapted to create the Digimithram and Digigramam platforms by customizing the UI and feature sets.",
      tech: [
        "React 19",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Puppeteer",
        "Leaflet",
        "Cloudinary"
      ],
      links: [],
      caseStudy: {
        overview: "Emithram is an enterprise-level platform managing everything from user onboarding and document generation to geographical location tracking. It features a decoupled architecture with a public Frontend, robust Admin dashboard, and a centralized RESTful API. The core architecture was successfully cloned and customized to deploy two additional platforms: Digimithram and Digigramam.",
        features: [
          {
            title: "Advanced Franchise Management & Onboarding",
            desc: "Manages diverse franchise roles, dynamic fees, and concurrent session limits across multiple service packages.",
            tech: "Node.js, Express, strict session handlers, complex MongoDB schemas.",
            highlights: "Seamless onboarding workflow, robust role-based access control, and scalable franchise tracking."
          },
          {
            title: "Secure Digital Agreements & Verification",
            desc: "A built-in system allowing users to digitally sign documents with binary signature capture, validated via time-sensitive OTPs.",
            tech: "Custom binary data capture, secure OTP generation and verification flow.",
            highlights: "Ensures legal and procedural compliance with a seamless user verification process."
          },
          {
            title: "Dynamic Document & Asset Generation",
            desc: "The backend dynamically generates, stores, and serves verifiable certificates, posters, and PDF reports.",
            tech: "Puppeteer, pdfkit, pdf-lib for generation, and Cloudinary for robust media storage.",
            highlights: "On-the-fly PDF creation, integrated cloud asset management, and browser document previews."
          },
          {
            title: "Geographical Tracking & Analytics",
            desc: "Integrates precise location data to geographically track service centers and users alongside comprehensive dashboard analytics.",
            tech: "Leaflet & React-Leaflet for mapping, TanStack React Table, and Recharts for admin analytics.",
            highlights: "Interactive maps, dynamic data visualization, and structured geographical tracking."
          }
        ]
      }
    },
    {
      title: "TechBlog",
      type: "Full-Stack Web Application",
      description:
        "A comprehensive MERN stack blog platform featuring AI-generated summaries, an integrated chatbot, and voice-to-text post creation. It includes user roles, an interactive comment system with badges, robust post management, and an administrative dashboard.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "Vercel", "Render"],
      links: [
        {
          label: "Live App",
          url: "https://techblog-2.vercel.app",
          icon: <FaExternalLinkAlt />,
        },
        {
          label: "Frontend",
          url: "https://github.com/me32face/Techblog_2-FrontEnd",
          icon: <FaGithub />,
        },
        {
          label: "Backend",
          url: "https://github.com/me32face/TechBlog_2-Backend",
          icon: <FaGithub />,
        },
        {
          label: "Video Demo",
          url: "https://www.linkedin.com/posts/akshay-a-023a472a4_mern-fullstackdeveloper-reactjs-activity-7343886198991405058-mEcy",
          icon: <FaPlayCircle />,
        },
      ],
    },
    {
      title: "Travel Buddy",
      type: "RPA Automation System",
      description:
        "An automated flight booking and data aggregation system built with UiPath. It seamlessly integrates Excel automation, email handling, and web scraping to gather travel data based on user input, sorts the information, and automatically emails the results to the user.",
      tech: ["UiPath", "Web Scraping", "Excel Automation", "Email Integration"],
      links: [],
    },
  ];

  return (
    <div className="section-container" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div className="project-card glass-card" key={idx}>
            {/* Decorative Top Banner */}
            <div className={`project-banner banner-${idx + 1}`}>
              <div className="banner-overlay"></div>
              <h3 className="banner-title">
                {proj.title.substring(0, 2).toUpperCase()}
              </h3>
            </div>

            <div className="project-content">
              <div className="project-header">
                <span className="project-type">{proj.type}</span>
                <h3 className="project-title">{proj.title}</h3>
              </div>

              <p className="project-description">{proj.description}</p>

              <div className="project-tech">
                {proj.tech.map((t, i) => (
                  <span key={i} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              {(proj.caseStudy || (proj.links && proj.links.length > 0)) && (
                <div className="project-links">
                  {proj.caseStudy && (
                    <button
                      className="btn-primary"
                      onClick={() => setActiveCaseStudy(proj)}
                    >
                      View Case Study
                    </button>
                  )}
                  {proj.links && proj.links.length > 0 && (
                    <div className="links-group">
                      {proj.links.map((link, i) => (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          key={i}
                          className={link.label === "Live App" ? "btn-primary" : "btn-secondary"}
                          title={link.label}
                        >
                          {link.icon} <span>{link.label}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Case Study Overlay */}
      {activeCaseStudy && (
        <div className="modal-backdrop" onClick={() => setActiveCaseStudy(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setActiveCaseStudy(null)}
              aria-label="Close Case Study"
            >
              <FaTimes />
            </button>
            <div className="modal-header">
              <span className="modal-project-type">{activeCaseStudy.type}</span>
              <h3 className="modal-project-title">{activeCaseStudy.title}</h3>
            </div>
            <div className="modal-body">
              <div className="modal-overview-section">
                <h4>Project Overview</h4>
                <p className="modal-overview-text">{activeCaseStudy.caseStudy.overview}</p>
                <div className="modal-tech-stack">
                  <h5>Technologies Used</h5>
                  <div className="project-tech">
                    {activeCaseStudy.tech.map((t, i) => (
                      <span key={i} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="modal-features-section">
                <h4>Core Feature Showcases</h4>
                <div className="modal-features-list">
                  {activeCaseStudy.caseStudy.features.map((feat, idx) => (
                    <div className="modal-feature-item" key={idx}>
                      <h5 className="modal-feature-title">{feat.title}</h5>
                      <p className="modal-feature-desc">{feat.desc}</p>
                      <div className="modal-feature-meta">
                        <strong>Technical Implementation:</strong>
                        <p>{feat.tech}</p>
                      </div>
                      <div className="modal-feature-meta">
                        <strong>Visual Highlights:</strong>
                        <p>{feat.highlights}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
