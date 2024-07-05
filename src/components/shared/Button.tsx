import React from "react"

type Props = {
	children: string
	className: string
	[key: string]: string | CallableFunction | number | boolean | null | undefined
}

const Button = ({ children, className, ...props }: Props) => {
	return (
		<button
			className={`px-5 py-3 rounded-md active:scale-90 transition-all ${className}`}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
