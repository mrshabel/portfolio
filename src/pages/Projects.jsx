import React from "react";
import ProjectsList from "../components/projects/ProjectsList";

const Projects = () => {
  return (
    <main className="flex flex-col gap-10 min-h-full md:pt-10">
      <h1 className="text-4xl font-bold text-heading tracking-wide">
        Some of my projects
      </h1>
      <section className="w-full p-5">{<ProjectsList />}</section>
    </main>
  );
};

export default Projects;
