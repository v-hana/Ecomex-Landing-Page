import React from 'react'
import { FaStar } from 'react-icons/fa6';
import { RiTwitterXFill } from "react-icons/ri";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import { FiArrowRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Ajith, Trivandrum Retailer ⚡",
    username: "@Ajith__",
    text: "They built my Shopify store in 10 days—sales are up 40%",
    icon: <RiTwitterXFill />,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    name: "Priya, Calicut Entrepreneur",
    username: "@Priya__",
    text: "The custom app they made is a game-changer for my business",
    icon: <PiLinkedinLogoDuotone />,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    name: "Suresh, Kochi Exporter",
    username: "@Suresh__",
    text: "WooCommerce was perfect for us—affordable and flexible",
    icon: <PiInstagramLogoDuotone />,
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Jaisal Rathee",
    username: "@RatheeJaisal__",
    text: "Ecomax has completely changed how we prioritize feature requests. We now have a clear overview of our tasks, and priorities, and helped us stay transparent with our users.",
    icon: <PiInstagramLogoDuotone />,
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    name: "Emanuel Perez",
    username: "@Perez__",
    text: "Love this, current tools seem bloated and you pay for features you don't want. looking forward to seeing this progress",
    icon: <PiInstagramLogoDuotone />,
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Gereltuya Ba",
    username: "@Geralt__",
    text: "Sharing a lovely little no-code tool for PMs I found today: Ecomax! Better user retention when your users know what to expect in the future of the product they are using today.",
    icon: <RiTwitterXFill />,
    avatar: "https://i.pravatar.cc/150?img=6",
  },
];

const TestimonialSection = () => {
  return (
    <div className='p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center'>
      <div className="w-full md:max-w-2xl lg:max-w-4xl mx-auto mb-6 md:mb-10">
        <h4 className='text-[#F78C1E] text-sm sm:text-[14px] md:text-[16px] font-semibold text-center mb-2 sm:mb-3 md:mb-[20px]'>
          Testimonial
        </h4>
        <h1 className='text-[#101827] text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-semibold text-center mb-4 sm:mb-5 md:mb-[20px]'>
          What Our Clients Say
        </h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-6xl mx-auto mb-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg md:rounded-xl p-3 sm:p-4 shadow-sm bg-white flex flex-col gap-2 sm:gap-3"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">{item.name}</p>
                  <p className="text-gray-500 text-xs sm:text-sm">{item.username}</p>
                </div>
              </div>
              <div className=" text-xl sm:text-xl">{item.icon}</div>
            </div>
            
            <div className="flex items-center text-yellow-400 text-xs sm:text-sm">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
            
            <p className="text-gray-700 text-xs sm:text-[13px] md:text-[14px]">{item.text}</p>
          </div>
        ))}
      </div>
      
      <div>
        <button className='bg-[#101827] py-2 sm:py-3 md:py-[14px] px-4 sm:px-5 md:px-[20px] border rounded-lg md:rounded-[8px] mt-4 sm:mt-6 md:mt-8'>
          <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
            <p className='text-white text-sm sm:text-[14px] md:text-[16px] font-semibold'>Let's Talk</p>
            <FiArrowRight className='text-white text-xl'/>
          </div>
        </button>
      </div>
    </div>
  )
}

export default TestimonialSection