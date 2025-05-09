"use client";
import { Sheet,SheetClose,SheetContent,SheetTrigger} from '../ui/sheet'
import {usePathname} from "next/navigation"
import Link from 'next/link';
import { CiMenuFries} from "react-icons/ci"
import path from 'path';
import Image from 'next/image';
import { MoonStar, Sun } from "lucide-react"; 
import { useTheme } from '../theme-provider/page';
const links=[
    {
        name: "Home",
        path:"/"
    },
    {
        name: "About Me",
        path:"/about"
    },
    {
        name: "Projects",
        path:"/projects"
    },
    {
        name: "Services",
         path:"/services"
     },
    {
        name: "Contact",
        path:"/contact"
    },
    {
        name: "Hire Me",
        path:"/hireme"
    }
]
const MobileNavbar = ()=>
{
    const pathname=usePathname();
    const { theme, toggleTheme } = useTheme(); 
return (
    <>
    <Sheet >
        <SheetTrigger className='flex justify-center items-center'>
            <CiMenuFries className="text-[32px] dark:text-[#ADFF2F] text-[#22c55e]"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <SheetClose asChild>
                <Link href="/">
                    <Image
                    src={theme === "dark" ? "/assets/profile/logo.png" : "/assets/profile/light-logo.png"}                   
                    alt="logo"
                    width={50}
                    height={50}
                    className="w-14  mb-36 block"
                    />
                </Link>
            </SheetClose>
            <nav className='flex flex-col justify-center items-center gap-8'>
                 {links.map((link, index) => {
                    return (
                        <SheetClose asChild key={index}>
                          <Link
                            href={link.path}
                            className={`${link.path === pathname && "dark:text-[#ADFF2F] text-[#22c55e] border-b-2 dark:border-[#ADFF2F] border-[#22c55e]"} text-xl capitalize dark:hover:text-[#ADFF2F] hover:text-[#22c55e] transition-all text-black/70 dark:text-slate-50`}
                          >
                            {link.name}
                          </Link>
                        </SheetClose>
                      );
                })}
        </nav>
        <button
          onClick={toggleTheme}
          className="mt-10 self-center p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {theme === "light" ? (
            <MoonStar size={24} />
          ) : (
            <Sun size={24} />
          )}
        </button>
        </SheetContent>
    </Sheet>
    </>
)
};
export default MobileNavbar;