// src/components/Skills.js
import React from "react";
import "./Skills.css";

const Skills = () => {
  const skillsData = [
    {
      name: "SEO (Search Engine Optimization)",
      description:
        "Experienced in optimizing websites to improve visibility on search engines. Skilled in keyword research, on-page SEO, technical SEO, and link building strategies to drive organic traffic and improve rankings.",
      icon: "📈",
    },
    {
      name: "Google Ads",
      description:
        "Proficient in managing Google Ads campaigns, including search, display, and video ads. Experienced in keyword targeting, ad copywriting, bid management, and conversion tracking to maximize ROI.",
      icon: "🟢",
    },
    {
      name: "Website Development",
      description:
        "Proficient in developing full-stack applications using MongoDB, Express, React, Node.js, and WordPress. Skilled in creating responsive frontends, scalable backends, RESTful APIs, and managing databases for modern web applications.",
      icon: "💻",
    },
    {
      name: "Meta Ads (Facebook & Instagram)",
      description:
        "Skilled in running and optimizing paid campaigns on Facebook and Instagram. Expertise in audience targeting, A/B testing, ad creatives, and performance analytics to generate quality leads and conversions.",
      icon: "📊",
    },
    {
      name: "Google Analytics & Tag Manager",
      description:
        "Strong knowledge of Google Analytics (GA4) and Google Tag Manager for tracking website performance. Experienced in setting up events, conversion tracking, custom reports, and analyzing user behavior.",
      icon: "🔍",
    },
    {
      name: "Email & Content Marketing",
      description:
        "Proficient in using tools like Mailchimp and HubSpot for email campaigns. Skilled in writing engaging content, creating automation workflows, and analyzing campaign performance.",
      icon: "✉️",
    },
  ];

  return (
    <div className="skills" id="Skills">
      <h2>My Skills</h2>
      <div className="skills-cards">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-content">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
