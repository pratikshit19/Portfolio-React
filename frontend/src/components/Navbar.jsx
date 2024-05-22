import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-[96px] glass px-8 my-8 text-gray-300 max-w-[1100px] flex justify-between items-center mx-8 sm:mx-auto z-10'>
      <h1 className='text-2xl font-bold'>Pratikshit</h1>
      <ul className='hidden md:flex gap-6 text-xl'>
        <li><Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
        <li><Link to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        <li><Link to="Portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
        <li><Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden text-gray-300 fixed right-10 top-10 z-50'>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div className={nav ? 'rounded-3xl text-gray-300 fixed right-4 top-4 w-[50%] bg-[#0d1d23] ease-in-out duration-500 z-40' : 'fixed left-[-100%] z-40'}>
        <ul className='p-8 text-2xl mr-10'>
          <li className='p-2'><Link to="Hero" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
          <li className='p-2'><Link to="About" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
          <li className='p-2'><Link to="Portfolio" spy={true} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
          <li className='p-2'><Link to="Contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
