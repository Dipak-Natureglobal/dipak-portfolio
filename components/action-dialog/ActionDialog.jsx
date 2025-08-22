"use client";
import React from "react";
import { Briefcase } from "lucide-react";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

const timelineData = [

  {
    year: 2025,
    events: [
      {
        month: "August",
        title: "Promoted to Software Engineer (M1)",
        desc: "Promoted to Software Engineer M1. Delivered scalable solutions across multiple projects.",
      },
      {
        month: "June",
        title: "Started Freelancing",
        desc: "Started freelancing on various projects, building full-stack applications and web solutions.",
      },
    ],
  },
   {
    year: 2024,
    events: [
      {
        month: "Jan - Jul",
        title: "Software Developer Intern — Nature Technology Pvt. Ltd.",
        desc: "Worked as a Software Developer Intern. Gained hands-on experience with React and Next.js on live projects.",
      },
      {
        month: "July",
        title: "B.Tech Graduation",
        desc: "Completed B.Tech in Computer Science & Engineering with 9.3 CGPA.",
      },
      {
        month: "July",
        title: "Junior Software Developer",
        desc: "Promoted to Junior Software Developer. Contributed to production projects and improved code quality.",
      },
      {
        month: "August",
        title: "MBA — Business Analytics",
        desc: "Started MBA in Business Analytics at Symbiosis International University.",
      },
    ],
  },
    {
    year: 2023,
    events: [
      {
        month: "June",
        title: "MERN Stack Developer Intern",
        desc: "Joined Ardent Computech Pvt Ltd as a MERN Stack Developer Intern. Learned React, Next.js, and built scalable websites. Explored React TypeScript and modern frontend practices.",
      },
    ],
  },
 
];

export default function ActionDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] dark:text-black/70 text-white font-bold">
          Timeline  <Briefcase className="w-5 h-5  mx-3" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xl w-[90vw] sm:w-full h-[85vh] sm:h-[85vh] p-0 overflow-hidden bg-white dark:bg-[#1c1c22] border border-[#22c55e]/20 dark:border-[#ADFF2F]/20 mx-auto my-4 sm:my-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white dark:bg-[#1c1c22] border-b border-[#22c55e]/20 dark:border-[#ADFF2F]/20 p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-black/70 dark:text-white text-lg sm:text-xl font-bold text-left">
              Professional Timeline
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400 text-sm text-left">
              My career progress overview — a journey of growth and achievements.
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Scrollable Timeline Content */}
        <ScrollArea className="flex-1 h-[calc(85vh-140px)]">
          <div className="relative p-4 sm:p-6">
            {/* Main Timeline Container */}
            <div className="relative pl-16 sm:pl-24">
              {/* Central Timeline Line */}
              <div className="absolute left-12 sm:left-16 top-0 bottom-0 w-0.5 bg-[#22c55e] dark:bg-[#ADFF2F]"></div>
              
              {/* Timeline Items */}
              <div className="space-y-6 sm:space-y-8">
                {timelineData.map((yearBlock, idx) => (
                  <div key={idx} className="relative">
                    {/* Year - positioned to the left of the line with gap */}
                    <div className="relative mb-4 sm:mb-6">
                      <div className="absolute -left-[4rem] sm:-left-[6rem] top-0">
                        <span className="text-sm sm:text-lg font-bold text-[#22c55e] dark:text-[#ADFF2F]">
                          {yearBlock.year}
                        </span>
                      </div>
                    </div>

                    {/* Events for this year */}
                    <div className="space-y-4 sm:space-y-5">
                      {yearBlock.events.map((event, i) => (
                        <div key={i} className="relative">
                          {/* Event content */}
                          <div className="pl-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-medium text-gray-500 dark:text-gray-400  tracking-wide">
                                {event.month}
                              </span>
                            </div>
                            
                            <h3 className="text-sm sm:text-base font-semibold text-black/70 dark:text-white/70 mb-2">
                              {event.title}
                            </h3>
                            
                            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                              {event.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Footer Close Button */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-[#22c55e]/20 dark:border-[#ADFF2F]/20">
              <div className="flex justify-end">
                <DialogClose asChild>
                  <Button className="bg-gradient-to-r from-[#22c55e] to-[#16a34a] dark:from-[#ADFF2F] dark:to-[#22c55e] text-white dark:text-black font-bold px-4 sm:px-6 py-2 text-sm sm:text-base hover:opacity-90 transition-opacity">
                    Close
                  </Button>
                </DialogClose>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
