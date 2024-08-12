// src/components/Projects.js
import React from "react";
import "./PortFolio.css";

const PortFolio = () => {
  const projectData = [
    {
      title: "Chit-Chat Hub",
      description:
        "Developed a messaging website using React for a dynamic frontend, with Bootstrap for responsive design. Implemented real-time communication and user authentication with Node.js and Express, and managed data using MongoDB. Features include intuitive chat interactions, group messaging, and emoji support, all optimized for a seamless user experience.",
      link: "https://chitchat-hub.onrender.com/",
    },
    {
      title: "Shop-IT",
      description:
        "Developed a comprehensive e-commerce website featuring product listings, a shopping cart, and secure checkout functionality. Utilized React for a dynamic frontend experience, Bootstrap for responsive design, and Node.js with Express for backend services. Integrated MongoDB for scalable data management, supporting CRUD operations for products and user accounts. The site includes user authentication, payment processing, and a seamless shopping experience.",
      link: "https://shop-it-fh93.onrender.com/",
    },
    {
      title: "PageTurner",
      description:
        "PageTurner is a state-of-the-art book-selling platform built with the MERN stack. It features a sleek, user-friendly interface with a new dark mode, a seamless checkout process, and showcases your expertise in the book industry. Additional features include personalized book recommendations, advanced search filters, and user reviews to enhance the browsing experience. The site is designed to be responsive and engaging across all devices.",
      link: "https://pageturner-hbja.onrender.com/",
    },
  ];

  return (
    <div className="projects" id="Projects">
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
