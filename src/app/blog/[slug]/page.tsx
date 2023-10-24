import React from "react"
import Main from "@/components/layouts/Main"
import Container from "@/components/shared/Container"
import Markdown from "../../../components/markdown/Markdown"
import BlogInfo from "../BlogInfo"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogBySlug } from "../utils"

import "src/styles/atom-one-dark.css"

export const dynamic = "force-dynamic"

type Props = { params: { slug: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

  return (
    <Main>
      <Container className="p-5 py-10">
        <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
        <BlogInfo blog={blog} className="mt-3" />

        <div className="mt-10 prose prose-invert max-w-full">
          <Markdown content={blog.content} />
        </div>
      </Container>
    </Main>
  )
}

export default SingleBlogPage
