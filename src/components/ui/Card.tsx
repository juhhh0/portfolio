import { ProjectType, SkillType } from "@/types/types";
import { sendGTMEvent } from "@next/third-parties/google";
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
      className="relative border bottom-1 flex-1 w-full min-w-[280px] aspect-video flex items-center justify-center cursor-pointer rounded-md"
      style={{ backgroundColor: project.cardColor || "#0F0F0F" }}
      onClick={() => {
        sendGTMEvent({ event: "project_click", value: project.title });
        setActive(true);
      }}
    >
      <img
        className="h-12"
        src={"/icons/" + project.icon}
        alt={project.title + " logo"}
      />
      <ul
        className={`absolute flex bottom-0 left-0 gap-2 opacity-65 p-2 ${
          project.cardColor == "white" ? " invert" : ""
        }`}
      >
        {skills?.map((skill) => (
          <li key={skill.id}>
            <img
              title={skill.title}
              className="w-6"
              src={"/icons/" + skill.icon + "-white.svg"}
              alt={skill.title + " icon"}
            />
          </li>
        ))}
      </ul>
    </article>
  );
}
