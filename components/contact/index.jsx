"use client";
import React, { useState,useEffect } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ContactWEB3Form from "../form/index1";
const info = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      description: "(+91) 8910171611",
    },
    {
    icon: <FaEnvelope />,
      title: "Email",
      description: "dipakmourya1508@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      description: "Salkia Howrah-711106",
    },
  ];
  
  const ContactPage = () => {
    
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.4, ease: "easeIn" } }}
        className="py-6 min-h-[80vh] mt-32"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order-none">
              <ContactWEB3Form 
              title="Let's Work Together"
              description="Hi, I'm Dipak Mourya! Fill out the form below to collaborate on web development, UI/UX design, or consultancy. Let's create something amazing together!"
              />
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                <span className="dark:text-[#ADFF2F] text-[#22c55e] xl:text-4xl text-[28px]">Contact Details</span>
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] dark:bg-[#27272c] bg-white dark:text-[#ADFF2F] text-[#22c55e] rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <h3>{item.description}</h3>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    );
  };
  
export default ContactPage;