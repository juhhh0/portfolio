"use client";

import React, { useState } from "react";
import Card from "../ui/Card";
import ProjectDescription from "./ProjectDescription";
import PixelBackground from "./PixelBackground";
import { ProjectType } from "@/types/types";

export default function Project({ project }: { project: ProjectType }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <Card project={project} setActive={setActive} />
      <ProjectDescription project={project} active={active} setActive={setActive} />
      <PixelBackground active={active} />
    </>
  );
}
