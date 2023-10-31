import { NextResponse, NextRequest } from "next/server"
import { Resend } from "resend"
import { Email } from "@/app/admin/email/page"
import PH from "@/email/ph"

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = (await req.json()) as Email

  const sender =
    body.mode === "test"
      ? "onboarding@resend.dev"
      : `${body.from}@shahriyar.dev`

  const receiver =
    body.mode === "test"
      ? ["mdshahriyaralam552@gmail.com"]
      : body.to.split(",").map((e) => e.trim())

  const subject = body.subject || "(No Subject)"

  try {
    const data = await resend.emails.send({
      from: `Md Shahriyar Alam <${sender}>`,
      to: receiver,
      subject: subject,
      react: PH({ content: body.content }),
    })

    return NextResponse.json({
      success: true,
      message: "Mail sent successfully",
      data,
    })
  } catch (err) {
    console.log(err)
    return NextResponse.json({
      success: false,
      message: "Unable to send mail. Please try again",
      err,
    })
  }
}
