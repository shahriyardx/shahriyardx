"use client"

import z from "zod"
import React from "react"
import Container from "@/components/shared/Container"
import PageHeader from "../components/PageHeader"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast from "react-hot-toast"

const emailSchema = z.object({
  from: z
    .string({ required_error: "from is required" })
    .min(1, { message: "from is required" }),
  to: z.string().default("mdshahriyaralam552@gmail.com"),
  subject: z
    .string({ required_error: "subject is required" })
    .default("No Subject"),
  content: z
    .string({ required_error: "content is required" })
    .min(1, { message: "content is required" }),
  mode: z.string(),
})

export type Email = z.infer<typeof emailSchema>

const BlogAdmin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Email>({ resolver: zodResolver(emailSchema) })

  const sendEmail = (value: Email) => {
    fetch(`/api/email`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(value),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          toast.success("Email sent successfully")
        } else {
          toast.error("Email sent failed")
          console.log(data)
        }
      })
  }

  return (
    <div>
      <Container>
        <PageHeader
          title="Send Email"
          className="flex items-center justify-between px-0"
        ></PageHeader>
        <div>
          <form
            onSubmit={handleSubmit(sendEmail)}
            className="flex flex-col gap-5"
          >
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col">
                <label htmlFor="title">From</label>
                <input
                  type="text"
                  {...register("from")}
                  defaultValue={"contact"}
                  className={`${errors.from && "border-red-400"}`}
                />
                {errors?.from && <span>{errors?.from.message as string}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="to">To</label>
                <input
                  type="text"
                  {...register("to")}
                  className={`${errors.to && "border-red-400"}`}
                />
                {errors?.to && <span>{errors?.to.message as string}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  {...register("subject")}
                  className={`${errors.subject && "border-red-400"}`}
                />
                {errors?.subject && (
                  <span>{errors?.subject.message as string}</span>
                )}
              </div>
            </div>

            <div>
              <label>Email Content</label>
              <textarea
                rows={10}
                className={`${errors.content && "border-red-400"} w-full`}
                {...register("content")}
              />
            </div>

            <div className="flex gap-2">
              <select {...register("mode")}>
                <option value="test">Test</option>
                <option value="production">Production</option>
              </select>
              <button
                type="submit"
                className="px-7 py-3 bg-white text-black rounded-md tetx-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default BlogAdmin
