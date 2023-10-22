"use client"

import { cn } from "@/tools/tw"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { BiGitRepoForked, BiStar } from "react-icons/bi"
import { RiGitRepositoryLine } from "react-icons/ri"

type GithubRepo = {
  url: string
  name: string
  owner: {
    login: string
    html_url: string
  }
  description: string
  language: string
  stargazers_count: number
  forks_count: number
  message: string
}

const colorMap: { [key: string]: string } = {
  CSS: "#186CAB",
  HTML: "#E44D26",
  Python: "#35699B",
  TypeScript: "#35699B",
  JavaScript: "#F2C01C",
  SCSS: "#C45F92",
}

const Repo = ({ repo, className }: { repo: string; className?: string }) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<GithubRepo>()

  function makeid(length: number) {
    let result = ""
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}`, {
      next: { revalidate: 60 * 60 },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Not Found") {
          setLoading(false)
        } else setData(data)
      })
  }, [repo])
  return (
    <div className={cn("my-5 w-max", className)}>
      {data ? (
        <div className="p-5 border-2 border-zinc-700 rounded-md">
          <div className="flex items-center gap-2">
            <RiGitRepositoryLine />
            <a href={data?.owner.html_url}>
              <span className="text-indigo-400 decoration-indigo-400 underline">
                {data?.owner.login}
              </span>
            </a>
            <span>/</span>
            <a href={data?.url}>
              <span className="text-lg text-indigo-500 decoration-indigo-500 underline">
                {data?.name}
              </span>
            </a>
          </div>
          <p>{data?.description}</p>
          <Image
            src={`https://opengraph.githubassets.com/${makeid(10)}/${repo}`}
            alt="image"
            width={1920}
            height={1080}
            className="w-full rounded-md"
          />
          <div className="flex flex-wrap items-center gap-5">
            <div className="flex gap-2 items-center">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: colorMap[data?.language] || "white" }}
              ></div>
              <span className="text-zinc-300">{data?.language}</span>
            </div>

            <div className="flex items-center gap-2">
              <BiStar className="text-zinc-400" />
              <span className="text-zinc-300">{data?.stargazers_count}</span>
            </div>

            <div className="flex items-center gap-2">
              <BiGitRepoForked className="text-zinc-400" />
              <span className="text-zinc-300">{data?.forks_count}</span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Repo
