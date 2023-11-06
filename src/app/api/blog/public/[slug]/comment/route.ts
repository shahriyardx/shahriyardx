import { prisma } from "@/tools/db"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (
    req: NextRequest,
    { params }: { params: { blogId: string } }
  ) => {
    const comments = await prisma.comment.findMany({
      where: { postId: params.blogId },
      orderBy: {
        createdAt: "desc",
      },
    })
  
    return NextResponse.json(comments)
  }