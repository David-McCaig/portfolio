import React from "react";
import SkillsTag from "./SkillsTag";
import { useSpring, animated } from "@react-spring/web";

function AboutMe() {
  const [props] = useSpring(
    () => ({
      from: { y: 20, opacity: 0 },
      to: { y: 0, opacity: 1 },
      config: { duration: 600 },
    }),
    []
  );

  return (
    <animated.div style={props} className="bg-stone-50">
      <section className="mb-24 lg:flex lg:mb-48 lg:max-w-7xl lg:mx-auto">
        <div className="mlax-w-2x lg:w-2/3">
          <h3 className="text-3xl py-1 text-center lg:text-left  dark:text-white ">
            About Me
          </h3>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I am a bike shop owner turned Web Developer with a passion for
            creating beautiful UI. I am an analytical problem solver at heart,
            with 8 years of experience working collaboratively to overcome
            challenges and build an inclusive and thriving business. I am
            excited to leverage my passion for technical problem solving,
            attention to detail and creative mind towards writing clean and
            efficient code. When I&#39;m not coding you can usually find me
            mountain biking in the Port Hills or making music with my collection
            of Synthesizers and drum machines.
          </p>
        </div>
        <div className="md:w-16"></div>

        <div className="mt-0 md:py-8 lg:py-0 md:w-[37.5rem] m-auto lg:w-2/3">
          <h3 className="text-3xl py-1 justify-center lg:ml-1 lg:justify-start dark:text-white flex ">
            My Skills
          </h3>
          <div className="flex flex-wrap justify-center md:m-auto  md:justify-start">
            <SkillsTag skill={"React"} />
            <SkillsTag skill={"TypeScript"} />
            <SkillsTag skill={"JavaScript"} />
            <SkillsTag skill={"HTML"} />
            <SkillsTag skill={"CSS"} />
            <SkillsTag skill={"SASS"} />
            <SkillsTag skill={"Tailwind"} />
            <SkillsTag skill={"Redux"} />
            <SkillsTag skill={"Github"} />
            <SkillsTag skill={"Gitflow"} />
            <SkillsTag skill={"JIRA"} />
            <SkillsTag skill={"Agile"} />
            <SkillsTag skill={"Node.JS"} />
            <SkillsTag skill={"Express.JS"} />
            <SkillsTag skill={"MYSQL"} />
            <SkillsTag skill={"KNEX"} />
            <SkillsTag skill={"Socket.IO"} />
            <SkillsTag skill={"Jest"} />
          </div>
        </div>
      </section>
    </animated.div>
  );
}

export default AboutMe;
