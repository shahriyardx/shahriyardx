import { Category, Post } from "@prisma/client"
import DashPageHeader from "components/dashboard/shared/PageHeader"
import Button from "components/shared/Button"
import Modal from "components/shared/Modal"
import Table from "components/shared/Table"
import Dashboard from "layouts/dashboard"
import Image from "next/future/image"
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
        <DashPageHeader title="Posts">
          <Link href={`${router.asPath}/create`}>
            <a className="button text-xs px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
              <BiPlus className="text-lg" /> Create Post
            </a>
          </Link>
        </DashPageHeader>

        <div className="mt-5">
          {posts && (
            <Table
              fields={["SL", "Title", "Category", "Image", "Action"]}
              values={[
                ...posts.map((post, index) => {
                  return [
                    index + 1,
                    post.title,
                    post.category.name,
                    post.thumbnail ? (
                      <Image
                        src={post.thumbnail}
                        width={40}
                        height={40}
                        alt={post.id}
                        className="rounded-full object-cover"
                      />
                    ) : null,
                    <div key={index} className="flex items-center gap-2">
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
                    </div>,
                  ]
                }),
              ]}
              noFieldText="No Posts"
            />
          )}
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
