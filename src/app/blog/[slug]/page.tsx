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
import { Metadata, ResolvingMetadata } from "next"

export const dynamic = "force-dynamic"

type Props = { params: { slug: string } }

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const blog = await getBlogBySlug(params.slug, {
    next: { revalidate: 60 * 60 * 24 },
  })

  if (!blog) {
    return {
      title: "Not found",
    }
  }

  return {
    title: blog.title,
    description: blog.description,
  }
}

const SingleBlogPage = async ({ params }: Props) => {
  const blog = await getBlogBySlug(params.slug, {
    next: { revalidate: 60 * 60 * 24 },
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
