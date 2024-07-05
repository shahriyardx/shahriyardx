"use client"

import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"

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
				className={`flex gap-1 text-base ${className || ""} ${
					pathname === href && "text-accent"
				} hover:text-accent`}
			>
				<span>{pathname === href && "<"}</span>

				<span>{children}</span>

				<span>{pathname === href && ">"}</span>
			</div>
		</Link>
	)
}

export default TextLink
