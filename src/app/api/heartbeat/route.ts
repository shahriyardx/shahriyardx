import { type NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export const GET = async (req: NextRequest, res: NextResponse) => {
	return NextResponse.json({ ok: true })
}
