"use client";
import { motion } from "framer-motion"
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
// Register Swiper modules
SwiperCore.use([Autoplay]);
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "../../components/ui/WorkSliderBtns"

const projects =[
    {
      num: '01',
      title:'Evana Electricals',
      image: '/assets/project/evana.png',
      Description: "Evana Electricals is transforming agriculture and energy solutions in India with our advanced PAWAN agri-drone, offering precision spraying services for more efficient and cost-effective farming. Our DGCA-approved RPTO training equips aspiring pilots for rewarding careers, while our solar panel integration services can cut energy costs by up to 50%.",
      link: "https://evanaelectricals.com/",
      stack:[
        { link:  'https://cdn.sanity.io/images/pb7fa4md/production/493e4faa34fb971a67bc2c5d3b2bdd4942265c91-512x512.svg',name:"Html 5"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",name:"Tailwind Css"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/0a6af6143e936cedc834d2d5af35987e0e39e94e-2500x2500.svg",name:"Typescript"},
        {link: "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",name:"React"},
        {link: "https://cdn.sanity.io/images/pb7fa4md/production/7f3a652dd4e48f795856f28bd56d120bda77c30a-1024x1024.svg",name:"Next.Js"}
      
      ]
    },
    {
      num: '02',
      title:'Dipak | Portfolio',
      image: '/assets/project/portfolio.png',
      Description: "I created this portfolio to highlight my skills and projects as a software developer. Built with React and Next.js, it’s designed to be fast, responsive, and user-friendly. This project showcases my ability to create clean, intuitive interfaces while managing complex front-end development. It reflects my passion for crafting high-quality digital experiences.",
      link: "/#",
      stack:[
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/493e4faa34fb971a67bc2c5d3b2bdd4942265c91-512x512.svg",name:"Html 5"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",name:"Tailwind Css"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        {link: "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",name:"React"},
        {link: "https://cdn.sanity.io/images/pb7fa4md/production/7f3a652dd4e48f795856f28bd56d120bda77c30a-1024x1024.svg",name:"Next.Js"}
      
      ]
    },
    {
      num: '03',
      title:'Global Weather Tracker - Real-time Updates',
      image: '/assets/project/weather.png',
      Description: "This weather-checking application provides real-time updates on temperature, humidity, and wind speed across different countries and their states. Stay informed about the weather conditions in any location you choose, making it easy to plan your day or travel with confidence. Get accurate, up-to-date information at your fingertips, wherever you are.",
      link:"https://keen-gaufre-d00d90.netlify.app/",
      stack:[
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/493e4faa34fb971a67bc2c5d3b2bdd4942265c91-512x512.svg",name:"Html 5"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/d07e464f75669961f972a28d4701bf5faa6ab4fa-290x410.svg",name:"CSS 3"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
      ]
    },
    {
      num: '04',
      title:'RMC | Reality Management Software',
      image: '/assets/project/rmc.png',
      Description: "A reality management software for businesses maintaining multiple properties for rent or leasing.",
      link:"https://rmc.natureglobal.in/",
      stack:[
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/0a6af6143e936cedc834d2d5af35987e0e39e94e-2500x2500.svg",name:"Typescript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/75f0e4c6d26001d9b6c98babfa0cdf4145d4813a-164x164.svg",name:"Storybook"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",name:"Tailwind Css"},
        { link:  "/assets/resume/tanstack.png",name:"Tanstack Querry"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",name:"React"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/ac35e8ac8265763b33913f82f6894cc17ef5841a-256x140.svg",name:"React-Router"},
      ]
    },
    {
      num: '05',
      title:' AIPM - ASIA INSTITUTE OF POWER MANAGEMENT',
      image: '/assets/project/cesc.png',
      Description: "Asia Institute of Power Management (AIPM) is the Training and Consultancy wing of CESC Limited in Kolkata. AIPM offers Training and Consultancy Services.",
      link:"https://aipm.natureglobal.in/",
      stack:[
        
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",name:"Tailwind Css"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/7f3a652dd4e48f795856f28bd56d120bda77c30a-1024x1024.svg",name:"Next.Js"},
        { link:  "/assets/resume/payload.png",name:"Payload-CMS"},
        { link:  "/assets/resume/node.png",name:"Node.Js"},
      ]
    },
    {
      num: '06',
      title:'MNSR | Workforce Management System',
      image: '/assets/project/mnsr.png',
      Description: "A comprehensive solution for tracking attendance, managing manpower, and streamlining employee operations with real-time location-based login/logout, leave tracking, and salary management.",
      link:"https://mnsr.natureglobal.in/",
      stack:[
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/0a6af6143e936cedc834d2d5af35987e0e39e94e-2500x2500.svg",name:"Typescript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/75f0e4c6d26001d9b6c98babfa0cdf4145d4813a-164x164.svg",name:"Storybook"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",name:"Tailwind Css"},
        { link:  "/assets/resume/tanstack.png",name:"Tanstack Querry"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",name:"React"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/ac35e8ac8265763b33913f82f6894cc17ef5841a-256x140.svg",name:"React-Router"},
      ]
    },
    {
      num: '07',
      title:' InsightPress - Share Your Thoughts.',
      image: '/assets/project/insight-press.png',
      Description: "InsightPress is a news platform where users can search for the latest news, log in with Google, and engage in public discussions. Users can comment on articles, reply to others, and be part of a community that values open dialogue and shared perspectives.",
      link:"https://insight-press.vercel.app/",
      stack:[
        { link:  "/assets/resume/Firebase.png",name:"Firebase"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",name:"React"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/ac35e8ac8265763b33913f82f6894cc17ef5841a-256x140.svg",name:"React-Router"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",name:"Tailwind Css"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/493e4faa34fb971a67bc2c5d3b2bdd4942265c91-512x512.svg",name:"Html 5"},
     
      ]
    },
    {
      num: '08',
      title:' TextUtils - Analyze and Enhance Your Text Effortlessly',
      image: '/assets/project/textutils.png',
      Description: "TextUtils is a simple and user-friendly tool designed to help you analyze your text quickly. Get insights like word count, character count, and estimated reading time. Additionally, preview your text instantly and enable dark mode for a more comfortable reading experience.",
      link:"https://sparkling-cranachan-ff99ed.netlify.app/",
      stack:[
        
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",name:"Javascript"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/d07e464f75669961f972a28d4701bf5faa6ab4fa-290x410.svg",name:"CSS 3"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",name:"React"},
        { link:  "https://cdn.sanity.io/images/pb7fa4md/production/ac35e8ac8265763b33913f82f6894cc17ef5841a-256x140.svg",name:"React-Router"},
      ]
    }
  
  ];
const LiveProject = () => {
  const [project, setProject] = useState(projects[0]);
  
  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.6, ease: 'easeOut' } }}
      className="min-h-screen pt-16 md:pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.6 } }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } }}
            className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent px-2 xl:mt-10 md:mt-10  mt-16"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.6 } }}
            className="text-base sm:text-md md:text-lg lg:text-lg dark:text-white/70 text-black/70 max-w-7xl mx-auto px-4"
          >
            Explore my portfolio of web applications, showcasing modern technologies and innovative solutions
          </motion.p>
        </motion.div>

        {/* Project Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.3, duration: 0.8 } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start lg:items-center"
        >
          {/* Project Info */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            {/* Project Number & Title */}
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3 md:gap-4">
                <span className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-black bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent">
                  {project.num}
                </span>
                <div className="h-0.5 md:h-1 flex-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] rounded-full"></div>
              </div>
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold dark:text-white text-black leading-tight px-1">
                {project.title}
              </h2>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-black/20 backdrop-blur-sm border border-white/10 dark:border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6">
              <p className="text-sm sm:text-base md:text-base lg:text-sm dark:text-white/80 text-black/80 leading-relaxed">
                {project.Description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="space-y-3 md:space-y-4">
              <h3 className="text-base md:text-base lg:text-lg font-semibold dark:text-white text-black flex items-center gap-2">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e]"></span>
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {project.stack.map((item, index) => (
                  <TooltipProvider key={index}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="group relative bg-white dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg md:rounded-xl p-2 md:p-3 hover:border-[#22c55e]/50 dark:hover:border-[#ADFF2F]/50 transition-all duration-300 hover:scale-105">
                          <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/0 to-[#16a34a]/0 group-hover:from-[#22c55e]/5 group-hover:to-[#16a34a]/5 dark:group-hover:from-[#ADFF2F]/5 dark:group-hover:to-[#22c55e]/5 rounded-lg md:rounded-xl transition-all duration-300"></div>
                          <Image
                            width={24}
                            height={24}
                            src={item.link}
                            alt={item.name}
                            className="relative object-contain filter group-hover:brightness-110 transition-all duration-300 md:w-8 md:h-8"
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-black/80 text-white border border-[#22c55e]/30 dark:border-[#ADFF2F]/30 backdrop-blur-sm rounded-lg p-2">
                        <p className="text-xs md:text-sm font-medium">{item.name}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 md:gap-4">
              <Link href={project.link} target="_blank">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div className="group flex items-center gap-2 md:gap-3 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] text-white px-4 py-2.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3 rounded-lg md:rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#22c55e]/25 dark:hover:shadow-[#ADFF2F]/25 text-sm md:text-sm lg:text-base">
                        <span>View Live</span>
                        <BsArrowUpRight className="text-sm md:text-base lg:text-md group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-black/80 text-white border border-[#22c55e]/30 dark:border-[#ADFF2F]/30 backdrop-blur-sm rounded-lg p-2">
                      <p className="text-xs md:text-sm">Visit live website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>

          {/* Project Image Slider */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 rounded-xl md:rounded-2xl blur-2xl md:blur-3xl"></div>
            <div className="relative bg-white/10 dark:bg-black/20 backdrop-blur-sm border border-white/20 dark:border-white/10 rounded-xl md:rounded-2xl p-2 md:p-4 hover:border-[#22c55e]/30 dark:hover:border-[#ADFF2F]/30 transition-all duration-300">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="rounded-lg md:rounded-xl overflow-hidden"
                onSlideChange={handleSliderChange}
                autoplay={{ delay: 8000, disableOnInteraction: false }}
              >
                {projects.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-lg md:rounded-xl overflow-hidden group">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 z-10"></div>
                      <Image
                        src={project.image}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={project.title}
                      />
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 z-20">
                        <div className="bg-black/50 backdrop-blur-sm rounded-md md:rounded-lg p-2 md:p-3">
                          <p className="text-white text-xs md:text-sm font-medium truncate">
                            {project.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                
                <WorkSliderBtns
                  conatainStyles="absolute bottom-2 md:bottom-4 right-2 md:right-4 z-30 flex gap-1 md:gap-2"
                  btnStyles="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-[#22c55e] dark:hover:bg-[#ADFF2F] text-white hover:text-black text-sm md:text-lg w-8 h-8 md:w-10 md:h-10 flex justify-center items-center rounded-full transition-all duration-300 hover:scale-110"
                />
              </Swiper>
            </div>
          </div>
        </motion.div>

       
      </div>
    </motion.div>
  );
}

export default LiveProject;