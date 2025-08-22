"use client";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "../../components/ui/tootlip";
import { ArrowBigUp } from "lucide-react";
import { useTheme } from "../theme-provider/page";

const about = {
  title: 'Profile',
  description: '',
  icons: '/assets/resume/profile.png',
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Dipak mourya"
    },
    {
      fieldName: "Phone:",
      fieldValue: "(+91) 8910171611"
    },
    {
      fieldName: "Experience:",
      fieldValue: "2 years"
    },
    {
      fieldName: "Age:",
      fieldValue: "24+"
    },
    {
      fieldName: "Nationality:",
      fieldValue: "India"
    },
    {
      fieldName: "Email:",
      fieldValue: "dipakmourya1508@gmail.com"
    },
    {
      fieldName: "Freelance:",
      fieldValue: "Available"
    },
    {
      fieldName: "Languages:",
      fieldValue: "English, Hindi"
    }

  ]
}
const experience = {
  icons: '/assets/resume/experience.png',
  title: 'Experience',
  description: 'I am a dedicated software developer with expertise in creating dynamic, user-friendly web applications, turning ideas into seamless digital experiences.',
  items: [
    {
      company: "Nature Technology Pvt Ltd",
      position: 'Software Developer',
      duration: '2024 - present'
    },
    {
      company: "Ardent computech Pvt Ltd",
      position: 'Mern Stack Developer Intern',
      duration: 'Summer 2023'
    },

  ]
}
const education = {
  icons: '/assets/resume/education.png',
  title: 'Education',
  description: 'I am a Software Developer with a B.Tech in Computer Science & Engineering and currently pursuing an MBA in Business Analytics. I blend technical skills with a passion for learning and strategic insights. Below are my education details:',
  items: [
    {
      institution: 'Ratnakar North Point School',
      degree: 'Class 10th (ICSE)',
      duration: '2018',
      mark: '85%'
    },
    {
      institution: 'Ratnakar North Point School',
      degree: 'Class 12th (ISC)',
      duration: '2020',
      mark: '90%'
    },
    {
      institution: 'Mckv Institute Of Engineering',
      degree: 'B.Tech (Computer Science & Engineering)',
      duration: '2020 - 2024',
      mark: '9.5 CGPA'
    },
    {
      institution: 'Symbiosis International University',
      degree: 'Master of Business Administration (MBA) in Business Analytics.',
      duration: '2024-2026',
      mark: ''
    },
  ]
}
const skillsData = {
  title: 'Skills',
  icons: '/assets/resume/skills.png',
  description: 'I have a diverse skill set in web development, specializing in both frontend and backend technologies. Proficient in Java, Python, and JavaScript, as well as frameworks like React and Next.js, I build dynamic, responsive applications. My skills also include databases and UI frameworks, allowing me to create seamless user experiences and strong backend solutions.',
  skillList: [
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
      icon: "https://cdn.sanity.io/images/pb7fa4md/production/7f3a652dd4e48f795856f28bd56d120bda77c30a-1024x1024.svg",
      name: "Next.js",
    },
    {
      icon: "https://cdn.sanity.io/images/pb7fa4md/production/816b9feb802a7dd4b1b86e1907ad78ae0903f660-2370x2500.svg",
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
      icon: "https://cdn.sanity.io/images/pb7fa4md/production/db17a9669628c1c9e9bed99830aa76988aceec8a-2500x2500.svg",
      name: "Netlify",
    },
    {
      icon: "/assets/resume/github.png",
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
      icon: "/assets/resume/payload.png",
      name: "Payload-CMS",
    },
    {
      icon: "/assets/resume/node.png",
      name: "Node.Js",
    },
    {
      icon: "/assets/resume/firebase.png",
      name: "Firebase",
    },
    {
      icon: "/assets/resume/vercel.png",
      name: "Vercel",
    },
    {
      icon: "/assets/resume/express.png",
      name: "Express.js",
    },
    {
      icon: "https://cdn.sanity.io/images/pb7fa4md/production/ac35e8ac8265763b33913f82f6894cc17ef5841a-256x140.svg",
      name: "React-Router",
    },

  ]
}
const About = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: 1.0, duration: 0.6, ease: 'easeOut' } }}
      className="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } }}
            className="text-2xl md:text-2xl lg:text-3xl font-bold mb-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent mt-10"
          >
            Personal Overview
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.6 } }}
            className="text-lg md:text-lg dark:text-white/70 text-black/70 max-w-5xl mx-auto"
          >
            Discover my journey, skills, and passion for creating innovative digital solutions
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1.1, duration: 0.8 } }}
        >

          <Tabs defaultValue="education" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-2xl h-auto p-2 gap-2 bg-white dark:bg-black/20 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-white/20">
                <TabsTrigger
                  value="education"
                  className="flex-1 py-3 px-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 bg-gray-100 dark:bg-white/5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#22c55e] data-[state=active]:to-[#16a34a] dark:data-[state=active]:from-[#ADFF2F] dark:data-[state=active]:to-[#22c55e] data-[state=active]:text-black hover:bg-gray-200 dark:hover:bg-white/10"
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="experience"
                  className="flex-1 py-3 px-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 bg-gray-100 dark:bg-white/5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#22c55e] data-[state=active]:to-[#16a34a] dark:data-[state=active]:from-[#ADFF2F] dark:data-[state=active]:to-[#22c55e] data-[state=active]:text-black hover:bg-gray-200 dark:hover:bg-white/10"
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="flex-1 py-3 px-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 bg-gray-100 dark:bg-white/5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#22c55e] data-[state=active]:to-[#16a34a] dark:data-[state=active]:from-[#ADFF2F] dark:data-[state=active]:to-[#22c55e] data-[state=active]:text-black hover:bg-gray-200 dark:hover:bg-white/10"
                >
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="flex-1 py-3 px-3 text-xs sm:text-sm font-medium rounded-xl transition-all duration-300 bg-gray-100 dark:bg-white/5 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#22c55e] data-[state=active]:to-[#16a34a] dark:data-[state=active]:from-[#ADFF2F] dark:data-[state=active]:to-[#22c55e] data-[state=active]:text-black hover:bg-gray-200 dark:hover:bg-white/10"
                >
                  Profile
                </TabsTrigger>
              </TabsList>
            </div>
            <div className="w-full">
              <TabsContent className="w-full" value="experience">
                <div className="space-y-8 px-4 md:px-8 lg:px-12">
                  <div className="text-left">
                    <div className="flex items-center justify-start gap-4 mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent">
                        {experience.title}
                      </h2>
                      <div className="p-3 rounded-full bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 backdrop-blur-sm">
                        {/* Optimized: Render both images and toggle with CSS for instant switch */}
                        <span className="relative w-8 h-8 block">
                          <Image
                            src={experience.icons}
                            alt="experience icon dark"
                            width={32}
                            height={32}
                            className="object-contain dark:inline-block hidden absolute inset-0"
                            priority
                          />
                          <Image
                            src="/assets/resume/experience-light.png"
                            alt="experience icon light"
                            width={32}
                            height={32}
                            className="object-contain dark:hidden inline-block absolute inset-0"
                            priority
                          />
                        </span>
                      </div>
                    </div>
                    <p className="text-base md:text-lg dark:text-white/70 text-black/70 w-full leading-relaxed text-left">
                      {experience.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-2 md:px-4">
                    {experience.items.map((item, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10 dark:from-[#ADFF2F]/10 dark:to-[#22c55e]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#22c55e]/30 dark:hover:border-[#ADFF2F]/30 transition-all duration-300 h-full">
                          <div className="flex items-start justify-between mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] text-black/70 text-sm font-semibold rounded-full">
                              {item.duration}
                            </span>
                            {/* <ArrowBigUp className="w-5 h-5 text-[#ADFF2F] rotate-45 opacity-60" /> */}
                          </div>
                          <h3 className="text-lg md:text-xl font-semibold mb-3 text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 justify-start">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e]"></div>
                            <p className="dark:text-white/70 text-black/70 font-medium">{item.company}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent className="w-full" value="education">
                <div className="space-y-8 px-4 md:px-8 lg:px-12">
                  <div className="text-left">
                    <div className="flex items-center justify-start gap-4 mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent">
                        {education.title}
                      </h2>
                      <div className="p-3 rounded-full bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 backdrop-blur-sm">
                        {/* Optimized: Render both images and toggle with CSS for instant switch */}
                        <span className="relative w-8 h-8 block">
                          <Image
                            src={education.icons}
                            alt="education icon dark"
                            width={32}
                            height={32}
                            className="object-contain dark:inline-block hidden absolute inset-0"
                            priority
                          />
                          <Image
                            src="/assets/resume/education-light.png"
                            alt="education icon light"
                            width={32}
                            height={32}
                            className="object-contain dark:hidden inline-block absolute inset-0"
                            priority
                          />
                        </span>
                      </div>
                    </div>
                    <p className="text-base md:text-lg dark:text-white/70 text-black/70 w-full leading-relaxed text-left">
                      {education.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto px-2 md:px-4">
                    {education.items.map((item, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/10 to-[#16a34a]/10 dark:from-[#ADFF2F]/10 dark:to-[#22c55e]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <div className="relative bg-white/5 dark:bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-[#22c55e]/30 dark:hover:border-[#ADFF2F]/30 transition-all duration-300 h-full">
                          <div className="flex items-start justify-between mb-4">
                            <span className="px-3 py-1 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] text-black/70 text-sm font-semibold rounded-full">
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-base md:text-lg font-semibold mb-3 text-left leading-tight">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 justify-start">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e]"></div>
                            <p className="dark:text-white/70 text-black/70 font-medium text-sm md:text-base">
                              {item.institution}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent className="w-full h-full" value="skills">
                <div className="space-y-8 px-4 md:px-8 lg:px-12">
                  <div className="text-left">
                    <div className="flex items-center justify-start gap-4 mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent">
                        {skillsData.title}
                      </h2>
                      <div className="p-3 rounded-full bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 backdrop-blur-sm">
                        {/* Optimized: Render both images and toggle with CSS for instant switch */}
                        <span className="relative w-8 h-8 block">
                          <Image
                            src={skillsData.icons}
                            alt="skills icon dark"
                            width={32}
                            height={32}
                            className="object-contain dark:inline-block hidden absolute inset-0"
                            priority
                          />
                          <Image
                            src="/assets/resume/skills-light.png"
                            alt="skills icon light"
                            width={32}
                            height={32}
                            className="object-contain dark:hidden inline-block absolute inset-0"
                            priority
                          />
                        </span>
                      </div>
                    </div>
                    <p className="text-base md:text-lg dark:text-white/70 text-black/70 w-full leading-relaxed text-left">
                      {skillsData.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 max-w-6xl mx-auto px-2 md:px-4">
                    {skillsData.skillList.map((item, index) => (
                      <div
                        key={index}
                        className="group relative"
                      >
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="w-full">
                              <div className="relative bg-white dark:bg-black/20 backdrop-blur-sm border border-gray/20 dark:border-white/10 rounded-2xl p-4 md:p-6 hover:border-[#22c55e]/50 dark:hover:border-[#ADFF2F]/50 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-[#22c55e]/10 dark:group-hover:shadow-[#ADFF2F]/10">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/0 to-[#16a34a]/0 group-hover:from-[#22c55e]/5 group-hover:to-[#16a34a]/5 dark:group-hover:from-[#ADFF2F]/5 dark:group-hover:to-[#22c55e]/5 rounded-2xl transition-all duration-300"></div>
                                <div className="relative flex justify-center items-center">
                                  <Image
                                    width={40}
                                    height={40}
                                    src={item.icon}
                                    alt={`${item.name} icon`}
                                    className="object-contain filter group-hover:brightness-110 transition-all duration-300"
                                  />
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent className="bg-black/80 text-white border border-[#22c55e]/30 dark:border-[#ADFF2F]/30 backdrop-blur-sm">
                              <p className="capitalize font-medium">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent className="w-full text-left" value="about">
                <div className="space-y-8 px-4 md:px-8 lg:px-12">
                  <div className="text-left">
                    <div className="flex items-center justify-start gap-4 mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent">
                        {about.title}
                      </h2>
                      <div className="p-3 rounded-full bg-gradient-to-r from-[#22c55e]/20 to-[#16a34a]/20 dark:from-[#ADFF2F]/20 dark:to-[#22c55e]/20 backdrop-blur-sm">
                        {/* Optimized: Render both images and toggle with CSS for instant switch */}
                        <span className="relative w-8 h-8 block">
                          <Image
                            src={about.icons}
                            alt="profile icon dark"
                            width={32}
                            height={32}
                            className="object-contain dark:inline-block hidden absolute inset-0"
                            priority
                          />
                          <Image
                            src="/assets/resume/profile-light.png"
                            alt="profile icon light"
                            width={32}
                            height={32}
                            className="object-contain dark:hidden inline-block absolute inset-0"
                            priority
                          />
                        </span>
                      </div>
                    </div>
                    <p className="text-base md:text-lg dark:text-white/70 text-black/70 w-full leading-relaxed text-left mb-8">
                      Get to know more about me, my background, and what drives my passion for technology and innovation.
                    </p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
                      {about.info.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 py-1 md:py-2"
                        >
                          <span className="text-sm md:text-base font-medium bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent">
                            {item.fieldName}
                          </span>
                          <span className="text-sm md:text-base font-medium dark:text-white/70 text-black/70">
                            {item.fieldValue}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default About;