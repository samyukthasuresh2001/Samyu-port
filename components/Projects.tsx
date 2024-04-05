'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { Project } from '@/typing';
import { urlFor } from '@/sanity';

type Props = {
  projects: Project[];
}

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row 
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Projects
      </h3>

      <div className='relative w-full flex
       overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects?.map((project, i) => (
          <div key={project._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
            items-center justify-center p-12 md:p-30 h-screen '>
            <motion.img 
            className='md: pt-10'
             initial={{ y: -300,opacity: 0}}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 1.2 }}
             viewport={{once: true}}
            src={urlFor(project?.image).url()} alt="" />

            <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-2xl font-semibold text-center'>
                <span className='underline decoration-[#F7AB0A]/50' >Case Study {i + 1} 0f {projects.length}:</span>
                {project?.title}</h4>

                <div className='flex items-center space-x-2 justify-center'>
                  {project?.technologies.map((technology) => (
                    <img 
                    key={project?._id}
                    className='h-10 w-10'
                    src={urlFor(technology.image).url()} 
                    alt="" />
                  ))}

                </div>

              <p className='text-lg text-center md:text-left'>
               {project?.summary}
              </p>

              <button className='flex flex-col space-y-2 w-fit mx-auto bg-transparent border-2 hover:bg-[#63552d] py-2 px-5 text-white rounded-md font-bold text-lg'>
              <a href={project.linkToBuild}>View</a>
              </button>
             
              
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects