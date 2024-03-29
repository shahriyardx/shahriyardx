import { prisma } from "@/tools/db"
import { revalidatePath } from "next/cache"
import { NextResponse, NextRequest } from "next/server"
import slugify from "slugify"
import { authOptions } from "../../auth/[...nextauth]/authOptions"
import { getServerSession } from "next-auth"

export const POST = async (req: NextRequest, res: NextResponse) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    return NextResponse.json({ success: false, message: "unauthenticated" })
  }

  const body = await req.json()
  const postdata = {
    ...body,
    slug: slugify(body.title, { lower: true }),
    time: Date.now().toString(),
  }

  const result = await prisma.blogPost.create({ data: postdata })
  const response = {
    success: result ? true : false,
    data: result,
  }

  revalidatePath("/blog")
  revalidatePath("/blog/admin")
  return NextResponse.json(response)
}
