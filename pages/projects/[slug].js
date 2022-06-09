import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import React from "react";
import projects from "../../data/projects";

const ProjectSingle = ({ project }) => {
  return <ProjectDetails project={project} />;
};

export default ProjectSingle;

export const getStaticPaths = () => {
  const paths = projects.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = (ctx) => {
  const { slug } = ctx.params;
  const matchedProject = projects.find((project) => project.slug === slug);

  if (!matchedProject) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      project: matchedProject,
    },
  };
};
