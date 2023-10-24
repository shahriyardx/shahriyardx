"use client"

import z from "zod"
import React from "react"
import BlogForm, { blogSchema } from "../BlogForm"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"
import PageHeader from "../../components/PageHeader"

const CreateBlog = () => {
  const {
    reset,
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof blogSchema>>({ resolver: zodResolver(blogSchema) })

  const submitHandler = (values: any) => {
    fetch(`/api/blog/create`, {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          reset()
          toast.success("blog created")
        }
      })
      .catch(console.log)
  }

  return (
    <div>
      <PageHeader title="Create Blog" />
      <BlogForm
        register={register}
        handleSubmit={handleSubmit}
        errors={errors}
        onSubmit={submitHandler}
        getValue={getValues}
      />
    </div>
  )
}

export default CreateBlog
