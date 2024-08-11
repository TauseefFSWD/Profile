import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import react from "..//..//public/react.png";
import javascript from "../../public/javascript.png";
import boot from "..//../public/bt.jpg";
import mongo from "../../public/mongodb.jpg";
import tailwind from "../../public/tailwind.png";
import express from "..//..//public/ex.png";
import an from "..//..//public/angular.png";
import jqu from "..//..//public/jq.png";
import Skills from "./Skills";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },

    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJS",
    },

    {
      id: 5,
      logo: mongo,
      name: "MongoDB",
    },
    {
      id: 6,
      logo: tailwind,
      name: "TailwindCSS",
    },
    {
      id: 7,
      logo: boot,
      name: "BootStrap",
    },
    {
      id: 8,
      logo: express,
      name: "ExpressJS",
    },
    {
      id: 9,
      logo: an,
      name: "AngularJS",
    },
    {
      id: 10,
      logo: jqu,
      name: "JQuery",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <Skills />
      <div>
        <h1 className="text-3xl  text-bold mb-5 text-center mt-4 ">
          Experience
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          I have over 2 years of experience with the technologies listed below.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-2 rounded-full md:w-[200px] md:h-[200px] shadow-md p-4 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
              key={id}
            >
              <img
                src={logo}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                alt={name}
              />
              <div className="mt-3 text-center font-medium text-gray-800">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
