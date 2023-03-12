
import path from "path"
import fs from "fs"
import matter from "gray-matter"
import { getSlugsFromPath } from "./mdx"

export const PROJECTS_PATH = path.join(process.cwd(), "src", "content", "projects").replace(/\\/g, '/')

export const getAllProjects = () => {
    const posts = getSlugsFromPath(PROJECTS_PATH)
        .map(slug => getProjectFromSlug(slug))
        .sort((a, b) => {
            if (a.meta.date < b.meta.date) return 1
            if (a.meta.date > b.meta.date) return -1
            return 0
        })

    return posts
}

export interface Project {
    content: string
    meta: ProjectMeta
}

export interface ProjectMeta {
    description: string
    slug: string
    title: string
    date: string
    tags: Array<string>
}

export const getProjectFromSlug = (slug: string): Project => {
    const postPath = path.join(PROJECTS_PATH, `${slug}.mdx`)
    const source = fs.readFileSync(postPath)

    const { content, data} = matter(source)

    return {
        content,
        meta: {
            title: data.title,
            slug: slug,
            date: data.date.toString(),
            description: data.description,
            tags: data.tags,
        }
    }
}