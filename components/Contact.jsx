import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import Typewriter from "./Typewriter";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(732) 850-0076",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "justin.t.jarosz@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "NJ",
  },
];

export const Contact = ({ onClose }) => {
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
          Contact Information
        </h1>
        {info.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 xl:justify-start"
            >
              <div className="w-[52px] h-[52px] bg-[#27272c] text-accent rounded-md flex items-center justify-center my-2">
                <div className="text-[28px]">{item.icon}</div>
              </div>
              <p className="text-gray-800 text-sm text-center mb-5">
                <Typewriter text={item.description} />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
