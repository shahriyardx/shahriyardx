import { prisma } from "@/tools/db"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library"
import { NextResponse, NextRequest } from "next/server"

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json()
  try {
    const result = await prisma.subscriber.create({
      data: {
        email: body.email,
      },
    })
    return NextResponse.json({ success: true, subbed: true, data: result })
  } catch (err) {
    if (err instanceof PrismaClientKnownRequestError && err.code == "P2002") {
      return NextResponse.json({
        success: false,
        message: "You are already subscribed",
        subbed: true,
        err,
      })
    }

    return NextResponse.json({
      success: false,
      subbed: false,
      message: "Unable to subscribe. Please try again",
      err,
    })
  }
}
