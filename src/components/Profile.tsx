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
      className="flex flex-col items-center md:items-start md:flex-row-reverse gap-4 relative px-4"
    >
      <img  className="w-36 h-36 block md:w-64 md:h-64 rounded-full object-cover" src="/pic.jpeg" alt="" />
      <div className="flex-1 flex gap-2 flex-col justify-center text-center md:text-start">
        <h1>Joris Mansion</h1>
        <h2>Développeur web basé à Paris</h2>
        <ul className="flex flex-wrap gap-3 justify-center items-center md:justify-start">
          <a href="https://www.linkedin.com/in/joris-mansion/" target="_blank">
            <IconLabel icon="/icons/linkedin.svg" label="LinkedIn" />
          </a>
          <a href="https://github.com/juhhh0" target="_blank">
            <IconLabel icon="/icons/github.svg" label="GitHub" />
          </a>
          <a href="mailto:joris.mansion@gmail.com">
            <IconLabel
              icon="/icons/email.svg"
              label="joris.mansion@gmail.com"
            />
          </a>
        </ul>
        <p className="pt-6 md:pt-4">Développeur React depuis plus de 2 ans dont une grande partie au sein de Prodigious (Publicis Groupe) à développer de nombreux projets web pour des grands comptes.</p>
      </div>
    </motion.section>
  );
}
