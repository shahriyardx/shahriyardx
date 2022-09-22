import React, { ChangeEvent, useRef, useState } from "react"
import Link from "next/link"

import Dashboard from "layouts/dashboard"
import { BiCamera, BiChevronLeft, BiX } from "react-icons/bi"
import Flex from "components/shared/Flex"
import LabeledInput from "components/dashboard/posts/LabeledInput"
import TextEditor from "components/dashboard/posts/TextEditor/TextEditor"
import Image from "next/image"

const DashboardPostCreate = () => {
  const [title, setTitle] = useState("")
  const [category, setCategory] = useState("")
  const [value, setValue] = useState<string | undefined>(undefined)

  const [image, setImage] = useState<string | ArrayBuffer | null>("")
  const fileRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("Change")
    if (e.target.files) {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = (e) => {
          setImage(reader.result)
        }
      }
    }
  }

  return (
    <Dashboard>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Create Post</h1>

        <Link href="/dashboard/posts">
          <a className="flex items-center gap-1 text-xs px-3 py-2 bg-indigo-500 text-white rounded-md">
            <BiChevronLeft className="text-lg" /> Posts
          </a>
        </Link>
      </div>

      <div className="container grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2">
          <form>
            <Flex column className="gap-5">
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                  <LabeledInput
                    id="title"
                    type="text"
                    title="Title"
                    placeholder="How Shahriyar bought google!"
                    required
                  />
                </div>

                <LabeledInput
                  id="category"
                  title="Category"
                  placeholder="Title"
                  required
                >
                  <select>
                    <option value="test">Test</option>
                  </select>
                </LabeledInput>
              </div>

              <LabeledInput
                id="meta_description"
                title="Meta Description"
                required
              >
                <textarea placeholder="This information can blow your mind..." />
              </LabeledInput>

              <LabeledInput id="content" title="Content" required>
                <TextEditor value={value} setValue={setValue} />
              </LabeledInput>
            </Flex>
          </form>
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
            {image && (
              <div
                onClick={() => {
                  setImage(null)
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
                    image
                      ? "bg-zinc-900 hover:bg-zinc-800"
                      : "hover:bg-zinc-700/25"
                  }
                `}
            >
              <BiCamera className="text-4xl text-zinc-700 group-hover:text-zinc-600" />
            </div>

            {image && (
              <Image
                src={image.toString()}
                width={192}
                height={108}
                alt="Thumbnail"
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
        </div>
      </div>
    </Dashboard>
  )
}

export default DashboardPostCreate
