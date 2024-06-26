"use client";

import { SkillType } from "@/types/types";
import React from "react";
import IconLabel from "../ui/IconLabel";
import { motion } from "framer-motion";
import Carousel from "../ui/Carousel";

const variants = {
  hidden: { opacity: 0, transition: { duration: 0.7 } },
  visible: {
    opacity: 1,
    transition: { duration: 0.7, staggerChildren: 0.8, delay: 1 },
  },
};

const backgroundVariant = {
  hidden: { backgroundColor: "transparent" },
  visible: { backgroundColor: "rgb(243, 244, 246) ", transition: { delay: 1 }}
};


export default function ProjectDescription({
  project,
  skills,
  active,
  setActive,
}: {
  project: any;
  skills?: SkillType[];
  active: boolean;
  setActive: (active: boolean) => void;
}) {
  return (
    <motion.section
    variants={backgroundVariant}
    initial="hidden"
    animate={active ? "visible" : "hidden"}
      className={`fixed z-20 top-0 left-0 w-full h-full ${
        active ? "pointer-events-auto project-active overflow-x-hidden" : "pointer-events-none"
      }`}
    >
      <motion.div
        initial="hidden"
        variants={variants}
        animate={active ? "visible" : "hidden"}
        className="max-w-4xl mx-auto pt-12 px-4"
      >
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <img className="h-16" src={"/icons/" + project.image} alt="" />
          <h2 className="py-2 text-3xl">{project.title}</h2>
          <a target="_blank" className="underline opacity-55" href={project.link}>{project.link}</a>
          <p className="py-2">{project.description}</p>
          <Carousel data={project.screens}/>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <h3 className="pt-3 pb-2 text-2xl">Mes réalisations</h3>
          <span className="opacity-55">{project.date}</span>
          <ul className="flex flex-wrap gap-4 md:justify-between py-4">
            {skills?.map((skill) => (
              <IconLabel
                key={skill.id}
                label={skill.title}
                icon={"/icons/" + skill.icon + ".svg"}
              />
            ))}
          </ul>
          <p dangerouslySetInnerHTML={{ __html: project.content }}></p>
        </motion.div>
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <button
            className="flex gap-2 py-12"
            onClick={() => {
              setActive(false);
            }}
          >
            <img className="w-6" src="/icons/back.svg" alt="" />{" "}
            <span className="text-medium">Retour</span>
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
