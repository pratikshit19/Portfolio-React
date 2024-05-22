import React from 'react'
import proj1 from '../assets/proj1.png'
import proj2 from '../assets/proj2.png'
import proj3 from '../assets/proj3.png'

const projects = [
  { id: 1, img:proj1, title: 'Project 1', liverUrl:'/'},
  { id: 2, img:proj2, title: 'Project 2', liverUrl:'/'},
  { id: 3, img:proj3, title: 'Project 3', liverUrl:'/'},
]

const Work = () => {
  return (
    <div id="Portfolio" className='max-w-[1100px] sm:mx-auto mx-8 mt-12 grid grid-cols-2 gap-4 glass p-6'>

        <div className='col-span-2 my-4'>
          <h1 className='text-4xl mb-4 text-gray-300'>My Work</h1>
        </div>

        {projects.map((project) => (
              <div key={project.id} className='glass transform transition-transform hover:scale-105 duration-300 shadown-lg overflow-hidden h-[200px] group relative'>
                  <img src={project.img} className='h-full w-full object-cover'/>
                  <div className='group-hover:opacity-70 opacity-0 bg-button absolute transition-opacity duration-300 inset-0 flex flex-col justify-center items-center'>
                      <span className='text-2xl font-bold text-white mb-4'>{project.title}</span>
                      <div>
                        <a href={project.liverUrl} className='bg-white px-5 py-2 rounded-xl font-bold'>
                            Live
                        </a>
                      </div>
                  </div>
              </div>
        ))}

    </div>
  )
}

export default Work
