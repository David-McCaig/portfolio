import React, { useEffect, useState } from 'react'
import design from "../../public/design.png";
import Image from "next/image";
import SkillsTag from './SkillsTag';
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillIeCircle
} from "react-icons/ai";

function ProjectCard({ image, title, description, children, liveLink, gitHubFront, gitHubBack }) {


    return (

                <div className="text-center shadow-xl p-4 rounded-xl my-10 dark:bg-white flex-1 2xl:flex border-solid border-2 border-slate-50">
                    <div className="2xl:w-2/3 mlax-w-2x 2xl:flex items-center">
                        <Image src={image} />
                    </div>
                    <div className="2xl:w-2/3">
                        <h3 className="text-2xl font-semibold pt-8 pb-2 tracking-widest">
                            {title}
                        </h3>
                        <p className="py-2">
                            {description}
                        </p>
                        <div>
                            <div className="text-5xl flex justify-center gap-6 py-3 font-semibold text-gray-600  ">
                                <a className='mr-1' href={liveLink} target="_blank" rel="noreferrer">
                                    <AiFillIeCircle />
                                    <p className='text-sm mt-1 text-gray-400 dark:text-gray-600'> Live </p>
                                </a>
                                <a href={gitHubFront} target="_blank" rel="noreferrer">
                                    <AiFillGithub className='ml-2 ' />
                                    <p className='text-sm mt-1 text-gray-400 dark:text-gray-600'>Front-End</p>
                                </a>
                                <a href={gitHubBack} target="_blank" rel="noreferrer">
                                    <AiFillGithub className='ml-2' />
                                    <p className='text-sm mt-1 text-gray-400 dark:text-gray-600'>Back-End</p>
                                </a>
                            </div>
                            <h4 className="py-4 text-teal-600 text-2xl font-medium mt-1 pb-0">Technologies</h4>
                            <div className="flex flex-wrap justify-center">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ProjectCard