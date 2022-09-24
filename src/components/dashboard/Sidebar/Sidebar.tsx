import React from "react"
import Header from "./Header"
import IconLink from "./IconLink"

import { BiGridAlt, BiPoll } from "react-icons/bi"
import { useRouter } from "next/router"

const Sidebar = () => {
  const router = useRouter()

  return (
    <aside className="h-screen bg-black rounded-r-2xl">
      <Header />

      <div className="mt-10 flex flex-col px-5 gap-1">
        <IconLink text="Dashboard" icon={BiGridAlt} href="/dashboard" />
        <IconLink
          text="Posts"
          icon={BiPoll}
          href="/dashboard/posts"
          active={router.asPath.includes("/dashboard/posts")}
        />
      </div>
    </aside>
  )
}

export default Sidebar
