"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "caisy.io Platform",
    description: "Contributed to the development of a headless CMS platform using React, Next.js, and GraphQL. Implemented key features and optimized performance.",
    tags: ["React", "Next.js", "TypeScript", "GraphQL"],
    link: "https://caisy.io",
    type: "Professional"
  },
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and a clean design.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/HassanMostafaa/portfolio",
    link: "https://hassan-mostafa.vercel.app",
    type: "Personal"
  }
];

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-24"
      >
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Projects</h1>
          <p className="text-xl text-muted-foreground">
            A showcase of my recent work and contributions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-8 rounded-2xl space-y-6"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-primary">{project.type}</p>
                </div>
                <div className="flex gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Github size={24} />
                    </Link>
                  )}
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      className="p-2 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Globe size={24} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-lg text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}