import { router } from "../trpc";
import { categoryRouter } from "./category";
import { postRouter } from "./post";

export const appRouter = router({
  category: categoryRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
