"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import React from "react"
import YouTube from "./CustomComponents/Youtube"
import Repo from "./CustomComponents/Repo"

const Markdown = ({ source }: { source: MDXRemoteSerializeResult }) => {
  return (
    <MDXRemote {...source} components={{ YouTube, Youtube: YouTube, Repo }} />
  )
}

export default Markdown
