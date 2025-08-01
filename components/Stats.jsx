"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 3,
    text: "Years of Experience",
  },
  {
    num: 3,
    text: "Projects Completed",
  },
  {
    num: 4,
    text: "Technologies Mastered",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vh] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex items-center gap-4 xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p className={` leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
