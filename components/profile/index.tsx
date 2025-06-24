"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "../theme-provider/page";

const Profile = () => {
      const { theme } = useTheme(); 
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
      >
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.5, ease: "easeInOut" } }}
          className="w-[298px] h-[298px] xl:w-[420px] xl:h-[420px]  absolute rounded-full overflow-hidden"
        >
          <Image
            src="/assets/profile/profile.png"
            priority
            quality={100}
            fill
            alt="Profile Image"
            className="object-cover"
          />
        </motion.div>

        {/* Circular border */}
        <motion.svg
          className="w-[300px] xl:w-[420px] h-[300px] xl:h-[425px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="272"
            stroke={theme === "dark" ? "#ADFF2F" : "#22c55e"}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Profile;
