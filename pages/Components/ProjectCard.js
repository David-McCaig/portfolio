import React, { useEffect, useState } from 'react'
import Image from "next/image";

import {
    AiFillGithub,
    AiFillIeCircle
} from "react-icons/ai";

function ProjectCard({ image, title, description, children, liveLink, gitHubFront, gitHubBack, gitHubbackRemove, liveLinkRemove, altTag }) {


    return (

        <div className="text-center shadow-xl m-4 rounded-xl my-10 dark:bg-white flex-1 xl:flex ">
            <div className="xl:w-2/3 mlax-w-2x xl:flex items-center rounded-xl bg-[#CACFC9] border-0 border-[#CACFC9]">
                <Image className='rounded-xl bg-[#CACFC9] border-0 border-[#CACFC9]' width={1000} height={1000} src={image} alt={altTag}/>
            </div>
            <div className="xl:w-2/3 px-4 md:px-12 flex flex-col xl:justify-center">
                <h3 className="text-xl font-semibold pt-8 pb-2 tracking-widest">
                    {title}
                </h3>
                <p className="py-2 text-sm md:text-base">
                    {description}
                </p>
                <div>
                    <div className=" text-5xl flex justify-center gap-2 sm:gap-6 py-3 font-semibold text-gray-600  ">
                        <a className={liveLinkRemove} href={liveLink} target="_blank" rel="noreferrer">
                            <AiFillIeCircle className="hover:text-emerald-500 transition duration-300" />
                            <p className="text-sm mt-1 text-gray-400 dark:text-gray-600"> Live </p>
                        </a>
                        <a href={gitHubFront} target="_blank" rel="noreferrer">
                            <AiFillGithub className='ml-2 hover:text-emerald-500 transition duration-300' />
                            <p className="text-sm mt-1 text-gray-400 dark:text-gray-600">Front-End</p>
                        </a>
                        <a className={gitHubbackRemove} href={gitHubBack} target="_blank" rel="noreferrer">
                            < AiFillGithub className="ml-2 hover:text-emerald-500 transition duration-300" />
                            <p className='text-sm mt-1 text-gray-400 dark:text-gray-600'>Back-End</p>
                        </a>
                    </div>
                    <h4 className="py-4 text-emerald-500 text-xl font-medium mt-1 ">Technologies</h4>
                    <div className="flex flex-wrap justify-center pb-4 md:pb-16 lg:pb-8">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard