import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
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
          
          <div className="swiper-wrapper-container">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1.1}
              breakpoints={{
                640: {
                  slidesPerView: 1.1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 1.25,
                  spaceBetween: 40,
                },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
            >
              {images.map((url, index) => (
                <SwiperSlide key={index} className="!w-full sm:!w-[80%] md:!w-[85%] lg:!w-[900px]">
                  <img 
                    src={url} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-auto"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        
        <div className='flex justify-center'>
          <button className='bg-[#101827] py-3 sm:py-3 md:py-[14px] px-4 sm:px-5 md:px-[20px] border rounded-lg md:rounded-[8px] mt-6 sm:mt-6 md:mt-8'>
            <div className='flex items-center gap-2 md:gap-4'>
              <p className='text-white text-sm sm:text-base lg:text-[16px] font-semibold'>View All Project</p>
              <FiArrowRight className='text-white text-xl'/>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection