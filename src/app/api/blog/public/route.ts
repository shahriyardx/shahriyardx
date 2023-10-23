import { prisma } from "@/tools/db"
import { NextResponse, NextRequest } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (req: NextRequest, res: NextResponse) => {
  const response = await prisma.blogPost.findMany({ orderBy: { time: 'desc' }})
  return NextResponse.json(response)
}
