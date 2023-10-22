import { prisma } from "@/tools/db"
import { revalidatePath } from "next/cache"
import { NextResponse, NextRequest } from "next/server"
import slugify from "slugify"

export const PUT = async (
  req: NextRequest,
  { params }: { params: { blogId: string } },
) => {
  const blog = await prisma.blogPost.findUnique({
    where: { id: params.blogId },
  })

  if (!blog) {
    return NextResponse.json({ success: false, message: "blog not found" })
  }

  const body = await req.json()
  const postdata = {
    ...body,
    slug: slugify(body.title, { lower: true }),
  }

  const res = await prisma.blogPost.update({
    where: { id: params.blogId },
    data: postdata,
  })
  const response = {
    success: res ? true : false,
    data: res,
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${blog.slug}`)
  revalidatePath(`/blog/${slugify(body.title, { lower: true })}`)

  return NextResponse.json(response)
}

export const DELETE = async (
  _req: NextRequest,
  { params }: { params: { blogId: string } },
) => {
  const blog = await prisma.blogPost.findUnique({
    where: { id: params.blogId },
  })

  if (!blog) {
    return NextResponse.json({ success: false, message: "blog not found" })
  }

  const res = await prisma.blogPost.delete({
    where: { id: params.blogId },
  })

  const response = {
    success: res ? true : false,
    data: res,
  }

  revalidatePath("/blog")
  revalidatePath(`/blog/${blog.slug}`)

  return NextResponse.json(response)
}
