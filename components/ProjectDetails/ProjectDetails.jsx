import React from "react";
import Container from "@/components/Layout/Container";
import Main from "@/components/Layout/Main";
import Image from "next/image";
import { BiLink } from "react-icons/bi";

const ProjectDetails = ({ project }) => {
  return (
    <Main>
      <Container className="py-20">
        <h1 className="text-5xl font-bold text-white">{project.name}</h1>
        <p className="text-zinc-400">{project.description}</p>

        <div className="flex gap-5 items-center text-accent mt-5">
          {project.links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="hover:text-green-600 flex items-center gap-1"
              >
                <BiLink className="text-xl" />
                <span>{link.text}</span>
              </a>
            );
          })}
        </div>

        <div className="prose prose-invert prose-green mt-10 max-w-full">
          <h2>Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="border-2 border-zinc-500 rounded-md overflow-hidden">
              <Image
                src={`/images/projects/${project.slug}/1.PNG`}
                width={500}
                height={300}
                alt="Roktoo"
                className="rounded-md"
                objectFit="cover"
              />
            </div>

            <div className="border-2 border-zinc-500 rounded-md overflow-hidden">
              <Image
                src={`/images/projects/${project.slug}/2.PNG`}
                width={500}
                height={300}
                alt="Roktoo"
                className="rounded-md"
                objectFit="cover"
              />
            </div>

            <div className="border-2 border-zinc-500 rounded-md overflow-hidden">
              <Image
                src={`/images/projects/${project.slug}/3.PNG`}
                width={500}
                height={300}
                alt="Roktoo"
                className="rounded-md"
                objectFit="cover"
              />
            </div>
          </div>

          <h2>Features</h2>
          <ul>
            {project.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>

          <h2>Technologies Used</h2>
          <p>{project.technologies}</p>
        </div>
      </Container>
    </Main>
  );
};

export default ProjectDetails;
