import React from "react"
import { getAllBlogs } from "./utils"
import Main from "@/components/layouts/Main"
import Container from "@/components/shared/Container"
import Link from "next/link"
import BlogInfo from "./components/BlogInfo"
import Newsletter from "./components/Newsletter"

export const metadata = {
  title: "Blog",
}

export const dynamic = "force-dynamic"

const BlogPage = async () => {
  const allBlogs = await getAllBlogs({ next: { revalidate: 60 * 60 * 24 } })

  return (
    <Main>
      <Container className="px-5 py-10">
        <h1 className="text-5xl font-bold mb-5 text-white">Blogs</h1>

        <div className="grid grid-cols-1 lg:grid-cols-[auto,400px] gap-5">
          <div className="flex flex-col gap-5 order-2 lg:order-1">
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
          <Newsletter className="order-1 lg:order-2" />
        </div>
      </Container>
    </Main>
  )
}

export default BlogPage
