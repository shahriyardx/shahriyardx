import type { ComponentProps } from "react"

interface Props extends ComponentProps<"pre"> {
	language: string
}

const CodeBlock = ({ children, language, className, ...props }: Props) => {
	return (
		<pre {...props} className={`${className} relative !p-5`}>
			<span className="absolute top-2 right-2 text-zinc-600">{language}</span>
			{children}
		</pre>
	)
}

export default CodeBlock
