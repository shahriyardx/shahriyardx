"use client"

import { MDXRemote, type MDXRemoteSerializeResult } from "next-mdx-remote"
import React, { type ComponentProps } from "react"

import CodeBlock from "../CustomComponents/CodeBlock"
import { H1, H2 } from "../CustomComponents/Headings"
import Icon from "../CustomComponents/Icon"
import Link from "../CustomComponents/Link"
import Repo from "../CustomComponents/Repo"
// Custom components
import YouTube from "../CustomComponents/Youtube"

const MarkdownRenderer = ({ source }: { source: MDXRemoteSerializeResult }) => {
	return (
		<MDXRemote
			{...source}
			components={{
				YouTube,
				Youtube: YouTube,
				Repo,
				h1: H1,
				h2: H2,
				a: Link,
				Icon: Icon,
				pre: ({ children, ...props }: ComponentProps<"pre">) => {
					if (!children || !React.isValidElement(children)) return <code />
					const language = children.props.className.replace(/language-/, "")

					return (
						<CodeBlock language={language} {...props}>
							{children}
						</CodeBlock>
					)
				},
			}}
		/>
	)
}

export default MarkdownRenderer
