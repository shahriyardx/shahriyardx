import type React from "react"
import type { ComponentProps } from "react"
import type { IconType } from "react-icons"

type Props = ComponentProps<"a"> & {
	icon: IconType
	href: string
	children: React.ReactNode
	className?: string
}

const IconLink = ({ icon, href, children, className, ...props }: Props) => {
	const Icon = icon

	return (
		<a
			href={href}
			{...props}
			className={`flex items-center gap-2 ${className || ""} hover:text-accent`}
			target="_blank"
			rel="noreferrer"
		>
			<Icon /> {children}
		</a>
	)
}

export default IconLink
