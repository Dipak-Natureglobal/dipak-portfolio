"use client";
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { title } from "process";
import { Description } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";



const service = [
  {
    num: '01',
    title: 'Web Application Architecture',
    description: "Building scalable and maintainable web application architectures with a focus on performance, security, and modularity. Utilizing best practices in software architecture and design patterns.",
    href: '/contact'
  },
  {
    num: '02',
    title: 'Frontend Development',
    description: "Specializing in creating responsive, high-performance web applications using modern JavaScript frameworks such as React and Next.js. Focused on delivering seamless user experiences.",
    href: '/contact'
  },
  {
    num: '03',
    title: 'Backend Development',
    description: "Building scalable backends with Node.js and Express. Skilled in RESTful API design, database management, authentication, and secure, efficient server operations.",
    href: '/contact'
  },
  {
    num: '04',
    title: 'UI/UX Design',
    description: "Designing intuitive, user-centered interfaces that focus on both aesthetics and functionality. Expertise in creating clean, accessible, and scalable designs.",
    href: '/contact'
  },

  {
    num: '05',
    title: 'Custom Component Development',
    description: "Developing reusable, scalable UI components that align with your brand's design system, speeding up future development processes and ensuring a consistent user experience.",
    href: '/contact'
  },
  {
    num: '06',
    title: 'Server & Deployment Management',
    description: "Managing server infrastructure, deployments, domain setup, and SSL. Experienced with AWS, using S3 for storage and EC2 for scalable hosting.",
    href: '/contact'
  }
  
 
];


const services = () => {
  return (
    <section className="xl:mt-36 mt-24 min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2  gap-[60px]">
          {service.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex-col  justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extralight text-outline  transition-all duration-500 text-black/70 dark:text-white">
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className="xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] rounded-full 
                  bg-black/70 text-black/70 dark:bg-white
                  group-hover:bg-[#22c55e] dark:group-hover:bg-[#ADFF2F] 
                    transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="dark:text-primary  text-white text-3xl" />
                  </Link>
                </div>

                <h2 className="mb-5 mt-5  text-[32px] font-bold leading-none dark:text-white text-black/70 dark:group-hover:text-[#ADFF2F] group-hover:text-[#22c55e] transition-all duration-500">{item.title}</h2>
                <p className="mb-5 dark:text-white/60 text-black/70">{item.description}</p>
                <div className="border-b dark:border-white/20 border-black/90 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default services;