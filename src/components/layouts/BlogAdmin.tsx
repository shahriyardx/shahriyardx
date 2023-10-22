import React from "react"
import Container from "../shared/Container"
import Link from "next/link"

type Props = {
  children: React.ReactNode
}

const BlogAdmin = ({ children }: Props) => {
  return (
    <div>
      <header className="bg-zinc-800">
        <Container>
          <div className="p-5 flex justify-between items-center">
            <h4 className="text-4xl font-bold">Blog</h4>
            <nav>
              <div className="flex items-center gap-3">
                <Link href="/">Home</Link>
                <Link href="/blog">Blogs</Link>
                <Link href="/blog/admin">All Blogs</Link>
                <Link href="/blog/admin/create">Create</Link>
              </div>
            </nav>
          </div>
        </Container>
      </header>

      <main>{children}</main>
    </div>
  )
}

export default BlogAdmin
