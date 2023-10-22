import React from "react"
import { prismaGetBlogById } from "@/app/blog/utils"
import EditBlog from "./editor"

const EditBlogPage = async ({ params }: { params: { blogId: string } }) => {
  const blogData = await prismaGetBlogById(params.blogId)

  return <div>{blogData && <EditBlog data={blogData} />}</div>
}

export default EditBlogPage
