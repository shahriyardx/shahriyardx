import { getAllBlogsSlug } from "@/tools/blog"
import type { MetadataRoute } from "next"

type ChangeFrequency =
	| "daily"
	| "weekly"
	| "yearly"
	| "always"
	| "hourly"
	| "daily"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const url = process.env.NEXT_PUBLIC_SITE_URL as string
	const posts = await getAllBlogsSlug()
	const static_pages = ["blog", "contact", "github"].map((page) => ({
		url: `${url}/${page}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as ChangeFrequency,
		priority: 0.8,
	}))

	const blog_pages = posts.map((post) => ({
		url: `${url}/blog/${post.slug}`,
		lastModified: post.date_updated,
		changeFrequency: "weekly" as ChangeFrequency,
		priority: 0.6,
	}))

	return [
		{
			url: url,
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		...static_pages,
		...blog_pages,
	]
}
