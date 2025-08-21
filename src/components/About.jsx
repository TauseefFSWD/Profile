import React from "react";
import "./About.css";
import Education from "./Education";
import TechSkills from "./TechSkills";
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-3"
    >
      <section class="about" id="Work">
        <Education />
        <TechSkills />
      </section>
    </div>
  );
}

export default About;
