import type React from "react"
import Sidebar from "./components/sidebar/Sidebar"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/authOptions"

type Props = {
	children: React.ReactNode
}

const AdminLayout = async ({ children }: Props) => {
	const session = await getServerSession(authOptions)

	if (!session) return redirect("/api/auth/signin")
	if (!session.admin) return redirect("/")

	return (
		<div className="grid grid-cols-[300px,auto]">
			<Sidebar />
			<main className="bg-zinc-800">{children}</main>
		</div>
	)
}

export default AdminLayout
