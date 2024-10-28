"use client";

import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function SocialLinks() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard
      .writeText("hassan.mostafa2251@gmail.com")
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000); // Show the message for 2 seconds
      })
      .catch((err) => console.error("Failed to copy: ", err));
  };
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center gap-8"
      >
        <Link
          onClick={copyEmail}
          className="relative p-3 rounded-full hover:bg-secondary transition-colors cursor-pointer"
          href={"#"}
          title="Copy email address: hassan.mostafa2251@gmail.com"
        >
          <Mail className="h-6 w-6" />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="absolute -left-12 -translate-x-1/2 bottom-0 -translate-y-1/2 whitespace-nowrap"
          >
            {copied && (
              <p className="absolute ml-2 px-4 py-2 text-green-700 border border-green-000 bg-green-100 rounded-full ">
                Email copied
              </p>
            )}
          </motion.div>
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
    </>
  );
}
