import { NextResponse, NextRequest } from "next/server"
import { createTransport } from "nodemailer"
import { type MailOptions } from "nodemailer/lib/smtp-transport"
import rateLimit from "@/tools/rateLimiter"

const limiter = rateLimit()

const transport = createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
})

const sendMail = async (message: MailOptions) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(message, (error, info) => {
      if (error) {
        console.log(`Error ${error}`)
        reject(false)
      } else {
        console.log(`Email sent ${info.response}`)
        resolve(true)
      }
    })
  })
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    await limiter.check(res, 2, process.env.CACHE_TOKEN as string)
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "You are sending mails too frrequently.",
      },
      { status: 429 },
    )
  }

  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method not allowed" })
  }
  const { name, email, subject, text } = (await req.json()) as {
    name: string
    email: string
    subject: string
    text: string
  }

  const message = {
    from: `${name} <${process.env.MAIL_USER}>`,
    replyTo: email,
    to: "contact@shahriyar.dev",
    bcc: "mdshahriyaralam9@gmail.com",
    subject,
    text,
  }

  const sent = await sendMail(message)

  if (sent) {
    return NextResponse.json({
      success: true,
      message: "Mail sent successfully",
    })
  } else {
    return NextResponse.json({
      success: false,
      message: "Unable to send mail. Please try again",
    })
  }
}
