import { createDirectus, rest, staticToken } from "@directus/sdk"

export const directus_client = createDirectus("https://directus.shahriyar.dev")
	.with(staticToken(process.env.DIRECTUS_ACCESS_TOKEN as string))
	.with(
		rest({
			onRequest: (options) => ({ ...options, next: { revalidate: 60 } }),
		}),
	)
