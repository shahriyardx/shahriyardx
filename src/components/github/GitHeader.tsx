"use client"

import React from "react"

import { useRouter } from "next/navigation"
import { BiChevronLeft, BiLinkExternal } from "react-icons/bi"

import Container from "@/components/shared/Container"

const GitHeader = () => {
  const router = useRouter()

  return (
    <div className="h-10 bg-zinc-700 text-white">
      <Container className="flex justify-between items-center h-full">
        <button className="flex items-cente" onClick={() => router.push("/")}>
          <BiChevronLeft className="text-2xl" />
          <span>Go Home</span>
        </button>

        <a
          href="https://github.com/shahriyardx"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2"
        >
          <span>GitHub</span>
          <BiLinkExternal />
        </a>
      </Container>
    </div>
  )
}

export default GitHeader
