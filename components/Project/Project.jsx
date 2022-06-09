import React from "react";
import Image from "next/image";
import Tag from "../Tag/Tag";

import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const Project = ({ project }) => {
  const { name, slug, tags, description } = project;

  return (
    <div className="bg-zinc-900 rounded-xl p-5 flex flex-col gap-2">
      <div className="w-full aspect-video">
        <Image
          src={`/images/projects/${slug}/1.png`}
          width={320}
          height={180}
          objectFit="cover"
          alt="Makeown"
          layout="responsive"
          className="rounded-lg"
        />
      </div>

      <Link href={`/projects/${slug}`}>
        <a className="text-white text-2xl hover:text-accent">{name}</a>
      </Link>
      <p className="text-zinc-500 tracking-tighter">{description}</p>

      <div className="flex flex-wrap gap-2 mt-auto pt-2">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default Project;
