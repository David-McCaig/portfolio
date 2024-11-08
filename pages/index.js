import Head from "next/head";
import { AiOutlineArrowUp } from "react-icons/ai/index.js";

import { useState, useEffect, useRef } from "react";
import partsBin from "../public/parts-bin.png";
import BrainFlix from "../public/brain-flix.png";
import inStock from "../public/in-stock.png";
import getOut from "../public/get-out.png";
import evenshare from "../public/image 1.png";
import IntroSection from "./Components/IntroSection";
import AboutMe from "./Components/AboutMe";
import SkillsTag from "./Components/SkillsTag";
import ProjectCard from "./Components/ProjectCard";
import NavBar from "./Components/NavBar";
import ContactForm from "./Components/ContactForm";
import { motion, useInView } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const scrollTop = useRef(null);
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = () => {
    setIsActive(true);
  };

  const handleMouseLeave = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop + -64,
      left: 0,
      behavior: "smooth",
    });
  };

  const animateRef = useRef(null);
  const isInView = useInView(animateRef, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className={darkMode ? "dark" : "bg-stone-50"}>
      <Head>
        <title>David McCaig</title>
        <meta
          name="description"
          content="Full-Stack Developer and former bike shop owner passionate about creating beautiful UI. Experienced in collaborative problem-solving, with a focus on clean and efficient code. Enthusiast of mountain biking and music production."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        ref={scrollTop}
        className={`fixed w-full flex justify-center z-20 ${
          showNavbar
            ? "duration-500 top-[0] hover:duration-500 hover:top-[0]"
            : "duration-500 top-[-60px] hover:duration-500 hover:top-[0]"
        }`}
      >
        <NavBar
          setDarkMode={setDarkMode}
          handleScroll={handleScroll}
          aboutMeRef={aboutMeRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />
      </div>

        <IntroSection
          isActive={isActive}
          handleClick={handleClick}
          handleMouseLeave={handleMouseLeave}
          aboutMeRef={aboutMeRef}
        />
    
      <main className="pt-6 md:pt-0 bg-stone-50 px-4 dark:bg-gray-900 md:px-20 lg:px-12 xl:px-24 2xl:px-44">
        <AboutMe />

        <section ref={projectRef} className="">
          <div>
            <h3 className="text-3xl md:py-1 md:mb-2 text-center dark:text-white ">
              Projects
            </h3>
          </div>
          <motion.div
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <div ref={animateRef} className="flex flex-col gap-10 py-4 ">
              <ProjectCard
                isActive={isActive}
                setIsActive={setIsActive}
                image={evenshare}
                title={"EvenShare"}
                description={
                  "EvenShare is a user-friendly application designed to streamline the process of splitting expenses with others. Users have the flexibility to create groups by simply adding the email addresses of their family or friends. Upon receiving an email invitation to join EvenShare, family and friends can easily sign up and become part of the group. The app leverages the power of RTK Query, which not only optimizes performance by caching data but also minimizes data requests to Firebase.To further enhance user experience, pagination has been implemented, reducing page loading times and minimizing the amount of data fetched from Firebase. "
                }
                gitHubFront={"https://github.com/David-McCaig/even-share"}
                gitHubbackRemove={"hidden"}
                gitHubBack={"https://github.com/David-McCaig/even-share"}
                liveLink={"https://split-bill-427e2.web.app"}
                altTag={
                  "Preview of EvenShare project displayed on a computer screen with a greenish background"
                }
              >
                <SkillsTag skill={"TypeScript"} />
                <SkillsTag skill={"React"} />
                <SkillsTag skill={"Redux"} />
                <SkillsTag skill={"Tailwind"} />
                <SkillsTag skill={"Formik"} />
                <SkillsTag skill={"Chart.js"} />
                <SkillsTag skill={"Shadcn/ui"} />
                <SkillsTag skill={"Firebase"} />
              </ProjectCard>

              <ProjectCard
                isActive={isActive}
                setIsActive={setIsActive}
                image={partsBin}
                title={"PartsBin"}
                description={
                  "PartsBin is an online marketplace designed for mountain biking enthusiasts. Find new/used bikes and parts, enjoy a responsive UI, secure token-based authentication, and the ability to post ads. Photos are stored with Cloudinary, and a chat app using Socket.IO enables easy communication. State management is handled using React's Context API."
                }
                liveLink={
                  "https://imaginative-sfogliatella-45400a.netlify.app/"
                }
                gitHubFront={"https://github.com/David-McCaig/parts-bin-client"}
                gitHubBack={"https://github.com/David-McCaig/parts-bin-server"}
                altTag={
                  "Preview of partsBin project displayed on a computer screen with a greenish background"
                }
              >
                <SkillsTag skill={"React"} />
                <SkillsTag skill={"SASS"} />
                <SkillsTag skill={"Ant Design"} />
                <SkillsTag skill={"Node.JS"} />
                <SkillsTag skill={"Express.JS"} />
                <SkillsTag skill={"MYSQL"} />
                <SkillsTag skill={"Socket.IO"} />
                <SkillsTag skill={"Cloudinary"} />
              </ProjectCard>

              <ProjectCard
                isActive={isActive}
                image={BrainFlix}
                title={"BrainFlix"}
                description={
                  "Brainflix is a fully responsive full-stack web application that mimics YouTube. This was one of the first React apps that I created while attending the Brainstation Software Engineering bootcamp. Some of the features include being able to select what video you would like to watch, commenting on each video and uploading a video. Instead of videos we used photos. Initially the project was built using Express, Node and JSON data for the backend but I decided to go back and build a database using MySQL, Knex, express and node."
                }
                liveLink={"https://elegant-meringue-56d20b.netlify.app/"}
                gitHubFront={
                  "https://github.com/David-McCaig/david-mccaig-brainflix"
                }
                gitHubBack={
                  "https://github.com/David-McCaig/david-mccaig-brainflix-server"
                }
                liveLinkRemove={"mr-1.5"}
                altTag={
                  "Preview of BrainFlix project displayed on a computer screen with a greenish background"
                }
              >
                <SkillsTag skill={"HTML"} />
                <SkillsTag skill={"Javascript"} />
                <SkillsTag skill={"React"} />
                <SkillsTag skill={"SASS"} />
                <SkillsTag skill={"Node.JS"} />
                <SkillsTag skill={"Express.JS"} />
                <SkillsTag skill={"MYSQL"} />
              </ProjectCard>

              <ProjectCard
                isActive={isActive}
                image={inStock}
                title={"InStock"}
                description={
                  "Instock is a warehouse and inventory management system that was built in a week by a team of four developers using Agile work flows (Jira) and GitFlow. Every morning we would have a stand-up to mimic a work environment. I really enjoyed working with Jira, gitFLow and Scrum methodologies. It really allowed us to take a project that felt daunting at the time and break it down into more manageable bite sized pieces. Instock is a fully responsive full-stack web application."
                }
                liveLink={"https://dancing-croissant-6b58eb.netlify.app/"}
                gitHubFront={"https://github.com/David-McCaig/instock-client"}
                gitHubBack={"https://github.com/David-McCaig/instock-api"}
                liveLinkRemove={"mr-1.5"}
                altTag={
                  "Preview of inStock project displayed on a computer screen with a greenish background"
                }
              >
                <SkillsTag skill={"HTML"} />
                <SkillsTag skill={"Javascript"} />
                <SkillsTag skill={"React"} />
                <SkillsTag skill={"SASS"} />
                <SkillsTag skill={"Node.JS"} />
                <SkillsTag skill={"Express.JS"} />
                <SkillsTag skill={"MYSQL"} />
              </ProjectCard>

              <ProjectCard
                isActive={isActive}
                image={getOut}
                title={"Get Out"}
                description={
                  "During a 24-hour Hackathon at the Brainstation Web Development Bootcamp, our team, composed of two UX designers, one Data Scientist, and two Web Developers, set out to revamp LoyaltyOne's Air Miles reward program for Millennials and Gen Z. Our solution? An engaging application that gamifies the experience using a star balance to track progress. We made earning and redeeming points a breeze with a user-friendly digital wallet earning us 2nd place in the competition.If you'd like to check out our project, please make sure to view it in a width of 390px for the best experience."
                }
                gitHubFront={"https://github.com/michaelshimeles/get-out"}
                gitHubbackRemove={"hidden"}
                gitHubBack={"https://github.com/michaelshimeles/get-out"}
                liveLinkRemove={"hidden"}
                liveLink={"https://github.com/michaelshimeles/get-out"}
                altTag={
                  "Preview of getOut project displayed on a computer screen with a greenish background"
                }
              >
                <SkillsTag skill={"React.JS"} />
                <SkillsTag skill={"Javascript"} />
                <SkillsTag skill={"HTML"} />
                <SkillsTag skill={"CSS"} />
                <SkillsTag skill={"SASS"} />
              </ProjectCard>

              <div
                ref={contactRef}
                className="mt-32  lg:mt-44 lg:mb-8 flex justify-center "
              >
                <ContactForm />
              </div>

              <div className="flex justify-center align-middle mb-44 mt-4 lg:mt-0 ">
                <button
                  className="bg-gray-900 text-gray-50 w-12 h-12 rounded-full justify-center hover:bg-gray-700 dark:text-gray-900 dark:bg-gray-50 dark:hover:text-gray-700 "
                  onClick={() => handleScroll(scrollTop.current)}
                  aria-label="Scroll to top"
                >
                  <AiOutlineArrowUp className="text-4xl ml-1.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
