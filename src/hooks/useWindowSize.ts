"use client"

import { Breakpoint } from "@/tools/breakpoint"
import { useEffect, useState } from "react"

type WindowResizeEvent = UIEvent & {
  target: Window & {
    innerWidth: number
    innerHeight: number
  }
}

const useWindowSize = () => {
  const [size, setSize] = useState(new Breakpoint(0))

  useEffect(() => {
    window.addEventListener("resize", (event: Event) => {
      const customEvent = event as WindowResizeEvent
      setSize(new Breakpoint(customEvent.target.innerWidth))
    })
  }, [])

  return size
}

export default useWindowSize
