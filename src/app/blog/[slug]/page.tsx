import React from "react"
import Main from "@/components/layouts/Main"
import Container from "@/components/shared/Container"
import Markdown from "./Markdown"
import BlogInfo from "../BlogInfo"
import { getBlogBySlug } from "../utils"
import { notFound } from "next/navigation"
import { serialize } from "next-mdx-remote/serialize"
import rehypeHighlight from "rehype-highlight"

// Languages
import langNginx from "highlight.js/lib/languages/nginx"
import langpy from "highlight.js/lib/languages/python"
import langBash from "highlight.js/lib/languages/bash"
import langJs from "highlight.js/lib/languages/javascript"
import langCss from "highlight.js/lib/languages/css"

import "src/styles/atom-one-dark.css"

export const dynamic = "force-dynamic"

const SingleBlogPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogBySlug(params.slug, {
    cache: process.env.NODE_ENV === "development" ? "no-store" : undefined,
  })

  if (!blog) return notFound()
  const mdxSource = await serialize(blog.content, {
    mdxOptions: {
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
      ],
    },
  })

  return (
    <Main>
      <Container className="p-5 pt-10">
        <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
        <BlogInfo blog={blog} className="mt-3" />

        <div className="mt-10 prose prose-invert max-w-full">
          <Markdown source={mdxSource} />
        </div>
      </Container>
    </Main>
  )
}

export default SingleBlogPage
