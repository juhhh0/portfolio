"use client";

import { ProjectType, SkillType } from "@/types/types";
import React from "react";
import Project from "./Project";
import { motion } from "framer-motion";

export default function Projects({
  data,
}: {
  data: { projects: ProjectType[]; skills: SkillType[] };
}) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="px-4"
    >
      <h2 className="pb-6">Mes projets</h2>
      <div className="pb-12 flex flex-wrap gap-6 w-full justify-center">
        {data.projects.map((project: ProjectType, i: number) => {
          const projectsSkills = data.skills.filter((skill: SkillType) =>
            project.skills?.includes(skill.id)
          );
          return <Project key={i} project={project} skills={projectsSkills} />;
        })}
      </div>
    </motion.section>
  );
}
