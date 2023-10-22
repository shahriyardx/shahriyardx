import BlogAdmin from "@/components/layouts/BlogAdmin"
import React from "react"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return <BlogAdmin>{children}</BlogAdmin>
}

export default Layout
