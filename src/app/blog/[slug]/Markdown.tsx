"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import React from "react"

const Markdown = ({ source }: { source: MDXRemoteSerializeResult }) => {
  return <MDXRemote {...source} />
}

export default Markdown
