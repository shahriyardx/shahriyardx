import { ImageResponse, NextRequest } from "next/server"
import moment from "moment"
 
export const runtime = "edge"

const regularFont = fetch(
  new URL("/public/fonts/inter-regular.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

const boldFont = fetch(
  new URL("/public/fonts/inter-bold.ttf", import.meta.url)
).then((res) => res.arrayBuffer())

export async function GET(req: NextRequest) {
  const [regularFontData, boldFontData] = await Promise.all([
    regularFont,
    boldFont,
  ])

  const title = req.nextUrl.searchParams.get("title")
  const description = req.nextUrl.searchParams.get("description")
  const readTime = moment
    .duration(Number(req.nextUrl.searchParams.get("read")), "minute")
    .humanize()
  const postedAt = moment(
    new Date(Number(req.nextUrl.searchParams.get("time")))
  ).fromNow()

  return new ImageResponse(
    (
      <div
        style={{
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: 50,
          position: "relative",
        }}
      >
        <p tw="m-0 p-0 text-4xl mb-2 font-bold">{title}</p>
        <p tw="m-0 p-0 text-xl">{description}</p>
        <div tw="flex items-center text-xs sm:text-sm flex-wrap mt-auto">
          <span tw="flex items-center">&#x1F4C5; {postedAt}</span>

          <span tw="flex items-center ml-3">&#128345; {readTime} read</span>
        </div>
          {/* eslint-disable-next-line */}
          <img
            src="https://shahriyar.dev/images/me.jpg"
            width={100}
            height={100}
            alt="me"
            tw="rounded-full absolute bottom-[50] right-[50]"
          />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: regularFontData,
          weight: 400,
        },
        {
          name: "Inter",
          data: boldFontData,
          weight: 700,
        },
      ],
    }
  )
}
