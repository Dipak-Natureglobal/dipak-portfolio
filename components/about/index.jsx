"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs ,TabsContent,TabsList,TabsTrigger } from "../../components/ui/tabs";
import {Tooltip,TooltipContent,TooltipTrigger,TooltipProvider} from "../../components/ui/tootlip";
import { ArrowBigUp } from "lucide-react";
import { useTheme } from "../theme-provider/page";

const about={
    title:'Profile',
    description: '',
    icons:'/assets/resume/profile.png',
    info:[
      {
        fieldName:"Name:",
        fieldValue: "Dipak mourya"
      },
      {
        fieldName:"Phone:",
        fieldValue: "(+91) 8910171611"
      },
      {
        fieldName:"Experience:",
        fieldValue: "2 years"
      },
      {
        fieldName:"Age:",
        fieldValue: "24+"
      },
      {
        fieldName:"Nationality:",
        fieldValue: "India"
      },
      {
        fieldName:"Email:",
        fieldValue: "dipakmourya1508@gmail.com"
      },
      {
        fieldName:"Freelance:",
        fieldValue: "Available"
      },
      {
        fieldName:"Languages:",
        fieldValue: "English, Hindi"
      }
  
    ]
  }
  const experience={
    icons:'/assets/resume/experience.png',
    title : 'Experience',
    description: 'I am a dedicated software developer with expertise in creating dynamic, user-friendly web applications, turning ideas into seamless digital experiences.',
    items:[
      {
        company:"Nature Technology Pvt Ltd",
        position: 'Software Developer',
        duration: '2024 - present'
      },
      {
        company:"Ardent computech Pvt Ltd",
        position: 'Mern Stack Developer Intern',
        duration: 'Summer 2023'
      },
     
    ]
  }
  const education={
    icons:'/assets/resume/education.png',
    title : 'Education',
    description: 'I am a Software Developer with a B.Tech in Computer Science & Engineering and currently pursuing an MBA in Business Analytics. I blend technical skills with a passion for learning and strategic insights. Below are my education details:',
    items:[
      {
      institution:'Ratnakar North Point School',
      degree: 'Class 10th (ICSE)',
      duration:'2018',
      mark:'85%'  
     },
     {
      institution:'Ratnakar North Point School',
      degree: 'Class 12th (ISC)',
      duration:'2020',  
      mark:'90%'
     },
     {
      institution:'Mckv Institute Of Engineering',
      degree: 'B.Tech (Computer Science & Engineering)',
      duration:'2020 - 2024' , 
      mark: '9.5 CGPA'
     },
     {
      institution:'Symbiosis International University',
      degree: 'Master of Business Administration (MBA) in Business Analytics.',
      duration:'2024-2026' ,
      mark: '' 
     },
    ]
  }
  const skillsData={
    title: 'Skills',
    icons:'/assets/resume/skills.png',
    description:'I have a diverse skill set in web development, specializing in both frontend and backend technologies. Proficient in Java, Python, and JavaScript, as well as frameworks like React and Next.js, I build dynamic, responsive applications. My skills also include databases and UI frameworks, allowing me to create seamless user experiences and strong backend solutions.',
    skillList:[
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/1cfbdcdcf50b380a26aa66e4396d3c687f4f27cd-2500x2500.svg",
        name: "Java",
      },
      {
        icon: "/assets/resume/c.png",
        name: "C-Programming",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/478817fc8ee5e0d567662ce75aa68569ceb83d4a-2500x2490.svg",
        name: "Python",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/1bbed647da42a36c0c433d2bfd28a558c76d67ee-2500x1992.svg",
        name: "Bootstrap",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/493e4faa34fb971a67bc2c5d3b2bdd4942265c91-512x512.svg",
        name: "Html 5",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/d07e464f75669961f972a28d4701bf5faa6ab4fa-290x410.svg",
        name: "CSS 3",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/b80d217fdba8863bedeccfaddea56368ddd333df-2500x2500.svg",
        name: "javascript",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/0a6af6143e936cedc834d2d5af35987e0e39e94e-2500x2500.svg",
        name: "Typescript",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/8e7b4b2f439239de418e1bc12e0010c93f6e8985-842x595.svg",
        name: "React.js",
      },
      {
        icon:"https://cdn.sanity.io/images/pb7fa4md/production/7f3a652dd4e48f795856f28bd56d120bda77c30a-1024x1024.svg",
        name: "Next.js",
      },
      {
        icon:"https://cdn.sanity.io/images/pb7fa4md/production/816b9feb802a7dd4b1b86e1907ad78ae0903f660-2370x2500.svg",
        name: "Angular",
      },
      {
        icon: "/assets/resume/tanstack.png",
         name: "Tanstackquerry",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/1b272f2930c008c5426d4cccabca34da64207f8e-2500x1504.svg",
        name: "Tailwind.css",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/ed70e6570f698e85d792d57095cacfcd07d9c6c3-2500x2461.svg",
        name: "My Structured Query Language(MySQL)",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/f84c6a8e126fdd6298ca02b0c184f4a0cc6185d8-2424x2500.svg",
        name: "Postgres Structured Query Language(PostgreSQL)",
      },
      {
        icon:"https://cdn.sanity.io/images/pb7fa4md/production/db17a9669628c1c9e9bed99830aa76988aceec8a-2500x2500.svg",
        name: "Netlify",
      },
      {
        icon:"/assets/resume/github.png",
        name: "GitHub",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/75f0e4c6d26001d9b6c98babfa0cdf4145d4813a-164x164.svg",
        name: "StoryBook",
      },
      {
        icon: "https://cdn.sanity.io/images/pb7fa4md/production/0f07011577a35582d872b6903fc3cf5defd2f8d2-92x92.svg",
        name: "Git",
      },
      {
        icon: "/assets/resume/docker.png",
        name: "Docker",
      },
      {
        icon:"https://cdn.sanity.io/images/pb7fa4md/production/ac35e8ac8265763b33913f82f6894cc17ef5841a-256x140.svg",
        name: "React-Router",
      },
      {
        icon:"/assets/resume/payload.png",
        name: "Payload-CMS",
      },
      {
        icon:"/assets/resume/node.png",
        name: "Node.Js",
      },
      {
        icon:"/assets/resume/firebase.png",
        name: "Firebase",
      },
      {
        icon:"/assets/resume/vercel.png",
        name: "Vercel",
      },
      {
        icon:"/assets/resume/express.png",
        name: "Express.js",
      },
      
       ]
  }
const About=()=>
  
{
  const { theme } = useTheme();

    return(
        <motion.div initial={{opacity:0}}
         animate={{opacity:1,transition:{delay:1,duration:0.4, ease:'easeIn'}}} 
        className="min-h-[80vh] xl:mt-40  mt-20 flex items-center justify-center
         py-12 xl:py-0" >
          <div className="container mx-auto">
            <Tabs defaultValue="education" className="flex flex-col xl:flex-row gap-[60px]">
              <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 my-2">
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="experience">Work Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">Get to Know Me</TabsTrigger>
              </TabsList>
              <div className="min-h-[50vh] mt-6 w-full">
                <TabsContent className="w-full " value="experience">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  
                  
                    <h3 className="text-4xl  font-bold flex flex-row gap-3">{experience.title}
                    <Image
                     src={theme === "dark" ? experience.icons : "/assets/resume/experience-light.png"}
                    alt="logo"
                    width={40}
                    height={40}
                    className=" block"
                    />
                    
                    </h3>
                    <p className="xl:min-w-[600px] min-w-[300px] dark:dark:text-white/60  text-black/70 mx-auto xl:mx-0 text-left">{experience.description}</p>
                    <ScrollArea className="h-[400px] overflow-auto">
                      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                        {experience.items.map((item,index)=>
                        {
                          return(
                            <li key={index} className="dark:bg-[#232329] bg-white h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                              <span className="dark:text-[#ADFF2F] text-[#22c55e] font-bold">{item.duration}</span>
                            <h3 className="text-[15px] max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              <span className="w-[6px] h-[6px] rounded-full dark:bg-[#ADFF2F] bg-[#22c55e]"></span>
                              <p className="dark:dark:text-white/60  text-black/70">{item.company}</p>
                            </div>
                            </li>
                          );
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent className="w-full " value="education">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  
                  
                  <h3 className="text-4xl font-bold flex flex-row gap-3">{education.title}
                  <Image
                  src={theme === "dark" ? education.icons : "/assets/resume/education-light.png"}
                  alt="logo"
                  width={40}
                  height={40}
                  className=" block"
                  />
                  
                  </h3>
                  <p className="xl:min-w-[600px] min-w-[300px] dark:text-white/60 text-black/70 mx-auto xl:mx-0 text-left">{education.description}</p>
                  <ScrollArea className="h-[400px] overflow-auto">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item,index)=>
                      {
                        return(
                          <li key={index} className="dark:bg-[#232329] bg-white h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                            <span className="dark:text-[#ADFF2F] text-[#22c55e] font-bold">{item.duration}</span>
                          <h3 className="text-[13.5px] max-w-[300px] min-h-[70px] text-center lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full dark:bg-[#ADFF2F] bg-[#22c55e]"></span>
                            <p className="dark:text-white/60 text-black/70">{item.institution}</p>
                          </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>

                </TabsContent>

                <TabsContent className="w-full  h-full" value="skills">
                <div className="flex flex-col gap-[30px]">
                  <div className=" flex flex-col gap-[30px]">
                    <h3 className="text-4xl  flex flex-row gap-3 text-center xl:text-left">{skillsData.title}
                    <Image
                    src={theme === "dark" ? skillsData.icons : "/assets/resume/skills-light.png"}
                    alt="logo"
                    width={45}
                    height={45}
                    className=" block"
                    />
                    </h3>
                    <p className="dark:text-white/60 text-black/70">{skillsData.description}</p>
                  </div>
                  {/* <ScrollArea className="h-[400px] overflow-auto"> */}
                  <ul className="grid justify-center items-center xl:grid-cols-4 grid-cols-3 mx-10 xl:gap-[30px] gap-[50px]">
                    {skillsData.skillList.map((item,index)=>
                    {
                      return(
                        <li key={index} className="text-4xl xl:ml-0 sm:ml-0 md:ml-12">
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger className="w-[80px] h-[70px] dark:bg-[#232329] bg-white rounded-xl flex justify-center items-center group">
                                <div>
                                <Image 
                                width={40} 
                                height={40} 
                                src={item.icon} 
                                alt="logo" 
                                />
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="dark:bg-slate/50 dark:text-black/70 " >
                                <p className="capitalize">{item.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        
                        </li>
                      )
                    })}
                  </ul>
                  {/* </ScrollArea> */}
                </div>
                </TabsContent>

                <TabsContent className="w-full text-center xl:text-left " value="about">
                  <div className="flex flex-col gap-[30px]">
                    <h3 className="text-4xl flex flex-row font-bold gap-3">{about.title}
                    <Image
                       src={theme === "dark" ? about.icons : "/assets/resume/profile-light.png"}
                
                    alt="logo"
                    width={45}
                    height={45}
                    className=" block"
                    />
                    </h3>
                    <p className="maxw[600px] dark:text-white/60 text-black/70 mx-auto xl:mx-0">{about.description}</p>
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">{about.info.map((item,index)=>
                    {
                      return(
                        <li className="flex items-start justify-start xl:justify-start gap-4 " key={index}>
                          <span className="dark:text-[#ADFF2F] text-[#22c55e] font-bold">{item.fieldName}</span>
                          <span className="xl:text-xl lg:text-xl md:text-xl text-lg ">{item.fieldValue}</span>
                        </li>
                      );
                    })}</ul>
                  </div>
                   
                  
                </TabsContent>
                
              </div>
            </Tabs>
          </div>

        </motion.div>
      );
   

}
export default About;