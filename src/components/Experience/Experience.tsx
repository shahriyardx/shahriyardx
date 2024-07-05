"use client"

import { cubicBezier, motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

type Props = {
	company: string
	from: string
	to: string
	current?: boolean
	position: string
	responsibilities: string[]
}

const Experience = ({
	company,
	from,
	to,
	current,
	position,
	responsibilities,
}: Props) => {
	const container = useRef(null)
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["0 1", "1.33 1"],
	})

	const x = useTransform(scrollYProgress, [0, 1], [100, 0])
	const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

	return (
		<li className="mb-10 ml-8">
			<span className="absolute flex items-center justify-center w-6 h-6 bg-zinc-700 rounded-full -left-3 ring-8 ring-gray-900">
				<svg
					className="w-2.5 h-2.5 text-white"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
				</svg>
			</span>
			<motion.div
				ref={container}
				style={{ x: x, opacity }}
				className="relative"
			>
				<h3 className="flex items-center mb-1 text-lg font-semibold text-white">
					{company}
					{current && (
						<span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-green-300 text-green-900 ml-3">
							Current
						</span>
					)}
				</h3>
				<span className="flex items-center gap-1 sm:gap-2 mb-2 flex-wrap">
					<span className="text-gray-300">{position}</span>
					<time className="block text-sm font-normal leading-none text-gray-500">
						{from} - {to}
					</time>
				</span>
				<p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
					<ul>
						{responsibilities.map((item, index) => (
							<li key={index}>
								{index + 1}. {item}
							</li>
						))}
					</ul>
				</p>
			</motion.div>
		</li>
	)
}

export default Experience
