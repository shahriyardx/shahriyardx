import Image from "next/image"
import type React from "react"

type Props = React.JSX.IntrinsicElements["a"]

const Link = ({ href, children, ...props }: Props) => {
	const origin = new URL(href as string, process.env.NEXT_PUBLIC_URL).hostname

	return (
		<a {...props} href={href} className="m-0 p-0 inline-block">
			{/* <Image
				src={`https://icons.duckduckgo.com/ip3/${origin}.ico`}
				className="w-5 h-5 rounded-full m-0 p-0 inline-block mr-2"
				alt={origin}
				width={20}
				height={20}
			/> */}
			<span className="break-words">{children}</span>
		</a>
	)
}

export default Link
