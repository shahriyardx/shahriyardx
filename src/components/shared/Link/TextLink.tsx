import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

type Props = { href: string; children: any; className?: string }

const TextLink = ({ href, children, className }: Props) => {
  const { pathname } = useRouter()

  return (
    <Link href={href}>
      <div
        className={`text-base flex gap-1 ${className || ""} ${
          pathname == href && "text-accent"
        } hover:text-accent`}
      >
        <span>{pathname == href && "<"}</span>

        <span>{children}</span>

        <span>{pathname == href && ">"}</span>
      </div>
    </Link>
  )
}

export default TextLink
