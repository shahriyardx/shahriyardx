"use server"

export interface BlogCategory {
	id: string
	name: string
	slug: string
}

export interface BlogPost {
	title: string
	slug: string
	content: string
	description: string
	createdAt: string
	updatedAt: string
	categories: Array<string>
}

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
	const response = await fetch(
		`https://admin.shahriyar.dev/api/portfolio/blog/${slug}`,
	)
	const data = await response.json()
	return data
}

export const getAllBlogs = async (): Promise<BlogPost[]> => {
	const response = await fetch("https://admin.shahriyar.dev/api/portfolio/blog")
	const data = await response.json()
	return data
}

export const getAllBlogsSlug = async (): Promise<{ slug: string }[]> => {
	const response = await fetch("https://admin.shahriyar.dev/api/portfolio/blog")
	const data = (await response.json()) as BlogPost[]

	return data.map((blog) => ({ slug: blog.slug }))
}
