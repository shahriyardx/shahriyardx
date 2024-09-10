import moment from "moment"
import type { ServerRuntime } from "next"
import { ImageResponse } from "next/og"
import type { NextRequest } from "next/server"

export const runtime: ServerRuntime = "edge"

const regularFont = fetch(
	new URL("./fonts/inter-regular.ttf", import.meta.url),
).then((res) => res.arrayBuffer())

const boldFont = fetch(new URL("./fonts/inter-bold.ttf", import.meta.url)).then(
	(res) => res.arrayBuffer(),
)

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
		new Date(req.nextUrl.searchParams.get("time") as string),
	).fromNow()

	return new ImageResponse(
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
			<p tw="m-0 p-0 text-8xl mb-2 font-bold">{title}</p>
			<p tw="m-0 p-0 text-2xl">{description}</p>
			<div tw="flex items-center flex-wrap mt-auto text-xl">
				<span tw="flex items-center">&#x1F4C5; {postedAt}</span>

				<span tw="flex items-center ml-7">&#128345; {readTime} read</span>
			</div>

			<img
				src="https://shahriyar.dev/_next/image?url=%2Fimages%2Fme.jpg&w=256&q=20"
				width={200}
				height={200}
				alt="me"
				tw="rounded-full absolute bottom-[50px] right-[50px]"
			/>
		</div>,
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
		},
	)
}
