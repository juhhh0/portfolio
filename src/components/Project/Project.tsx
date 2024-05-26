"use client";

import React, { useState } from "react";
import Card from "../ui/Card";
import ProjectDescription from "./ProjectDescription";
import PixelBackground from "./PixelBackground";
import { ProjectType, SkillType } from "@/types/types";

export default function Project({ project, skills }: { project: ProjectType, skills?: SkillType[] }) {
  const [active, setActive] = useState(false);

  console.log(skills)
  return (
    <>
      <Card project={project} skills={skills} setActive={setActive} />
      <ProjectDescription project={project} skills={skills} active={active} setActive={setActive} />
      <PixelBackground active={active} />
    </>
  );
}
