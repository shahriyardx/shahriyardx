"use client"

import React from "react"
import IconLink from "./IconLink"
import {
  BiBookContent,
  BiCubeAlt,
  BiHome,
  BiLink,
  BiMailSend,
} from "react-icons/bi"

const Sidebar = () => {
  return (
    <div className="h-screen bg-zinc-900">
      <div className="p-5 text-center">
        <h4 className="text-4xl font-bold">Admin</h4>
      </div>
      <div className="flex flex-col">
        <IconLink href="/" Icon={BiHome}>
          Home
        </IconLink>
        <IconLink href="/admin" Icon={BiCubeAlt}>
          Dashboard
        </IconLink>
        <IconLink href="/admin/blog" Icon={BiBookContent}>
          Blogs
        </IconLink>
        <IconLink href="/admin/links" Icon={BiLink}>
          Links
        </IconLink>
        <IconLink href="/admin/email" Icon={BiMailSend}>
          Email
        </IconLink>
      </div>
    </div>
  )
}

export default Sidebar
