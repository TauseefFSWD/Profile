// src/components/Projects.js
import React from "react";
import "./PortFolio.css";

const PortFolio = () => {
  const educationData = [
    {
      title: "Bachelor of Science in Information Technology",
      institution: "Mumbai University",
      year: "2019 - 2022",
      description:
        "Graduated with 9.5 CGPA, focusing on software development, data structures, algorithms, and web development.",
    },

    {
      title: "Full Stack Web Development Program",
      institution: "UpGrad",
      year: "2023 - 2024",
      description:
        "Specialized in MERN stack development and modern web technologies.",
    },
    {
      title: "Advanced Digtal Marketing Program",
      institution: "PIIDM",
      year: "2025",
      description:
        "Certified in SEO, Google Ads, Meta Ads, Email Marketing, and Analytics, with hands-on expertise in multiple digital platforms.",
    },
  ];

  const projectData = [
    {
      title: "CinePalace",
      description:
        "CinePalace is a cutting-edge movie website built using the MERN stack, offering personalized recommendations, robust search, and secure movie rentals with a sleek, responsive design.",
      link: "https://cinepalace.onrender.com/",
    },

    {
      title: "YumCart",
      description:
        "YumCart is a MERN-based food ordering app with restaurant listings, customizable orders, secure payments, and real-time tracking — optimized for both mobile and desktop.",
      link: "https://yumcart.onrender.com/",
    },
    {
      title: "EliteBookings",
      description:
        "EliteBookings is a multi-service booking platform for hotels, flights, and movies. Built with React (Vite) and Node.js/Express, it ensures real-time availability and smooth booking experiences.",
      link: "https://elitebookings.onrender.com/",
    },
  ];

  return (
    <div className="projects" id="Education">
      {/* Education & Certifications */}
      <h2>Education & Certifications</h2>
      <div className="project-cards">
        {educationData.map((edu, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h3>{edu.title}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.year}</p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Projects Section */}
      <h2>Some of My Recent Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="card" key={index}>
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortFolio;
