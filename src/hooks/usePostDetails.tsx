import { UseTRPCQueryOptions } from "@trpc/react"
import { trpc } from "utils/trpc"

export const usePostDetails = (postId: string, dontRefetch: boolean) => {
  const { data, isLoading, refetch } = trpc.useQuery(
    [
      "post.byId",
      {
        postId: postId,
      },
    ],
    {
      refetchOnWindowFocus: dontRefetch,
    }
  )

  return { post: data, isLoading, refetch }
}
