import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";
import { ProjectMeta } from "utils/projects";

const Project = ({ project }: { project: ProjectMeta }) => {
  return (
    <Link href={`/project/${project.slug}`}>
      <div
        className="flex flex-col gap-2 p-5 transition-all cursor-pointer group rounded-xl bg-zinc-900 active:animate-shake"
      >
        <div className="w-full aspect-video">
          <Image
            src={`/images/projects/${project.slug}.png`}
            width={320}
            height={180}
            alt={project.title}
            className="object-cover w-full rounded-lg"
          />
        </div>

        <p className="text-2xl text-white group-hover:text-accent">{project.title}</p>
        <p className="text-sm tracking-tighter text-zinc-500">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-2 mt-auto">
          {project.tags.map((tag: string) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;
