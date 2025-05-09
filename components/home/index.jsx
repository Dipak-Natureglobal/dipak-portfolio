"use client";
import RoleSwitcher from "../textswitcher/index"
import Link from "next/link";
import { Button } from "../../components/ui/button";
import {FiDownload} from "react-icons/fi"
import Social from "../../components/social/index"
import Profile from "../../components/profile/index";
import Image from "next/image";
import Stats from "../../components/stats/page";
const HomePage=()=>
{
    return (
        <section className="min-h-[80vh] xl:my-28 mt-36 ">
          <div className="container mx-auto h-full">
            <div className=" flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center  xl:text-left order-2 xl:order-none">
                {/* <span className="text-xl">Software Developer</span> */}
                <h1 className="h1 mb-6 text-left xl:ml-0 ml-4 dark:text-white text-black/70">
                  Hello  I&#39;m
                  <br />
                  <span className="dark:text-[#ADFF2F] text-[#22c55e] xl:text-7xl lg:text-7xl  md:text-6xl text-[2.5rem]">Dipak Mourya</span>
                </h1>
                <p className="max-w-[550px] mb-2 dark:text-white/80 text-black/70 text-left xl:ml-0 ml-5">  I&#39;m a passionate <span><RoleSwitcher/> </span>
                </p >
                <p className="max-w-[550px] mb-9 dark:text-white/80 text-black/70  text-left xl:ml-0 ml-4  ">With expertise in web technologies, I specialize in building responsive web experiences with a focus on intuitive design that enhances user satisfaction and drives business value.</p>
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 dark:border-[#ADFF2F] border-[#22c55e] rounded-full  justify-center  dark:text-[#ADFF2F] hover:dark:text-black/70 text-[#22c55e] text-base dark:hover:bg-[#ADFF2F] hover:bg-[#22c55e] hover:text-primary hover:transition-all duration-500">
                    <a href="/assets/resume/dipak.pdf" download="Dipak Mourya CV.pdf" className="flex items-center gap-2">
                      <span className="font-extrabold">Download CV</span>
                      <FiDownload className="text-xl" />
                    </a>
                  </Button>
                  <div className="mb-8 xl:mb-0 ">
                    <Social containerStyles="flex gap-6" iconStyles="  w-10 h-10 border dark:border-[#ADFF2F] border-[#22c55e] rounded-full flex justify-center items-center dark:text-[#ADFF2F] text-[#22c55e] text-base hover:dark:text-black/70 dark:hover:bg-[#ADFF2F] hover:bg-[#22c55e] hover:text-primary hover:transition-all duration-500"/>
                  </div>
                </div>
              </div>
              {/* <div className="order-1 xl:order-none mb-8 xl:mb-0"><Profile/></div> */}
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Image 
                width={400} 
                height={400} 
                src="/assets/profile/homeprofile.png"
                alt="logo" 
              />
              <div className="container mx-auto   justify-center items-center xl:flex hidden flex-col  ">
              <svg
                className="animate-bounce w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                className="dark:text-[#ADFF2F] text-[#22c55e] font-extrabold"/>
                </svg>
                <span className="dark:text-white/60 text-black/70">Scroll Down</span>
              </div>
         
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center xl:ml-0 md:ml-16 ml-8"><Stats /></div>
          <div className="container mx-auto mt-8 flex justify-center items-center  flex-col  xl:hidden">
            <svg
            className="animate-bounce w-6 h-6 "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
            className="dark:text-[#ADFF2F] text-[#22c55e] font-extrabold"/>
            </svg>
            <span className="dark:text-white/60 text-black/70">Scroll Down</span>
          </div>
         
          <div className="container mx-auto h-full mt-14 xl:24">
            <div className=" flex flex-col  xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
              <div className="text-center  xl:text-left order-2 xl:order-none">
                <p className="max-w-[610px] mb-6 dark:text-white/80 text-black/70 text-left xl:ml-0 ml-4">
                Hi, I am Dipak Mourya, a passionate Software Developer with over a year of experience in real-time projects. I continuously evolve my skills and embrace new technologies. With a degree in Computer Science Engineering, I enhance my efficiency in software development. Currently, I’m pursuing an <span className="dark:text-[#ADFF2F] text-[#22c55e] font-bold"> Master of Business Administration (MBA)</span> in Business Analytics, merging my technical expertise with business insight for impactful results.
                </p>
                <Link href='/about' className="xl:flex hidden">
                    <Button className="dark:bg-[#ADFF2F] bg-[#22c55e] hover:bg-[#2bb35d] text-black/70  dark:hover:bg-[#ADFF2F] font-bold gap-2">
              
                     <span className="hover:pr-3 duration-500 flex">Discover More</span>
                      <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                      </svg>
                    </Button>
                  </Link>
                <div className=" flex flex-row gap-3 items-center justify-center xl:hidden">
                  <Link href='/about'>
                    <Button className="dark:bg-[#ADFF2F] bg-[#22c55e] text-black/70  dark:hover:bg-[#ADFF2F] hover:bg-[#2bb35d] font-bold gap-2">
              
                     <span className="hover:pr-3 duration-500 flex">Discover More</span>
                      <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                      </svg>
                    </Button>
                  </Link>
                  <Link href='/hireme'>
                    <Button className="dark:bg-[#ADFF2F] bg-[#22c55e] text-black/70  dark:hover:bg-[#ADFF2F] hover:bg-[#2bb35d] font-bold gap-2 ">
                      <span className="hover:pr-3 duration-500 flex">Hire Me</span>
                      <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                      </svg>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="order-1 xl:order-none xl:mt-16 mb-8 xl:mb-0"><Profile/></div>
             
            </div>
          </div>
        </section>
      );
}
export default HomePage;