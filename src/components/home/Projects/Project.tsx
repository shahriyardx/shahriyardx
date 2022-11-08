import React from "react"
import Image from "next/image"
import Tag from "./Tag"
import Link from "next/link"

type ProjectType = {
  name: string
  slug: string
  tags: Array<string>
  description: string
}

const Project = ({ project }: { project: ProjectType }) => {
  const { name, slug, tags, description } = project

  return (
    <Link href={`/project/${slug}`}>
      <div
        className="
          bg-zinc-900 rounded-xl p-5 flex flex-col gap-2 transition-all
          group cursor-pointer active:animate-shake"
      >
        <div className="w-full aspect-video">
          <Image
            src={`/images/projects/${slug}/1.PNG`}
            width={320}
            height={180}
            alt={name}
            className="rounded-lg object-cover"
          />
        </div>

        <p className="text-white text-2xl group-hover:text-accent">{name}</p>
        <p className="text-zinc-500 tracking-tighter text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag: string, index: number) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
    </Link>
  )
}

export default Project
