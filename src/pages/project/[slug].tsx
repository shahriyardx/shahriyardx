import React from "react"

import { type GetStaticPaths, type GetStaticProps } from "next"

import SEO from "components/shared/SEO"
import ProjectDetails from "components/project/ProjectDetails"

import { type Project } from "data/projects"
import projects from "data/projects"
import { ICollectionResponse, IProject } from "types"
import { api } from "utils/http"
import { env } from "env/client.mjs"

type Props = {
  project: IProject
}

const ProjectSingle = ({ project }: Props) => {
  const { id, attributes } = project
  const { name, slug, short_description, thumbnail: { data: thumbnail_img } } = attributes

  return (
    <>
      <SEO
        title={`${name} - Md Shahriyar Alam`}
        image={`${env.NEXT_PUBLIC_STRAPI_BASE}${thumbnail_img.attributes.formats.thumbnail?.url}`}
        description={short_description}
      />
      <ProjectDetails project={attributes} />
    </>
  )
}

export default ProjectSingle

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: projects }: ICollectionResponse<Array<IProject>> = await api(
    "/api/projects"
  );

  const paths = projects.map((post) => {
    return { params: { slug: post.attributes.slug } }
  })

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string

  const { data }: ICollectionResponse<Array<IProject>> = await api(
    `/api/projects?populate=*&filters[slug][$eq]=${slug}`
  );

  if (data.length < 0) {
    return {
      notFound: true,
    }
  }

  const project: IProject = data[0] as IProject

  return {
    props: {
      project: project
    },
  }
}
