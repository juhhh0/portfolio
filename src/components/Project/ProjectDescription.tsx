import React from "react";

export default function ProjectDescription({
  project,
  active,
  setActive,
}: {
  project: any;
  active: boolean;
  setActive: (active: boolean) => void;
}) {
  return (
    <section
      className={`absolute z-10 top-0 left-0 w-full h-full text-white ${
        active
          ? "opacity-1 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <h2>{project.title}</h2>
        <button
          onClick={() => {
            setActive(false);
          }}
        >
          close
        </button>
      </div>
    </section>
  );
}
