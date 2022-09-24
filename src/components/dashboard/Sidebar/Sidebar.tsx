import React from "react"
import Header from "./Header"
import IconLink from "./IconLink"

import { BiGridAlt, BiPoll, BiCategoryAlt } from "react-icons/bi"
import { useRouter } from "next/router"

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className="h-screen bg-black rounded-r-2xl">
      <Header />

      <div className="mt-10 flex flex-col px-5 gap-1">
        <IconLink text="Dashboard" icon={BiGridAlt} href="/dashboard" />
        <IconLink
          text="Post"
          icon={BiPoll}
          href="/dashboard/post"
          active={router.asPath.includes("/dashboard/post")}
        />
        <IconLink
          text="Category"
          icon={BiCategoryAlt}
          href="/dashboard/category"
        />
      </div>
    </aside>
  )
}

export default Sidebar
