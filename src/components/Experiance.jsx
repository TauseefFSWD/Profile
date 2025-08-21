// src/components/Experiance.js
import React from "react";
import Skills from "./Skills";

function Experiance() {
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <Skills />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold mb-5">Portfolio & Resume</h1>
        <p className="text-lg text-gray-700 mb-6">
          You can view or download my portfolio and resume below. For any
          queries, feel free to reach me directly.
        </p>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a
            href="https://drive.google.com/file/d/1DXaUH89nX2HfTXqEFiLb_sfinSmEt_JO/view?usp=sharing" // replace with your actual portfolio file path
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            📂 View Portfolio
          </a>

          <a
            href="https://drive.google.com/file/d/1wvgDyl-gRW6iUaOscNQx0tg74t0Ay7Gh/view?usp=sharing" // replace with your actual resume file path
            download
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            📄 View Resume
          </a>
        </div>

        {/* Contact Number */}
        <div className="mt-6 text-lg text-gray-800">
          📞 Contact: <span className="font-semibold">+91 8779745959</span>
        </div>
      </div>
    </div>
  );
}

export default Experiance;
