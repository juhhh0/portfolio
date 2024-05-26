import Profile from "@/components/Profile";
import Project from "@/components/Project/Project";
import Skills from "@/components/Skills/Skills";
import { ProjectType, SkillType } from "@/types/types";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="pt-12 max-w-4xl mx-auto">
      <Profile />
      <Skills skills={data.skills} />
      <h2 className="pb-6 px-4">Mes projets</h2>
      <section className="pb-12 flex flex-wrap gap-6 w-full justify-center">
        {data.projects.map((project: ProjectType, i: number) => {
          const projectsSkills = data.skills.filter((skill: SkillType) =>
            project.skills?.includes(skill.id)
          );
          return <Project key={i} project={project} skills={projectsSkills} />;
        })}
      </section>
    </main>
  );
}
