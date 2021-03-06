import React, { useState } from "react";
import Container from "@/components/Layout/Container";
import Project from "@/components/Project/Project";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0,
      staggerChildren: 0.1,
    },
  },
};

const Projects = () => {
  const projects = useSelector((state) => state.projects);
  const [showAll, setShowAll] = useState(false);
  const renderRrojects = showAll ? projects : projects.slice(0, 6);
  return (
    <div className="bg-secondary">
      <Container className="py-10 md:py-20">
        <div className="text-center">
          <span className="uppercase text-lg text-zinc-600">Projects</span>
          <h1 className="text-4xl font-bold text-zinc-300">Recent Projects</h1>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 mt-10"
        >
          {renderRrojects.map((project) => (
            <Project key={project.slug} project={project} />
          ))}
        </motion.div>
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
