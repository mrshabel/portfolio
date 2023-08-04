import { projectData } from "../../data/projectData";
import ProjectCard from "./ProjectCard";
const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
      {projectData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
