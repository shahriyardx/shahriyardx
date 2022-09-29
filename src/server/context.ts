// src/server/router/context.ts
import * as trpc from "@trpc/server"
import * as trpcNext from "@trpc/server/adapters/next"
import { NextApiRequest, NextApiResponse } from "next"
import { Session } from "next-auth"
import { getServerAuthSession } from "./common/getServerAuthSession"
import prisma from "./prisma"

type CreateContextOptions = {
  session: Session | null
  req: NextApiRequest
  res: NextApiResponse
}

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    req: opts.req,
    res: opts.res,
    prisma,
  }
}

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const createContext = async (
  opts: trpcNext.CreateNextContextOptions
) => {
  const { req, res } = opts

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res })

  return await createContextInner({
    session,
    req,
    res,
  })
}

type Context = trpc.inferAsyncReturnType<typeof createContext>

export const createRouter = () => trpc.router<Context>()
