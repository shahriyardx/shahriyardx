import { prisma } from "@/tools/db"
import { NextResponse, NextRequest } from "next/server"

export const GET = async (
  _req: NextRequest,
  { params }: { params: { slug: string } },
) => {
  const blog = await prisma.blogPost.findUnique({
    where: { slug: params.slug },
  })

  const response = {
    success: blog ? true : false,
    data: blog,
  }

  return NextResponse.json(response)
}
