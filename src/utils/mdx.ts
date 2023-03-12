import { sync } from "glob"

export const getSlugsFromPath = (path: string): Array<string> => {
    const paths = sync(`${path}/*.mdx`)

    return paths.map(path => {
        const parts = path.split("/")
        const filename = parts[parts.length - 1] as string
        const slug = filename.split(".")[0]

        return slug
    }) as []
}