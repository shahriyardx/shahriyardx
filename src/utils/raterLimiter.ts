import { NextApiResponse } from "next"

import LRU from "lru-cache"

const rateLimit = () => {
  const tokenCache = new LRU({
    max: 500,
    maxAge: 60 * 1000,
  })

  return {
    check: (res: NextApiResponse, limit: number, token: string) =>
      new Promise((resolve, reject) => {
        const tokenCount: any = tokenCache.get(token) || [0]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        tokenCount[0] += 1

        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= limit
        res.setHeader("X-RateLimit-Limit", limit)
        res.setHeader(
          "X-RateLimit-Remaining",
          isRateLimited ? 0 : limit - currentUsage
        )

        return isRateLimited ? reject() : resolve(0)
      }),
  }
}

export default rateLimit
