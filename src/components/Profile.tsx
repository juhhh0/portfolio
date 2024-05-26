"use client";

import React, { useContext } from "react";
import IconLabel from "./ui/IconLabel";
import { motion } from "framer-motion";
import { Context } from "@/context/context";

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export default function Profile() {

  const {isProjectActive}  = useContext(Context);
  console.log(isProjectActive)

  return (
    <motion.section
      variants={variants}
      initial="hidden"
      animate="visible"
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
