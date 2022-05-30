import React, { useState } from "react";
import Container from "../../components/Layout/Container";
import Project from "../../components/Project/Project";

const Projects = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const renderRrojects = showAll ? projects : projects.slice(0, 6);
  return (
    <div className="bg-primary">
      <Container className="py-10 md:py-20">
        <h1 className="text-4xl font-black tracking-tighter text-zinc-300 text-center mb-10">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          {renderRrojects.map((project) => {
            return (
              <Project
                key={project._id}
                title={project.title}
                url={project.url}
                description={project.description}
                image={project.image}
                tags={project.tags.map((tag) => tag.value)}
              />
            );
          })}
        </div>
        {projects.length > 6 && (
          <div
            className="mt-5 flex justify-center"
            onClick={() => setShowAll(!showAll)}
          >
            <button className="px-5 py-3 text-white bg-zinc-600">
              {showAll ? "Show Less" : "Show All"}
            </button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Projects;
