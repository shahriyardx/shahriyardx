"use client"

import { SessionProvider } from "next-auth/react"
import type React from "react"

interface Props {
	children: React.ReactNode
}

const App = ({ children }: Props) => {
	return <SessionProvider>{children}</SessionProvider>
}

export default App
