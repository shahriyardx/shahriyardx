"use client"

import React from "react"
import { BiTime, BiUser, BiCalendar } from "react-icons/bi"
import moment from "moment"
import { BlogPost } from "@prisma/client"

const BlogInfo = ({
  blog,
  className,
}: {
  blog: BlogPost
  className?: string
}) => {
  const words = blog.content.trim().split(/\s+/).length
  const time = Math.ceil(words / 225)

  return (
    <div className={`flex items-center gap-5 text-sm ${className}`}>
      <span className="flex items-center gap-2">
        <BiUser />
        <span>shahriyardx</span>
      </span>

      <span className="flex items-center gap-2">
        <BiCalendar />
        {moment(new Date(Number(blog.time))).fromNow()}
      </span>

      <span className="flex items-center gap-2">
        <BiTime />
        {moment.duration(time, "minute").humanize()} read
      </span>
    </div>
  )
}

export default BlogInfo
