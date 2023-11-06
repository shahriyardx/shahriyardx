"use client"

import WithSession from "@/components/shared/WithSession"
import { api } from "@/tools/url"
import { BlogPost, Comment } from "@prisma/client"
import { signIn, useSession } from "next-auth/react"
import { usePathname } from "next/navigation"
import React, { SyntheticEvent, useRef } from "react"
import toast from "react-hot-toast"
import { useQuery } from "@tanstack/react-query"
import WithQueryClient from "@/components/shared/WithQueryClient"

const BlogComment = ({ blog }: { blog: BlogPost }) => {
  const pathname = usePathname()
  const { data: session } = useSession()
  const formref = useRef<HTMLFormElement>(null)

  const { data: commentsReponse, refetch } = useQuery<{ data: Comment[] }>({
    queryKey: ["comments", blog.id],
    queryFn: () =>
      api.get(`/api/blog/public/${blog.slug}/comment`, {
        // headers: {
        //   "Cache-Control": "no-store",
        //   Pragma: "no-cache",
        //   Expires: "0",
        // },
      }),
    initialData: { data: [] },
  })

  const comments = commentsReponse?.data

  const addComment = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const comment = form.get("comment")?.toString().trim()

    if (!comment) return toast.error("Please write a comment")
    const { data } = await api.post(`/api/blog/${blog.id}/comment`, { comment })

    if (data.success) {
      toast.success("Comment added successfully")
      formref.current?.reset()
      refetch()
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Write your comment</h2>
      {session ? (
        <form ref={formref} onSubmit={addComment}>
          <textarea name="comment" rows={5} className="w-full" />
          <button className="px-3 py-2 bg-zinc-900 hover:bg-zinc-700 text-zinc-200 rounded-md">
            Comment
          </button>
        </form>
      ) : (
        <div>
          <h4>
            <span
              className="text-indigo-500 cursor-pointer underline"
              onClick={() => signIn("github", { callbackUrl: pathname })}
            >
              Login
            </span>{" "}
            to comment
          </h4>
        </div>
      )}

      <div className="flex flex-col gap-5 mt-5">
        {comments.map((comment) => (
          <div key={comment.id}>
            <h2 className="text-lg font-bold">{comment.username}</h2>
            <p className="text-zinc-400">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WithQueryClient(WithSession(BlogComment))
