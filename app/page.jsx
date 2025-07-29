import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";

// Components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-center">Software Engineer</span>
            <h1 className="h1">
              Hello I'm <br />{" "}
              <span className="text-accent">Justin Jarosz</span>
            </h1>
            <p className="max-w-[90%] mb-9 text-white/80">
              Passionate and results-driven software engineer focused on
              creating innovative, efficient, and scalable solutions. With a
              strong foundation in problem-solving, I thrive in dynamic
              environments and am committed to continuously learning and
              leveraging the latest technologies to deliver high-quality,
              reliable software that drives business success.
            </p>

            {/* Socials & Button */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <Link
                  href="./assets/resume/Justin_Jarosz_Backend_Engineer_Resume.pdf"
                  target="_blank"
                  alt="my cv"
                  rel="noopener noreferrer"
                  className="flex flex-row items-center"
                >
                  <span className="mr-2">Download CV</span>
                  <FiDownload className="text-xl"></FiDownload>
                </Link>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover-transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div>
            <Photo className="order-1 xl:order-none mb-8 xl-mb-0" />
          </div>
        </div>
      </div>

      <Stats />
      <Contact />
    </section>
  );
};

export default Home;
