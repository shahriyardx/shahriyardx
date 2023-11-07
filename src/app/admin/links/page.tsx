import React from "react"
import { prismaGetAllLinks } from "../../blog/utils"
import Container from "@/components/shared/Container"
import PageHeader from "../components/PageHeader"
import { revalidatePath } from "next/cache"
import { prisma } from "@/tools/db"
import CopyButton from "./CopyButton"

export const dynamic = "force-dynamic"

const BlogAdmin = async () => {
  const links = await prismaGetAllLinks()

  const addLink = async (e: FormData) => {
    "use server"

    let text = e.get("text")?.toString()
    if (!text) {
      text = ""
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      const charactersLength = characters.length
      let counter = 0
      while (counter < 5) {
        text += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
      }
    }

    await prisma.link.create({
      data: {
        text,
        url: e.get("link") as string,
      },
    })

    revalidatePath("/admin/links")
  }

  const deleteLink = async (e: FormData) => {
    "use server"

    const id = e.get("id") as string

    await prisma.link.delete({
      where: {
        id,
      },
    })

    revalidatePath("/admin/links")
  }

  return (
    <div>
      <Container>
        <PageHeader
          title="Links"
          className="flex items-center justify-between px-0"
        ></PageHeader>

        <div>
          <form action={addLink}>
            <div className="flex gap-3">
              <div className="grid grid-cols-3 gap-2 w-full">
                <input name="text" type="text" placeholder="random" />
                <input
                  name="link"
                  type="text"
                  placeholder="link"
                  className="col-span-2"
                />
              </div>

              <button className="px-3 py-2 bg-zinc-900 text-zinc-300 rounded-md">
                Add
              </button>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left px-5 py-3 bg-zinc-950 rounded-tl-md">
                  SL.
                </th>
                <th className="text-left px-5 py-3 bg-zinc-950">Text</th>
                <th className="text-left px-5 py-3 bg-zinc-950">URL</th>
                <th className="text-left px-5 py-3 bg-zinc-950">Views</th>
                <th className="text-left px-5 py-3 bg-zinc-950 rounded-tr-md">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {links.map((link, index) => (
                <tr key={link.id} className="even:bg-zinc-700">
                  <td className="px-5 py-3">{index + 1}</td>
                  <td className="px-5 py-3">{link.text}</td>
                  <td className="px-5 py-3">{link.url}</td>
                  <td className="px-5 py-3">{link.visited}</td>
                  <td className="px-5 py-3 flex flex-wrap gap-2">
                    <form action={deleteLink}>
                      <input type="hidden" name="id" value={link.id} />
                      <button className="px-3 py-2 text-sm bg-red-500 text-white rounded-md">
                        Delete
                      </button>
                    </form>

                    <CopyButton text={link.text} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

export default BlogAdmin
