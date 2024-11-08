import React from "react";
import { motion } from "framer-motion";
import { BsFillMoonStarsFill } from "react-icons/bs/index.js?";

function NavBar({
  setDarkMode,
  handleScroll,
  aboutMeRef,
  projectRef,
  contactRef,
}) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <nav className="pt-2 mb-10 dark:text-white">
          <div className="flex backdrop-blur-sm space-x-3 md:space-x-16 bg-stone-100 opacity-80  border-2 border-slate-100 rounded-full items-center pr-8 pl-8 h-14 dark:bg-black dark:border-2 dark:border-black ">
            <button onClick={() => handleScroll(aboutMeRef.current)}>
              About Me
            </button>
            <button onClick={() => handleScroll(projectRef.current)}>
              Projects
            </button>
            <button onClick={() => handleScroll(contactRef.current)}>
              Contact
            </button>
            <div className="">
              <BsFillMoonStarsFill
                onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
                className=" cursor-pointer text-2xl"
              />
            </div>
          </div>
        </nav>
      </motion.div>
    </>
  );
}

export default NavBar;
