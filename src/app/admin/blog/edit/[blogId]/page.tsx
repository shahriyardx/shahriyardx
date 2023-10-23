import React from "react"
import { prismaGetBlogById } from "@/app/blog/utils"
import EditBlog from "./editor"
import PageHeader from "@/app/admin/components/PageHeader"

const EditBlogPage = async ({ params }: { params: { blogId: string } }) => {
  const blogData = await prismaGetBlogById(params.blogId)

  return (
    <div>
      <PageHeader title="Edit Blog" />
      {blogData && <EditBlog data={blogData} />}
    </div>
  )
}

export default EditBlogPage
