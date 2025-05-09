"use client";
import {motion}  from "framer-motion"
import React,{useState} from "react";
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css"
import {BsArrowUpRight} from "react-icons/bs"
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
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
const LiveProject=()=>
{
    
    const [project, setProject]=useState(projects[0]);
    const handleSliderChange=(swiper)=>
    {
      const currentIndex=swiper.activeIndex;
      setProject(projects[currentIndex]);
    }
      return (
      <motion.div initial={{opacity:0}}  animate={{opacity:1,transition:{delay:1.0,duration:0.4, ease:'easeIn'}}}  className="min-h-[80vh] flex flex-col justify-center mt-32 xl:px-0">
        <div  className=" container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[60px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-5xl leading-none font-extrabold  text-outline dark:text-white text-black/90">{project.num}</div>
                <h2 className="text-[32px] font-bold leading-none dark:text-white text-black/90 ">{project.title}</h2>
                <p className=" dark:text-white/60  text-black/90">{project.Description}</p>
                <ul className="flex gap-3">
                  <span className="dark:text-white text-black/90 font-extrabold">Tech Stack:</span>
                  {project.stack.map((item,index)=>
                  {
                    return(
                      <li key={index} className="xl:text-lg flex text-xs  text-[#ADFF2F]">
                        <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger >
                                  <div>
                                  <Image 
                                  width={30} 
                                  height={30} 
                                  src={item.link} 
                                  alt="logo" 
                                  />
                                  </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="capitalize text-sm text-black bg-white p-1 mx-1 rounded-md">{item.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
                <div className="border border-white/20 "></div>
                  <div className=" flex flex-row gap-4">
                    <span className="mt-2 font-extrabold dark:text-white text-black/90">Links:</span>
                    <Link href={project.link} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full dark:bg-white/5 bg-primary/90 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-2xl dark: dark:group-hover:text-[#ADFF2F] group-hover:text-[#22c55e] transition-all   hover:-rotate-45"/>
                        </TooltipTrigger>
                        <TooltipContent>
                         <p className="bg-white text-black">Site Link</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="w-full xl:w-[60%] min-h-[50%]">
              <Swiper spaceBetween={30}  slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSliderChange}>
                {projects.map((item,index)=>
                {
                  return(
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[430px] relative group flex justify-center items-center bg-pink-50/20">
                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/1- z-10"></div>
                          <div className="relative w-full h-full bg-[#3d4137]">
                            <Image  src={project.image} fill className="object-fill" alt="img"/>
                          </div>
                        
                      </div>
                    </SwiperSlide>
                  )
                })}
  
                <div>
                <WorkSliderBtns conatainStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="dark:bg-[#ADFF2F] bg-[#22c55e]  text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" 
                />
                
                </div>
              
              </Swiper>
            </div>
          </div>
        </div>
  
      </motion.div>
      );
}
export default LiveProject;