"use client"

import React, { useEffect, useState } from "react"
import GitHeader from "@/components/github/GitHeader"
import Container from "@/components/shared/Container"
import Repo, { type RepoType } from "@/components/github/Repo"
import GitProfile from "@/components/github/GitProfile"
import { motion, AnimatePresence } from "framer-motion"
import { debounce } from "lodash"
import GitFilter from "@/components/github/GitFilter"

export type User = {
	avatar_url: string
	description: string
	name: string
	bio: string
	followers: number
	public_repos: number
	login: string
}

const Github = () => {
	const [query, setQuery] = useState("")
	const [language, setLanguage] = useState<string | null>(null)

	const [user, setUser] = useState<User | null>(null)
	const [repos, setRepos] = useState<RepoType[]>([])
	const languages = new Set(repos.map((repo) => repo.language))

	const sorted = repos.sort((a, b) => b.stargazers_count - a.stargazers_count)
	const filtered = language
		? sorted.filter((repo) => repo.language === language)
		: sorted

	const searched = query.trim()
		? filtered.filter((repo) => repo.name.includes(query))
		: filtered

	const setFilter = (lang: string | null) => {
		setLanguage(lang)
	}

	const updateQuery = debounce((e) => {
		setQuery(e.target.value)
	}, 500)

	useEffect(() => {
		fetch("https://api.github.com/users/shahriyardx/repos?per_page=100")
			.then((response) => response.json())
			.then((data) => setRepos(data))

		fetch("https://api.github.com/users/shahriyardx")
			.then((response) => response.json())
			.then((data) => setUser(data))
	}, [])

	return (
		<div>
			<GitHeader />
			{user && <GitProfile user={user} />}

			{repos.length > 0 && (
				<Container className="pt-10 pb-20">
					<GitFilter
						language={language}
						languages={languages}
						setFilter={setFilter}
						updateQuery={updateQuery}
					/>
					<motion.div
						layout
						className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
					>
						<AnimatePresence>
							{searched.map((repo) => (
								<Repo key={repo.id} repo={repo} />
							))}
						</AnimatePresence>
					</motion.div>

					{!searched.length && (
						<h1 className="text-2xl font-bold text-zinc-300">
							No repositories found
						</h1>
					)}
				</Container>
			)}
		</div>
	)
}

export default Github
