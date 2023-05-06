import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

import { projects } from "@/config/projects";

function Projects() {
    return (
        <div className="flex h-screen flex-col" id="projects">
            <SectionHeader title="Projects" />
            <div className="grid flex-1 grid-cols-1 grid-rows-2 gap-6 pb-10 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, idx) => (
                    <ProjectCard data={project} key={idx} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
