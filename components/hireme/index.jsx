"use client";
import ContactForm from "../../components/form/index";
import { motion } from "framer-motion";
import ContactWEB3Form from "../form/index1";

const info = [
  {
    icon: "💻",
    title: "Full-Stack Development",
    description: "Building scalable web applications with modern technologies like React, Next.js, Node.js, and databases.",
    highlight: "2+ Years Experience"
  },
  {
    icon: "🎨",
    title: "UI/UX Design Excellence",
    description: "Creating intuitive and visually stunning interfaces that enhance user engagement and conversion rates.",
    highlight: "10+ Projects Delivered"
  },
  {
    icon: "🚀",
    title: "Performance Optimization",
    description: "Ensuring your applications load fast, rank well in search engines, and provide seamless user experiences.",
    highlight: "98% Client Satisfaction"
  },
  
];

const benefits = [
  {
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality"
  },
  {
    title: "24/7 Support",
    description: "Available for urgent fixes and consultations"
  },
  {
    title: "Modern Tech Stack",
    description: "Using latest technologies for future-proof solutions"
  },
  {
    title: "SEO Optimized",
    description: "Built with search engine optimization in mind"
  }
];

const HireMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" } }}
      className="py-12 min-h-screen"
    >
      <div className="container mx-auto px-4 xl:mt-16 mt-20 max-w-full overflow-hidden">
        {/* Hero Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.8, duration: 0.6 } }}
          className="text-center mb-12 xl:mb-16 max-w-full"
        >
          <h1 className="text-2xl xl:text-3xl font-bold mb-6 break-words">
            <span className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] bg-clip-text text-transparent ">
              Let&apos;s Build Something
            </span>
            <br />
            <span className="dark:text-white text-black/70">Amazing Together</span>
          </h1>
          <p className="text-base xl:text-xl dark:text-gray-300 text-gray-600 max-w-full xl:max-w-5xl mx-auto leading-relaxed px-2">
            Transform your digital vision into reality with a passionate developer who delivers
            exceptional results. Ready to take your project to the next level?
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid xl:grid-cols-2 gap-6 xl:gap-12 items-start max-w-full overflow-hidden">

          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1.0, duration: 0.6 } }}
            className="order-2 xl:order-1 w-full min-w-0"
          >
            <ContactWEB3Form
              title="Start Your Project"
              description="Ready to bring your ideas to life? Let's discuss your project requirements and create something extraordinary together!"
            />
          </motion.div>

          {/* Right Side - Why Choose Me */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1.2, duration: 0.6 } }}
            className="order-1 xl:order-2 w-full min-w-0"
          >
            <div className="xl:sticky xl:top-8">
              <h2 className="text-2xl xl:text-4xl font-bold mb-6 xl:mb-8 dark:text-white text-black/70">
                Why Choose
                <span className="dark:text-[#ADFF2F] text-[#22c55e]"> Me?</span>
              </h2>

              {/* Skills Grid */}
              <div className="space-y-4 xl:space-y-6 mb-8 xl:mb-12">
                {info.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, transition: { delay: 1.4 + index * 0.1, duration: 0.5 } }}
                    className="group p-4 xl:p-6 rounded-2xl dark:bg-[#27272c] bg-white shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-gray-700 border-gray-200 hover:scale-105 w-full"
                  >
                    <div className="flex items-start gap-3 xl:gap-4 w-full">
                      <div className="text-2xl xl:text-3xl mb-2 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                          <h3 className="text-lg xl:text-xl font-semibold dark:text-white text-gray-900 break-words">
                            {item.title}
                          </h3>
                          <span className="text-xs px-2 xl:px-3 py-1 rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] text-black/70 font-medium flex-shrink-0 self-start">
                            {item.highlight}
                          </span>
                        </div>
                        <p className="dark:text-gray-300 text-gray-600 text-sm leading-relaxed break-words">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full Width Benefits Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 1.8, duration: 0.6 } }}
          className="mt-20 w-full"
        >
          <div className="dark:bg-[#27272c] bg-gray-50 rounded-2xl p-8 xl:p-12 border dark:border-gray-700 border-gray-200">
            <h3 className="text-3xl xl:text-4xl font-bold mb-12 dark:text-white text-black/70 text-center">
              What You Get When You Work With Me
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1, transition: { delay: 2.0 + index * 0.1, duration: 0.4 } }}
                  className="group text-center p-6 rounded-2xl dark:bg-[#1a1a1f] bg-white shadow-lg hover:shadow-xl transition-all duration-300 border dark:border-gray-600 border-gray-200 hover:scale-105"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>
                  <h4 className="font-bold text-lg dark:text-[#ADFF2F] text-[#22c55e] mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-sm dark:text-gray-300 text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Full Width Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 2.4, duration: 0.6 } }}
          className="mt-16 w-full"
        >

        </motion.div>
      </div>
    </motion.section>
  );
}

export default HireMe;
