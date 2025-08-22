"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Navbar from "../navbar/index-desktop";
import MobileNavbar from "../navbar/index-mobile";
import Image from "next/image";
import { useTheme } from "../theme-provider/page";
import { MoonStar, Sun } from "lucide-react";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`fixed w-full z-40 top-0 left-0 py-4 xl:py-4 shadow-lg transition-all duration-300 
            ${isScrolled
                    ? "bg-white/90 text-black dark:bg-primary/80 dark:text-white/80 backdrop-blur-md"
                    : "bg-white text-black dark:bg-primary dark:text-white"
                }`}

        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}

                <Link href="/">
                    {/* Optimized: Render both logo images and toggle with CSS for instant switch */}
                    <span className="relative w-[60px] h-[60px] block ">
                        <Image
                            src="/assets/profile/logo.png"
                            alt="logo dark"
                            width={60}
                            height={60}
                            className="hidden dark:inline-block absolute inset-0 mt-3"
                            priority
                        />
                        <Image
                            src="/assets/profile/light-logo.png"
                            alt="logo light"
                            width={60}
                            height={60}
                            className="inline-block dark:hidden absolute inset-0 mt-3"
                            priority
                        />
                    </span>
                </Link>



                {/* Desktop Navbar and Hire me button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar />
                    <Link href="/hireme">
                        <Button className="relative rounded-md bg-black/70 hover:bg-black/80 text-white dark:text-black dark:bg-[#e7e7e7] dark:hover:bg-white/60 hover:text-white flex items-center">
                            Hire Me
                            <span
                                className="absolute -right-1 -top-1 z-[1] h-2.5 w-2.5 rounded-full 
                                bg-[#22c55e] dark:bg-[#ADFF2F]
                                before:absolute before:-right-0.5 before:-top-0.5 before:-z-10 
                                before:inline-flex before:h-3 before:w-3 before:animate-ping 
                                before:rounded-full before:bg-[#22c55e] dark:before:bg-[#ADFF2F] 
                                before:opacity-75 before:content-['']"
                            />
                        </Button>
                    </Link>
                </div>


                {/* Mobile Navbar */}
                <div className="xl:hidden flex gap-6 items-center">
                    <button
                        onClick={toggleTheme}
                        className={`ml-4 p-2 transition ${theme === "light"
                                ? "rounded-[50px] border border-black/70 hover:bg-gray-200"
                                : "rounded-full dark:hover:bg-gray-700 border border-white"
                            }`}
                    >
                        {theme === "light" ? (
                            <MoonStar size={20} className="hover:text-[#22c55e] transition-colors" />
                        ) : (
                            <Sun size={20} className="hover:text-[#ADFF2F] transition-colors" />
                        )}
                    </button>

                    <MobileNavbar />
                </div>
            </div>
        </header>
    );
};

export default Header;
