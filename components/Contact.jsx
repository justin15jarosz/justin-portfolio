"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

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

export const Contact = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-4 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
          {info.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex items-center justify-center gap-4 xl:justify-start"
              >
                <div className="w-[52px] h-[52px] xl:w-[72px]xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                  <div className="text-[28px]">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <p className="text-white/60">{item.title}</p>
                  <h3 className="text-xl">{item.description}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
