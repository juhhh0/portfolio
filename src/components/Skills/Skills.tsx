import { SkillType } from "@/types/types";
import React from "react";
import SkillsCategory from "./SkillsCategory";

export default function Skills({ skills }: { skills: SkillType[] }) {
  const frontend = skills.filter((skill) => skill.category === "frontend");
  const backend = skills.filter((skill) => skill.category === "backend");
  const devops = skills.filter((skill) => skill.category === "devops");
  const design = skills.filter((skill) => skill.category === "design");

  return (
    <section className="py-12 px-4">
      <h2 className="pb-5">Compétences</h2>
      <div className="flex flex-wrap gap-4 justify-center md:justify-between">
        <SkillsCategory title="Design" data={design} />
        <SkillsCategory title="Frontend" data={frontend} />
        <SkillsCategory title="Backend" data={backend} />
        <SkillsCategory title="DevOps" data={devops} />
      </div>
    </section>
  );
}
