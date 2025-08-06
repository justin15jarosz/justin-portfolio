"use client";

import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Phone from "@/components/Phone";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

const Home = () => {
  return (
    <section className="container mx-auto h-full m-10">
      <div className="flex flex-col lg:flex-row items-center justify-evenly xl:pt-8 xl:pb-24">
        <div className="text-center my-10">
          <span className="text-center">Software Engineer</span>
          <h1 className="h1">
            Hello I'm <br /> <span className="text-accent">Justin Jarosz</span>
          </h1>

          {/* Socials & Button */}
          <div className="flex flex-col xl:flex-row items-center justify-center gap-8 py-5">
            <Button
              variant="outline"
              size="lg"
              className="uppercase flex items-center gap-2"
            >
              <Link
                href="./assets/resume/Justin_Jarosz_Back_End_Engineer_Resume.pdf"
                target="_blank"
                alt="my cv"
                rel="noopener noreferrer"
                className="flex flex-row items-center"
              >
                <span className="mr-2">Download CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Link>
            </Button>
          </div>
          <div>
            <Photo className="order-1 xl:order-none mb-8 xl-mb-0" />
          </div>
        </div>
        <Phone />
      </div>
    </section>
  );
};

export default Home;
