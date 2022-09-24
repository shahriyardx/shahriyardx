import React from "react"

import { GetStaticPaths, GetStaticProps } from "next"

import SEO from "components/shared/SEO"
import ProjectDetails from "components/project/ProjectDetails"

import { Project } from "data/projects"
import projects from "data/projects"

type Props = {
  project: Project
}

const ProjectSingle = ({ project }: Props) => {
  return (
    <>
      {/* <SEO
          title={`${project.name} - Md Shahriyar Alam`}
          image={`/images/projects/${project.slug}/1.PNG`}
          description={project.description}
        /> */}
      <ProjectDetails project={project} />
    </>
  )
}

export default ProjectSingle

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => {
    return { params: { slug: project.slug } }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  try {
    const data = projects.find((project) => project.slug === slug)

    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }

    return {
      props: {
        project: data,
      },
    }
  } catch (err) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }
}
