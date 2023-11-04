"use server"

import { prisma } from "@/tools/db"
import { BASE_URL } from "@/tools/url"
import { BlogPost } from "@prisma/client"

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
  if (process.env.NODE_ENV === "development") {
    init = { cache: "no-store" }
  }

  const response = await fetch(`${BASE_URL}/api/blog/public/${slug}`, init)
  const data = await response.json()
  return data.data
}

export const getAllBlogs = async (init?: RequestInit): Promise<BlogPost[]> => {
  if (process.env.NODE_ENV === "development") {
    init = { cache: "no-store" }
  }

  const response = await fetch(`${BASE_URL}/api/blog/public`, init)
  const data = await response.json()
  return data
}
