"use client";

import React from "react";
import IconLabel from "./ui/IconLabel";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col gap-3 items-center"
    >
      <div className="w-36 h-36 md:w-64 md:h-64 rounded-full bg-center bg-cover profile-picture"></div>
      <h1>Joris Mansion</h1>
      <h2>Développeur web basé à Paris</h2>
      <ul className="flex flex-wrap gap-3 justify-center items-center">
        <IconLabel icon="/icons/linkedin.svg" label="LinkedIn" />
        <IconLabel icon="/icons/github.svg" label="GitHub" />
        <IconLabel icon="/icons/email.svg" label="joris.mansion@gmail.com" />
      </ul>
    </motion.section>
  );
}
