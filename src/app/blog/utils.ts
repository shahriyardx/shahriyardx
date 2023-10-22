export const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export type BlogData = {
  id: string
  title: string
  description: string
  content: string
  date: string
  category: string
}

export const getAllBlogs = async (
  init: RequestInit = { next: { revalidate: 60 } }
): Promise<BlogData[]> => {
  const response = await fetch(`${BASE_URL}/api/blog/public`, init)
  const data = await response.json()

  return data
}

export const getBlogById = async (
    blogId: string,
    init: RequestInit = { next: { revalidate: 60 } }
  ): Promise<BlogData | null> => {
    const response = await fetch(`${BASE_URL}/api/blog/${blogId}`, init)
    const data = await response.json()
  
    return data.data
  }
  
