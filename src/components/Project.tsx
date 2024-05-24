"use client";

import React, { useState } from "react";
import Card from "./Card";
import ProjectDescription from "./ProjectDescription";
import PixelBackground from "./PixelBackground";

export default function Project({ project }: { project: any }) {
  const [active, setActive] = useState(false);

  return (
    <>
      <Card project={project} setActive={setActive} />
      <ProjectDescription project={project} active={active} setActive={setActive} />
      <PixelBackground active={active} />
    </>
  );
}
