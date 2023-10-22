"use client"

import BlogForm, { blogSchema } from "@/app/blog/BlogForm"
import { BlogData } from "@/app/blog/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import z from "zod"

type Props = { data: BlogData }

const EditBlog = ({ data }: Props) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof blogSchema>>({ resolver: zodResolver(blogSchema) })

  useEffect(() => {
    if (data) {
      reset(data)
    }
  }, [data, reset])

  const submitHandler = (values: any) => {
    fetch(`/api/blog/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then(data => {
        if (data.success) {
            toast.success("blog updated")
        } else {
            toast.error(data.error)
        }
      })
      .catch(console.log)
  }
  return (
    <BlogForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={submitHandler}
    />
  )
}

export default EditBlog
