"use client"

import { ReactLenis } from "@studio-freight/react-lenis"
import React from "react"

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ReactLenis root>{children}</ReactLenis>
}

export default LenisWrapper
