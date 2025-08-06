"use client";
import React, { useState } from "react";
import AppIcon from "./AppIcon";
import NotesApp from "./NotesApp";
import TicTacToe from "./TicTacToe";
import Contact from "./Contact";
import Wordle from "./Wordle";

const Phone = () => {
  const [activeApp, setActiveApp] = useState(null);

  const openApp = (appName) => {
    setActiveApp(appName);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  return (
    <div className="relative border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl xl:mr-10">
      <div className="w-[140px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white dark:bg-gray-800">
        {activeApp === "aboutme" ? (
          <NotesApp onClose={closeApp} />
        ) : activeApp === "contact" ? (
          <Contact onClose={closeApp} />
        ) : activeApp === "tictactoe" ? (
          <TicTacToe onClose={closeApp} />
        ) : activeApp === "wordle" ? (
          <Wordle onClose={closeApp} />
        ) : (
          <div className="h-full w-full bg-cover bg-center bg-[url(/assets/zoro.jpg)]">
            <div className="grid grid-cols-3 gap-4 px-4 py-8">
              <AppIcon href="/resume" icon="📄" label="Resume" />
              <AppIcon href="/projects" icon="📁" label="Projects" />
              <div onClick={() => openApp("contact")}>
                <AppIcon icon="✉️" label="Contact" />
              </div>
              <div onClick={() => openApp("aboutme")}>
                <AppIcon icon="📝" label="About Me" />
              </div>
              <AppIcon />
              <div onClick={() => openApp("tictactoe")}>
                <AppIcon
                  icon="❌⭕"
                  label="TicTacToe"
                  iconClassName="text-xl"
                />
              </div>
              <div onClick={() => openApp("wordle")}>
                <AppIcon icon="🔠" label="Wordle" />
              </div>
              <AppIcon />
              <AppIcon
                href="https://github.com/justin15jarosz"
                icon="github"
                label="GitHub"
              />
              <AppIcon
                href="https://www.linkedin.com/in/justin-jarosz-4b560b175/"
                icon="linkedin"
                label="LinkedIn"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Phone;
