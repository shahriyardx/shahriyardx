import React from "react"
import { type IconType } from "react-icons"

type Props = { icon: IconType; href: string; children: React.ReactNode; className?: string }

const IconLink = ({ icon, href, children, className }: Props) => {
  const Icon = icon

  return (
    <a
      href={href}
      className={`flex items-center gap-2 ${className || ""} hover:text-accent`}
      target="_blank"
      rel="noreferrer"
    >
      <Icon /> {children}
    </a>
  )
}

export default IconLink
