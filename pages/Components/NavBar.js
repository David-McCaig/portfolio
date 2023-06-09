import React from 'react'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'

function NavBar({setDarkMode}) {

    const navigation = [
        { name: 'Bikes', href: '/bikes', current: false },
        { name: 'Components', href: '/components', current: false },
        { name: 'Post Add', href: '/upload', current: false },
    ]

  return (
    <>
    <nav className="pt-2 mb-10 dark:text-white">
    <div className="flex backdrop-blur-sm space-x-3 md:space-x-16 bg-stone-100 opacity-80  border-2 border-slate-100 rounded-full items-center pr-8 pl-8 h-14 dark:bg-black dark:border-2 dark:border-black ">
    <a>About Me</a>
    <a>Projects</a>
    <a>Contact</a>
    <div className=''>
    <BsFillMoonStarsFill
          onClick={() => setDarkMode( prevDarkMode=> !prevDarkMode)}
          className=" cursor-pointer text-2xl"
        />
    </div>
    </div>
    {/* <ul className="flex items-center"> */}
      {/* <li className='ml-5'>
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className=" cursor-pointer text-2xl"
        />
      </li> */}
    {/* </ul> */}
  </nav>
  </>

  
  )
}

export default NavBar