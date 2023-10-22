import z from "zod"
import React, { useEffect, useState } from "react"
import BlogForm, { blogSchema } from "../../../BlogForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from "next/navigation"
import { getBlogById } from "@/app/blog/utils"
import EditBlog from "./editor"

const EditBlogPage = async ({ params }: { params: { blogId: string } }) => {
  const blogData = await getBlogById(params.blogId, { cache: "no-store" })

  return <div>{blogData && <EditBlog data={blogData} />}</div>
}

export default EditBlogPage
