import { projects } from "@/config/projects";
import ProjectCard from "@/components/ProjectCard";

import { Caveat } from "next/font/google";
import { cn } from "@/services";

const caveat = Caveat({ weight: "400", subsets: ["latin"] });

function Projects() {
  return (
    <div className="h-screen flex flex-col">
      <h1 className={cn("ml-6 py-8 text-6xl underline", caveat.className)}>projects</h1>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3 flex-1">
        {projects.map((project, idx) => (
          <ProjectCard data={project} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
