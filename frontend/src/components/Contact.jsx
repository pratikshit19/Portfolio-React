import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram,} from 'react-icons/ai'

const Contact = () => {
  return (
    <div id="Contact" className='max-w-[1100px]  mx-8 mt-10 sm:mx-auto glass'>

        <div className='mx-auto max-w-[600px] p-6 text-center'>
          <h2 className='text-gray-400 text-3xl md:text-5xl mb-4 font-bold'>Contact Me</h2>
          <p className='text-gray-500 text-xl'> and let's learn together</p>
        </div>

        <div className=' justify-center'>

            <div className=' flex justify-center my-auto text-button'>
                <a href="https://www.linkedin.com/in/pratikshit-kumar-460b6b1b7/"><AiFillLinkedin className='w-[70px] md:w-[100px] h-auto mb-4'/></a>
                <a href="https://github.com/pratikshit19"><AiFillGithub className='w-[70px] md:w-[100px] h-auto mb-4'/></a>
                <a href="https://www.instagram.com/pratikshit_kumar/"><AiFillInstagram className='w-[70px] md:w-[100px] h-auto'/></a>
            </div>

            <div className='p-6 max-w-4xl justify-center'>
              <h2 className='mb-4 text-2xl font-bold text-gray-400'>Let's Connect</h2>
              <form action="https://getform.io/f/qblovwda" method="POST">
                  <div className='space-y-4 mb-6'>
                    <input type="text" id="name" name="name" placeholder="Your Name ...." className='w-full border-gray-400 py-2 px-4 border rounded-xl'></input>
                    <input type="email" id="email" name="email" placeholder="Your Email ...." className='w-full border-gray-400 py-2 px-4 border rounded-xl'></input>
                    <textarea type="textarea" name="message" rows="5" placeholder="Your Message ...." className='w-full border-gray-400 py-2 px-4 border rounded-xl'></textarea>
                  </div>
                  <div>
                      <button type="submit" className='w-full rounded-2xl bg-button text-white px-4 py-2 max-w-md hover:bg-teal-600 transition'>Send</button>
                  </div>
              </form>
            </div>
        </div>
      
    </div>
  )
}

export default Contact
