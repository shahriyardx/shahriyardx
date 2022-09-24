import React from "react"
import { motion } from "framer-motion"
import { IconType } from "react-icons"

const scale = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
}

type Props = { text: string; icon: IconType; className?: string }

const Skill = ({ text, icon, className }: Props) => {
  const Icon = icon
  return (
    <motion.div
      variants={scale}
      viewport={{ once: true }}
      className="relative group  cursor-pointer"
    >
      <Icon className={`transition-all ${className}`} />
      <span
        className="absolute text-sm -top-5 left-1/2 -translate-x-1/2 px-3 rounded-full bg-zinc-600 
                 text-white opacity-0 group-hover:opacity-100 group-hover:-top-7 transition-all"
      >
        {text}
      </span>
    </motion.div>
  )
}

export default Skill
