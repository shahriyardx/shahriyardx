import Dashboard from "layouts/dashboard"
import Link from "next/link"
import React from "react"
import { BiPlus } from "react-icons/bi"

type Props = {}

const DashboardPostsPage = (props: Props) => {
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
      </div>
    </Dashboard>
  )
}

export default DashboardPostsPage
