import React from "react"
import Image from "next/image"
import Container from "@/components/shared/Container"
import { BiUser, BiBookBookmark } from "react-icons/bi"

type User = {
  avatar_url: string
  name: string
  bio: string
  followers: number
  public_repos: number
  login: string
}

const GitProfile = ({ user }: { user: User }) => {
  return (
    <div className="py-5">
      <Container className="flex flex-col sm:flex-row items-center gap-5">
        <div className="w-40 aspect-square">
          <Image
            src={user.avatar_url}
            width={150}
            height={150}
            layout="responsive"
            alt="shahriyar"
            className="object-cover rounded-full"
          />
        </div>

        <div>
          <h1 className="sm:text-2xl md:text-3xl text-zinc-200 flex items-center">
            <span>{user.name}</span>
            <span className="ml-2 text-xs sm:text-sm text-zinc-500">
              {user.login}
            </span>
          </h1>
          <p className="text-zinc-400 text-sm sm:text-lg">{user.bio}</p>

          <div className="flex items-center gap-5 text-zinc-300 mt-5">
            <div className="flex items-center gap-2">
              <BiUser className="text-xl" />
              <span className="text-zinc-400 text-xs sm:text-sm">
                {user.followers} Followers
              </span>
            </div>

            <div className="flex items-center gap-2">
              <BiBookBookmark className="text-xl" />
              <span className="text-zinc-400 text-xs sm:text-sm">
                {user.public_repos} Repositories
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default GitProfile
