"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import { cn } from "@/lib/utils"

type Props = LinkProps & {
  href: string
  children: React.ReactNode | React.ReactNode[]
  className?: string
}

const TextLink = ({ href, children, className, ...props }: Props) => {
  const pathname = usePathname()

  return (
    <Link href={href} {...props}>
      <div
        className={cn(
          `flex gap-1 text-base text-muted-foreground ${className || ""}`,
          pathname === href && "text-primary",
          `hover:text-primary`,
        )}
      >
        <span>{pathname === href && "<"}</span>

        <span>{children}</span>

        <span>{pathname === href && ">"}</span>
      </div>
    </Link>
  )
}

export default TextLink
