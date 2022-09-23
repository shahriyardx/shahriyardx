import { createRouter } from "server/context"
import { z } from "zod"

export const categoryRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.category.findMany()
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ ctx, input }) {
      await ctx.prisma.category.create({
        data: input,
      })
    },
  })
