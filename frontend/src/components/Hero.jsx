import React from 'react';
import heroImage from '../assets/profilepic.png';
import { TypeAnimation } from 'react-type-animation';
import Contact from './Contact';

const Hero = () => {
  return (
    <div id="Hero" className='relative grid sm:grid-cols-3 gap-8 max-w-[1100px] md:h-[70vh] sm:mx-auto mx-8 py-2 z-[-1]'>
      <div className='glass px-7 py-6 col-span-2 my-auto max-w-[700px] h-[330px] sm:h-[330px]'>
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
        <p className='text-gray-300 my-6 sm:text-lg lg:text-xl max-w-[300px] md:max-w-[600px] ml-1'>
          Hi I'm <span className='text-white'>PRATIKSHIT</span> and have experience as a Flutter Developer and expertise in Full Stack Technologies.
        </p>
        <div className='flex space-x-4'>
          <button className='rounded-2xl bg-button text-white px-4 py-2 hover:bg-teal-600 transition'>
            Resume
          </button>
          <button className='rounded-2xl border text-white px-4 py-2 hover:bg-gray-600 transition' onClick={Contact}>
            Contact
          </button>
        </div>
      </div>
      <div className="absolute top-[280px] right-[0px] w-[380px] h-[380px] left-1/2 transform -translate-x-1/2 mt-[70px] md:top-0 md:mt-0 md:left-auto md:transform-none md:w-[380px] md:h-[380px] lg:w-[580px] lg:h-[580px] lg:top-[-80px] z-[-1]">
        <img src={heroImage} alt="Hero" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
