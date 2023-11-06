import { prisma } from "@/tools/db"
import { NextResponse, NextRequest } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions"

export const POST = async (
  req: NextRequest,
  { params }: { params: { blogId: string } }
) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ success: false, message: "unauthenticated" })
  }

  const blog = await prisma.blogPost.findUnique({
    where: { id: params.blogId },
  })

  if (!blog) {
    return NextResponse.json({ success: false, message: "blog not found" })
  }

  const body = await req.json()
  const commentData = {
    ...body,
    username: session.user.username,
    postId: blog.id,
  }

  const res = await prisma.comment.create({
    data: commentData,
  })

  const response = {
    success: res ? true : false,
    data: res,
  }

  return NextResponse.json(response)
}
