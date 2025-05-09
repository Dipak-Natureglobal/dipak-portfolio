
"use client";
import ContactForm from "../../components/form/index";
import { motion } from "framer-motion";
import ContactWEB3Form from "../form/index1";
const info = [
    {
     
      title: "Expertise in Web Development",
      description: "Crafting clean, efficient, and responsive websites.",
    },
    {
      title: "UI/UX Design",
      description: " Designing beautiful interfaces that provide an excellent user experience.",
    },
    {
      title: "Consultancy Services",
      description: " Offering strategic insights and advice to optimize your digital projects.",
    },
  ];
const HireMe =()=>
{
    return(
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.0, duration: 0.4, ease: "easeIn" } }}
        className="py-6 min-h-[80vh] mt-32"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:h-[54%] order-2 xl:order-none">
              <ContactWEB3Form
              title="Upgrade Your Idea"
              description="Hi, I'm Dipak Mourya, a passionate web developer and UI/UX designer. I specialize in crafting beautiful, user-friendly digital experiences. Let’s bring your vision to life!"
               />
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                <span className="dark:text-[#ADFF2F] text-[#22c55e] xl:text-4xl text-[28px] w-[330px]">Why Hire Me?</span>
                {info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div>
                      <p className="text-lg dark:text-white text-black/70"><span className="text-3xl my-1 dark:text-[#ADFF2F] text-[#22c55e]">.</span>{item.title}</p>
                      <h3 className="text-[14px] text-left ml-5 my-2 dark:text-white text-black/70">{item.description}</h3>
                    </div>
                  </li>
                ))}
              
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    );
}
export default HireMe;