import { type Category, type Post } from "@prisma/client"
import moment from "moment"
import Image from "next/image"
import Link from "next/link"
import React from "react"

type Props = {
  post: Post & { category: Category }
  index: number
}

const PostCard = ({ post, index }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-5 p-5 cursor-pointer ${
          index === 0 && "md:col-span-2"
        } bg-zinc-900 rounded-lg`}
      >
        <div className={`${!post.thumbnail && "hidden sm:block"}`}>
          {post.thumbnail ? (
            <Image
              src={post.thumbnail}
              alt="Image"
              width={index === 0 ? 576 : 348}
              height={index === 0 ? 324 : 216}
              className="w-full aspect-video h-full rounded-md overflow-hidden object-cover"
            />
          ) : (
            <div className="text-8xl font-bold text-zinc-700 uppercase grid place-items-center h-full">
              {post.title
                .split(" ")
                .map((x) => x[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <span className="text-xs font-bold text-zinc-600">
            {post.category.name}
          </span>
          <h3
            className={`font-bold font-montserrat mt-2 ${
              index === 0 ? "md:text-3xl text-xl" : "text-xl"
            }`}
          >
            {post.title}
          </h3>

          <p
            className={`text-zinc-500 font-bold font-montserrat mb-auto ${
              index === 0 ? "mt-2 md:mt-3 text-xs md:text-base" : "text-xs mt-2"
            }`}
          >
            {post.meta_description}
          </p>

          <div className="flex items-center gap-3 mt-5">
            <Image
              src="/images/me.jpg"
              width={index === 0 ? 50 : 35}
              height={index === 0 ? 50 : 35}
              className="rounded-full"
              alt={"profile"}
            />

            <div className="flex flex-col font-montserrat">
              <span
                className={`font-bold text-zinc-400 ${
                  index === 0 ? "md:text-base text-sm" : "text-sm"
                }`}
              >
                Shahriyar
              </span>
              <span
                className={`text-zinc-500 ${
                  index === 0 ? "md:text-sm text-xs" : "text-xs"
                }`}
              >
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
