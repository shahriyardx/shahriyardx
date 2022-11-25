import React, { useState } from "react"
import GitHeader from "components/github/GitHeader"
import Container from "components/shared/Container"
import Repo, { type RepoType } from "components/github/Repo"
import GitProfile from "components/github/GitProfile"
import { motion, AnimatePresence } from "framer-motion"
import { debounce } from "lodash"
import SEO from "components/shared/SEO"
import GitFilter from "components/github/GitFilter"

export type User = {
  avatar_url: string
  description: string
  name: string
  bio: string
  followers: number
  public_repos: number
  login: string
}

type Props = {
  user: User
  repos: RepoType[]
}

const Github = ({ repos, user }: Props) => {
  const [query, setQuery] = useState("")
  const [language, setLanguage] = useState<string | null>(null)
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

  return (
    <div>
      <SEO
        title="GitHub - Md Shahriyar Alam"
        description={user.description}
        image="/images/git.png"
      />
      <GitHeader />
      <GitProfile user={user} />
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
    </div>
  )
}

export default Github

export const getStaticProps = async () => {
  const repos = await fetch(
    "https://api.github.com/users/shahriyardx/repos?per_page=100"
  ).then((response) => response.json())

  const user = await fetch("https://api.github.com/users/shahriyardx").then(
    (response) => response.json()
  )

  return {
    props: {
      repos,
      user,
    },
    revalidate: 600,
  }
}
