import React from 'react';
import logo from '../assets/logo.png';
import { FaFacebook,  FaInstagram ,FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12'>
      {/* Top section with logo and button */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-[30px] md:mb-[40px]'>
        <div>
          <img src={logo} alt='logo' className='w-[140px] h-[48px] sm:w-[162px] sm:h-[54px] mb-4 sm:mb-2'></img>
          <p className='max-w-full sm:max-w-[350px] text-[12px] sm:text-[13px] font-[400]'>
            Ecomex help brands establish and scale their online presence with seamless, high-performance digital stores.
          </p>
        </div>
        <div className='w-full sm:w-auto'>
          <button className='w-full sm:w-auto bg-gradient-to-b from-[#F78C1E] to-[#FEE6D6] px-[16px] py-[12px] sm:py-[14px] border border-hidden rounded-[8px] text-[#FFFFFF] text-[14px] sm:text-[16px] font-[600]'>
            Get Started
          </button>
        </div>
      </div>

      {/* First divider */}
      <div className="w-full h-[1px] bg-[#F2F2F4] mb-[30px] md:mb-[40px]"></div>

      {/* Middle section with links */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 md:flex md:justify-between'>
        <div className='flex flex-col gap-2'>
          <h4 className='text-[#788193] text-[16px] sm:text-[18px] font-[700] mb-2'>Quick Links</h4>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>Home</p>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>About Us</p>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>Services</p>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>Portfolio</p>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>Contact</p>
        </div>
        
        <div className='flex flex-col gap-2'>
          <h4 className='text-[#788193] text-[16px] sm:text-[18px] font-[700] mb-2'>Contact</h4>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>info@youragency.com</p>
          <p className='text-[#9CA3AF] text-[14px] sm:text-[16px] font-[400]'>+91-98765-43210</p>
        </div>
        
        <div className='col-span-2 md:col-span-1'>
          <h4 className='text-[#788193] text-[16px] sm:text-[18px] font-[700] mb-2'>Follow Us</h4>
          {/* Social media icons would go here */}
          <div className='text-[#9CA3AF] flex gap-4 text-xl'>
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
        </div>
      </div>

      {/* Second divider */}
      <div className="w-full h-[1px] bg-[#F2F2F4] mt-[30px] md:mt-[40px] mb-[30px] md:mb-[40px]"></div>

      {/* Copyright section */}
      <div>
        <p className='text-center text-[#9CA3AF] text-[12px] sm:text-[14px] md:text-[16px] font-[400]'>
          © 2025 Ecomex. All rights reserved
        </p>
      </div>
    </div>
  );
};


export default Footer;