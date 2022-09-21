import React from "react"
import Header from "./Header"
import IconLink from "./IconLink"

import { BiGridAlt, BiPoll } from "react-icons/bi"

const Sidebar = () => {
  return (
    <aside className="h-screen bg-black rounded-r-2xl">
      <Header />

      <div className="mt-10 flex flex-col px-5 gap-1">
        <IconLink text="Dashboard" icon={BiGridAlt} href="/dashboard" />
        <IconLink
          text="Posts"
          icon={BiPoll}
          href="/dashboard/posts"
          iconClassname="hover:animate-spin"
        />
      </div>
    </aside>
  )
}

export default Sidebar
