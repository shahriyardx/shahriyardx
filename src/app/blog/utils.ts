import { prisma } from "@/tools/db"
import { BlogPost } from "@prisma/client"

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const getAllBlogs = async (
  init: RequestInit = { next: { revalidate: 60 } },
): Promise<BlogPost[]> => {
  const response = await fetch(`${BASE_URL}/api/blog/public`, init)
  const data = await response.json()

  return data
}

export const getAllBlogsServer = async () => {
  return await prisma.blogPost.findMany()
}

export const getBlogById = async (
  blogId: string,
  init: RequestInit = { next: { revalidate: 60 } },
): Promise<BlogPost | null> => {
  const response = await fetch(`${BASE_URL}/api/blog/${blogId}`, init)
  const data = await response.json()

  return data.data
}

export const getBlogBySlug = async (
    slug: string,
    init: RequestInit = { next: { revalidate: 60 } },
  ): Promise<BlogPost | null> => {
    const response = await fetch(`${BASE_URL}/api/blog/public/${slug}`, init)
    const data = await response.json()
    return data.data
  }
  