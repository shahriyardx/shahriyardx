"use client"

import type { BlogPost } from "@/tools/blog"
import moment from "moment"
import React from "react"
import { BiCalendar, BiTime } from "react-icons/bi"

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
		<div
			className={`flex items-center gap-2 sm:gap-5 text-xs sm:text-sm flex-wrap ${className}`}
		>
			<span className="flex items-center gap-2">
				<BiCalendar />
				{moment(new Date(blog.createdAt)).fromNow()}
			</span>

			<span className="flex items-center gap-2">
				<BiTime />
				{moment.duration(time, "minute").humanize()} read
			</span>
		</div>
	)
}

export default BlogInfo
