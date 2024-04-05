'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '@/typing'
import { urlFor } from '@/sanity'

type Props = {
  experience: Experience
}

function ExperienceCard({experience}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[100px] md:w-[400px] xl:w-[900px]  snap-center bg-[#292929] p-3 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
            opacity: 0
        }}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1,y: 0}}
        viewport={{once: true}}
        className='w-20 h-20 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        key={experience?._id}
         src={urlFor(experience?.companyImage).url()} 
         alt="" />

         <div className='px-0 md:px-5'>
            <h4 className='text-2xl font-light'>{experience?.jobTitle}</h4>
            <p className='font-bold text-xl '>{experience?.company}</p>
            <div className='flex space-x-2 my-2'>
               {experience.technologies?.map((technology) => (
                <img 
                key={technology?._id}
                className='h-10 w-10 rounded-full'
                src={urlFor(technology.image).url()} />
               ))}
                 
            </div>
            <p className='uppercase py-3 text-gray-300'>
              {new Date(experience.dateStarted).toDateString()} -{" "}
              {experience.isCurrentlyWorkingHere ? "present"
              : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className='list-disc space-y-2 ml-5 text-lg'>
               {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
               ))}
            </ul>
         </div>
    </article>
  )
}

export default ExperienceCard