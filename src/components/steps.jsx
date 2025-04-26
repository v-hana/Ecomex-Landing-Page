import React from "react";
import { motion } from "framer-motion"; // Make sure to import motion from framer-motion
import step1Icon from '../assets/step1.png';
import step2Icon from '../assets/step2.png';
import step3Icon from '../assets/step3.png';
import step4Icon from '../assets/step4.png';
import step5Icon from '../assets/step5.png';
import arrowIcon from '../assets/Arrow.png';

const steps = [
  {
    sl_no: "Step 1",
    title: "Discovery",
    description: "Each challenge starts off with a video that describes the design objective.",
    icon: <img src={step1Icon} alt="Icon 1" className='w-4 h-4 sm:w-5 sm:h-5'/>
  },
  {
    sl_no: "Step 2",
    title: "Design",
    description: "We create a stunning, user-friendly store",
    icon: <img src={step2Icon} alt="Icon 2" className='w-4 h-4 sm:w-5 sm:h-5'/>
  },
  {
    sl_no: "Step 3",
    title: "Develop",
    description: "We build it—Shopify, WooCommerce, or custom",
    icon: <img src={step3Icon} alt="Icon 3" className='w-4 h-4 sm:w-5 sm:h-5'/>
  },
  {
    sl_no: "Step 4",
    title: "Launch",
    description: "Your store goes live, ready to sell",
    icon: <img src={step4Icon} alt="Icon 4" className='w-4 h-4 sm:w-5 sm:h-5'/>
  },
  {
    sl_no: "Step 5",
    title: "Support",
    description: "We optimize and grow with you",
    icon: <img src={step5Icon} alt="Icon 5" className='w-4 h-4 sm:w-5 sm:h-5'/>
  },
];

const StepsSection = () => {
  return (
    <section className="relative py-10 sm:py-16 md:py-20 px-4 bg-white text-center overflow-hidden">

      {/* Animated Blurred Background Circles */}
      <motion.div 
        className="absolute top-1/2 -left-20 sm:left-0 md:left-20 lg:left-32 
                   w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                   bg-gradient-to-r from-[#f78c1e] to-[#ffd1a6] 
                   rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 z-0"
        animate={{
          background: [
            'linear-gradient(90deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(135deg, #f78c1e 0%, #ffb66e 60%, #ffd1a6 100%)',
            'linear-gradient(180deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(225deg, #f78c1e 0%, #ffb66e 60%, #ffd1a6 100%)',
            'linear-gradient(270deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(90deg, #f78c1e 0%, #ffd1a6 100%)',
          ],
          scale: [1.2, 1, 0.8, 0.6, 0.7, 0.9]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute top-20 -right-20 sm:right-0 md:right-20 lg:right-32 
                   w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 
                   bg-gradient-to-r from-[#f78c1e] to-[#ffd1a6] 
                   rounded-full filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-20 z-0"
        animate={{
          background: [
            'linear-gradient(270deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(315deg, #f78c1e 0%, #ffb66e 60%, #ffd1a6 100%)',
            'linear-gradient(0deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(45deg, #f78c1e 0%, #ffb66e 60%, #ffd1a6 100%)',
            'linear-gradient(90deg, #f78c1e 0%, #ffd1a6 100%)',
            'linear-gradient(270deg, #f78c1e 0%, #ffd1a6 100%)',
          ],
          scale: [1, 0.9, 0.8, 0.6, 0.7, 0.9]
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Main Content */}
      <h4 className="relative text-[#F78C1E] text-sm sm:text-base font-semibold mb-4 z-10">
        A simple, stress-free process to get you online
      </h4>
      
      <h1 className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-8 sm:mb-10 z-10">
        How We Build Your E-commerce <br className="hidden md:block"/>Success
      </h1>

      <div className="flex flex-col items-center max-w-6xl mx-auto relative z-10">

        {/* First 3 steps - Responsive */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center mb-6 sm:mb-8 md:mb-10">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="w-full sm:w-64 md:w-72 lg:w-80">
              <div className="bg-[#F5F6FA] w-full border border-hidden rounded-xl sm:rounded-2xl p-4 h-full 
                             flex flex-col gap-3 sm:gap-4 md:gap-5 
                             hover:shadow-lg sm:hover:shadow-xl transition duration-300">
                <div className="text-left text-[#F78C1E] text-sm sm:text-base font-medium mb-2 sm:mb-4 md:mb-6">
                  {step.sl_no}
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-[#788193] font-semibold">
                    {step.title}
                  </h3>
                  <div className="bg-white border p-1 sm:p-2 border-[#F78C1E] rounded-md">
                    {step.icon}
                  </div>
                </div>
                
                <div className="w-full h-px bg-[#E5E7EB] my-2"></div>
                
                <p className="text-xs sm:text-sm text-[#070A0B] text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Next 2 steps - Responsive */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center mb-6 sm:mb-8 md:mb-10">
          {steps.slice(3, 5).map((step, index) => (
            <div key={index} className="w-full sm:w-64 md:w-72 lg:w-80">
              <div className="bg-[#F5F6FA] w-full border border-hidden rounded-xl sm:rounded-2xl p-4 h-full 
                             flex flex-col gap-3 sm:gap-4 md:gap-5 
                             hover:shadow-lg sm:hover:shadow-xl transition duration-300">
                <div className="text-left text-[#F78C1E] text-sm sm:text-base font-medium mb-2 sm:mb-4 md:mb-6">
                  {step.sl_no}
                </div>
                
                <div className="flex justify-between items-center">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-[#788193] font-semibold">
                    {step.title}
                  </h3>
                  <div className="bg-white border p-1 sm:p-2 border-[#F78C1E] rounded-md">
                    {step.icon}
                  </div>
                </div>
                
                <div className="w-full h-px bg-[#E5E7EB] my-2"></div>
                
                <p className="text-xs sm:text-sm text-[#070A0B] text-left">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Button - Responsive */}
        <button className="bg-[#101827] py-3 px-4 sm:py-3 sm:px-5 md:py-4 md:px-5 
                          border rounded-md sm:rounded-lg mt-4 sm:mt-6 md:mt-8
                          hover:bg-[#2d3748] transition-colors duration-300">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <p className="text-white text-sm sm:text-base font-semibold">
              Start Your Journey Today
            </p>
            <img src={arrowIcon} alt='Continue' className='w-3 h-3 sm:w-4 sm:h-4'/>
          </div>
        </button>

      </div>

    </section>
  );
};

export default StepsSection;