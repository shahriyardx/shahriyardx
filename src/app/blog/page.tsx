import React from "react"
import { getAllBlogs } from "../../tools/blog"
import Main from "@/components/layouts/Main"
import Container from "@/components/shared/Container"
import Link from "next/link"
import BlogInfo from "./components/BlogInfo"

export const metadata = {
	title: "Blog",
}

const BlogPage = async () => {
	const allBlogs = await getAllBlogs()

	return (
		<Main>
			<Container className="px-5 py-10">
				<h1 className="text-5xl font-bold mb-5 text-white">Blogs</h1>

				<div className="grid grid-cols-1 gap-5">
					<div className="flex flex-col gap-5 order-2 lg:order-1">
						{allBlogs.map((blog) => {
							return (
								<Link href={`/blog/${blog.slug}`} key={blog.slug}>
									<div className="py-5 border-b-2 border-b-zinc-600 group">
										<span className="text-2xl font-bold text-white group-hover:text-green-500 transition-all">
											{blog.title}
										</span>
										<div className="mb-2">
											<span className="text-zinc-500 flex items-center gap-2">
												{blog.categories.map((cat) => (
													<span key={cat.category_id.id}>
														{cat.category_id.name}
													</span>
												))}
											</span>
										</div>
										<p>{blog.meta_description}</p>
										<BlogInfo blog={blog} className="mt-5" />
									</div>
								</Link>
							)
						})}
					</div>
				</div>
			</Container>
		</Main>
	)
}

export default BlogPage
