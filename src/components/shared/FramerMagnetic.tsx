"use client"

import { motion } from "framer-motion"
import React, { useRef } from "react"

const FramerMagnetic = ({ children }: { children: React.ReactNode }) => {
	const ref = useRef<HTMLDivElement>(null)
	const [position, setPosition] = React.useState({ x: 0, y: 0 })

	const mouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		if (!ref.current) return

		const { clientX, clientY } = e
		const { width, height, top, left } = ref.current.getBoundingClientRect()

		const x = clientX - (left + width / 2)
		const y = clientY - (top + height / 2)

		setPosition({ x, y })
	}

	const mouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		setPosition({ x: 0, y: 0 })
	}

	return (
		<motion.div
			onMouseLeave={(e) => mouseLeave(e)}
			onMouseMove={mouseMove}
			ref={ref}
			animate={{ x: position.x, y: position.y }}
			transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
		>
			{children}
		</motion.div>
	)
}

export default FramerMagnetic
