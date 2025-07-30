import { animate, motion } from "framer-motion";
import { useTheme } from "../theme-provider/page";

const stairAnimation = {
    initial: {
        top: "0%",
        scale: 0.8,
        opacity: 0,
        rotate: 0,
    },
    animate: {
        top: "100%",
        scale: 1,
        opacity: 1,
        // rotate: [0, 5, -5, 0], // slight rotation for a wavy effect
    },
    // exit: {
    //     top: ["100%", "0%"],
    //     scale: 0.8,
    //     opacity: 0,
    //     rotate: 0,
    // },
};

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const Stairs = () => {
     const { theme } = useTheme(); 
    return (
        <>
            {[...Array(6)].map((_, index) => (
                <motion.div
                    key={index}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.6, // increased duration for a smoother effect
                        ease: "easeInOut",
                        delay: reverseIndex(index) * 0.1, // increased delay for better staggering
                    }}
                    className={`h-full w-full ${
                        theme === "dark" 
                          ? "bg-gradient-to-b from-[#ADFF2F] to-[#22c55e]" 
                          : "bg-gradient-to-b from-[#22c55e] to-[#16a34a]"
                      } relative`}
                />
            ))}
        </>
    );
};

export default Stairs;

