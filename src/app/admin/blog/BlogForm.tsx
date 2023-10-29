"use client"

import { z } from "zod"
import React from "react"
import {
  FieldErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form"
import Container from "@/components/shared/Container"

export const blogSchema = z.object({
  title: z
    .string({ required_error: "title is required" })
    .min(1, { message: "title is required" }),
  thumbnail: z.string(),
  description: z
    .string({ required_error: "description is required" })
    .min(1, { message: "description is required" }),
  content: z
    .string({ required_error: "content is required" })
    .min(1, { message: "content is required" }),
  category: z
    .string({ required_error: "category is required" })
    .min(1, { message: "category is required" }),
})

export type BlogInputType = z.infer<typeof blogSchema>

type Props = {
  handleSubmit: UseFormHandleSubmit<BlogInputType>
  register: UseFormRegister<BlogInputType>
  errors: FieldErrors<BlogInputType>
  getValue: UseFormGetValues<BlogInputType>
  onSubmit: (values: BlogInputType) => void
}

const BlogForm = ({ handleSubmit, register, errors, onSubmit }: Props) => {
  return (
    <Container className="p-5">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              {...register("title")}
              className={`${errors.title && "border-red-400"}`}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              {...register("description")}
              className={`${errors.description && "border-red-400"}`}
            />
            {errors?.description && (
              <span>{errors?.description.message as string}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="text"
              {...register("thumbnail")}
              className={`${errors.thumbnail && "border-red-400"}`}
            />
            {errors?.thumbnail && (
              <span>{errors?.thumbnail.message as string}</span>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <input
              type="text"
              {...register("category")}
              className={`${errors.title && "border-red-400"}`}
            />
            {errors?.category && (
              <span>{errors?.category.message as string}</span>
            )}
          </div>
        </div>

        <div>
          <label>Blog Content</label>
          <textarea
            rows={10}
            className={`${errors.content && "border-red-400"} w-full`}
            {...register("content")}
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            className="px-7 py-3 bg-white text-black rounded-md tetx-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </Container>
  )
}

export default BlogForm
