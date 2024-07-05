import { cn } from "@/tools/tw"
import type { LucideProps } from "lucide-react"
import dynamicIconImports from "lucide-react/dynamicIconImports"
import dynamic from "next/dynamic"

interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports
}

const Icon = ({ name, className, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name])

	return <LucideIcon {...props} className={cn("inline-block", className)} />
}

export default Icon
