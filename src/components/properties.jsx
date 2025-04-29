import React from 'react';
import { motion } from 'framer-motion';
import { PiUsersBold } from "react-icons/pi";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { LuCircleGauge } from "react-icons/lu";
import { SiSpeedtest } from "react-icons/si";

// Import images
// Note: In a real implementation, ensure these assets exist in your project
import icon1 from '../assets/Vector1.png';
import icon2 from '../assets/Vector2.png';
import icon3 from '../assets/Vector3.png';
import icon4 from '../assets/Vector.png';
import arrowIcon from '../assets/Arrow.png';

const properties = [
  {
    icon: <LuCircleGauge className='text-2xl'/>,
    title: 'Tailored Solutions',
    description: 'We craft stores that match your brand and goals'
  },
  {
    icon: <SiSpeedtest className='text-2xl'/>,
    title: 'Fast Turnaround',
    description: 'Live in as little as 14 days'
  },
  {
    icon: <PiUsersBold className='text-2xl'/>,
    title: 'Local Expertise',
    description: 'Built for Kerala businesses, trusted worldwide'
  },
  {
    icon: <FaRegCheckCircle className='text-2xl'/>,
    title: 'Ongoing Support',
    description: "From launch to growth, we're with you"
  }
];

const PropertiesSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-12 md:p-8 overflow-hidden">
      {/* Animated Gradient Circles */}
      {/* First circle - top left with animation */}
      <motion.div 
        className="absolute top-[250px] -left-16 sm:left-0 md:left-20 lg:left-40
                   w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-90 lg:h-90
                   bg-gradient-to-r from-[#f78c1e] to-[#ffd1a6] 
                   rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 z-0
                   transform -translate-y-1/4 sm:-translate-y-1/3"
        animate={{
          background: [
            'linear-gradient(90deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(120deg, #f78c1e 0%, #ffb66e 50%, #ffd1a6 100%)',
            'linear-gradient(180deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(240deg, #f78c1e 0%, #ffb66e 50%, #ffd1a6 100%)',
            'linear-gradient(360deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(90deg, #f78c1e 0%, #ffd1a6 100%)',
          ],
          scale: [1.5, 1.4, 1.2, 1.4, 1.6, 1.3]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Second circle - bottom right with animation */}
      <motion.div 
        className="absolute bottom-[250px] -right-16 sm:right-0 md:right-20 lg:right-40
                   w-40 h-40 sm:w-50 sm:h-50 md:w-62 md:h-62 lg:w-70 lg:h-70
                   bg-gradient-to-r from-[#f78c1e] to-[#ffd1a6]
                   rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 z-0
                   transform translate-y-1/4 sm:translate-y-1/3"
        animate={{ 
          background: [
            'linear-gradient(270deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(330deg, #f78c1e 0%, #ffb66e 50%, #ffd1a6 100%)',
            'linear-gradient(30deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(90deg, #f78c1e 0%, #ffb66e 50%, #ffd1a6 100%)',
            'linear-gradient(150deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(270deg, #f78c1e 0%, #ffd1a6 100%)',
          ],
          scale: [1.2, 1.1, 1, 1.1, 1.15, 1.2]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      {/* Main Content */}
      <motion.h4
        className="text-[#F78C1E] text-sm md:text-base font-semibold mb-4 md:mb-5 z-10 text-center mt-2"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 mb-2 md:gap-8 lg:gap-14 z-10 w-full max-w-4xl">
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
        className='bg-[#101827] py-3 px-4 md:py-4 mb-2 md:px-5 border rounded-lg mt-8 md:mt-10 z-10 hover:bg-[#2d3748] transition-colors duration-300'
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className='flex items-center gap-3 md:gap-4'>
          <p className='text-white text-sm md:text-base font-semibold'>Talk to Our Experts</p>
          <FiArrowRight className='text-white text-xl'/>
        </div>
      </motion.button>
    </div>
  );
};

export default PropertiesSection;