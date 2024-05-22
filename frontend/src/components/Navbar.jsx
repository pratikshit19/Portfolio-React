import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';
import heroImage from '../assets/profilepic.png';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // This effect will run on component mount and whenever the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false); // Close the nav menu if the screen size is larger than 768px
      }
    };

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Call handleResize on mount to set the initial state
    handleResize();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='h-[96px] glass px-8 my-8 text-gray-300 max-w-[1100px] flex justify-between items-center mx-8 sm:mx-auto z-20 relative'>
      <div className='flex items-center'>
        <img src={heroImage} alt="Profile" className='w-11 h-11 rounded-full mr-4' />
      <h1 className='text-2xl font-bold'>Pratikshit</h1>
      </div>
      <ul className='hidden md:flex gap-6 text-xl'>
        <li className='cursor-pointer'><Link to="Hero" spy={true} smooth={true} offset={50} duration={500} className='hover:text-xl hover:text-button transition-opacity'>Home</Link></li>
        <li className='cursor-pointer'><Link to="About" spy={true} smooth={true} offset={50} duration={500} className='hover:text-xl hover:text-button transition-opacity'>About</Link></li>
        <li className='cursor-pointer'><Link to="Portfolio" spy={true} smooth={true} offset={50} duration={500} className='hover:text-xl hover:text-button transition-opacity'>Portfolio</Link></li>
        <li className='cursor-pointer'><Link to="Contact" spy={true} smooth={true} offset={50} duration={500} className='hover:text-xl hover:text-button transition-opacity'>Contact</Link></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-10 z-50 cursor-pointer'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div className={nav ? 'rounded-3xl text-gray-300 fixed right-4 top-4 w-[50%] bg-menu-gradient ease-in-out duration-500 z-40' : 'fixed left-[-100%] z-40'}>
        <ul className='p-8 text-2xl mr-10'>
          <li className='cursor-pointer p-2'><Link to="Hero" spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} className='hover:text-xl hover:text-button transition-opacity'>Home</Link></li>
          <li className='cursor-pointer p-2'><Link to="About" spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} className='hover:text-xl hover:text-button transition-opacity'>About</Link></li>
          <li className='cursor-pointer p-2'><Link to="Portfolio" spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} className='hover:text-xl hover:text-button transition-opacity'>Portfolio</Link></li>
          <li className='cursor-pointer p-2'><Link to="Contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleNav} className='hover:text-xl hover:text-button transition-opacity'>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
