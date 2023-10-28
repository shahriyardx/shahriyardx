import { NextResponse, NextRequest } from "next/server"
import { Resend } from "resend"
import PH from "@/email/ph"
import { Email } from "@/app/admin/email/page"

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = (await req.json()) as Email
  const sender =
    body.mode === "test"
      ? "onboarding@resend.dev"
      : `${body.from}@shahriyar.dev`

  try {
    const data = await resend.emails.send({
      from: `Md Shahriyar Alam <${sender}>`,
      to: body.to.split(",").map((e) => e.trim()),
      subject: body.subject,
      react: PH({ content: body.content }),
    })

    return NextResponse.json({
      success: true,
      message: "Mail sent successfully",
      data,
    })
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: "Unable to send mail. Please try again",
      err,
    })
  }
}
