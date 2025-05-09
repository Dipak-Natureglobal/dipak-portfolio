"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import {FaSkype, FaLinkedinIn, FaGithub, FaPhone, FaTelegram} from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import { useTheme } from "../theme-provider/page";
const Footer = () => {
  const year = new Date().getFullYear();
      const { theme } = useTheme(); 
  return (
    <>
      <footer className="dark:bg-primary  bg-gray-100 dark:text-white text-black/70 sticky  mt-28  border-t border-stroke ">
      <div className="w-full border-t dark:border-gray-300 border-black/60 dark:border-strokedark mb-8" />
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 my-4">
          {/* <!-- Footer Top --> */}
          
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className=" container mx-auto border-stroke dark:border-strokedark flex flex-wrap flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-0 py-7">
            
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
                <div className="flex flex-row">
                <Link href="/">
                    <Image
                    src={theme === "dark" ? "/assets/profile/logo.png" : "/assets/profile/light-logo.png"}                   
                    alt="logo"
                    width={60}
                    height={60}
                    layout="fixed"
                    className=" block"/>
                </Link>
               
                </div>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <p>Copyright © {year} Dipak Mourya</p>
              <a
                  href="mailto:dipakmourya1508@gmail.com"
                  className=" dark:hover:text-[#ADFF2F] hover:text-[#22c55e]"
                >
                  <p className="flex justify-center items-center gap-3 ">
                    <SiGmail/>dipakmourya1508@gmail.com
                  </p>
                </a>
                <a
                  href="tel:+918910171611"
                  className=" dark:hover:text-[#ADFF2F] hover:text-[#22c55e]"
                >
                  <p className="flex justify-center items-center gap-3">
                  <FaPhone/>+91 8910171611
                  </p>
                </a>
              
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <ul className="flex items-center gap-5 xl:my-0 mt-3">
                <li>
                <a href="https://github.com/Dipak-Mourya" target="_blank" rel="noopener noreferrer">
                   <FaGithub size={"25px"} className="dark:hover:fill-[#ADFF2F] hover:text-[#22c55e]"/>
                </a>

                </li>
               
                <li>
                  <a href="https://www.linkedin.com/in/dipak-mourya-429204210" target="_blank">
                   <FaLinkedinIn size={"25px"} className="dark:hover:fill-[#ADFF2F] hover:text-[#22c55e]"/>
                  </a>
                </li>
                <li>
                <a href="https://join.skype.com/invite/ugfL9xm7x8ta" target="_blank" rel="noopener noreferrer">
                    <FaSkype size={"25px"} className="dark:hover:fill-[#ADFF2F] hover:text-[#22c55e]"/>
                </a>
                </li>
                <li>
                <a href="https://t.me/Dipak_15" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={"25px"} className="dark:hover:fill-[#ADFF2F] hover:text-[#22c55e]"/>
                </a>
                </li>
               
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
