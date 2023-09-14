import { type NextResponse } from "next/server";

import { LRUCache } from "lru-cache";

const rateLimit = () => {
  const tokenCache = new LRUCache({
    max: 500,
    ttl: 60 * 1000,
  });

  return {
    check: (res: NextResponse, limit: number, token: string) =>
      new Promise((resolve, reject) => {
        const tokenCount: Array<number> = tokenCache.get(token) as number[] || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = Number(tokenCount[0]) | 0;
        const isRateLimited = currentUsage >= limit;
        return isRateLimited ? reject() : resolve(0);
      }),
  };
};

export default rateLimit;
