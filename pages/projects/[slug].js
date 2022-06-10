import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import SEO from "@/components/SEO";
import React from "react";
import projects from "../../data/projects";

const ProjectSingle = ({ project }) => {
  return (
    <>
      <SEO
        title={`${project.name} - Md Shahriyar Alam`}
        image={`/images/projects/${project.slug}/1.PNG`}
        description={project.description}
      />
      <ProjectDetails project={project} />;
    </>
  );
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
    fallback: false,
  };
};

export const getStaticProps = (ctx) => {
  const { slug } = ctx.params;
  const matchedProject = projects.find((project) => project.slug === slug);

  return {
    props: {
      project: matchedProject,
    },
  };
};
