// src/components/Education.js
import React from "react";
import "./Education.css";

const Education = () => {
  const experienceData = [
    {
      role: "Digital Marketing Intern",
      company: "PIIDM (Pashium International Institute of Digital Marketing)",
      year: "June 2025-August 2025",
      description:
        "Worked on SEO, Google Ads, and Social Media Marketing campaigns. Learned hands-on strategies to optimize websites and improve brand visibility.",
    },
    {
      role: "Odoo Developer & SEO Executive",
      company: "CaptainScrap",
      year: "Nov 2024 - April 2025",
      description:
        "Utilized Odoo Website Builder to design, develop, and deploy the company's full website,Implemented complete SEO strategies, including technical audits,structured data, on-page optimization, and keyword targeting.",
    },
    {
      role: "Web Developer Intern",
      company: "The Starter Labs",
      year: "August 2024 - Nov 2024",
      description:
        "Developed and customized WordPress and Shopify websites, improving responsiveness, load times, and sales conversions by up to 40% ,Collaborated with clients and teams to deliver tailored web solutions,streamlining project timelines by 20%.",
    },
    {
      role: "Full Stack Web Developer Intern",
      company: "NTech Global Solutions",
      year: "Dec 2023 - April 2024",
      description:
        "Developed and maintained web applications using MERN stack. Contributed to frontend UI/UX improvements and backend API integration.",
    },
  ];

  return (
    <div className="education">
      <h2>Work Experience</h2>
      <div className="education-cards">
        {experienceData.map((exp, index) => (
          <div className="education-card" key={index}>
            <h3>{exp.role}</h3>
            <h4>{exp.company}</h4>
            <p>{exp.year}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
