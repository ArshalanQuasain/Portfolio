import React from "react";
import ProjectItem from "../component/ProjectItem";
import { ProjectList } from "../Item/Projectlist";

function Projects() {
  return (
    <div className="projects w-full min-h-screen flex flex-col items-center bg-gray-100 py-10">
      <h1 className="text-center text-black text-[45px] font-bold mb-10">
        Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  justify-center gap-6 w-full max-w-6xl">
        {ProjectList.map((project, index) => (
          <ProjectItem
            key={index}
            id={index}
            name={project.name}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
