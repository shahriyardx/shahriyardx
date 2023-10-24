"use client"

import React from "react"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

// Custom components
import YouTube from "../../app/blog/[slug]/CustomComponents/Youtube"
import Repo from "../../app/blog/[slug]/CustomComponents/Repo"
import { H1, H2 } from "../../app/blog/[slug]/CustomComponents/Headings"

const MarkdownRenderer = ({ source }: { source: MDXRemoteSerializeResult }) => {
  return (
    <MDXRemote
      {...source}
      components={{ YouTube, Youtube: YouTube, Repo, h1: H1, h2: H2 }}
    />
  )
}

export default MarkdownRenderer
