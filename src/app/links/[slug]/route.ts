import { prisma } from "@/tools/db"
import { notFound, redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const link = await prisma.link.findFirst({
    where: {
      text: params.slug,
    },
  })

  if (!link) return redirect("/")
  return redirect(link.url)
}
