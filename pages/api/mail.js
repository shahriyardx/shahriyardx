import { createTransport } from "nodemailer";
import rateLimit from "@/utils/rateLimiter";

const limiter = rateLimit();

const transport = createTransport({
  host: "mail.privateemail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendMail = async (message) => {
  return new Promise((resolve, reject) => {
    transport.sendMail(message, (error, info) => {
      if (error) {
        console.log(`Error ${error}`);
        resolve(false);
      } else {
        console.log(`Email sent ${info.response}`);
        resolve(true);
      }
    });
  });
};

export default async function handler(req, res) {
  try {
    await limiter.check(res, 2, process.env.CACHE_TOKEN);
  } catch {
    return res.status(429).json({
      success: false,
      message: "You are sending mails too frrequently.",
    });
  }

  if (req.method !== "POST") {
    return res.json({ error: "Method not allowed" });
  }
  const { name, email, subject, text } = req.body;
  const message = {
    from: `${name} <${process.env.MAIL_USER}>`,
    replyTo: email,
    to: "contact@shahriyar.dev",
    bcc: "mdshahriyaralam9@gmail.com",
    subject,
    text,
  };

  const sent = await sendMail(message);

  if (sent) {
    res.json({
      success: true,
      message:
        "Mail sent successfully. You will get a reply on your email soon",
    });
  } else {
    res.json({
      success: false,
      message: "Unable to send mail. Please try again",
    });
  }
}
