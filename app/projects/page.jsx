"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const projects = [
  {
    num: "01",
    category: "backend",
    teamSize: "4",
    title: "Stock Prediction Algorithm",
    description:
      "The purpose of the project was to develop a machine learning algorithm to track the history of stock prices to help predict the future prices of other stocks. The project team was comprised of 4 collaborators. My contributions to the project was to assist with setting up and training the alogrithm. Other contributions include setting up the Twitter sentiment analysis and the confidence meter to assist in gauging the future prediction prices.",
    stack: [
      {
        name: "Python",
      },
      {
        name: "Python Flask",
      },
      {
        name: "Azure",
      },
    ],
    image: "/assets/coming_soon.jpg",
    live: "",
    github: "",
    githubOther: "TBD",
  },
  {
    num: "02",
    category: "fullstack",
    teamSize: "2-6",
    title: "Insurance Application",
    description:
      "At FDM, I contributed in a pod to develop an insurance application. Here, I worked as a Technical Lead, where I was responsible for overseeing the development process, where I transformed the requirements from the stakeholders and project manager into tasks, assigned them to team members, and ensured that the project was on track. I also contributed to the development of the application by writing code, developing on the frontend and backend. I contributed to the development of the signup and login features, ensuring the user experience was seamless and secure. To add to account security, I also implemented two-factor authentication (2FA) using email verification, which added an extra layer of security to the application. The email system was also built to send emails to the customers about important changes relating to their account.",
    stack: [
      {
        name: "Java",
      },
      {
        name: "Spring Boot",
      },
      {
        name: "MySQL",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
    ],
    image: "/assets/coming_soon.jpg",
    live: "",
    github: "",
    githubOther: "FDM has a proprietary right to the code.",
  },
  {
    num: "03",
    category: "backend",
    teamSize: "1",
    title: "Spring Boot Practice",
    description:
      "This project was developed to expand my skillset within Spring Boot. It is a simple RESTful API that demonstrates CRUD operations using Spring Boot and MySQL. The project includes features such as user authentication, data validation, and error handling. It serves as a practice project to solidify my understanding of Spring Boot concepts and best practices. The project is not intended for production use but rather as a learning tool to enhance my backend development skills.",
    stack: [
      {
        name: "Java",
      },
      {
        name: "Spring Boot",
      },
      {
        name: "MySQL",
      },
      {
        name: "MongoDB",
      },
      {
        name: "Microservices",
      },
      {
        name: "Docker",
      },
      {
        name: "Kafka",
      },
    ],
    image: "/assets/coming_soon.jpg",
    live: "",
    github: "",
    githubOther: "TBD",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px] xl:h-[525px]">
          {/* Project */}
          <div className="w-full xl:w-[50%] h-full flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[15px] xl:justify-between h-full">
              {/* Project Number */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              {/* Project Title */}
              <h2 className="capitalize text-[42px] font-bold leading-none text-white">
                {project.title}
              </h2>

              {/* Project Category */}
              <div>
                <p>Category:</p>
                <p className="capitalize text-white/60">
                  {project.category} project
                </p>
              </div>

              {/* Team Size */}
              <div>
                <p>Team Size:</p>
                <p className="capitalize text-white/60">{project.teamSize}</p>
              </div>

              {/* Project Stack */}
              <div>
                <p>Stack:</p>
                <ul className="flex flex-wrap gap-4 ">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length - 1 && ", "}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Project Links */}
              <div className="flex items-center gap-4">
                {/* Github Repo Link */}
                {project.live === "" ? (
                  <p className="text-white/60 text-sm italic">
                    {project.githubOther}
                  </p>
                ) : (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* Live Project Link */}
                {project.live === "" ? (
                  <div />
                ) : (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Change Projects */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <ProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
        {/* Section Divider */}
        <div className="border border-white/20 my-5" />

        {/* Project Description */}
        <p className="text-white/60">{project.description}</p>
      </div>
    </motion.div>
  );
};

export default Projects;
