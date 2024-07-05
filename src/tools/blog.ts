"use server"

import { prisma } from "@/tools/db"
import { directus_client } from "@/tools/directus"
import { readItems } from "@directus/sdk"

export const prismaGetAllBlogs = async () => {
	return await prisma.blogPost.findMany()
}

export const prismaGetAllLinks = async () => {
	return await prisma.link.findMany()
}

export interface BlogCategory {
	name: string
	slug: string
	date_created: string
}

export interface BlogPost {
	title: string
	slug: string
	content: string
	meta_description: string
	date_created: string
	categories: Array<{
		category_id: BlogCategory
	}>
}

export const getBlogBySlug = async (slug: string): Promise<BlogPost | null> => {
	const response = await directus_client.request<BlogPost[]>(
		readItems("blog", {
			fields: [
				"title",
				"slug",
				"content",
				"meta_description",
				"date_created",
				"categories.category_id.name",
			],
			filter: {
				status: "published",
				slug: { _eq: slug },
			},
		}),
	)

	if (response.length < 0) return null
	return response[0]
}

export const getAllBlogs = async (): Promise<BlogPost[]> => {
	const response = await directus_client.request<BlogPost[]>(
		readItems("blog", {
			fields: [
				"title",
				"slug",
				"content",
				"meta_description",
				"date_created",
				"categories.category_id.name",
			],
			filter: {
				status: "published",
			},
		}),
	)

	return response
}
