import { type Category } from "@prisma/client"
import DashPageHeader from "components/dashboard/shared/PageHeader"
import Button from "components/shared/Button"
import Modal from "components/shared/Modal"
import Table from "components/shared/Table"
import { useCategories } from "hooks/useCategories"
import Dashboard from "components/layouts/Dashboard"
import React, { useState } from "react"
import { toast } from "react-hot-toast"
import { trpc } from "utils/trpc"

const DashboardCategoryPage = () => {
  const [name, setName] = useState<string>("")
  const [action, setAction] = useState<"create" | "edit">("create")

  const [delCat, setDelCat] = useState<
    (Category & { Posts: Array<{ id: string }> }) | null
  >(null)
  const [delModalOpen, setDelModalOpen] = useState<boolean>(false)
  const { categories, refetch } = useCategories()

  const { mutate: addCategory, isLoading } = trpc.category.create.useMutation(
    {
      onSuccess: () => {
        refetch()
        toast.success("category created")
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const { mutate: delCategory } = trpc.category.delById.useMutation({
    onSuccess: () => {
      refetch()
      toast.success("category deleted")
      setDelModalOpen(false)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const { mutate: updateCategory } = trpc.category.update.useMutation({
    onSuccess: () => {
      refetch()
      toast.success("category updated")
      setAction("create")
      setDelCat(null)
      setName("")
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  return (
    <Dashboard>
      <div className="container mx-auto">
        <DashPageHeader title="Category" />

        <div className="mt-5 grid grid-cols-3 gap-5">
          <div className="col-span-2">
            {categories && (
              <Table
                fields={["SL", "Name", "Posts", "Action"]}
                values={[
                  ...categories.map((cat, index) => [
                    index + 1,
                    cat.name,
                    cat.Posts.length,
                    <div key={index} className="flex items-center gap-2">
                      <Button
                        onClick={() => {
                          setDelCat(cat)
                          setAction("edit")
                          setName(cat.name)
                        }}
                        className="bg-zinc-600 hover:bg-zinc-500 py-2 text-sm text-white"
                      >
                        Edit
                      </Button>
                      <Button
                        onClick={() => {
                          setDelModalOpen(true)
                          setDelCat(cat)
                        }}
                        className="bg-red-600 hover:bg-red-500 py-2 text-sm text-white"
                      >
                        Delete
                      </Button>
                    </div>,
                  ]),
                ]}
                noFieldText="No Category"
              />
            )}
          </div>

          <div>
            <label className="text-2xl font-bold block mb-2">
              {action === "create" ? "Add New" : "Edit"}
            </label>

            <div>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Name"
                className="w-full"
              />
              <div className="flex items-center mt-2 gap-2">
                <Button
                  className="bg-green-600 hover:bg-green-500 text-sm text-white"
                  onClick={() => {
                    action === "create"
                      ? addCategory({ name })
                      : updateCategory({ name, id: delCat?.id as string })
                  }}
                >
                  {action === "create" ? "Create" : "Update"}
                </Button>

                {action === "edit" && (
                  <Button
                    onClick={() => {
                      setDelCat(null)
                      setAction("create")
                      setName("")
                    }}
                    className="bg-red-600 hover:bg-red-500 text-sm text-white"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={`Delete ${delCat?.name} ?`}
        subtitle="This action is irreversible"
        description="Once a caetgory is deleted, it can't be recovered. All the post that belongs to this category will also be deleted! Still want to proceed?"
        open={delModalOpen}
        onClose={() => setDelModalOpen(false)}
        onConfirm={() => delCategory({ catId: delCat?.id as string })}
        buttonText="Delete"
        isLoading={isLoading}
      />
    </Dashboard>
  )
}

export default DashboardCategoryPage
