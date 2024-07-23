import { useState } from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";

import { IoCloseOutline } from "react-icons/io5";

const FirstNavbar = () => {
    const [menu, setmenu] = useState(false);

    const toggleMenu = () => {
      setmenu(!menu)
    }
  return (
  
    <div className='absolute w-full p-16 z-10 '>
        <div className='flex items-center justify-between z-50'>
            <div className="logo flex flex-col items-center ">
                <h1>Rasi.</h1>
            </div>
            <div>
                <a href='#'onClick={toggleMenu} className='menu flex items-center'><RiMenu2Line className='menu-icon' />Menu </a>
            </div>
        </div>
        <div className='mt-[25rem] list-none flex flex-col gap-4 text-2xl w-fit'>
            <li className='hover:text-[white] transition delay-75'><a href="https://www.instagram.com/rais_design_dev/" target="_blank" className="instagram"><FaInstagram /></a></li>
            <li className='hover:text-[white] transition delay-75'><a href="https://github.com/rais-design-dev" target="_blank" className="github"><FaGithub /></a></li>
            <li className='hover:text-[white] transition delay-75'><a href="https://www.linkedin.com/in/rais-design-dev/" target="_blank" className="linkedin"><FaLinkedin /></a></li>
        </div>
        <div className='mt-9 right-36 flex bottom-36 absolute'>
            <p className='rotate-90 tracking-[.3rem] absolute'>Scroll <RiArrowRightDoubleLine/></p>
        </div> 
        <div className={`absolute z-50  top-0 h-screen opacity-70 bg-secondarybg transition  ${menu ? 'right-0 delay-1000' : '-right-96'}`} >
          <ul>
            <li className='flex flex-col text-primarytext items-center justify-center px-20 py-[50%] gap-10 '>
            <a href='#'onClick={toggleMenu} className='menu flex items-center'><IoCloseOutline className='menu-icon' /></a>
              <a href="" className='hover:text-secondarytext transition delay-75 text-xl'>Home</a>
              <a href="" className='hover:text-secondarytext transition delay-75 text-xl'>Who I&apos;m</a>
              <a href="" className='hover:text-secondarytext transition delay-75 text-xl'>Projects</a>
              <a href="" className='hover:text-secondarytext transition delay-75 text-xl'>Get In Touch</a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default FirstNavbar
{/*             */}
