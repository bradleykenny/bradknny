import { projects } from "@/config/projects";
import ProjectCard from "@/components/ProjectCard";

function Projects() {
  return (
    <div className="mt-12 grid h-screen grid-cols-1 grid-rows-2 gap-6 p-10 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, idx) => (
        <ProjectCard data={project} key={idx} />
      ))}
    </div>
  );
}

export default Projects;
