import { prisma } from "@/tools/db"
import { NextResponse, NextRequest } from "next/server"
import slugify from "slugify"

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json()
  const postdata = {
    ...body,
    slug: slugify(body.title, { lower: true }),
    time: Date.now().toString(),
  }

  const result = await prisma.blogPost.create({ data: postdata })
  const response = {
    success: result ? true : false,
    data: result
  }
  return NextResponse.json(response)
}
