"use client";
import { FaArrowLeft, FaHome } from "react-icons/fa"
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const PageNotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center dark:bg-primary bg-gray-100 relative overflow-hidden px-4 py-12">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-[#ADFF2F]/8 to-[#22c55e]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-l from-[#ADFF2F]/8 to-[#22c55e]/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="relative z-10 text-center max-w-lg mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.4, ease: "easeIn" } }}
      >
        
        {/* Animated SVG Illustration */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.4, ease: "easeIn" } }}
        >
          <motion.div 
            className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mx-auto mb-0 hover:scale-105 transition-transform duration-300 mt-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: [20, 0, -10, 10, -10],
              transition: { 
                opacity: { delay: 1.1, duration: 0.4 },
                y: { delay: 2.6, duration: 3, repeat: Infinity, ease: "easeInOut" }
              }
            }}
            whileHover={{ scale: 1.1 }}
          >
            <Image
              src="/assets/error/no-result.svg"
              alt="Page not found illustration"
              width={224}
              height={224}
              className="w-full h-full object-contain"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Animated 404 Text */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.4, ease: "easeIn" } }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#22c55e] to-[#ADFF2F] dark:from-[#ADFF2F] dark:to-[#79ad29] mb-3 animate-pulse">
            404
          </h1>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#22c55e] to-[#ADFF2F] mx-auto rounded-full animate-ping"></div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.4, ease: "easeIn" } }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white mb-4 text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mx-auto leading-relaxed">
            Page not found. Let&apos;s get you back on track!
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.4, ease: "easeIn" } }}
        >
          <Link href="/" className="group inline-block">
            <button className="px-8 py-4 flex items-center gap-3 bg-[#22c55e] dark:bg-gradient-to-r dark:from-[#ADFF2F] dark:to-[#22c55e] focus:bg-[#22c55e] dark:focus:bg-[#7dae34] focus:outline-none text-black/70 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:-translate-y-1">
              <FaHome className="text-lg" />
              Go Back Home
              <FaArrowLeft className="text-sm group-hover:-translate-x-1 transition-transform duration-300" />
            </button>
          </Link>
        </motion.div>

       
      </motion.div>

      
    </div>
  );
}
export default PageNotFound;