import React from "react"
import Link from "next/link"
import { type IconType } from "react-icons"
import { useRouter } from "next/router"

type Props = {
  icon: IconType

  text: string
  href: string
  className?: string

  iconClassname?: string
  textClassName?: string

  active?: boolean
}

const IconLink = (props: Props) => {
  const router = useRouter()
  const Icon = props.icon

  const _active = props.active ? props.active : props.href === router.asPath

  return (
    <Link href={props.href}>
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-md
        hover:bg-zinc-800 group
          ${_active && "bg-zinc-900"}
          ${props.className}
        `}
      >
        <Icon
          className={`${props.iconClassname} text-xl group-hover:scale-125 transition-all`}
        />
        <span className={`${props.textClassName}`}>{props.text}</span>
      </div>
    </Link>
  )
}

export default IconLink
