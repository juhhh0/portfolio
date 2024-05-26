import { SkillType } from "@/types/types";
import React from "react";
import IconLabel from "../ui/IconLabel";

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
    <section
      className={`fixed z-10 top-0 left-0 w-full h-full overflow-scroll ${
        active
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto pt-12 px-4">
        <img src={"/icons/" + project.icon} alt="" />
        <h2 className="py-2 text-3xl">{project.title}</h2>
        <a href={project.link}>{project.link}</a>
        <p className="py-2">{project.description}</p>
        <div className="flex gap-2">
          {project.screens.map((screen: string, i: number) => (
            <img
              key={i}
              src={"/images/" + screen}
              alt=""
              className="w-full flex-1 min-w-[150px] aspect-video"
            />
          ))}
        </div>
        <h3 className="pt-3 pb-2 text-2xl">Mes réalisations</h3>
        <span>{project.date}</span>
        <ul className="flex flex-wrap gap-4 md:justify-between py-4">
          {skills?.map((skill) => (
            <IconLabel label={skill.title} icon={"/icons/" + skill.icon} />
          ))}
        </ul>
        <p>{project.content}</p>
        <button
        className="flex gap-2 pt-12"
          onClick={() => {
            setActive(false);
          }}
        >
          <img className="w-6" src="/icons/back.svg" alt="" /> <span className="text-medium">Retour</span>
        </button>
      </div>
    </section>
  );
}
