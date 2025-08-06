import React from "react";
import Typewriter from "./Typewriter";

const NotesApp = ({ onClose }) => {
  const aboutMeText = `Passionate and results-driven software engineer focused on creating innovative, efficient, and scalable solutions. With a strong foundation in problem-solving, I thrive in dynamic environments and am committed to continuously learning and leveraging the latest technologies to deliver high-quality, reliable software that drives business success.`;

  return (
    <div className="bg-white dark:bg-gray-800 h-full p-4 relative">
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-gray-800 dark:text-white"
      >
        &lt; Back
      </button>
      <div className="mt-10">
        <h1 className="text-2xl text-black font-bold mb-4 text-center">
          About Me
        </h1>
        <div className="text-gray-800 dark:text-white mt-10">
          <p className="text-sm text-center">
            <Typewriter text={aboutMeText} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesApp;
