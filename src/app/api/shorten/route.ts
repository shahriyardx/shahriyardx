import { prisma } from "@/tools/db"
import { NextRequest, NextResponse } from "next/server"

const getRandomTitle = () => {
  let text = ""
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  const charactersLength = characters.length
  let counter = 0
  while (counter < 5) {
    text += characters.charAt(Math.floor(Math.random() * charactersLength))
    counter += 1
  }

  return text
}

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.link.findMany()
  return NextResponse.json(result)
}

export async function POST(req: NextRequest, res: NextResponse) {
  let { url, title } = (await req.json()) as { url: string; title?: string }
  if (!title) title = getRandomTitle()

  const data = await prisma.link.create({
    data: {
      url,
      text: title,
    },
  })

  return NextResponse.json(data)
}