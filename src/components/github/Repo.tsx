import { motion } from "framer-motion"
import React from "react"
import { BiBookBookmark, BiGitRepoForked, BiStar } from "react-icons/bi"

const colorMap: { [key: string]: string } = {
	CSS: "#186CAB",
	HTML: "#E44D26",
	Python: "#35699B",
	TypeScript: "#35699B",
	JavaScript: "#F2C01C",
	SCSS: "#C45F92",
}

export type RepoType = {
	id: string
	name: string
	description: string
	html_url: string
	language: string
	stargazers_count: number
	forks_count: string
}

type Props = {
	repo: RepoType
}

const Repo = ({ repo }: Props) => {
	const {
		name,
		html_url,
		description,
		language,
		stargazers_count: stars,
		forks_count: forks,
	} = repo

	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="p-4 border-[2px] border-zinc-800 rounded-md text-base flex flex-col"
		>
			<p className="flex items-center gap-2 text-zinc-400">
				<BiBookBookmark className="text-xl" />
				<a
					href={html_url}
					target="_blank"
					rel="noreferrer"
					className="text-zinc-400 font-bold hover:text-blue-300 hover:underline underline-offset-2"
				>
					{name}
				</a>
			</p>
			<p className="text-zinc-400 text-sm mt-2 font-montserrat">
				{description}
			</p>

			<div className="flex flex-wrap items-center gap-5 pt-5 mt-auto">
				<div className="flex gap-2 items-center">
					<div
						className="w-4 h-4 rounded-full"
						style={{ backgroundColor: colorMap[language] || "white" }}
					></div>
					<span className="text-zinc-300">{language}</span>
				</div>

				<div className="flex items-center gap-2">
					<BiStar className="text-zinc-400" />
					<span className="text-zinc-300">{stars}</span>
				</div>

				<div className="flex items-center gap-2">
					<BiGitRepoForked className="text-zinc-400" />
					<span className="text-zinc-300">{forks}</span>
				</div>
			</div>
		</motion.div>
	)
}

export default Repo
