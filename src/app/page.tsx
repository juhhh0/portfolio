import Profile from "@/components/Profile";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import { ProjectType } from "@/types/types";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="pt-12 max-w-4xl mx-auto">
      <Profile />
      <Skills skills={data.skills} />
      <section className="flex flex-wrap gap-6 w-full justify-center">
        {data.projects.map((project: ProjectType, i: number) => (
          <Project key={i} project={project} />
        ))}
      </section>
    </main>
  );
}
