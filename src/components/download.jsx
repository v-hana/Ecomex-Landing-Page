import React from 'react'
import img from '../assets/MAGNET.png'

import { FiArrowRight } from "react-icons/fi";

const DownloadSection = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-8 md:gap-12 lg:gap-16 mb-6 md:mb-8 lg:mb-[40px] p-4 sm:p-8 md:p-12'>
      <div className='w-full md:w-[50%] bg-gradient-to-b from-[#F78C1E] via-[#FFFFFF] to-[#FFFFFF] border border-hidden rounded-2xl md:rounded-[34px] flex justify-center'>
        <img 
          src={img} 
          alt='download' 
          className='w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[460px] h-auto my-6 sm:my-8 md:my-10 lg:my-[45px] mx-auto md:mx-[46px]'
        />
      </div>
      
      <div className='w-full md:w-[50%] flex flex-col gap-4 sm:gap-6 md:gap-8 mt-6 md:mt-0'>
        <h4 className='text-sm sm:text-base lg:text-[16px] font-semibold text-[#FEE6D6]'>
          Unlock the secrets to e-commerce success
        </h4>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-[#000000] leading-tight md:leading-[55px]'>
          Get Started with a Free Resource
        </h2>
        <p className='text-sm sm:text-base lg:text-[16px] font-normal text-[#101827]'>
          Discover the key strategies and expert insights you need to successfully launch and grow your online store in 2025. This guide covers everything from choosing the right platform and setting up payments to driving traffic and scaling your business
        </p>
        <div className="flex md:justify-start justify-center">
  <button className='bg-[#101827] w-fit inline-flex items-center py-3 md:py-[14px] px-4 md:px-[20px] border rounded-md md:rounded-[8px] gap-2 md:gap-4'>
    <p className='text-white text-sm sm:text-base lg:text-[16px] font-semibold'>Download Now</p>
    <FiArrowRight className='text-white text-xl'/>
  </button>
</div>

      </div>
      
    </div>
    
  )
}

export default DownloadSection