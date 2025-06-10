import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import image1 from '../assets/projectimg1.png'
import image2 from '../assets/projectimg2.png'
import image3 from '../assets/projectimg3.png'
import image4 from '../assets/projectimg4.png'

const ProjectsSection = () => {
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  return (
    <div className='bg-[#FEE6D6B2]'>
      <div className='p-4 sm:p-6 md:p-8 lg:p-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-4'>
          <h1 className='text-[#F78C1E] text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-semibold'>
            Real Results from <br className="hidden sm:block" />Real Clients
          </h1>
          <div className='w-full md:w-auto'>
            <p className='text-[#101827] text-sm sm:text-base lg:text-[16px] font-semibold'>
              See how we've transformed <br className="hidden sm:block" />businesses like yours
            </p>
            <button className='w-full md:w-auto bg-[#101827] py-3 sm:py-3 md:py-[14px] px-4 sm:px-5 md:px-[20px] border rounded-lg md:rounded-[8px] mt-4 md:mt-8'>
              <div className='flex items-center justify-center md:justify-start gap-2 md:gap-4'>
                <p className='text-white text-sm sm:text-base lg:text-[16px] font-semibold'>Want Results Like These? Contact Us</p>
                <FiArrowRight className='text-white text-xl'/>
              </div>
            </button>
          </div>
        </div>
        
        <div className='relative bg-[#F78C1E] border border-hidden rounded-2xl sm:rounded-3xl md:rounded-[48px] pt-6 sm:pt-8 md:pt-[45px] mt-6 sm:mt-8 md:mt-[40px] overflow-hidden'>
          {/* Left Gradient Shadow */}
          <div className="absolute top-0 left-0 h-full w-6 sm:w-10 md:w-[60px] z-10 pointer-events-none bg-gradient-to-r from-[#F78C1E] via-[#F78C1E4D] to-[#F78C1E00]" />
          
          {/* Right Gradient Shadow */}
          <div className="absolute top-0 right-0 h-full w-6 sm:w-10 md:w-[60px] z-10 pointer-events-none bg-gradient-to-l from-[#F78C1E] via-[#F78C1E4D] to-[#F78C1E00]" />
          
          <div className="w-full overflow-hidden">
            {/* Mobile and Small screens */}
            <div 
              className="flex sm:hidden animate-scroll-mobile"
            >
              {[...images, ...images, ...images].map((url, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mr-5"
                  style={{ width: 'calc(100vw - 80px)' }}
                >
                  <img 
                    src={url} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Medium screens */}
            <div 
              className="hidden sm:flex md:hidden animate-scroll-sm"
            >
              {[...images, ...images, ...images].map((url, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mr-7"
                  style={{ width: 'calc(80vw - 60px)' }}
                >
                  <img 
                    src={url} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Large screens and above */}
            <div 
              className="hidden md:flex animate-scroll-lg"
            >
              {[...images, ...images, ...images].map((url, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 mr-10"
                  style={{ width: 'min(85vw, 900px)' }}
                >
                  <img 
                    src={url} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className='flex justify-center mb-6 sm:mb-6 md:mb-6 lg:mb-6'>
          <button className='bg-[#101827] py-3 sm:py-3 md:py-[14px] px-4 sm:px-5 md:px-[20px] border rounded-lg md:rounded-[8px] mt-6 sm:mt-6 md:mt-8'>
            <div className='flex items-center gap-2 md:gap-4'>
              <p className='text-white text-sm sm:text-base lg:text-[16px] font-semibold'>View All Project</p>
              <FiArrowRight className='text-white text-xl'/>
            </div>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        /* Mobile animation */
        @keyframes scroll-mobile {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100vw * 4));
          }
        }
        
        /* Small screens animation */
        @keyframes scroll-sm {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-80vw * 4));
          }
        }
        
        /* Large screens animation */
        @keyframes scroll-lg {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-85vw * 4 - 40px * 4));
          }
        }
        
        .animate-scroll-mobile {
          animation: scroll-mobile 30s linear infinite;
        }
        
        .animate-scroll-sm {
          animation: scroll-sm 35s linear infinite;
        }
        
        .animate-scroll-lg {
          animation: scroll-lg 40s linear infinite;
        }
        
        .animate-scroll-mobile:hover,
        .animate-scroll-sm:hover,
        .animate-scroll-lg:hover {
          animation-play-state: paused;
        }
        
        /* Ensure smooth performance */
        .animate-scroll-mobile,
        .animate-scroll-sm,
        .animate-scroll-lg {
          will-change: transform;
        }
      `}</style>
    </div>
  )
}

export default ProjectsSection