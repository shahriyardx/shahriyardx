import React from "react";
import SEO from "@/components/SEO";
import ProjectDetails from "@/components/ProjectDetails/ProjectDetails";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

const ProjectSingle = () => {
  const [project, setProject] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const projects = useSelector((state) => state.projects);

  useEffect(() => {
    if (!router || !projects || !slug) return;
    const match = projects.find((p) => p.slug === slug);
    match ? setProject(match) : router.push("/");
  }, [projects, router, slug]);

  return (
    project && (
      <>
        <SEO
          title={`${project.name} - Md Shahriyar Alam`}
          image={`/images/projects/${project.slug}/1.PNG`}
          description={project.description}
        />
        <ProjectDetails project={project} />;
      </>
    )
  );
};

export default ProjectSingle;
