import React from 'react';
import notebookL from '../assets/notebookL.png';
import { TypeAnimation } from 'react-type-animation';
import Contact from './Contact';
import { Link } from 'react-scroll';


const Hero = () => {
  return (
    <div id="Hero" className='relative grid sm:grid-cols-3 gap-8 max-w-[1100px] md:h-[70vh] sm:mx-auto mx-8 py-2'>
      <div className='glass px-7 py-6 col-span-2 my-auto max-w-full h-auto sm:h-auto z-10'>
        <h1 className='text-white text-4xl sm:text-3xl lg:text-6xl font-extrabold'>
          <p className='mb-4 text-button'>I'm a</p>
          <TypeAnimation
            sequence={[
              "Frontend Developer", 1000,
              "Flutter Developer", 1000,
              "Data Analyst", 1000,
            ]}
            wrapper='span'
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p id='biggest-text' className='text-gray-300 my-6 sm:text-lg lg:text-xl max-w-full md:max-w-full ml-1'>
          Hi I'm <span className='text-white'>PRATIKSHIT</span> and have experience as a Flutter Developer and expertise in Full Stack Technologies.
        </p>
        <div className='flex space-x-4'>
        <button className='rounded-2xl bg-button text-white px-4 py-2 hover:bg-hover transition'>
        <a
            href="/PratikshitKumar_Dev_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            </a>
          </button>
          
          
             <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className='cursor-pointer'
          >
            <button className='rounded-2xl border text-white px-4 py-2 hover:bg-gray-600 transition'>
              Contact
            </button>
          </Link>
          

        </div>
      </div>
      <div className="absolute top-[140px] right-[0px] w-[500px] h-[500px] left-1/2 transform -translate-x-1/2 mt-[70px] md:top-0 md:mt-0 md:left-auto md:transform-none md:w-[380px] md:h-[380px] lg:w-[580px] lg:h-[580px] lg:top-[-80px] z-[-1]">
        <img src={notebookL} alt="Hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
