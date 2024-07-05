import { directus_client } from "@/tools/directus"
import { readItems } from "@directus/sdk"
import { redirect } from "next/navigation"

import type { NextRequest } from "next/server"

export async function GET(
	_req: NextRequest,
	{ params }: { params: { slug: string } },
) {
	const data = await directus_client.request(
		readItems("link", {
			filter: {
				slug: {
					_eq: params.slug,
				},
			},
		}),
	)

	if (data.length < 0) return redirect("/")
	return redirect(data[0].url)
}
