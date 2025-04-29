import React, { useState, useEffect } from "react";
import logo from '../assets/logo.png';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import shopifyImg from '../assets/img4.png';
import customImg from '../assets/img3.png';
import mobileImg from '../assets/img1.png';
import wooImg from '../assets/img5.png';
import sellaImg from '../assets/img2.png';

import img from '../assets/HeadStar.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Toggle portfolio dropdown menu (desktop only)
  const toggleMenu = (e) => {
    e.stopPropagation(); // Stop event from bubbling up
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown when clicking outside (desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.dropdown-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`top-0 left-0 right-0 z-50 bg-white ${scrolled ? 'shadow-md' : ''} transition-shadow duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="h-8 sm:h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative dropdown-container">
            <button
              onClick={toggleMenu}
              className="flex items-center gap-2 text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              <p className="text-sm">Portfolio</p> <MdOutlineKeyboardArrowDown className="text-md"/>
            </button>

            {/* Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-[450px] bg-white rounded-lg shadow-lg p-4 z-10">
                <div className="flex flex-col sm:flex-row">
                  {/* Left Section */}
                  <div className="flex flex-col justify-end w-full sm:w-1/3 p-2 bg-gradient-to-b from-[#FFBA73] to-[#FFFFFF] rounded-lg mb-3 sm:mb-0">
                    <h4 className="font-semibold text-gray-700 mb-2">All Features</h4>
                    <p className="text-xs text-gray-600">
                      To empower businesses by creating audience-driven, scalable e-commerce solutions that foster trust, engagement, and sustainable growth.
                    </p>
                  </div>

                  {/* Right Section */}
                  <div className="flex flex-col gap-2 w-[300px] ml-2">
                    {/* <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex"><img src={shopifyImg}></img> <strong>Shopify</strong> <p className="text-xs text-gray-500">E-commerce solutions for your business needs</p></li>
                      <li><strong>WooCommerce</strong> <p className="text-xs text-gray-500">Flexible and scalable online store solutions</p></li>
                      <li><strong>Custom Builds</strong> <p className="text-xs text-gray-500">Tailored solutions for unique business requirements</p></li>
                      <li><strong>Sella</strong> <p className="text-xs text-gray-500">Simplified e-commerce management for small businesses</p></li>
                      <li><strong>Mobile App Develop</strong> <p className="text-xs text-gray-500">Custom e-commerce apps to reach customers</p></li>
                    </ul> */}
                    <div className="flex items-center gap-2">
                      <img src={shopifyImg} className="w-10 h-10"></img>
                      <div>
                        <h2 className="text-[16px] font-[500]">Shopify</h2>
                        <p className="text-[13px] font-[400]">E-commerce solutions for your business needs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={wooImg} className="w-10 h-10"></img>
                      <div>
                        <h2 className="text-[16px] font-[500]">WooCommerce</h2>
                        <p className="text-[13px] font-[400]">Flexible and scalable online store solutions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={customImg} className="w-10 h-10"></img>
                      <div>
                        <h2 className="text-[16px] font-[500]">Custom Builds</h2>
                        <p className="text-[13px] font-[400]">Tailored solutions for unique business requirementsbusiness needs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={sellaImg} className="w-10 h-10"></img>
                      <div>
                        <h2 className="text-[16px] font-[500]">Sella</h2>
                        <p className="text-[13px] font-[400]">Simplified e-commerce management for small businesses</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src={mobileImg} className="w-10 h-10"></img>
                      <div>
                        <h2 className="text-[16px] font-[500]">Mobile App Develop</h2>
                        <p className="text-[13px] font-[400]">Custom e-commerce apps to reach customers </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="text-sm text-gray-700 hover:text-orange-500 transition-colors duration-200">Home</button>
          <button className="text-sm text-gray-700 hover:text-orange-500 transition-colors duration-200">About Us</button>
          <button className="text-sm text-gray-700 hover:text-orange-500 transition-colors duration-200">Services</button>
          <img src={img} alt='img' className="w-3 h-3"></img>

          <button className="bg-gradient-to-b from-[#F78C1E] to-[#FEE6D6] hover:from-[#F78C1E] hover:to-[#F78C1E] text-white px-4 py-2 rounded-md text-sm transition-all duration-300">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {!isMobileMenuOpen ? (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <div className="relative">
              {/* Mobile Portfolio Button - separate state management for mobile */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent propagation to document click handler
                  setIsMenuOpen(!isMenuOpen);
                }}
                className=" w-full text-left py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200 flex justify-between items-center"
              >
                Portfolio
                <svg className={`h-4 w-4 transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} 
                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Mobile Dropdown Content */}
              {isMenuOpen && (
                <div className="bg-gray-50 rounded-md p-3 mt-1">
                  <div className="mb-3 p-2 bg-gradient-to-b from-[#FFBA73] to-[#FFFFFF] rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-1">All Features</h4>
                    <p className="text-xs text-gray-600">
                      To empower businesses by creating audience-driven, scalable e-commerce solutions.
                    </p>
                  </div>
                  
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="border-b border-gray-100 pb-2"><strong>Shopify</strong> <p className="text-xs text-gray-500">E-commerce solutions for your business needs</p></li>
                    <li className="border-b border-gray-100 pb-2"><strong>WooCommerce</strong> <p className="text-xs text-gray-500">Flexible and scalable online store solutions</p></li>
                    <li className="border-b border-gray-100 pb-2"><strong>Custom Builds</strong> <p className="text-xs text-gray-500">Tailored solutions for unique business requirements</p></li>
                    <li className="border-b border-gray-100 pb-2"><strong>Sella</strong> <p className="text-xs text-gray-500">Simplified e-commerce management for small businesses</p></li>
                    <li><strong>Mobile App Develop</strong> <p className="text-xs text-gray-500">Custom e-commerce apps to reach customers</p></li>
                  </ul>
                </div>
              )}
            </div>
            
            <button className="block w-full text-left py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200">Home</button>
            <button className="block w-full text-left py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200">About Us</button>
            <button className="block w-full text-left py-2 text-gray-700 hover:text-orange-500 transition-colors duration-200">Services</button>
            
            <button className="w-full bg-gradient-to-b from-[#F78C1E] to-[#FEE6D6] hover:from-[#F78C1E] hover:to-[#F78C1E] text-white px-4 py-3 rounded-md text-sm transition-all duration-300 mt-2">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;