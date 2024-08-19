// src/components/Projects.js
import React from "react";
import "./PortFolio.css";

const PortFolio = () => {
  const projectData = [
    {
      title: "CinePalace",
      description:
        "CinePalace is a cutting-edge movie website built using the MERN stack, showcasing a seamless integration of MongoDB, Express, React, and Node.js. It provides a dynamic and visually captivating user experience, featuring an extensive collection of movies and TV shows. The platform includes personalized movie recommendations, a robust search feature, and a centralized payment system for renting movies. Its responsive design ensures optimal performance across all devices, while the modern, dark-themed interface aligns with the cinematic experience. CinePalace not only delivers a rich visual appeal but also leverages advanced technologies for a smooth and engaging user journey.",
      link: "https://elitebookings.onrender.com/",
    },
    {
      title: "EliteBookings",
      description:
        "EliteBookings is an all-in-one booking platform designed to provide a seamless experience for travelers and entertainment seekers. It offers an extensive range of services, including hotel reservations, movie theater bookings, and flight reservations. Leveraging a modern technology stack, EliteBookings utilizes React and Vite for a responsive and dynamic user interface, while Node.js and Express power its robust backend, ensuring efficient data handling and seamless integrations.The platform features a sleek design achieved through custom CSS, allowing for a highly tailored and visually appealing user experience across all devices. With real-time availability, competitive pricing, and user-friendly features, EliteBookings is dedicated to delivering a superior booking experience, making it the go-to solution for all your travel and entertainment needs.",
      link: "https://cinepalace.onrender.com/",
    },
    {
      title: "Chit-Chat Hub",
      description:
        "Developed a messaging website using React for a dynamic frontend, with Bootstrap for responsive design. Implemented real-time communication and user authentication with Node.js and Express, and managed data using MongoDB. Features include intuitive chat interactions, group messaging, and emoji support, all optimized for a seamless user experience.",
      link: "https://chitchat-hub.onrender.com/",
    },
    {
      title: "YumCart",
      description:
        "YumCart is a MERN stack-based food ordering app that offers a user-friendly experience for browsing restaurants, exploring menus, and placing orders. Key features include secure user authentication, detailed restaurant listings, customizable orders, secure payments, and real-time order tracking. The app is built with MongoDB, Express.js, React.js, and Node.js, ensuring a responsive and efficient experience across both desktop and mobile devices.",
      link: "https://yumcart.onrender.com/",
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
