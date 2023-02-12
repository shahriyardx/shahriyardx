import { sync } from "glob"
import path from "path"
import fs from "fs"
import matter from "gray-matter"

const PROJECTS_PATH = path.join(process.cwd(), "src", "projects").replace(/\\/g, '/')

export const getSlugs = (): Array<string> => {
    const paths = sync(`${PROJECTS_PATH}/*.mdx`)

    return paths.map(path => {
        const parts = path.split("/")
        const filename = parts[parts.length - 1] as string
        const slug = filename.split(".")[0]

        return slug
    }) as []
}

export const getAllProjects = () => {
    const posts = getSlugs()
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