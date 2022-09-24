import { TRPCError } from "@trpc/server"
import { createRouter } from "server/context"
import { z } from "zod"

export const categoryRouter = createRouter()
  .query("all", {
    async resolve({ ctx }) {
      return await ctx.prisma.category.findMany({
        include: {
          Posts: {
            select: {
              id: true,
            },
          },
        },
      })
    },
  })
  .mutation("create", {
    input: z.object({
      name: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!input.name.trim()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "name is required",
        })
      }
      await ctx.prisma.category.create({
        data: {
          name: input.name.trim(),
        },
      })
    },
  })
  .mutation("update", {
    input: z.object({
      name: z.string(),
      id: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!input.name.trim()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "name is required",
        })
      }

      await ctx.prisma.category.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name.trim(),
        },
      })
    },
  })
  .mutation("delById", {
    input: z.object({
      catId: z.string(),
    }),
    async resolve({ ctx, input }) {
      await ctx.prisma.category.delete({
        where: {
          id: input.catId,
        },
      })
    },
  })
