import React from "react"
import { prismaGetAllBlogs } from "../../blog/utils"
import Container from "@/components/shared/Container"
import BlogActions from "./BlogActions"
import Link from "next/link"
import { BiPlus } from "react-icons/bi"
import PageHeader from "../components/PageHeader"

export const dynamic = "force-dynamic"

const BlogAdmin = async () => {
  const blogs = await prismaGetAllBlogs()

  return (
    <div>
      <Container>
        <PageHeader title="Blogs" className="flex items-center justify-between">
          <Link href="/admin/blog/create" className="flex items-center gap-2">
            <BiPlus className="text-2xl" />
            Create new
          </Link>
        </PageHeader>
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

export default BlogAdmin
