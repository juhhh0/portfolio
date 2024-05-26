import { ProjectType, SkillType } from "@/types/types";
import React from "react";

export default function Card({
  project,
  skills,
  setActive,
}: {
  project: ProjectType;
  skills?: SkillType[]
  setActive: () => void;
}) {
  return (
    <article
      className="border bottom-1 w-full flex-1 min-w-[150px] aspect-video flex items-center justify-center cursor-pointer rounded-md"
      style={{ backgroundColor: project.cardColor || "white" }}
      onClick={setActive}
    >
      <img src={"/icons/" + project.icon} alt="" />
    </article>
  );
}
