// src/components/TechSkills.js
import React from "react";
import "./TechSkills.css";

const TechSkills = () => {
  const techData = [
    {
      title: "Full Stack Development",
      description:
        "Proficient in MERN stack (MongoDB, Express, React, Node.js). Skilled at building responsive, user-friendly frontend interfaces and secure, scalable backend systems. Experienced with API development, database design, version control (Git), and agile methodologies.",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Expert in on-page and off-page SEO, keyword research, technical SEO, and link building strategies. Skilled in using SEMrush, Google Analytics, and Google Search Console to improve organic traffic and search rankings.",
    },
    {
      title: "Google Ads",
      description:
        "Hands-on experience in creating, managing, and optimizing PPC campaigns. Skilled in keyword targeting, A/B testing, conversion tracking, and budget optimization to achieve maximum ROI.",
    },
    {
      title: "Meta Ads (Facebook & Instagram)",
      description:
        "Specialized in running Facebook and Instagram ad campaigns. Proficient in audience targeting, retargeting strategies, ad creatives, and performance tracking via Meta Business Suite.",
    },
    {
      title: "Digital Marketing Tools",
      description:
        "Proficient with tools like Mailchimp (Email Marketing), Canva (Graphic Design), WordPress (Website Management), and TikTok Ads. Adept at using analytics to monitor performance and optimize campaigns.",
    },
  ];

  return (
    <div className="tech-skills">
      <h2>Technical & Marketing Skills</h2>
      <div className="tech-cards">
        {techData.map((tech, index) => (
          <div className="tech-card" key={index}>
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechSkills;
