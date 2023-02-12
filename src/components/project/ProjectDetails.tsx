import React from "react";
import Container from "components/shared/Container";
import Main from "components/layouts/Main";
import { type ProjectMeta } from "utils/projects";
import { type MDXRemoteSerializeResult } from "next-mdx-remote";
import { MDXRemote } from "next-mdx-remote";
import Image from "next/image";

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: ProjectMeta;
};

const ProjectDetails = ({ source, meta }: Props) => {
  return (
    <Main>
      <Container className="max-w-6xl pt-5 pb-20 sm:pt-10 md:pt-20">
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {meta.title}
        </h1>
        <p className="mb-10 text-zinc-400">{meta.description}</p>

        <Image
          src={`/images/projects/${meta.slug}.png`}
          alt={meta.title}
          width={500}
          height={300}
          className="object-cover w-full rounded-md"
        />
        <div className="w-full max-w-6xl mt-5 prose prose-invert prose-sky">
          <MDXRemote {...source} />
        </div>
      </Container>
    </Main>
  );
};

export default ProjectDetails;
