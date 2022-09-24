import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import Link from "next/link"

import Dashboard from "layouts/dashboard"
import { BiCamera, BiChevronLeft, BiLoaderAlt, BiX } from "react-icons/bi"
import Flex from "components/shared/Flex"
import LabeledInput from "components/dashboard/posts/LabeledInput"
import TextEditor from "components/dashboard/posts/TextEditor/TextEditor"
import Image from "next/image"
import { useCategories } from "hooks/useCategories"
import { toast } from "react-hot-toast"
import { trpc } from "utils/trpc"
import DashPageHeader from "components/dashboard/shared/PageHeader"
import { uploadImage } from "utils/uploader"

const DashboardPostCreate = () => {
  const [title, setTitle] = useState("Very cool title")
  const [meta_description, set_meta_description] = useState("")
  const [slug, setSlug] = useState("")
  const [categoryId, setCategory] = useState("")
  const [content, setContent] = useState<string | undefined>(undefined)
  const [thumbnail, setThumbnail] = useState<string | null>(null)
  const [uploading, setUploading] = useState<boolean>(false)

  const fileRef = useRef<HTMLInputElement>(null)

  const { categories } = useCategories()

  const { mutate, isLoading } = trpc.useMutation(["post.create"], {
    onSuccess: () => {
      setTitle("")
      set_meta_description("")
      fileRef.current ? (fileRef.current.value = "") : null

      setContent("")
      setThumbnail("")
      setCategory("")

      toast.success("post created")
    },
    onError: () => {
      toast.error("something went wrong")
    },
  })

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          setThumbnail(reader.result?.toString() as string)
        }
      }
    }
  }

  const addPost = async () => {
    if (!categoryId) {
      return toast.error("please select a category")
    }

    if (!content) {
      return toast.error("please type content")
    }

    let url = null
    if (thumbnail && fileRef.current) {
      if (fileRef.current.files) {
        url = await uploadImage({
          path: "possts",
          file: fileRef.current.files[0] as File,
          onStart: () => setUploading(true),
          onFinish: () => setUploading(false),
        })

        if (!url) {
          return toast.error("Something went wrong while uploading the image")
        }

        setThumbnail(url)
      }
    }

    const postData = {
      title,
      slug,
      meta_description,
      thumbnail: url ? url : undefined,
      content: content,
      categoryId,
    }

    mutate(postData)
  }

  useEffect(() => {
    setSlug(
      title
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
    )
  }, [title])

  return (
    <Dashboard>
      <DashPageHeader title="Posts">
        <Link href="/dashboard/post">
          <a className="button text-xs px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md">
            <BiChevronLeft className="text-lg" /> Posts
          </a>
        </Link>
      </DashPageHeader>

      <div className="container grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
          <Flex column className="gap-5">
            <div className="grid grid-cols-3 gap-5">
              <div className="col-span-2">
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-1" htmlFor="title">
                    Title
                    <span className="text-sm text-red-500">*</span>
                  </label>

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    id="title"
                    type="text"
                    placeholder="Title"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1" htmlFor="Category">
                  Category
                  <span className="text-sm text-red-500">*</span>
                </label>

                <select
                  value={categoryId}
                  onChange={(e) => setCategory(e.target.value)}
                  id="Category"
                >
                  <option value="">Select Category</option>
                  {categories?.map((cat) => (
                    <option value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-span-2">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1" htmlFor="Subtitle">
                  Subtitle
                  <span className="text-sm text-red-500">*</span>
                </label>

                <textarea
                  value={meta_description}
                  onChange={(e) => set_meta_description(e.target.value)}
                  placeholder="This information can blow your mind..."
                />
              </div>
            </div>

            <LabeledInput id="content" title="Content" required>
              <TextEditor value={content} setValue={setContent} />
            </LabeledInput>
          </Flex>
        </div>

        <div>
          <label className="mb-2 block">Thumbnail</label>
          <input
            type="file"
            className="hidden"
            ref={fileRef}
            onChange={handleImageSelect}
            accept="image/png, image/jpeg, image/jpg"
          />
          <div className="aspect-video rounded-md overflow-hidden border-2 border-zinc-700 relative isolate">
            {thumbnail && (
              <div
                onClick={() => {
                  setThumbnail(null)
                  fileRef.current ? (fileRef.current.value = "") : null
                }}
                className="absolute top-5 right-5 bg-red-500 w-6 h-6 z-10 grid place-items-center rounded-full cursor-pointer"
              >
                <BiX className="text-white text-2xl z-10 " />
              </div>
            )}

            <div
              onClick={() => fileRef.current?.click()}
              className={`
                  w-[60px] h-[60px] 
                  grid place-items-center group cursor-pointer rounded-full
                  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                  ${
                    thumbnail
                      ? "bg-zinc-900 hover:bg-zinc-800"
                      : "hover:bg-zinc-700/25"
                  }
                `}
            >
              <BiCamera className="text-4xl text-zinc-700 group-hover:text-zinc-600" />
            </div>

            {thumbnail && (
              <Image
                src={thumbnail}
                width={192}
                height={108}
                alt="Thumbnail"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>

          <p className="my-3 text-zinc-500">
            <b>Slug: </b>
            {slug}
          </p>

          <button
            onClick={addPost}
            disabled={isLoading}
            className="button px-5 py-3 bg-black rounded-md flex items-center gap-2"
          >
            {isLoading && <BiLoaderAlt className="text-lg animate-spin" />}
            <span>
              {uploading
                ? "Uploading..."
                : isLoading
                ? "Creating..."
                : "Create Post"}
            </span>
          </button>
        </div>
      </div>
    </Dashboard>
  )
}

export default DashboardPostCreate
