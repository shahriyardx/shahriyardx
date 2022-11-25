import React from "react"

import { trpc } from "utils/trpc"

import Main from "components/layouts/Main"
import PostCard from "components/blog/PostCard"
import SEO from "components/shared/SEO"

const BlogPage = () => {
  const { data: posts } = trpc.post.all.useQuery()

  return (
    <Main>
      <SEO title="Blog" description="Go and read please..." />
      <div className="p-5 pb-20">
        <h1 className="text text-4xl font-bold mt-10 mb-10 text-center">
          Blog
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </Main>
  )
}

export default BlogPage
