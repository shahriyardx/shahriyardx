import React from "react"
import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"
import remarkCodeTitle from "remark-code-title"
import remarkGfm from "remark-gfm"

import { serialize } from "next-mdx-remote/serialize"

// Languages
import langNginx from "highlight.js/lib/languages/nginx"
import langpy from "highlight.js/lib/languages/python"
import langBash from "highlight.js/lib/languages/bash"
import langJs from "highlight.js/lib/languages/javascript"
import langCss from "highlight.js/lib/languages/css"

import MarkdownRenderer from "./MarkdownRenderer"

const Markdown = async ({ content }: { content: string }) => {
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkCodeTitle, remarkGfm],
      rehypePlugins: [
        [
          // @ts-expect-error("unknown")
          rehypeHighlight,
          {
            languages: {
              nginx: langNginx,
              js: langJs,
              sh: langBash,
              bash: langBash,
              py: langpy,
              css: langCss,
            },
          },
        ],
        rehypeSlug,
      ],
    },
  })
  return <MarkdownRenderer source={mdxSource} />
}

export default Markdown
