"use client"

import React from "react"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

// Custom components
import YouTube from "./CustomComponents/Youtube"
import Repo from "./CustomComponents/Repo"
import H1 from "./CustomComponents/H1"

const Markdown = ({ source }: { source: MDXRemoteSerializeResult }) => {
  return (
    <MDXRemote
      {...source}
      components={{ YouTube, Youtube: YouTube, Repo, h1: H1 }}
    />
  )
}

export default Markdown
