"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Frontend Developer",
    company: "cyclus.digital GmbH (caisy.io)",
    period: "Nov 2022 ~ February 2024",
    description: "Led technical decisions and implementation of features using React.js, Next.js, TypeScript, and GraphQL. Focused on performance optimization and code quality.",
    responsibilities: [
      "Determined appropriate tech stack based on project requirements",
      "Added new features and enhanced existing functionality",
      "Optimized performance and refactored code for better maintainability",
      "Collaborated with team members on version updates and debugging"
    ]
  },
  {
    title: "Back-Office Agent",
    company: "Eurowings (Discover) - Germany",
    period: "Aug 2022 ~ Nov 2022",
    description: "Investigated compensation requests and claims for Eurowings Germany airline."
  },
  {
    title: "Customer Service Representative",
    company: "Optimum - USA",
    period: "Dec 2021 ~ Mar 2022",
    description: "Provided technical support and billing assistance for a TL service provider in the Tri-State area."
  },
  {
    title: "Frontend Web Developer",
    company: "Freelancer - Remote",
    period: "January 2021 ~ Present",
    description: "Design engaging UIs, translate user/business needs, and maintain websites following best practices.",
    responsibilities: [
      "Created responsive and accessible web applications",
      "Collaborated with clients to understand requirements",
      "Implemented modern UI/UX best practices",
      "Maintained and improved existing websites"
    ]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-24"
      >
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Professional Experience</h1>
          <p className="text-xl text-muted-foreground">
            A journey through my professional career and achievements
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-8 rounded-2xl space-y-6"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-lg text-primary">{exp.company}</p>
                <p className="text-muted-foreground">{exp.period}</p>
              </div>
              <p className="text-lg text-muted-foreground">{exp.description}</p>
              {exp.responsibilities && (
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}