'use client';
import React from 'react'
import { motion } from 'framer-motion'
import type { Skill } from '@/typing';
import { urlFor } from '@/sanity';

type Props = {
    skill: Skill;
    directionLeft?: boolean
};

function Skill({skill, directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img 
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0,
        }}
        transition={{duration: 1}}
        whileInView={{opacity: 1, x: 0}}
        className='rounded-full border border-gray-500 object-cover w-14 h-14 xl:w-16 xl:h-16  filter
        group-hover:grayscale transition duration-300 ease-in-out'
        src={urlFor(skill?.image).url()}/>
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-14 w-14 md:w-14 md:h-14 xl:w-16 xl:h-16 rounded-full z-0'>
            <div className='flex items-center justify-center h-ful'>
                <p className='text-1xl mt-4 font-bold text-black opacity-100'>{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill

