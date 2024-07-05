import { cn } from "@/tools/tw"
import type { HTMLAttributes } from "react"

type Props = HTMLAttributes<HTMLDivElement> & { title: string }

const PageHeader = ({ children, title, className }: Props) => {
	return (
		<div className={cn("p-5", className)}>
			<h1 className="text-2xl font-bold">{title}</h1>
			{children}
		</div>
	)
}

export default PageHeader
