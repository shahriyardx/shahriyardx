import { trpc } from "utils/trpc"

export const usePostDetails = (postId: string) => {
  const { data, isLoading, refetch } = trpc.useQuery([
    "post.byId",
    {
      postId: postId,
    },
  ])

  return { post: data, isLoading, refetch }
}
