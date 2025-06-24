"use client"
import * as React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code, Palette, Server, Globe, Layers, Shield } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const services = [
  {
    id: '01',
    title: 'Web Application Architecture',
    description: "Building scalable and maintainable web application architectures with focus on performance, security, and modularity using best practices.",
    icon: Globe,
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1
  },
  {
    id: '02',
    title: 'Frontend Development',
    description: "Creating responsive, high-performance web applications using modern frameworks like React and Vue.js for seamless user experiences.",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2
  },
  {
    id: '03',
    title: 'Backend Development',
    description: "Building robust backends with Node.js, API design, database management, and secure server operations for scalable applications.",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3
  },
  {
    id: '04',
    title: 'UI/UX Design',
    description: "Designing intuitive, user-centered interfaces that focus on aesthetics, functionality, and creating exceptional user experiences.",
    icon: Palette,
    gradient: "from-orange-500 to-red-500",
    delay: 0.4
  },
  {
    id: '05',
    title: 'Custom Component Development',
    description: "Developing reusable, scalable UI components aligned with your brand's design system for consistent user experiences.",
    icon: Layers,
    gradient: "from-indigo-500 to-purple-500",
    delay: 0.5
  },
  {
    id: '06',
    title: 'Server & Deployment Management',
    description: "Managing infrastructure, deployments, domain setup, and SSL. Experienced with AWS, S3 storage and EC2 hosting solutions.",
    icon: Shield,
    gradient: "from-teal-500 to-cyan-500",
    delay: 0.6
  }
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      
      transition={{
        duration: 0.9,
        delay: 0.9,
        ease: "easeOut"
      }}
      whileHover={{ y: -10 }}
      className="group h-full"
    >
      <Card className="h-full bg-white dark:bg-[#27272c] backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        <CardContent className="p-8 h-full flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <span className="text-5xl font-light text-black/70 dark:text-white/70 transition-colors duration-300">
              {service.id}
            </span>
            <div className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 text-black/70 dark:text-white transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed flex-1">
              {service.description}
            </p>

            <div className="mt-auto">
              <a
                href="/contact"
                className="group/btn w-full flex justify-between p-4 hover:bg-gradient-to-r hover:from-purple-50 hover:to-cyan-50 dark:hover:from-purple-900/20 dark:hover:to-cyan-900/20 transition-all duration-300 font-semibold"
              >
                Get in Touch
                <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </div>

          <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-r ${service.gradient} rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  return (
    <section className="mb-14  mt-36">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="text-center mb-16"
        >
          <h2 className="4 text-2xl md:text-4xl font-bold text-black/70 dark:text-white mb-4">
            Solutions I Provide
          </h2>
          <p className="md:text-lg text-sm text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your unique business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
