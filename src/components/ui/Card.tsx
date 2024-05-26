import { ProjectType } from "@/types/types";
import React from "react";

export default function Card({
  project,
  setActive,
}: {
  project: ProjectType;
  setActive: (active: boolean) => void;
}) {
  return (
    <article
      className="border bottom-1 w-full flex-1 min-w-[150px] aspect-video flex items-center justify-center cursor-pointer rounded-md"
      style={{ backgroundColor: project.cardColor || "white" }}
      onClick={() => {
        setActive(true);
      }}
    >
      <img src={"/icons/" + project.icon} alt="" />
    </article>
  );
}
