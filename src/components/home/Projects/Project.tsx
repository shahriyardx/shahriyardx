import React from "react";
import Image from "next/image";
import Tag from "./Tag";
import Link from "next/link";
import { IProject, ITag } from "types";

const Project = ({ project }: { project: IProject }) => {
  const { id, attributes } = project;
  const {
    name,
    short_description,
    slug,
    thumbnail: { data: thumbnail_img },
    tags: { data: project_tags },
  } = attributes;

  return (
    <Link href={`/project/${slug}`}>
      <div
        className="
          group flex cursor-pointer flex-col gap-2 rounded-xl bg-zinc-900
          p-5 transition-all active:animate-shake"
      >
        <div className="aspect-video w-full">
          <Image
            src={`http://localhost:1337${thumbnail_img.attributes.formats.thumbnail.url}`}
            width={320}
            height={180}
            alt={name}
            className="rounded-lg object-cover"
          />
        </div>

        <p className="text-2xl text-white group-hover:text-accent">{name}</p>
        <p className="text-sm tracking-tighter text-zinc-500">
          {short_description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {project_tags.map((tag: ITag, index: number) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Project;
