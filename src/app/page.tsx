import Profile from "@/components/Profile";
import Project from "@/components/Project";
import { ProjectType } from "@/types/types";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="pt-12">
      <Profile />
      <section className="flex flex-wrap gap-6 w-full justify-center mt-28">
        {data.projects.map((project: ProjectType, i: number) => (
          <Project key={i} project={project} />
        ))}
      </section>
    </main>
  );
}
