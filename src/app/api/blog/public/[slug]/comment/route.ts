import { prisma } from "@/tools/db"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const post = await prisma.blogPost.findFirst({ where: { slug: params.slug } })
  if (!post) {
    return NextResponse.json({ comments: [] })
  }
  const comments = await prisma.comment.findMany({
    where: { postId: post.id },
    orderBy: {
      createdAt: "desc",
    },
  })

  return NextResponse.json(comments)
}
