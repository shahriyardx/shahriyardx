"use client"

import React from "react"
import { BlogData } from "./utils"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

const BlogActions = ({ blog }: { blog: BlogData }) => {
  const router = useRouter()
  const deleteBlog = () => {
    const agree = confirm("Are you sure?")
    if (!agree) return

    fetch(`/api/blog/${blog.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        if (data.success) {
          toast.success("blog deleted")
          router.refresh()
        }
      })
  }
  return (
    <div className="flex items-center gap-5">
      <Link href={`/blog/admin/edit/${blog.id}`} key={blog.id}>
        Edit
      </Link>
      <button onClick={deleteBlog}>Delete</button>
    </div>
  )
}

export default BlogActions
