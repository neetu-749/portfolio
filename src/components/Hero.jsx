import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div  className={`${styles.paddingX} absolute inset-0 top-[200px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div  className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div style={{verticalAlign:"middle",marginTop:"2%"}}>
          <h1 className={`${styles.heroHeadText} text-white hyy`}>
            Hi, I'm <span className='text-[#915EFF]'>Neetu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I develop full-stack web applications, <br className='sm:block hidden' />
          using MERN and Blockchain technologies.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default Hero;