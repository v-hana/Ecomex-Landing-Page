import React from "react";
import { motion } from "framer-motion";
import backgroundImg from '../assets/Bubble.png';
import img from '../assets/Main img.png';
import { PiSparkleBold } from "react-icons/pi";

const HeroSection = () => {
  return (
    <section className="bg-white text-center py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-sm md:text-base font-semibold text-[#F78C1E] mb-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          From Shopify to Custom Builds—We Create E-commerce Websites & Apps That Sell
        </motion.p>
        
        <motion.h1
          className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 leading-tight"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          Launch Your Online Store with{" "}
          <span className="block">Kerala's Top E-commerce</span>
          <span className="block">Experts</span>
        </motion.h1>
        
        <motion.p
          className="text-[#101827] text-sm md:text-base font-normal mb-8 max-w-4xl mx-auto"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          Whether you're a small business in Kochi or a growing brand in Trivandrum, we build tailored e-commerce solutions to boost your revenue. Shopify, WooCommerce, Sella, or fully custom—your online success starts here.
        </motion.p>
        
        <div 
          className="bg-cover bg-center w-full flex flex-col justify-between items-center mt-4"
          style={{ backgroundImage: `url(${backgroundImg})` }}
        >
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 md:mb-12 lg:mb-16">
            <button className="bg-[#101827] py-3 px-4 border rounded-lg">
              <div className="flex items-center justify-center gap-2 text-white">
                <PiSparkleBold className="text-base md:text-lg" />
                <p className="text-sm md:text-base font-semibold">Get a Free Quote Now</p>
              </div>
            </button>
            <button className="border border-[#788193] py-3 px-4 rounded-lg text-sm md:text-base font-semibold">
              See Our Work
            </button>
          </div>
          
          <div className="w-full flex justify-center">
            <img 
              src={img} 
              alt="E-commerce showcase" 
              className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Orange glow background */}
      <div className="absolute inset-x-0 bottom-0 h-64 md:h-96 bg-orange-100 blur-3xl opacity-50 -z-10" />
    </section>
  );
};

export default HeroSection;