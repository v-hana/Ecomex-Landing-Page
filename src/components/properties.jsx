import React from 'react';
import { motion } from 'framer-motion';
import { PiUsers } from "react-icons/pi"; 
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

// Import images
// Note: In a real implementation, ensure these assets exist in your project
import icon1 from '../assets/Vector1.png';
import icon2 from '../assets/Vector2.png';
import icon3 from '../assets/Vector3.png';
import icon4 from '../assets/Vector.png';
import arrowIcon from '../assets/Arrow.png';

const properties = [
  {
    icon: <img src={icon1} alt="Icon 1" className='w-6 h-6'/>,
    title: 'Tailored Solutions',
    description: 'We craft stores that match your brand and goals'
  },
  {
    icon: <img src={icon2} alt="Icon 2" className='w-6 h-5'/>,
    title: 'Fast Turnaround',
    description: 'Live in as little as 14 days'
  },
  {
    icon: <PiUsers className='text-2xl'/>,
    title: 'Local Expertise',
    description: 'Built for Kerala businesses, trusted worldwide'
  },
  {
    icon: <IoIosCheckmarkCircleOutline className='text-2xl'/>,
    title: 'Ongoing Support',
    description: "From launch to growth, we're with you"
  }
];

const PropertiesSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-12 md:p-8 overflow-hidden">
      {/* Blurred Gradient Circles - Made responsive and positioned better for smaller screens */}
     {/* First circle - top left */}
     <div className="absolute top-0 -left-16 sm:left-0 md:left-20 lg:left-40 
                     w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96
                     bg-gradient-to-r from-[#f78c1e] to-[#ffd1a6] 
                     rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 z-0
                     transform -translate-y-1/4 sm:-translate-y-1/3"></div>
      
      {/* Second circle - bottom right */}
      <div className="absolute bottom-0 -right-16 sm:right-0 md:right-20 lg:right-40
                     w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-96 lg:h-96
                     bg-gradient-to-r from-[#f78c1e] to-[#ffd1a6]
                     rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 z-0
                     transform translate-y-1/4 sm:translate-y-1/3"></div>
      {/* Main Content */}
      <motion.h4
        className="text-[#F78C1E] text-sm md:text-base font-semibold mb-4 md:mb-5 z-10 text-center"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        Proven expertise. Local focus. Global results
      </motion.h4>
      
      <motion.h1
        className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-8 md:mb-10 text-center z-10"
        initial={{ opacity: 0.2 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.9 }}
      >
        Why Partner with Us for Your <br className="hidden md:block" />E-commerce Success
      </motion.h1>
      
      {/* Properties Grid - Changes to single column on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 z-10 w-full max-w-4xl">
        {properties.map((property, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              initial={{ x: isLeft ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 + (index * 0.1) }}
              className="w-full"
            >
              <div className="flex gap-3 md:gap-5">
                <div className="flex justify-center text-[#F78C1E] items-center px-2 md:px-3 border rounded border-[#F78C1E] h-12 w-12 flex-shrink-0">
                  {property.icon}
                </div>
                <div className="flex flex-col text-left">
                  <h3 className="text-base md:text-lg lg:text-xl text-[#101827] font-medium">{property.title}</h3>
                  <p className="text-xs md:text-sm text-[#101827] font-normal">{property.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.button 
        className='bg-[#101827] py-3 px-4 md:py-4 md:px-5 border rounded-lg mt-8 md:mt-10 z-10 hover:bg-[#2d3748] transition-colors duration-300'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className='flex items-center gap-3 md:gap-4'>
          <p className='text-white text-sm md:text-base font-semibold'>Talk to Our Experts</p>
          <img src={arrowIcon} alt='Continue' className='w-3 h-3 md:w-4 md:h-4' />
        </div>
      </motion.button>
    </div>
  );
};

export default PropertiesSection;