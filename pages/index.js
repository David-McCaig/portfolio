import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineArrowUp
} from "react-icons/ai";

import { useState, useEffect, useRef } from "react";
import profilePhoto from "../public/david-mccaig.png";
import Image from "next/image";
import partsBin from "../public/parts-bin.png"
import BrainFlix from "../public/brain-flix.png"
import inStock from "../public/in-stock.png"
import getOut from "../public/get-out.png"
import SkillsTag from "./Components/SkillsTag";
import ProjectCard from "./Components/ProjectCard";
import NavBar from "./Components/NavBar";
import ContactForm from "./Components/ContactForm";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  

  const scrollTop = useRef(null);
  const aboutMeRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);


  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop + -64,
      left: 0,
      behavior: "smooth",
    });
  };

  return (

    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>David McCaig</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div ref={scrollTop} className={`fixed w-full flex justify-center z-20 ${showNavbar ? 'duration-500 top-[0] hover:duration-500 hover:top-[0]' : 'duration-500 top-[-60px] hover:duration-500 hover:top-[0]'}`}>
        <NavBar setDarkMode={setDarkMode}
          handleScroll={handleScroll}
          aboutMeRef={aboutMeRef}
          projectRef={projectRef}
          contactRef={contactRef}
        />

      </div>
      <div className=""></div>
      <main className="pt-6 md:pt-0 bg-stone-50 px-12 dark:bg-gray-900 md:px-40 lg:px-32 xl:px-24 2xl:px-44">

        <section className="mb-6 md:mb-0 ">

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
              <a className="hover:text-emerald-600 transition duration-300 ease-in-out" href="https://www.linkedin.com/in/david-mccaig/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a className="hover:text-emerald-600 transition duration-300 ease-in-out" href="https://github.com/David-McCaig" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div ref={aboutMeRef} className="w-40 h-40 mx-auto bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden mt-8 md:mt-10 md:h-96 md:w-96">
              <Image src={profilePhoto} alt={'project displayed'} priority={true} width={300} height={300} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        <div  className="  "> </div>

        <section  className="mb-24 lg:flex lg:mb-48 lg:max-w-7xl lg:mx-auto">
          <div  className="lg:w-2/3 mlax-w-2x">
            <h3 className="text-3xl py-1 text-center lg:text-left  dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a bike shop owner turned Web Developer with a passion for creating beautiful UI. I am an analytical problem solver at heart, with 8 years of experience working collaboratively to overcome challenges and build an inclusive and thriving business. I am excited to leverage my passion for technical problem solving, attention to detail and creative mind towards writing clean and efficient code. When I&#39;m not coding you can usually find me mountain biking in the Port Hills or making music with my collection of Synthesizers and drum machines.
            </p>
          </div>
          <div className="md:w-16"></div>
          <div className="lg:w-2/3 mt-0 md:py-8 lg:py-0">
            <h3 className="text-3xl py-1 justify-center lg:justify-start dark:text-white flex ">My Skills</h3>
            <div className=" flex flex-wrap justify-center md:justify-start">
              <SkillsTag skill={'HTML'} />
              <SkillsTag skill={'CSS'} />
              <SkillsTag skill={'JavaScript'} />
              <SkillsTag skill={'React'} />
              <SkillsTag skill={'NextJS'} />
              <SkillsTag skill={'SASS'} />
              <SkillsTag skill={'GIT'} />
              <SkillsTag skill={'Github'} />
              <SkillsTag skill={'Gitflow'} />
              <SkillsTag skill={'JIRA'} />
              <SkillsTag skill={'Agile'} />
              <SkillsTag skill={'Node.JS'} />
              <SkillsTag skill={'Express.JS'} />
              <SkillsTag skill={'MYSQL'} />
              <SkillsTag skill={'KNEX'} />
              <SkillsTag skill={'Socket.IO'} />
              <SkillsTag skill={'Jest'} />
            </div>
          </div>
        </section>

        <section ref={projectRef} className="">
          <div>
            <h3 className="text-3xl md:py-1 md:mb-2 text-center dark:text-white ">Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-4 ">

            <ProjectCard
              image={partsBin}
              title={'PartsBin'}
              description={'PartsBin is an online marketplace designed for mountain biking enthusiasts. Find new/used bikes and parts, enjoy a responsive UI, secure token-based authentication, and the ability to post ads. Photos are stored with Cloudinary, and a chat app using Socket.IO enables easy communication. State management is handled using React\'s Context API.'}
              liveLink={'https://imaginative-sfogliatella-45400a.netlify.app/'}
              gitHubFront={'https://github.com/David-McCaig/parts-bin-client'}
              gitHubBack={'https://github.com/David-McCaig/parts-bin-server'}
              altTag={'Preview of partsBin project displayed on a computer screen with a greenish background'}
            >
              <SkillsTag skill={'React'} />
              <SkillsTag skill={'SASS'} />
              <SkillsTag skill={'Ant Design'} />
              <SkillsTag skill={'Node.JS'} />
              <SkillsTag skill={'Express.JS'} />
              <SkillsTag skill={'MYSQL'} />
              <SkillsTag skill={'Socket.IO'} />
              <SkillsTag skill={'Cloudinary'} />
            </ProjectCard>

            <ProjectCard
              image={BrainFlix}
              title={'BrainFlix'}
              description={'Brainflix is a fully responsive full-stack web application that mimics YouTube. This was one of the first React apps that I created while attending the Brainstation Software Engineering bootcamp. Some of the features include being able to select what video you would like to watch, commenting on each video and uploading a video. Initially the project was built using Express, Node and JSON data for the backend but I decided to go back and build a database using MySQL, Knex, express and node.'}
              liveLink={'https://elegant-meringue-56d20b.netlify.app/'}
              gitHubFront={'https://github.com/David-McCaig/david-mccaig-brainflix'}
              gitHubBack={'https://github.com/David-McCaig/david-mccaig-brainflix-server'}
              liveLinkRemove={'mr-1.5'}
              altTag={'Preview of BrainFlix project displayed on a computer screen with a greenish background'}
            >
              <SkillsTag skill={'HTML'} />
              <SkillsTag skill={'Javascript'} />
              <SkillsTag skill={'React'} />
              <SkillsTag skill={'SASS'} />
              <SkillsTag skill={'Node.JS'} />
              <SkillsTag skill={'Express.JS'} />
              <SkillsTag skill={'MYSQL'} />
            </ProjectCard>

            <ProjectCard
              image={inStock}
              title={'InStock'}
              description={'Instock is a warehouse and inventory management system that was built in a week by a team of four developers using Agile work flows (Jira) and GitFlow. Every morning we would have a stand-up to mimic a work environment. I really enjoyed working with Jira, gitFLow and Scrum methodologies. It really allowed us to take a project that felt daunting at the time and break it down into more manageable bite sized pieces. Instock is a fully responsive full-stack web application.'}
              liveLink={'https://dancing-croissant-6b58eb.netlify.app/'}
              gitHubFront={'https://github.com/David-McCaig/instock-client'}
              gitHubBack={'https://github.com/David-McCaig/instock-api'}
              liveLinkRemove={'mr-1.5'}
              altTag={'Preview of inStock project displayed on a computer screen with a greenish background'}
            >
              <SkillsTag skill={'HTML'} />
              <SkillsTag skill={'Javascript'} />
              <SkillsTag skill={'React'} />
              <SkillsTag skill={'SASS'} />
              <SkillsTag skill={'Node.JS'} />
              <SkillsTag skill={'Express.JS'} />
              <SkillsTag skill={'MYSQL'} />
            </ProjectCard>

            <ProjectCard
              image={getOut}
              title={'Get Out'}
              description={'During a 24-hour Hackathon at the Brainstation Web Development Bootcamp, our team, composed of two UX designers, one Data Scientist, and two Web Developers, set out to revamp LoyaltyOne\'s Air Miles reward program for Millennials and Gen Z. Our solution? An engaging application that gamifies the experience using a star balance to track progress. We made earning and redeeming points a breeze with a user-friendly digital wallet earning us 2nd place in the competition.If you\'d like to check out our project, please make sure to view it in a width of 390px for the best experience.'}
              gitHubFront={'https://github.com/michaelshimeles/get-out'}
              gitHubbackRemove={'hidden'}
              liveLinkRemove={'hidden'}
              altTag={'Preview of getOut project displayed on a computer screen with a greenish background'}
            >
              <SkillsTag skill={'React.JS'} />
              <SkillsTag skill={'Javascript'} />
              <SkillsTag skill={'HTML'} />
              <SkillsTag skill={'CSS'} />
              <SkillsTag skill={'SASS'} />
            </ProjectCard>
            <div ref={contactRef} className="mt-32  lg:mt-44 lg:mb-8 flex justify-center ">
              <ContactForm />
            </div>

            <div className="flex justify-center align-middle mb-44 mt-4 lg:mt-0 ">
              <button className="bg-gray-900 text-gray-50 w-12 h-12 rounded-full justify-center hover:bg-gray-700 dark:text-gray-900 dark:bg-gray-50 dark:hover:text-gray-700 " onClick={() => handleScroll(scrollTop.current)} >
                <AiOutlineArrowUp className="text-4xl ml-1.5" />
              </button>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
