import React from "react"
import { getAllBlogs } from "../utils"
import Container from "@/components/shared/Container"
import Link from "next/link"
import BlogActions from "../BlogActions"

const BlogCreate = async () => {
  const blogs = await getAllBlogs({ cache: 'no-store' })

  return (
    <div>
      <Container>
        <div className="flex flex-col gap-5 p-5">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <h1 className="text-2xl text-white">{blog.title}</h1>
              <p className="text-zinc-400">{blog.description}</p>

              <BlogActions blog={blog} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default BlogCreate
