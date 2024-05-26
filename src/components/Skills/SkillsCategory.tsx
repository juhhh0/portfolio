import { SkillType } from "@/types/types";
import React from "react";
import IconLabel from "../ui/IconLabel";

export default function SkillsCategory({
  title,
  data,
}: {
  title: string;
  data: SkillType[];
}) {
  return (
    <div className="min-w-[150px]">
      <h3 className="pb-2">{title}</h3>
      <ul className="flex flex-col gap-2">
        {data.map((skill) => (
          <IconLabel label={skill.title} icon={"/icons/" + skill.icon + ".svg"} />
        ))}
      </ul>
    </div>
  );
}
