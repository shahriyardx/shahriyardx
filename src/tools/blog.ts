"use server"

import { directus_client } from "@/tools/directus"
import { readItems } from "@directus/sdk"

export interface BlogCategory {
	id: string
	name: string
	slug: string
}

export interface BlogPost {
	title: string
	slug: string
	content: string
	meta_description: string
	date_created: string
	date_updated: string
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
				"categories.category_id.id",
				"categories.category_id.name",
				"categories.category_id.slug",
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

export const getAllBlogsSlug = async (): Promise<BlogPost[]> => {
	const response = await directus_client.request<BlogPost[]>(
		readItems("blog", {
			fields: ["slug", "date_updated"],
			filter: {
				status: "published",
			},
		}),
	)

	return response
}
