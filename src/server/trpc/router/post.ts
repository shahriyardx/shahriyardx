import { router, publicProcedure, adminProcedure } from "../trpc";
import { z } from "zod";
import { postSchema, postUpdateSchema } from "server/schema/post.schema";

export const postRouter = router({
  all: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({
      include: {
        category: true,
      },
    });
  }),
  byId: publicProcedure
    .input(z.object({ postId: z.string().cuid() }))
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.post.findUnique({
        where: {
          id: input.postId,
        },
        include: {
          category: true,
        },
      });
    }),
  create: adminProcedure.input(postSchema).mutation(async ({ ctx, input }) => {
    const data = await ctx.prisma.post.create({
      data: input,
    });

    await ctx.res.revalidate(`/blog/${data.slug}`);
  }),
  update: adminProcedure
    .input(postUpdateSchema)
    .mutation(async ({ ctx, input }) => {
      const { id, ...data } = input;

      const post = await ctx.prisma.post.findUnique({
        where: { id },
      });

      if (post) {
        await ctx.prisma.post.update({
          where: {
            id: id,
          },
          data: {
            ...data,
            thumbnail: data.thumbnail || null,
          },
        });

        await ctx.res.revalidate(`/blog/${post.slug}`);
        await ctx.res.revalidate(`/blog/${data.slug}`);
      }
    }),
  delById: adminProcedure
    .input(
      z.object({
        postId: z.string().cuid(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.post.delete({
        where: {
          id: input.postId,
        },
      });
    }),
});
