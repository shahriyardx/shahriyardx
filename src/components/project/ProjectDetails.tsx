import React from "react"
import Container from "components/shared/Container"
import Main from "components/layouts/Main"
import Image from "next/image"
import { BiLink } from "react-icons/bi"
import { Project } from "data/projects"

type Props = {
  project: Project
}

const ProjectDetails = ({ project }: Props) => {
  return (
    <Main>
      <Container className="pt-5 sm:pt-10 md:pt-20 pb-20 max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          {project.name}
        </h1>
        <p className="text-zinc-400">{project.description}</p>

        <div className="flex flex-wrap gap-2 sm:gap-5 items-center text-accent mt-5">
          {project.links.map((link, index) => {
            return (
              <a
                key={index}
                href={link.url || "#"}
                target={link.url ? "_blank" : "_self"}
                rel="noreferrer"
                className="hover:text-green-600 flex items-center gap-1"
              >
                <BiLink className="text-xl" />
                <span>{link.text}</span>
              </a>
            )
          })}
        </div>

        <div className="prose prose-invert prose-green mt-10 max-w-full">
          <h2>Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-full overflow-x-hidden">
            {[...Array(3)].map((_, index) => {
              return (
                <div
                  className="rounded-md border-2 border-zinc-700 w-full aspect-video"
                  key={index}
                >
                  <Image
                    src={`/images/projects/${project.slug}/${index + 1}.PNG`}
                    width={500}
                    height={300}
                    alt="Roktoo"
                    className="rounded-md object-cover"
                  />
                </div>
              )
            })}
          </div>

          <h2>Features</h2>
          <ul>
            {project.features.map((feature, index) => {
              return <li key={index}>{feature}</li>
            })}
          </ul>

          <h2>Technologies Used</h2>
          <p>{project.technologies}</p>
        </div>
      </Container>
    </Main>
  )
}

export default ProjectDetails
