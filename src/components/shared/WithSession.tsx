"use client"

import { SessionProvider } from "next-auth/react"
import type React from "react"

const WithSession = (Element: React.ComponentType) => {
	return function WrappedComponent(props: Record<string, unknown>) {
		return (
			<SessionProvider>
				<Element {...props} />
			</SessionProvider>
		)
	}
}

export default WithSession
