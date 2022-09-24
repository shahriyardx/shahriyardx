import React from "react"
import Image from "next/image"
import Tag from "./Tag"
import Link from "next/link"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1 },
}

const Project = ({ project }: { project: any }) => {
  const { name, slug, tags, description } = project

  return (
    <Link href={`/project/${slug}`}>
      <motion.div
        variants={fadeInUp}
        viewport={{ once: true }}
        className="
          bg-zinc-900 rounded-xl p-5 flex flex-col gap-2 transition-all
          group cursor-pointer active:animate-shake"
      >
        <div className="w-full aspect-video">
          <Image
            src={`/images/projects/${slug}/1.PNG`}
            width={320}
            height={180}
            objectFit="cover"
            alt="Makeown"
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        <a className="text-white text-2xl group-hover:text-accent">{name}</a>

        <p className="text-zinc-500 tracking-tighter text-sm">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {tags.map((tag: string, index: number) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </motion.div>
    </Link>
  )
}

export default Project
