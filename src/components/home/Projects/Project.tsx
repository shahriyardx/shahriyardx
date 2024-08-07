"use client"

import useWindowSize from "@/hooks/useWindowSize"
import breakpoints from "@/tools/breakpoint"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import React, { useState } from "react"
import { BiChevronDown, BiChevronRight, BiLink } from "react-icons/bi"

type Props = {
	title: string
	image: string
	description: string
	url?: string
	features: Array<string>
	repo?: {
		front?: string
		back?: string
	}
	open?: boolean
}

const Project = ({ title, description, features, url, image, open }: Props) => {
	const [expanded, setExpanded] = useState(open || false)
	const size = useWindowSize()

	const defaultTransition = {
		type: "spring",
		stiffness: 50,
		damping: 10,
	}

	return (
		<div className="select-none overflow-hidden">
			<div
				onClick={() => setExpanded(!expanded)}
				className="cursor-pointer flex items-center justify-between border-b border-b-zinc-700 p-5 rounded-md hover:bg-zinc-800"
			>
				<h3 className="text-2xl font-bold">{title}</h3>
				<BiChevronDown className="text-2xl" />
			</div>

			<AnimatePresence>
				{expanded && (
					<motion.div
						initial={{ height: 0 }}
						animate={{ height: "max-content" }}
						exit={{ height: 0, opacity: 0 }}
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5">
							<motion.div
								initial={{ x: size < breakpoints.MD ? 50 : -50, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ ...defaultTransition }}
							>
								<Image
									width={1600}
									height={900}
									src={image}
									alt={title}
									className="rounded-md shadow-lg aspect-video object-cover"
								/>
							</motion.div>

							<div>
								<motion.h2
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ ...defaultTransition, delay: 0.1 }}
									className="text-3xl font-bold mb-3 mt-2"
								>
									{title}
								</motion.h2>
								<motion.p
									initial={{ x: 50, opacity: 0 }}
									animate={{ x: 0, opacity: 1 }}
									transition={{ ...defaultTransition, delay: 0.2 }}
									className="text-zinc-400"
								>
									{description}
								</motion.p>

								<ul className="mt-5">
									{features.map((feature, index) => (
										<motion.li
											initial={{ x: 50, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{
												...defaultTransition,
												delay: 0.2 + 0.1 * index,
											}}
											className="flex items-center gap-2"
											key={index}
										>
											<span className="text-green-500 text-lg">
												<BiChevronRight />
											</span>
											{feature}
										</motion.li>
									))}
								</ul>
								<div className="flex items-center flex-wrap mt-5">
									<motion.a
										href={url}
										initial={{ x: 50, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{
											...defaultTransition,
											delay: 0.2 + features.length * 0.1 + 0.1,
										}}
										className="flex items-center gap-3 text-lg"
									>
										<BiLink />
										<span>Live Site</span>
									</motion.a>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

export default Project
