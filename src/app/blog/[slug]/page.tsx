import React from "react"
import Main from "@/components/layouts/Main"
import Container from "@/components/shared/Container"
import Markdown from "./markdown/Markdown"
import BlogInfo from "../components/BlogInfo"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { getBlogBySlug } from "../utils"
import { getServerSession } from "next-auth"

import "src/styles/atom-one-dark.css"
import Link from "next/link"
import Comment from "./Comment/Comment"

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

  const words = blog.content.trim().split(/\s+/).length / 225

  const base = process.env.NEXT_PUBLIC_BASE_URL || `http://localhost:3000`

  const query = new URLSearchParams()
  query.set("title", blog.title)
  query.set("description", blog.description)
  query.set("read", words.toString())
  query.set("time", blog.time.toString())

  const ogImage = new URL(`/api/blog/og?${query.toString()}`, base).toString()

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      images: [{ url: ogImage, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      images: [{ url: ogImage, width: 1200, height: 630, type: "image/png" }],
    },
  }
}

const SingleBlogPage = async ({ params }: Props) => {
  const session = await getServerSession()
  const blog = await getBlogBySlug(params.slug, {
    next: { revalidate: 60 * 60 * 24 },
  })

  if (!blog) return notFound()

  return (
    <Main>
      <Container className="p-5 py-10">
        <h1 className="text-4xl font-bold text-white">{blog.title}</h1>
        <div className="flex items-center gap-5 mt-3">
          <BlogInfo blog={blog} />
          {session && <Link href={`/admin/blog/edit/${blog.id}`}>Edit</Link>}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[auto,300px] gap-5 mt-10">
          <div className="prose prose-invert prose-green max-w-full">
            <Markdown content={blog.content} />
          </div>
          <Comment blog={blog} />
        </div>
      </Container>
    </Main>
  )
}

export default SingleBlogPage
