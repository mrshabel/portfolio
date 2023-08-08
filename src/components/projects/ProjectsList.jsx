import { projectData } from "../../data/projectData";
import ProjectCard from "./ProjectCard";
const ProjectsList = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:px-10 ">
      {projectData.map((project) => (
        <ProjectCard project={project} key={project.id} />
      ))}
    </div>
  );
};

export default ProjectsList;
