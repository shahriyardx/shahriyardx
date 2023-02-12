import React from "react";

import { type GetStaticPaths, type GetStaticProps } from "next";

import SEO from "components/shared/SEO";
import ProjectDetails from "components/project/ProjectDetails";

import {  getProjectFromSlug, getSlugs, type ProjectMeta } from "utils/projects";
import { serialize } from "next-mdx-remote/serialize";
import { type MDXRemoteSerializeResult } from "next-mdx-remote/dist";

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta
};

const ProjectSingle = ({ source, meta }: Props) => {
  return (
    <>
      <SEO
        title={`${meta.title} - Md Shahriyar Alam`}
        image={`/images/projects/${meta.slug}.png`}
        description={meta.description}
      />
      <ProjectDetails source={source} meta={meta} />
    </>
  );
};

export default ProjectSingle;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { content, meta } = getProjectFromSlug(slug);
  const mdxSource = await serialize(content, {
    mdxOptions: {},
  });

  return {
    props: {
      source: mdxSource,
      meta,
    },
  };
};
