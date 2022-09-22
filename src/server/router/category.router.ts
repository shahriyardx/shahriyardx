import { createRouter } from "server/context"

export const categoryRouter = createRouter().query("all", {
  async resolve({ ctx }) {
    return await ctx.prisma.category.findMany()
  },
})
