import Profile from "@/components/Profile";
import Projects from "@/components/Project/Projects";
import Skills from "@/components/Skills/Skills";
import { promises as fs } from "fs";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/src/data/data.json", "utf8");
  const data = JSON.parse(file);

  return (
    <main className="pt-12 max-w-4xl mx-auto">
      <Profile />
      <Skills skills={data.skills} />
      <Projects data={data} />
    </main>
  );
}
