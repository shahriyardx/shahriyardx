import { TRPCError } from "@trpc/server";
import { router, publicProcedure, adminProcedure } from "../trpc";
import { z } from "zod";

export const categoryRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.category.findMany({
      include: {
        Posts: {
          select: {
            id: true,
          },
        },
      },
    });
  }),
  create: adminProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      if (!input.name.trim()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "name is required",
        });
      }
      await ctx.prisma.category.create({
        data: {
          name: input.name.trim(),
        },
      });
    }),
  update: adminProcedure
    .input(
      z.object({
        name: z.string(),
        id: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (!input.name.trim()) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "name is required",
        });
      }

      await ctx.prisma.category.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name.trim(),
        },
      });
    }),
  delById: adminProcedure
    .input(z.object({ catId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.category.delete({
        where: {
          id: input.catId,
        },
      });
    }),
});