import { useState } from 'react';
import bgVid from '../assets/bgVid.mp4';
import { RiMenu2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";



const Hero = () => {
  const [menu, setmenu] = useState(false);

  const toggleMenu = () => {
    setmenu(!menu)
  }
  
  return (
    <div className='relative overflow-hidden h-screen w-full'>
      <div className='absolute w-full p-16 z-50 '>
        <div className='flex items-center justify-between z-50'>
          <div className="logo">Rasi</div>
          <div><a href='#'onClick={toggleMenu} className='menu flex items-center'><RiMenu2Line className='menu-icon' />Menu </a></div>
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
      <div className='relative flex items-center justify-center h-screen w-full '>
        <div className='absolute inset-0 -z-10'>
          <video className='object-cover w-full h-full opacity-75' src={bgVid} autoPlay  loop muted></video>
        </div>
        <div className='flex flex-col items-center justify-center text-center space-y-4'>
          <h1 className="text-[5rem] font-rowdies text-primarytext">Welcome to My World!</h1>
          <p className="text-xl font-roboto text-[white]">
            Were a creative agency specializing in innovative design and development.
          </p>
          <button className="btn-primary">
            Discover our work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
