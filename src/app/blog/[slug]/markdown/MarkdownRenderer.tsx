"use client"

import React from "react"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"

// Custom components
import YouTube from "../CustomComponents/Youtube"
import Repo from "../CustomComponents/Repo"
import { H1, H2 } from "../CustomComponents/Headings"
import Link from "../CustomComponents/Link"

const MarkdownRenderer = ({ source }: { source: MDXRemoteSerializeResult }) => {
  return (
    <MDXRemote
      {...source}
      components={{ YouTube, Youtube: YouTube, Repo, h1: H1, h2: H2, a: Link }}
    />
  )
}

export default MarkdownRenderer
