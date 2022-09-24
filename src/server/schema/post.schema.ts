import { z } from "zod"

export const postSchema = z.object({
  title: z.string(),
  slug: z.string(),
  meta_description: z.string().optional(),
  thumbnail: z.string().optional(),
  content: z.string(),
  categoryId: z.string(),
})

export const postUpdateSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  meta_description: z.string().optional(),
  thumbnail: z.string().optional(),
  content: z.string(),
  categoryId: z.string(),
})
