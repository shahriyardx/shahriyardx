import Link from "next/link"
import type { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLHeadElement>

export const H1 = ({ id, ...props }: Props) => {
	return (
		<Link href={`#${id}`} className="no-underline hover:underline">
			<h1 {...props} id={id}>
				{props.children}
			</h1>
		</Link>
	)
}

export const H2 = ({ id, ...props }: Props) => {
	return (
		<Link href={`#${id}`} className="no-underline hover:underline">
			<h2 {...props} id={id}>
				{props.children}
			</h2>
		</Link>
	)
};
