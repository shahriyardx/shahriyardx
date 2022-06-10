import React from "react";
import Container from "@/components/Layout/Container";
import Main from "@/components/Layout/Main";
import Image from "next/image";
import { motion } from "framer-motion";
import { BiLink } from "react-icons/bi";

const ProjectDetails = ({ project }) => {
  return (
    <Main>
      <Container className="pt-5 sm:pt-10 md:pt-20 pb-20">
        <motion.h1
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
        >
          {project.name}
        </motion.h1>
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
            );
          })}
        </div>

        <div className="prose prose-invert prose-green mt-10 max-w-full">
          <h2>Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-full overflow-x-hidden">
            {[...Array(3)].map((_, index) => {
              return (
                <motion.div
                  initial={{ x: index + 1 * 400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ x: { duration: (index + 1) * 0.2 } }}
                  className="rounded-md border-2 border-zinc-700 w-full aspect-video"
                  key={index}
                >
                  <Image
                    src={`/images/projects/${project.slug}/${index + 1}.PNG`}
                    width={500}
                    height={300}
                    alt="Roktoo"
                    className="rounded-md"
                    objectFit="cover"
                    layout="responsive"
                  />
                </motion.div>
              );
            })}
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
