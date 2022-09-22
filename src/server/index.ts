// src/server/router/index.ts
import { createRouter } from "./context"
import superjson from "superjson"
import { categoryRouter } from "./router/category.router"
import { postRouter } from "./router/post.router"

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("category.", categoryRouter)
  .merge("post.", postRouter)

// export type definition of API
export type AppRouter = typeof appRouter
