import { prisma } from "@/tools/db"
import { BlogPost } from "@prisma/client"

export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const prismaGetAllBlogs = async () => {
  return await prisma.blogPost.findMany()
}

export const prismaGetBlogById = async (
  blogId: string,
): Promise<BlogPost | null> => {
  return await prisma.blogPost.findFirst({ where: { id: blogId } })
}

export const getBlogBySlug = async (
  slug: string,
  init?: RequestInit,
): Promise<BlogPost | null> => {
  const response = await fetch(`${BASE_URL}/api/blog/public/${slug}`, init)
  const data = await response.json()
  return data.data
}

export const getAllBlogs = async (init?: RequestInit): Promise<BlogPost[]> => {
  const response = await fetch(`${BASE_URL}/api/blog/public`, init)
  const data = await response.json()
  return data
}
