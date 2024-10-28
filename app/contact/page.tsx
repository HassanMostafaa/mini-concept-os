"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto space-y-24"
      >
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-xl text-muted-foreground">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={24} />
                <a href="mailto:hassan.mostafa2251@gmail.com" className="text-lg hover:text-primary transition-colors">
                  hassan.mostafa2251@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-primary" size={24} />
                <div className="space-y-1">
                  <a href="tel:+201142477195" className="text-lg hover:text-primary transition-colors">
                    +20 114 247 7195
                  </a>
                  <br />
                  <a href="tel:+97333738912" className="text-lg hover:text-primary transition-colors">
                    +973 3373 8912
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass-effect p-8 rounded-2xl space-y-6"
          >
            <h2 className="text-2xl font-semibold">Professional Profiles</h2>
            <div className="space-y-4">
              <Link
                href="https://linkedin.com/in/hassanmostafaa/"
                target="_blank"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
                <span className="text-lg">LinkedIn Profile</span>
              </Link>
              <Link
                href="https://github.com/HassanMostafaa"
                target="_blank"
                className="flex items-center gap-4 hover:text-primary transition-colors"
              >
                <Github size={24} />
                <span className="text-lg">GitHub Profile</span>
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass-effect p-8 rounded-2xl text-center space-y-6"
        >
          <h2 className="text-2xl font-semibold">Resume</h2>
          <p className="text-lg text-muted-foreground">
            Download my detailed resume to learn more about my experience and skills
          </p>
          <Link
            href="https://drive.google.com/file/d/11Aq0RwCaiNgAwHt7RSEvu35mQW0TvQ6_/view?usp=sharing"
            target="_blank"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity"
          >
            View Resume
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}