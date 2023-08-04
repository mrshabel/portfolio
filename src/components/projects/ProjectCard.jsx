import { useState } from "react";

const ProjectCard = ({ project }) => {
  const [hover, setHover] = useState(false);

  function handleClick() {
    window.location.href = project.link;
  }

  return (
    <div
      className={`h-[250px] border border-active rounded-md overflow-hidden relative cursor-pointer ${
        hover ? "backdrop-blur-2xl relative " : ""
      } `}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={handleClick}
    >
      <div
        className={`w-full h-full transition-all duration-300 ${
          hover ? "opacity-10 " : "opacity-100"
        } `}
      >
        <img
          src={project.image}
          alt={project.title}
          className="bg-cover bg-no-repeat w-full h-full"
        />
      </div>
      <div
        className={`z-10 w-full flex flex-col items-center p-5 pt-8 gap-6 h-full ${
          hover ? "absolute top-0 right-0 left-0 " : "hidden"
        } `}
      >
        <h3 className="text-heading text-4xl font-semibold ">
          {project.title}
        </h3>
        <p className="text-center font-normal">{project.description}</p>
      </div>
      <div className="absolute bottom-0 left-0 flex flex-wrap gap-2 px-3 pb-1 z-20 ">
        {project.tools.map((tool, index) => (
          <span
            key={index}
            className="px-3 py-[2px] rounded-md text-[10px] bg-active text-dark"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
