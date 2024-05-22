import React from 'react'
import notebook from '../assets/notebookM.png'
import mobile from '../assets/mobileR.png'

const About = () => {
  return (
    <div id="About" className=' text-white px-8 gap-4 max-w-[1100px] mx-auto mt-[450px] grid sm:grid-cols-3 sm:my-12'>
        
        <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
            <div className=' max-w-[60%] mx-auto'>
            <h2 className='text-3xl font-bold mb-4'> I can optimize your website</h2>
            <p className='text-gray-300'> lorem ipsum blah blaha lbaahhda nldhhdjsb</p>
            </div>
        </div>


        <div className='sm:col-span-1 glass overflow-hidden'>
            <img className='w-[200px] md:w-[500px] absolute' src={notebook} />
        </div>


        <div className='hidden md:block sm:col-span-1 glass overflow-hidden'>
            <img className='w-[200px] md:w-[500px] absolute' src={mobile} />
        </div>


        <div className='md:hidden relative overflow-hidden h-[200px] glass'>
            <img className='w-[400px] absolute' src={notebook}/>
            <img className='w-[200px] right-0 absolute' src={mobile}/>
        </div>


        <div className='sm:col-span-2 glass sm:py-16 my-auto text-left p-4'>
            <div className=' max-w-[60%] mx-auto'>
                <h2 className='text-3xl font-bold mb-4'> I can optimize your website</h2>
                <p className='text-gray-300'> lorem ipsum blah blaha lbaahhda nldhhdjsb</p>
            </div>
        </div>
    </div>
  )
}

export default About
