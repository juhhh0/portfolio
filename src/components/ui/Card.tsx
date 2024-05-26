import React from "react";

export default function Card({
  project,
  setActive,
}: {
  project: any;
  setActive: (active: boolean) => void;
}) {
  return (
    <article
      className="border bottom-1 w-full max-w-sm"
      onClick={() => {
        setActive(true);
      }}
    >
      {project.title}
    </article>
  );
}
