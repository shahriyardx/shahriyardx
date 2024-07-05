"use client"

import { cn } from "@/tools/tw"
import Link, { type LinkProps } from "next/link"
import { usePathname } from "next/navigation"
import type React from "react"
import type { IconType } from "react-icons"

type Props = LinkProps & {
	Icon: IconType
	children: React.ReactNode
	clasName?: string
}

const IconLink = ({ Icon, ...props }: Props) => {
	const pathname = usePathname()

	return (
		<Link
			{...props}
			className={cn(
				pathname === props.href && "bg-zinc-700",
				"flex items-center gap-3 px-4 py-3 text-lg hover:bg-zinc-700",
				props.clasName,
			)}
		>
			<Icon className="text-2xl" />
			{props.children}
		</Link>
	)
}

export default IconLink
