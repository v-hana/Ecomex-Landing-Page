import React, { useState } from 'react';
import StarIcon from '../assets/star.png';
import { IoMail } from "react-icons/io5";
import { IoMdCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    business: '',
    message: '',
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const LabelledInput = ({ label, field, type = 'text' }) => (
    <div className="relative w-full">
      <div className="relative p-[1px] rounded-md overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-[#FEE6D626] to-[#F78C1E26]"></div>
        {/* Input */}
        <input
          type={type}
          value={form[field]}
          onChange={handleChange(field)}
          className="peer relative z-10 w-full px-4 pt-6 pb-2 text-sm bg-[#F8F9FC] rounded-md outline-none transition"
        />
      </div>
      <label
        className={`
          absolute left-4 -top-2 text-[11px] font-medium text-gray-700 bg-white px-1 z-20
          peer-focus:text-orange-500
        `}
      >
        {label}
      </label>
    </div>
  );

  const LabelledTextarea = ({ label, field }) => (
    <div className="relative w-full">
      <div className="relative px-[1px] pt-[1px] pb-0 rounded-md overflow-hidden">
        {/* Gradient Border */}
        <div className="absolute inset-0  rounded-md bg-gradient-to-r from-[#FEE6D626] to-[#F78C1E26]"></div>
        {/* Textarea */}
        <textarea
          rows="4"
          value={form[field]}
          onChange={handleChange(field)}
          className="peer relative z-10 w-full mb-0  px-4 pt-6 pb-2 text-sm bg-[#F8F9FC] rounded-md outline-none transition resize-none"
        />
      </div>
      <label
        className={`
          absolute left-4 -top-2 text-[11px] font-medium text-gray-700 bg-white px-1 z-20
          peer-focus:text-orange-500
        `}
      >
        {label}
      </label>
    </div>
  );

  return (
    <div className="px-4 md:px-6 lg:px-12 text-center">
      <div>
        <h4 className="text-[#F78C1E] text-[14px] sm:text-[16px] font-[600] mb-[12px] md:mb-[20px]">
          A simple, stress-free process to get you online
        </h4>
        <h1 className="text-[28px] sm:text-[36px] md:text-[48px] font-[600] leading-tight md:leading-[55px] mb-[20px] md:mb-[40px]">
          How We Build Your E-commerce <br className="hidden sm:block" />Success
        </h1>

        <div className="px-4 sm:px-8 md:px-16 py-6 md:py-10 border rounded-2xl relative bg-white shadow-sm">
          <div className=" bg-white rounded-2xl px-4 sm:px-8 md:px-16 py-6 md:py-10">
            <div className="absolute top-[-8px] right-[20px] md:right-[40px] w-4 h-4">
              <img src={StarIcon} alt="icon" />
              

            </div>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              <LabelledInput label="Name" field="name" />
              <LabelledInput label="Phone" field="phone" />
              <LabelledInput label="Email" field="email" type="email" />
              <LabelledInput label="Business Name" field="business" />
              <div className="md:col-span-2">
                <LabelledTextarea label="Message" field="message" />
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button className="bg-[#101827] py-[12px] sm:py-[14px] px-[16px] sm:px-[20px] rounded-[8px] w-full sm:w-auto">
                  <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-4">
                    <p className="text-white text-[14px] sm:text-[16px] font-[600]">Submit</p>
                    <FiArrowRight className='text-white text-xl'/>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-[30px] sm:mt-[40px] flex flex-col gap-6 sm:gap-8 items-center">
        <h4 className="text-[14px] sm:text-[16px] font-[600] text-[#F78C1E]">Contact Info:</h4>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full items-center justify-center">
          <div className=" rounded-[8px] overflow-hidden w-full sm:w-auto">
            
            <div className=" flex items-center gap-2 rounded-[8px] px-[12px] sm:px-[18px] py-[10px] sm:py-[14px] bg-[#F3F4F8] w-full">
              <IoMail className="text-[#FFCD29]" /> 
              <p className="text-sm sm:text-base">info@youragency.com</p>
            </div>
          </div>
          <div className=" rounded-[8px] overflow-hidden w-full sm:w-auto">
           
            <div className=" flex items-center gap-2 rounded-[8px] px-[12px] sm:px-[18px] py-[10px] sm:py-[14px] bg-[#F3F4F8] w-full">
              <IoMdCall className="text-[#14AE5C]" />
              <p className="text-sm sm:text-base">+91-98765-43210</p>
            </div>
          </div>
          <div className="rounded-[8px] overflow-hidden w-full sm:w-auto">
           
            <div className=" flex items-center gap-2 rounded-[8px] px-[12px] sm:px-[18px] py-[10px] sm:py-[14px] bg-[#F3F4F8] w-full">
              <FaWhatsapp className="text-[#14AE5C]" />
              <p className="text-sm sm:text-base">Chat with Us</p>
            </div>
          </div>
        </div>
        <div className=" rounded-[8px] overflow-hidden w-full sm:w-[80%] md:w-[50%] lg:w-[30%]">
         
          <button className="border border-[#788193] w-full bg-white text-[14px] sm:text-[16px] font-[600] px-[12px] sm:px-[16px] py-[10px] sm:py-[14px] rounded-[8px]">
            Book a Free 15-Minute Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;