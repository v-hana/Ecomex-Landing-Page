import React from "react";
import { motion } from "framer-motion";
import customImg from '../assets/img3.png';
import mobileImg from '../assets/img1.png';
import shopifyImg from '../assets/img4.png';
import wooImg from '../assets/img5.png';
import sellaImg from '../assets/img2.png';

const services = [
  {
    title: "Custom E-commerce Builds",
    description: "Unique, high-performance stores built from scratch",
    note: "Perfect for: Complex needs, full control",
    button: "Go Custom Today",
    icon: <img src={customImg} alt="Custom Icon" className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-40 lg:w-54 lg:h-48" />,
  },
  {
    title: "Mobile App Development",
    description: "Custom e-commerce apps to reach customers",
    note: "Perfect for: Mobile-first brands, app-based sales",
    button: "Get Your App",
    icon: <img src={mobileImg} alt="Mobile Icon" className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-40 lg:w-54 lg:h-48" />,
  },
  {
    title: "Shopify Development",
    description: "Fast, user-friendly online stores with Shopify's power",
    note: "Perfect for: Quick launches, beginners",
    button: "Build with Shopify",
    icon: <img src={shopifyImg} alt="Shopify Icon" className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-40 lg:w-54 lg:h-48" />,
  },
  {
    title: "WooCommerce Development",
    description: "Flexible, scalable WordPress stores tailored to you",
    note: "Perfect for: Custom features, budget-friendly growth",
    button: "Start with WooCommerce",
    icon: <img src={wooImg} alt="Woo Icon" className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-40 lg:w-54 lg:h-48" />,
  },
  {
    title: "Sella Development",
    description: "Simplified e-commerce with Sella's modern tools",
    note: "Perfect for: Small businesses, easy management",
    button: "Explore Sella",
    icon: <img src={sellaImg} alt="Sella Icon" className="w-32 h-28 sm:w-40 sm:h-36 md:w-48 md:h-40 lg:w-54 lg:h-48" />,
  },
];

const fadeInUp = {
  hidden: { opacity: 0.2, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const ServicesSection = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 bg-white text-center">
      <h4 className="text-[#F78C1E] text-sm sm:text-[14px] md:text-[16px] font-[600] mb-3 sm:mb-4 md:mb-[20px]">
        Choose the platform that fits your vision—we'll handle the rest
      </h4>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-[600] leading-tight md:leading-[55px] mb-6 sm:mb-8 md:mb-[40px]">
        E-commerce Solutions for Every <br className="hidden sm:block" />Business
      </h1>

      <div className="flex flex-col items-center max-w-6xl mx-auto">
        {/* First Row */}
        <div className="flex gap-4 sm:gap-6 md:gap-[40px] flex-wrap justify-center mb-6 sm:mb-8 md:mb-[40px]">
          {services.slice(0, 2).map((service, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[320px] md:w-[350px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // custom={index}
            >
              <div className="bg-white rounded-xl w-full shadow-sm border h-full flex flex-col gap-3 sm:gap-4 md:gap-[20px] hover:shadow-md transition">
                <div className="flex justify-center">{service.icon}</div>
                <div className="bg-[#F5F6FA] flex flex-col gap-2 text-left p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-[18px] md:text-[20px] text-[#101827] font-bold">{service.title}</h3>
                  <p className="text-[#101827] text-[10px] sm:text-[11px]">{service.description}</p>
                  <p className="text-[9px] sm:text-[10px] text-[#788193]">{service.note}</p>
                  <button className="w-full sm:w-[60%] md:w-[50%] bg-gray-100 hover:bg-gray-200 text-[10px] sm:text-[11px] md:text-[12px] font-[500] px-2 py-2 sm:px-3 sm:py-2 md:px-[12px] md:py-[11px] rounded-md border border-[#101827]">
                    {service.button}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-[40px] justify-center">
          {services.slice(2, 5).map((service, index) => (
            <motion.div
              key={index}
              className="w-full sm:w-[320px] md:w-[350px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              // custom={index + 2}
            >
              <div className="bg-white rounded-xl w-full shadow-sm border h-full flex flex-col gap-3 sm:gap-4 md:gap-[20px] hover:shadow-md transition">
                <div className="flex justify-center">{service.icon}</div>
                <div className="bg-[#F5F6FA] flex flex-col gap-2 text-left p-4 sm:p-5 md:p-6">
                  <h3 className="text-lg sm:text-[18px] md:text-[20px] text-[#101827] font-bold">{service.title}</h3>
                  <p className="text-[#101827] text-[10px] sm:text-[11px]">{service.description}</p>
                  <p className="text-[9px] sm:text-[10px] text-[#788193]">{service.note}</p>
                  <button className="w-full sm:w-[75%] md:w-[65%] bg-gray-100 hover:bg-gray-200 text-[10px] sm:text-[11px] md:text-[12px] font-[500] px-2 py-2 sm:px-3 sm:py-2 md:px-[12px] md:py-[11px] rounded-md border border-[#101827]">
                    {service.button}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;