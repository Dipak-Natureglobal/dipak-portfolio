"use client";
import Link from "next/link";
import { MoonStar, Sun } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "../theme-provider/page";
const links = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About Me",
    path: "/about"
  },
  {
    name: "Projects",
    path: "/projects"
  },
  {
    name: "Services",
    path: "/services"
  },
  {
    name: "Posts",
    path: "/posts"
  },
  {
    name: "Contact",
    path: "/contact"
  }
]
const Navbar = () => {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className="flex gap-8" >
      {links.map((link, index) => {
        return <Link
          href={link.path}
          key={index}
          className={`${link.path === pathname ? "dark:text-[#ADFF2F] text-[#22c55e] border-b-2 dark:border-[#ADFF2F] border-[#22c55e]" : "text-black/70 dark:text-white"} capitalize font-medium hover:text-[#22c55e] dark:hover:text-[#ADFF2F] transition-all`}
        >
          {link.name}
        </Link>
      })}
      <button
        onClick={toggleTheme}
        className={`ml-4 p-2 transition ${theme === "light"
          ? "rounded-[50px] border border-black/70 hover:bg-gray-200"
          : "rounded-full dark:hover:bg-gray-700 border border-white"
          }`}
      >
        {theme === "light" ? (
          <MoonStar size={20} />
        ) : (
          <Sun size={20} />
        )}
      </button>
    </nav>

  );
};

export default Navbar;
