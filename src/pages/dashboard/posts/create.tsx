import React, { useState } from "react"
import Link from "next/link"

import Dashboard from "layouts/dashboard"
import { BiChevronLeft } from "react-icons/bi"
import Flex from "components/shared/Flex"
import LabeledInput from "components/dashboard/posts/LabeledInput"
import TextEditor from "components/dashboard/posts/TextEditor/TextEditor"

const DashboardPostCreate = () => {
  const [value, setValue] = useState<string | undefined>(undefined)
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
      </div>
    </Dashboard>
  )
}

export default DashboardPostCreate
