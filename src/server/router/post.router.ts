import { createRouter } from "server/context"
import { z } from "zod"

export const postRouter = createRouter().mutation("create", {
  input: z.object({
    title: z.string(),
    slug: z.string(),
    meta_description: z.string().optional(),
    thumbnail: z.string().optional(),
    content: z.string(),
    categoryId: z.string(),
  }),
  async resolve({ ctx, input }) {
    await ctx.prisma.post.create({
      data: input,
    })
  },
})
