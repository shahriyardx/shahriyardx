import React from "react"
import { getAllBlogs } from "./utils"
import Main from "@/components/layouts/Main"
import Container from "@/components/shared/Container"
import Link from "next/link"
import BlogInfo from "./BlogInfo"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Blog",
}

const BlogPage = async () => {
  const init: RequestInit = {}
  if (process.env.NODE_ENV === "development") {
    init.cache = "no-store"
  } else {
    init.next = { revalidate: 60 }
  }

  const allBlogs = await getAllBlogs({ next: { revalidate: 60 } })

  return (
    <Main>
      <Container className="px-5 pt-10">
        <h1 className="text-5xl font-bold mb-5 text-white">Blogs</h1>

        <div className="flex flex-col gap-5">
          {allBlogs.map((blog) => {
            return (
              <Link href={`/blog/${blog.slug}`} key={blog.id}>
                <div className="p-5 border-2 rounded-md border-zinc-600">
                  <span className="text-2xl font-bold text-white">
                    {blog.title}
                  </span>
                  <p>{blog.description}</p>
                  <BlogInfo blog={blog} className="mt-5" />
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </Main>
  )
}

export default BlogPage
