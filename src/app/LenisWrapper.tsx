"use client"

import { ReactLenis } from "lenis/react"
import type React from "react"

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
	return <ReactLenis root>{children}</ReactLenis>
}

export default LenisWrapper
