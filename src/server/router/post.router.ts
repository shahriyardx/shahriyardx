import { createRouter } from "server/context"
import { postSchema, postUpdateSchema } from "server/schema/post.schema"
import { z } from "zod"

export const postRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.post.findMany({
        include: {
          category: true,
        },
      })
    },
  })
  .query("byId", {
    input: z.object({
      postId: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      return await ctx.prisma.post.findUnique({
        where: {
          id: input.postId,
        },
        include: {
          category: true,
        },
      })
    },
  })
  .mutation("create", {
    input: postSchema,
    async resolve({ ctx, input }) {
      const data = await ctx.prisma.post.create({
        data: input,
      })

      await ctx.res.revalidate(`/blog/${data.slug}`)
    },
  })
  .mutation("update", {
    input: postUpdateSchema,
    async resolve({ ctx, input }) {
      const { id, ...data } = input

      const post = await ctx.prisma.post.findUnique({
        where: { id },
      })

      if (post) {
        await ctx.prisma.post.update({
          where: {
            id: id,
          },
          data: {
            ...data,
            thumbnail: data.thumbnail || null,
          },
        })

        await ctx.res.revalidate(`/blog/${post.slug}`)
        await ctx.res.revalidate(`/blog/${data.slug}`)
      }
    },
  })
  .mutation("delById", {
    input: z.object({
      postId: z.string().cuid(),
    }),
    async resolve({ ctx, input }) {
      await ctx.prisma.post.delete({
        where: {
          id: input.postId,
        },
      })
    },
  })
