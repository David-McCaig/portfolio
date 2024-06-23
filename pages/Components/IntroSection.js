import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import profilePhoto from "../../public/david-mccaig_cropped.png";
import Image from "next/image";

function IntroSection({ isActive, handleClick, handleMouseLeave, aboutMeRef }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="pb-6 pt-4 md:mb-0 bg-stone-50 dark:bg-gray-900">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: .4 }}
      className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
    >
        <div className="text-center  md:py-10">
          <h2 className="text-5xl py-2 pt-12 md:pt-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-300 dark:text-emerald-400 md:text-6xl">
            David McCaig
          </h2>
          <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            Full-Stack Developer
          </h3>
          <p className="text-md py-5 px-4 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto  md:text-xl">
            I&#39;m a Full-Stack Developer with a love for creating beautiful UI
            and user-friendly applications.
          </p>
          <div className="text-5xl flex justify-center gap-16 pt-3  text-gray-600  dark:text-gray-400">
            <a
              className={
                isActive
                  ? ""
                  : "hover:text-emerald-600 transition duration-300 ease-in-out"
              }
              onClick={handleClick}
              onMouseLeave={handleMouseLeave}
              href="https://www.linkedin.com/in/david-mccaig/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">LinkedIn:</span>
              <AiFillLinkedin />
            </a>
            <a
              className={
                isActive
                  ? ""
                  : "hover:text-emerald-600 transition duration-300 ease-in-out"
              }
              onClick={handleClick}
              onMouseLeave={handleMouseLeave}
              href="https://github.com/David-McCaig"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
              <span className="sr-only">GitHub:</span>
            </a>
          </div>
          <div
            ref={aboutMeRef}
            className="w-48 h-48 mx-auto rounded-full relative overflow-hidden mt-8 md:mt-10 sm: md:h-96 md:w-96"
          >
            <Image
              src={profilePhoto}
              alt={"project displayed"}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default IntroSection;
