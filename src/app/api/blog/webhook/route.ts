import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
	revalidatePath("/blog")
	revalidatePath("/blog/[slug]")

	return NextResponse.json({ success: true })
}
