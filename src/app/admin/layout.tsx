"use client"

import React from "react"
import Sidebar from "./components/sidebar/Sidebar"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

type Props = {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  const router = useRouter()
  
  useSession({
    required: true,
    onUnauthenticated: () => router.push("/api/auth/signin"),
  })

  return (
    <div className="grid grid-cols-[300px,auto]">
      <Sidebar />
      <main className="bg-zinc-800">{children}</main>
    </div>
  )
}

export default BlogLayout
