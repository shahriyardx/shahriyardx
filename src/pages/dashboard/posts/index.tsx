import { Category, Post } from "@prisma/client"
import Button from "components/shared/Button"
import Modal from "components/shared/Modal"
import Dashboard from "layouts/dashboard"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState } from "react"
import { toast } from "react-hot-toast"
import { BiPlus } from "react-icons/bi"
import { trpc } from "utils/trpc"

const DashboardPostsPage = () => {
  const router = useRouter()

  const [delPost, setDelPost] = useState<
    (Post & { category: Category }) | null
  >(null)
  const [delModalOpen, setDelModalOpen] = useState<boolean>(false)
  const { data: posts, refetch } = trpc.useQuery(["post.all"])
  const { mutate: deletePost, isLoading } = trpc.useMutation(["post.delById"], {
    onSuccess: () => {
      refetch()
      setDelModalOpen(false)
      toast.success("post deleted")
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return (
    <Dashboard>
      <div className="h-[200vh]">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Posts</h1>

          <Link href="/dashboard/posts/create">
            <a className="flex items-center gap-1 text-xs px-3 py-2 bg-indigo-500 text-white rounded-md">
              <BiPlus className="text-lg" /> Create Post
            </a>
          </Link>
        </div>

        <div className="mt-5">
          <table className="w-full border-2 border-zinc-800">
            <thead className="bg-zinc-800 text-zinc-400">
              <tr>
                <th className="px-5 py-3 text-left">SL</th>
                <th className="px-5 py-3 text-left">Title</th>
                <th className="px-5 py-3 text-left">Category</th>
                <th className="px-5 py-3 text-left">Image</th>
                <th className="px-5 py-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {posts?.map((post, index) => (
                <tr>
                  <td className="px-5 py-2">{index + 1}</td>
                  <td className="px-5 py-2">{post.title}</td>
                  <td className="px-5 py-2">{post.category.name}</td>
                  <td className="px-5 py-2">
                    {post.thumbnail && (
                      <Image
                        src={post.thumbnail}
                        width={40}
                        height={40}
                        alt={post.id}
                        objectFit="cover"
                        className="rounded-full"
                      />
                    )}
                  </td>
                  <td className="px-5 py-2 flex items-center gap-2">
                    <Link href={`${router.asPath}/${post.id}`}>
                      <a className="button px-3 py-2 bg-zinc-700 hover:bg-zinc-600">
                        Edit
                      </a>
                    </Link>

                    <Button
                      onClick={() => {
                        setDelPost(post)
                        setDelModalOpen(true)
                      }}
                      className="bg-red-700 hover:bg-red-600 px-3 py-2"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
              {!Boolean(posts?.length) && (
                <tr>
                  <td colSpan={5} className="text-center py-3">
                    <p className="text-2xl font-bold text-zinc-400">No Posts</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        title={`Delete ${delPost?.title} ?`}
        subtitle="This action is irreversible"
        description="Once a post is deleted, it can't be recovered. Still want to proceed?"
        open={delModalOpen}
        onClose={() => setDelModalOpen(false)}
        onConfirm={() => deletePost({ postId: delPost?.id as string })}
        buttonText="Delete"
        isLoading={isLoading}
      />
    </Dashboard>
  )
}

export default DashboardPostsPage
