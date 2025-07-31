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
        animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6, ease: "easeOut" } }}
        className="min-h-screen pt-16 md:pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-full overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10 dark:from-[#ADFF2F]/10 dark:to-[#22c55e]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-[#16a34a]/10 to-[#22c55e]/10 dark:from-[#22c55e]/10 dark:to-[#ADFF2F]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative w-full">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.6 } }}
            className="text-center mb-12 md:mb-16 max-w-full"
          >
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent xl:mt-10 mt-16 break-words"
            >
              Let&apos;s Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }}
              className="text-base md:text-lg lg:text-xl dark:text-white/70 text-black/70 max-w-full lg:max-w-3xl mx-auto px-2 break-words leading-relaxed"
            >
              Ready to bring your ideas to life? Let&apos;s discuss your project and create something amazing together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-start w-full max-w-full">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 1.3, duration: 0.8 } }}
              className="order-2 lg:order-1 lg:col-span-2 w-full min-w-0"
            >
              <div className="relative w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-2xl p-4 md:p-6 lg:p-8 w-full">
                  
                  
                  <ContactWEB3Form 
                    title="Let's Work Together"
                  description="Hi, I'm Dipak Mourya! Fill out the form below to collaborate on web development, UI/UX design, or consultancy. Let's create something amazing together!"
                  />
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 1.4, duration: 0.8 } }}
              className="order-1 lg:order-2 lg:col-span-1 space-y-6 w-full min-w-0"
            >
              <div className="mb-6 lg:mb-8">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent mb-4 break-words">
                  Contact Information
                </h2>
          
              </div>

              <div className="space-y-4 w-full">
                {info.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 1.5 + index * 0.1, duration: 0.6 } }}
                    className="group w-full"
                  >
                    <div className="relative w-full">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10 dark:from-[#ADFF2F]/10 dark:to-[#22c55e]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-white/60 dark:bg-black/20 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-xl p-3 md:p-4 lg:p-6 hover:border-[#22c55e]/30 dark:hover:border-[#ADFF2F]/30 transition-all duration-300 w-full">
                        <div className="flex items-center gap-3 md:gap-4 w-full min-w-0">
                          <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                            <div className="text-sm md:text-lg lg:text-xl">{item.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black/80 dark:text-white mb-1 break-words">
                              {item.title}
                            </h3>
                            <p className="text-black/60 dark:text-white/70 text-sm md:text-base break-all">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 1.8, duration: 0.6 } }}
                className="mt-6 lg:mt-8 w-full"
              >
                <div className="relative w-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 rounded-xl blur-xl"></div>
                  <div className="relative bg-white/70 dark:bg-black/30 backdrop-blur-sm border border-white/30 dark:border-white/10 rounded-xl p-4 md:p-6 w-full">
                    <h3 className="text-base md:text-lg font-semibold text-black/80 dark:text-white mb-3 break-words">
                      🚀 Quick Response Promise
                    </h3>
                    <p className="text-black/60 dark:text-white/70 text-sm leading-relaxed break-words">
                      I typically respond to all inquiries within 24 hours. For urgent projects, feel free to call me directly for immediate assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  };
  
export default ContactPage;