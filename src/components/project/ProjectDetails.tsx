import React from "react";
import Container from "components/shared/Container";
import Main from "components/layouts/Main";
import Image from "next/image";
import { BiGitCommit, BiLink } from "react-icons/bi";
import { type IProjectAttributes } from "types";
import { env } from "env/client.mjs";
import Markdown from "marked-react";

type Props = {
  project: IProjectAttributes;
};

const ProjectDetails = ({ project }: Props) => {
  return (
    <Main>
      <Container className="max-w-6xl pt-5 pb-20 sm:pt-10 md:pt-20">
        <h1 className="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          {project.name}
        </h1>
        <p className="text-zinc-400">{project.short_description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-accent sm:gap-5">
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-green-600"
            >
              <BiLink className="text-xl" />
              <span>Live Site</span>
            </a>
          )}

          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-green-600"
            >
              <BiGitCommit className="text-xl" />
              <span>Repo URL</span>
            </a>
          )}
        </div>

        <div className="prose prose-invert prose-green mt-10 max-w-full">
          <h2>Screenshots</h2>
          <div className="grid max-w-full grid-cols-1 gap-5 overflow-x-hidden sm:grid-cols-3">
            {project.screenshots.data.map((image, index) => {
              return (
                <div
                  className="aspect-video w-full rounded-md"
                  key={index}
                >
                  <Image
                    src={`${env.NEXT_PUBLIC_STRAPI_BASE}${image.attributes.formats.thumbnail?.url}`}
                    width={500}
                    height={300}
                    alt="Roktoo"
                    className="rounded-md object-cover"
                  />
                </div>
              );
            })}
          </div>

          <div className="mt-10">
            <Markdown>{project.description}</Markdown>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default ProjectDetails;
