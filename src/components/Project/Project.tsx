"use client";

import React, { useContext, useState } from "react";
import Card from "../ui/Card";
import ProjectDescription from "./ProjectDescription";
import PixelBackground from "./PixelBackground";
import { ProjectType, SkillType } from "@/types/types";
import { Context } from "@/context/context";

export default function Project({ project, skills }: { project: ProjectType, skills?: SkillType[] }) {
  const [active, setActive] = useState(false);

  const {setIsProjectActive} = useContext(Context);

  const toggleActive = () => {
    setActive(!active);
    setIsProjectActive(!active);
  }

  return (
    <>
      <Card project={project} skills={skills} setActive={toggleActive} />
      <ProjectDescription project={project} skills={skills} active={active} setActive={toggleActive} />
      <PixelBackground active={active} />
    </>
  );
}
