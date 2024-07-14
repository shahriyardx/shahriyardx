import { createDirectus, rest, staticToken } from "@directus/sdk"

export const directus_client = createDirectus(
	"https://directus.shahriyar.dev",
).with(
	rest({
		onRequest: (options) => ({ ...options, next: { revalidate: 60 } }),
	}),
)
