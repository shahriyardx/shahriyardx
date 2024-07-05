import rehypeShiki, { type RehypeShikiOptions } from "@shikijs/rehype"
import {
	transformerNotationDiff,
	transformerNotationErrorLevel,
	transformerNotationFocus,
	transformerNotationHighlight,
	transformerNotationWordHighlight,
} from "@shikijs/transformers"
import React from "react"
import rehypeSlug from "rehype-slug"
import remarkCodeTitle from "remark-code-title"
import remarkGfm from "remark-gfm"

import { serialize } from "next-mdx-remote/serialize"

import MarkdownRenderer from "./MarkdownRenderer"

const Markdown = async ({ content }: { content: string }) => {
	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkGfm, remarkCodeTitle],
			rehypePlugins: [
				[
					rehypeShiki,
					{
						theme: "one-dark-pro",
						addLanguageClass: true,
						transformers: [
							transformerNotationDiff(),
							transformerNotationHighlight(),
							transformerNotationWordHighlight(),
							transformerNotationFocus(),
							transformerNotationErrorLevel(),
						],
					} as RehypeShikiOptions,
				],
				rehypeSlug,
			],
		},
	})
	return <MarkdownRenderer source={mdxSource} />
}

export default Markdown
