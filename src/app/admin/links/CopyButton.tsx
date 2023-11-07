"use client"

import { BASE_URL } from "@/tools/url"
import React from "react"
import toast from "react-hot-toast"

const CopyButton = ({ text }: { text: string }) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(`${BASE_URL}/links/${text}`)

        toast.success("link copied top clipboard")
      }}
      className="px-3 py-2 text-sm bg-zinc-900 rounded-md"
    >
      Copy
    </button>
  )
}

export default CopyButton
