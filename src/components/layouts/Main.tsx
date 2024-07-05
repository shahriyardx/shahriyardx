import Footer from "@/components/shared/Footer"
import Header from "@/components/shared/Header/Header"
import type React from "react"

const Main = ({
	children,
}: {
	children: React.ReactNode | React.ReactNode[]
}) => {
	return (
		<div>
			<Header />
			<div className="min-h-[75vh] bg-zinc-800">{children}</div>
			<Footer />
		</div>
	)
}

export default Main
