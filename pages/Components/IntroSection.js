import React from 'react'
import {
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";
import profilePhoto from "../../public/david-mccaig_cropped.png";
import Image from "next/image";

function IntroSection({isActive, handleClick, handleMouseLeave, aboutMeRef}) {
  
    return (
    <section className="mb-6 md:mb-0 bg-stone-50 dark:bg-gray-900">

    <div className="text-center  md:py-10">
      <h2 className="text-5xl py-2 pt-12 md:pt-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-emerald-300 dark:text-emerald-400 md:text-6xl">
        David McCaig
      </h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
        Full-Stack Developer
      </h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        I&#39;m a Full-Stack Developer with a love for creating beautiful UI and user-friendly applications.
      </p>
      <div className="text-5xl flex justify-center gap-16 pt-3  text-gray-600  dark:text-gray-400">
        <a
          className={isActive ? "" : "hover:text-emerald-600 transition duration-300 ease-in-out"}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          href="https://www.linkedin.com/in/david-mccaig/"
          target="_blank"
          rel="noreferrer">
          <AiFillLinkedin />
        </a>
        <a
          className={ isActive ? "" : "hover:text-emerald-600 transition duration-300 ease-in-out"}
          onClick={handleClick}
          onMouseLeave={handleMouseLeave}
          href="https://github.com/David-McCaig"
          target="_blank"
          rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <div ref={aboutMeRef} className="w-40 h-40 mx-auto bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden mt-8 md:mt-10 md:h-96 md:w-96">
        <Image src={profilePhoto} alt={'project displayed'} layout="fill" objectFit="cover" />
      </div>
    </div>
  </section>
  )
}

export default IntroSection