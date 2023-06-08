import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/david-mccaig.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import partsBin from "../public/Frame 1.png"

import SkillsTag from "./Components/SkillsTag";
import ProjectCard from "./Components/ProjectCard"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-40 lg:px-40 xl:px-48 ">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl">David McCaig</h1>
            <div className="space-x-16">
            <a>About Me</a>
            <a>Projects</a>
            <a>Contact</a>
            </div>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-emerald-500 font-medium dark:text-emerald-400 md:text-6xl">
              David McCaig
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Full-Stack Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              I&#39;m a Full-Stack Developer with a love for creating beautiful UI and user-friendly applications.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/david-mccaig/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/David-McCaig" target="_blank" rel="noreferrer">
                <AiFillGithub />
              </a>
            </div>
            <div className="w-40 h-40 mx-auto bg-gradient-to-b from-teal-500 rounded-full relative overflow-hidden mt-20   md:h-96 md:w-96">
              <Image src={deved} alt={'project displayed'} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section className="lg:flex">
          <div className="lg:w-2/3 mlax-w-2x">
            <h3 className="text-3xl py-1 text-center lg:text-left  dark:text-white ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I am a bike shop owner turned Web Developer with a passion for creating beautiful UI. I am an analytical problem solver at heart, with 8 years of experience working collaboratively to overcome challenges and build an inclusive and thriving business. I am excited to leverage my passion for technical problem solving, attention to detail and creative mind towards writing clean and efficient code. When I&#39;m not coding you can usually find me mountain biking in the Port Hills or making music with my collection of Synthesizers and drum machines.
            </p>
          </div>
          <div className="md:w-16"></div>
          <div className="lg:w-2/3">
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
        {/* <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can
                give you tips and tricks to level it up.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Indesign</p>
            </div>
          </div> */}

        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 text-center dark:text-white ">Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 ">

            <ProjectCard 
            image={partsBin} 
            title={'PartsBin'} 
            description={'PartsBin is an online marketplace designed for mountain biking enthusiasts. Find new/used bikes and parts, enjoy a responsive UI, secure token-based authentication, and the ability to post ads. Photos are stored with Cloudinary, and a chat app using Socket.IO enables easy communication. State management is handled using React\'s Context API.'}
            liveLink={'https://imaginative-sfogliatella-45400a.netlify.app/'}
            gitHubFront={'https://github.com/David-McCaig/parts-bin-client'} 
            gitHubBack={'https://github.com/David-McCaig/parts-bin-server'}
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
            image={partsBin} 
            title={'BrainFlix'} 
            description={'Brainflix is a fully responsive full-stack web application that mimics YouTube. This was one of the first React apps that I created while attending the Brainstation Software Engineering bootcamp. Some of the features include being able to select what video you would like to watch, commenting on each video and uploading a video. Initially the project was built using Express, Node and JSON data for the backend but I decided to go back and build a database using MySQL, Knex, express and node.'}
            liveLink={'https://elegant-meringue-56d20b.netlify.app/'}
            gitHubFront={'https://github.com/David-McCaig/david-mccaig-brainflix'} 
            gitHubBack={'https://github.com/David-McCaig/david-mccaig-brainflix-server'}
            >
              <SkillsTag skill={'HTML'} />
              <SkillsTag skill={'Javascript'} />
              <SkillsTag skill={'React'} />
              <SkillsTag skill={'SASS'} />
              <SkillsTag skill={'Node.JS'} />
              <SkillsTag skill={'Express.JS'} />
              <SkillsTag skill={'MYSQL'} />
            </ProjectCard>

            {/* <div className="basis-2/3 flex-1 ">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
            </div> */}

            {/* <div className="basis-2/3 flex-1 ">
              <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                <Image src={design} width={100} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2  ">
                  Beautiful Designs
                </h3>
                <p className="py-2">
                  Creating elegant designs suited for your needs following core
                  design theory.
                </p>
                <h4 className="py-4 text-teal-600">Design Tools I Use</h4>
                <p className="text-gray-800 py-1">Photoshop</p>
                <p className="text-gray-800 py-1">Illustrator</p>
                <p className="text-gray-800 py-1">Figma</p>
                <p className="text-gray-800 py-1">Indesign</p>
              </div>
            </div> */}

            {/* <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div> */}
            {/* 
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div> */}
          </div>
        </section>
      </main>
    </div>
  );
}
