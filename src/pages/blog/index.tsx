import React from "react"

import { trpc } from "utils/trpc"

import Main from "layouts/Main"
import PostCard from "components/blog/PostCard"
import SEO from "components/shared/SEO"

const BlogPage = () => {
  const { data: posts } = trpc.useQuery(["post.all"])

  return (
    <Main>
      <SEO title="Blog" description="Go and read please..." />
      <div className="py-5 px-10">
        <div className="grid grid-cols-2 gap-5 max-w-6xl mx-auto">
          {posts?.map((post, index) => (
            <PostCard key={index} post={post} index={index} />
          ))}
        </div>
      </div>
    </Main>
  )
}

export default BlogPage
