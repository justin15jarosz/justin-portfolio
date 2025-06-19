"use client";

import {
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiSpring,
  SiPostgresql,
  SiMongodb,
  SiJunit5,
  SiCucumber,
  SiKubernetes,
  SiDocker,
  SiRedis,
  SiApachekafka,
  SiRabbitmq,
  SiGooglecloud,
} from "react-icons/si";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Justin Jarosz",
    },
    {
      fieldName: "Languages",
      fieldValue: "English",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "American",
    },
    {
      fieldName: "Phone",
      fieldValue: "(732) 850-0076",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Email",
      fieldValue: "justin.t.jarosz@gmail.com",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
  items: [
    {
      company: "FDM Group",
      position: "Consultant - Technical Lead",
      duration: "2024 - 2025",
    },
    {
      company: "Consultant at Bullish LLC",
      position: "Backend Software Engineer",
      duration: "2023 - 2024",
    },
    {
      company: "Consultant at Bullish LLC",
      position: "Test Automation Engineer",
      duration: "2021 - 2023",
    },
    {
      company: "FDM Group",
      position: "Java Software Consultant",
      duration: "2020 - 2021",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Background of learning fundamentals of programing and software development. It includes formal education and intensive education programs.",
  info: [
    {
      institution: "Rowan University",
      degree: "BSc in Computer Science",
    },
    {
      institution: "FDM Group",
      degree: "Java Skills Lab",
    },
  ],
  courseWorkTitle: "Key Course work",
  courseWorkDescription:
    "Section is designed to highlight the relevant coursework from the education above.",
  courses: [
    {
      title: "Data Structures & Algorithms",
      institution: "Rowan University",
      description:
        "Focused on the understanding of how to organize and manipulate data using efficient algorithms.",
    },
    {
      title: "Object Oriented Programming",
      institution: "Rowan University",
      description:
        "Emphasized on the 4 pillars (Abstraction, Encapsulation, Inheritance, Polymorphism) and SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) principles.",
    },
    {
      title: "Software Engineering I/II",
      institution: "Rowan University",
      description:
        "Explored the major phases of the Software Lifecycle, including analysis, specification, design, implementation, and testing.",
    },
    {
      title: "Senior Project",
      institution: "Rowan University",
      description:
        "Advanced programming course aimed to work on large-scale team programming projects and make a formal presentation on their work. The course discusses program development, methodologies and strategies",
    },
    {
      title: "Spring Framework",
      institution: "Java Skills Lab",
      description:
        "Learn how to leverage powerful features in Spring like dependency injection, aspect-oriented programming (AOP), data access, and transaction management to build scalable, maintainable, and robust applications",
    },
    {
      title: "Spring Rest/Microservices",
      institution: "Java Skills Lab",
      description:
        "Introduction to building RESTful web services and microservices using the Spring Framework. Covered key concepts like creating REST APIs, working with Spring Boot for rapid development, integrating databases, handling security, and deploying microservices.",
    },
  ],
};

const skills = {
  title: "My Skills",
  skillList: [
    {
      category: "Back End",
      skills: [
        {
          name: "java",
          icon: <FaJava />,
        },
        {
          name: "spring boot",
          icon: <SiSpring />,
        },
        {
          name: "python",
          icon: <FaPython />,
        },
        {
          name: "postgreSQL",
          icon: <SiPostgresql />,
        },
        {
          name: "mongoDB",
          icon: <SiMongodb />,
        },
      ],
    },
    {
      category: "Front End",
      skills: [
        {
          name: "javascript",
          icon: <FaJs />,
        },
        {
          name: "react",
          icon: <FaReact />,
        },
        {
          name: "tailwind.css",
          icon: <SiTailwindcss />,
        },
        {
          name: "next.js",
          icon: <SiNextdotjs />,
        },
        {
          name: "figma",
          icon: <FaFigma />,
        },
        {
          name: "html",
          icon: <FaHtml5 />,
        },
        {
          name: "css",
          icon: <FaCss3 />,
        },
      ],
    },
    {
      category: "Testing & Tools",
      skills: [
        {
          name: "junit",
          icon: <SiJunit5 />,
        },
        {
          name: "cucumber",
          icon: <SiCucumber />,
        },
        {
          name: "kubernetes",
          icon: <SiKubernetes />,
        },
        {
          name: "docker",
          icon: <SiDocker />,
        },
        {
          name: "kafka",
          icon: <SiApachekafka />,
        },
        {
          name: "redis",
          icon: <SiRedis />,
        },
        {
          name: "rabbit MQ",
          icon: <SiRabbitmq />,
        },
        {
          name: "google could platform",
          icon: <SiGooglecloud />,
        },
      ],
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          {/* Tabs List */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {/* Experience Section */}
            <TabsContent value="experience" className="w-full">
              <div>
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="min-w-[6px] min-h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Section */}
            <TabsContent value="education" className="w-full">
              <div className="pb-[40px]">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/60 mx-0">{education.description}</p>
                <ScrollArea className="max-h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.info.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl min-h-[40px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
              <div>
                <h3 className="text-4xl font-bold">
                  {education.courseWorkTitle}
                </h3>
                <p className="text-white/60 mx-auto mx-0">
                  {education.courseWorkDescription}
                </p>
                <ScrollArea className="h-[600px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.courses.map((course, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] min-h-[300px] py-6 px-10 rounded-xl flex flex-col items-center lg:items-start gap-1"
                        >
                          <h3 className="text-xl xl:min-h-[60px] text-center lg:text-left">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-3 mb-2">
                            <p className="text-white/60">
                              {course.institution}
                            </p>
                          </div>
                          <div className="border border-white w-full" />
                          <div className="flex items-center gap-3">
                            <p className="text-white/60">
                              {course.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Section */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                </div>
                {skills.skillList.map((skill, index) => {
                  return (
                    <div
                      className="flex flex-col gap-[30px] text-center xl:text-left"
                      key={index}
                    >
                      <h3 className="text-xl font-bold text-white/60">
                        {skill.category}
                      </h3>
                      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {skill.skills.map((technology, index) => {
                          return (
                            <li key={index}>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex justify-center items-center group">
                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                      {technology.icon}
                                    </div>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="capitalize">
                                      {technology.name}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* About Me Section */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
