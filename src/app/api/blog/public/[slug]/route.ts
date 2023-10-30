import { prisma } from "@/tools/db"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (
  _req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  const blog = await prisma.blogPost.findUnique({
    where: { slug: params.slug, status: { in: ["published", "unlisted"] } },
  })

  const response = {
    success: blog ? true : false,
    data: blog,
  }

  return NextResponse.json(response)
}
