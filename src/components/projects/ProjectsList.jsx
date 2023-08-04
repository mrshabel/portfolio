import { projectData } from "../../data/projectData";
import ProjectCard from "./ProjectCard";
const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {projectData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
