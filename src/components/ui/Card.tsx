import { ProjectType, SkillType } from "@/types/types";
import React from "react";

export default function Card({
  project,
  skills,
  setActive,
}: {
  project: ProjectType;
  skills?: SkillType[];
  setActive: (active: boolean) => void;
}) {
  return (
    <article
      className="relative border bottom-1 w-full flex-1 min-w-[260px] aspect-video flex items-center justify-center cursor-pointer rounded-md"
      style={{ backgroundColor: project.cardColor || "#0F0F0F" }}
      onClick={() => {
        setActive(true);
      }}
    >
      <img
        className="h-12"
        src={"/icons/" + project.icon}
        alt={project.title + " logo"}
      />
      <ul className="absolute flex bottom-0 left-0 gap-2 opacity-65 p-2">
        {skills?.map((skill) => (
          <li key={skill.id}>
            <img
              className="w-6	"
              src={"/icons/" + skill.icon + "-white.svg"}
              alt={skill.title + " icon"}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
