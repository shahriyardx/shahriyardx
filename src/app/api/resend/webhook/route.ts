import { prisma } from "@/tools/db"
import { NextResponse, type NextRequest } from "next/server"

export async function POST(req: NextRequest, res: NextResponse) {
	const payload = await req.json()

	if (payload.type === "email.bounced") {
		const emails = payload.data.to as string[]

		await prisma.subscriber.deleteMany({
			where: {
				email: { in: emails },
			},
		})
	}

	return NextResponse.json({ success: true })
}
