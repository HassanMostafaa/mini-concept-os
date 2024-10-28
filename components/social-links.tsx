"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function SocialLinks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="flex justify-center gap-8"
    >
      <Link
        href="mailto:hassan.mostafa2251@gmail.com"
        className="p-3 rounded-full hover:bg-secondary transition-colors"
      >
        <Mail className="h-6 w-6" />
      </Link>
      <Link
        href="tel:+201142477195"
        className="p-3 rounded-full hover:bg-secondary transition-colors"
      >
        <Phone className="h-6 w-6" />
      </Link>
      <Link
        href="https://linkedin.com/in/hassanmostafaa/"
        target="_blank"
        className="p-3 rounded-full hover:bg-secondary transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </Link>
      <Link
        href="https://github.com/HassanMostafaa"
        target="_blank"
        className="p-3 rounded-full hover:bg-secondary transition-colors"
      >
        <Github className="h-6 w-6" />
      </Link>
    </motion.div>
  );
}