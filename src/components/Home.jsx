import React from "react";

import pic from "../../public/WEB.avif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

import { FaLinkedin } from "react-icons/fa";

import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

// DM Tools Icons
import {
  SiGoogleanalytics,
  SiGoogleads,
  SiSemrush,
  SiMailchimp,
  SiCanva,
  SiWordpress,
  SiFacebook,
  SiInstagram,
  SiTiktok,
} from "react-icons/si";
import { FaChartLine } from "react-icons/fa";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-12 md:my-16"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-8 md:mt-12 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Portfolio</span>

            <br />
            <p className="text-sm md:text-md text-justify">
              Hello, I'm a <b>Digital Marketing Specialist</b> with additional{" "}
              <b>Full Stack Web Development</b> expertise.
              <br />
              My core strength lies in creating{" "}
              <b>data-driven marketing campaigns</b> that boost brand
              visibility, traffic, and sales. I specialize in{" "}
              <b>
                SEO, Google Ads, Meta Ads, PPC Campaigns, Social Media
                Marketing, Email Marketing, and Analytics
              </b>
              .
              <br />I am skilled in tools like{" "}
              <b>
                Google Analytics, Google Ads Manager, SEMrush, Meta Business
                Suite, Mailchimp, Canva, and WordPress
              </b>{" "}
              — enabling me to plan, execute, and optimize campaigns across
              multiple digital platforms.
              <br />
              Alongside DM, my <b>MERN stack development skills</b> allow me to
              create optimized websites and landing pages that align with
              marketing goals — ensuring higher engagement, conversions, and
              measurable ROI.
            </p>
            <br />

            {/* social media icons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Available on */}
              <div className="space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5 justify-center">
                  <li>
                    <a
                      href="https://github.com/TauseefFSWD"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/tauseef-akbar-a332521b1/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shaikh_tauseef832/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-2xl cursor-pointer"
                      />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Digital Marketing Tools */}
              <div className="space-y-2">
                <h1 className="font-bold text-center">
                  Digital Marketing Tools
                </h1>
                <div className="flex flex-wrap gap-4 justify-center">
                  <SiGoogleanalytics className="text-3xl hover:scale-110 duration-200 cursor-pointer text-blue-500" />
                  <SiGoogleads className="text-3xl hover:scale-110 duration-200 cursor-pointer text-green-500" />
                  <SiSemrush className="text-3xl hover:scale-110 duration-200 cursor-pointer text-orange-500" />
                  <SiFacebook className="text-3xl hover:scale-110 duration-200 cursor-pointer text-blue-700" />
                  <SiInstagram className="text-3xl hover:scale-110 duration-200 cursor-pointer text-pink-600" />
                  <SiTiktok className="text-3xl hover:scale-110 duration-200 cursor-pointer text-black" />
                  <SiMailchimp className="text-3xl hover:scale-110 duration-200 cursor-pointer text-yellow-500" />
                  <SiCanva className="text-3xl hover:scale-110 duration-200 cursor-pointer text-purple-500" />
                  <SiWordpress className="text-3xl hover:scale-110 duration-200 cursor-pointer text-indigo-700" />
                  <FaChartLine className="text-3xl hover:scale-110 duration-200 cursor-pointer text-gray-600" />
                </div>
              </div>

              {/* Web Dev Stack */}
              <div className="space-y-2 md:col-span-2">
                <h1 className="font-bold text-center">Web Development</h1>
                <div className="flex space-x-5 justify-center">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="md:w-1/2 md:ml-32 md:mt-12 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[400px] md:h-[400px]"
              alt="profile"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
